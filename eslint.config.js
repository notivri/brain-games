import { defineConfig } from "eslint/config"
import globals from "globals"
import js from "@eslint/js"
import pluginVue from "eslint-plugin-vue"
import pluginPrettier from "eslint-plugin-prettier"

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,vue}"] },
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  pluginVue.configs["flat/recommended"],
  {
    files: ["**/*.vue", "**/*.js", "**/*.mjs", "**/*.cjs"],
    plugins: { prettier: pluginPrettier },
    rules: {
      "prettier/prettier": ["error", { semi: false }],
      "import/no-undef": "off",
      "no-undef": "off",
    },
  },
  {
    rules: {
      // override/add rules settings here, such as:
      // 'vue/no-unused-vars': 'error'
    },
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
  },
])
