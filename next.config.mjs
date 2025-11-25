/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // apiURL: "http://localhost:8080",
    apiURL: "https://verite-be.vercel.app",
  },
  images: {
    remotePatterns: [new URL("https://res.cloudinary.com/**")],
  },
};

export default nextConfig;
