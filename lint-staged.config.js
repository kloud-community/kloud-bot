export default {
  "./src/**/*.ts": [
    "bun biome format --write",
    "bun biome lint",
  ],
}
