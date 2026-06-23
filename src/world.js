/* ============================================================================
 * World — the field, sky, scenery and the per-player "driving" motion.
 *   • Ground texture scroll + parallax instanced scenery + camera bob sell the
 *     forward drive without moving thousands of objects (shared, layer 0).
 *   • Each player has a "rig": their own cab (on their render layer) parented to
 *     their camera, with a distinct bob phase/amplitude/rate so the two players
 *     clearly feel they're in different vehicles. Shake + intensity are per rig.
 *   • Owns the shared glowing action-zone marker. Scenery is instanced/recycled.
 * ========================================================================== */

import * as THREE from "three";
import { TUNE, PALETTE, CAMERA } from "./config.js";
import { rand, clamp, damp, lerp } from "./utils.js";

const _d = new THREE.Object3D();
const mod = (v, m) => ((v % m) + m) % m;
const setLayerDeep = (obj, layer) => obj.traverse((o) => o.layers.set(layer));

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
    this.intensity = 0; // max over rigs, for the shared zone glow
    this.fields = [];
    this.rigs = new Map();   // camera -> rig
    this.activeRigs = [];

    sceneMgr.scene.background = assets.createSkyTexture();

    this.ground = assets.createGround();
    sceneMgr.add(this.ground);
    sceneMgr.add(assets.createSun());

    this._buildHills();

    this.zone = assets.createZoneMarker(TUNE.zone.centerZ, TUNE.zone.halfDepth, TUNE.spawn.lanesX);
    sceneMgr.add(this.zone);

    this._buildGrass();
    this._buildFence();
    this._buildTrees();

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
      return { x: side * rand(5.5, 24), y: 0.18, z: rand(zStart, zStart + span), r: rand(0, Math.PI * 2), s: rand(0.5, 1.3) };
    });
    const field = new ScrollField(bases, span, zStart);
    field.addLayer(new THREE.InstancedMesh(this.assets.geo.bush, this.assets.mat.grass, count), 0);
    this.sceneMgr.add(field.layers[0].mesh);
    this.fields.push(field);
  }

  _buildFence() {
    const span = 150, zStart = -130, count = 44, half = 22;
    const bases = this._makeBases(count, (i) => {
      const side = i < half ? -1 : 1, k = i % half;
      return { x: side * 16, y: 0.5, z: zStart + (k / half) * span, r: 0, s: rand(0.9, 1.1) };
    });
    const field = new ScrollField(bases, span, zStart);
    field.addLayer(new THREE.InstancedMesh(this.assets.geo.post, this.assets.mat.fence, count), 0);
    this.sceneMgr.add(field.layers[0].mesh);
    this.fields.push(field);
  }

  _buildTrees() {
    const span = 160, zStart = -150, count = 16;
    const bases = this._makeBases(count, () => {
      const side = Math.random() < 0.5 ? -1 : 1;
      return { x: side * rand(22, 36), y: 0, z: rand(zStart, zStart + span), r: rand(0, Math.PI * 2), s: rand(1.0, 1.9) };
    });
    const field = new ScrollField(bases, span, zStart);
    field.addLayer(new THREE.InstancedMesh(this.assets.geo.trunk, this.assets.mat.treeTrunk, count), 0.6);
    field.addLayer(new THREE.InstancedMesh(this.assets.geo.leaf, this.assets.mat.treeLeaf, count), 2.0);
    for (const l of field.layers) this.sceneMgr.add(l.mesh);
    this.fields.push(field);
  }

  /* ---- Player rigs (camera + cab + bob) ---------------------------------- */

  _getRig(camera, index) {
    let rig = this.rigs.get(camera);
    if (!rig) {
      const cab = this.assets.createCab();
      setLayerDeep(cab, index + 1); // player i's cab lives on layer i+1
      camera.add(cab);
      const ampScale = (TUNE.battle.bobAmpScale && TUNE.battle.bobAmpScale[index]) || 1;
      const hzScale = (TUNE.battle.bobHzScale && TUNE.battle.bobHzScale[index]) || 1;
      const phase = index === 0 ? 0 : (TUNE.battle.bobPhaseOffset || 0);
      rig = { camera, cab, index, bobAcc: rand(0, 6), bobPhase: phase, bobAmp: ampScale, bobHz: hzScale, shake: 0, intensity: 0 };
      this.rigs.set(camera, rig);
    }
    return rig;
  }

  /** Set which cameras are driving (1 for solo, 2 for battle), in player order. */
  setRigs(cameras) {
    this.activeRigs = cameras.map((cam, i) => this._getRig(cam, i));
    this.layoutRigs();
  }

  layoutRigs() {
    for (const rig of this.activeRigs) {
      this.assets.layoutCab(rig.cab, CAMERA.fov, rig.camera.aspect || 1.6);
    }
  }

  setIntensity(playerIndex, v) {
    const rig = this.activeRigs[playerIndex];
    if (rig) rig.intensity = clamp(v, 0, 1);
    this.intensity = this.activeRigs.reduce((m, r) => Math.max(m, r.intensity), 0);
  }

  addShake(playerIndex, amount) {
    const rig = this.activeRigs[playerIndex];
    if (rig) rig.shake = Math.min(rig.shake + amount, 1.2);
  }

  /* ---- Per-frame update -------------------------------------------------- */

  update(dt, speed) {
    const speedF = clamp(speed / TUNE.difficulty.speedStart, 0.6, 2.4);

    // Shared ground + scenery scroll (toward the camera)
    this.groundScroll += speed * dt;
    if (this.assets.tex.soil) this.assets.tex.soil.offset.y = -this.groundScroll * 0.045;
    this.scroll += speed * dt;
    for (const f of this.fields) f.update(this.scroll);

    // Per-player rig motion
    for (const rig of this.activeRigs) {
      rig.bobAcc += dt * CAMERA.bobBaseHz * rig.bobHz * speedF; // phase accumulator (no jumps)
      rig.shake = damp(rig.shake, 0, 5, dt);

      const ampF = rig.bobAmp * (1 + rig.intensity * 0.5);
      const a = rig.bobAcc * Math.PI * 2 + rig.bobPhase;
      const bobY = Math.sin(a) * CAMERA.bobAmpY * ampF;
      const swayX = Math.sin(a * 0.5) * CAMERA.bobAmpX * ampF;

      const sh = rig.shake;
      const shX = (Math.random() - 0.5) * sh * 0.12;
      const shY = (Math.random() - 0.5) * sh * 0.12;
      const roll = (Math.random() - 0.5) * sh * 0.03 + swayX * 0.15;

      const cam = rig.camera;
      cam.position.set(
        CAMERA.basePos.x + swayX + shX,
        CAMERA.basePos.y + bobY + shY,
        CAMERA.basePos.z
      );
      cam.quaternion.copy(this.sceneMgr.baseQuaternion);
      cam.rotateZ(roll);
      cam.rotateX(bobY * 0.12);

      // Cab gauges idle animation (per cab)
      const dials = rig.cab.userData.parts.dials;
      for (const gauge of dials.children) {
        if (gauge.userData && gauge.userData.needle) {
          const ph = gauge.userData.phase || 0;
          gauge.userData.needle.rotation.z =
            Math.sin(rig.bobAcc * 7 + ph) * 0.28 - 0.15 - (speedF - 1) * 0.18;
        }
      }
      if (dials.userData.wheel) {
        dials.userData.wheel.rotation.z = Math.sin(rig.bobAcc * 4) * 0.12 + roll * 2;
      }
    }

    // Shared action-zone pulse (driven by the strongest streak intensity)
    const pulse = 0.5 + 0.5 * Math.sin(this.scroll * 0.25);
    if (this.zone) {
      this.zone.userData.fill.material.opacity = 0.12 + pulse * 0.12 + this.intensity * 0.1;
      for (const e of this.zone.userData.edges) e.material.opacity = 0.6 + pulse * 0.4;
      const s = 1 + this.intensity * 0.04 * pulse;
      this.zone.scale.set(s, 1, 1);
    }
  }

  reset() {
    this.scroll = 0;
    this.groundScroll = 0;
    this.intensity = 0;
    for (const rig of this.rigs.values()) { rig.shake = 0; rig.intensity = 0; }
  }
}
