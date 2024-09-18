/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        pathname: "/recipe-images/**", // Specify the path or `/**` for all
      },
    ],
  },
};

export default nextConfig;
