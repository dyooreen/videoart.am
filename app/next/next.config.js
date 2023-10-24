/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "videoart.am",
      },
    ],
  },
};

module.exports = nextConfig;
