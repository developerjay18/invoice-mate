/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["pexels.com", "res.cloudinary.com", "images.unsplash.com"],
  },
  experimental: {
    serverActions: true,
  },
  functions: {
    "/api/extract": {
      maxDuration: 20, // Maximum duration in seconds (default is 10)
      memory: 512, // Memory allocation in MB (can be increased if needed)
    },
  },
};

export default nextConfig;
