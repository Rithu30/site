/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  assetPrefix: isProd ? '/site/' : '', // ✅ Repo name here
  trailingSlash: true, // ✅ Ensures routes work correctly
};

module.exports = nextConfig;
