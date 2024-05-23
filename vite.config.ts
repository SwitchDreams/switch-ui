/// <reference types="vitest" />
/// <reference types="vite/client" />

import { resolve } from "node:path";

import react from "@vitejs/plugin-react";
import { PluginPure } from "rollup-plugin-pure";
// eslint-disable-next-line tree-shaking/no-side-effects-in-initialization
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { viteStaticCopy } from "vite-plugin-static-copy";
import tsConfigPaths from "vite-tsconfig-paths";

import * as packageJson from "./package.json";
// https://vitejs.dev/config/
// @ts-ignore
export default defineConfig(({ mode }) => ({
  define: {
    "process.env.NODE_ENV": JSON.stringify(mode),
  },
  plugins: [
    react(),
    tsConfigPaths(),
    viteStaticCopy({
      targets: [
        {
          src: "src/tailwind.plugin.ts",
          dest: "",
        },
      ],
    }),
    dts({
      include: ["src/components/", "src/index.ts"],
      exclude: ["**/*.test.tsx", "**/*.stories.tsx"],
    }),
  ],
  build: {
    lib: {
      entry: resolve("src", "index.ts"),
      name: "SwitchUI",
      formats: ["es"],
      fileName: (format) => `ui.${format}.js`,
    },
    rollupOptions: {
      plugins: [
        PluginPure({
          sourcemap: true,
          functions: [
            "React.createElement",
            "React.forwardRef", // Used for heroicons
            "forwardRefWithAs",
            "cva",
          ],
        }),
      ],
      external: [
        ...Object.keys(packageJson.peerDependencies),
        ...Object.keys(packageJson.dependencies),
        "react-select/async",
        "react/jsx-runtime",
      ],
    },
    sourcemap: true,
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./src/tests/setup.ts"],
    testMatch: ["./tests/**/*.test.tsx"],
    globals: true,
  },
}));
