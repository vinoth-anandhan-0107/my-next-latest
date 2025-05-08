// next.config.js
import nextI18NextConfig from './next-i18next.config.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...nextI18NextConfig, // spread the i18n config
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
