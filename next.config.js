const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
  i18n: {
    locales: ['pt-BR', 'en-US', 'es-ES'],
    defaultLocale: 'pt-BR',
  }
};

module.exports = () => {

  const plugins = [withPWA];
  const config = plugins.reduce((acc, next) => next(acc), {
    ...nextConfig,
  });
  return config;
};
