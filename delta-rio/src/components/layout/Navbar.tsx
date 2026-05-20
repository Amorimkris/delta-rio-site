"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronRight } from "lucide-react";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const links = [
  { label: "Início", href: "/" },
  { label: "Institucional", href: "/institucional" },
  { label: "Serviços", href: "/servicos" },
  { label: "Galeria", href: "/galeria" },
  { label: "Insights", href: "/insights" },
  { label: "Contato", href: "/contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "background 0.4s ease, padding 0.4s ease, box-shadow 0.4s ease",
          background: scrolled ? "rgba(6, 10, 7, 0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(32px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(32px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(34,163,77,0.12)" : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
          padding: scrolled ? "12px 0" : "20px 0",
        }}
      >
        <div className="dr-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <Link href="/" id="nav-logo" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <div style={{ position: "relative", width: 44, height: 44, borderRadius: 8, overflow: "hidden", flexShrink: 0, background: "#fff", padding: 2 }}>
              <Image src="/logo.png" alt="Delta Rio Logo" fill sizes="44px" style={{ objectFit: "contain" }} />
            </div>
            <div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, color: "#fff", fontSize: 17, lineHeight: 1, letterSpacing: "0.1em" }}>DELTA RIO</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 9, color: "var(--dr-text-dim)", letterSpacing: "0.22em", textTransform: "uppercase", marginTop: 3 }}>Produtos Agrícolas</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 4 }} className="hidden lg:flex" aria-label="Menu principal">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link key={link.href} href={link.href} style={{
                  position: "relative",
                  padding: "8px 16px",
                  borderRadius: 10,
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  color: active ? "#fff" : "var(--dr-text-muted)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  background: active ? "rgba(34,163,77,0.1)" : "transparent",
                  border: active ? "1px solid rgba(34,163,77,0.22)" : "1px solid transparent",
                }}>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex" style={{ alignItems: "center", gap: 12 }}>
            <a href="tel:556430501010" id="nav-phone" style={{
              display: "flex", alignItems: "center", gap: 8,
              fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 500,
              color: "var(--dr-text-muted)", textDecoration: "none", transition: "color 0.2s",
            }}>
              <Phone size={16} />
              (64) 3050-1010
            </a>
            <Link href="/contato" id="nav-cta" className="dr-btn dr-btn-primary" style={{ padding: "10px 20px", borderRadius: 12, fontSize: 14, gap: 8 }}>
              Fale Conosco <ChevronRight size={16} />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden dr-glass"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            id="mobile-toggle"
            style={{ width: 40, height: 40, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", border: "none", cursor: "pointer" }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: "fixed", inset: 0, zIndex: 40 }}
            onClick={() => setOpen(false)}
          >
            <div style={{ position: "absolute", inset: 0, background: "rgba(4,7,4,0.95)", backdropFilter: "blur(24px)" }} />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: EASE }}
              style={{
                position: "absolute", right: 0, top: 0, bottom: 0,
                width: "min(360px, 90vw)",
                background: "rgba(10,16,10,0.98)",
                borderLeft: "1px solid rgba(34,163,77,0.15)",
                display: "flex", flexDirection: "column",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", borderBottom: "1px solid rgba(34,163,77,0.12)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ position: "relative", width: 38, height: 38, borderRadius: 8, overflow: "hidden", background: "#fff", padding: 2, flexShrink: 0 }}>
                    <Image src="/logo.png" alt="Delta Rio Logo" fill sizes="38px" style={{ objectFit: "contain" }} />
                  </div>
                  <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, color: "#fff", fontSize: 17, letterSpacing: "0.1em" }}>DELTA RIO</span>
                </div>
                <button onClick={() => setOpen(false)} style={{ color: "var(--dr-text-dim)", background: "none", border: "none", cursor: "pointer" }}>
                  <X size={20} />
                </button>
              </div>

              {/* Links */}
              <nav style={{ flex: 1, padding: "16px", display: "flex", flexDirection: "column", gap: 4 }}>
                {links.map((link, i) => (
                  <motion.div key={link.href} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05, duration: 0.25 }}>
                    <Link href={link.href} style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "14px 16px", borderRadius: 12, textDecoration: "none",
                      fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 18,
                      color: pathname === link.href ? "#fff" : "var(--dr-text-muted)",
                      background: pathname === link.href ? "rgba(34,163,77,0.12)" : "transparent",
                      border: `1px solid ${pathname === link.href ? "rgba(34,163,77,0.3)" : "transparent"}`,
                      transition: "all 0.2s",
                    }}>
                      {link.label}
                      <ChevronRight size={16} style={{ color: pathname === link.href ? "var(--dr-green)" : "var(--dr-text-dim)" }} />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Footer */}
              <div style={{ padding: "16px 24px", borderTop: "1px solid rgba(34,163,77,0.12)", display: "flex", flexDirection: "column", gap: 12 }}>
                <a href="tel:556430501010" style={{
                  display: "flex", alignItems: "center", gap: 12, padding: "14px 16px",
                  borderRadius: 12, background: "rgba(34,163,77,0.06)", border: "1px solid rgba(34,163,77,0.15)",
                  textDecoration: "none",
                }}>
                  <Phone size={20} style={{ color: "var(--dr-green)", flexShrink: 0 }} />
                  <div>
                    <div style={{ fontFamily: "'Space Grotesk'", fontSize: 11, color: "var(--dr-text-dim)", marginBottom: 2 }}>Telefone</div>
                    <div style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, color: "#fff", fontSize: 16 }}>(64) 3050-1010</div>
                  </div>
                </a>
                <Link href="/contato" className="dr-btn dr-btn-primary" style={{ width: "100%", padding: "14px", borderRadius: 12, fontSize: 15, gap: 8, justifyContent: "center" }}>
                  Solicitar Atendimento <ChevronRight size={18} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
