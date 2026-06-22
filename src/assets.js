/* ============================================================================
 * Assets — every mesh is generated from primitives at startup.
 *   • No external models, no sourced textures, no images.
 *   • Geometries & materials are created ONCE and shared; item factories clone
 *     lightweight Groups that reuse those shared resources (pool-friendly,
 *     no GPU duplication, no per-spawn allocation).
 *   • The committed low-poly look comes from flat shading + low segment counts;
 *     the polish comes from lighting/atmosphere (see scene.js).
 * ========================================================================== */

import * as THREE from "three";
import { PALETTE } from "./config.js";
import { rand } from "./utils.js";

export class Assets {
  constructor() {
    this.geo = {};   // shared geometries
    this.mat = {};   // shared materials
    this.tex = {};   // generated textures
    this._built = false;
  }

  build() {
    if (this._built) return;
    this._built = true;
    this._buildMaterials();
    this._buildGeometries();
  }

  _stdMat(color, opts = {}) {
    return new THREE.MeshStandardMaterial({
      color,
      flatShading: true,
      roughness: opts.roughness ?? 0.85,
      metalness: opts.metalness ?? 0.0,
      emissive: opts.emissive ?? 0x000000,
      emissiveIntensity: opts.emissiveIntensity ?? 1,
      ...(opts.extra || {}),
    });
  }

