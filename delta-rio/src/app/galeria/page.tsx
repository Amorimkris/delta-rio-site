"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PhoneFloat from "@/components/ui/WhatsAppFloat";
import { X, ZoomIn, ChevronLeft, ChevronRight, Filter } from "lucide-react";

const E = [0.22, 1, 0.36, 1] as [number, number, number, number];

const InstaSVG = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

type Cat = "Todos" | "Lavoura" | "Produtos" | "Equipe" | "Estrutura";
const CATS: Cat[] = ["Todos", "Lavoura", "Produtos", "Equipe", "Estrutura"];

const allImages = [
  { src: "/hero.png",       alt: "Lavoura de soja",      caption: "Campos de soja — Rio Verde, GO",        cat: "Lavoura"   as Cat, col: 2, row: 2 },
  { src: "/products.png",   alt: "Produtos Delta Rio",   caption: "Portfólio de insumos",                   cat: "Produtos"  as Cat, col: 1, row: 1 },
  { src: "/consultant.png", alt: "Consultoria agronômica",caption:"Atendimento técnico especializado",      cat: "Equipe"    as Cat, col: 1, row: 1 },
  { src: "/harvest.png",    alt: "Colheita de soja",     caption: "Safra produtiva com suporte Delta Rio", cat: "Lavoura"   as Cat, col: 2, row: 1 },
  { src: "/aerial.png",     alt: "Vista aérea",          caption: "Região sudoeste goiano",                cat: "Estrutura" as Cat, col: 1, row: 1 },
  { src: "/about.png",      alt: "Equipe Delta Rio",     caption: "Nossa equipe de especialistas",         cat: "Equipe"    as Cat, col: 1, row: 1 },
];

