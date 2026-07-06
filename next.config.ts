import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/what-we-do',
        destination: '/services',
        permanent: true,
      },
      // Old product-mirroring service pages -> their product counterparts
      {
        source: '/services/document-intelligence',
        destination: '/products/document-intelligence',
        permanent: true,
      },
      {
        source: '/services/research-intelligence',
        destination: '/products/research-intelligence',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
