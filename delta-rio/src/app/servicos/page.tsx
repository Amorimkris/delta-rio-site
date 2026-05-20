"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PhoneFloat from "@/components/ui/WhatsAppFloat";
import { Sprout, FlaskConical, Leaf, Mountain, Wheat, BookOpen, Pill, Crown, ArrowRight, Phone } from "lucide-react";

const E = [0.22, 1, 0.36, 1] as [number, number, number, number];

const services = [
  { icon: Sprout,       slug: "defensivos",  title: "Defensivos Agrícolas",     accent: "#22a34d", tag: "Proteção de Lavouras", img: "/hero.png",       items: ["Herbicidas sistêmicos e de contato","Fungicidas preventivos e curativos","Inseticidas de amplo espectro","Acaricidas específicos","Nematicidas"], desc: "Linha completa de herbicidas, fungicidas, inseticidas e acaricidas das principais marcas. Proteção eficiente e segura com suporte técnico especializado." },
  { icon: FlaskConical, slug: "fertilizantes",title: "Fertilizantes",           accent: "#22a34d", tag: "Nutrição de Plantas",  img: "/products.png",   items: ["Fertilizantes NPK completos","Micronutrientes essenciais","Fertilizantes foliares","Bioestimulantes agrícolas","Fertilizantes líquidos"], desc: "Fertilizantes foliares e de solo para maximizar a nutrição das culturas em todas as fases do ciclo produtivo." },
  { icon: Leaf,         slug: "adubos",       title: "Adubos",                  accent: "#c9a84c", tag: "Nutrição do Solo",     img: "/harvest.png",    items: ["Adubos simples (ureia, superfosfato)","Adubos compostos NPK","Adubos orgânicos certificados","Adubos minerais","Compostos organominerais"], desc: "Adubos simples e compostos, orgânicos e minerais, para suprimento nutricional ideal da sua cultura em qualquer fase." },
  { icon: Mountain,     slug: "corretivos",   title: "Corretivos do Solo",      accent: "#c9a84c", tag: "Correção de Solo",     img: "/aerial.png",     items: ["Calcário calcítico","Calcário dolomítico","Gesso agrícola","Silicato de cálcio e magnésio","Cal virgem agrícola"], desc: "Calcário, gesso agrícola e calcário dolomítico para correção de acidez e melhoria da estrutura do solo." },
  { icon: Wheat,        slug: "sementes",     title: "Sementes",                accent: "#22a34d", tag: "Genética de Elite",    img: "/products.png",   items: ["Sementes de soja adaptadas ao cerrado","Milho híbrido e transgênico","Algodão convencional e Bt","Forrageiras tropicais","Sorgo e girassol"], desc: "Sementes de alta tecnologia com garantia de germinação e desempenho para o cerrado goiano." },
  { icon: BookOpen,     slug: "consultoria",  title: "Consultoria Agronômica",  accent: "#22a34d", tag: "Expertise Técnica",    img: "/consultant.png", items: ["Planejamento de safra completo","Análise e interpretação de solo","Manejo integrado de pragas","Recomendação de adubação","Monitoramento agronômico"], desc: "Suporte técnico e consultoria agronômica personalizada para aumentar a eficiência e a rentabilidade da produção." },
  { icon: Pill,         slug: "veterinario",  title: "Produtos Veterinários",   accent: "#c9a84c", tag: "Saúde Animal",         img: "/about.png",      items: ["Medicamentos injetáveis e orais","Vacinas para bovinos e suínos","Vermífugos e antiparasitários","Vitaminas e suplementos","Higiene animal"], desc: "Linha completa de medicamentos, vacinas e suplementos para a saúde e desempenho do seu rebanho." },
  { icon: Crown,        slug: "pecuaria",     title: "Soluções para Pecuária",  accent: "#c9a84c", tag: "Pecuária Premium",     img: "/harvest.png",    items: ["Sal mineral premium","Suplementos proteicos energéticos","Suplemento para matrizes","Rações e concentrados","Aditivos de desempenho"], desc: "Sal mineral, suplementos e nutrição animal completa para otimizar a performance do seu gado." },
];

