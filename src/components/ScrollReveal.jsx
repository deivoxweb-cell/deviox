"use client";
import { motion } from "framer-motion";

/* ── Variants ─────────────────────────────────────────────────── */
const VARIANTS = {
  "fade-up": {
    hidden: { opacity: 0, y: 56 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-down": {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-left": {
    hidden: { opacity: 0, x: -48 },
    visible: { opacity: 1, x: 0 },
  },
  "fade-right": {
    hidden: { opacity: 0, x: 48 },
    visible: { opacity: 1, x: 0 },
  },
  "scale-up": {
    hidden: { opacity: 0, scale: 0.88 },
    visible: { opacity: 1, scale: 1 },
  },
  /** Clip-path reveal — use only when you can guarantee scroll trigger fires.
   *  Prefer "fade-up" for headings near the top of the page. */
  "clip-up": {
    hidden: { clipPath: "inset(100% 0 0 0)", opacity: 1 },
    visible: { clipPath: "inset(0% 0 0 0)", opacity: 1 },
  },
  "clip-left": {
    hidden: { clipPath: "inset(0 100% 0 0)", opacity: 1 },
    visible: { clipPath: "inset(0 0% 0 0)", opacity: 1 },
  },
};

const STAGGER_CONTAINER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

/* ── ScrollReveal ─────────────────────────────────────────────── */
/**
 * Wraps children in a whileInView motion.div.
 *
 * Props:
 *   variant   – one of VARIANTS keys (default "fade-up")
 *   delay     – entry delay in seconds
 *   duration  – animation duration in seconds
 *   stagger   – if true, acts as a stagger container for ScrollRevealItem children
 *   margin    – rootMargin offset for viewport detection (default "-80px")
 *   className – forwarded to the wrapper div
 */
export function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.75,
  stagger = false,
  margin = "-80px",
  className = "",
  as = "div",
}) {
  if (stagger) {
    const Tag = motion[as] || motion.div;
    return (
      <Tag
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin }}
        variants={STAGGER_CONTAINER}
        className={className}
      >
        {children}
      </Tag>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin }}
      variants={VARIANTS[variant]}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── ScrollRevealItem ─────────────────────────────────────────── */
/**
 * Must be a direct child of <ScrollReveal stagger>.
 * Inherits the stagger timing from the parent.
 */
export function ScrollRevealItem({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.7,
  className = "",
}) {
  return (
    <motion.div
      variants={VARIANTS[variant]}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default ScrollReveal;
