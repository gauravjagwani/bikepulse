/** @type {import('next').NextConfig} */
// const nextConfig = {

// };

// export default nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.sanity.io",
      },
    ],
  },
};
