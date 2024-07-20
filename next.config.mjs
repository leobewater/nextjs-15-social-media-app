/** @type {import('next').NextConfig} */
const nextConfig = {
  // enable next 14 page caching
  experimental: {
    staleTimes: {
      dynamic: 30,
    },
  },
  // required for lucia
  serverExternalPackages: ["@node-rs/argon2"],
};

export default nextConfig;
