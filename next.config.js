/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { 
    unoptimized: true // Cloudflare requires this for static exports!
  }
};

export default nextConfig;
