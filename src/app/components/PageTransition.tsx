// src/app/components/PageTransition.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        key="page"
        initial={{ opacity: 0, x: '100vw' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: '-100vw' }}
        transition={{ duration: 0.5 }}
        className="page-transition"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
