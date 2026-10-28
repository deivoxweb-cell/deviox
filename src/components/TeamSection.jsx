"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const team = [
  { name: "Kunal", role: "CEO & MD", qualification: "PMP, PMI USA, MBA, B.E. Mechanical", tag: "Founder", email: "sales@deivox.co.in", phone: "+91 74282-00229" },
  { name: "Ravi", role: "Head Technical", qualification: "M.Tech. Thermal, B.E. Mechanical", tag: "Founder", email: "service@deivox.co.in", phone: "+91 98864-24770" },
  { name: "Sanjay Sharma", role: "Head - Engineering", qualification: "", tag: "" },
  { name: "Vijay Nehra", role: "Head - Sales", qualification: "", tag: "" },
  { name: "Pankaj Kumar", role: "Head - Logistics", qualification: "", tag: "" },
  { name: "Ramesh Yadav", role: "Head - Doc. Controller", qualification: "", tag: "" },
  { name: "Abhishek Singh", role: "Head - Accounts", qualification: "", tag: "" },
  { name: "Namita Singh", role: "Head - HR", qualification: "", tag: "" },
  { name: "Rama", role: "Head - IT", qualification: "", tag: "" },
  { name: "Shantaram", role: "Head - Stores", qualification: "", tag: "" },
  { name: "Dahnpal M.", role: "Head - Service", qualification: "", tag: "" },
  { name: "Ritika", role: "Head - Procurement", qualification: "", tag: "" },
  { name: "Ankit", role: "Head - Social Media", qualification: "", tag: "" },
  { name: "Ramadevi", role: "Head - Marketing", qualification: "", tag: "" },
  { name: "Abhay", role: "Head - Admin", qualification: "", tag: "" },
];

export default function TeamSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const yHeroText = useTransform(scrollYProgress, [0, 1], ["0px", "120px"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="bg-card text-black selection:bg-accent selection:text-black" ref={container}>
      <section className="relative min-h-screen flex flex-col justify-center py-32 overflow-hidden px-6 lg:px-16 bg-black text-white">
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] industrial-grid pointer-events-none" />
        <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-accent/15 sm:bg-accent/25 rounded-full blur-[80px] sm:blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[250px] h-[250px] bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
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
            className="flex items-center gap-4 mb-10"
          >
            <div className="h-px w-12 bg-accent" />
            <p className="text-accent text-[10px] font-bold uppercase tracking-[0.3em]">
              TECHNICAL LEADERSHIP
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-[72px] font-extrabold tracking-[-0.04em] uppercase leading-[0.88] mb-12"
          >
            Meet Our<br />
            <span className="text-white/20">Team.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-12 sm:items-center mt-12"
          >
            <div className="max-w-xs">
              <p className="text-white/40 text-sm font-medium leading-relaxed">
                Bringing together India's finest technical minds to redefine boiler circulation expertise.
              </p>
            </div>
            <div className="h-px w-24 bg-white/10 hidden sm:block" />
          </motion.div>
        </motion.div>

        <div className="absolute bottom-12 right-12 flex items-center gap-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">Scroll Down</span>
          <div className="w-12 h-px bg-white/20" />
        </div>
      </section>

      <section className="py-24 sm:py-40 bg-white">
      <div className="max-w-[90rem] mx-auto w-full px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-24 gap-12 border-b-4 border-black pb-12">
          <div className="max-w-2xl">
            <p className="text-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-6">TECHNICAL LEADERSHIP</p>
            <motion.h2 className="text-4xl sm:text-6xl md:text-[72px] font-extrabold tracking-[-0.04em] uppercase leading-[0.88] mb-12">
              Executive<br />Leadership.
            </motion.h2>
          </div>
          <p className="text-black/40 text-lg max-w-md font-medium leading-relaxed">
            Bringing together India's finest technical minds to redefine boiler circulation expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-1">
          {team.map((member, i) => (
            <motion.div
              key={`${member.name}-${member.role}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-[#111111] p-8 sm:p-10 flex flex-col group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10"
            >
              <div className="absolute bottom-0 left-0 w-full h-1 bg-accent/20 group-hover:bg-accent transition-all duration-500" />
              <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/0 group-hover:bg-accent/15 rounded-full blur-[50px] transition-all duration-700" />

              <div className="flex justify-between items-start mb-12">
                <span className="text-4xl font-extrabold text-white/5 tracking-tighter">0{i + 1}</span>
                {member.tag && (
                  <span className="text-[9px] font-bold text-accent uppercase tracking-[0.25em] border border-accent/20 px-3 py-1">
                    {member.tag}
                  </span>
                )}
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white uppercase tracking-tighter leading-none mb-3 group-hover:text-accent transition-colors">
                  {member.name}
                </h2>
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.15em] mb-8">
                  {member.role}
                </p>

                {member.qualification && (
                  <p className="text-[11px] text-white/20 font-medium leading-relaxed mb-10 border-l border-white/5 pl-6 group-hover:text-white/40 transition-colors">
                    {member.qualification}
                  </p>
                )}
              </div>

              <div className="mt-auto flex flex-col gap-2 pt-8 border-t border-white/5">
                {member.email && (
                  <a href={`mailto:${member.email}`} className="text-sm font-bold text-accent hover:text-white transition-colors">
                    {member.email}
                  </a>
                )}
                {member.phone && (
                  <span className="text-sm font-bold text-accent">
                    {member.phone}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      </section>
    </div>
  );
}
