import { blogPosts } from "@/src/data/blogPosts";

const SITE_URL = "https://deivoxbcp.com";

const routes = [
  "", "/about", "/blog", "/boiler-circulation-pump",
  "/composite-material", "/contact",
  "/iso-certificate", "/power-generation", "/services",
  "/submersible-pump-repair",
];

export default function sitemap() {
  const pages = routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
  const articles = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.7,
  }));
  return [...pages, ...articles];
}
