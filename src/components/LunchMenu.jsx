import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CONFIG from '../config';
import { Icon } from '../utils/icons';
import { fadeInUp, scaleIn } from '../utils/animations';

export default function LunchMenu() {
  const [selectedDayIdx, setSelectedDayIdx] = useState(0);
  const currentMenu = CONFIG.ementaSemanal.dias[selectedDayIdx];

  return (
    <section id="ementa" className="section bg-light">
      <div className="section-inner">
        <div className="s-head">
          <span className="s-label">Refeitório Escolar</span>
          <h2 className="s-title">Ementa Semanal</h2>
          <p className="s-desc">
            Consulte o que é servido diariamente nos refeitórios do nosso agrupamento. Refeições equilibradas preparadas por nutricionistas escolares.
          </p>
        </div>

        <div className="menu-widget">
          <div className="menu-header">
            <div className="menu-header-info">
              <span className="menu-header-title">Menu do Refeitório</span>
              <span className="menu-header-date">Semana de {CONFIG.ementaSemanal.semana}</span>
            </div>
            <Icon name="utensils" color="#fff" size={24} />
          </div>

          <div className="menu-days-nav">
            {CONFIG.ementaSemanal.dias.map((d, idx) => (
              <button
                key={idx}
                className={`menu-day-btn ${selectedDayIdx === idx ? 'active' : ''}`}
                onClick={() => setSelectedDayIdx(idx)}
              >
                <span>{d.dia.split('-')[0]}</span>
                <span className="menu-day-btn-sub">{d.data}</span>
              </button>
            ))}
          </div>

          <div className="menu-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedDayIdx}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={scaleIn}
                className="menu-details-inner"
              >
                <div className="menu-item-row">
                  <div className="menu-item-label">
                    <Icon name="soup" color="var(--c-primary)" size={18} />
                    <span>Sopa</span>
                  </div>
                  <div className="menu-item-value">{currentMenu.sopa}</div>
                </div>

                <div className="menu-item-row">
                  <div className="menu-item-label">
                    <Icon name="drumstick" color="var(--c-primary)" size={18} />
                    <span>Prato Principal</span>
                  </div>
                  <div className="menu-item-value">
                    <span className="menu-item-tag">Opção Carne/Peixe</span>
                    <div>{currentMenu.prato}</div>
                  </div>
                </div>

                <div className="menu-item-row">
                  <div className="menu-item-label">
                    <Icon name="leaf" color="var(--c-primary)" size={18} />
                    <span>Prato Vegetariano</span>
                  </div>
                  <div className="menu-item-value">
                    <span className="menu-item-tag" style={{ background: '#dcfce7', color: '#16a34a' }}>Vegetariano</span>
                    <div>{currentMenu.vegetariano}</div>
                  </div>
                </div>

                <div className="menu-item-row">
                  <div className="menu-item-label">
                    <Icon name="apple" color="var(--c-primary)" size={18} />
                    <span>Sobremesa</span>
                  </div>
                  <div className="menu-item-value">{currentMenu.sobremesa}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
