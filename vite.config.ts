/// <reference types="vitest" />
/// <reference types="vite/client" />

import { resolve } from "node:path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { viteStaticCopy } from "vite-plugin-static-copy";
import tsConfigPaths from "vite-tsconfig-paths";

import * as packageJson from "./package.json";
import { PluginPure } from "rollup-plugin-pure";
// https://vitejs.dev/config/
export default defineConfig(() => ({
  define: {
    'process.env.NODE_ENV': '"production"',
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
          functions: [
            "React.forwardRef",  // Used for herocions
          ],
          // exclude: [],
          // sourcemap: true,
        }),
      ],
      external: [...Object.keys(packageJson.peerDependencies), "react/jsx-runtime"],
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
