/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizeCss: false,
  },
};

export default nextConfig;
