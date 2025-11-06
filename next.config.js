/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  trailingSlash: true,

  // Add these for GitHub Pages
  basePath: '/site',
  assetPrefix: '/site/',
};

module.exports = nextConfig;