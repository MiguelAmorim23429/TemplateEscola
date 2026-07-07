import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '../utils/icons';

export default function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="chatbot-bubble-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Assistente Escolar Virtual"
        style={{ border: 'none', outline: 'none' }}
      >
        <Icon name={isOpen ? "x" : "message-square"} color="#fff" size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            style={{
              position: 'fixed',
              bottom: '90px',
              right: '24px',
              width: '320px',
              background: '#fff',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid rgba(0,0,0,0.05)',
              zIndex: 998,
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                background: 'var(--c-primary)',
                color: '#fff',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Icon name="bot" color="#fff" size={20} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Assistente de Matrículas</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.8)' }}>Online · Respostas imediatas</div>
              </div>
            </div>

            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={{ fontSize: '0.85rem', color: '#475569' }}>
                Olá! Sou o assistente virtual do agrupamento. Como posso ajudar hoje?
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href="#servicos"
                  onClick={() => setIsOpen(false)}
                  style={{
                    display: 'block',
                    background: 'var(--bg-soft)',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    textAlign: 'left',
                    color: 'var(--c-secondary)'
                  }}
                >
                  📍 Como fazer a Matrícula?
                </a>
                <a
                  href="#ementa"
                  onClick={() => setIsOpen(false)}
                  style={{
                    display: 'block',
                    background: 'var(--bg-soft)',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    textAlign: 'left',
                    color: 'var(--c-secondary)'
                  }}
                >
                  🍲 Qual a ementa de hoje?
                </a>
                <a
                  href="#faqs"
                  onClick={() => setIsOpen(false)}
                  style={{
                    display: 'block',
                    background: 'var(--bg-soft)',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    textAlign: 'left',
                    color: 'var(--c-secondary)'
                  }}
                >
                  💳 Carregar cartão escolar
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
