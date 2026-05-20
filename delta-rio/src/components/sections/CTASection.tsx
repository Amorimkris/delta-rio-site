"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { useMobile } from "@/hooks/useMobile";

const E = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useMobile();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], isMobile ? [1, 1] : [1.08, 1.0]);

  return (
    <section id="cta" ref={ref} style={{ position: "relative", padding: isMobile ? "80px 0" : "128px 0", overflow: "hidden" }}>
      {/* Parallax BG */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <motion.div style={{ height: "100%", width: "100%", scale }}>
          <Image src="/harvest.png" alt="Colheita Delta Rio" fill sizes="100vw" style={{ objectFit: "cover", objectPosition: "center" }} />
        </motion.div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(6,10,7,0.88), rgba(6,10,7,0.72) 40%, rgba(6,10,7,0.92))" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(34,163,77,0.1) 0%, transparent 65%)" }} />
      </div>
      <div className="dr-line" style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 1 }} />

      <div className="dr-container" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.9, ease: E }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: isMobile ? 24 : 36 }}>
            <div className="dr-badge"><span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--dr-gold)", display: "inline-block" }} /> Comece agora</div>
          </div>

          <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, color: "#fff", lineHeight: 1.07, marginBottom: isMobile ? 18 : 24, fontSize: isMobile ? "clamp(2rem,9vw,2.8rem)" : "clamp(2.5rem,7vw,4.8rem)" }}>
            Pronto para elevar a{" "}
            <span className="dr-text-green" style={{ display: "block", margin: "4px 0" }}>produtividade</span>
            <span className="dr-text-gold">no campo?</span>
          </h2>

          <p style={{ color: "var(--dr-text-muted)", maxWidth: 540, margin: "0 auto", marginBottom: isMobile ? 32 : 48, lineHeight: 1.75, fontSize: isMobile ? 14 : "clamp(1rem,2vw,1.1rem)" }}>
            Fale com nossa equipe e descubra as melhores soluções em insumos agrícolas para a sua lavoura.
          </p>

          {/* CTAs — stacked on mobile */}
          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 12 : 16, justifyContent: "center", alignItems: "center" }}>
            <a href="tel:556430501010" id="cta-phone" className="dr-btn dr-btn-primary" style={{ width: isMobile ? "100%" : "auto", padding: isMobile ? "18px 24px" : "18px 40px", borderRadius: 18, fontSize: isMobile ? 17 : 18, gap: 12, justifyContent: "center" }}>
              <Phone size={22} /> (64) 3050-1010
            </a>
            <Link href="/servicos" id="cta-services" className="dr-btn dr-btn-outline" style={{ width: isMobile ? "100%" : "auto", padding: isMobile ? "16px 24px" : "18px 40px", borderRadius: 18, fontSize: isMobile ? 15 : 18, gap: 12, justifyContent: "center" }}>
              Ver Serviços <ArrowRight size={20} />
            </Link>
          </div>

          {/* Info strip */}
          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", flexWrap: "wrap", justifyContent: "center", gap: isMobile ? 14 : 28, marginTop: isMobile ? 40 : 56, paddingTop: isMobile ? 24 : 28, borderTop: "1px solid rgba(255,255,255,0.06)", alignItems: "center" }}>
            {["R. das Turmalinas, 208 — Rio Verde, GO", "Seg–Sex 7h–18h · Sáb 7h–12h", "@deltariorioverde"].map(item => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--dr-text-dim)", fontSize: isMobile ? 12 : 13, fontFamily: "'Space Grotesk',sans-serif" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--dr-green)", flexShrink: 0 }} />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
