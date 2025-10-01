import { defineConfig } from "vite"
import path from "node:path"
import vue from "@vitejs/plugin-vue"
import autoImport from "unplugin-auto-import/vite"

// https://vite.dev/config/
export default defineConfig({
  build: {
    target: "esnext",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    vue(),
    autoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
      ],
      imports: ["vue"],
    }),
  ],
  server: {
    host: "0.0.0.0",
  },
})
