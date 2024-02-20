/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects(){
        return [
            {
            source: '/login',
            destination: '/public/login',
            permanent: true,
            },
        ]
    }
};

export default nextConfig;
