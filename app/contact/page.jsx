"use client";
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Paperclip, ChevronDown, Send, X, Check, AlertTriangle, ArrowUpRight } from "lucide-react";
import Magnetic from "@/src/components/Magnetic";

const MAX_ATTACHMENT_SIZE = 10 * 1024 * 1024;
const ALLOWED_ATTACHMENT_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/jpeg",
  "image/png",
];
const ALLOWED_ATTACHMENT_EXTENSIONS = [".pdf", ".doc", ".docx", ".jpg", ".jpeg", ".png"];

const SUBJECTS = [
  "General Inquiry",
  "BCP Consultancy",
  "Insitu Machining",
  "BCP Overhauling",
  "Motor Rewinding",
  "Spare Parts Request",
  "Reverse Engineering",
  "Service Facility",
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
      <div className="relative px-4 py-4">
        <motion.label
          initial={false}
          animate={{
            y: isActive ? -8 : 0,
            scale: isActive ? 0.8 : 1,
            color: isActive ? "var(--accent)" : "rgba(0,0,0,0.4)"
          }}
          className="absolute left-4 top-4 text-[9px] font-bold uppercase tracking-[0.2em] origin-left pointer-events-none z-20"
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
          className="w-full bg-transparent pt-3 pb-0 text-black text-base focus:outline-none transition-all font-bold rounded-none relative z-10"
        />
      </div>
    </div>
  );
};

