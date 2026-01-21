import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  {
    test: {
      name: "integration",
      environment: "node",
      include: ["tests/integration/**/*.test.ts"],
      setupFiles: ["./vitest.setup.ts"],
    },
    resolve: {
      alias: {
        "@elasticdash/client": new URL(
          "./packages/client/dist/index.mjs",
          import.meta.url,
        ).pathname,
        "@elasticdash/tracing": new URL(
          "./packages/tracing/dist/index.mjs",
          import.meta.url,
        ).pathname,
        "@elasticdash/otel": new URL(
          "./packages/otel/dist/index.mjs",
          import.meta.url,
        ).pathname,
        "@elasticdash/langchain": new URL(
          "./packages/langchain/dist/index.mjs",
          import.meta.url,
        ).pathname,
        "@elasticdash/openai": new URL(
          "./packages/openai/dist/index.mjs",
          import.meta.url,
        ).pathname,
        "@elasticdash/core": new URL(
          "./packages/core/dist/index.mjs",
          import.meta.url,
        ).pathname,
      },
    },
  },
  {
    test: {
      name: "e2e",
      environment: "node",
      include: ["tests/e2e/**/*.test.ts"],
      setupFiles: ["./vitest.setup.ts"],
      testTimeout: 30000, // Longer timeout for real HTTP calls
    },
    resolve: {
      alias: {
        "@elasticdash/client": new URL(
          "./packages/client/dist/index.mjs",
          import.meta.url,
        ).pathname,
        "@elasticdash/tracing": new URL(
          "./packages/tracing/dist/index.mjs",
          import.meta.url,
        ).pathname,
        "@elasticdash/otel": new URL(
          "./packages/otel/dist/index.mjs",
          import.meta.url,
        ).pathname,
        "@elasticdash/langchain": new URL(
          "./packages/langchain/dist/index.mjs",
          import.meta.url,
        ).pathname,
        "@elasticdash/openai": new URL(
          "./packages/openai/dist/index.mjs",
          import.meta.url,
        ).pathname,
        "@elasticdash/core": new URL(
          "./packages/core/dist/index.mjs",
          import.meta.url,
        ).pathname,
      },
    },
  },
]);
