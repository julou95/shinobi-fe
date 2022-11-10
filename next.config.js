/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@import "@/styles/variables.scss";`,
  },
  images: {
    domains: ['shinobi-aws-s3-images-bucket.s3.eu-central-1.amazonaws.com']
  }
}

module.exports = nextConfig
