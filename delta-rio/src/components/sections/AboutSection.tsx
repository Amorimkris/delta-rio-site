"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, MapPin, Calendar, ArrowRight } from "lucide-react";

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
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: E }}
      className="dr-card"
      style={{ padding: "24px", textAlign: "center" }}
    >
      <div className="dr-text-green" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", lineHeight: 1 }}>
        {count.toLocaleString("pt-BR")}{suffix}
      </div>
      <div style={{ color: "#fff", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 13, marginTop: 6 }}>{label}</div>
      <div style={{ color: "var(--dr-text-dim)", fontSize: 11, marginTop: 3 }}>{sub}</div>
    </motion.div>
  );
}

const stats = [
  { end: 13,   suffix: "+", label: "Anos de experiência",   sub: "Desde julho de 2011" },
  { end: 8,    suffix: "+", label: "Linhas de produto",     sub: "Portfólio completo" },
  { end: 1000, suffix: "+", label: "Produtores atendidos",  sub: "Rio Verde e região" },
  { end: 100,  suffix: "%", label: "Comprometimento",       sub: "Com cada cliente" },
];

const points = [
  "Portfólio completo de insumos agrícolas certificados",
  "Equipe técnica com expertise no cerrado goiano",
  "Atendimento personalizado e próximo ao produtor",
  "Logística ágil no sudoeste de Goiás",
];

export default function AboutSection() {
  return (
    <section id="sobre" style={{ position: "relative", padding: "96px 0", background: "var(--dr-bg)", overflow: "hidden" }}>
      {/* Ambient glows */}
      <div style={{ position: "absolute", top: 0, right: 0, width: 600, height: 600, borderRadius: "50%", background: "rgba(34,163,77,0.03)", filter: "blur(140px)", pointerEvents: "none" }} />

      <div className="dr-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: E }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
            <div className="dr-badge">Nossa História</div>
          </div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, color: "#fff", fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.1 }}>
            Sobre a <span className="dr-text-green">Delta Rio</span>
          </h2>
          <div className="dr-divider" style={{ marginTop: 20 }} />
        </motion.div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, marginBottom: 80 }} className="lg:grid-cols-4">
          {stats.map((s, i) => <Stat key={i} {...s} delay={i * 0.1} />)}
        </div>

        {/* Content */}
        <div style={{ display: "grid", gap: 56, alignItems: "center" }} className="lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: E }}
            style={{ position: "relative" }}
          >
            <div style={{ position: "relative", borderRadius: 24, overflow: "hidden", aspectRatio: "4/3" }}>
              <Image src="/about.png" alt="Equipe Delta Rio" fill sizes="(max-width: 1024px) 100vw, 50vw" style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(6,10,7,0.5) 0%, transparent 60%)" }} />
            </div>
            {/* Float badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="dr-glass"
              style={{ position: "absolute", bottom: -12, left: -12, borderRadius: 16, padding: "12px 16px", display: "flex", alignItems: "center", gap: 12, boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}
            >
              <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg,#1a7a3a,#22a34d)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <MapPin size={18} color="#fff" />
              </div>
              <div>
                <div style={{ color: "#fff", fontWeight: 600, fontSize: 13, lineHeight: 1 }}>Rio Verde — GO</div>
                <div style={{ color: "var(--dr-text-dim)", fontSize: 11, marginTop: 2 }}>Sudoeste Goiano</div>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="dr-glass-gold"
              style={{ position: "absolute", top: -12, right: -12, borderRadius: 16, padding: "10px 16px", display: "flex", alignItems: "center", gap: 8, boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}
            >
              <Calendar size={16} style={{ color: "var(--dr-gold)", flexShrink: 0 }} />
              <span style={{ color: "var(--dr-gold-light)", fontSize: 13, fontWeight: 600 }}>Fundada em 2011</span>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: E }}
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
          >
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, color: "#fff", fontSize: "clamp(1.4rem, 3vw, 2rem)", lineHeight: 1.3 }}>
              Uma empresa construída com{" "}
              <span className="dr-text-green">paixão pelo campo</span>
            </h3>
            <p style={{ color: "var(--dr-text-muted)", lineHeight: 1.75, fontSize: 15 }}>
              A <strong style={{ color: "#fff" }}>Delta Rio Produtos Agrícolas LTDA</strong> nasceu em
              14 de julho de 2011, em Rio Verde — GO, com o propósito de transformar o campo
              com insumos de qualidade e atendimento consultivo especializado.
            </p>
            <p style={{ color: "var(--dr-text-muted)", lineHeight: 1.75, fontSize: 15 }}>
              Atuamos no comércio de defensivos agrícolas, fertilizantes, adubos, corretivos
              do solo, sementes, produtos veterinários e consultoria agronômica.
            </p>
            <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {points.map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <CheckCircle size={18} style={{ color: "var(--dr-green)", flexShrink: 0 }} />
                  <span style={{ color: "var(--dr-text-muted)", fontSize: 14 }}>{item}</span>
                </li>
              ))}
            </ul>
            {/* Pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              <div className="dr-glass" style={{ borderRadius: 12, padding: "10px 16px" }}>
                <div style={{ color: "var(--dr-text-dim)", fontSize: 10, marginBottom: 2 }}>CNPJ</div>
                <div style={{ color: "#fff", fontFamily: "monospace", fontSize: 13, fontWeight: 600 }}>13.978.765/0001-42</div>
              </div>
              <div className="dr-glass-gold" style={{ borderRadius: 12, padding: "10px 16px" }}>
                <div style={{ color: "var(--dr-text-dim)", fontSize: 10, marginBottom: 2 }}>Fundação</div>
                <div style={{ color: "var(--dr-gold-light)", fontFamily: "monospace", fontSize: 13, fontWeight: 600 }}>14/07/2011</div>
              </div>
            </div>
            <Link href="/institucional" className="dr-btn dr-btn-outline" style={{ alignSelf: "flex-start", padding: "12px 24px", borderRadius: 12, fontSize: 14, gap: 8 }}>
              Ver nossa história completa <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
