/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "pixabay.com",        // ✅ correct domain
      "img.pixabay.com"     // optional (in case you use CDN images)
    ],
  },
};

export default nextConfig;
    