"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

const E = [0.22, 1, 0.36, 1] as [number, number, number, number];

const InstaSVG = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

// Span classes for the masonry layout (only used here, safe to use inline)
const images = [
  { src: "/hero.png",       alt: "Lavoura de soja Delta Rio",        caption: "Campos de soja — Rio Verde, GO",           colSpan: 2, rowSpan: 2 },
  { src: "/products.png",   alt: "Produtos Delta Rio",               caption: "Portfólio de insumos",                      colSpan: 1, rowSpan: 1 },
  { src: "/consultant.png", alt: "Consultoria agronômica",           caption: "Atendimento técnico especializado",          colSpan: 1, rowSpan: 1 },
  { src: "/harvest.png",    alt: "Colheita de soja",                  caption: "Safra produtiva com suporte Delta Rio",     colSpan: 2, rowSpan: 1 },
  { src: "/aerial.png",     alt: "Vista aérea das lavouras",          caption: "Região sudoeste goiano",                   colSpan: 1, rowSpan: 1 },
  { src: "/about.png",      alt: "Equipe Delta Rio",                  caption: "Nossa equipe de especialistas",             colSpan: 1, rowSpan: 1 },
];

export default function GallerySection() {
  const [selected, setSelected] = useState<number | null>(null);

  const prev = () => setSelected(i => i === null ? null : (i - 1 + images.length) % images.length);
  const next = () => setSelected(i => i === null ? null : (i + 1) % images.length);

  return (
    <section id="galeria" style={{ position: "relative", padding: "96px 0", background: "var(--dr-bg)", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "30%", right: 0, width: 500, height: 500, borderRadius: "50%", background: "rgba(34,163,77,0.025)", filter: "blur(140px)", pointerEvents: "none" }} />

      <div className="dr-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: E }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
            <div className="dr-badge" style={{ gap: 8, display: "flex", alignItems: "center" }}>
              <InstaSVG /> @deltariorioverde
            </div>
          </div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, color: "#fff", fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.1 }}>
            Agro em <span className="dr-text-green">Movimento</span>
          </h2>
          <p style={{ color: "var(--dr-text-muted)", maxWidth: 520, margin: "16px auto 0", lineHeight: 1.7, fontSize: 15 }}>
            Uma janela para o campo — estrutura, produtos e relacionamento com nossos produtores.
          </p>
          <div className="dr-divider" style={{ marginTop: 24 }} />
        </motion.div>

        {/* Masonry Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridAutoRows: "200px", gap: 12 }}>
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: E }}
              onClick={() => setSelected(i)}
              id={`gallery-item-${i}`}
              style={{
                position: "relative",
                borderRadius: 16,
                overflow: "hidden",
                cursor: "pointer",
                gridColumn: `span ${img.colSpan}`,
                gridRow: `span ${img.rowSpan}`,
              }}
            >
              <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 50vw, 25vw" style={{ objectFit: "cover", transition: "transform 0.6s ease" }} />
              {/* Hover overlay via CSS-in-JS workaround using motion */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(6,10,7,0.92) 0%, rgba(6,10,7,0.1) 60%, transparent 100%)",
                  display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start",
                  padding: "20px",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", width: "100%", gap: 12 }}>
                  <p style={{ color: "#fff", fontSize: 13, fontWeight: 500, fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.3 }}>{img.caption}</p>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(12,18,12,0.8)", border: "1px solid rgba(34,163,77,0.5)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <ZoomIn size={14} style={{ color: "var(--dr-green)" }} />
                  </div>
                </div>
              </motion.div>
              {/* Border */}
              <div style={{ position: "absolute", inset: 0, borderRadius: 16, border: "1px solid rgba(255,255,255,0.04)", pointerEvents: "none" }} />
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: E }}
          style={{ textAlign: "center", marginTop: 36 }}
        >
          <a
            href="https://www.instagram.com/deltariorioverde/"
            target="_blank"
            rel="noopener noreferrer"
            id="instagram-cta"
            className="dr-btn dr-btn-ghost"
            style={{ padding: "12px 28px", borderRadius: 999, fontSize: 14, gap: 10 }}
          >
            <InstaSVG /> Seguir @deltariorioverde no Instagram
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelected(null)}
            style={{ position: "fixed", inset: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}
          >
            <div style={{ position: "absolute", inset: 0, background: "rgba(2,5,3,0.96)", backdropFilter: "blur(24px)" }} />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: E }}
              onClick={e => e.stopPropagation()}
              style={{ position: "relative", maxWidth: 900, width: "100%", borderRadius: 24, overflow: "hidden", boxShadow: "0 40px 120px rgba(0,0,0,0.8)" }}
            >
              <div style={{ position: "relative", aspectRatio: "16/9" }}>
                <Image src={images[selected].src} alt={images[selected].alt} fill sizes="90vw" style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(6,10,7,0.92), transparent)", padding: "24px" }}>
                  <p style={{ color: "#fff", fontWeight: 600, fontFamily: "'Syne', sans-serif", fontSize: 18 }}>{images[selected].caption}</p>
                  <p style={{ color: "var(--dr-text-dim)", fontSize: 13, marginTop: 4, fontFamily: "'Space Grotesk', sans-serif" }}>Delta Rio Produtos Agrícolas · Rio Verde — GO</p>
                </div>
              </div>
              {/* Controls */}
              <button onClick={() => setSelected(null)} aria-label="Fechar" style={{ position: "absolute", top: 16, right: 16, width: 40, height: 40, borderRadius: "50%", background: "rgba(12,18,12,0.8)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", cursor: "pointer" }}><X size={18} /></button>
              <button onClick={prev} aria-label="Anterior" style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", width: 40, height: 40, borderRadius: "50%", background: "rgba(12,18,12,0.8)", border: "1px solid rgba(34,163,77,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--dr-green)", cursor: "pointer" }}><ChevronLeft size={20} /></button>
              <button onClick={next} aria-label="Próximo" style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", width: 40, height: 40, borderRadius: "50%", background: "rgba(12,18,12,0.8)", border: "1px solid rgba(34,163,77,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--dr-green)", cursor: "pointer" }}><ChevronRight size={20} /></button>
              <div style={{ position: "absolute", top: 16, left: 16, background: "rgba(12,18,12,0.8)", borderRadius: 999, padding: "4px 12px", fontSize: 12, color: "var(--dr-text-muted)", fontFamily: "'Space Grotesk', sans-serif" }}>{selected + 1} / {images.length}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
