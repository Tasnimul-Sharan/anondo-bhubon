/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/downloads/anondo-bhubon-brochure.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'inline; filename="Anondo Bhubon Brochure.pdf"',
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/notice", destination: "/certification", permanent: true },
      // Match document slugs, not the original images served from public/notice.
      {
        source: "/notice/:slug([a-z0-9-]+)",
        destination: "/certification/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
