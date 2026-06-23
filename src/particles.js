/* ============================================================================
 * Particles — pooled burst system using two InstancedMeshes:
 *   • "chunks"   : lit, flat-shaded debris (soil / leaf / crop colours)
 *   • "sparkles" : bright unlit bits that catch the bloom for a sweet sparkle
 * Everything is pre-allocated; bursts only recycle existing instances.
 * ========================================================================== */

import * as THREE from "three";
import { POOL, PALETTE } from "./config.js";
import { rand } from "./utils.js";

const _dummy = new THREE.Object3D();
const _col = new THREE.Color();

class InstancedPool {
  constructor(geo, mat, count) {
    this.mesh = new THREE.InstancedMesh(geo, mat, count);
    this.mesh.frustumCulled = false;
    this.mesh.castShadow = false;
    this.count = count;
    this.cursor = 0;
    this.p = new Array(count);
    for (let i = 0; i < count; i++) {
      this.p[i] = {
        active: false, x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0,
        rx: 0, ry: 0, rz: 0, drx: 0, dry: 0, drz: 0,
        life: 0, maxLife: 1, size: 1,
      };
      this.mesh.setColorAt(i, _col.set(0xffffff));
      _dummy.position.set(0, -9999, 0);
      _dummy.scale.setScalar(0);
      _dummy.updateMatrix();
      this.mesh.setMatrixAt(i, _dummy.matrix);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
    if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true;
  }

  emit(x, y, z, color, opts) {
    const i = this.cursor;
    this.cursor = (this.cursor + 1) % this.count;
    const pt = this.p[i];
    pt.active = true;
    pt.x = x; pt.y = y; pt.z = z;
    pt.vx = opts.vx; pt.vy = opts.vy; pt.vz = opts.vz;
    pt.rx = rand(0, 6.28); pt.ry = rand(0, 6.28); pt.rz = rand(0, 6.28);
    pt.drx = rand(-8, 8); pt.dry = rand(-8, 8); pt.drz = rand(-8, 8);
    pt.life = opts.life; pt.maxLife = opts.life; pt.size = opts.size;
    this.mesh.setColorAt(i, _col.set(color));
    this._colorsDirty = true;
  }

  update(dt, gravity) {
    let anyActive = false;
    for (let i = 0; i < this.count; i++) {
      const pt = this.p[i];
      if (!pt.active) continue;
      anyActive = true;
      pt.life -= dt;
      if (pt.life <= 0) {
        pt.active = false;
        _dummy.position.set(0, -9999, 0);
        _dummy.scale.setScalar(0);
        _dummy.rotation.set(0, 0, 0);
        _dummy.updateMatrix();
        this.mesh.setMatrixAt(i, _dummy.matrix);
        continue;
      }
      pt.vy -= gravity * dt;
      pt.x += pt.vx * dt;
      pt.y += pt.vy * dt;
      pt.z += pt.vz * dt;
      if (pt.y < 0.06 && pt.vy < 0) { pt.y = 0.06; pt.vy *= -0.42; pt.vx *= 0.7; pt.vz *= 0.7; }
      pt.rx += pt.drx * dt; pt.ry += pt.dry * dt; pt.rz += pt.drz * dt;

      const tnorm = pt.life / pt.maxLife;        // 1 → 0
      const pop = tnorm > 0.8 ? (1 - tnorm) / 0.2 : 1; // quick grow-in
      const fade = tnorm < 0.3 ? tnorm / 0.3 : 1;       // shrink-out
      const s = pt.size * Math.min(pop, fade);

      _dummy.position.set(pt.x, pt.y, pt.z);
      _dummy.rotation.set(pt.rx, pt.ry, pt.rz);
      _dummy.scale.setScalar(s);
      _dummy.updateMatrix();
      this.mesh.setMatrixAt(i, _dummy.matrix);
    }
    if (anyActive) this.mesh.instanceMatrix.needsUpdate = true;
    if (this._colorsDirty && this.mesh.instanceColor) {
      this.mesh.instanceColor.needsUpdate = true;
      this._colorsDirty = false;
    }
  }

  reset() {
    for (let i = 0; i < this.count; i++) {
      const pt = this.p[i];
      pt.active = false;
      _dummy.position.set(0, -9999, 0);
      _dummy.scale.setScalar(0);
      _dummy.updateMatrix();
      this.mesh.setMatrixAt(i, _dummy.matrix);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
  }

  dispose() { this.mesh.dispose(); }
}

export class Particles {
  constructor(sceneMgr, assets, layer = 1) {
    this.chunks = new InstancedPool(assets.geo.chunk, assets.mat.chunk, POOL.chunks);
    this.sparkles = new InstancedPool(assets.geo.sparkle, assets.mat.sparkle, POOL.sparkles);
    this.chunks.mesh.layers.set(layer);
    this.sparkles.mesh.layers.set(layer);
    sceneMgr.add(this.chunks.mesh);
    sceneMgr.add(this.sparkles.mesh);
  }

  /** A satisfying burst at a world position. type: 'carrot' | 'weed'. */
  burst(x, y, z, type, strength = 1) {
    const palette = type === "weed"
      ? [PALETTE.weed, PALETTE.weedDark, PALETTE.weedFlower, PALETTE.soilLight]
      : [PALETTE.carrot, PALETTE.carrotShade, PALETTE.carrotTop, PALETTE.soilLight];

    const nChunks = Math.round(rand(10, 14) * strength);
    for (let i = 0; i < nChunks; i++) {
      const ang = rand(0, Math.PI * 2);
      const sp = rand(2.5, 6.5) * strength;
      this.chunks.emit(x, y + 0.3, z, palette[(Math.random() * palette.length) | 0], {
        vx: Math.cos(ang) * sp,
        vy: rand(3.5, 7.5) * strength,
        vz: Math.sin(ang) * sp,
        life: rand(0.5, 0.95),
        size: rand(0.7, 1.3),
      });
    }
    const nSpark = Math.round(rand(6, 10) * strength);
    for (let i = 0; i < nSpark; i++) {
      const ang = rand(0, Math.PI * 2);
      const sp = rand(3, 8) * strength;
      this.sparkles.emit(x, y + 0.5, z, PALETTE.sparkle, {
        vx: Math.cos(ang) * sp,
        vy: rand(4, 9) * strength,
        vz: Math.sin(ang) * sp,
        life: rand(0.4, 0.8),
        size: rand(0.6, 1.1),
      });
    }
  }

  update(dt) {
    this.chunks.update(dt, 18);
    this.sparkles.update(dt, 9);
  }

  reset() {
    this.chunks.reset();
    this.sparkles.reset();
  }

  dispose() {
    this.chunks.dispose();
    this.sparkles.dispose();
  }
}
