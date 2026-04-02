import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  reactCompiler: true,
  experimental: {
    allowedDevOrigins: ['192.168.0.105'],
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fayumi.in",
      },
    ],
  },
};

export default nextConfig;
