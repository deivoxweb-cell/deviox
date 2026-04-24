import Image from "next/image";
/**
 * loading.jsx — Next.js App Router streaming UI.
 * Shown automatically by the framework while a page segment is loading.
 * Uses the same branded overlay as PageLoader but is always server-safe.
 */
export default function Loading() {
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
      }}
    >
      {/* Watermark */}
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

      {/* Spinning ring + logo */}
      <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
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

      {/* Label */}
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

      {/* Indeterminate shimmer bar at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "rgba(255,255,255,0.06)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "40%",
            background: "linear-gradient(90deg, transparent, #f97316, transparent)",
            boxShadow: "0 0 12px rgba(249,115,22,0.6)",
            animation: "deivox-shimmer 1.4s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes deivox-spin { to { transform: rotate(360deg); } }
        @keyframes deivox-shimmer {
          0%   { transform: translateX(-150%); }
          100% { transform: translateX(350%); }
        }
      `}</style>
    </div>
  );
}
