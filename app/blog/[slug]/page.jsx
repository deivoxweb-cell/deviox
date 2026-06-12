import React from "react";
import { blogPosts } from "@/src/data/blogPosts";
import SeoPageLayout from "@/src/components/SeoPageLayout";
import { notFound } from "next/navigation";
import Link from "next/link";

const SITE_URL = "https://deivoxbcp.com";

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${post.slug}`,
      images: post.image ? [{ url: post.image }] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const breadcrumb = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title },
  ];

  const relatedLinks = [
    { label: "Boiler Circulation Pump Overhauling", href: "/boiler-circulation-pump" },
    { label: "Boiler Water Circulation Pump Repair", href: "/boiler-water-circulation-pump" },
    { label: "BCP Pump Services", href: "/bcp-pump" },
  ];

  return (
    <>
      {/* React 19 Head Hoisting */}
      <title>{`${post.title} — DEI VOX India`}</title>
      <meta name="description" content={post.excerpt} />

      <SeoPageLayout
        breadcrumb={breadcrumb}
        relatedLinks={relatedLinks}
        heroImage={post.image}
      >
        <div className="flex items-center gap-6 text-[10px] text-black/30 font-bold uppercase tracking-wider mb-6">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
          <span>•</span>
          <span className="text-accent">{post.category}</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-black uppercase mb-6 leading-tight">
          {post.title}
        </h1>
        <div className="w-20 h-2 bg-accent mb-12" />

        {renderMarkdown(post.content)}

        <div className="mt-16 pt-8 border-t border-black/5 flex items-center justify-between text-xs text-black/40 font-semibold">
          <span>Published by {post.author}</span>
        </div>
      </SeoPageLayout>
    </>
  );
}

function renderMarkdown(content) {
  if (!content) return null;
  const blocks = content.split(/\n\n+/);
  return blocks.map((block, index) => {
    const trimmed = block.trim();
    if (!trimmed) return null;

    // Headings
    if (trimmed.startsWith("### ")) {
      return (
        <h3 key={index} className="text-xl md:text-2xl font-bold text-primary uppercase tracking-tight mt-10 mb-4">
          {parseInline(trimmed.substring(4))}
        </h3>
      );
    }
    if (trimmed.startsWith("#### ")) {
      return (
        <h4 key={index} className="text-base font-bold text-primary uppercase tracking-wide mt-6 mb-2">
          {parseInline(trimmed.substring(5))}
        </h4>
      );
    }

    // Unordered List
    if (trimmed.startsWith("- ")) {
      const items = trimmed.split(/\n- /);
      return (
        <ul key={index} className="list-disc list-inside space-y-3 text-sm text-foreground/80 font-medium my-6">
          {items.map((item, itemIdx) => {
            const cleanItem = item.replace(/^- /, "").trim();
            return <li key={itemIdx}>{parseInline(cleanItem)}</li>;
          })}
        </ul>
      );
    }

    // Table
    if (trimmed.startsWith("|")) {
      const lines = trimmed.split("\n");
      const headers = lines[0].split("|").map(h => h.trim()).filter(Boolean);
      const rows = lines.slice(2).map(line => line.split("|").map(cell => cell.trim()).filter(Boolean)).filter(row => row.length > 0);
      return (
        <div key={index} className="overflow-x-auto my-8 border border-black/5 rounded-2xl">
          <table className="min-w-full divide-y divide-black/5 text-sm bg-white">
            <thead className="bg-[#FAFFA4]/10">
              <tr>
                {headers.map((h, i) => (
                  <th key={i} className="px-6 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-black/60">
                    {parseInline(h)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {rows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-black/[0.01]">
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="px-6 py-4 text-foreground/80 font-medium">
                      {parseInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    // Regular Paragraph
    return (
      <p key={index} className="text-foreground/80 text-sm md:text-base font-medium leading-relaxed mb-6">
        {parseInline(trimmed)}
      </p>
    );
  });
}

function parseInline(text) {
  // Combined regex to capture bold (**text**) and links ([text](href))
  const pattern = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  const parts = text.split(pattern);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-extrabold text-black">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("[") && part.includes("](")) {
      const closeBracketIdx = part.indexOf("]");
      const linkText = part.slice(1, closeBracketIdx);
      const url = part.slice(closeBracketIdx + 2, -1);
      
      const isInternal = url.startsWith("/");
      if (isInternal) {
        return (
          <Link
            key={i}
            href={url}
            className="text-accent hover:text-black hover:underline font-bold transition-all"
          >
            {linkText}
          </Link>
        );
      }
      return (
        <a
          key={i}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-black hover:underline font-bold transition-all"
        >
          {linkText}
        </a>
      );
    }
    return part;
  });
}
