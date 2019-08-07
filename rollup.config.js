import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import json from "rollup-plugin-json";
import { terser } from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH;
const dist = "public";

export default {
  input: "src/main.mjs",
  output: {
    sourcemap: true,
    format: "esm",
    file: `${dist}/bundle.mjs`
  },
  plugins: [
    svelte({
      dev: !production
    }),

    resolve(),
    commonjs(),
    json({
      preferConst: true,
      compact: true
    }),
    production && terser()
  ],
  watch: {
    clearScreen: false
  }
};
