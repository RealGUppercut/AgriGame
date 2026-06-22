/* ============================================================================
 * Scene — renderer, camera, lighting, atmosphere and the bloom pipeline.
 *   • Warm directional "sun" + soft shadows, cool hemisphere fill, distance fog.
 *   • A touch of UnrealBloom on highlights / feedback (with a safe fallback to
 *     direct rendering if post-processing can't initialise).
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

    this.camera = new THREE.PerspectiveCamera(
      CAMERA.fov, this._aspect(), CAMERA.near, CAMERA.far
    );
    this.camera.position.set(CAMERA.basePos.x, CAMERA.basePos.y, CAMERA.basePos.z);
    this.camera.lookAt(CAMERA.lookAt.x, CAMERA.lookAt.y, CAMERA.lookAt.z);
    this.baseQuaternion = this.camera.quaternion.clone();

    this._buildLights();
    this._buildComposer();
    this._bindContextLoss();

    this.resize();
  }

  _aspect() {
    return (window.innerWidth || 1) / (window.innerHeight || 1);
  }

  _buildLights() {
    const sun = new THREE.DirectionalLight(PALETTE.sun, 2.7);
    sun.position.set(-20, 28, 10);
    sun.target.position.set(0, 0, -8);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024); // soft low-poly shadows; cheap for kiosks
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
    // Dispose any previous composer (used when rebuilding after context loss).
    if (this.composer) {
      try { this.composer.dispose(); } catch (_) {}
      this.composer = null;
    }
    try {
      const w = window.innerWidth, h = window.innerHeight;
      const rt = new THREE.WebGLRenderTarget(w, h, {
        type: THREE.HalfFloatType,
        samples: 2, // light MSAA inside the post pipeline
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
      // GPU resources (textures/geometries/programs) are re-uploaded by three on
      // the next render; composer render-targets must be rebuilt explicitly.
      this._buildComposer();
      this.resize();
      this.contextLost = false;
    }, false);
  }

  onResize(cb) { this._resizeCbs.push(cb); }

  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, RENDER.maxPixelRatio));
    this.renderer.setSize(w, h, false);
    this.camera.aspect = this._aspect();
    this.camera.updateProjectionMatrix();
    if (this.composer) {
      this.composer.setPixelRatio(this.renderer.getPixelRatio());
      this.composer.setSize(w, h);
    }
    for (const cb of this._resizeCbs) {
      try { cb(w, h, this.camera.aspect); } catch (_) {}
    }
  }

  /** Momentary bloom flash for juicy feedback. */
  pulseBloom(amount) { this.bloomPulse = Math.min(this.bloomPulse + amount, 1.6); }

  /** 0..1 combo intensity, gently raises ambient bloom. */
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
      if (this.composer) this.composer.render();
      else this.renderer.render(this.scene, this.camera);
    } catch (_) {
      // A transient GPU error must never crash the loop.
    }
  }

  add(obj) { this.scene.add(obj); }
}
