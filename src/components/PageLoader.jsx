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
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        background: "var(--color-primary, #0d2340)",
        opacity: progress >= 100 ? 0 : 1,
        transition: "opacity 0.4s ease",
        pointerEvents: progress >= 100 ? "none" : "all",
      }}
    >
      {/* Watermark text */}
      <span
        style={{
          position: "absolute",
          fontSize: "clamp(80px, 18vw, 200px)",
          fontWeight: 900,
          letterSpacing: "-0.06em",
          color: "rgba(255,255,255,0.03)",
          userSelect: "none",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          textTransform: "uppercase",
        }}
      >
        DEIVOX
      </span>

      {/* Logo + spinner */}
      <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        {/* Spinning ring */}
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            border: "3px solid rgba(255,255,255,0.08)",
            borderTop: "3px solid #f97316",
            animation: "deivox-spin 0.8s linear infinite",
            margin: "0 auto",
          }}
        />

        {/* Logo centered */}
        <Image
          src="/images/Logo.png"
          alt="DEI VOX"
          width={44}
          height={44}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            objectFit: "contain",
            filter: "brightness(0) invert(1)",
          }}
        />
      </div>

      {/* Brand label */}
      <p
        style={{
          position: "relative",
          zIndex: 1,
          marginTop: 20,
          fontSize: "10px",
          fontWeight: 900,
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.4)",
        }}
      >
        DEI VOX INDIA
      </p>

      {/* Progress bar (bottom) */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            height: "100%",
            background: "linear-gradient(90deg, #f97316, #fb923c)",
            width: `${progress}%`,
            transition: "width 0.15s ease",
            boxShadow: "0 0 12px rgba(249,115,22,0.6)",
          }}
        />
      </div>

      {/* Spin keyframe injected inline */}
      <style>{`@keyframes deivox-spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
