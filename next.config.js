/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		NEXT_PUBLIC_EMAIL_ADDRESS: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
		NEXT_PUBLIC_EMAIL2FA_PASSWORD: process.env.NEXT_PUBLIC_EMAIL2FA_PASSWORD,
	},
};

module.exports = nextConfig;
