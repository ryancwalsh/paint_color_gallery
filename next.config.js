/* eslint-disable canonical/filename-match-exported */
/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: './', // See Readme about export script
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
