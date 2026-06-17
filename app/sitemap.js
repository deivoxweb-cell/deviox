import { blogPosts } from "@/src/data/blogPosts";

const SITE_URL = "https://deivoxbcp.com";

const staticRoutes = [
  { path: "",                                  changeFreq: "weekly",  priority: 1.0 },
  { path: "/about",                            changeFreq: "monthly", priority: 0.8 },
  { path: "/services",                         changeFreq: "monthly", priority: 0.9 },
  { path: "/contact",                          changeFreq: "monthly", priority: 0.8 },
  { path: "/blog",                             changeFreq: "weekly",  priority: 0.8 },
  // Core service pages — high priority for search
  { path: "/boiler-circulation-pump",          changeFreq: "monthly", priority: 0.9 },
  { path: "/boiler-circulation-pump-repair",   changeFreq: "monthly", priority: 0.9 },
  { path: "/boiler-water-circulation-pump",    changeFreq: "monthly", priority: 0.9 },
  { path: "/boiler-water-circulation-pump-repair", changeFreq: "monthly", priority: 0.9 },
  { path: "/bcp-overhauling-services",         changeFreq: "monthly", priority: 0.9 },
  { path: "/bcp-pump",                         changeFreq: "monthly", priority: 0.85 },
  { path: "/motor-rewinding-services",         changeFreq: "monthly", priority: 0.85 },
  { path: "/in-situ-machining-services",       changeFreq: "monthly", priority: 0.85 },
  { path: "/industrial-pump-maintenance",      changeFreq: "monthly", priority: 0.85 },
  { path: "/submersible-pump-repair",          changeFreq: "monthly", priority: 0.85 },
  { path: "/composite-material",               changeFreq: "monthly", priority: 0.75 },
  { path: "/power-generation",                 changeFreq: "monthly", priority: 0.75 },
  { path: "/iso-certificate",                  changeFreq: "yearly",  priority: 0.6  },
];

export default function sitemap() {
  const pages = staticRoutes.map(({ path, changeFreq, priority }) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: changeFreq,
    priority,
  }));
  const articles = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.7,
  }));
  return [...pages, ...articles];
}
