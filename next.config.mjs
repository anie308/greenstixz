/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        formats:['image/webp'],
        remotePatterns:[
            {
                protocol: "https",
                hostname: "images.ctfassets.net",
                port: ''
            }
        ]
    }
};

export default nextConfig;
