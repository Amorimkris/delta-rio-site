"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowDown, Award, Leaf, TrendingUp } from "lucide-react";

const E = [0.22, 1, 0.36, 1] as [number, number, number, number];

const badges = [
  { icon: <Award size={16} />, value: "+13", label: "Anos no agro" },
  { icon: <Leaf size={16} />,  value: "8+",  label: "Linhas de produto" },
  { icon: <TrendingUp size={16} />, value: "100%", label: "Comprometimento" },
];

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY   = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentOp = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      style={{ position: "relative", height: "100svh", minHeight: 640, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}
    >
      {/* Parallax BG */}
      <motion.div style={{ position: "absolute", inset: 0, zIndex: 0, y: imageY }}>
        <Image src="/hero.png" alt="Lavoura de soja Delta Rio" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "center", transform: "scale(1.12)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(6,10,7,0.7) 0%, rgba(6,10,7,0.3) 40%, rgba(6,10,7,0.92) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(6,10,7,0.6), transparent 50%, rgba(6,10,7,0.4))" }} />
      </motion.div>

      {/* Dot grid */}
      <div className="dr-dot-grid" style={{ position: "absolute", inset: 0, zIndex: 0, opacity: 0.2 }} />

      {/* Green orb */}
      <div style={{ position: "absolute", top: "25%", left: "20%", width: 500, height: 500, borderRadius: "50%", background: "rgba(34,163,77,0.07)", filter: "blur(120px)", pointerEvents: "none", zIndex: 0 }} />

      {/* Content */}
      <motion.div style={{ position: "relative", zIndex: 10, y: contentY, opacity: contentOp, width: "100%", textAlign: "center" }}>
        <div className="dr-container">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: E }}
            style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}
          >
            <div className="dr-badge">
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--dr-green)", display: "inline-block", boxShadow: "0 0 8px var(--dr-green)" }} />
              Rio Verde · GO &nbsp;·&nbsp; Fundada em 2011
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: E }}
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, color: "#fff", lineHeight: 1.05, marginBottom: 24, fontSize: "clamp(2.4rem, 6.5vw, 5.2rem)" }}
          >
            Tecnologia e confiança{" "}
            <span style={{ display: "block", marginTop: 4 }}>
              para o{" "}
              <span className="dr-text-green dr-text-glow">agro</span>{" "}
              <span className="dr-text-gold">brasileiro.</span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: E }}
            style={{ fontFamily: "'Inter', sans-serif", color: "var(--dr-text-muted)", fontSize: "clamp(1rem, 2vw, 1.15rem)", lineHeight: 1.7, maxWidth: 580, margin: "0 auto 36px" }}
          >
            Mais de <strong style={{ color: "var(--dr-green-light)", fontWeight: 600 }}>13 anos</strong> fornecendo
            defensivos, fertilizantes, sementes e consultoria agronômica para quem
            transforma o cerrado goiano em produtividade.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: E }}
            style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center", alignItems: "center" }}
          >
            <a href="tel:556430501010" id="hero-phone" className="dr-btn dr-btn-primary" style={{ padding: "16px 32px", borderRadius: 16, fontSize: 16, gap: 10, minWidth: 220 }}>
              <Phone size={20} /> (64) 3050-1010
            </a>
            <Link href="/institucional" id="hero-about" className="dr-btn dr-btn-outline" style={{ padding: "16px 32px", borderRadius: 16, fontSize: 16, gap: 10, minWidth: 220 }}>
              Conheça a Delta Rio <ArrowDown size={18} />
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: E }}
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 28, marginTop: 56, paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            {badges.map((b, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div className="dr-glass" style={{ width: 40, height: 40, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--dr-green)", flexShrink: 0 }}>
                  {b.icon}
                </div>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 20, color: "#fff", lineHeight: 1 }}>{b.value}</div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, color: "var(--dr-text-dim)", marginTop: 3 }}>{b.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        onClick={() => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })}
        style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", zIndex: 10, background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, color: "var(--dr-text-dim)" }}
        aria-label="Rolar para baixo"
      >
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase" }}>Scroll</span>
        <ArrowDown size={16} className="dr-anim-bounce" />
      </motion.button>

      {/* Bottom fade */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120, background: "linear-gradient(to top, #060a07, transparent)", pointerEvents: "none", zIndex: 5 }} />
    </section>
  );
}
