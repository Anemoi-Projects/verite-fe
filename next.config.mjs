/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    apiURL: "https://verite-be.vercel.app",
  },
  images: {
    remotePatterns: [new URL("https://res.cloudinary.com/**")],
  },
};

export default nextConfig;
