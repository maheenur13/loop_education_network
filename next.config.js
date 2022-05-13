/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
	reactStrictMode: true,
	env: {
		nodeENV: process.env.NODE_ENV,
		newsAPI: process.env.TESLA_NEWS_API,
		publicURL: process.env.PUBLIC_URL,
		apiAuthURL: process.env.API_AUTH_URL,
	},
};

module.exports = nextConfig;