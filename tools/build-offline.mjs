/* Builds the optional file://-openable fallback bundle.
 *
 *   1) npm install esbuild      (needs the npm registry, once)
 *   2) node tools/build-offline.mjs
 *
 * Produces dist/cropvision.bundle.js — a single classic script that inlines the
 * game AND the vendored Three.js, so index-offline.html works straight off the
 * filesystem (no server, no import map, no network). The served/localhost build
 * (index.html) remains the primary, recommended path.
 */
import * as esbuild from "esbuild";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const vendorBuild = path.join(root, "vendor/three/build/three.module.min.js");
const vendorAddons = path.join(root, "vendor/three/addons");

/** Resolve bare "three" / "three/addons/*" to the vendored files. */
const vendorPlugin = {
  name: "three-vendor",
  setup(build) {
    build.onResolve({ filter: /^three$/ }, () => ({ path: vendorBuild }));
    build.onResolve({ filter: /^three\/addons\// }, (args) => ({
      path: path.join(vendorAddons, args.path.replace("three/addons/", "")),
    }));
  },
};

await esbuild.build({
  entryPoints: [path.join(root, "src/main.js")],
  bundle: true,
  format: "iife",
  minify: true,
  target: ["chrome90", "firefox90", "safari15"],
  legalComments: "none",
  outfile: path.join(root, "dist/cropvision.bundle.js"),
  plugins: [vendorPlugin],
});

console.log("Built dist/cropvision.bundle.js");
