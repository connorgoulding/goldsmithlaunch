/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { 
    unoptimized: true
  },
  // THIS IS THE MAGIC LINE THAT FIXES THE REACT 19 BUG:
  transpilePackages: ['next-mdx-remote']
};

export default nextConfig;
