"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PhoneFloat from "@/components/ui/WhatsAppFloat";
import { Phone, MapPin, Clock, CheckCircle, Send } from "lucide-react";
import { useMobile } from "@/hooks/useMobile";

const E = [0.22, 1, 0.36, 1] as [number, number, number, number];
const SUBJECTS = ["Defensivos Agrícolas","Fertilizantes e Adubos","Corretivos do Solo","Sementes","Consultoria Agronômica","Produtos Veterinários","Outros"];

export default function ContatoPage() {
  const isMobile = useMobile();
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", assunto: "", mensagem: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1200);
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ position: "relative", paddingTop: isMobile ? 100 : 120, paddingBottom: isMobile ? 40 : 56, background: "var(--dr-bg)", overflow: "hidden" }}>
          <div className="dr-dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.18 }} />
          <div className="dr-container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: E }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}><div className="dr-badge">Estamos aqui</div></div>
              <h1 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, color: "#fff", fontSize: isMobile ? "clamp(2rem,10vw,2.8rem)" : "clamp(2.4rem,6vw,4.5rem)", lineHeight: 1.05, marginBottom: 14 }}>
                Entre em <span className="dr-text-green">Contato</span>
              </h1>
              <p style={{ color: "var(--dr-text-muted)", maxWidth: 480, margin: "0 auto", lineHeight: 1.7, fontSize: isMobile ? 14 : "clamp(1rem,2vw,1.1rem)" }}>
                Nossa equipe está pronta para atendê-lo com as melhores soluções.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section style={{ padding: isMobile ? "32px 0 72px" : "48px 0 80px", background: "var(--dr-bg)" }}>
          <div className="dr-container">
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 32 : 48, alignItems: "start" }}>
              {/* Form */}
              <motion.div initial={{ opacity: 0, y: isMobile ? 20 : 0, x: isMobile ? 0 : -30 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: E }}>
                <div className="dr-glass" style={{ borderRadius: isMobile ? 20 : 24, padding: isMobile ? "24px 20px" : "36px 40px" }}>
                  <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, color: "#fff", fontSize: isMobile ? 18 : 22, marginBottom: 4 }}>Envie sua mensagem</h2>
                  <p style={{ color: "var(--dr-text-dim)", fontSize: 13, marginBottom: 24, fontFamily: "'Space Grotesk'" }}>Responderemos em breve.</p>
                  <AnimatePresence mode="wait">
                    {sent ? (
                      <motion.div key="ok" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: "center", padding: "40px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
                        <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(34,163,77,0.12)", border: "1px solid rgba(34,163,77,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <CheckCircle size={26} style={{ color: "var(--dr-green)" }} />
                        </div>
                        <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, color: "#fff", fontSize: 18 }}>Mensagem enviada!</h3>
                        <p style={{ color: "var(--dr-text-muted)", fontSize: 14 }}>Nossa equipe entrará em contato.</p>
                        <button onClick={() => { setSent(false); setForm({ nome:"",email:"",telefone:"",assunto:"",mensagem:"" }); }} className="dr-btn dr-btn-outline" style={{ padding: "10px 22px", borderRadius: 12, fontSize: 13, marginTop: 8 }}>
                          Enviar outra mensagem
                        </button>
                      </motion.div>
                    ) : (
                      <motion.form key="form" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 12 }}>
                          <div>
                            <label style={{ display: "block", color: "var(--dr-text-dim)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6, fontFamily: "'Space Grotesk'" }}>Nome *</label>
                            <input required className="dr-input" placeholder="Seu nome completo" value={form.nome} onChange={e => setForm(f => ({ ...f, nome: e.target.value }))} />
                          </div>
                          <div>
                            <label style={{ display: "block", color: "var(--dr-text-dim)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6, fontFamily: "'Space Grotesk'" }}>Telefone *</label>
                            <input required className="dr-input" placeholder="(64) 9 0000-0000" value={form.telefone} onChange={e => setForm(f => ({ ...f, telefone: e.target.value }))} />
                          </div>
                        </div>
                        <div>
                          <label style={{ display: "block", color: "var(--dr-text-dim)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6, fontFamily: "'Space Grotesk'" }}>E-mail</label>
                          <input type="email" className="dr-input" placeholder="seu@email.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                        </div>
                        <div>
                          <label style={{ display: "block", color: "var(--dr-text-dim)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6, fontFamily: "'Space Grotesk'" }}>Assunto *</label>
                          <select required className="dr-input" value={form.assunto} onChange={e => setForm(f => ({ ...f, assunto: e.target.value }))}>
                            <option value="">Selecione o assunto</option>
                            {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>
                        <div>
                          <label style={{ display: "block", color: "var(--dr-text-dim)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6, fontFamily: "'Space Grotesk'" }}>Mensagem *</label>
                          <textarea required rows={isMobile ? 4 : 5} className="dr-input" style={{ resize: "none" }} placeholder="Descreva sua necessidade..." value={form.mensagem} onChange={e => setForm(f => ({ ...f, mensagem: e.target.value }))} />
                        </div>
                        <button type="submit" disabled={loading} className="dr-btn dr-btn-primary" style={{ padding: "16px", borderRadius: 14, fontSize: 15, gap: 10, width: "100%", opacity: loading ? 0.7 : 1 }}>
                          {loading ? "Enviando..." : <><Send size={16} /> Enviar Mensagem</>}
                        </button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Info */}
              <motion.div initial={{ opacity: 0, y: isMobile ? 20 : 0, x: isMobile ? 0 : 30 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.8, delay: 0.35, ease: E }} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {/* Phone — big on mobile */}
                <a href="tel:556430501010" className="dr-glass" style={{ borderRadius: 18, padding: "20px 22px", display: "flex", alignItems: "center", gap: 16, textDecoration: "none" }}>
                  <div style={{ width: 50, height: 50, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: "rgba(34,163,77,0.12)", border: "1px solid rgba(34,163,77,0.24)", color: "var(--dr-green)" }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <div style={{ color: "var(--dr-text-dim)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 4, fontFamily: "'Space Grotesk'" }}>Telefone</div>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, color: "#fff", fontSize: isMobile ? 24 : 28 }}>(64) 3050-1010</div>
                    <div style={{ color: "var(--dr-green)", fontSize: 11, marginTop: 2, fontFamily: "'Space Grotesk'" }}>Toque para ligar</div>
                  </div>
                </a>

                {[
                  { Icon: MapPin, label: "Endereço", accent: "#22a34d", val: "R. das Turmalinas, 208 — Qd. 45\nParq. Bandeirante · Rio Verde — GO\nCEP 75905-630", href: null },
                  { Icon: Clock,  label: "Horário",  accent: "#c9a84c", val: "Seg a Sexta: 7h às 18h\nSábado: 7h às 12h", href: null },
                ].map(({ Icon, label, accent, val, href }) => (
                  <div key={label} className="dr-glass" style={{ borderRadius: 18, padding: "18px 22px", display: "flex", alignItems: "flex-start", gap: 14 }}>
                    <div style={{ width: 42, height: 42, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: `${accent}14`, border: `1px solid ${accent}24`, color: accent }}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <div style={{ color: "var(--dr-text-dim)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 5, fontFamily: "'Space Grotesk'" }}>{label}</div>
                      <div style={{ color: "#fff", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 13.5, lineHeight: 1.65, whiteSpace: "pre-line" }}>{val}</div>
                    </div>
                  </div>
                ))}

                {/* Map */}
                <div style={{ borderRadius: 18, overflow: "hidden", border: "1px solid rgba(34,163,77,0.18)", aspectRatio: isMobile ? "16/9" : "4/3", position: "relative" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.154!2d-50.92771!3d-17.79614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9367c5b1a7c7fd21%3A0x0!2zUmlvIFZlcmRl!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
                    width="100%" height="100%"
                    style={{ border: 0, filter: "invert(0.9) hue-rotate(130deg) saturate(0.5) brightness(0.6)", position: "absolute", inset: 0 }}
                    allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa Delta Rio Rio Verde GO"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <PhoneFloat />
    </>
  );
}
