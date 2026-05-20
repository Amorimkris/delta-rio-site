"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PhoneFloat from "@/components/ui/WhatsAppFloat";
import { CheckCircle, Target, Eye, Heart, ArrowRight, Calendar } from "lucide-react";

const E = [0.22, 1, 0.36, 1] as [number, number, number, number];

const timeline = [
  { year: "2011", title: "Fundação", desc: "Delta Rio nasce em 14 de julho de 2011, em Rio Verde — GO, com foco em insumos agrícolas de qualidade." },
  { year: "2013", title: "Expansão em Defensivos", desc: "Ampliação da linha de defensivos com as principais marcas do mercado nacional." },
  { year: "2015", title: "Linha de Fertilizantes", desc: "Entrada no segmento de fertilizantes e adubos, completando o portfólio para o produtor rural." },
  { year: "2018", title: "Consultoria Agronômica", desc: "Lançamento do serviço de consultoria agronômica personalizada para maximizar produtividade." },
  { year: "2021", title: "10 Anos de História", desc: "Uma década transformando o campo goiano com qualidade, confiança e expertise técnica." },
  { year: "2024", title: "Referência Regional", desc: "Reconhecida como referência em insumos agrícolas e consultoria no sudoeste goiano." },
];

const valuesData = ["Integridade em cada relação", "Excelência nos produtos e serviços", "Parceria verdadeira com o produtor", "Inovação constante no agronegócio", "Responsabilidade com o campo", "Comprometimento com os resultados"];

function StatBox({ value, label, delay }: { value: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: E }} className="dr-card" style={{ padding: "24px", textAlign: "center" }}>
      <div className="dr-text-green" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 2.6rem)", lineHeight: 1 }}>{value}</div>
      <div style={{ color: "var(--dr-text-muted)", fontSize: 13, marginTop: 8, fontFamily: "'Space Grotesk', sans-serif" }}>{label}</div>
    </motion.div>
  );
}

