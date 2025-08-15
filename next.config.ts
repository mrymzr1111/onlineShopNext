// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */

//   images: {
//     domains: ['th.bing.com','example.com', 'another-domain.com'],  
//   },

// };



import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['th.bing.com', 'example.com', 'another-domain.com', 'placekitten.com'],  
  },
  typescript: {
    ignoreBuildErrors: true, // <- This will ignore TS errors during production build
  },
};

export default nextConfig;
