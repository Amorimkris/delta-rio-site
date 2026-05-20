"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sprout, FlaskConical, Leaf, Mountain, Wheat, BookOpen, Pill, Crown, ArrowRight } from "lucide-react";

const E = [0.22, 1, 0.36, 1] as [number, number, number, number];

const services = [
  { icon: Sprout,      title: "Defensivos Agrícolas", accent: "#22a34d", tag: "Proteção",   desc: "Herbicidas, fungicidas, inseticidas e acaricidas das principais marcas. Proteção eficiente para sua lavoura." },
  { icon: FlaskConical,title: "Fertilizantes",        accent: "#22a34d", tag: "Nutrição",   desc: "Fertilizantes foliares e de solo para maximizar a nutrição nas fases do ciclo produtivo." },
  { icon: Leaf,        title: "Adubos",               accent: "#c9a84c", tag: "Solo",       desc: "Adubos simples e compostos, orgânicos e minerais, para suprimento nutricional ideal da cultura." },
  { icon: Mountain,    title: "Corretivos do Solo",   accent: "#c9a84c", tag: "Correção",   desc: "Calcário agrícola, gesso e calcário dolomítico para correção da acidez e melhoria do solo." },
  { icon: Wheat,       title: "Sementes",             accent: "#22a34d", tag: "Genética",   desc: "Sementes de alta tecnologia de soja, milho, algodão e forrageiras com garantia de desempenho." },
  { icon: BookOpen,    title: "Consultoria Agro",     accent: "#22a34d", tag: "Expertise",  desc: "Suporte técnico personalizado e planejamento completo de safra com acompanhamento contínuo." },
  { icon: Pill,        title: "Produtos Veterinários",accent: "#c9a84c", tag: "Saúde",      desc: "Medicamentos, vacinas e suplementos veterinários para saúde e desempenho do seu rebanho." },
  { icon: Crown,       title: "Soluções Pecuária",    accent: "#c9a84c", tag: "Pecuária",   desc: "Sal mineral, suplementos e nutrição animal para otimizar a performance do seu gado." },
];

export default function ServicesSection() {
  return (
    <section id="servicos" style={{ position: "relative", padding: "96px 0", background: "var(--dr-bg-surface)", overflow: "hidden" }}>
      <div className="dr-dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.14 }} />
      <div style={{ position: "absolute", top: "30%", left: 0, width: 500, height: 500, borderRadius: "50%", background: "rgba(34,163,77,0.025)", filter: "blur(140px)", pointerEvents: "none" }} />

      <div className="dr-container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: E }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
            <div className="dr-badge">Portfólio Completo</div>
          </div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, color: "#fff", fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.1 }}>
            Nossas <span className="dr-text-green">Soluções</span>
          </h2>
          <p style={{ color: "var(--dr-text-muted)", maxWidth: 560, margin: "16px auto 0", lineHeight: 1.7, fontSize: 15 }}>
            Do plantio à colheita — tudo que o produtor moderno precisa para uma safra de alta performance.
          </p>
          <div className="dr-divider" style={{ marginTop: 24 }} />
        </motion.div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 18 }}>
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: E }}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: E } }}
                style={{
                  background: "var(--dr-bg-card)",
                  border: `1px solid rgba(34,163,77,0.15)`,
                  borderRadius: 18,
                  padding: "28px",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "default",
                  willChange: "transform",
                }}
              >
                {/* Tag */}
                <div style={{ display: "inline-block", marginBottom: 18, padding: "4px 12px", borderRadius: 999, fontSize: 10, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", background: `${svc.accent}14`, color: svc.accent, border: `1px solid ${svc.accent}28`, width: "fit-content" }}>
                  {svc.tag}
                </div>
                {/* Icon */}
                <div style={{ width: 52, height: 52, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18, flexShrink: 0, background: `${svc.accent}14`, border: `1px solid ${svc.accent}24`, color: svc.accent }}>
                  <Icon size={24} />
                </div>
                {/* Text */}
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "#fff", fontSize: 18, marginBottom: 10, lineHeight: 1.3 }}>{svc.title}</h3>
                <p style={{ color: "var(--dr-text-muted)", fontSize: 14, lineHeight: 1.65, flex: 1 }}>{svc.desc}</p>
                {/* Arrow */}
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 20, color: svc.accent, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 13 }}>
                  Saiba mais <ArrowRight size={14} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: E }}
          style={{ textAlign: "center", marginTop: 56 }}
        >
          <p style={{ color: "var(--dr-text-dim)", marginBottom: 20, fontSize: 14 }}>Precisa de uma solução específica para sua fazenda?</p>
          <Link href="/contato" className="dr-btn dr-btn-primary" style={{ padding: "16px 36px", borderRadius: 16, fontSize: 16, gap: 10 }}>
            Falar com Especialista <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
