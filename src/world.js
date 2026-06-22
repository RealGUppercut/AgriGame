/* ============================================================================
 * World — the field, sky, scenery and the "driving" motion.
 *   • Ground texture scroll + parallax instanced scenery + camera bob sell the
 *     forward drive without moving thousands of objects.
 *   • Owns the glowing action-zone marker and the cab (parented to the camera).
 *   • Scenery is instanced and recycled (wrapping in Z) — fixed memory.
 * ========================================================================== */

import * as THREE from "three";
import { TUNE, PALETTE, CAMERA } from "./config.js";
import { rand, clamp, damp, lerp } from "./utils.js";

const _d = new THREE.Object3D();
const mod = (v, m) => ((v % m) + m) % m;

/** Manages a set of instanced meshes that share base transforms and scroll. */
class ScrollField {
  constructor(bases, span, zStart) {
    this.bases = bases;
    this.span = span;
    this.zStart = zStart;
    this.layers = [];
  }
  addLayer(mesh, yOffset = 0) {
    mesh.frustumCulled = false;
    mesh.castShadow = false;
    mesh.receiveShadow = false;
    this.layers.push({ mesh, yOffset });
    return mesh;
  }
  update(scroll) {
    for (let i = 0; i < this.bases.length; i++) {
      const b = this.bases[i];
      const ez = this.zStart + mod(b.z - this.zStart + scroll, this.span);
      for (const layer of this.layers) {
        _d.position.set(b.x, b.y + layer.yOffset * b.s, ez);
        _d.rotation.set(0, b.r, 0);
        _d.scale.setScalar(b.s);
        _d.updateMatrix();
        layer.mesh.setMatrixAt(i, _d.matrix);
      }
    }
    for (const layer of this.layers) layer.mesh.instanceMatrix.needsUpdate = true;
  }
}

export class World {
  constructor(sceneMgr, assets) {
    this.sceneMgr = sceneMgr;
    this.assets = assets;
    this.scroll = 0;
    this.groundScroll = 0;
    this.bobT = 0;
    this.shake = 0;
    this.intensity = 0;
    this.fields = [];

    // Sky backdrop + fog already set on the scene
    sceneMgr.scene.background = assets.createSkyTexture();

    // Ground + sun
    this.ground = assets.createGround();
    sceneMgr.add(this.ground);
    sceneMgr.add(assets.createSun());

    // Distant hills (static backdrop, fogged)
    this._buildHills();

    // Action-zone marker
    this.zone = assets.createZoneMarker(TUNE.zone.centerZ, TUNE.zone.halfDepth, TUNE.spawn.lanesX);
    sceneMgr.add(this.zone);

    // Parallax scenery
    this._buildGrass();
    this._buildFence();
    this._buildTrees();

    // Position everything once
    for (const f of this.fields) f.update(0);
  }

  _buildHills() {
    const g = new THREE.Group();
    const n = 9;
    for (let i = 0; i < n; i++) {
      const hill = new THREE.Mesh(this.assets.geo.hill, this.assets.mat.hills);
      hill.position.set(lerp(-60, 60, i / (n - 1)) + rand(-6, 6), -1.5, rand(-140, -120));
      hill.scale.set(rand(1.2, 2.4), rand(0.7, 1.2), 1);
      hill.rotation.y = rand(0, Math.PI);
      g.add(hill);
    }
    this.sceneMgr.add(g);
  }

  _makeBases(count, gen) {
    const arr = new Array(count);
    for (let i = 0; i < count; i++) arr[i] = gen(i);
    return arr;
  }

  _buildGrass() {
    const span = 150, zStart = -130, count = 150;
    const bases = this._makeBases(count, () => {
      const side = Math.random() < 0.5 ? -1 : 1;
      return {
        x: side * rand(5.5, 24),
        y: 0.18,
        z: rand(zStart, zStart + span),
        r: rand(0, Math.PI * 2),
        s: rand(0.5, 1.3),
      };
    });
    const field = new ScrollField(bases, span, zStart);
    const mesh = new THREE.InstancedMesh(this.assets.geo.bush, this.assets.mat.grass, count);
    field.addLayer(mesh, 0);
    this.sceneMgr.add(mesh);
    this.fields.push(field);
  }

  _buildFence() {
    const span = 150, zStart = -130, count = 44;
    const half = count / 2;
    const bases = this._makeBases(count, (i) => {
      const side = i < half ? -1 : 1;
      const k = i % half;
      return {
        x: side * 16,
        y: 0.5,
        z: zStart + (k / half) * span,
        r: 0,
        s: rand(0.9, 1.1),
      };
    });
    const field = new ScrollField(bases, span, zStart);
    const mesh = new THREE.InstancedMesh(this.assets.geo.post, this.assets.mat.fence, count);
    field.addLayer(mesh, 0);
    this.sceneMgr.add(mesh);
    this.fields.push(field);
  }

