#!/usr/bin/env node
import * as esbuild from "esbuild";
import { compile } from "@lwe8/dts";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const _package = require("./package.json");

const yn = new Date().getFullYear();
const yearNow = yn > 2025 ? `-${yn}` : "";
//
const bannerText = `
/*!
 * ${_package.name} v${_package.version} -- Copyright (c) 2025${yearNow} ${_package.author} -- license ${_package.license}
 */
`;
const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));
const buildFns = [
  async function () {
    await esbuild.build({
      entryPoints: ["src/index.ts"],
      outdir: "dist",
      format: "esm",
      banner: {
        js: bannerText,
      },
    });
  },
  async function () {
    await esbuild.build({
      entryPoints: ["src/index.ts"],
      format: "cjs",
      outfile: "dist/index.cjs",
      banner: {
        js: bannerText,
      },
    });
  },
  async function () {
    await wait(1000);
    compile("dist/index.js", "dist");
  },
];

for await (const fn of buildFns) {
  await fn();
}
