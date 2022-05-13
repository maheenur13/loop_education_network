/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			'upload.wikimedia.org',
			'www.pngitem.com',
			'content.techgig.com',
			'encrypted-tbn0.gstatic.com',
			'online.stanford.edu',
			'storage.googleapis.com',
		],
	},
	env: {
		nodeENV: process.env.NODE_ENV,
		newsAPI: process.env.TESLA_NEWS_API,
		publicURL: process.env.PUBLIC_URL,
		apiAuthURL: process.env.API_AUTH_URL,
	},
};

module.exports = nextConfig;