  _buildTrees() {
    const span = 160, zStart = -150, count = 16;
    const bases = this._makeBases(count, () => {
      const side = Math.random() < 0.5 ? -1 : 1;
      return {
        x: side * rand(22, 36),
        y: 0,
        z: rand(zStart, zStart + span),
        r: rand(0, Math.PI * 2),
        s: rand(1.0, 1.9),
      };
    });
    const field = new ScrollField(bases, span, zStart);
    const trunk = new THREE.InstancedMesh(this.assets.geo.trunk, this.assets.mat.treeTrunk, count);
    const leaf = new THREE.InstancedMesh(this.assets.geo.leaf, this.assets.mat.treeLeaf, count);
    field.addLayer(trunk, 0.6);
    field.addLayer(leaf, 2.0);
    this.sceneMgr.add(trunk);
    this.sceneMgr.add(leaf);
    this.fields.push(field);
  }

  attachCab(camera) {
    this.cab = this.assets.createCab();
    camera.add(this.cab);
    if (!camera.parent) this.sceneMgr.add(camera); // ensure camera is in the graph
  }

  layoutCab(aspect) {
    if (this.cab) this.assets.layoutCab(this.cab, CAMERA.fov, aspect);
  }

  setIntensity(v) { this.intensity = clamp(v, 0, 1); }

  addShake(amount) { this.shake = Math.min(this.shake + amount, 1.2); }

  /** Advance motion. `speed` is the current item/world speed (units/sec). */
  update(dt, speed) {
    const camera = this.sceneMgr.camera;
    const speedF = clamp(speed / TUNE.difficulty.speedStart, 0.6, 2.4);

    // Ground texture scroll (toward the camera)
    this.groundScroll += speed * dt;
    if (this.assets.tex.soil) {
      this.assets.tex.soil.offset.y = -this.groundScroll * 0.045;
    }

    // Scenery scroll/recycle
    this.scroll += speed * dt;
    for (const f of this.fields) f.update(this.scroll);

    // Camera bob (faster & a touch bigger as speed/intensity rise)
    this.bobT += dt * CAMERA.bobBaseHz * speedF;
    const amp = 1 + this.intensity * 0.5;
    const bobY = Math.sin(this.bobT * Math.PI * 2) * CAMERA.bobAmpY * amp;
    const swayX = Math.sin(this.bobT * Math.PI) * CAMERA.bobAmpX * amp;

    // Shake (decays)
    this.shake = damp(this.shake, 0, 5, dt);
    const sh = this.shake;
    const shX = (Math.random() - 0.5) * sh * 0.12;
    const shY = (Math.random() - 0.5) * sh * 0.12;
    const roll = (Math.random() - 0.5) * sh * 0.03 + swayX * 0.15;

    camera.position.set(
      CAMERA.basePos.x + swayX + shX,
      CAMERA.basePos.y + bobY + shY,
      CAMERA.basePos.z
    );
    camera.quaternion.copy(this.sceneMgr.baseQuaternion);
    camera.rotateZ(roll);
    camera.rotateX(bobY * 0.12);

    // Action-zone marker pulse
    const pulse = 0.5 + 0.5 * Math.sin(this.bobT * Math.PI * 2 * 0.8);
    if (this.zone) {
      this.zone.userData.fill.material.opacity = 0.12 + pulse * 0.12 + this.intensity * 0.1;
      for (const e of this.zone.userData.edges) {
        e.material.opacity = 0.6 + pulse * 0.4;
      }
      const s = 1 + this.intensity * 0.04 * pulse;
      this.zone.scale.set(s, 1, 1);
    }

    // Cab gauges idle animation
    if (this.cab) {
      const dials = this.cab.userData.parts.dials;
      for (const gauge of dials.children) {
        if (gauge.userData && gauge.userData.needle) {
          const ph = gauge.userData.phase || 0;
          // gentle, smooth idle sweep biased by speed (no jitter)
          gauge.userData.needle.rotation.z =
            Math.sin(this.bobT * 1.1 + ph) * 0.28 - 0.15 - (speedF - 1) * 0.18;
        }
      }
      if (dials.userData.wheel) {
        dials.userData.wheel.rotation.z = Math.sin(this.bobT * 0.7) * 0.12 + roll * 2;
      }
    }
  }

  reset() {
    this.scroll = 0;
    this.groundScroll = 0;
    this.bobT = 0;
    this.shake = 0;
    this.intensity = 0;
  }
}
