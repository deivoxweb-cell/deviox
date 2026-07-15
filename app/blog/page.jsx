"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Calendar, User, Clock, ArrowUpRight, ChevronRight, X, Image as ImageIcon, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/src/data/blogPosts";

const categories = ["All", "Engineering", "Maintenance", "Electrical"];

const imagePresets = [
  { path: "/images/bcp_overhauling.png", label: "BCP Overhauling" },
  { path: "/images/insitu_machining.png", label: "Insitu Machining" },
  { path: "/images/motor_rewinding.png", label: "Motor Rewinding" },
  { path: "/images/reverse_engineering.png", label: "Reverse Engineering" },
];

export default function BlogListPage() {
  const [allPosts, setAllPosts] = useState(blogPosts);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const containerRef = useRef(null);

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  // Form State
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("Engineering");
  const [selectedImage, setSelectedImage] = useState("/images/bcp_overhauling.png");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Load localStorage posts on mount
  useEffect(() => {
    try {
      const localPostsRaw = localStorage.getItem("deivox_blog_posts");
      if (localPostsRaw) {
        const localPosts = JSON.parse(localPostsRaw);
        // Avoid adding duplicate slugs if any
        const filteredLocal = localPosts.filter(
          (lp) => !blogPosts.some((sp) => sp.slug === lp.slug)
        );
        setAllPosts([...filteredLocal, ...blogPosts]);
      }
    } catch (e) {
      console.error("Failed to load local storage posts", e);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yHeroText = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const filteredPosts = selectedCategory === "All"
    ? allPosts
    : allPosts.filter(post => post.category === selectedCategory);

  // Dynamic Featured Post selection & Pagination (5 posts per page)
  const postsPerPage = 5;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const featuredPost = currentPage === 1 ? filteredPosts[0] : null;
  const regularPosts = currentPage === 1
    ? filteredPosts.slice(1, postsPerPage)
    : filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  // Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim() || !excerpt.trim() || !content.trim()) {
      setError("Please fill out all required fields.");
      return;
    }

    const generatedSlug = title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "") // remove non-word chars
      .replace(/[\s_]+/g, "-") // replace spaces with hyphens
      .replace(/^-+|-+$/g, ""); // trim leading/trailing hyphens

    // Check if slug already exists
    const isDuplicate = allPosts.some((post) => post.slug === generatedSlug);
    if (isDuplicate) {
      setError("An article with this title already exists. Please choose a unique title.");
      return;
    }

    // Auto-calculate read time (assume 200 words per minute reading speed)
    const wordCount = content.trim().split(/\s+/).length;
    const readTimeMin = Math.max(1, Math.ceil(wordCount / 200));

    const newPost = {
      id: Date.now(),
      title: title.trim(),
      slug: generatedSlug,
      excerpt: excerpt.trim(),
      content: content.trim(),
      author: author.trim(),
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      readTime: `${readTimeMin} min read`,
      image: selectedImage,
      category,
    };

    // Save to localStorage
    try {
      const localPostsRaw = localStorage.getItem("deivox_blog_posts");
      const localPosts = localPostsRaw ? JSON.parse(localPostsRaw) : [];
      localPosts.unshift(newPost);
      localStorage.setItem("deivox_blog_posts", JSON.stringify(localPosts));
    } catch (err) {
      console.error("Failed to write post to local storage", err);
    }

    // Update State
    setAllPosts([newPost, ...allPosts]);
    
    // Clear Form & Show Success
    setTitle("");
    setAuthor("");
    setExcerpt("");
    setContent("");
    setError("");
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      setIsOpenForm(false);
    }, 1500);
  };

  return (
    <div className="bg-[#F5F5F5] text-black selection:bg-accent selection:text-black min-h-screen" ref={containerRef}>
      
      {/* ── 1. Brutalist Hero Section ──────────────── */}
      <section className="relative min-h-[70vh] flex flex-col justify-center pt-40 pb-20 overflow-hidden px-4 bg-black text-white">
        <div className="absolute inset-0 opacity-[0.03] industrial-grid pointer-events-none" />
        <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-accent/15 sm:bg-accent/25 rounded-full blur-[80px] sm:blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[250px] h-[250px] bg-primary/20 rounded-full blur-[80px] pointer-events-none" />

        {/* Floating dot particles */}
        {[
          { top: "15%", left: "6%", size: 5, delay: 0, dur: 4 },
          { top: "40%", left: "2%", size: 3, delay: 1.5, dur: 5 },
          { top: "70%", left: "12%", size: 4, delay: 0.8, dur: 6 },
          { top: "25%", left: "55%", size: 3, delay: 2, dur: 4.5 },
          { top: "80%", left: "60%", size: 5, delay: 0.3, dur: 5.5 },
        ].map((dot, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -12, 0], opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: dot.dur, delay: dot.delay, repeat: Infinity, ease: "easeInOut" }}
            className="absolute rounded-full bg-accent pointer-events-none"
            style={{ top: dot.top, left: dot.left, width: dot.size, height: dot.size }}
          />
        ))}

        <motion.div style={{ y: yHeroText, opacity: opacityHero }} className="relative z-20 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-12 bg-accent" />
            <p className="text-accent text-[10px] font-bold uppercase tracking-[0.3em]">
              KNOWLEDGE HUB & ARTICLES
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-[72px] font-extrabold tracking-[-0.04em] uppercase leading-[0.88] mb-8"
          >
            Engineering<br />
            <span className="text-white/20">Insights.</span>
          </motion.h1>

          <div className="flex items-center gap-6 sm:gap-8 mt-12">
            <div className="h-px w-16 sm:w-24 bg-white/10" />
            <p className="text-white/40 text-base sm:text-lg max-w-md font-medium leading-relaxed">
              Deep dives into Boiler Circulation Pumps, mechanical casing restoration, and specialized motor rewinding technologies.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── 2. Category Filter & Content Grid ─────────────────── */}
      <section className="max-w-7xl mx-auto px-4 py-24 relative z-30">
        
        {/* Category Selector & Write Button */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-black/5 pb-12 mb-16">
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-black text-white shadow-xl"
                    : "bg-white text-black/60 border border-black/5 hover:bg-black/5 hover:text-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpenForm(true)}
            className="flex items-center gap-3 bg-accent text-black px-8 py-3 rounded-full text-[11px] font-bold uppercase tracking-wider hover:bg-black hover:text-white hover:shadow-black/20 hover:scale-103 transition-all duration-300 active:scale-95 self-start md:self-auto shadow-lg shadow-accent/15"
          >
            <span>Write Article</span>
            <span className="text-base font-extrabold">+</span>
          </button>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-xl font-medium text-black/40">No articles found in this category.</p>
          </div>
        ) : (
          <>
            {/* Featured Post */}
            {featuredPost && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-20"
              >
                <p className="text-[10px] font-extrabold text-accent uppercase tracking-[0.3em] mb-6">LATEST ARTICLE</p>
                <div className="bg-white rounded-[2.5rem] overflow-hidden border border-black/5 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0 group">
                  {/* Image */}
                  <div className="lg:col-span-7 relative min-h-[350px] lg:min-h-[480px] overflow-hidden">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-102 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute top-6 left-6 bg-black text-accent text-[9px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                      {featuredPost.category}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between bg-[#0a0a0a] text-white">
                    <div>
                      <div className="flex items-center gap-6 text-[10px] text-white/40 font-bold uppercase tracking-wider mb-6">
                        <span className="flex items-center gap-1.5"><Calendar size={12} className="text-accent" />{featuredPost.date}</span>
                        <span className="flex items-center gap-1.5"><Clock size={12} className="text-accent" />{featuredPost.readTime}</span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight leading-tight mb-6 hover:text-accent transition-colors">
                        <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                      </h2>

                      <p className="text-white/50 text-sm font-medium leading-relaxed mb-8">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-8 border-t border-white/5">
                      <span className="text-[11px] font-semibold text-white/40 uppercase tracking-widest flex items-center gap-2">
                        <User size={12} className="text-accent" /> {featuredPost.author}
                      </span>

                      <Link href={`/blog/${featuredPost.slug}`}>
                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-black group-hover:rotate-45 transition-transform duration-500">
                          <ArrowUpRight size={20} />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Regular Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-[2.5rem] border border-black/5 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-between group"
                >
                  <div>
                    {/* Image */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-103 transition-transform duration-750"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      <span className="absolute bottom-4 left-4 bg-black text-accent text-[9px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                        {post.category}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="p-8 sm:p-10">
                      <div className="flex items-center gap-6 text-[10px] text-black/30 font-bold uppercase tracking-wider mb-6">
                        <span className="flex items-center gap-1.5"><Calendar size={12} className="text-accent" />{post.date}</span>
                        <span className="flex items-center gap-1.5"><Clock size={12} className="text-accent" />{post.readTime}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight leading-tight mb-4 group-hover:text-accent transition-colors">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>

                      <p className="text-black/50 text-sm font-medium leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="px-8 sm:px-10 pb-8 sm:pb-10 pt-6 border-t border-black/5 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-black/30 uppercase tracking-widest flex items-center gap-2">
                      <User size={12} className="text-accent" /> {post.author}
                    </span>

                    <Link href={`/blog/${post.slug}`} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-black/60 group-hover:text-black transition-colors">
                      Read Article
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-16 flex items-center justify-center gap-2">
                <button
                  disabled={currentPage === 1}
                  onClick={() => {
                    setCurrentPage(prev => Math.max(1, prev - 1));
                    window.scrollTo({ top: 350, behavior: "smooth" });
                  }}
                  className="px-4 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 bg-white text-black/60 border border-black/5 hover:bg-black/5 hover:text-black disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-black/60"
                >
                  Prev
                </button>
                {Array.from({ length: totalPages }).map((_, idx) => {
                  const pageNum = idx + 1;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => {
                        setCurrentPage(pageNum);
                        window.scrollTo({ top: 350, behavior: "smooth" });
                      }}
                      className={`w-10 h-10 rounded-full text-[11px] font-bold transition-all duration-300 ${
                        currentPage === pageNum
                          ? "bg-black text-white shadow-lg"
                          : "bg-white text-black/60 border border-black/5 hover:bg-black/5 hover:text-black"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => {
                    setCurrentPage(prev => Math.min(totalPages, prev + 1));
                    window.scrollTo({ top: 350, behavior: "smooth" });
                  }}
                  className="px-4 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 bg-white text-black/60 border border-black/5 hover:bg-black/5 hover:text-black disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-black/60"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </section>

      {/* ── 3. Bottom CTA Grid ────────────────────────────────────────── */}
      <section className="bg-black text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] industrial-grid pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="max-w-2xl">
            <h3 className="text-5xl md:text-7xl font-extrabold text-white uppercase tracking-tighter leading-[0.85] mb-8">
              Resolve your <br /><span className="text-accent">Industrial Challenge.</span>
            </h3>
            <p className="text-white/30 text-lg font-medium leading-relaxed">
              24/7 expert mobilization for thermal power plants and industrial facilities across India.
            </p>
          </div>
          <div className="flex gap-6 flex-wrap">
            <Link
              href="/contact"
              className="flex items-center gap-6 bg-black border border-white/10 text-white px-10 py-4 rounded-full group hover:bg-zinc-900 transition-all shadow-2xl"
            >
              <span className="text-[13px] font-semibold uppercase tracking-wider">Contact Specialist</span>
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-black group-hover:rotate-45 transition-transform">
                <ArrowUpRight size={20} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. Composition Modal (Form) ────────────────────────────────── */}
      <AnimatePresence>
        {isOpenForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                if (!success) setIsOpenForm(false);
              }}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl bg-zinc-950 text-white rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden p-8 sm:p-12 z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              {!success && (
                <button
                  onClick={() => setIsOpenForm(false)}
                  className="absolute top-6 right-6 p-2 rounded-full text-white/50 hover:text-white hover:bg-white/5 transition-all"
                >
                  <X size={20} />
                </button>
              )}

              {success ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-black mb-6">
                    <Check size={32} />
                  </div>
                  <h3 className="text-3xl font-extrabold uppercase tracking-tighter text-white mb-2">
                    Composed Successfully!
                  </h3>
                  <p className="text-white/40 text-sm font-semibold uppercase tracking-wider">
                    Your article is being integrated into the insight pool...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <span className="text-[10px] font-bold text-accent uppercase tracking-[0.25em]">CREATIVE ENGINE</span>
                    <h3 className="text-3xl font-extrabold uppercase tracking-tighter text-white mt-2">
                      Write an Article
                    </h3>
                    <p className="text-white/30 text-xs font-semibold uppercase tracking-wider mt-1">
                      Publish industry experiences, repair case studies, and engineering briefs.
                    </p>
                  </div>

                  {error && (
                    <div className="p-4 bg-red-950/40 border border-red-500/20 text-red-400 text-xs rounded-xl font-semibold uppercase tracking-wider">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Column */}
                    <div className="lg:col-span-5 space-y-6">
                      <div>
                        <label className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2 block">
                          Article Title *
                        </label>
                        <input
                          type="text"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          placeholder="e.g. BCP Rotor Re-Alignment Guide"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white focus:outline-none focus:border-accent/40 text-sm transition-all font-medium"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2 block">
                            Author Name *
                          </label>
                          <input
                            type="text"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            placeholder="Your Name / Team"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white focus:outline-none focus:border-accent/40 text-sm transition-all font-medium"
                            required
                          />
                        </div>

                        <div>
                          <label className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2 block">
                            Category *
                          </label>
                          <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white focus:outline-none focus:border-accent/40 text-sm transition-all font-medium"
                          >
                            <option value="Engineering" className="bg-zinc-900 text-white">Engineering</option>
                            <option value="Maintenance" className="bg-zinc-900 text-white">Maintenance</option>
                            <option value="Electrical" className="bg-zinc-900 text-white">Electrical</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2 block">
                          Select Cover Image Preset *
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {imagePresets.map((preset) => {
                            const isSelected = selectedImage === preset.path;
                            return (
                              <button
                                key={preset.path}
                                type="button"
                                onClick={() => setSelectedImage(preset.path)}
                                className={`relative aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all ${
                                  isSelected ? "border-accent scale-102 shadow-lg shadow-accent/10" : "border-white/10 grayscale hover:grayscale-0"
                                }`}
                              >
                                <Image
                                  src={preset.path}
                                  alt={preset.label}
                                  fill
                                  sizes="200px"
                                  className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-end p-2">
                                  <span className="text-[8px] font-extrabold uppercase tracking-widest text-white truncate max-w-full">
                                    {preset.label}
                                  </span>
                                </div>
                                {isSelected && (
                                  <div className="absolute top-2 right-2 w-5 h-5 bg-accent rounded-full flex items-center justify-center text-black">
                                    <Check size={12} className="stroke-[3]" />
                                  </div>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-7 space-y-6">
                      <div>
                        <label className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2 block">
                          Short Summary (Excerpt) *
                        </label>
                        <textarea
                          rows={2}
                          value={excerpt}
                          onChange={(e) => setExcerpt(e.target.value)}
                          placeholder="Provide a brief 1-2 sentence overview of the article..."
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white focus:outline-none focus:border-accent/40 text-sm transition-all font-medium resize-none"
                          maxLength={180}
                          required
                        />
                      </div>

                      <div>
                        <label className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2 block flex justify-between">
                          <span>Article Content (Markdown supported) *</span>
                          <span className="text-white/20 hover:text-white/40 cursor-help" title="Use ### for headers, - for lists, and ** for bold text.">Formatting Help</span>
                        </label>
                        <textarea
                          rows={8}
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
                          placeholder="### Introduction&#10;Write your body text here...&#10;&#10;- Use bullet points like this&#10;- Keep sections structured&#10;&#10;### Section Heading&#10;Use double asterisks for **bolding text**."
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-accent/40 text-sm transition-all font-mono leading-relaxed"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/5 flex justify-end gap-4">
                    <button
                      type="button"
                      onClick={() => setIsOpenForm(false)}
                      className="px-8 py-3.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-white/60 hover:text-white hover:bg-white/5 transition-all"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex items-center gap-3 bg-accent text-black px-10 py-3.5 rounded-full text-[11px] font-bold uppercase tracking-wider hover:scale-102 transition-all shadow-xl shadow-accent/15"
                    >
                      Compose & Publish
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
