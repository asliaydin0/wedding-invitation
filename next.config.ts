import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local /public assets only — avoids SSL issues with remote CDNs in some networks
    remotePatterns: [],
  },
};

export default nextConfig;
