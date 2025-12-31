import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

// Animation variants
const pageVariants = {
  initial: { opacity: 0, y: 25, scale: 0.98 },
  in: { opacity: 1, y: 0, scale: 1 },
  out: { opacity: 0, y: -25, scale: 0.98 },
};

const pageTransition = {
  type: "spring",
  stiffness: 80,
  damping: 20,
  duration: 0.6,
};

export default function PageTransition({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setLoading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((old) => {
        if (old < 100) return old + 10;
        clearInterval(interval);
        setLoading(false);
        return 100;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        style={{
          width: "100%",
          minHeight: "100vh", // full viewport height
          overflowX: "hidden",
          position: "relative",
          zIndex: 0, // ensure children appear above
        }}
      >
        {/* Loading Bar */}
        {loading && (
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              height: "4px",
              background: "linear-gradient(90deg, #007bff, #00c3ff)",
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: 9999,
              borderRadius: "0 4px 4px 0",
            }}
          />
        )}

        {children}
      </motion.div>
    </AnimatePresence>
  );
}
