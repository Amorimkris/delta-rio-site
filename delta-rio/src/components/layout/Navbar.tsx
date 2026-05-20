"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useMobile } from "@/hooks/useMobile";

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
  const [scrolled, setScrolled]   = useState(false);
  const [open, setOpen]           = useState(false);
  const pathname                  = usePathname();
  const isMobile                  = useMobile(1024); // breakpoint = 1024 (lg)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close drawer on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Lock body scroll while drawer open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width    = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width    = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width    = "";
    };
  }, [open]);

  return (
    <>
      {/* ── HEADER BAR ── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: E }}
        style={{
          position:     "fixed",
          top:          0,
          left:         0,
          right:        0,
          zIndex:       50,
          transition:   "background 0.4s ease, padding 0.4s ease, box-shadow 0.4s ease",
          background:   scrolled ? "rgba(6,10,7,0.94)" : "transparent",
          backdropFilter:       scrolled ? "blur(32px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(32px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(34,163,77,0.14)" : "1px solid transparent",
          boxShadow:    scrolled ? "0 4px 30px rgba(0,0,0,0.45)" : "none",
          paddingTop:    scrolled ? 10 : 16,
          paddingBottom: scrolled ? 10 : 16,
        }}
      >
        <div
          className="dr-container"
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}
        >
          {/* Logo */}
          <Link href="/" id="nav-logo" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}>
            <div style={{ position: "relative", width: 38, height: 38, borderRadius: 8, overflow: "hidden", flexShrink: 0, background: "#fff", padding: 2 }}>
              <Image src="/logo.png" alt="Delta Rio Logo" fill sizes="38px" style={{ objectFit: "contain" }} />
            </div>
            <div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, color: "#fff", fontSize: isMobile ? 14 : 17, lineHeight: 1, letterSpacing: "0.1em" }}>DELTA RIO</div>
              {!isMobile && <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 8, color: "var(--dr-text-dim)", letterSpacing: "0.22em", textTransform: "uppercase", marginTop: 3 }}>Produtos Agrícolas</div>}
            </div>
          </Link>

          {/* DESKTOP navigation — only on large screens */}
          {!isMobile && (
            <nav style={{ display: "flex", alignItems: "center", gap: 2 }}>
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      position: "relative",
                      padding: "8px 14px",
                      borderRadius: 10,
                      fontFamily: "'Space Grotesk',sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      color: active ? "#fff" : "var(--dr-text-muted)",
                      textDecoration: "none",
                      background: active ? "rgba(34,163,77,0.1)" : "transparent",
                      border: active ? "1px solid rgba(34,163,77,0.22)" : "1px solid transparent",
                      transition: "all 0.2s",
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          )}

          {/* DESKTOP CTA */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
              <a href="tel:556430501010" style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "'Space Grotesk',sans-serif", fontSize: 14, fontWeight: 500, color: "var(--dr-text-muted)", textDecoration: "none" }}>
                <Phone size={16} /> (64) 3050-1010
              </a>
              <Link href="/contato" className="dr-btn dr-btn-primary" style={{ padding: "10px 18px", borderRadius: 12, fontSize: 14, gap: 8 }}>
                Fale Conosco <ChevronRight size={16} />
              </Link>
            </div>
          )}

          {/* MOBILE: phone + hamburger */}
          {isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <a
                href="tel:556430501010"
                aria-label="Ligar"
                style={{ width: 38, height: 38, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--dr-green)", textDecoration: "none", background: "rgba(34,163,77,0.08)", border: "1px solid rgba(34,163,77,0.2)" }}
              >
                <Phone size={18} />
              </a>
              <button
                onClick={() => setOpen(!open)}
                aria-label={open ? "Fechar menu" : "Abrir menu"}
                id="mobile-toggle"
                style={{ width: 38, height: 38, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", border: "none", background: "rgba(255,255,255,0.06)", cursor: "pointer" }}
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          )}
        </div>
      </motion.header>

      {/* ── MOBILE FULLSCREEN MENU ── */}
      <AnimatePresence>
        {open && isMobile && (
          <>
            {/* Backdrop */}
            <motion.div
              key="bd"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              style={{ position: "fixed", inset: 0, zIndex: 60, background: "rgba(2,5,3,0.75)", backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)" }}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
              style={{
                position:   "fixed",
                top:        0,
                right:      0,
                bottom:     0,
                zIndex:     70,
                width:      "min(300px, 85vw)",
                background: "rgba(6,10,7,0.99)",
                borderLeft: "1px solid rgba(34,163,77,0.18)",
                display:    "flex",
                flexDirection: "column",
                /* Do NOT set padding here — handle per-section */
              }}
            >
              {/* TOP BAR — Logo + close */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 16px 12px", borderBottom: "1px solid rgba(34,163,77,0.1)", flexShrink: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ position: "relative", width: 34, height: 34, borderRadius: 7, overflow: "hidden", background: "#fff", padding: 2, flexShrink: 0 }}>
                    <Image src="/logo.png" alt="Delta Rio" fill sizes="34px" style={{ objectFit: "contain" }} />
                  </div>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, color: "#fff", fontSize: 14, letterSpacing: "0.1em" }}>DELTA RIO</div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(34,163,77,0.08)", border: "1px solid rgba(34,163,77,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--dr-text-muted)" }}
                >
                  <X size={18} />
                </button>
              </div>

              {/* NAV LINKS — all 6 links, scrollable if needed */}
              <nav
                style={{
                  flex:       1,
                  overflowY:  "auto",
                  padding:    "12px 12px 8px",
                  display:    "flex",
                  flexDirection: "column",
                  gap:        6,
                }}
              >
                {links.map((link, i) => {
                  const active = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.25, ease: E }}
                    >
                      <Link
                        href={link.href}
                        id={`mobile-link-${i}`}
                        style={{
                          display:         "flex",
                          alignItems:      "center",
                          justifyContent:  "space-between",
                          padding:         "14px 16px",
                          borderRadius:    12,
                          textDecoration:  "none",
                          fontFamily:      "'Syne',sans-serif",
                          fontWeight:      active ? 800 : 600,
                          fontSize:        18,
                          color:           active ? "#fff" : "var(--dr-text-muted)",
                          background:      active ? "rgba(34,163,77,0.12)" : "transparent",
                          border:          `1px solid ${active ? "rgba(34,163,77,0.28)" : "transparent"}`,
                          transition:      "all 0.15s",
                        }}
                      >
                        {link.label}
                        <ChevronRight size={16} style={{ color: active ? "var(--dr-green)" : "rgba(255,255,255,0.15)", flexShrink: 0 }} />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* BOTTOM CTA */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.25, ease: E }}
                style={{
                  padding:     "12px 16px",
                  paddingBottom: "max(16px, env(safe-area-inset-bottom, 16px))",
                  borderTop:   "1px solid rgba(34,163,77,0.1)",
                  display:     "flex",
                  flexDirection: "column",
                  gap:         10,
                  flexShrink:  0,
                }}
              >
                <a
                  href="tel:556430501010"
                  id="mobile-phone-cta"
                  className="dr-btn dr-btn-primary"
                  style={{ width: "100%", padding: "15px", borderRadius: 14, fontSize: 16, gap: 10, justifyContent: "center" }}
                >
                  <Phone size={18} /> (64) 3050-1010
                </a>
                <Link
                  href="/contato"
                  className="dr-btn dr-btn-outline"
                  style={{ width: "100%", padding: "13px", borderRadius: 14, fontSize: 14, justifyContent: "center" }}
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
