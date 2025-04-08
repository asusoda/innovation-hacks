/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        domains: [ 'res.cloudinary.com','t4.ftcdn.net','raw.githubusercontent.com'],
    },
    trailingSlash: true,
}

module.exports = nextConfig
