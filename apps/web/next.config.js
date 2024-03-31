/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: [
    "@repo/ui",
    "@repo/tailwind-config",
    "@repo/nextui-config",
  ],
  images: {
    domains: ['images.unsplash.com'],
  },
};
