"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Award, Users, Lightbulb } from "lucide-react";

const capabilities = [
  "BCP Consultancy (Sales & Marketing)",
  "Direct Customer Support",
  "Sales Support",
  "In Situ Machining",
  "Overhauling",
  "Spare Parts Selling",
  "On Site Troubleshooting",
  "On Site Service Support",
  "Motor Rewinding",
  "Retrofit & Reverse Engineering",
];

const credibility = [
  "Installed 60+ BCPs at various Thermal Power Plants in India through various BCP OEMs.",
  "Attended repair/service/overhaul of 30+ Boiler Circulation Pumps through Direct and various OEMs.",
  "Gained face value, direct contacts, and long-term relationships with End Users & Boiler OEMs.",
  "Expertise in tackling unsatisfied customers of BCPs.",
  "Expert product knowledge of BCP systems.",
  "Skilled and well-experienced technical team.",
];

const team = [
  { name: "Mr. Kunal", role: "CEO & MD", qualification: "PMP, PMI USA, MBA, B.E. Mechanical", tag: "Founder" },
  { name: "Mr. Ravi", role: "Head Technical", qualification: "M.Tech. Thermal, B.E. Mechanical", tag: "Founder" },
  { name: "Ankit Sharma", role: "Manager – Dispatch", qualification: "", tag: "" },
  { name: "Vijay Nehra", role: "Manager – Service", qualification: "", tag: "" },
  { name: "Pankaj Kumar", role: "Manager – Dispatch", qualification: "", tag: "" },
  { name: "Ramesh Yadav", role: "Manager Procurement", qualification: "", tag: "" },
  { name: "Abhishek Singh", role: "Executive Engineer", qualification: "", tag: "" },
  { name: "Namita Singh", role: "Manager – Sales", qualification: "", tag: "" },
];

