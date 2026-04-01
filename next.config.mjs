/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Common for industrial sites with local images
  },
};

export default nextConfig;
