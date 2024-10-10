/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath:"/one-million",
    output:"export",
    assetPrefix:"//one-million/",
    reactStrictMode: true,
    images: { unoptimized: true }
};

export default nextConfig;
