import { defineConfig } from "oxfmt";

export default defineConfig({
  ignorePatterns: ["dist/", "/pnpm-lock.yaml"],
  printWidth: 80,
  sortPackageJson: true,
  sortImports: {
    groups: [
      "side_effect",
      "builtin",
      "external",
      "internal",
      "parent",
      "sibling",
      "index",
      "subpath",
      "side_effect_style",
    ],
    internalPattern: ["~/", "@/", "#", "@cerbos/", "cerbos-"],
  },
});