export default function AboutPage() {
  return (
    <div className="pt-24 bg-white">

      {/* ── Hero Banner ──────────────────────────────────── */}
      <section className="bg-primary py-20 industrial-grid relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-primary to-primary/80" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full px-4 lg:px-10 relative z-10"
        >
          <p className="text-accent text-xs font-black uppercase tracking-[0.3em] mb-3">About DEI VOX</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase leading-tight mb-6">
            India's Pioneer in<br />
            <span className="text-accent">BCP Services</span>
          </h1>
          <p className="text-white/60 max-w-2xl text-base leading-relaxed">
            DEI VOX INDIA PVT. LTD. — your most trusted Business Consultant for Boiler Circulation Pump services in India and abroad.
          </p>
        </motion.div>
      </section>

      {/* ── Who We Are ───────────────────────────────────── */}
      <section className="py-20 w-full px-4 lg:px-10 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="bg-primary rounded-3xl p-10 flex items-center justify-center shadow-2xl shadow-primary/20">
              <img src="/images/Logo.png" alt="DEI VOX Logo" width={200} height={200} className="object-contain brightness-0 invert" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-8 space-y-6 text-foreground/70 leading-relaxed"
          >
            <div>
              <p className="text-accent text-xs font-black uppercase tracking-[0.3em] mb-3">About Us</p>
              <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tighter uppercase mb-6">
                Who We Are
              </h2>
            </div>
            <p>
              If you are looking for a BCP service provider, do not look far ahead — you will find no one else in this space except <strong className="text-primary">DEI VOX INDIA PVT. LTD.</strong> We are functioning at full capacity and are ably supported by BCP OEMs. We provide all types of BCW Pumps, their services, and re-engineering works.
            </p>
            <p>
              We are experts in understanding the parts and their purpose to do proper development and maintenance of BCW Pumps. In short, we are the <strong className="text-primary">business consultants for the BCW Pump business in India</strong> that you can easily trust.
            </p>
            <p>
              Our service facility is open for potential customers to visit and know that we have the ability to not only manufacture but also repair many types of BCP, motors, and MAG drives for sewage treatment requirements, electric utility, and all other general pumps and motor users of the huge industry. We have staff with over <strong className="text-primary">20 years of repairing experience</strong> when it comes to rotating motors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Our Vision ───────────────────────────────────── */}
      <section className="py-20 bg-[#f8f9fb] industrial-grid overflow-hidden">
        <div className="w-full px-4 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <p className="text-accent text-xs font-black uppercase tracking-[0.3em] mb-3">Our Vision</p>
              <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tighter uppercase mb-6">Where We're Headed</h2>
              <div className="w-16 h-1.5 bg-accent rounded-full" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-7 text-foreground/70 leading-relaxed space-y-4"
            >
              <p>
                Ever since our inception, we have always stayed with the principles of <strong className="text-primary">innovation and honesty</strong>. We strive to achieve user-friendly technological advancements in the BCP sector, ensure minimizing the repairing and maintenance requirements, and have quality vendors to provide BCP and its parts to our customers all over India.
              </p>
              <p>
                India is a land of great talent and our finest technicians and engineers are good enough to prove that point. We dream to bring changes to the BCP sector in India by utilizing the creativity and hard work of our team.
              </p>
              <p>
                We look forward to building a safer, productive, and creative environment for our human resources to help the world get better support in the BCP sector via our repair and maintenance work. We want to see our clients leverage our vendor network to get a quality supply of BCP and its parts.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Our Capabilities ─────────────────────────────── */}
      <section className="py-20 w-full px-4 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-accent text-xs font-black uppercase tracking-[0.3em] mb-3">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tighter uppercase mb-10">Our Capabilities</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="flex items-start gap-3 bg-card border border-border rounded-2xl p-5 hover:border-accent/40 hover:shadow-md transition-all group"
            >
              <div className="mt-0.5 text-accent group-hover:scale-110 transition-transform">
                <CheckCircle2 size={16} />
              </div>
              <span className="text-sm font-bold text-primary uppercase tracking-wide">{cap}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Our Credibility ──────────────────────────────── */}
      <section className="py-20 bg-primary">
        <div className="w-full px-4 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-accent text-xs font-black uppercase tracking-[0.3em] mb-3">Why Trust Us</p>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase mb-10">Our Credibility</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {credibility.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-accent/40 transition-all"
              >
                <div className="text-accent mb-3"><Award size={20} /></div>
                <p className="text-sm text-white/70 leading-relaxed font-medium">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Origin Story ─────────────────────────────────── */}
      <section className="py-20 w-full px-4 lg:px-10 industrial-grid">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="p-3 bg-accent/10 rounded-xl text-accent inline-block mb-6"><Lightbulb size={28} /></div>
          <p className="text-accent text-xs font-black uppercase tracking-[0.3em] mb-3">Ideation Board</p>
          <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tighter uppercase mb-8">The Origin Story</h2>
          <p className="text-foreground/70 leading-relaxed text-base mb-6">
            Every business has an origin story. Ours began over a cup of coffee, with informal but visionary talks about BCP and its supplying, repairing, and maintaining challenges. The vision was strong — to <strong className="text-primary">empower India with proper BCP and its parts supplies</strong>, along with maintaining and repairing them.
          </p>
          <p className="text-foreground/70 leading-relaxed text-base">
            This industry is large but there was no indigenous company in India to do all these things. With this ambition, DEI VOX INDIA PVT. LTD. was formed in the 2020s with the motto of never looking back.
            As Robert Frost wrote in <em className="text-primary">"The Road Not Taken"</em> — DEI VOX INDIA PVT. LTD. has also followed that same path.
          </p>
        </motion.div>
      </section>

      {/* ── Meet The Team ─────────────────────────────────── */}
      <section className="py-20 bg-[#f8f9fb]">
        <div className="w-full px-4 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-accent text-xs font-black uppercase tracking-[0.3em] mb-3">Our People</p>
            <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tighter uppercase mb-4">Meet The Team</h2>
            <div className="w-16 h-1.5 bg-accent rounded-full mx-auto" />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-border rounded-3xl p-6 flex flex-col items-center text-center hover:border-accent/40 hover:shadow-lg transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white mb-4 group-hover:bg-accent transition-colors">
                  <Users size={28} />
                </div>
                {member.tag && (
                  <span className="text-[9px] font-black bg-accent/10 text-accent uppercase tracking-widest px-2 py-0.5 rounded-full mb-2">{member.tag}</span>
                )}
                <h3 className="font-black text-primary uppercase text-sm tracking-tight mb-1">{member.name}</h3>
                <p className="text-xs font-bold text-accent uppercase tracking-wide mb-2">{member.role}</p>
                {member.qualification && (
                  <p className="text-[10px] text-foreground/50 font-medium leading-relaxed">{member.qualification}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
