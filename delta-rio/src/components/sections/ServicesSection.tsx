"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sprout, FlaskConical, Leaf, Mountain, Wheat, BookOpen, Pill, Crown, ArrowRight } from "lucide-react";
import { useMobile } from "@/hooks/useMobile";

const E = [0.22, 1, 0.36, 1] as [number, number, number, number];

const services = [
  { icon: Sprout,       title: "Defensivos Agrícolas",  accent: "#22a34d", tag: "Proteção",    desc: "Herbicidas, fungicidas, inseticidas e acaricidas das principais marcas." },
  { icon: FlaskConical, title: "Fertilizantes",          accent: "#22a34d", tag: "Nutrição",    desc: "Fertilizantes foliares e de solo para máxima nutrição nas fases produtivas." },
  { icon: Leaf,         title: "Adubos",                 accent: "#c9a84c", tag: "Solo",        desc: "Adubos simples e compostos, orgânicos e minerais, para suprimento nutricional ideal." },
  { icon: Mountain,     title: "Corretivos do Solo",     accent: "#c9a84c", tag: "Correção",    desc: "Calcário, gesso agrícola e calcário dolomítico para correção da acidez." },
  { icon: Wheat,        title: "Sementes",               accent: "#22a34d", tag: "Genética",    desc: "Sementes de alta tecnologia de soja, milho, algodão e forrageiras." },
  { icon: BookOpen,     title: "Consultoria Agronômica", accent: "#22a34d", tag: "Expertise",   desc: "Suporte técnico personalizado e planejamento de safra com acompanhamento contínuo." },
  { icon: Pill,         title: "Produtos Veterinários",  accent: "#c9a84c", tag: "Saúde",       desc: "Medicamentos, vacinas e suplementos veterinários para seu rebanho." },
  { icon: Crown,        title: "Soluções Pecuária",      accent: "#c9a84c", tag: "Pecuária",    desc: "Sal mineral, suplementos e nutrição animal para máximo desempenho do gado." },
];

export default function ServicesSection() {
  const isMobile = useMobile();

  return (
    <section id="servicos" style={{ position: "relative", padding: isMobile ? "72px 0" : "96px 0", background: "var(--dr-bg-surface)", overflow: "hidden" }}>
      <div className="dr-dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.14 }} />
      <div className="dr-container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease: E }} style={{ textAlign: "center", marginBottom: isMobile ? 36 : 56 }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}><div className="dr-badge">Portfólio Completo</div></div>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, color: "#fff", fontSize: isMobile ? "clamp(1.8rem,8vw,2.4rem)" : "clamp(2rem,5vw,3.2rem)", lineHeight: 1.1 }}>
            Nossas <span className="dr-text-green">Soluções</span>
          </h2>
          <p style={{ color: "var(--dr-text-muted)", maxWidth: 520, margin: "12px auto 0", lineHeight: 1.7, fontSize: isMobile ? 14 : 15 }}>
            Do plantio à colheita — tudo que o produtor moderno precisa.
          </p>
          <div className="dr-divider" style={{ marginTop: 20 }} />
        </motion.div>

        {/* Grid — 1 col mobile, 2 col tablet, 4 col desktop */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(240px, 1fr))",
          gap: isMobile ? 12 : 18,
        }}>
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: isMobile ? 0 : i * 0.06, ease: E }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                style={{
                  background: "var(--dr-bg-card)",
                  border: `1px solid rgba(34,163,77,0.15)`,
                  borderRadius: isMobile ? 16 : 18,
                  padding: isMobile ? "18px 20px" : "28px",
                  /* Horizontal layout on mobile */
                  display: isMobile ? "flex" : "flex",
                  flexDirection: isMobile ? "row" : "column",
                  gap: isMobile ? 16 : 0,
                  alignItems: isMobile ? "center" : "flex-start",
                }}
              >
                {/* Icon */}
                <div style={{
                  width: isMobile ? 44 : 52,
                  height: isMobile ? 44 : 52,
                  borderRadius: isMobile ? 12 : 14,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                  background: `${svc.accent}14`,
                  border: `1px solid ${svc.accent}24`,
                  color: svc.accent,
                  marginBottom: isMobile ? 0 : 16,
                }}>
                  <Icon size={isMobile ? 20 : 24} />
                </div>
                {/* Text */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginBottom: isMobile ? 4 : 8 }}>
                    <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, color: "#fff", fontSize: isMobile ? 15 : 17, lineHeight: 1.3 }}>{svc.title}</h3>
                    <div style={{ padding: "2px 8px", borderRadius: 999, fontSize: 9, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", background: `${svc.accent}14`, color: svc.accent, border: `1px solid ${svc.accent}24`, flexShrink: 0 }}>{svc.tag}</div>
                  </div>
                  {!isMobile && <p style={{ color: "var(--dr-text-muted)", fontSize: 13.5, lineHeight: 1.65 }}>{svc.desc}</p>}
                </div>
                {isMobile && <ArrowRight size={16} style={{ color: svc.accent, flexShrink: 0 }} />}
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: E }} style={{ textAlign: "center", marginTop: isMobile ? 36 : 56 }}>
          <Link href="/contato" className="dr-btn dr-btn-primary" style={{ padding: isMobile ? "16px 28px" : "16px 36px", borderRadius: 16, fontSize: 16, gap: 10, width: isMobile ? "100%" : "auto", justifyContent: "center" }}>
            Falar com Especialista <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
