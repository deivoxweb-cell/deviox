"use client";
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Paperclip, ChevronDown, Send, X, Check, AlertTriangle } from "lucide-react";
import Magnetic from "@/src/components/Magnetic";

const SUBJECTS = [
  "General Inquiry",
  "BCP Consultancy",
  "Insitu Machining",
  "BCP Overhauling",
  "Motor Rewinding",
  "Spare Parts Request",
  "Reverse Engineering",
  "On-Site Service Support",
  "Technical Troubleshooting",
  "Quotation Request",
];

const InputField = ({ id, label, type, form, handleChange }) => {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || form[id].length > 0;

  return (
    <div className="relative w-full z-10">
      <motion.label
        initial={false}
        animate={{
          y: isActive ? -28 : 16,
          scale: isActive ? 0.8 : 1,
          color: isActive ? "#f97316" : "rgba(255,255,255,0.4)"
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute left-0 top-0 text-sm font-black uppercase tracking-widest origin-left pointer-events-none"
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
        className="w-full bg-transparent border-b border-white/20 py-4 text-white text-lg focus:outline-none focus:border-accent transition-colors font-medium rounded-none"
      />
    </div>
  );
};

export default function ContactPage() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const yHeroText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [form, setForm] = useState({
    name: "", phone: "", company: "", email: "", subject: "", message: "",
  });
  const [fileName, setFileName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "" });
  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "phone") {
      value = value.replace(/\D/g, ""); // Allow only numbers
      if (value.length > 10) return; // Restrict to 10 digits
    }
    setForm({ ...form, [name]: value });
  };
  const handleFile = (e) => setFileName(e.target.files?.[0]?.name ?? "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", message: "Please fill out required fields (Name, Email, Message)." });
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
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus({ type: "success", message: "Your message has been sent successfully. We will get back to you shortly." });
      setForm({ name: "", phone: "", company: "", email: "", subject: "", message: "" });
      setFileName("");

      setTimeout(() => setStatus({ type: null, message: "" }), 5000);
    } catch (error) {
      setStatus({ type: "error", message: error.message });
      setTimeout(() => setStatus({ type: null, message: "" }), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-primary text-white selection:bg-accent selection:text-white pb-32" ref={container}>

      {/* ── 1. Brutalist Hero with 3D Entrance ────────────────────── */}
      <section className="relative md:min-h-[95vh] min-h-[60vh] flex flex-col justify-center pt-24 pb-24 overflow-hidden px-4 lg:px-10 border-b border-white/5 perspective-1000">
        {/* Massive Background Typography Mask with Parallax */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "40%"]), opacity: useTransform(scrollYProgress, [0, 0.5], [0.1, 0]) }}
          className="absolute top-1/2 left-0 -translate-y-1/2 text-[150px] sm:text-[250px] md:text-[350px] font-black tracking-tighter text-white select-none pointer-events-none uppercase whitespace-nowrap leading-none z-0 translate-x-1/4 opacity-10 blur-sm"
        >
          CONTACT
        </motion.div>

        <motion.div style={{ y: yHeroText, opacity: opacityHero }} className="relative z-20 max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-accent text-[10px] md:text-sm font-black uppercase tracking-[0.4em] mb-4"
          >
            Get In Touch
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, rotateX: 20, y: 40 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-8xl md:text-[9rem] font-black tracking-[-0.04em] uppercase leading-[0.8] mb-8"
            >
              Reach<br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-orange-600">DEI VOX</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/50 max-w-2xl text-lg md:text-xl font-medium leading-relaxed"
          >
            Our expert engineering team is available 24/7 for critical BCP support. Connect with India's leaders in rotating equipment.
          </motion.p>
        </motion.div>
      </section>

      {/* ── 2. Immersive Form & Grid ──────────────────────── */}
      <section className="py-24 w-full px-1 lg:px-10">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-white/3 backdrop-blur-3xl rounded-[3rem] p-8 md:p-16 border border-white/10 relative overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)]"
          >
            {/* Ambient Background Glow in form */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent opacity-20 blur-[120px] rounded-full pointer-events-none" />

            <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-16 relative z-10 leading-tight">
              Send an <br /><span className="text-white/30">Enquiry.</span>
            </h3>

            <form onSubmit={handleSubmit} className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
              <InputField id="name" label="Full Name" type="text" form={form} handleChange={handleChange} />
              <InputField id="company" label="Company" type="text" form={form} handleChange={handleChange} />
              <InputField id="email" label="Email Address" type="email" form={form} handleChange={handleChange} />
              <InputField id="phone" label="Phone Number" type="tel" form={form} handleChange={handleChange} />

              {/* Custom Subject Dropdown */}
              <div className="md:col-span-2 relative mt-4">
                <label className="text-xs font-black uppercase tracking-widest text-white/40 mb-4 block">Nature of Inquiry</label>
                <div className="relative">
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white text-lg focus:outline-none focus:border-accent transition-colors font-medium appearance-none cursor-pointer rounded-none"
                  >
                    <option value="" className="bg-primary">Select a topic...</option>
                    {SUBJECTS.map((s) => (
                      <option key={s} value={s} className="bg-primary text-white">{s}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
                </div>
              </div>

              {/* Message Area */}
              <div className="md:col-span-2 relative mt-4">
                <label className="text-xs font-black uppercase tracking-widest text-white/40 mb-4 block">Your Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white text-lg focus:outline-none focus:border-accent transition-colors font-medium resize-none rounded-none placeholder:text-white/20"
                  placeholder="Describe your requirement in detail..."
                />
              </div>

              {/* File Upload UI */}
              {/* <div className="md:col-span-2 relative my-4">
                <label className="flex items-center justify-between w-full bg-white/3 border border-dashed border-white/20 hover:border-accent rounded-3xl p-6 cursor-pointer transition-all group">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white/50 group-hover:bg-accent group-hover:text-zinc-950 transition-colors">
                      <Paperclip size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-black uppercase tracking-widest text-white mb-1">Attach Files</p>
                      <p className="text-xs text-white/40 font-medium max-w-xs">{fileName || "Supported: Images, PDF, DOC. Max 10MB."}</p>
                    </div>
                  </div>
                  <input type="file" className="hidden" onChange={handleFile} />
                </label>
              </div> */}

              {/* Submit Button & Status */}
              <div className="md:col-span-2 flex flex-col gap-6">
                <div className="flex justify-start">
                  <Magnetic intensity={0.4}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative overflow-hidden group px-12 h-20 min-w-[260px] bg-accent text-zinc-950 font-black rounded-full transition-all shadow-xl hover:shadow-2xl uppercase tracking-[0.2em] text-[12px] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                        <span className={`absolute transition-transform duration-500 ${isSubmitting ? '-translate-y-20' : 'group-hover:-translate-y-20'}`}>
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </span>
                        <span className={`absolute transition-transform duration-500 text-zinc-950 ${isSubmitting ? 'translate-y-0' : 'translate-y-20 group-hover:translate-y-0'}`}>
                          {isSubmitting ? (
                            <svg className="animate-spin h-5 w-5 text-zinc-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                          ) : "Confirm Now"}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-white transition-transform duration-500 ease-out origin-bottom scale-y-0 group-hover:scale-y-100 opacity-20 z-0" />
                    </button>
                  </Magnetic>
                </div>
              </div>
            </form>
          </motion.div>

          {/* Floating Toast Notification */}
          <div className="fixed bottom-10 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-10 z-100">
            <AnimatePresence mode="wait">
              {status.type === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="p-3 pl-4 pr-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-4 text-slate-800 shadow-xl shadow-black/5 min-w-[320px] max-w-[400px]"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                    <Check size={18} strokeWidth={3} className="text-white" />
                  </div>
                  <p className="text-[15px] font-medium flex-1 leading-snug">{status.message}</p>
                  <button
                    onClick={() => setStatus({ type: null, message: "" })}
                    className="p-2 hover:bg-emerald-200/50 rounded-lg text-slate-400 hover:text-slate-600 transition-colors shrink-0"
                  >
                    <X size={16} strokeWidth={2.5} />
                  </button>
                </motion.div>
              )}
              {status.type === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="p-3 pl-4 pr-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-4 text-slate-800 shadow-xl shadow-black/5 min-w-[320px] max-w-[400px]"
                >
                  <div className="w-8 h-8 rounded-full bg-[#E5484D] flex items-center justify-center shrink-0">
                    <AlertTriangle size={18} strokeWidth={2.5} className="text-white" />
                  </div>
                  <p className="text-[15px] font-medium flex-1 leading-snug">{status.message}</p>
                  <button
                    onClick={() => setStatus({ type: null, message: "" })}
                    className="p-2 hover:bg-red-200/50 rounded-lg text-slate-400 hover:text-slate-600 transition-colors shrink-0"
                  >
                    <X size={16} strokeWidth={2.5} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* Contact Details Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <div className="bg-black/50 border border-white/5 rounded-[3rem] p-10 lg:p-14 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-5 blur-[100px] pointer-events-none" />
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-12">Headquarters</p>

              <div className="flex flex-col gap-12 relative z-10">
                <div className="flex items-start gap-6 group/item">
                  <div className="mt-1 text-white/20 group-hover/item:text-accent transition-colors"><MapPin size={28} /></div>
                  <div>
                    <p className="text-xs font-black text-white/40 uppercase tracking-widest mb-2">Regd. Office</p>
                    <a href="https://www.google.com/maps/place/9XQ9%2BGP+Gurugram,+Haryana" target="_blank" rel="noopener noreferrer" className="block group/link">
                      <p className="text-xl font-bold text-white leading-snug group-hover/link:text-accent transition-colors">002/T S1, Vatika Town Sq, Sector 83, Gurugram, Haryana.</p>
                      <p className="text-[10px] font-black text-accent tracking-[0.2em] uppercase mt-3 flex items-center gap-2 opacity-0 group-hover/link:opacity-100 transition-all -translate-x-4 group-hover/link:translate-x-0">
                        Open in Google Maps &rarr;
                      </p>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group/item">
                  <div className="mt-1 text-white/20 group-hover/item:text-accent transition-colors"><MapPin size={28} /></div>
                  <div>
                    <p className="text-xs font-black text-white/40 uppercase tracking-widest mb-2">Service Hub</p>
                    <p className="text-xl font-bold text-white leading-snug">Bengaluru, Karnataka, India.</p>
                    <p className="text-sm font-medium text-white/50 mt-2">Providing motor winding and testing.</p>
                  </div>
                </div>

                <div className="w-full h-px bg-white/10" />

                <div className="flex items-center gap-6 group/item">
                  <div className="text-white/20 group-hover/item:text-accent transition-colors"><Phone size={28} /></div>
                  <div>
                    <p className="text-xs font-black text-white/40 uppercase tracking-widest mb-1">Direct Line</p>
                    <p className="text-xl font-bold text-white tracking-wider">+91-9886424770</p>
                    <p className="text-xl font-bold text-white/50 tracking-wider">+91-7428200229</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group/item">
                  <div className="text-white/20 group-hover/item:text-accent transition-colors"><Mail size={28} /></div>
                  <div>
                    <p className="text-xs font-black text-white/40 uppercase tracking-widest mb-1">Digital</p>
                    <a href="mailto:sales@deivox.co.in" className="text-xl font-bold text-white hover:text-accent transition-colors relative inline-block">
                      sales@deivox.co.in
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover/item:w-full" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Unconventional Tactical Map Block */}
            <div className="hidden lg:flex flex-1 relative group items-stretch min-h-[350px] p-4 mt-4 lg:mt-0">
              
              {/* Tactical Corner Reticles */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-[3px] border-l-[3px] border-accent/20 transition-all duration-700 ease-out group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:border-accent" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-[3px] border-r-[3px] border-accent/20 transition-all duration-700 ease-out group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:border-accent" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-[3px] border-l-[3px] border-accent/20 transition-all duration-700 ease-out group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:border-accent" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-[3px] border-r-[3px] border-accent/20 transition-all duration-700 ease-out group-hover:translate-x-2 group-hover:translate-y-2 group-hover:border-accent" />

              {/* Technical Data Labels */}
              <div className="absolute -top-3 right-8 bg-primary px-3 text-[10px] font-black tracking-[0.4em] text-accent font-mono z-20">9XQ9+GP</div>
              <div className="absolute -bottom-3 left-8 bg-primary px-3 text-[10px] font-black tracking-[0.4em] text-white/30 font-mono z-20">LIVE_TRACK_ON</div>

              {/* The Mechanical Chamfered Map Frame */}
              <div 
                className="relative w-full h-full overflow-hidden bg-zinc-900 transition-all duration-700 ease-out group-hover:shadow-[0_0_40px_rgba(249,115,22,0.15)] flex-1"
                style={{ clipPath: "polygon(0 30px, 30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)" }}
              >
                <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 origin-center">
                  <iframe
                    src="https://maps.google.com/maps?q=9XQ9%2BGP%20Gurugram%2C%20Haryana&t=m&z=15&output=embed&iwloc=near"
                    className="absolute inset-0 w-full h-full z-0 contrast-[1.05] saturate-[1.2] transition-all duration-500"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  {/* Framer Motion Scan Line */}
                  <motion.div 
                    initial={{ top: "0%" }}
                    animate={{ top: ["0%", "100%", "0%"], opacity: [0, 0.4, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 w-full h-[2px] bg-accent shadow-[0_0_30px_rgba(249,115,22,1)] z-10 pointer-events-none mix-blend-overlay" 
                  />
                </div>
                
                {/* Inner Border emphasizing the sliced geometry */}
                <div className="absolute inset-0 pointer-events-none border border-white/10 z-20 mix-blend-overlay" />
              </div>

              {/* Hover Center Dash Reticle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none flex flex-col items-center">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="w-20 h-20 border-[3px] border-accent/80 border-dashed rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.3)]"
                >
                  <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(249,115,22,1)]" />
                </motion.div>
              </div>

            </div>

          </motion.div>

        </div>
      </section>

    </div>
  );
}
