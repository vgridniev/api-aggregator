/** @type {import('next').NextConfig} */

console.log('NEXT_PUBLIC_API_URL in nextConfig:', process.env.NEXT_PUBLIC_API_URL);
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com'
			},
			{
				protocol: 'https',
				hostname: 'avatar.vercel.sh'
			},
			{
				protocol: 'https',
				hostname: 'media.api-sports.io'
			}
		]
	},
	env: {
		NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
	},
};

module.exports = nextConfig;
