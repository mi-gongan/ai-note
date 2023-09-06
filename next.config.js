/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  rewrites: async () => [
    {
      source: "/server/:path*",
      destination: process.env.SERVER_URL + `/:path*`,
    },
  ],
  httpAgentOptions: {
    keepAlive: true,
  },
};

module.exports = nextConfig;
