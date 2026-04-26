"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const WhatsAppChat = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay appearance to not interfere with initial LCP and show intention
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-[999] group"
        >
          {/* Tooltip/Label */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-[#003366] px-4 py-2 rounded-full shadow-xl border border-gray-100 text-sm font-semibold whitespace-nowrap pointer-events-none hidden md:block"
          >
            Chat with Specialists
            <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-white rotate-45 border-r border-t border-gray-100"></div>
          </motion.div>

          {/* Pulsing Background */}
          <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20 group-hover:animate-none"></div>

          {/* Main Button */}
          <motion.a
            href="https://wa.me/919886424770?text=Hello%21%20I%27m%20interested%20in%20your%20Boiler%20Circulation%20Pump%20services."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:shadow-[0_8px_40px_rgb(37,211,102,0.6)] transition-shadow duration-300 overflow-hidden"
          >
            <Image
              src="/images/whatsApp.webp"
              alt="WhatsApp"
              width={56}
              height={56}
              className="w-full h-full object-cover p-1"
            />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppChat;
