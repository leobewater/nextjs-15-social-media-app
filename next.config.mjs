/** @type {import('next').NextConfig} */
const nextConfig = {
  // enable next 14 page caching
  experimental: {
    staleTimes: {
      dynamic: 30,
    },
  },
};

export default nextConfig;
