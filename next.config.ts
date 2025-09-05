import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["http://localhost:3000/*", "192.168.1.201"],
};

export default nextConfig;
