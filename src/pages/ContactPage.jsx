import React, { useState } from "react";
import { Mail, Phone, MapPin, Paperclip } from "lucide-react";

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

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    company: "",
    email: "",
    subject: "",
    message: "",
  });
  const [fileName, setFileName] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    setFileName(e.target.files?.[0]?.name ?? "");
  };

  return (
    <div className="pt-24 pb-24 bg-white">

      {/* ── Hero Banner ──────────────────────────────────── */}
      <section className="bg-primary py-20 industrial-grid relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />
        <div className="w-full px-4 lg:px-10 relative z-10">
          <p className="text-accent text-xs font-black uppercase tracking-[0.3em] mb-3">Get In Touch</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase leading-tight mb-6">
            Reach<br />
            <span className="text-accent">DEI VOX</span>
          </h1>
          <p className="text-white/60 max-w-xl text-base leading-relaxed">
            Get the ultimate solution to your plant's circulating pump requirements.
          </p>
        </div>
      </section>

      {/* ── Contact Cards ─────────────────────────────────── */}
      <section className="py-16 w-full px-4 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: <Phone size={22} />,
              label: "Call Us",
              primary: "+91-9886424770",
              secondary: "+91-7428200229",
            },
            {
              icon: <Mail size={22} />,
              label: "Email Us",
              primary: "sales@deivox.co.in",
              secondary: "",
            },
            {
              icon: <MapPin size={22} />,
              label: "Regd. Office",
              primary: "002/T S1, Vatika Town Square",
              secondary: "Sector 83, Gurugram, Haryana 122004",
            },
          ].map((card) => (
            <div
              key={card.label}
              className="bg-card border border-border rounded-3xl p-6 hover:border-accent/40 hover:shadow-lg transition-all group"
            >
              <div className="p-3 bg-accent/10 text-accent rounded-xl inline-block mb-4 group-hover:bg-accent group-hover:text-white transition-all">
                {card.icon}
              </div>
              <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-2">{card.label}</p>
              <p className="text-sm font-black text-primary uppercase">{card.primary}</p>
              {card.secondary && <p className="text-xs text-foreground/60 font-medium mt-1">{card.secondary}</p>}
            </div>
          ))}
        </div>

        {/* ── Main grid: locations + form ───────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Office locations */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <p className="text-accent text-xs font-black uppercase tracking-[0.3em] mb-2">Our Locations</p>
              <h2 className="text-2xl font-black text-primary uppercase tracking-tighter mb-4">Where To Find Us</h2>
              <div className="w-10 h-1 bg-accent rounded-full" />
            </div>

            <p className="text-foreground/70 text-sm leading-relaxed">
              Our facility is located in Gujarat. We provide all types of motor winding, repairing, and testing in our service facilities. We welcome clients to visit and understand the value we bring.
            </p>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Our sales office is in <strong className="text-primary">Gurugram, Haryana</strong>. You can also visit our service support office in <strong className="text-primary">Bengaluru, Karnataka</strong>.
            </p>

            {[
              { tag: "Sales Office", loc: "Gurugram, Haryana, India", sub: "002/T S1, Vatika Town Square, Sector 83 – 122004" },
              { tag: "Service Support", loc: "Bengaluru, Karnataka, India", sub: "" },
            ].map((o) => (
              <div key={o.tag} className="bg-card border border-border border-l-4 border-l-accent rounded-2xl p-5">
                <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-1">{o.tag}</p>
                <p className="text-sm font-black text-primary uppercase">{o.loc}</p>
                {o.sub && <p className="text-xs text-foreground/50 mt-1 font-medium">{o.sub}</p>}
              </div>
            ))}

            <div className="bg-primary rounded-2xl p-6 text-white">
              <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-3">DEI VOX INDIA PVT. LTD.</p>
              <p className="text-xs text-white/70 leading-relaxed mb-3">
                The right pick for any BCP maintenance, repairing, or rebuilding issues.
              </p>
              <p className="text-xs text-white/80 font-bold">sales@deivox.co.in</p>
              <p className="text-xs text-white/80 font-bold">+91-9886424770</p>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-8">
            <div className="bg-[#f8f9fb] rounded-3xl p-8 md:p-10 border border-border industrial-grid">
              <h3 className="text-2xl font-black text-primary uppercase tracking-tighter mb-8">Send Us A Message</h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { id: "name", label: "Name", placeholder: "Your name", type: "text" },
                  { id: "phone", label: "Phone Number", placeholder: "+91 XXXXX XXXXX", type: "tel" },
                  { id: "company", label: "Company Name", placeholder: "Your company", type: "text" },
                  { id: "email", label: "Email Address", placeholder: "you@company.com", type: "email" },
                ].map((field) => (
                  <div key={field.id}>
                    <label className="block text-[10px] font-black text-foreground/60 uppercase tracking-widest mb-2">
                      {field.label}
                    </label>
                    <input
                      name={field.id}
                      type={field.type}
                      value={form[field.id]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                    />
                  </div>
                ))}

                {/* Subject dropdown */}
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-black text-foreground/60 uppercase tracking-widest mb-2">Subject</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select a subject…</option>
                    {SUBJECTS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-[10px] font-black text-foreground/60 uppercase tracking-widest mb-2">Your Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your requirement or query..."
                    className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-none"
                  />
                </div>

                {/* File upload */}
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-black text-foreground/60 uppercase tracking-widest mb-2">Attach Image / Document <span className="normal-case text-foreground/30">(optional)</span></label>
                  <label className="flex items-center gap-3 w-full bg-white border border-dashed border-border hover:border-accent rounded-xl px-4 py-3 cursor-pointer transition-all group">
                    <div className="p-2 bg-accent/10 rounded-lg text-accent group-hover:bg-accent group-hover:text-white transition-all">
                      <Paperclip size={16} />
                    </div>
                    <span className="text-sm text-foreground/50 group-hover:text-foreground transition-colors truncate">
                      {fileName || "Click to upload an image or document…"}
                    </span>
                    <input
                      type="file"
                      accept="image/*,.pdf,.doc,.docx"
                      className="hidden"
                      onChange={handleFile}
                    />
                  </label>
                </div>

                <div className="md:col-span-2">
                  <button
                    type="button"
                    className="w-full py-4 bg-accent hover:bg-accent/90 text-white font-black rounded-xl uppercase tracking-widest text-sm shadow-lg shadow-accent/20 transition-all active:scale-95"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
