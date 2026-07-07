import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CONFIG from '../config';
import { Icon } from '../utils/icons';
import { fadeInUp } from '../utils/animations';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faqs" className="section bg-soft">
      <div className="section-inner">
        <div className="s-head">
          <span className="s-label">Suporte</span>
          <h2 className="s-title">Perguntas Frequentes (FAQ)</h2>
          <p className="s-desc">
            Esclareça as dúvidas mais comuns dos pais, encarregados de educação e alunos sobre o funcionamento diário do agrupamento.
          </p>
        </div>

        <div className="faq-list">
          {CONFIG.faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                className="faq-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <button
                  className="faq-question-btn"
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <Icon
                    name={isOpen ? "minus" : "plus"}
                    color="var(--c-secondary)"
                    size={18}
                    style={{ transform: `rotate(${isOpen ? 180 : 0}deg)`, transition: 'transform 0.3s ease' }}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="faq-answer-inner">{faq.r}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
