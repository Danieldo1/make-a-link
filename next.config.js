/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: '*.googleusercontent.com',
            },
            {
                hostname: 'make-a-link.s3.amazonaws.com'
            }
        ],
    }
}

module.exports = nextConfig
