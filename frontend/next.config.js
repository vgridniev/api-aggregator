/** @type {import('next').NextConfig} */
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
		API_URL: process.env.API_URL,
	},
};

module.exports = nextConfig;
