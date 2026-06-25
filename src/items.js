/* ============================================================================
 * Items — the carrots & weeds that stream toward the camera.
 *   • Pooled meshes (no per-spawn allocation, no GC churn over a show day).
 *   • One item sits in the action band at a time, so it's instantly readable.
 *   • Owns the pop / wilt animations; scoring lives in game.js.
 * ========================================================================== */

import { TUNE, POOL } from "./config.js";
import { easeOutBack, easeOutCubic, clamp } from "./utils.js";

/** Put an object and all its descendants on a single render layer. */
function setLayerDeep(obj, layer) {
  obj.traverse((o) => o.layers.set(layer));
}

export class Items {
  constructor(sceneMgr, assets, layer = 1) {
    this.assets = assets;
    this.layer = layer;
    this.active = [];
    this.freeCarrots = [];
    this.freeWeeds = [];

    for (let i = 0; i < POOL.carrots; i++) {
      const m = assets.createCarrot();
      m.visible = false;
      setLayerDeep(m, layer);
      sceneMgr.add(m);
      this.freeCarrots.push(m);
    }
    for (let i = 0; i < POOL.weeds; i++) {
      const m = assets.createWeed();
      m.visible = false;
      setLayerDeep(m, layer);
      sceneMgr.add(m);
      this.freeWeeds.push(m);
    }

    this.setZone(TUNE.zone.halfDepthStart);
  }

  /** Set the current action-band half-depth (it shrinks over the round). */
  setZone(half) {
    this.zNear = TUNE.zone.centerZ - half;
    this.zFar = TUNE.zone.centerZ + half;
  }

  /** Toggle shadow casting (off in split-screen to avoid cross-view leakage). */
  setShadow(on) {
    const apply = (m) => m.traverse((o) => { if (o.isMesh) o.castShadow = on; });
    this.freeCarrots.forEach(apply);
    this.freeWeeds.forEach(apply);
    this.active.forEach((r) => apply(r.mesh));
  }

  get zoneCenter() { return TUNE.zone.centerZ; }

  spawn(type, lane, opts = {}) {
    const pool = type === "weed" ? this.freeWeeds : this.freeCarrots;
    const mesh = pool.pop();
    if (!mesh) return null; // pool exhausted → skip safely

    const x = TUNE.spawn.lanesX[lane];
    const z = opts.z != null ? opts.z : TUNE.spawn.startZ;
    const instant = !!opts.instant; // instant => full size, skip the grow-in

    mesh.visible = true;
    mesh.position.set(x, 0, z);
    mesh.rotation.set(0, 0, 0);
    mesh.scale.setScalar(instant ? 1 : 0.001);

    const rec = {
      type, mesh, x, z,
      handled: false,
      state: "alive",
      age: instant ? 1 : 0,
      animT: 0,
      swayPhase: Math.random() * 6.28,
      passedReported: false,
    };
    this.active.push(rec);
    return rec;
  }

  /** The most urgent unhandled item currently inside the action band. */
  frontmostInZone() {
    let best = null;
    for (const r of this.active) {
      if (r.handled || r.state !== "alive") continue;
      if (r.z >= this.zNear && r.z <= this.zFar) {
        if (!best || r.z > best.z) best = r;
      }
    }
    return best;
  }

  /** Pop a successful item up and away (then recycle). */
  popSuccess(rec) {
    rec.handled = true;
    rec.state = "success";
    rec.animT = 0;
  }

  /** Wilt a wrongly-actioned item (then recycle). */
  popFail(rec) {
    rec.handled = true;
    rec.state = "fail";
    rec.animT = 0;
  }

  update(dt, speed, onPass) {
    for (let i = this.active.length - 1; i >= 0; i--) {
      const r = this.active[i];
      r.age += dt;

      // grow-in when freshly spawned
      if (r.age < 0.35 && r.state === "alive") {
        r.mesh.scale.setScalar(clamp(easeOutBack(r.age / 0.35), 0.001, 1));
      } else if (r.state === "alive") {
        r.mesh.scale.setScalar(1);
      }

      if (r.state === "alive") {
        r.z += speed * dt;
        r.mesh.position.z = r.z;
        // gentle wind sway (planted item; only a whisper of vertical motion)
        r.mesh.rotation.z = Math.sin(r.age * 2 + r.swayPhase) * 0.06;
        r.mesh.position.y = Math.sin(r.age * 3 + r.swayPhase) * 0.012;

        if (!r.passedReported && r.z > this.zFar) {
          r.passedReported = true;
          if (!r.handled) { r.handled = true; onPass && onPass(r); }
        }
        if (r.z > TUNE.spawn.despawnZ) { this._recycle(i); continue; }

      } else if (r.state === "success") {
        r.animT += dt;
        const p = clamp(r.animT / 0.45, 0, 1);
        r.z += speed * dt * 0.4;
        r.mesh.position.z = r.z;
        r.mesh.position.y = easeOutCubic(p) * 2.2;
        r.mesh.rotation.y += dt * 10;
        const s = (1 + Math.sin(p * Math.PI) * 0.6) * (1 - easeOutCubic(p));
        r.mesh.scale.setScalar(Math.max(0.001, s));
        if (p >= 1) { this._recycle(i); continue; }

      } else if (r.state === "fail") {
        r.animT += dt;
        const p = clamp(r.animT / 0.5, 0, 1);
        r.z += speed * dt;
        r.mesh.position.z = r.z;
        r.mesh.rotation.z = p * 1.4;          // topple over
        r.mesh.position.y = -p * 0.25;        // sink
        r.mesh.scale.setScalar(Math.max(0.001, 1 - p));
        if (p >= 1 || r.z > TUNE.spawn.despawnZ) { this._recycle(i); continue; }
      }
    }
  }

  _recycle(index) {
    const r = this.active[index];
    r.mesh.visible = false;
    r.mesh.scale.setScalar(1);
    r.mesh.rotation.set(0, 0, 0);
    r.mesh.position.y = 0;
    (r.type === "weed" ? this.freeWeeds : this.freeCarrots).push(r.mesh);
    this.active.splice(index, 1);
  }

  reset() {
    for (let i = this.active.length - 1; i >= 0; i--) this._recycle(i);
  }

  /** Count of live (actionable or soon-to-be) items, for spawn pacing. */
  get liveCount() {
    let n = 0;
    for (const r of this.active) if (r.state === "alive" && !r.passedReported) n++;
    return n;
  }
}
