import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/metatag-preview",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
