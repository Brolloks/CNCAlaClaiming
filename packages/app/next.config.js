/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	webpack: function (config, options) {
		config.experiments = {
			asyncWebAssembly: true,
			layers: true,
		};
		return config;
	},
	swcMinify: true,
	/**
	 * Note that this can change/break without warning.
	 * @see https://github.com/vercel/next.js/pull/22867
	 */
	experimental: {
		externalDir: true,
	},
	env: {
		PROJECT_ID: process.env.PROJECT_ID,
	},
};

module.exports = nextConfig;
