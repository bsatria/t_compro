import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static5.depositphotos.com',
        port: '',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'st5.depositphotos.com',
        port: '',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'static7.depositphotos.com',
        port: '',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'st2.depositphotos.com',
        port: '',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
        port: '',
        search: '',
      },
    ],
  },
};

export default nextConfig;
