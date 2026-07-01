"use client";
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Paperclip, ChevronDown, Send, X, Check, AlertTriangle, ArrowUpRight } from "lucide-react";
import Magnetic from "@/src/components/Magnetic";

const SUBJECTS = [
  "General Inquiry",
  "BCP Consultancy",
  "Insitu Machining",
  "BCP Overhauling",
  "Motor Rewinding",
  "Spare Parts Request",
  "Reverse Engineering",
  "Solution Provider",
  "Technical Troubleshooting",
  "Quotation Request",
];

const InputField = ({ id, label, type, form, handleChange }) => {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || form[id].length > 0;

  return (
    <div className="relative w-full group">
      <motion.div
        initial={false}
        animate={{
          backgroundColor: isFocused ? "rgba(198, 240, 35, 0.05)" : "rgba(0,0,0,0.02)",
          borderColor: isFocused ? "#C6F023" : "rgba(0,0,0,0.05)"
        }}
        className="absolute inset-0 border-l-2 transition-colors duration-300 pointer-events-none"
      />
      <div className="relative px-6 py-6">
        <motion.label
          initial={false}
          animate={{
            y: isActive ? -12 : 0,
            scale: isActive ? 0.75 : 1,
            color: isActive ? "var(--accent)" : "rgba(0,0,0,0.4)"
          }}
          className="absolute left-6 top-6 text-[10px] font-bold uppercase tracking-[0.2em] origin-left pointer-events-none z-20"
        >
          {label}
        </motion.label>
        <input
          name={id}
          type={type}
          value={form[id]}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full bg-transparent pt-5 pb-1 text-black text-xl focus:outline-none transition-all font-bold rounded-none relative z-10"
        />
      </div>
    </div>
  );
};

