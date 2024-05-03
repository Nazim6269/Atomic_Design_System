const TS = require("rollup-plugin-typescript2");

module.exports = {
  input: ["src/index.ts", "src/atoms/Button/index.tsx"],
  output: {
    dir: "lib",
    format: "esm",
    sourcemap: true,
    preserveModules: true,
  },
  plugins: [TS()],
  external: ["react", "@design_system/scss/lib/button.css"],
};
