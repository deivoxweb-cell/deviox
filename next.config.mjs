/** @type {import('next').NextConfig} */
const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://maps.googleapis.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' blob: data: https://www.googletagmanager.com https://www.google-analytics.com https://stats.g.doubleclick.net https://grainy-gradients.vercel.app https://maps.gstatic.com https://*.googleapis.com https://*.ggpht.com;
    font-src 'self' https://fonts.gstatic.com;
    connect-src 'self' https://www.google-analytics.com https://stats.g.doubleclick.net https://*.googleapis.com;
    frame-src 'self' https://www.google.com https://maps.google.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`.replace(/\n/g, "").replace(/\s{2,}/g, " ").trim();

const nextConfig = {
  reactStrictMode: true,
  compress: true,
  async redirects() {
    return [
      {
        source: "/bcp-pump",
        destination: "/boiler-circulation-pump",
        permanent: true,
      },
      {
        source: "/boiler-water-circulation-pump",
        destination: "/boiler-circulation-pump",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader,
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
