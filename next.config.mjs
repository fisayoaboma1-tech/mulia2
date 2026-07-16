/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Disable source maps to fix Turbopack source map error
  productionBrowserSourceMaps: false,
}

export default nextConfig

// Turbopack configuration to fix source map issues
if (process.env.NODE_ENV === 'development') {
  nextConfig.turbopack = {
    resolveAlias: {},
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  }
}
