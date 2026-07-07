import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CONFIG from '../config';
import { Icon } from '../utils/icons';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="header-wrapper">
      <div className="header-inner">
        <a href="#" className="logo-area">
          <div className="logo-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: 22, height: 22 }}
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-name">{CONFIG.sigla}</span>
            <span className="logo-sub">{CONFIG.nomeAgrupamento}</span>
          </div>
        </a>

        <nav className="nav-menu">
          <a href="#escolas" className="nav-link">As Nossas Escolas</a>
          <a href="#servicos" className="nav-link">Serviços</a>
          <a href="#ementa" className="nav-link">Refeitório</a>
          <a href="#noticias" className="nav-link">Notícias</a>
          <a href="#avisos" className="nav-link">Avisos</a>
          <a href="#documentos" className="nav-link">Documentos</a>
          <a href="#faqs" className="nav-link">Perguntas Frequentes</a>
        </nav>

        <div className="header-cta">
          <a href="#servicos" className="cta-button">
            <Icon name="user-check" color="#fff" size={16} />
            <span>Matrículas 2026/27</span>
          </a>
        </div>

        <button 
          className="hamburger" 
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <Icon name={mobileMenuOpen ? "x" : "menu"} color="var(--c-secondary)" size={26} />
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-nav-panel"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#escolas" className="mobile-nav-link" onClick={toggleMobileMenu}>As Nossas Escolas</a>
            <a href="#servicos" className="mobile-nav-link" onClick={toggleMobileMenu}>Serviços</a>
            <a href="#ementa" className="mobile-nav-link" onClick={toggleMobileMenu}>Refeitório</a>
            <a href="#noticias" className="mobile-nav-link" onClick={toggleMobileMenu}>Notícias</a>
            <a href="#avisos" className="mobile-nav-link" onClick={toggleMobileMenu}>Avisos</a>
            <a href="#documentos" className="mobile-nav-link" onClick={toggleMobileMenu}>Documentos</a>
            <a href="#faqs" className="mobile-nav-link" onClick={toggleMobileMenu}>Perguntas Frequentes</a>
            <a href="#servicos" className="cta-button" style={{ justifyContent: 'center' }} onClick={toggleMobileMenu}>
              <Icon name="user-check" color="#fff" size={16} />
              <span>Matrículas 2026/27</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
