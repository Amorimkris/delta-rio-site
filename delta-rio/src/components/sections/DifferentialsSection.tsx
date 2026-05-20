"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Shield, TrendingUp, Headphones, GraduationCap, Star, Wrench, Users, MapPin } from "lucide-react";

const E = [0.22, 1, 0.36, 1] as [number, number, number, number];

const items = [
  { icon: Headphones,    title: "Atendimento Personalizado",   desc: "Equipe dedicada ao atendimento exclusivo de cada produtor, entendendo as necessidades específicas da propriedade." },
  { icon: GraduationCap, title: "Expertise no Agronegócio",   desc: "Profissionais com formação técnica e vasta experiência no setor agropecuário do cerrado goiano." },
  { icon: Star,          title: "Produtos de Alta Qualidade",  desc: "Parcerias com as melhores marcas do mercado, garantindo produtos certificados e de máxima eficiência." },
  { icon: Wrench,        title: "Suporte Técnico Completo",    desc: "Assistência técnica contínua antes, durante e após a venda, assegurando os melhores resultados na lavoura." },
  { icon: Users,         title: "Relacionamento Duradouro",    desc: "Vínculos de longo prazo baseados em confiança, transparência e resultados comprovados no campo." },
  { icon: MapPin,        title: "Presença Regional Forte",     desc: "Sede estratégica em Rio Verde — GO, no coração do agronegócio goiano, com logística ágil e proximidade ao produtor." },
];

export default function DifferentialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.0]);

  return (
    <section id="diferenciais" ref={ref} style={{ position: "relative", padding: "96px 0", overflow: "hidden" }}>
      {/* Parallax BG */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <motion.div style={{ height: "100%", width: "100%", scale: imageScale }}>
          <Image src="/consultant.png" alt="Consultoria Delta Rio" fill sizes="100vw" style={{ objectFit: "cover", objectPosition: "center" }} />
        </motion.div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(6,10,7,0.94) 0%, rgba(6,10,7,0.82) 50%, rgba(6,10,7,0.96) 100%)" }} />
      </div>
      <div className="dr-line" style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 1 }} />
      <div className="dr-line" style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 1 }} />

      <div className="dr-container" style={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: E }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
            <div className="dr-badge">Por que a Delta Rio</div>
          </div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, color: "#fff", fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.1 }}>
            Nossos <span className="dr-text-green">Diferenciais</span>
          </h2>
          <p style={{ color: "var(--dr-text-muted)", maxWidth: 540, margin: "16px auto 0", lineHeight: 1.7, fontSize: 15 }}>
            Mais do que produtos — entregamos soluções. Conheça o que torna a Delta Rio a escolha certa.
          </p>
          <div className="dr-divider" style={{ marginTop: 24 }} />
        </motion.div>

        {/* Cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16, marginBottom: 56 }}>
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: E }}
                className="dr-glass"
                style={{ borderRadius: 18, padding: "28px" }}
              >
                <div style={{ width: 46, height: 46, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18, background: "rgba(34,163,77,0.12)", border: "1px solid rgba(34,163,77,0.2)", color: "var(--dr-green)" }}>
                  <Icon size={22} />
                </div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "#fff", fontSize: 17, marginBottom: 10, lineHeight: 1.3 }}>{item.title}</h3>
                <p style={{ color: "var(--dr-text-muted)", fontSize: 13.5, lineHeight: 1.65 }}>{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Highlight banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: E }}
          className="dr-glass"
          style={{ borderRadius: 24, padding: "40px 48px", display: "flex", flexWrap: "wrap", gap: 32, alignItems: "center", justifyContent: "space-between" }}
        >
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
              <Shield size={28} style={{ color: "var(--dr-green)", flexShrink: 0 }} />
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, color: "#fff", fontSize: "clamp(1.2rem, 3vw, 1.7rem)", lineHeight: 1.2 }}>
                Compromisso com o <span className="dr-text-green">Produtor Rural</span>
              </h3>
            </div>
            <p style={{ color: "var(--dr-text-muted)", lineHeight: 1.7, fontSize: 14, marginBottom: 20 }}>
              Desde 2011, a Delta Rio constrói relações sólidas baseadas em confiança, expertise técnica e
              resultados comprovados. Nosso maior ativo é a satisfação de quem trabalha a terra.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Produtos Certificados", "Assistência Técnica", "Equipe Especializada", "Entrega Ágil"].map(tag => (
                <span key={tag} className="dr-badge" style={{ fontSize: 9 }}>{tag}</span>
              ))}
            </div>
          </div>
          {/* Animated ring */}
          <div style={{ position: "relative", width: 120, height: 120, flexShrink: 0 }}>
            <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "linear-gradient(135deg,#1a7a3a,#22a34d)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", boxShadow: "0 0 32px rgba(34,163,77,0.4)" }}>
              <TrendingUp size={32} color="#fff" />
              <span style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 9, marginTop: 4, letterSpacing: "0.1em" }}>CRESCIMENTO</span>
            </div>
            <div className="dr-anim-spin" style={{ position: "absolute", inset: -8, borderRadius: "50%", border: "1px solid rgba(34,163,77,0.25)" }} />
            <div style={{ position: "absolute", inset: -18, borderRadius: "50%", border: "1px solid rgba(34,163,77,0.1)" }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
