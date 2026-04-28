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
    <div className="relative w-full z-10">
      <motion.label
        initial={false}
        animate={{
          y: isActive ? -28 : 16,
          scale: isActive ? 0.8 : 1,
          color: isActive ? "#C6F023" : "rgba(0,0,0,0.3)"
        }}
        transition={{ duration: 0.2 }}
        className="absolute left-0 top-0 text-[11px] font-black uppercase tracking-widest origin-left pointer-events-none"
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
        className="w-full bg-transparent border-b-2 border-black/5 py-4 text-black text-xl focus:outline-none focus:border-accent transition-colors font-bold rounded-none"
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
      if (!res.ok) throw new Error("Failed to send message.");

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
    <div className="bg-[#F5F5F5] text-black selection:bg-accent selection:text-black" ref={container}>

      {/* ── 1. Neo-Brutalist Hero ────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center py-32 overflow-hidden px-6 lg:px-16 bg-black text-white">
        <div className="absolute inset-0 opacity-[0.03] industrial-grid pointer-events-none" />
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

        <motion.div style={{ y: yHeroText, opacity: opacityHero }} className="relative z-20 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="h-px w-12 bg-accent" />
            <p className="text-accent text-[11px] font-black uppercase tracking-[0.5em]">
              COMMUNICATION HUB
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl sm:text-7xl md:text-[8rem] font-black tracking-[-0.05em] uppercase leading-[0.85] mb-12"
          >
            Connect<br />
            <span className="text-white/20">Deivox.</span>
          </motion.h1>

          <div className="flex items-center gap-8 mt-12">
             <div className="h-px w-24 bg-white/10" />
             <p className="text-white/40 text-lg max-w-sm font-medium leading-relaxed">
               24/7 technical support and expert consultation for mission-critical power systems.
             </p>
          </div>
        </motion.div>
      </section>

      {/* ── 2. Immersive Form & Grid ──────────────────────── */}
      <section className="py-40 w-full px-6 lg:px-16">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24">

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-white rounded-[4rem] p-10 md:p-20 border border-black/5 shadow-2xl relative overflow-hidden"
          >
            <h3 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tighter mb-20 leading-[0.9]">
              Strategic <br /><span className="text-black/20">Enquiry.</span>
            </h3>

            <form onSubmit={handleSubmit} className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
              <InputField id="name" label="Full Name" type="text" form={form} handleChange={handleChange} />
              <InputField id="company" label="Organization" type="text" form={form} handleChange={handleChange} />
              <InputField id="email" label="Professional Email" type="email" form={form} handleChange={handleChange} />
              <InputField id="phone" label="Contact Number" type="tel" form={form} handleChange={handleChange} />

              <div className="md:col-span-2 relative mt-4">
                <label className="text-[11px] font-black uppercase tracking-widest text-black/30 mb-6 block">Nature of Consultation</label>
                <div className="relative">
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-black/5 py-4 text-black text-xl focus:outline-none focus:border-accent transition-colors font-bold appearance-none cursor-pointer rounded-none"
                  >
                    <option value="">Select Domain...</option>
                    {SUBJECTS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-black/30 pointer-events-none" />
                </div>
              </div>

              <div className="md:col-span-2 relative mt-4">
                <label className="text-[11px] font-black uppercase tracking-widest text-black/30 mb-6 block">Technical Details</label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-black/5 py-4 text-black text-xl focus:outline-none focus:border-accent transition-colors font-bold resize-none rounded-none"
                  placeholder="Elaborate on your specific engineering requirements..."
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-8 bg-black text-white rounded-[2rem] font-black uppercase tracking-widest text-sm hover:bg-zinc-800 transition-all flex items-center justify-center gap-6 shadow-2xl disabled:opacity-50"
                >
                  {isSubmitting ? "Transmitting..." : "Send Request"}
                  <ArrowUpRight size={24} />
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Details Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-10"
          >
            <div className="bg-black text-white rounded-[4rem] p-14 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-10 blur-[100px] pointer-events-none" />
              <p className="text-[11px] font-black uppercase tracking-[0.4em] text-accent mb-16">COMMAND CENTERS</p>

              <div className="flex flex-col gap-16 relative z-10">
                <div className="group/item">
                  <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-4">Regd. Office</p>
                  <p className="text-2xl font-black uppercase tracking-tighter leading-tight mb-4">Vatika Town Sq, Sector 83, Gurugram, Haryana.</p>
                  <a href="#" className="text-accent text-[11px] font-black uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                    Navigate Hub <ArrowUpRight size={16} />
                  </a>
                </div>

                <div className="group/item">
                  <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-4">Service Hub</p>
                  <p className="text-2xl font-black uppercase tracking-tighter leading-tight">Bommasandra Industrial Area, Bangalore</p>
                </div>

                <div className="h-px w-full bg-white/10" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                   <div>
                      <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-4">Direct Lines</p>
                      <p className="text-xl font-bold tracking-tight">+91-9886424770</p>
                      <p className="text-xl font-bold tracking-tight text-white/40">+91-7428200229</p>
                   </div>
                   <div>
                      <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-4">Digital</p>
                      <a href="mailto:sales@deivox.co.in" className="text-xl font-bold hover:text-accent transition-colors">sales@deivox.co.in</a>
                   </div>
                </div>
              </div>
            </div>

            {/* Tactical Map */}
            <div className="flex-1 rounded-[4rem] overflow-hidden border-2 border-black/5 relative group min-h-[400px]">
                <iframe
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Vatika%20Town%20Sq,%20Sector%2083,%20Gurugram+(DEI%20VOX%20INDIA)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    className="absolute inset-0 w-full h-full grayscale-[1] invert contrast-[1.2] opacity-80 group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100 transition-all duration-1000"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                />
                <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/5" />
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
