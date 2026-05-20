"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const E = [0.22, 1, 0.36, 1] as [number, number, number, number];

const testimonials = [
  { name: "Marcos Borges",      role: "Produtor Rural",       location: "Rio Verde — GO",    initials: "MB", accent: "#22a34d", text: "A Delta Rio transformou a gestão dos insumos na minha fazenda. O atendimento é diferenciado — eles realmente entendem o campo. Minha produtividade de soja aumentou consideravelmente desde que comecei a trabalhar com eles." },
  { name: "Ana Paula Moreira",  role: "Engenheira Agrônoma",  location: "Montividiu — GO",   initials: "AM", accent: "#c9a84c", text: "Como agrônoma, exijo qualidade e confiabilidade nos produtos que recomendo. A Delta Rio atende esses critérios com excelência. O suporte técnico é impecável e os produtos são de altíssima performance." },
  { name: "João Carlos Ferreira",role: "Fazendeiro",           location: "Jataí — GO",        initials: "JF", accent: "#22a34d", text: "Trabalho com a Delta Rio há anos e posso afirmar: são parceiros de verdade. Sempre têm estoque, entregam no prazo e a assistência técnica é de primeiro nível. Indico para qualquer produtor da região." },
  { name: "Roberto Almeida",    role: "Pecuarista",           location: "Serranópolis — GO", initials: "RA", accent: "#c9a84c", text: "Para a pecuária, eles têm uma linha completa e especialistas que entendem do assunto. O relacionamento é próximo e o preço é justo. Vale cada centavo investido na parceria." },
];

export default function TestimonialsSection() {
  const [cur, setCur] = useState(0);
  const go = (i: number) => setCur((i + testimonials.length) % testimonials.length);
  const t = testimonials[cur];

  return (
    <section id="depoimentos" style={{ position: "relative", padding: "96px 0", background: "var(--dr-bg-surface)", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
        <div style={{ width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(34,163,77,0.04), transparent 70%)" }} />
      </div>

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
            <div className="dr-badge">Depoimentos</div>
          </div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, color: "#fff", fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.1 }}>
            Produtores que <span className="dr-text-green">confiam</span>
          </h2>
          <div className="dr-divider" style={{ marginTop: 20 }} />
        </motion.div>

        {/* Slider — max width centered */}
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={cur}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: E }}
              className="dr-glass"
              style={{ borderRadius: 24, padding: "40px 48px", position: "relative", overflow: "hidden" }}
            >
              {/* Ambient glow */}
              <div style={{ position: "absolute", top: 0, right: 0, width: 240, height: 240, borderRadius: "50%", background: t.accent, filter: "blur(100px)", opacity: 0.07, pointerEvents: "none" }} />
              <Quote size={36} style={{ color: t.accent, opacity: 0.2, marginBottom: 24 }} />
              <p style={{ fontFamily: "'Inter', sans-serif", color: "var(--dr-text)", fontSize: "clamp(1rem, 2vw, 1.15rem)", lineHeight: 1.8, marginBottom: 28, position: "relative", zIndex: 1 }}>
                "{t.text}"
              </p>
              {/* Stars */}
              <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill={t.accent} style={{ color: t.accent }} />)}
              </div>
              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: `linear-gradient(135deg, ${t.accent}80, ${t.accent}30)`, border: `1px solid ${t.accent}50`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "#fff", fontSize: 16, flexShrink: 0 }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "#fff", fontSize: 16 }}>{t.name}</div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--dr-text-dim)", fontSize: 13, marginTop: 2 }}>{t.role} · {t.location}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 28 }}>
            {/* Dots */}
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => go(i)} aria-label={`Depoimento ${i + 1}`} style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                  <div style={{ height: 6, borderRadius: 3, transition: "all 0.3s ease", width: i === cur ? 28 : 12, background: i === cur ? "var(--dr-green)" : "var(--dr-text-dim)" }} />
                </button>
              ))}
            </div>
            {/* Arrows */}
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => go(cur - 1)} aria-label="Anterior" id="testimonial-prev" style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(34,163,77,0.06)", border: "1px solid rgba(34,163,77,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--dr-green)", cursor: "pointer", transition: "background 0.2s" }}>
                <ChevronLeft size={20} />
              </button>
              <button onClick={() => go(cur + 1)} aria-label="Próximo" id="testimonial-next" style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg,#1a7a3a,#22a34d)", border: "1px solid rgba(34,163,77,0.4)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", cursor: "pointer", boxShadow: "0 0 20px rgba(34,163,77,0.3)" }}>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
