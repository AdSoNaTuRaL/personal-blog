/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: "default",
    domains: [
      "localhost",
      "adsonatural-blog-backend-c4p7l.ondigitalocean.app",
      "adsonatural-blog-aws-s3-images-bucket.s3.eu-central-1.amazonaws.com",
    ],
  },
}

module.exports = nextConfig
