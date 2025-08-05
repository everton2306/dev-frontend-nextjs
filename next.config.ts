import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        // opcional: paths específicos
        // pathname: '/img/**',
      },
    ],
  },
};

export default nextConfig;
