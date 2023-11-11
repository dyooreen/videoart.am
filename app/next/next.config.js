/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:username(@[a-zA-Z0-9]+)/:id*',
        destination: "/specialists/:username/:id*",
      }
    ]
  },
  images: {
    remotePatterns: [
      {
        hostname: "videoart.am",
      },
      {
        hostname: "strapi",
      }
    ],
  },
};

module.exports = nextConfig;
