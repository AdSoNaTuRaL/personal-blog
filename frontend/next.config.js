/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: "default",
    domains: [
        "localhost",
        "adsonatural-blog-backend-c4p7l.ondigitalocean.app"
    ],
  },
}

module.exports = nextConfig
