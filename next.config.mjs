/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
