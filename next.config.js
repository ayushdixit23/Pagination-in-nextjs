/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		// remotePatterns:
		// 	[{
		// 		protocol: "https",
		// 		hostname: "fakestoreapi.com",
		// 		pathname: "/products",
		// 	}]

		domains: ["fakestoreapi.com"],

	}
}

module.exports = nextConfig
