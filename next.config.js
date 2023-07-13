/** @type {import('next').NextConfig} */
const nextConfig = {
    // Transpile Swagger UI React. https://github.com/swagger-api/swagger-ui/issues/8245
    transpilePackages: ['react-syntax-highlighter', 'swagger-client', 'swagger-ui-react'],
    experimental: {
        serverComponentsExternalPackages: ["typeorm","swagger-jsdoc"],
      },
}

module.exports = nextConfig
