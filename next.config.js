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
    domains: ['shinobi-aws-s3-images-bucket.s3.eu-central-1.amazonaws.com']
  },
  swcMinify: true,
  productionBrowserSourceMaps: true,
})

module.exports = nextConfig
