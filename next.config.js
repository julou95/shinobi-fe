/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: 'public',
  register: true,
  skipWaiting: true,
})

const nextConfig = withPWA({
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@import "@/styles/variables.scss";`,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'renowned-hope-a2af077664.media.strapiapp.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  swcMinify: true,
  productionBrowserSourceMaps: true,
})

module.exports = nextConfig
