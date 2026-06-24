/* ============================================================================
 * Floaters — pooled "+points" numbers that pop in screen space above an item.
 * 3D world position is projected to 2D and a recycled DOM node is animated by
 * CSS. Pooled so there is no per-hit DOM churn.
 * ========================================================================== */

import * as THREE from "three";
import { POOL } from "./config.js";

const _v = new THREE.Vector3();

export class Floaters {
  constructor(layerEl, getCamera) {
    this.layer = layerEl;
    this.getCamera = getCamera;
    this.nodes = [];
    for (let i = 0; i < POOL.floaters; i++) {
      const el = document.createElement("div");
      el.className = "floater";
      el.style.display = "none";
      this.layer.appendChild(el);
      this.nodes.push({ el, free: true, timer: 0 });
    }
    this.cursor = 0;
  }

  _acquire() {
    for (const n of this.nodes) if (n.free) return n;
    // none free → reuse the oldest in round-robin
    const n = this.nodes[this.cursor];
    this.cursor = (this.cursor + 1) % this.nodes.length;
    return n;
  }

  /** Show "text" above world position. `cls` adds a modifier class (bonus/bad). */
  spawn(worldPos, text, cls) {
    const cam = this.getCamera();
    if (!cam) return;
    _v.set(worldPos.x, worldPos.y, worldPos.z).project(cam);
    if (_v.z > 1) return; // behind the camera
    // Map NDC into the container's own box, so battle halves stay in their half.
    const w = this.layer.clientWidth || window.innerWidth;
    const h = this.layer.clientHeight || window.innerHeight;
    const x = (_v.x * 0.5 + 0.5) * w;
    const y = (-_v.y * 0.5 + 0.5) * h;

    const n = this._acquire();
    if (n.timer) clearTimeout(n.timer);
    const el = n.el;
    el.textContent = text;
    el.className = "floater" + (cls ? " " + cls : "");
    el.style.left = x + "px";
    el.style.top = y + "px";
    el.style.display = "block";
    // restart the CSS animation
    el.style.animation = "none";
    void el.offsetWidth;
    el.style.animation = "";
    n.free = false;
    const duration = cls === "bonus" ? 2200 : 950;
    n.timer = setTimeout(() => {
      el.style.display = "none";
      n.free = true;
      n.timer = 0;
    }, duration);
  }

  reset() {
    for (const n of this.nodes) {
      if (n.timer) clearTimeout(n.timer);
      n.timer = 0;
      n.free = true;
      n.el.style.display = "none";
    }
  }
}
