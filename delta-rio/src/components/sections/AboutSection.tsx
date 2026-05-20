"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, MapPin, Calendar, ArrowRight } from "lucide-react";
import { useMobile } from "@/hooks/useMobile";

const E = [0.22, 1, 0.36, 1] as [number, number, number, number];

function Stat({ end, suffix, label, sub, delay }: { end: number; suffix: string; label: string; sub: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const id = window.setTimeout(() => {
      requestAnimationFrame(function step(ts) {
        if (!start) start = ts;
        const p = Math.min((ts - start) / 2000, 1);
        setCount(Math.floor((1 - Math.pow(1 - p, 3)) * end));
        if (p < 1) requestAnimationFrame(step);
      });
    }, delay * 1000);
    return () => window.clearTimeout(id);
  }, [inView, end, delay]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay, ease: E }} className="dr-card" style={{ padding: "20px 16px", textAlign: "center" }}>
      <div className="dr-text-green" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem,6vw,2.4rem)", lineHeight: 1 }}>
        {count.toLocaleString("pt-BR")}{suffix}
      </div>
      <div style={{ color: "#fff", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 12, marginTop: 6 }}>{label}</div>
      <div style={{ color: "var(--dr-text-dim)", fontSize: 10, marginTop: 2 }}>{sub}</div>
    </motion.div>
  );
}

const stats = [
  { end: 13,   suffix: "+", label: "Anos de experiência",  sub: "Desde 2011" },
  { end: 8,    suffix: "+", label: "Linhas de produto",    sub: "Portfólio completo" },
  { end: 1000, suffix: "+", label: "Produtores atendidos", sub: "Rio Verde e região" },
  { end: 100,  suffix: "%", label: "Comprometimento",      sub: "Com cada cliente" },
];

const points = [
  "Portfólio completo de insumos certificados",
  "Equipe técnica especializada no cerrado",
  "Atendimento personalizado ao produtor",
  "Logística ágil no sudoeste de Goiás",
];

export default function AboutSection() {
  const isMobile = useMobile();

  return (
    <section id="sobre" style={{ position: "relative", padding: isMobile ? "72px 0" : "96px 0", background: "var(--dr-bg)", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, right: 0, width: 600, height: 600, borderRadius: "50%", background: "rgba(34,163,77,0.03)", filter: "blur(140px)", pointerEvents: "none" }} />
      <div className="dr-container">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease: E }} style={{ textAlign: "center", marginBottom: isMobile ? 36 : 56 }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}><div className="dr-badge">Nossa História</div></div>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, color: "#fff", fontSize: isMobile ? "clamp(1.8rem,8vw,2.4rem)" : "clamp(2rem,5vw,3.2rem)", lineHeight: 1.1 }}>
            Sobre a <span className="dr-text-green">Delta Rio</span>
          </h2>
          <div className="dr-divider" style={{ marginTop: 16 }} />
        </motion.div>

        {/* Stats — always 2x2 */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10, marginBottom: isMobile ? 48 : 72 }}>
          {stats.map((s, i) => <Stat key={i} {...s} delay={i * 0.08} />)}
        </div>

        {/* Content — stack on mobile */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 40 : 56, alignItems: "center" }}>
          {/* Image */}
          <motion.div initial={{ opacity: 0, x: isMobile ? 0 : -40, y: isMobile ? 20 : 0 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.9, ease: E }} style={{ position: "relative" }}>
            <div style={{ position: "relative", borderRadius: isMobile ? 20 : 24, overflow: "hidden", aspectRatio: isMobile ? "16/10" : "4/3" }}>
              <Image src="/about.png" alt="Equipe Delta Rio" fill sizes={isMobile ? "100vw" : "50vw"} style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(6,10,7,0.5) 0%, transparent 60%)" }} />
            </div>
            {/* Float badges — hide on mobile to avoid overflow */}
            {!isMobile && <>
              <motion.div animate={{ y: [0,-8,0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="dr-glass" style={{ position: "absolute", bottom: -12, left: -12, borderRadius: 16, padding: "12px 16px", display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg,#1a7a3a,#22a34d)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><MapPin size={16} color="#fff" /></div>
                <div>
                  <div style={{ color: "#fff", fontWeight: 600, fontSize: 13, lineHeight: 1 }}>Rio Verde — GO</div>
                  <div style={{ color: "var(--dr-text-dim)", fontSize: 10, marginTop: 2 }}>Sudoeste Goiano</div>
                </div>
              </motion.div>
              <motion.div animate={{ y: [0,8,0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="dr-glass-gold" style={{ position: "absolute", top: -12, right: -12, borderRadius: 16, padding: "10px 14px", display: "flex", alignItems: "center", gap: 8 }}>
                <Calendar size={15} style={{ color: "var(--dr-gold)", flexShrink: 0 }} />
                <span style={{ color: "var(--dr-gold-light)", fontSize: 12, fontWeight: 600 }}>Fundada em 2011</span>
              </motion.div>
            </>}
          </motion.div>

          {/* Text */}
          <motion.div initial={{ opacity: 0, x: isMobile ? 0 : 40, y: isMobile ? 0 : 0 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.9, ease: E }} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, color: "#fff", fontSize: isMobile ? "clamp(1.4rem,6vw,1.8rem)" : "clamp(1.4rem,3vw,2rem)", lineHeight: 1.25 }}>
              Construída com <span className="dr-text-green">paixão pelo campo</span>
            </h3>
            <p style={{ color: "var(--dr-text-muted)", lineHeight: 1.75, fontSize: isMobile ? 14 : 15 }}>
              A <strong style={{ color: "#fff" }}>Delta Rio</strong> nasceu em 14 de julho de 2011 em Rio Verde — GO, com o propósito de transformar o campo com insumos de qualidade e atendimento consultivo especializado.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {points.map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <CheckCircle size={16} style={{ color: "var(--dr-green)", flexShrink: 0 }} />
                  <span style={{ color: "var(--dr-text-muted)", fontSize: 14 }}>{item}</span>
                </li>
              ))}
            </ul>
            {/* Pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              <div className="dr-glass" style={{ borderRadius: 10, padding: "8px 14px" }}>
                <div style={{ color: "var(--dr-text-dim)", fontSize: 9, marginBottom: 2, fontFamily: "'Space Grotesk'" }}>CNPJ</div>
                <div style={{ color: "#fff", fontFamily: "monospace", fontSize: 12, fontWeight: 600 }}>13.978.765/0001-42</div>
              </div>
              <div className="dr-glass-gold" style={{ borderRadius: 10, padding: "8px 14px" }}>
                <div style={{ color: "var(--dr-text-dim)", fontSize: 9, marginBottom: 2, fontFamily: "'Space Grotesk'" }}>Fundação</div>
                <div style={{ color: "var(--dr-gold-light)", fontFamily: "monospace", fontSize: 12, fontWeight: 600 }}>14/07/2011</div>
              </div>
            </div>
            <Link href="/institucional" className="dr-btn dr-btn-outline" style={{ alignSelf: isMobile ? "stretch" : "flex-start", padding: isMobile ? "14px 20px" : "12px 22px", borderRadius: 12, fontSize: 14, gap: 8, justifyContent: "center" }}>
              Ver nossa história <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
