/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'fr-FR', 'es-ES'],
    defaultLocale: 'en-US',
    localeDetection: false,
  },
}

module.exports = nextConfig