export default function ContactPage() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const yHeroText = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [form, setForm] = useState({
    name: "", phone: "", company: "", email: "", subject: "", message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "" });

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "phone") {
      value = value.replace(/\D/g, "");
      if (value.length > 10) return;
    }
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", message: "Required: Name, Email, Message." });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to send message.");
      }

      setStatus({ type: "success", message: "Transmission Successful. We will respond shortly." });
      setForm({ name: "", phone: "", company: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus({ type: null, message: "" }), 5000);
    } catch (error) {
      setStatus({ type: "error", message: error.message });
      setTimeout(() => setStatus({ type: null, message: "" }), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card text-black selection:bg-accent selection:text-black" ref={container}>

      {/* ── 1. Neo-Brutalist Hero ────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center py-24 sm:py-32 overflow-hidden px-6 lg:px-16 bg-black text-white">
        <div className="absolute inset-0 opacity-[0.03] industrial-grid pointer-events-none" />
        <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-accent/15 sm:bg-accent/25 rounded-full blur-[80px] sm:blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[250px] h-[250px] bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
        {/* Floating dot particles */}
        {[
          { top: "15%", left: "5%", size: 5, delay: 0, dur: 4.5 },
          { top: "42%", left: "2%", size: 3, delay: 1.3, dur: 5.2 },
          { top: "75%", left: "8%", size: 4, delay: 0.7, dur: 6 },
          { top: "28%", left: "48%", size: 4, delay: 1.9, dur: 4.8 },
          { top: "82%", left: "55%", size: 3, delay: 0.5, dur: 5.4 },
        ].map((dot, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -12, 0], opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: dot.dur, delay: dot.delay, repeat: Infinity, ease: "easeInOut" }}
            className="absolute rounded-full bg-accent pointer-events-none"
            style={{ top: dot.top, left: dot.left, width: dot.size, height: dot.size }}
          />
        ))}

        <motion.div style={{ y: yHeroText, opacity: opacityHero }} className="relative z-20 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="h-px w-12 bg-accent" />
            <p className="text-accent text-[10px] font-bold uppercase tracking-[0.3em]">
              COMMUNICATION HUB
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-[72px] font-extrabold tracking-[-0.04em] uppercase leading-[0.88] mb-12"
          >
            Connect<br />
            <span className="text-white/20">Deivox.</span>
          </motion.h1>

          <div className="flex items-center gap-6 sm:gap-8 mt-12">
            <div className="h-px w-16 sm:w-24 bg-white/10" />
            <p className="text-white/40 text-base sm:text-lg max-w-sm font-medium leading-relaxed">
              24/7 technical support and expert consultation for mission-critical power systems.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── 2. The Blueprint Grid ────────────────────────── */}
      <section className="w-full bg-white border-t border-black/10">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Form Column */}
          <div className="p-10 lg:p-24 border-r border-black/10 bg-card relative overflow-hidden">
            {/* Subtle ambient glow */}
            <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-accent/4 rounded-full blur-[100px] pointer-events-none" />
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl sm:text-6xl font-extrabold uppercase tracking-tighter leading-[0.8] mb-24">
                Business<br /><span className="text-black/30">Inquiry.</span>
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <InputField id="name" label="Full Name" type="text" form={form} className="text-black" handleChange={handleChange} />
                  <InputField id="company" label="Organization" type="text" form={form} className="text-black" handleChange={handleChange} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <InputField id="email" label="Professional Email" type="email" form={form} className="text-black" handleChange={handleChange} />
                  <InputField id="phone" label="Contact Number" type="tel" form={form} className="text-black" handleChange={handleChange} />
                </div>

                <div className="relative group bg-black/[0.02] border-l-2 border-black/5 p-6 hover:bg-accent/5 hover:border-accent transition-all duration-300">
                  <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/30 mb-4 block group-hover:text-accent transition-colors">Nature of Consultation</label>
                  <div className="relative">
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full bg-transparent py-4 text-black text-2xl focus:outline-none font-bold appearance-none cursor-pointer rounded-none relative z-10"
                    >
                      <option value="">Select Domain...</option>
                      {SUBJECTS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-black/20 group-hover:text-black transition-colors" size={24} />
                  </div>
                </div>

                <div className="relative group bg-black/[0.02] border-l-2 border-black/5 p-6 hover:bg-accent/5 hover:border-accent transition-all duration-300">
                  <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/30 mb-4 block group-hover:text-accent transition-colors">Technical Details</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-transparent py-4 text-black text-2xl focus:outline-none font-bold resize-none rounded-none relative z-10"
                    placeholder="Elaborate on requirements..."
                  />
                </div>

                <div className="pt-10 flex justify-start">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-fit flex items-center gap-12 bg-black text-white px-12 py-6 rounded-full hover:bg-accent hover:text-black transition-all duration-500 shadow-2xl group"
                  >
                    <span className="text-xl font-bold uppercase tracking-widest">
                      {isSubmitting ? "Sending..." : "Send Request"}
                    </span>
                    <div className="w-12 h-12 rounded-full bg-white/10 group-hover:bg-black/10 flex items-center justify-center transition-colors">
                      <ArrowUpRight size={24} className="group-hover:rotate-45 transition-transform" />
                    </div>
                  </button>
                </div>
              </form>

              {status.message && (
                <div className={`mt-8 p-6 font-bold uppercase tracking-widest text-sm ${status.type === 'error' ? 'bg-red-50 text-red-600' : 'bg-accent/10 text-black'}`}>
                  {status.message}
                </div>
              )}
            </motion.div>
          </div>

          {/* Details Column */}
          <div className="bg-black text-white">
            <div className="h-full flex flex-col">
              <div className="p-10 lg:p-24 flex-1">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <p className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-16 flex items-center gap-6">
                    <span className="w-12 h-px bg-accent" />
                    OFFICE LOCATIONS
                    <span className="ml-auto flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      <span className="text-[8px] font-bold text-accent/60">ONLINE</span>
                    </span>
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">
                    <div className="border-l border-white/10 pl-8">
                      <p className="text-[9px] font-bold text-white/20 uppercase tracking-[0.2em] mb-6">Regd. Office</p>
                      <p className="text-2xl font-bold uppercase tracking-tighter leading-none mb-8">
                        Vatika Town Sq,<br />Sector 83, Gurugram.
                      </p>
                      <a href="#" className="inline-flex items-center gap-3 text-accent text-[10px] font-bold uppercase tracking-widest hover:gap-6 transition-all">
                        Navigate <ArrowUpRight size={14} />
                      </a>
                    </div>

                    <div className="border-l border-white/10 pl-8">
                      <p className="text-[9px] font-bold text-white/20 uppercase tracking-[0.2em] mb-6">Service Hub</p>
                      <p className="text-2xl font-bold uppercase tracking-tighter leading-none">
                        Bengaluru,<br />Karnataka, India.
                      </p>
                    </div>

                    <div className="border-l border-white/10 pl-8 md:col-span-2">
                      <p className="text-[9px] font-bold text-white/20 uppercase tracking-[0.2em] mb-6">Direct Line</p>
                      <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
                        <a href="tel:+91-7428200229" className="text-2xl font-bold tracking-tighter hover:text-accent transition-colors">+91 74282 00229</a>
                      </div>
                    </div>

                    <div className="border-l border-white/10 pl-8">
                      <p className="text-[9px] font-bold text-white/20 uppercase tracking-[0.2em] mb-6">Digital</p>
                      <a href="mailto:sales@deivox.co.in" className="text-2xl font-bold tracking-tighter hover:text-accent transition-colors break-all underline decoration-accent decoration-2 underline-offset-8">
                        sales@deivox.co.in
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Location Map */}
              <div className="h-[400px] lg:h-[500px] border-t border-white/5 relative overflow-hidden bg-white">
                {/* Accent border top */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/60 to-transparent z-10" />
                <iframe
                  src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Vatika%20Town%20Sq,%20Sector%2083,%20Gurugram+(DEI%20VOX%20INDIA)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
