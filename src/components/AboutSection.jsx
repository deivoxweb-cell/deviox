import React from "react";
import { motion } from "framer-motion";
import { MapPin, CheckCircle2, Phone } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white industrial-grid relative overflow-hidden">

      <div className="w-full px-4 lg:px-10 relative z-10">

        {/* Section header — same pattern as WhyChooseUs / ServiceGrid */}
        <div className="text-center mb-16">
          <p className="text-accent text-xs font-black uppercase tracking-[0.3em] mb-3">Who We Are</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-primary uppercase">
            About DEI VOX
          </h2>
          <div className="w-20 h-1.5 bg-accent mx-auto mt-5 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left — Logo + tagline card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex flex-col items-center lg:items-start gap-8"
          >
            {/* Logo box */}
            <div className="w-full bg-primary rounded-3xl p-10 flex items-center justify-center shadow-2xl shadow-primary/20">
              <img
                src="/images/logo.png"
                alt="DEI VOX Logo"
                width={220}
                height={220}
                className="object-contain brightness-0 invert"
              />
            </div>

            {/* Office cards */}
            <div className="w-full space-y-4">
              {[
                { label: "Sales Office", location: "Gurugram, Haryana, India" },
                { label: "Service Support", location: "Bengaluru, Karnataka, India" },
              ].map((office) => (
                <div
                  key={office.label}
                  className="flex items-start gap-4 bg-card border border-border rounded-2xl p-5 hover:border-accent/40 hover:shadow-md transition-all group"
                >
                  <div className="p-2 bg-accent/10 rounded-xl text-accent group-hover:bg-accent group-hover:text-white transition-all mt-0.5">
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

            <div className="space-y-5 mb-10 text-foreground/70 leading-relaxed">
              <p>
                <span className="font-black text-primary">DEI VOX INDIA PVT. LTD.</span> is not just another company
                that provides repair and maintenance services — we are the pioneers of this field. When it comes
                to submersible pumping motor units we are the best in{" "}
                <span className="font-black text-primary">designing, upgrading, repairing, and servicing</span> them.
              </p>
              <p>
                We are emerging as the sole player to function at such depth in India. Our boiler circulation
                pumps are not just cost-effective — they beat the performance standards set by industry
                leaders all over the world.
              </p>
            </div>

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
                <div key={item.title} className="bg-card border border-border border-l-4 border-l-accent rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3 text-accent">
                    {item.icon}
                    <span className="text-xs font-black uppercase tracking-widest text-primary">{item.title}</span>
                  </div>
                  <p className="text-xs text-foreground/60 font-medium leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