export default function InstitucionalPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ position: "relative", minHeight: "55vh", display: "flex", alignItems: "flex-end", paddingTop: 96, paddingBottom: 64, overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
            <Image src="/about.png" alt="Equipe Delta Rio" fill sizes="100vw" style={{ objectFit: "cover" }} priority />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(6,10,7,0.8), rgba(6,10,7,0.55) 40%, rgba(6,10,7,0.98))" }} />
          </div>
          <div className="dr-container" style={{ position: "relative", zIndex: 1 }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: E }}>
              <div style={{ display: "flex", marginBottom: 20 }}>
                <div className="dr-badge" style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Calendar size={13} /> Fundada em 2011
                </div>
              </div>
              <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, color: "#fff", fontSize: "clamp(2.4rem, 6vw, 4.5rem)", lineHeight: 1.05, marginBottom: 16 }}>
                Nossa história,<br />
                <span className="dr-text-green">nossa força</span>{" "}
                <span className="dr-text-gold">no agro.</span>
              </h1>
              <p style={{ color: "var(--dr-text-muted)", maxWidth: 520, lineHeight: 1.75, fontSize: "clamp(1rem, 2vw, 1.1rem)" }}>
                Conheça a trajetória da Delta Rio — 13 anos construindo confiança, expertise e resultados no campo.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section style={{ padding: "56px 0", background: "var(--dr-bg-surface)" }}>
          <div className="dr-container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }} className="lg:grid-cols-4">
              <StatBox value="13+" label="Anos de experiência" delay={0} />
              <StatBox value="8+" label="Linhas de produto" delay={0.08} />
              <StatBox value="1000+" label="Produtores atendidos" delay={0.16} />
              <StatBox value="100%" label="Comprometimento" delay={0.24} />
            </div>
          </div>
        </section>

        {/* Mission / Vision / Values */}
        <section style={{ padding: "80px 0", background: "var(--dr-bg)" }}>
          <div className="dr-container">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: E }} style={{ textAlign: "center", marginBottom: 48 }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}><div className="dr-badge">Nosso Propósito</div></div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, color: "#fff", fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.1 }}>
                Missão, Visão e <span className="dr-text-green">Valores</span>
              </h2>
              <div className="dr-divider" style={{ marginTop: 20 }} />
            </motion.div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 18 }}>
              {[
                { Icon: Target, title: "Missão", accent: "#22a34d", isList: false, text: "Fornecer ao produtor rural soluções completas em insumos agrícolas com qualidade, expertise e compromisso com os resultados no campo." },
                { Icon: Eye,    title: "Visão",  accent: "#c9a84c", isList: false, text: "Ser a empresa de referência em insumos agrícolas e consultoria agronômica no sudoeste goiano, reconhecida pela excelência e parceria." },
                { Icon: Heart,  title: "Valores",accent: "#22a34d", isList: true,  text: "" },
              ].map((item, i) => {
                const Icon = item.Icon;
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1, ease: E }} className="dr-glass" style={{ borderRadius: 18, padding: "28px" }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18, background: `${item.accent}14`, border: `1px solid ${item.accent}24`, color: item.accent }}>
                      <Icon size={22} />
                    </div>
                    <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "#fff", fontSize: 20, marginBottom: 14 }}>{item.title}</h3>
                    {item.isList ? (
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                        {valuesData.map((v, vi) => (
                          <li key={vi} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            <CheckCircle size={15} style={{ color: item.accent, flexShrink: 0 }} />
                            <span style={{ color: "var(--dr-text-muted)", fontSize: 13.5 }}>{v}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p style={{ color: "var(--dr-text-muted)", lineHeight: 1.7, fontSize: 14 }}>{item.text}</p>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section style={{ padding: "80px 0", background: "var(--dr-bg-surface)", position: "relative", overflow: "hidden" }}>
          <div className="dr-dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.14 }} />
          <div className="dr-container" style={{ position: "relative", zIndex: 1 }}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: E }} style={{ textAlign: "center", marginBottom: 56 }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}><div className="dr-badge">Nossa Trajetória</div></div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, color: "#fff", fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.1 }}>
                Uma linha do <span className="dr-text-green">tempo</span>
              </h2>
              <div className="dr-divider" style={{ marginTop: 20 }} />
            </motion.div>
            <div style={{ maxWidth: 700, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>
              {timeline.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.65, delay: i * 0.06, ease: E }} className="dr-glass" style={{ borderRadius: 16, padding: "22px 26px", display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 28, color: "var(--dr-green)", lineHeight: 1, flexShrink: 0, minWidth: 56 }}>{item.year}</div>
                  <div>
                    <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "#fff", fontSize: 16, marginBottom: 6 }}>{item.title}</h3>
                    <p style={{ color: "var(--dr-text-muted)", fontSize: 13.5, lineHeight: 1.65 }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company data */}
        <section style={{ padding: "64px 0", background: "var(--dr-bg)" }}>
          <div className="dr-container">
            <div className="dr-glass" style={{ borderRadius: 24, padding: "40px 48px", display: "flex", flexWrap: "wrap", gap: 40, alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, color: "#fff", fontSize: 22, marginBottom: 24 }}>Dados da Empresa</h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "14px 40px" }}>
                  {[["Razão Social","Delta Rio Produtos Agrícolas LTDA"],["CNPJ","13.978.765/0001-42"],["Fundação","14 de julho de 2011"],["Cidade","Rio Verde — GO"],["CEP","75905-630"],["Telefone","(64) 3050-1010"]].map(([l, v]) => (
                    <div key={l}>
                      <div style={{ color: "var(--dr-text-dim)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 3, fontFamily: "'Space Grotesk'" }}>{l}</div>
                      <div style={{ color: "#fff", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 14 }}>{v}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, flexShrink: 0 }}>
                <Link href="/servicos" className="dr-btn dr-btn-primary" style={{ padding: "14px 28px", borderRadius: 14, fontSize: 15, gap: 8 }}>
                  Ver Serviços <ArrowRight size={16} />
                </Link>
                <Link href="/contato" className="dr-btn dr-btn-outline" style={{ padding: "14px 28px", borderRadius: 14, fontSize: 15 }}>
                  Entrar em Contato
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <PhoneFloat />
    </>
  );
}
