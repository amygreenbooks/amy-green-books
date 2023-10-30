const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: true,
});

/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
};

if (process.env.ANALYZE === "true") {
  nextConfig = withBundleAnalyzer(nextConfig);
}

module.exports = nextConfig;
