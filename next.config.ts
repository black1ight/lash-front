import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	devIndicators: false,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'placehold.co'
			}
		],
		unoptimized: true
	}
}

export default nextConfig
