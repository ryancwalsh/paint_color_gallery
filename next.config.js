/* eslint-disable canonical/filename-match-exported */
/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: 'assets', // `package.json` should have a script like: `"export": "rm -rf docs && next build && next export -o docs && mkdir docs/assets && mv docs/_next docs/assets/_next",` https://github.com/vercel/next.js/issues/2581#issuecomment-628307796
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
