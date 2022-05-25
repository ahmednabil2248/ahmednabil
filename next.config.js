/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  i18n: {
    locales: ["en-US", "ar"],
    defaultLocale: "ar",
    localeDetection: false,
  },
  reactStrictMode: true,
  images: {
    domains: [
      "i5.walmartimages.com",
      "raw.githubusercontent.com",
      "img.icons8.com",
    ],
  },
};
