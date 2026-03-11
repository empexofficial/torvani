import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "1clfha3f90.ucarecd.net",
      },
    ],
  },
};

export default nextConfig;
