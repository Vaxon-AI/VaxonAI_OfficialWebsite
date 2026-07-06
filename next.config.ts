import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/what-we-do',
        destination: '/services',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
