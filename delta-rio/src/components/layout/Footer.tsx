"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, ExternalLink } from "lucide-react";

const E = [0.22, 1, 0.36, 1] as [number, number, number, number];

const InstaSVG = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const navCols = [
  { title: "Navegação", items: [
    { name: "Início", href: "/" }, { name: "Institucional", href: "/institucional" },
    { name: "Serviços", href: "/servicos" }, { name: "Galeria", href: "/galeria" },
    { name: "Insights", href: "/insights" }, { name: "Contato", href: "/contato" },
  ]},
  { title: "Soluções", items: [
    { name: "Defensivos Agrícolas", href: "/servicos" }, { name: "Fertilizantes e Adubos", href: "/servicos" },
    { name: "Corretivos do Solo", href: "/servicos" }, { name: "Sementes", href: "/servicos" },
    { name: "Consultoria Agro", href: "/servicos" }, { name: "Produtos Veterinários", href: "/servicos" },
  ]},
];

export default function Footer() {
  return (
    <footer style={{ position: "relative", background: "var(--dr-bg-surface)", overflow: "hidden" }}>
      <div className="dr-line" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />
      <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: 700, height: 280, borderRadius: "50%", background: "rgba(34,163,77,0.025)", filter: "blur(120px)", pointerEvents: "none" }} />

      <div className="dr-container" style={{ position: "relative", zIndex: 1, paddingTop: 64, paddingBottom: 40 }}>
        {/* Main grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 40, marginBottom: 56 }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, textDecoration: "none" }}>
              <div style={{ position: "relative", width: 42, height: 42, borderRadius: 8, overflow: "hidden", background: "#fff", padding: 2, flexShrink: 0 }}>
                <Image src="/logo.png" alt="Delta Rio Logo" fill sizes="42px" style={{ objectFit: "contain" }} />
              </div>
              <div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, color: "#fff", fontSize: 17, letterSpacing: "0.1em" }}>DELTA RIO</div>
                <div style={{ fontSize: 9, color: "var(--dr-text-dim)", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: 2 }}>Produtos Agrícolas</div>
              </div>
            </Link>
            <p style={{ color: "var(--dr-text-dim)", fontSize: 13, lineHeight: 1.7, marginBottom: 20 }}>
              Tecnologia, confiança e expertise para o agronegócio brasileiro desde 2011.
            </p>
            {/* Social */}
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { href: "https://www.instagram.com/deltariorioverde/", icon: <InstaSVG />, label: "Instagram" },
                { href: "tel:556430501010", icon: <Phone size={17} />, label: "Telefone" },
              ].map(s => (
                <motion.a key={s.label} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={s.label} whileHover={{ scale: 1.12, y: -2 }} className="dr-glass" style={{ width: 38, height: 38, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--dr-text-muted)", textDecoration: "none", transition: "color 0.2s" }}>
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {navCols.map(col => (
            <div key={col.title}>
              <h4 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "#fff", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 20 }}>{col.title}</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {col.items.map(item => (
                  <li key={item.name}>
                    <Link href={item.href} style={{ color: "var(--dr-text-dim)", fontSize: 13, textDecoration: "none", fontFamily: "'Space Grotesk', sans-serif", display: "flex", alignItems: "center", gap: 8, transition: "color 0.2s" }}>
                      <span style={{ width: 12, height: 1, background: "rgba(34,163,77,0.3)", display: "inline-block", flexShrink: 0 }} />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "#fff", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 20 }}>Contato</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { Icon: Phone, label: "Telefone", href: "tel:556430501010", val: "(64) 3050-1010" },
                { Icon: MapPin, label: "Endereço", href: null, val: "R. das Turmalinas, 208 — Qd. 45\nParq. Bandeirante · Rio Verde — GO\nCEP 75905-630" },
                { Icon: Clock, label: "Horário", href: null, val: "Seg–Sex: 7h às 18h\nSáb: 7h às 12h" },
              ].map(({ Icon, label, href, val }) => (
                <div key={label} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(34,163,77,0.1)", border: "1px solid rgba(34,163,77,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--dr-green)", flexShrink: 0 }}>
                    <Icon size={15} />
                  </div>
                  <div>
                    <div style={{ color: "var(--dr-text-dim)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 3, fontFamily: "'Space Grotesk'" }}>{label}</div>
                    {href ? (
                      <a href={href} style={{ color: "#fff", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 15, textDecoration: "none" }}>{val}</a>
                    ) : (
                      <div style={{ color: "var(--dr-text-muted)", fontSize: 12.5, lineHeight: 1.6, fontFamily: "'Space Grotesk', sans-serif", whiteSpace: "pre-line" }}>{val}</div>
                    )}
                  </div>
                </div>
              ))}
              <a href="https://www.instagram.com/deltariorioverde/" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--dr-text-dim)", fontSize: 13, textDecoration: "none", fontFamily: "'Space Grotesk'" }}>
                <InstaSVG /> @deltariorioverde <ExternalLink size={11} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.05)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <p style={{ color: "var(--dr-text-faint)", fontSize: 12, fontFamily: "'Space Grotesk', sans-serif" }}>
            © {new Date().getFullYear()} Delta Rio Produtos Agrícolas LTDA · CNPJ 13.978.765/0001-42
          </p>
          <p style={{ color: "var(--dr-text-faint)", fontSize: 12, fontFamily: "'Space Grotesk', sans-serif" }}>Rio Verde · Goiás · Brasil</p>
        </div>
      </div>
    </footer>
  );
}
