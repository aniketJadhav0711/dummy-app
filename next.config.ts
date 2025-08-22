import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // async rewrites() {
  //   return [
  //     {
  //       source: "/dfsmedia/:slug*",
  //       destination: "https://sitecore.test.jlgagriculture.com/dfsmedia/:slug*",
  //     },
  //   ];
  // },
  images: {
    dangerouslyAllowSVG: true,
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "sitecore.test.jlgagriculture.com",
    //     port: "",
    //     pathname: "/**",
    //   },
    // ],
  },
};

export default nextConfig;
