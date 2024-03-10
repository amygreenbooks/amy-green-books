const withMDX = require("@next/mdx")();
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: true,
});

/** @type {import('next').NextConfig} */
let nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  reactStrictMode: true,
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./cloudinary-loader.ts",
  },
};

nextConfig = withMDX(nextConfig);

if (process.env.ANALYZE === "true") {
  nextConfig = withBundleAnalyzer(nextConfig);
}

module.exports = nextConfig;
