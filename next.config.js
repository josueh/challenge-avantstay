/** @type {import('next').NextConfig} */
const nextConfig = {
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
