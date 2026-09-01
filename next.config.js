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
    domains: ["localhost", 'nameless-plains-58678-57bc37344216.herokuapp.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://nameless-plains-58678-57bc37344216.herokuapp.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  swcMinify: true,
  productionBrowserSourceMaps: true,
})

module.exports = nextConfig
