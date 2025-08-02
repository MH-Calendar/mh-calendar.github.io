import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/mh-calendar',
  assetPrefix: '/mh-calendar',
};

export default nextConfig;
