"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone } from "lucide-react";

export default function PhoneFloat() {
  const [show, setShow] = useState(false);
  const [tooltip, setTooltip] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 2500);
    return () => clearTimeout(t);
  }, []);

  if (gone) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
          style={{
            position: "fixed",
            /* Respect safe area bottom for iPhone notch */
            bottom: "max(24px, calc(env(safe-area-inset-bottom) + 16px))",
            right: "max(20px, env(safe-area-inset-right, 20px))",
            zIndex: 90,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          {/* Tooltip — only on desktop */}
          <AnimatePresence>
            {tooltip && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.18 }}
                className="dr-glass"
                style={{ borderRadius: 14, padding: "10px 16px", pointerEvents: "none", whiteSpace: "nowrap" }}
              >
                <div style={{ color: "#fff", fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 14 }}>Ligue agora!</div>
                <div style={{ color: "var(--dr-text-dim)", fontFamily: "'Space Grotesk',sans-serif", fontSize: 12, marginTop: 3 }}>(64) 3050-1010</div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Dismiss button */}
          <button
            onClick={() => setGone(true)}
            aria-label="Fechar"
            style={{ position: "absolute", top: -8, left: -8, width: 22, height: 22, borderRadius: "50%", background: "var(--dr-bg-card)", border: "1px solid rgba(34,163,77,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--dr-text-dim)", zIndex: 10 }}
          >
            <X size={12} />
          </button>

          {/* Phone button */}
          <motion.a
            href="tel:556430501010"
            aria-label="Ligar para Delta Rio (64) 3050-1010"
            id="phone-float"
            onHoverStart={() => setTooltip(true)}
            onHoverEnd={() => setTooltip(false)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            style={{
              position: "relative",
              width: 58,
              height: 58,
              borderRadius: "50%",
              background: "linear-gradient(135deg,#1a7a3a,#22a34d)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              boxShadow: "0 0 24px rgba(34,163,77,0.5), 0 0 48px rgba(34,163,77,0.1)",
              flexShrink: 0,
            }}
          >
            <span className="dr-anim-ring" style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "rgba(34,163,77,0.3)" }} />
            <Phone size={24} color="#fff" style={{ position: "relative", zIndex: 1 }} />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
