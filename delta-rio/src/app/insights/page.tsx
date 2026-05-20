"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PhoneFloat from "@/components/ui/WhatsAppFloat";
import { ArrowRight, Clock, BookOpen } from "lucide-react";

const E = [0.22, 1, 0.36, 1] as [number, number, number, number];

const articles = [
  { img: "/hero.png",       cat: "Tecnologia",  date: "15 Mai 2025", time: "6 min", tag: "Inovação",     title: "Tecnologia de Precisão na Lavoura de Soja",              excerpt: "Como drones, sensores e análise de dados estão transformando a produtividade das lavouras de soja no cerrado goiano." },
  { img: "/harvest.png",    cat: "Manejo",      date: "08 Mai 2025", time: "5 min", tag: "Defensivos",   title: "Manejo Integrado de Pragas em 2025",                     excerpt: "Estratégias eficazes para o controle de pragas com menor impacto ambiental e maior eficiência nos tratamentos." },
  { img: "/products.png",   cat: "Nutrição",    date: "02 Mai 2025", time: "4 min", tag: "Fertilizantes",title: "Adubação Foliar: Quando e Como Aplicar",                  excerpt: "Guia completo sobre adubação foliar para maximizar a absorção de nutrientes e o desempenho da lavoura." },
  { img: "/aerial.png",     cat: "Solo",        date: "25 Abr 2025", time: "7 min", tag: "Corretivos",   title: "Correção de Solo para Maximizar Produtividade",           excerpt: "A importância da análise e correção do solo para garantir as condições ideais para cada cultura no cerrado." },
  { img: "/consultant.png", cat: "Sementes",    date: "18 Abr 2025", time: "5 min", tag: "Sementes",     title: "Novas Tecnologias em Sementes de Alto Desempenho",        excerpt: "Cultivares de soja e milho com maior potencial genético para a região do sudoeste goiano em 2025." },
  { img: "/about.png",      cat: "Consultoria", date: "10 Abr 2025", time: "4 min", tag: "Expertise",    title: "Consultoria Agronômica: Investimento que se Paga",        excerpt: "Como o acompanhamento técnico especializado reduz custos, minimiza riscos e aumenta a rentabilidade da safra." },
];

const TAGS = ["Todos", "Inovação", "Defensivos", "Fertilizantes", "Corretivos", "Sementes", "Expertise"];

