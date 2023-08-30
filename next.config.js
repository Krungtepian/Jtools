/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/home",
                destination: "/Pages/home"
            },
            {
                source: "/about-us",
                destination: "/Pages/about-us"
            },
            {
                source: "/contact-us",
                destination: "/Pages/contact-us"
            },
            {
                source: "/customer-service",
                destination: "/Pages/customer-service"
            },
            {
                source: "/blog-feed",
                destination: "/Pages/blog-feed"
            },
        ];
    }
};

module.exports = nextConfig;
