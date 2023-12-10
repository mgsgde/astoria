/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'development' ? '' : '/astoria/webapp/out',
  assetPrefix: process.env.NODE_ENV === 'development' ? '' : '/astoria/webapp/out',
};

module.exports = nextConfig;
