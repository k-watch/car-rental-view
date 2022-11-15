/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['interview.platdev.net'],
    unoptimized: true,
  },
};

module.exports = nextConfig;