export default function InsightsPage() {
  const [activeTag, setActiveTag] = useState("Todos");
  const [email, setEmail] = useState("");
  const [subbed, setSubbed] = useState(false);

  const filtered = activeTag === "Todos" ? articles : articles.filter(a => a.tag === activeTag);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ position: "relative", minHeight: "50vh", display: "flex", alignItems: "flex-end", paddingTop: 96, paddingBottom: 56, overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
            <Image src="/insights-bg.png" alt="Agro Insights" fill sizes="100vw" style={{ objectFit: "cover" }} priority />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(6,10,7,0.8), rgba(6,10,7,0.6) 40%, rgba(6,10,7,0.98))" }} />
          </div>
          <div className="dr-container" style={{ position: "relative", zIndex: 1 }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: E }}>
              <div style={{ display: "flex", marginBottom: 20 }}>
                <div className="dr-badge" style={{ display: "flex", alignItems: "center", gap: 8 }}><BookOpen size={13} /> Conhecimento do Campo</div>
              </div>
              <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, color: "#fff", fontSize: "clamp(2.4rem, 6vw, 4.5rem)", lineHeight: 1.05, marginBottom: 16 }}>
                Agro <span className="dr-text-green">Insights</span>
              </h1>
              <p style={{ color: "var(--dr-text-muted)", maxWidth: 520, lineHeight: 1.75, fontSize: "clamp(1rem, 2vw, 1.1rem)" }}>
                Conhecimento e tecnologia para o produtor rural moderno. Artigos, tendências e novidades do agronegócio.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section style={{ padding: "16px 0 24px", background: "var(--dr-bg-surface)", borderBottom: "1px solid rgba(34,163,77,0.1)" }}>
          <div className="dr-container" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {TAGS.map(tag => (
              <button key={tag} onClick={() => setActiveTag(tag)} style={{ padding: "7px 18px", borderRadius: 999, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 12, cursor: "pointer", transition: "all 0.2s", background: activeTag === tag ? "linear-gradient(135deg,#1a7a3a,#22a34d)" : "rgba(34,163,77,0.06)", color: activeTag === tag ? "#fff" : "var(--dr-text-muted)", border: activeTag === tag ? "1px solid rgba(34,163,77,0.4)" : "1px solid rgba(34,163,77,0.18)" }}>
                {tag}
              </button>
            ))}
          </div>
        </section>

        {/* Articles */}
        <section style={{ padding: "48px 0 80px", background: "var(--dr-bg-surface)" }}>
          <div className="dr-container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: 22 }}>
              {filtered.map((a, i) => (
                <motion.article
                  key={a.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: E }}
                  style={{ background: "var(--dr-bg-card)", border: "1px solid rgba(34,163,77,0.13)", borderRadius: 18, overflow: "hidden", cursor: "pointer", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
                >
                  {/* Image */}
                  <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
                    <Image src={a.img} alt={a.title} fill sizes="(max-width: 640px) 100vw, 33vw" style={{ objectFit: "cover", transition: "transform 0.6s ease" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(16,23,16,0.8), transparent 60%)" }} />
                    <div style={{ position: "absolute", top: 12, left: 12, padding: "3px 10px", borderRadius: 999, background: "rgba(34,163,77,0.2)", border: "1px solid rgba(34,163,77,0.3)", color: "var(--dr-green)", fontSize: 10, fontWeight: 700, fontFamily: "'Space Grotesk'", backdropFilter: "blur(8px)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      {a.cat}
                    </div>
                  </div>
                  {/* Content */}
                  <div style={{ padding: "22px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 4, color: "var(--dr-text-dim)", fontSize: 12, fontFamily: "'Space Grotesk'" }}><Clock size={12} /> {a.time}</span>
                      <span style={{ color: "var(--dr-text-dim)", fontSize: 12, fontFamily: "'Space Grotesk'" }}>{a.date}</span>
                    </div>
                    <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "#fff", fontSize: 17, lineHeight: 1.35, marginBottom: 10 }}>{a.title}</h3>
                    <p style={{ color: "var(--dr-text-muted)", fontSize: 13.5, lineHeight: 1.65, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{a.excerpt}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 18, color: "var(--dr-green)", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 13 }}>
                      Ler artigo <ArrowRight size={14} />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
            {filtered.length === 0 && (
              <div style={{ textAlign: "center", padding: "80px 0", color: "var(--dr-text-dim)", fontFamily: "'Space Grotesk'" }}>Nenhum artigo encontrado para esta categoria.</div>
            )}
          </div>
        </section>

        {/* Newsletter */}
        <section style={{ padding: "64px 0", background: "var(--dr-bg)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(34,163,77,0.05), transparent 65%)", pointerEvents: "none" }} />
          <div className="dr-container" style={{ position: "relative", zIndex: 1, maxWidth: 560, textAlign: "center" }}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: E }} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
              <div className="dr-badge">Newsletter Agro</div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, color: "#fff", fontSize: "clamp(1.8rem, 4vw, 2.4rem)", lineHeight: 1.15 }}>
                Fique por dentro das{" "}
                <span className="dr-text-green">novidades do campo</span>
              </h2>
              <p style={{ color: "var(--dr-text-muted)", lineHeight: 1.7, fontSize: 15 }}>
                Receba artigos, dicas e tendências do agronegócio diretamente no seu e-mail.
              </p>
              {subbed ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="dr-glass" style={{ borderRadius: 16, padding: "18px 28px", color: "var(--dr-green)", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, width: "100%" }}>
                  ✓ Inscrição realizada! Boas-vindas ao Agro Insights.
                </motion.div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSubbed(true); }} style={{ display: "flex", gap: 10, width: "100%", flexWrap: "wrap" }}>
                  <input type="email" required className="dr-input" placeholder="seu@email.com" value={email} onChange={e => setEmail(e.target.value)} style={{ flex: 1, minWidth: 200 }} />
                  <button type="submit" className="dr-btn dr-btn-primary" style={{ padding: "14px 24px", borderRadius: 12, fontSize: 14, flexShrink: 0 }}>
                    Inscrever-se
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <PhoneFloat />
    </>
  );
}
