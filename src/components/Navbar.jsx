"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navGroups = [
  {
    name: "Services",
    href: "/services",
    items: [
      { name: "Services Overview", href: "/services-overview" },
      { name: "BCP Motor Repair & Rewinding", href: "/motor-rewinding-services" },
      { name: "BCP Pump Overhaul & Refurbishment", href: "/bcp-overhauling-services" },
      { name: "Multi-Make Capability", href: "/our-experience" },
      { name: "Testing & Quality Assurance", href: "/testing-quality-assurance" },
      { name: "Reverse Engineering & Custom Components", href: "/reverse-engineering-custom-components" },
      { name: "Emergency / Outage Support", href: "/emergency-outage-support" },
    ],
  },
  {
    name: "Spare Parts",
    href: "/spare-parts",
    items: [
      { name: "Spare Parts Overview", href: "/spare-parts" },
      { name: "Parts Catalogue (Filterable)", href: "/parts-catalogue" },
    ],
  },
  {
    name: "Capabilities",
    href: "/make-models-supported",
    items: [
      { name: "Make & Models Supported", href: "/make-models-supported" },
      {
        name: "Quality, Compliance & Confidentiality",
        href: "/quality-compliance-confidentiality",
      },
    ],
  },
  {
    name: "Resources",
    href: "/case-studies",
    items: [
      { name: "Case Studies", href: "/case-studies" },
      { name: "ISO Certificates", href: "/iso-certificate" },
      {
        name: "Downloads",
        href: "/images/DEI_VOX_Brochure_without_V-FLO.pdf",
        download: true,
      },
    ],
  },
  {
    name: "About",
    href: "/about",
    items: [
      { name: "Company Overview", href: "/about" },
      { name: "Team", href: "/team" },
    ],
  },
  {
    name: "Blog",
    href: "/blog",
    items: [{ name: "All Articles", href: "/blog" }],
  },
];

const linkClassName = (isActive) =>
  `px-2.5 py-2 rounded-full text-[9px] font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
    isActive
      ? "bg-accent text-black shadow-lg shadow-accent/20"
      : "text-black/60 hover:text-black hover:bg-black/5"
  }`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [currentHash, setCurrentHash] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const syncHash = () => setCurrentHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  const isTargetActive = (href) => {
    const [targetPath, targetHash] = href.split("#");
    return (
      pathname === targetPath &&
      (targetHash ? currentHash === `#${targetHash}` : !currentHash)
    );
  };

  const isGroupActive = (group) => {
    const [groupPath, groupHash] = group.href.split("#");
    if (groupHash) return isTargetActive(group.href);

    const hashTargetActive = navGroups.some((otherGroup) => {
      const [otherPath, otherHash] = otherGroup.href.split("#");
      return otherHash && pathname === otherPath && currentHash === `#${otherHash}`;
    });

    return pathname === groupPath && !hashTargetActive;
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setOpenGroup(null);
  };

  return (
    <div className="fixed top-8 inset-x-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`w-full max-w-7xl bg-white/90 backdrop-blur-xl border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.1)] rounded-full px-2 py-2 flex items-center justify-between ${
          scrolled ? "shadow-2xl" : ""
        }`}
      >
        <Link href="/" className="flex items-center group pl-2" onClick={closeMobileMenu}>
          <Image
            src="/images/Logo.png"
            alt="DEI VOX Logo"
            width={130}
            height={52}
            className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-500"
            priority
          />
        </Link>

        <div className="hidden xl:flex items-center gap-0.5">
          <Link href="/" className={linkClassName(pathname === "/")}>
            Home
          </Link>

          {navGroups.map((group) =>
            group.name === "Blog" ? (
              <Link
                key={group.name}
                href={group.href}
                onClick={() => setOpenGroup(null)}
                className={linkClassName(isGroupActive(group))}
              >
                {group.name}
              </Link>
            ) : (
              <div
                key={group.name}
                className="relative"
                onMouseEnter={() => setOpenGroup(group.name)}
                onMouseLeave={() =>
                  setOpenGroup((current) =>
                    current === group.name ? null : current,
                  )
                }
                onFocus={() => setOpenGroup(group.name)}
              >
                <Link
                  href={group.href}
                  onClick={() => setOpenGroup(null)}
                  className={`${linkClassName(isGroupActive(group))} inline-flex items-center gap-1`}
                >
                  {group.name}
                  <ChevronDown size={12} aria-hidden="true" />
                </Link>
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 w-72 z-50 transition-all duration-200 ${
                    openGroup === group.name
                      ? "visible opacity-100"
                      : "invisible opacity-0"
                  }`}
                >
                  <div className="max-h-[70vh] overflow-y-auto bg-white shadow-2xl rounded-3xl border border-black/5 p-2">
                    {group.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        download={item.download ? true : undefined}
                        onClick={() => setOpenGroup(null)}
                        className={`block px-4 py-3 text-[10px] font-semibold uppercase tracking-wider transition-all rounded-2xl ${
                          isTargetActive(item.href)
                            ? "bg-accent text-black"
                            : "text-black/60 hover:bg-[#8bc34a] hover:text-black"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ),
          )}

          <Link href="/contact" className={linkClassName(pathname === "/contact")}>
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden xl:block">
            <button className="flex items-center gap-3 bg-black text-white px-5 py-2 rounded-full group hover:bg-zinc-900 transition-all shadow-xl shadow-black/10 active:scale-95">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em]">Get Quote</span>
              <div className="w-7 h-7 bg-accent rounded-full flex items-center justify-center text-black group-hover:rotate-45 transition-transform">
                <ArrowUpRight size={16} />
              </div>
            </button>
          </Link>

          <button
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 text-black hover:bg-black/5 rounded-full transition-colors"
          >
            {isOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-20 left-4 right-4 max-h-[calc(100vh-7rem)] overflow-y-auto bg-white shadow-2xl rounded-[2rem] p-6 sm:p-8 border border-black/5 xl:hidden z-40"
          >
            <div className="flex flex-col">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="text-xl font-bold text-black hover:text-accent uppercase tracking-tighter py-3 border-b border-black/5"
              >
                Home
              </Link>

              {navGroups.map((group) => {
                if (group.name === "Blog") {
                  return (
                    <Link
                      key={group.name}
                      href={group.href}
                      onClick={closeMobileMenu}
                      className={`border-b border-black/5 py-3 text-xl font-bold uppercase tracking-tighter ${
                        isGroupActive(group)
                          ? "text-accent"
                          : "text-black hover:text-accent"
                      }`}
                    >
                      {group.name}
                    </Link>
                  );
                }

                const isExpanded = openGroup === group.name;
                return (
                  <div key={group.name} className="border-b border-black/5">
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      onClick={() => setOpenGroup(isExpanded ? null : group.name)}
                      className={`w-full flex items-center justify-between text-xl font-bold uppercase tracking-tighter py-3 ${
                        isGroupActive(group) ? "text-accent" : "text-black"
                      }`}
                    >
                      {group.name}
                      <motion.span
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        className="text-accent"
                      >
                        <ChevronDown size={20} />
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden flex flex-col gap-2 pb-4 pl-4"
                        >
                          {group.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              download={item.download ? true : undefined}
                              onClick={closeMobileMenu}
                              className={`text-sm sm:text-base font-semibold uppercase tracking-tight py-1 ${
                                isTargetActive(item.href)
                                  ? "text-[#8bc34a]"
                                  : "text-black/60 hover:text-[#8bc34a]"
                              }`}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="text-xl font-bold text-black hover:text-accent uppercase tracking-tighter py-3"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