export default function ServicosPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ position: "relative", minHeight: "50vh", display: "flex", alignItems: "flex-end", paddingTop: 96, paddingBottom: 64, overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
            <Image src="/products.png" alt="Soluções Delta Rio" fill sizes="100vw" style={{ objectFit: "cover" }} priority />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(6,10,7,0.8), rgba(6,10,7,0.55) 40%, rgba(6,10,7,0.98))" }} />
          </div>
          <div className="dr-container" style={{ position: "relative", zIndex: 1 }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: E }}>
              <div style={{ display: "flex", marginBottom: 20 }}><div className="dr-badge">Portfólio Completo</div></div>
              <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, color: "#fff", fontSize: "clamp(2.4rem, 6vw, 4.5rem)", lineHeight: 1.05, marginBottom: 16 }}>
                Soluções completas<br /><span className="dr-text-green">para o campo.</span>
              </h1>
              <p style={{ color: "var(--dr-text-muted)", maxWidth: 520, lineHeight: 1.75, fontSize: "clamp(1rem, 2vw, 1.1rem)" }}>
                Do plantio à colheita — insumos de alta performance e consultoria especializada.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        {services.map((svc, i) => {
          const Icon = svc.icon;
          const isEven = i % 2 === 0;
          const bg = isEven ? "var(--dr-bg)" : "var(--dr-bg-surface)";
          return (
            <section key={svc.slug} id={svc.slug} style={{ padding: "72px 0", background: bg }}>
              <div className="dr-container">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }} className="lg:grid-cols-2">
                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, ease: E }}
                    style={{ order: isEven ? 0 : 1, position: "relative", borderRadius: 20, overflow: "hidden", aspectRatio: "4/3" }}
                  >
                    <Image src={svc.img} alt={svc.title} fill sizes="(max-width: 1024px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(6,10,7,0.45), transparent)" }} />
                    <div style={{ position: "absolute", top: 14, left: 14, padding: "5px 14px", borderRadius: 999, background: `${svc.accent}20`, color: svc.accent, border: `1px solid ${svc.accent}30`, fontSize: 11, fontWeight: 700, fontFamily: "'Space Grotesk'", backdropFilter: "blur(8px)" }}>
                      {svc.tag}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, ease: E }}
                    style={{ order: isEven ? 1 : 0, display: "flex", flexDirection: "column", gap: 20 }}
                  >
                    <div style={{ width: 56, height: 56, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", background: `${svc.accent}14`, border: `1px solid ${svc.accent}24`, color: svc.accent }}>
                      <Icon size={28} />
                    </div>
                    <div>
                      <div style={{ fontSize: 10, fontWeight: 700, fontFamily: "'Space Grotesk'", color: svc.accent, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>{svc.tag}</div>
                      <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, color: "#fff", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", lineHeight: 1.2 }}>{svc.title}</h2>
                    </div>
                    <p style={{ color: "var(--dr-text-muted)", lineHeight: 1.75, fontSize: 15 }}>{svc.desc}</p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                      {svc.items.map((item, ii) => (
                        <li key={ii} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--dr-text-muted)", fontFamily: "'Space Grotesk'" }}>
                          <div style={{ width: 6, height: 6, borderRadius: "50%", background: svc.accent, flexShrink: 0 }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 4 }}>
                      <a href="tel:556430501010" className="dr-btn dr-btn-primary" style={{ padding: "12px 22px", borderRadius: 12, fontSize: 13.5, gap: 8 }}>
                        <Phone size={15} /> Solicitar por Telefone
                      </a>
                      <Link href="/contato" className="dr-btn dr-btn-outline" style={{ padding: "12px 22px", borderRadius: 12, fontSize: 13.5, gap: 8 }}>
                        Solicitar Orçamento <ArrowRight size={15} />
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          );
        })}

        {/* Bottom CTA */}
        <section style={{ padding: "64px 0", background: "var(--dr-bg)" }}>
          <div className="dr-container" style={{ textAlign: "center" }}>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: E }} style={{ maxWidth: 560, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, color: "#fff", fontSize: "clamp(1.8rem, 4vw, 2.4rem)", lineHeight: 1.15 }}>
                Precisa de <span className="dr-text-green">orientação técnica?</span>
              </h2>
              <p style={{ color: "var(--dr-text-muted)", fontSize: 15, lineHeight: 1.7 }}>Nossa equipe está pronta para ajudá-lo a escolher os melhores produtos para sua lavoura.</p>
              <a href="tel:556430501010" className="dr-btn dr-btn-primary" style={{ padding: "18px 44px", borderRadius: 18, fontSize: 18, gap: 12, marginTop: 8 }}>
                <Phone size={22} /> (64) 3050-1010
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <PhoneFloat />
    </>
  );
}
