"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { MapPin, CheckCircle2, Phone } from "lucide-react";

const TiltCard = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * 20); // max rotation
    y.set(yPct * -20);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: mouseYSpring, rotateY: mouseXSpring, transformStyle: "preserve-3d" }}
      className={className}
    >
      <div style={{ transform: "translateZ(50px)" }} className="w-full h-full">
        {children}
      </div>
    </motion.div>
  );
};

const AboutSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start end", "end start"] });
  const yMove = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={container} className="py-24 bg-[#fafafa] industrial-grid relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-[-10%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full px-4 lg:px-10 relative z-10">

        {/* Section header — same pattern as WhyChooseUs / ServiceGrid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-xs font-black uppercase tracking-[0.3em] mb-3">Who We Are</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-primary uppercase">
            About DEI VOX
          </h2>
          <div className="w-20 h-1.5 bg-accent mx-auto mt-5 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left — Logo + tagline card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex flex-col items-center lg:items-start gap-8"
          >
            {/* Logo box with 3D Tilt */}
            <TiltCard className="w-full bg-primary rounded-[2rem] p-12 flex items-center justify-center shadow-2xl shadow-primary/20 cursor-crosshair">
              <Image
                src="/images/Logo.png"
                alt="DEI VOX Logo"
                width={220}
                height={220}
                className="object-contain brightness-0 invert drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
                loading="lazy"
              />
            </TiltCard>

            {/* Office cards */}
            <div className="w-full space-y-4">
              {[
                { label: "Sales Office", location: "Gurugram, Haryana, India" },
                { label: "Solution Provider", location: "Bommasandra Industrial Area, Bangalore" },
              ].map((office) => (
                <div
                  key={office.label}
                  className="flex items-start gap-4 bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl p-5 hover:bg-white/60 hover:shadow-xl transition-all group"
                >
                  <div className="p-2 bg-white rounded-xl text-accent shadow-sm group-hover:scale-110 transition-transform mt-0.5">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-0.5">{office.label}</p>
                    <p className="text-sm font-black text-primary uppercase">{office.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-primary tracking-tighter leading-tight mb-6 uppercase">
              Empowering The Boiler<br />
              <span className="text-accent">Circulation Systems!</span>
            </h3>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } }
              }}
              className="space-y-6 mb-12 text-foreground/70 leading-relaxed text-base md:text-lg"
            >
              <div className="overflow-hidden">
                <motion.p variants={{ hidden: { y: "100%", opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}>
                  <span className="font-black text-primary">DEI VOX INDIA PVT. LTD.</span> is not just another company
                  providing repair and maintenance services — we are India's pioneers in <strong>Boiler Circulation Pumps (BCP)</strong>. When it comes
                  to comprehensive BCP maintenance services and submersible pumping motor units, we are the industry leaders in <span className="font-black text-primary">designing, upgrading, repairing, and servicing</span> them to exact specifications.
                </motion.p>
              </div>
              <div className="overflow-hidden">
                <motion.p variants={{ hidden: { y: "100%", opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}>
                  As the premier solution provider in India, we deliver <strong>OEM-quality</strong> spare parts and overhauling without the exorbitant costs. Our Boiler Circulation Pump solutions guarantee uncompromising performance and extreme reliability at highly <strong>affordable pricing</strong>, matching or exceeding global industry standards.
                </motion.p>
              </div>
            </motion.div>


            {/* 2-col stat grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {[
                {
                  icon: <CheckCircle2 size={20} />,
                  title: "BCP Business Consultant",
                  body: "Business Consultant of Boiler Circulation Pump (BCP) in India and abroad, with Sales & Spare parts support for all makes.",
                },
                {
                  icon: <Phone size={20} />,
                  title: "24/7 Service Support",
                  body: "Round-the-clock service support, spare parts supply, and expert consultation for all BCP systems wherever you are.",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -5 }}
                  className="bg-white/50 backdrop-blur-lg border border-white/60 rounded-[1.5rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,51,102,0.08)] transition-all"
                >
                  <div className="flex items-center gap-3 mb-4 text-accent">
                    <div className="p-2 bg-white rounded-xl shadow-sm">{item.icon}</div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{item.title}</span>
                  </div>
                  <p className="text-sm text-foreground/60 font-medium leading-relaxed">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
