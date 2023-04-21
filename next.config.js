// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  output: 'export',
  basePath: '/nextjs-test',
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
