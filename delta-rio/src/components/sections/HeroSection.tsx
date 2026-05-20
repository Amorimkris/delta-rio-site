"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowDown, Award, Leaf, TrendingUp } from "lucide-react";
import { useMobile } from "@/hooks/useMobile";

const E = [0.22, 1, 0.36, 1] as [number, number, number, number];

const badges = [
  { icon: <Award size={15} />, value: "+13", label: "Anos no agro" },
  { icon: <Leaf size={15} />,  value: "8+",  label: "Linhas de produto" },
  { icon: <TrendingUp size={15} />, value: "100%", label: "Comprometimento" },
];

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const isMobile = useMobile();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  /* Disable heavy parallax on mobile for smooth performance */
  const imageY   = useTransform(scrollYProgress, [0, 1], isMobile ? ["0%","0%"] : ["0%","28%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], isMobile ? ["0%","0%"] : ["0%","18%"]);
  const contentOp = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      style={{
        position: "relative",
        /* Use 100dvh for correct mobile viewport */
        height: "100dvh",
        minHeight: 600,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Parallax BG */}
      <motion.div style={{ position: "absolute", inset: 0, zIndex: 0, y: imageY }}>
        <Image
          src="/hero.png"
          alt="Lavoura Delta Rio"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: isMobile ? "60% center" : "center",
            transform: isMobile ? "scale(1.0)" : "scale(1.12)",
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(6,10,7,0.72) 0%, rgba(6,10,7,0.35) 40%, rgba(6,10,7,0.95) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(6,10,7,0.6), transparent 60%)" }} />
      </motion.div>
      <div className="dr-dot-grid" style={{ position: "absolute", inset: 0, zIndex: 0, opacity: 0.15 }} />

      {/* Content */}
      <motion.div style={{ position: "relative", zIndex: 10, y: contentY, opacity: contentOp, width: "100%" }}>
        <div className="dr-container" style={{ textAlign: isMobile ? "center" : "center" }}>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: E }}
            style={{ display: "flex", justifyContent: "center", marginBottom: isMobile ? 20 : 28 }}
          >
            <div className="dr-badge">
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--dr-green)", display: "inline-block", boxShadow: "0 0 8px var(--dr-green)" }} />
              Rio Verde · GO &nbsp;·&nbsp; Desde 2011
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: E }}
            style={{
              fontFamily: "'Syne',sans-serif",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.07,
              marginBottom: isMobile ? 18 : 24,
              fontSize: isMobile ? "clamp(2.2rem,11vw,3rem)" : "clamp(2.8rem,6.5vw,5.2rem)",
            }}
          >
            Tecnologia e confiança{" "}
            <span style={{ display: "block", marginTop: 2 }}>
              para o{" "}
              <span className="dr-text-green dr-text-glow">agro</span>{" "}
              <span className="dr-text-gold">brasileiro.</span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: E }}
            style={{
              fontFamily: "'Inter',sans-serif",
              color: "var(--dr-text-muted)",
              fontSize: isMobile ? "clamp(0.92rem,4vw,1rem)" : "clamp(1rem,2vw,1.15rem)",
              lineHeight: 1.75,
              maxWidth: isMobile ? "100%" : 560,
              margin: isMobile ? "0 0 28px" : "0 auto 36px",
            }}
          >
            Mais de{" "}
            <strong style={{ color: "var(--dr-green-light)", fontWeight: 600 }}>13 anos</strong>{" "}
            fornecendo defensivos, fertilizantes, sementes e consultoria para o cerrado goiano.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: E }}
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: isMobile ? 12 : 14,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a
              href="tel:556430501010"
              id="hero-phone"
              className="dr-btn dr-btn-primary"
              style={{
                width: isMobile ? "100%" : "auto",
                padding: isMobile ? "17px 28px" : "16px 32px",
                borderRadius: 16, fontSize: 16, gap: 10,
                boxShadow: "0 0 24px rgba(34,163,77,0.4)",
              }}
            >
              <Phone size={20} /> (64) 3050-1010
            </a>
            <Link
              href="/institucional"
              id="hero-about"
              className="dr-btn dr-btn-outline"
              style={{
                width: isMobile ? "100%" : "auto",
                padding: isMobile ? "15px 28px" : "16px 32px",
                borderRadius: 16, fontSize: 16, gap: 10,
              }}
            >
              Conheça a Delta Rio
            </Link>
          </motion.div>

          {/* Stats row — hidden on very small mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: E }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: isMobile ? 20 : 28,
              marginTop: isMobile ? 36 : 56,
              paddingTop: isMobile ? 20 : 28,
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {badges.map((b, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div className="dr-glass" style={{ width: 36, height: 36, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--dr-green)", flexShrink: 0 }}>
                  {b.icon}
                </div>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: isMobile ? 18 : 20, color: "#fff", lineHeight: 1 }}>{b.value}</div>
                  <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 10, color: "var(--dr-text-dim)", marginTop: 2 }}>{b.label}</div>
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
        style={{ position: "absolute", bottom: "max(28px, env(safe-area-inset-bottom, 28px))", left: "50%", transform: "translateX(-50%)", zIndex: 10, background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, color: "var(--dr-text-dim)" }}
        aria-label="Rolar para baixo"
      >
        <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase" }}>Scroll</span>
        <ArrowDown size={14} className="dr-anim-bounce" />
      </motion.button>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 100, background: "linear-gradient(to top, #060a07, transparent)", pointerEvents: "none", zIndex: 5 }} />
    </section>
  );
}
