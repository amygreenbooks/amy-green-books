const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: true,
});

/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./cloudinary-loader.ts",
  },
};

if (process.env.ANALYZE === "true") {
  nextConfig = withBundleAnalyzer(nextConfig);
}

module.exports = nextConfig;