export default function ContactPage() {
  const container = useRef(null);
  const fileInputRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const yHeroText = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [form, setForm] = useState({
    name: "", phone: "", company: "", email: "", country: "", location: "", designation: "", subject: "", message: "",
  });
  const [attachment, setAttachment] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "" });

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "phone") {
      // Allow digits, space, hyphen, and leading '+'
      value = value.replace(/[^0-9+\s-]/g, "");
      if (value.length > 20) return;
    }
    setForm({ ...form, [name]: value });
  };

  const validateAttachment = (file) => {
    if (!file) return "";

    const extension = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
    if (!ALLOWED_ATTACHMENT_TYPES.includes(file.type) || !ALLOWED_ATTACHMENT_EXTENSIONS.includes(extension)) {
      return "Attachment must be PDF, DOC, DOCX, JPG, JPEG, or PNG.";
    }

    if (file.size > MAX_ATTACHMENT_SIZE) {
      return "Attachment must be 10 MB or smaller.";
    }

    return "";
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    const error = validateAttachment(file);

    if (error) {
      setAttachment(null);
      e.target.value = "";
      setStatus({ type: "error", message: error });
      return;
    }

    setAttachment(file);
    setStatus({ type: null, message: "" });
  };

  const validateForm = () => {
    const requiredFields = [
      ["name", "Name"],
      ["email", "Email"],
      ["phone", "Phone"],
      ["country", "Country"],
      ["location", "Location"],
      ["designation", "Designation"],
      ["subject", "Nature of Enquiry"],
      ["message", "Message"],
    ];

    const missing = requiredFields.find(([key]) => !form[key]?.trim());
    if (missing) return `Required: ${missing[1]}.`;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return "Please provide a valid email address.";
    }

    // Clean phone number to check digit count (standard E.164: 7 to 15 digits)
    const digitsOnly = form.phone.replace(/\D/g, "");
    if (digitsOnly.length < 7 || digitsOnly.length > 15) {
      return "Please provide a valid phone number (7 to 15 digits).";
    }

    return validateAttachment(attachment);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setStatus({ type: "error", message: validationError });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => formData.append(key, value));
      if (attachment) formData.append("attachment", attachment);

      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to send message.");
      }

      setStatus({ type: "success", message: "Transmission Successful. We will respond shortly." });
      setForm({ name: "", phone: "", company: "", email: "", country: "", location: "", designation: "", subject: "", message: "" });
      setAttachment(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
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

        <motion.div style={{ y: yHeroText, opacity: opacityHero }} className="relative z-20 max-w-7xl mx-auto w-full">
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
            <span className="text-white/20">Dei Vox.</span>
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
          <div className="p-8 lg:p-16 border-r border-black/10 bg-card relative overflow-hidden">
            {/* Subtle ambient glow */}
            <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-accent/4 rounded-full blur-[100px] pointer-events-none" />
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tighter leading-[0.8] mb-12">
                Business<br /><span className="text-black/30">Inquiry.</span>
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <InputField id="name" label="Full Name" type="text" form={form} className="text-black" handleChange={handleChange} />
                  <InputField id="company" label="Organization" type="text" form={form} className="text-black" handleChange={handleChange} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <InputField id="email" label="Professional Email" type="email" form={form} className="text-black" handleChange={handleChange} />
                  <InputField id="phone" label="Contact Number" type="tel" form={form} className="text-black" handleChange={handleChange} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <InputField id="country" label="Country" type="text" form={form} className="text-black" handleChange={handleChange} />
                  <InputField id="location" label="Location" type="text" form={form} className="text-black" handleChange={handleChange} />
                </div>
                <InputField id="designation" label="Designation" type="text" form={form} className="text-black" handleChange={handleChange} />

                <div className="relative group bg-black/[0.02] border-l-2 border-black/5 p-4 hover:bg-accent/5 hover:border-accent transition-all duration-300">
                  <label className="text-[9px] font-bold uppercase tracking-[0.15em] text-black/30 mb-2 block group-hover:text-accent transition-colors">Nature of Enquiry</label>
                  <div className="relative">
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full bg-transparent py-2 text-black text-base focus:outline-none font-bold appearance-none cursor-pointer rounded-none relative z-10"
                    >
                      <option value="">Select Domain...</option>
                      {SUBJECTS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-black/20 group-hover:text-black transition-colors" size={20} />
                  </div>
                </div>

                <div className="relative group bg-black/[0.02] border-l-2 border-black/5 p-4 hover:bg-accent/5 hover:border-accent transition-all duration-300">
                  <label className="text-[9px] font-bold uppercase tracking-[0.15em] text-black/30 mb-2 block group-hover:text-accent transition-colors">Technical Details</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-transparent py-2 text-black text-base focus:outline-none font-bold resize-none rounded-none relative z-10"
                    placeholder="Elaborate on requirements..."
                  />
                </div>

                <div className="relative group bg-black/[0.02] border-l-2 border-black/5 p-4 hover:bg-accent/5 hover:border-accent transition-all duration-300">
                  <label className="text-[9px] font-bold uppercase tracking-[0.15em] text-black/30 mb-2 block group-hover:text-accent transition-colors">File Attachment</label>
                  <div className="relative flex items-center gap-3">
                    <Paperclip className="text-black/20 group-hover:text-black transition-colors" size={20} />
                    <input
                      ref={fileInputRef}
                      name="attachment"
                      type="file"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/jpeg,image/png"
                      onChange={handleFileChange}
                      className="w-full bg-transparent py-2 text-black text-base focus:outline-none font-bold rounded-none relative z-10"
                    />
                  </div>
                </div>

                <div className="pt-6 flex justify-start">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-fit flex items-center gap-6 bg-black text-white px-6 py-3 rounded-full hover:bg-accent hover:text-black transition-all duration-500 shadow-xl group"
                  >
                    <span className="text-sm font-bold uppercase tracking-widest">
                      {isSubmitting ? "Sending..." : "Send Request"}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-black/10 flex items-center justify-center transition-colors">
                      <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
                    </div>
                  </button>
                </div>
              </form>

              {status.message && (
                <div className={`mt-6 p-4 font-bold uppercase tracking-widest text-xs ${status.type === 'error' ? 'bg-red-50 text-red-600' : 'bg-accent/10 text-black'}`}>
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
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                          <p className="text-[9px] font-bold text-white/20 uppercase tracking-[0.2em] mb-6">Direct Line</p>
                          <a href="tel:+91-7428200229" className="text-2xl font-bold tracking-tighter hover:text-accent transition-colors">+91 74282 00229</a>
                        </div>
                        <div>
                          <p className="text-[9px] font-bold text-white/20 uppercase tracking-[0.2em] mb-6">Digital</p>
                          <a href="mailto:sales@deivox.co.in" className="text-2xl font-bold tracking-tighter hover:text-accent transition-colors break-all underline decoration-accent decoration-2 underline-offset-8">
                            sales@deivox.co.in
                          </a>
                        </div>
                      </div>
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
