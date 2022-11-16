/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'interview.platdev.net',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