  _buildMaterials() {
    const P = PALETTE;
    const m = this.mat;
    // Crops
    m.carrotBody = this._stdMat(P.carrot, { roughness: 0.6, emissive: P.carrotShade, emissiveIntensity: 0.12 });
    m.carrotTop  = this._stdMat(P.carrotTop, { roughness: 0.7 });
    // Weeds
    m.weed       = this._stdMat(P.weed, { roughness: 0.9 });
    m.weedDark   = this._stdMat(P.weedDark, { roughness: 0.95 });
    m.weedFlower = this._stdMat(P.weedFlower, { roughness: 0.5, emissive: P.weedFlower, emissiveIntensity: 0.18 });
    // Cab
    m.cab        = this._stdMat(P.cab, { roughness: 0.7, metalness: 0.25 });
    m.cabDark    = this._stdMat(P.cabDark, { roughness: 0.6, metalness: 0.3 });
    m.cabAccent  = this._stdMat(P.cabAccent, { roughness: 0.5, metalness: 0.2, emissive: P.cabAccent, emissiveIntensity: 0.15 });
    m.cabMetal   = this._stdMat(P.cabMetal, { roughness: 0.4, metalness: 0.55 });
    m.dialFace   = this._stdMat(0x14180f, { roughness: 0.5, metalness: 0.2 }); // dark face for contrast
    m.dialTick   = this._stdMat(0xb9c4a6, { roughness: 0.6 });
    m.needle     = this._stdMat(0xffd24a, { roughness: 0.4, emissive: 0xffb000, emissiveIntensity: 0.5 }); // bright, readable
    // Scenery
    m.soil       = this._stdMat(0xffffff, { roughness: 1.0 }); // map applied in createGround
    m.grass      = this._stdMat(P.grass, { roughness: 0.95 });
    m.treeLeaf   = this._stdMat(P.treeLeaf, { roughness: 0.95 });
    m.treeTrunk  = this._stdMat(P.treeTrunk, { roughness: 0.9 });
    m.hills      = this._stdMat(P.hills, { roughness: 1.0 });
    m.fence      = this._stdMat(P.fence, { roughness: 0.9 });
    // Glows (unlit so they pop and bloom)
    m.sun        = new THREE.MeshBasicMaterial({ color: P.sun, fog: false });
    m.zoneFill   = new THREE.MeshBasicMaterial({ color: P.zoneGlow, transparent: true, opacity: 0.16, depthWrite: false });
    m.zoneEdge   = new THREE.MeshBasicMaterial({ color: P.zoneGlow, transparent: true, opacity: 0.9 });
    // Particles
    m.chunk      = new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.8 });
    m.sparkle    = new THREE.MeshBasicMaterial({ color: P.sparkle, vertexColors: true });
  }

  _buildGeometries() {
    const g = this.geo;
    // Crop / weed parts
    g.carrotBody = new THREE.ConeGeometry(0.34, 1.15, 8);
    g.carrotLeaf = new THREE.ConeGeometry(0.075, 0.7, 5);
    g.weedBulb   = new THREE.IcosahedronGeometry(0.27, 0);
    g.weedBlade  = new THREE.ConeGeometry(0.055, 0.7, 4);
    g.weedFlower = new THREE.IcosahedronGeometry(0.1, 0);
    // Scenery
    g.bush   = new THREE.IcosahedronGeometry(0.45, 0);
    g.post   = new THREE.BoxGeometry(0.12, 1.0, 0.12);
    g.rail   = new THREE.BoxGeometry(2.2, 0.08, 0.06);
    g.trunk  = new THREE.CylinderGeometry(0.12, 0.16, 1.2, 6);
    g.leaf   = new THREE.ConeGeometry(0.95, 1.9, 7);
    g.hill   = new THREE.ConeGeometry(9, 4.5, 7);
    // Cab pieces (unit boxes, sized via scale at layout time)
    g.box    = new THREE.BoxGeometry(1, 1, 1);
    g.dial   = new THREE.TorusGeometry(0.17, 0.03, 8, 22);
    g.dialFace = new THREE.CircleGeometry(0.16, 22);
    g.dialHub = new THREE.CircleGeometry(0.04, 14);
    g.dialTick = new THREE.BoxGeometry(0.02, 0.05, 0.01);
    g.needle = new THREE.BoxGeometry(0.028, 0.17, 0.022);
    g.wheel  = new THREE.TorusGeometry(0.32, 0.05, 8, 22);
    // Particles
    g.chunk   = new THREE.TetrahedronGeometry(0.12, 0);
    g.sparkle = new THREE.OctahedronGeometry(0.09, 0);
    g.sun     = new THREE.CircleGeometry(5.5, 24);
  }

  /* ---- Crop / weed factories (return fresh Groups, shared resources) ----- */

  createCarrot() {
    const g = new THREE.Group();
    // Cone is 1.15 tall. Sink ~1/3 of the orange below ground (y=0):
    //   tip ≈ -0.39, shoulders ≈ +0.77  → bottom third is in the soil.
    const body = new THREE.Mesh(this.geo.carrotBody, this.mat.carrotBody);
    body.rotation.x = Math.PI;        // point the root DOWN
    body.position.y = 0.19;
    body.castShadow = true;
    g.add(body);

    const shoulders = 0.19 + 1.15 / 2; // ≈ 0.77, top of the orange
    const top = new THREE.Group();
    top.position.y = shoulders - 0.06;

    // A full, leafy crown: an outer ring of long blades + shorter inner ones.
    const outer = 9;
    for (let i = 0; i < outer; i++) {
      const leaf = new THREE.Mesh(this.geo.carrotLeaf, this.mat.carrotTop);
      const a = (i / outer) * Math.PI * 2 + rand(-0.18, 0.18);
      const tilt = rand(0.45, 0.95);
      leaf.position.set(Math.cos(a) * 0.08, 0.2, Math.sin(a) * 0.08);
      leaf.rotation.z = Math.cos(a) * tilt;
      leaf.rotation.x = -Math.sin(a) * tilt;
      leaf.scale.set(rand(0.85, 1.15), rand(0.9, 1.35), rand(0.85, 1.15));
      leaf.castShadow = true;
      top.add(leaf);
    }
    const inner = 5;
    for (let i = 0; i < inner; i++) {
      const leaf = new THREE.Mesh(this.geo.carrotLeaf, this.mat.carrotTop);
      const a = rand(0, Math.PI * 2);
      leaf.position.set(Math.cos(a) * 0.035, 0.16, Math.sin(a) * 0.035);
      leaf.rotation.z = Math.cos(a) * 0.28;
      leaf.rotation.x = -Math.sin(a) * 0.28;
      leaf.scale.set(0.8, rand(0.6, 0.95), 0.8);
      top.add(leaf);
    }
    g.add(top);

    g.userData.type = "carrot";
    g.userData.spinAxis = "y";
    return g;
  }

  createWeed() {
    const g = new THREE.Group();
    const bulb = new THREE.Mesh(this.geo.weedBulb, this.mat.weedDark);
    bulb.scale.y = 0.65;
    bulb.position.y = 0.18;
    bulb.castShadow = true;
    g.add(bulb);

    const bladeN = 8;
    for (let i = 0; i < bladeN; i++) {
      const blade = new THREE.Mesh(this.geo.weedBlade, i % 2 ? this.mat.weed : this.mat.weedDark);
      const a = (i / bladeN) * Math.PI * 2 + rand(-0.3, 0.3);
      const tilt = rand(0.5, 1.0);
      const len = rand(0.7, 1.15);
      blade.position.set(Math.cos(a) * 0.14, 0.35, Math.sin(a) * 0.14);
      blade.rotation.z = Math.cos(a) * tilt;
      blade.rotation.x = -Math.sin(a) * tilt;
      blade.scale.y = len;
      blade.castShadow = true;
      g.add(blade);
    }
    // A couple of magenta flower buds — the distinct "not-a-carrot" colour cue
    for (let i = 0; i < 2; i++) {
      const f = new THREE.Mesh(this.geo.weedFlower, this.mat.weedFlower);
      const a = rand(0, Math.PI * 2);
      f.position.set(Math.cos(a) * 0.18, rand(0.7, 0.95), Math.sin(a) * 0.18);
      g.add(f);
    }
    g.userData.type = "weed";
    g.userData.spinAxis = "y";
    return g;
  }

  /* ---- Cab interior (parented to the camera) ----------------------------- */

  createCab() {
    const cab = new THREE.Group();
    cab.userData.dist = 1.4;
    const M = this.mat;

    const pillL = new THREE.Mesh(this.geo.box, M.cab);
    const pillR = new THREE.Mesh(this.geo.box, M.cab);
    const header = new THREE.Mesh(this.geo.box, M.cab);
    const dash = new THREE.Mesh(this.geo.box, M.cabDark);
    const dashTop = new THREE.Mesh(this.geo.box, M.cab);
    const accent = new THREE.Mesh(this.geo.box, M.cabAccent);
    cab.add(pillL, pillR, header, dash, dashTop, accent);

    // Two dial gauges + a hint of a steering wheel, mounted on the dash group.
    // Parts are clearly separated in Z (face → bezel → ticks → needle → hub)
    // so the bright needle reads instantly and never z-fights / flickers.
    const dials = new THREE.Group();
    for (let i = 0; i < 2; i++) {
      const gauge = new THREE.Group();
      const face = new THREE.Mesh(this.geo.dialFace, M.dialFace); // dark face
      const ring = new THREE.Mesh(this.geo.dial, M.cabMetal);     // bezel
      ring.position.z = 0.015;
      // tick marks around the dial
      for (let t = 0; t < 5; t++) {
        const tick = new THREE.Mesh(this.geo.dialTick, M.dialTick);
        const ta = -2.1 + t * 1.05;
        tick.position.set(Math.sin(ta) * 0.125, Math.cos(ta) * 0.125, 0.02);
        tick.rotation.z = -ta;
        gauge.add(tick);
      }
      const needlePivot = new THREE.Group();
      needlePivot.position.z = 0.045;
      const needle = new THREE.Mesh(this.geo.needle, M.needle);   // bright needle
      needle.position.y = 0.06;
      needlePivot.add(needle);
      const hub = new THREE.Mesh(this.geo.dialHub, M.cabMetal);
      hub.position.z = 0.06;
      gauge.add(face, ring, needlePivot, hub);
      gauge.position.x = i === 0 ? -0.55 : 0.55;
      gauge.userData.needle = needlePivot;
      gauge.userData.phase = i * 1.3;
      dials.add(gauge);
    }
    const wheel = new THREE.Mesh(this.geo.wheel, M.cabDark);
    wheel.rotation.x = 1.15;
    dials.add(wheel);
    dials.userData.wheel = wheel;
    cab.add(dials);

    cab.userData.parts = { pillL, pillR, header, dash, dashTop, accent, dials };
    cab.renderOrder = 5;
    return cab;
  }

  /** Position the cab pieces for the current fov/aspect (call on resize). */
  layoutCab(cab, fov, aspect) {
    const d = cab.userData.dist;
    const h = Math.tan((fov * Math.PI) / 180 / 2) * d;
    const w = h * aspect;
    const t = 0.14 * d;
    const p = cab.userData.parts;

    p.pillL.position.set(-(w + t * 0.1), -h * 0.15, -d);
    p.pillR.position.set(+(w + t * 0.1), -h * 0.15, -d);
    p.pillL.scale.set(t * 1.5, h * 2.4, t);
    p.pillR.scale.set(t * 1.5, h * 2.4, t);
    p.pillL.rotation.z = 0.05;
    p.pillR.rotation.z = -0.05;

    p.header.position.set(0, h * 1.02, -d);
    p.header.scale.set((w + t) * 2.1, t * 1.3, t);

    p.dash.position.set(0, -h * 0.92, -d * 0.86);
    p.dash.scale.set((w + t) * 2.1, h * 0.7, t * 2.2);
    p.dash.rotation.x = -0.42;

    p.dashTop.position.set(0, -h * 0.6, -d * 0.95);
    p.dashTop.scale.set((w + t) * 2.1, t * 0.5, t * 3.0);
    p.dashTop.rotation.x = -0.42;

    p.accent.position.set(0, -h * 0.66, -d * 0.78);
    p.accent.scale.set((w + t) * 2.1, t * 0.28, t * 0.3);
    p.accent.rotation.x = -0.42;

    p.dials.position.set(0, -h * 0.72, -d * 0.7);
    p.dials.rotation.x = -0.42;
    const dialScale = Math.max(0.7, Math.min(1.2, w / 1.6));
    p.dials.scale.setScalar(dialScale);
  }

  /* ---- Sky, ground, sun, action zone ------------------------------------- */

  /** Vertical gradient backdrop as a generated CanvasTexture. */
  createSkyTexture() {
    const c = document.createElement("canvas");
    c.width = 16; c.height = 256;
    const ctx = c.getContext("2d");
    const grad = ctx.createLinearGradient(0, 0, 0, 256);
    const top = "#" + PALETTE.skyTop.toString(16).padStart(6, "0");
    const hor = "#" + PALETTE.skyHorizon.toString(16).padStart(6, "0");
    grad.addColorStop(0.0, top);
    grad.addColorStop(0.55, "#7fb0d8");
    grad.addColorStop(0.82, hor);
    grad.addColorStop(1.0, hor);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 16, 256);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    this.tex.sky = tex;
    return tex;
  }

  /** Procedural soil texture: lengthwise furrows + tilled speckle (scrolls). */
  createGround() {
    const c = document.createElement("canvas");
    c.width = 256; c.height = 256;
    const ctx = c.getContext("2d");
    const base = "#" + PALETTE.soilBase.toString(16).padStart(6, "0");
    const dark = "#" + PALETTE.soilDark.toString(16).padStart(6, "0");
    const light = "#" + PALETTE.soilLight.toString(16).padStart(6, "0");
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, 256, 256);
    // lengthwise furrow bands (vertical in texture → along the row when mapped)
    for (let x = 0; x < 256; x += 32) {
      ctx.fillStyle = dark;
      ctx.globalAlpha = 0.5;
      ctx.fillRect(x, 0, 6, 256);
      ctx.fillStyle = light;
      ctx.globalAlpha = 0.35;
      ctx.fillRect(x + 14, 0, 4, 256);
    }
    ctx.globalAlpha = 1;
    // tilled speckle / clods (scrolling these sells forward motion)
    for (let i = 0; i < 900; i++) {
      const sh = Math.random();
      ctx.fillStyle = sh < 0.5 ? dark : light;
      ctx.globalAlpha = 0.18 + Math.random() * 0.22;
      const s = 1 + Math.random() * 3;
      ctx.fillRect(Math.random() * 256, Math.random() * 256, s, s);
    }
    ctx.globalAlpha = 1;

    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(7, 26);
    tex.anisotropy = 4;
    this.tex.soil = tex;

    this.mat.soil.map = tex;
    this.mat.soil.needsUpdate = true;

    const geo = new THREE.PlaneGeometry(70, 260, 1, 1);
    const mesh = new THREE.Mesh(geo, this.mat.soil);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.z = -110;
    mesh.receiveShadow = true;
    mesh.userData.geo = geo;
    return mesh;
  }

  createSun() {
    const sun = new THREE.Mesh(this.geo.sun, this.mat.sun);
    sun.position.set(-34, 30, -150);
    return sun;
  }

  /** Glowing band on the ground marking where to act. */
  createZoneMarker(centerZ, halfDepth, lanesX) {
    const group = new THREE.Group();
    const width = Math.abs(lanesX[lanesX.length - 1] - lanesX[0]) + 4.5;

    const fill = new THREE.Mesh(new THREE.PlaneGeometry(width, halfDepth * 2), this.mat.zoneFill);
    fill.rotation.x = -Math.PI / 2;
    fill.position.set(0, 0.02, centerZ);
    group.add(fill);

    const edgeGeo = new THREE.BoxGeometry(width, 0.06, 0.18);
    const front = new THREE.Mesh(edgeGeo, this.mat.zoneEdge);
    const back = new THREE.Mesh(edgeGeo, this.mat.zoneEdge);
    front.position.set(0, 0.06, centerZ + halfDepth);
    back.position.set(0, 0.06, centerZ - halfDepth);
    group.add(front, back);

    group.userData.fill = fill;
    group.userData.edges = [front, back];
    group.userData.edgeGeo = edgeGeo;
    return group;
  }

  /* ---- Cleanup ----------------------------------------------------------- */

  dispose() {
    for (const k in this.geo) this.geo[k]?.dispose?.();
    for (const k in this.mat) this.mat[k]?.dispose?.();
    for (const k in this.tex) this.tex[k]?.dispose?.();
  }
}
