/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'imglite.avantstay.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/homes',
      },
    ]
  },
}

module.exports = nextConfig
