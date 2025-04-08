/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        domains: [ 'res.cloudinary.com','t4.ftcdn.net','raw.githubusercontent.com'],
    },
    basePath: '/innovation-hacks',
    assetPrefix: '/innovation-hacks/',
    trailingSlash: true,
}

module.exports = nextConfig
