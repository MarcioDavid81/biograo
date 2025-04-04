/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "blog.local",
      },
      {
        protocol: "https",
        hostname: "biograo.api-mdwebdeveloper.com",
      },
    ],
  },
};

export default nextConfig;
