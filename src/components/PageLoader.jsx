"use client";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

/**
 * PageLoader — shows a full-screen branded overlay during client-side
 * route transitions (link clicks, back/forward navigation).
 * It does NOT block the initial server render.
 */
export default function PageLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const prevPath = useRef(null);
  const timerRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    // Skip the very first mount (initial load is handled by loading.jsx)
    if (prevPath.current === null) {
      prevPath.current = pathname;
      return;
    }
    // Path changed — show loader
    if (prevPath.current !== pathname) {
      prevPath.current = pathname;
      setProgress(0);
      setVisible(true);

      // Animate progress bar quickly to ~90% then finish
      let p = 0;
      animRef.current = setInterval(() => {
        p += Math.random() * 18 + 8;
        if (p >= 90) {
          p = 90;
          clearInterval(animRef.current);
        }
        setProgress(p);
      }, 120);

      // After content renders, finish and hide
      timerRef.current = setTimeout(() => {
        clearInterval(animRef.current);
        setProgress(100);
        setTimeout(() => setVisible(false), 400);
      }, 700);
    }

    return () => {
      clearInterval(animRef.current);
      clearTimeout(timerRef.current);
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      className="loader-overlay"
      style={{
        opacity: progress >= 100 ? 0 : 1,
        pointerEvents: progress >= 100 ? "none" : "all",
      }}
    >
      {/* Watermark text */}
      <span className="loader-watermark">
        DEIVOX
      </span>
      {/* Logo + spinner */}
      <div className="loader-logo-container">
        {/* Spinning ring */}
        <div className="loader-ring" />
        {/* Logo centered */}
        <Image
          src="/images/Logo.png"
          alt="DEI VOX"
          width={44}
          height={44}
          className="loader-logo"
        />
      </div>
      {/* Brand label */}
      <p className="loader-label">
        DEI VOX INDIA
      </p>
      {/* Progress bar (bottom) */}
      <div className="loader-progress-bg">
        <div
          className="loader-progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
