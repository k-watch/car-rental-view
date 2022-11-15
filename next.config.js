/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['interview.platdev.net'],
  },
};

module.exports = nextConfig;
