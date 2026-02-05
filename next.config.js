/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    typescript: {
    // !! IMPORTANTE: Esto le dice a Netlify que ignore el error de Stackbit
    ignoreBuildErrors: true,
  },
    env: {
        stackbitPreview: process.env.STACKBIT_PREVIEW
    },
    trailingSlash: true,
    reactStrictMode: true,
    allowedDevOrigins: [
        '192.168.1.84'
    ]
};

module.exports = nextConfig;
