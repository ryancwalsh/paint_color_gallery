/* eslint-disable canonical/filename-match-exported */
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
