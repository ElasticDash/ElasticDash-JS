/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  entryPoints: [
    "./packages/core",
    "./packages/client",
    "./packages/langchain",
    "./packages/openai",
    "./packages/otel",
    "./packages/tracing",
  ],
  entryPointStrategy: "packages",
  name: "ElasticDash JS/TS SDKs",
  navigationLinks: {
    GitHub: "https://github.com/terryjiang2020/ElasticDash-JS",
    Docs: "https://langfuse.com/docs/sdk/typescript",
  },
};