export default function GaleriaPage() {
  const [active, setActive] = useState<Cat>("Todos");
  const [sel, setSel] = useState<number | null>(null);

  const filtered = active === "Todos" ? allImages : allImages.filter(img => img.cat === active);
  const prev = () => setSel(i => i === null ? null : (i - 1 + filtered.length) % filtered.length);
  const next = () => setSel(i => i === null ? null : (i + 1) % filtered.length);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ position: "relative", paddingTop: 120, paddingBottom: 56, background: "var(--dr-bg)", overflow: "hidden" }}>
          <div className="dr-dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.18 }} />
          <div className="dr-container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: E }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
                <div className="dr-badge" style={{ display: "flex", alignItems: "center", gap: 8 }}><InstaSVG /> @deltariorioverde</div>
              </div>
              <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, color: "#fff", fontSize: "clamp(2.4rem, 6vw, 4.5rem)", lineHeight: 1.05, marginBottom: 16 }}>
                Nossa <span className="dr-text-green">Galeria</span>
              </h1>
              <p style={{ color: "var(--dr-text-muted)", maxWidth: 500, margin: "0 auto", lineHeight: 1.75, fontSize: "clamp(1rem, 2vw, 1.1rem)" }}>
                Uma janela para o campo — lavoura, equipe, produtos e estrutura da Delta Rio.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section style={{ padding: "20px 0 32px", background: "var(--dr-bg)" }}>
          <div className="dr-container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
            {CATS.map(cat => (
              <button key={cat} onClick={() => setActive(cat)} style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 20px", borderRadius: 999, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 13, cursor: "pointer", transition: "all 0.2s ease", background: active === cat ? "linear-gradient(135deg,#1a7a3a,#22a34d)" : "rgba(34,163,77,0.06)", color: active === cat ? "#fff" : "var(--dr-text-muted)", border: active === cat ? "1px solid rgba(34,163,77,0.4)" : "1px solid rgba(34,163,77,0.18)", boxShadow: active === cat ? "0 0 16px rgba(34,163,77,0.3)" : "none" }}>
                {cat === "Todos" && <Filter size={13} />} {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Grid */}
        <section style={{ padding: "0 0 80px", background: "var(--dr-bg)" }}>
          <div className="dr-container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridAutoRows: "200px", gap: 12 }}>
              <AnimatePresence>
                {filtered.map((img, i) => (
                  <motion.div
                    key={img.src + img.cat}
                    layout
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: E }}
                    onClick={() => setSel(i)}
                    id={`gallery-${i}`}
                    style={{ position: "relative", borderRadius: 14, overflow: "hidden", cursor: "pointer", gridColumn: `span ${active === "Todos" ? img.col : 1}`, gridRow: `span ${active === "Todos" ? img.row : 1}` }}
                  >
                    <Image src={img.src} alt={img.alt} fill sizes="25vw" style={{ objectFit: "cover", transition: "transform 0.6s ease" }} />
                    <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(6,10,7,0.92), transparent 60%)", display: "flex", alignItems: "flex-end", justifyContent: "space-between", padding: 16, gap: 8 }}>
                      <p style={{ color: "#fff", fontSize: 12.5, fontWeight: 500, fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.3 }}>{img.caption}</p>
                      <div style={{ width: 30, height: 30, borderRadius: "50%", background: "rgba(12,18,12,0.8)", border: "1px solid rgba(34,163,77,0.5)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><ZoomIn size={13} style={{ color: "var(--dr-green)" }} /></div>
                    </motion.div>
                    <div style={{ position: "absolute", top: 10, left: 10, padding: "3px 10px", borderRadius: 999, background: "rgba(34,163,77,0.2)", border: "1px solid rgba(34,163,77,0.3)", color: "var(--dr-green)", fontSize: 10, fontWeight: 700, fontFamily: "'Space Grotesk'", backdropFilter: "blur(8px)" }}>{img.cat}</div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            {/* Instagram CTA */}
            <div style={{ textAlign: "center", marginTop: 36 }}>
              <a href="https://www.instagram.com/deltariorioverde/" target="_blank" rel="noopener noreferrer" id="gallery-instagram" className="dr-btn dr-btn-ghost" style={{ padding: "12px 28px", borderRadius: 999, fontSize: 14, gap: 10 }}>
                <InstaSVG /> Mais fotos no Instagram @deltariorioverde
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {sel !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} onClick={() => setSel(null)} style={{ position: "fixed", inset: 0, zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
            <div style={{ position: "absolute", inset: 0, background: "rgba(2,5,3,0.97)", backdropFilter: "blur(24px)" }} />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ duration: 0.3, ease: E }} onClick={e => e.stopPropagation()} style={{ position: "relative", maxWidth: 900, width: "100%", borderRadius: 24, overflow: "hidden", boxShadow: "0 40px 120px rgba(0,0,0,0.8)" }}>
              <div style={{ position: "relative", aspectRatio: "16/9" }}>
                <Image src={filtered[sel].src} alt={filtered[sel].alt} fill sizes="90vw" style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(6,10,7,0.9), transparent)", padding: "24px" }}>
                  <p style={{ color: "#fff", fontWeight: 700, fontFamily: "'Syne', sans-serif", fontSize: 18 }}>{filtered[sel].caption}</p>
                  <p style={{ color: "var(--dr-text-dim)", fontSize: 13, marginTop: 4, fontFamily: "'Space Grotesk'" }}>Delta Rio · Rio Verde — GO</p>
                </div>
              </div>
              <button onClick={() => setSel(null)} aria-label="Fechar" style={{ position: "absolute", top: 14, right: 14, width: 38, height: 38, borderRadius: "50%", background: "rgba(12,18,12,0.85)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", cursor: "pointer" }}><X size={17} /></button>
              <button onClick={prev} aria-label="Anterior" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", width: 38, height: 38, borderRadius: "50%", background: "rgba(12,18,12,0.85)", border: "1px solid rgba(34,163,77,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--dr-green)", cursor: "pointer" }}><ChevronLeft size={20} /></button>
              <button onClick={next} aria-label="Próximo" style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", width: 38, height: 38, borderRadius: "50%", background: "rgba(12,18,12,0.85)", border: "1px solid rgba(34,163,77,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--dr-green)", cursor: "pointer" }}><ChevronRight size={20} /></button>
              <div style={{ position: "absolute", top: 14, left: 14, background: "rgba(12,18,12,0.85)", borderRadius: 999, padding: "4px 12px", fontSize: 12, color: "var(--dr-text-muted)", fontFamily: "'Space Grotesk'" }}>{sel + 1} / {filtered.length}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <PhoneFloat />
    </>
  );
}
