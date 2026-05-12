"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "#fcfdff" }}
        >
          <div className="text-center">
            <p className="text-3xl font-black tracking-[6px] text-dark font-heading mb-6">
              MIREYA
            </p>
            <div className="preloader-bar mx-auto mb-4">
              <div className="preloader-fill" />
            </div>
            <p className="mry-label text-muted">Please wait</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
