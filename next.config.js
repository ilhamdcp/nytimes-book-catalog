/** @type {import('next').NextConfig} */
const nextConfig = module.exports = {
    reactStrictMode: true,
    env: {
        REACT_APP_BASE_URL: process.env.REACT_APP_BASE_URL,
        REACT_APP_API_KEY: process.env.REACT_APP_API_KEY,
    }
}

module.exports = nextConfig
