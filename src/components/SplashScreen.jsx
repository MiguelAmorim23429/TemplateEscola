import { motion } from 'framer-motion';
import CONFIG from '../config';

export default function SplashScreen() {
  return (
    <motion.div
      className="splash-bg"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: -100,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
      }}
    >
      <motion.div
        className="splash-logo-container"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="splash-pulse" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: 80, height: 80 }}
        >
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
        </svg>
      </motion.div>
      <motion.h1
        className="splash-title"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {CONFIG.nomeAgrupamento}
      </motion.h1>
      <motion.p
        className="splash-subtitle"
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        Inovação & Conhecimento
      </motion.p>
    </motion.div>
  );
}
