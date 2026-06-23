/* ============================================================================
 * Scene — renderer, cameras, lighting, atmosphere and the bloom pipeline.
 *   • Warm directional "sun" + soft shadows, cool hemisphere fill, distance fog.
 *   • A touch of UnrealBloom on highlights / feedback (solo). Crop Battle renders
 *     two scissor viewports directly (bloom is solo-only) for performance.
 *   • Render layers keep each player's crops/cab in their own half:
 *       layer 0 = shared scenery, layer 1 = player 1, layer 2 = player 2.
 *   • Caps devicePixelRatio, handles resize, and survives WebGL context loss.
 * ========================================================================== */

import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import { CAMERA, RENDER, PALETTE } from "./config.js";
import { clamp, damp } from "./utils.js";

export class SceneManager {
  constructor(canvas) {
    this.canvas = canvas;
    this.contextLost = false;
    this.bloomPulse = 0;
    this.intensity = 0;
    this.mode = "solo";
    this.viewports = null; // null => fullscreen (solo); array => split (battle)
    this._resizeCbs = [];

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: "high-performance",
      stencil: false,
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, RENDER.maxPixelRatio));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = RENDER.exposure;

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(PALETTE.fog, 0.013);

    this.camera = this._makeCamera(1);   // player 1 sees layers 0 + 1
    this.scene.add(this.camera);
    this.baseQuaternion = this.camera.quaternion.clone();
    this.camera2 = null;                 // created lazily for Crop Battle

    this._buildLights();
    this._buildComposer();
    this._bindContextLoss();

    this.resize();
  }

  _makeCamera(playerLayer) {
    const c = new THREE.PerspectiveCamera(CAMERA.fov, 1.6, CAMERA.near, CAMERA.far);
    c.position.set(CAMERA.basePos.x, CAMERA.basePos.y, CAMERA.basePos.z);
    c.lookAt(CAMERA.lookAt.x, CAMERA.lookAt.y, CAMERA.lookAt.z);
    c.layers.enable(playerLayer);        // also sees layer 0 by default
    return c;
  }

  ensureCamera2() {
    if (this.camera2) return this.camera2;
    this.camera2 = this._makeCamera(2);
    this.scene.add(this.camera2);
    return this.camera2;
  }

  _buildLights() {
    const sun = new THREE.DirectionalLight(PALETTE.sun, 2.7);
    sun.position.set(-20, 28, 10);
    sun.target.position.set(0, 0, -8);
    sun.castShadow = true;
    sun.layers.enable(1);                // so player-1 crops cast shadows (solo)
    sun.shadow.mapSize.set(1024, 1024);  // soft low-poly shadows; cheap for kiosks
    const cam = sun.shadow.camera;
    cam.near = 1; cam.far = 80;
    cam.left = -12; cam.right = 12; cam.top = 14; cam.bottom = -10;
    sun.shadow.bias = -0.0006;
    sun.shadow.normalBias = 0.025;
    cam.updateProjectionMatrix();
    this.scene.add(sun, sun.target);
    this.sun = sun;

    const hemi = new THREE.HemisphereLight(0xbcd9ff, PALETTE.soilBase, 0.8);
    this.scene.add(hemi);

    const amb = new THREE.AmbientLight(0xffffff, 0.18);
    this.scene.add(amb);
  }

  _buildComposer() {
    if (this.composer) {
      try { this.composer.dispose(); } catch (_) {}
      this.composer = null;
    }
    try {
      const w = window.innerWidth, h = window.innerHeight;
      const rt = new THREE.WebGLRenderTarget(w, h, {
        type: THREE.HalfFloatType,
        samples: 2,
      });
      const composer = new EffectComposer(this.renderer, rt);
      composer.addPass(new RenderPass(this.scene, this.camera));
      this.bloom = new UnrealBloomPass(
        new THREE.Vector2(w, h),
        RENDER.bloomStrength, RENDER.bloomRadius, RENDER.bloomThreshold
      );
      composer.addPass(this.bloom);
      composer.addPass(new OutputPass());
      this.composer = composer;
    } catch (err) {
      console.warn("[CropVision] Post-processing unavailable, using direct render.", err);
      this.composer = null;
      this.bloom = null;
    }
  }

  _bindContextLoss() {
    this.canvas.addEventListener("webglcontextlost", (e) => {
      e.preventDefault();
      this.contextLost = true;
    }, false);
    this.canvas.addEventListener("webglcontextrestored", () => {
      this._buildComposer();
      this.resize();
      this.contextLost = false;
    }, false);
  }

  /** 'solo' = fullscreen + bloom; 'battle' = two side-by-side viewports. */
  setMode(mode) {
    this.mode = mode;
    if (mode === "battle") this.ensureCamera2();
    this.resize();
  }

  onResize(cb) { this._resizeCbs.push(cb); }

  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, RENDER.maxPixelRatio));
    this.renderer.setSize(w, h, false);

    if (this.mode === "battle") {
      const vw = Math.floor(w / 2);
      this.camera.aspect = vw / h; this.camera.updateProjectionMatrix();
      if (this.camera2) { this.camera2.aspect = vw / h; this.camera2.updateProjectionMatrix(); }
      this.viewports = [
        { cam: this.camera, x: 0, y: 0, w: vw, h },
        { cam: this.camera2, x: w - vw, y: 0, w: vw, h },
      ];
    } else {
      this.viewports = null;
      this.camera.aspect = w / h; this.camera.updateProjectionMatrix();
      if (this.composer) {
        this.composer.setPixelRatio(this.renderer.getPixelRatio());
        this.composer.setSize(w, h);
      }
    }

    for (const cb of this._resizeCbs) {
      try { cb(w, h); } catch (_) {}
    }
  }

  pulseBloom(amount) { this.bloomPulse = Math.min(this.bloomPulse + amount, 1.6); }
  setIntensity(v) { this.intensity = clamp(v, 0, 1); }

  update(dt) {
    if (this.bloom) {
      this.bloomPulse = damp(this.bloomPulse, 0, 6, dt);
      this.bloom.strength = RENDER.bloomStrength + this.intensity * 0.25 + this.bloomPulse;
    }
  }

  render() {
    if (this.contextLost) return;
    try {
      if (this.viewports) {
        const r = this.renderer;
        r.setScissorTest(true);
        for (const vp of this.viewports) {
          r.setViewport(vp.x, vp.y, vp.w, vp.h);
          r.setScissor(vp.x, vp.y, vp.w, vp.h);
          r.render(this.scene, vp.cam);
        }
        r.setScissorTest(false);
        r.setViewport(0, 0, window.innerWidth, window.innerHeight);
      } else if (this.composer) {
        this.composer.render();
      } else {
        this.renderer.render(this.scene, this.camera);
      }
    } catch (_) {
      // A transient GPU error must never crash the loop.
    }
  }

  add(obj) { this.scene.add(obj); }
}
