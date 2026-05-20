"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronRight } from "lucide-react";
import Image from "next/image";

const E = [0.22, 1, 0.36, 1] as [number, number, number, number];

const links = [
  { label: "Início",        href: "/" },
  { label: "Institucional", href: "/institucional" },
  { label: "Serviços",      href: "/servicos" },
  { label: "Galeria",       href: "/galeria" },
  { label: "Insights",      href: "/insights" },
  { label: "Contato",       href: "/contato" },
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
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: E }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          transition: "background 0.4s ease, padding 0.4s ease, box-shadow 0.4s ease",
          background: scrolled ? "rgba(6,10,7,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(32px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(32px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(34,163,77,0.12)" : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
          paddingTop: scrolled ? 10 : 16,
          paddingBottom: scrolled ? 10 : 16,
          /* Safe area top for notch */
          paddingLeft: "env(safe-area-inset-left, 0px)",
          paddingRight: "env(safe-area-inset-right, 0px)",
        }}
      >
        <div className="dr-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <Link href="/" id="nav-logo" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{ position: "relative", width: 40, height: 40, borderRadius: 8, overflow: "hidden", flexShrink: 0, background: "#fff", padding: 2 }}>
              <Image src="/logo.png" alt="Delta Rio Logo" fill sizes="40px" style={{ objectFit: "contain" }} />
            </div>
            <div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, color: "#fff", fontSize: 16, lineHeight: 1, letterSpacing: "0.1em" }}>DELTA RIO</div>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 8, color: "var(--dr-text-dim)", letterSpacing: "0.22em", textTransform: "uppercase", marginTop: 3 }}>Produtos Agrícolas</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 2 }} className="hidden lg:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link key={link.href} href={link.href} style={{ position: "relative", padding: "8px 14px", borderRadius: 10, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, fontSize: 14, color: active ? "#fff" : "var(--dr-text-muted)", textDecoration: "none", background: active ? "rgba(34,163,77,0.1)" : "transparent", border: active ? "1px solid rgba(34,163,77,0.22)" : "1px solid transparent", transition: "all 0.2s" }}>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex" style={{ alignItems: "center", gap: 12 }}>
            <a href="tel:556430501010" style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "'Space Grotesk',sans-serif", fontSize: 14, fontWeight: 500, color: "var(--dr-text-muted)", textDecoration: "none" }}>
              <Phone size={16} /> (64) 3050-1010
            </a>
            <Link href="/contato" className="dr-btn dr-btn-primary" style={{ padding: "10px 18px", borderRadius: 12, fontSize: 14, gap: 8 }}>
              Fale Conosco <ChevronRight size={16} />
            </Link>
          </div>

          {/* Mobile: Phone + Toggle */}
          <div className="flex lg:hidden" style={{ alignItems: "center", gap: 8 }}>
            <a href="tel:556430501010" aria-label="Ligar" className="dr-glass" style={{ width: 40, height: 40, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--dr-green)", textDecoration: "none" }}>
              <Phone size={18} />
            </a>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              id="mobile-toggle"
              className="dr-glass"
              style={{ width: 40, height: 40, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", border: "none", background: "rgba(12,18,12,0.65)", backdropFilter: "blur(24px)", borderColor: "var(--dr-green-border)" }}
            >
              <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
                {open ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── MOBILE FULLSCREEN MENU ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              style={{ position: "fixed", inset: 0, zIndex: 48, background: "rgba(3,6,3,0.7)", backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)" }}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                position: "fixed", top: 0, right: 0, bottom: 0, zIndex: 49,
                width: "min(320px, 88vw)",
                background: "rgba(6,10,7,0.98)",
                backdropFilter: "blur(40px)",
                WebkitBackdropFilter: "blur(40px)",
                borderLeft: "1px solid rgba(34,163,77,0.15)",
                display: "flex", flexDirection: "column",
                /* Safe areas */
                paddingTop: "max(60px, calc(60px + env(safe-area-inset-top)))",
                paddingBottom: "max(24px, env(safe-area-inset-bottom))",
              }}
              onClick={e => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                style={{ position: "absolute", top: "max(20px, env(safe-area-inset-top, 20px))", right: 20, width: 40, height: 40, borderRadius: 12, background: "rgba(34,163,77,0.08)", border: "1px solid rgba(34,163,77,0.18)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--dr-text-muted)" }}
              >
                <X size={18} />
              </button>

              {/* Logo */}
              <div style={{ paddingLeft: 24, paddingRight: 24, marginBottom: 32, display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ position: "relative", width: 36, height: 36, borderRadius: 8, overflow: "hidden", background: "#fff", padding: 2, flexShrink: 0 }}>
                  <Image src="/logo.png" alt="Delta Rio" fill sizes="36px" style={{ objectFit: "contain" }} />
                </div>
                <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, color: "#fff", fontSize: 15, letterSpacing: "0.1em" }}>DELTA RIO</div>
              </div>

              {/* Nav links with stagger */}
              <nav style={{ flex: 1, paddingLeft: 16, paddingRight: 16, display: "flex", flexDirection: "column", gap: 4, overflowY: "auto" }}>
                {links.map((link, i) => {
                  const active = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.3, ease: E }}
                    >
                      <Link
                        href={link.href}
                        id={`mobile-nav-${link.href.replace("/", "") || "home"}`}
                        style={{
                          display: "flex", alignItems: "center", justifyContent: "space-between",
                          padding: "16px 18px", borderRadius: 14, textDecoration: "none",
                          fontFamily: "'Syne',sans-serif", fontWeight: active ? 800 : 600,
                          fontSize: 20, letterSpacing: "0.02em",
                          color: active ? "#fff" : "var(--dr-text-muted)",
                          background: active ? "rgba(34,163,77,0.12)" : "transparent",
                          border: `1px solid ${active ? "rgba(34,163,77,0.28)" : "transparent"}`,
                          transition: "all 0.2s",
                        }}
                      >
                        {link.label}
                        <ChevronRight size={16} style={{ color: active ? "var(--dr-green)" : "var(--dr-text-faint)", flexShrink: 0 }} />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3, ease: E }}
                style={{ padding: "16px 20px", borderTop: "1px solid rgba(34,163,77,0.1)", display: "flex", flexDirection: "column", gap: 10 }}
              >
                <a
                  href="tel:556430501010"
                  id="mobile-phone-cta"
                  className="dr-btn dr-btn-primary"
                  style={{ width: "100%", padding: "16px", borderRadius: 14, fontSize: 16, gap: 10, justifyContent: "center" }}
                >
                  <Phone size={18} /> (64) 3050-1010
                </a>
                <Link
                  href="/contato"
                  className="dr-btn dr-btn-outline"
                  style={{ width: "100%", padding: "14px", borderRadius: 14, fontSize: 14, justifyContent: "center" }}
                >
                  Solicitar Atendimento
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
