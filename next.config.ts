import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, 
  swcMinify: true, 
  env: {
    MY_ENV_VARIABLE: process.env.MY_ENV_VARIABLE, 
  },
};

export default nextConfig;
