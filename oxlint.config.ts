import { defineConfig } from "oxlint";

export default defineConfig({
  categories: {
    correctness: "error",
  },
  env: {
    node: true,
  },
  ignorePatterns: ["dist/", "/pnpm-lock.yaml"],
  plugins: ["typescript"],
});
