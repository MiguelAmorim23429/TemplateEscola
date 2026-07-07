import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CONFIG from '../config';
import { Icon } from '../utils/icons';
import { fadeInUp, scaleIn } from '../utils/animations';

export default function SchoolsList() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const selectedSchool = CONFIG.escolas[selectedIdx];

  return (
    <section id="escolas" className="section bg-light">
      <div className="section-inner">
        <div className="s-head">
          <span className="s-label">O Agrupamento</span>
          <h2 className="s-title">As Nossas Escolas</h2>
          <p className="s-desc">
            O agrupamento reúne vários estabelecimentos de ensino, desde a educação pré-escolar até ao ensino secundário e profissional.
          </p>
        </div>

        <div className="schools-grid">
          <div className="schools-list-sidebar">
            {CONFIG.escolas.map((school, idx) => (
              <button
                key={idx}
                className={`school-tab-button ${selectedIdx === idx ? 'active' : ''}`}
                onClick={() => setSelectedIdx(idx)}
              >
                <div className="school-tab-info">
                  <span className="school-tab-name">{school.nome}</span>
                  <span className="school-tab-type">{school.tipo}</span>
                </div>
                <Icon
                  name="chevron-right"
                  color={selectedIdx === idx ? '#fff' : 'var(--c-primary)'}
                  size={18}
                />
              </button>
            ))}
          </div>

          <div className="school-detail-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIdx}
                className="school-detail-view"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={scaleIn}
              >
                <img
                  src={selectedSchool.imagem}
                  alt={selectedSchool.nome}
                  className="school-detail-img"
                />
                <div className="school-detail-body">
                  <h3 className="school-detail-title">{selectedSchool.nome}</h3>
                  <div className="school-detail-niveis">
                    <strong>Níveis de Ensino:</strong> {selectedSchool.niveis}
                  </div>

                  <div className="school-info-items">
                    <div className="school-info-item">
                      <Icon name="map-pin" color="var(--c-primary)" size={20} />
                      <span className="school-info-text">{selectedSchool.morada}</span>
                    </div>

                    <div className="school-info-item">
                      <Icon name="phone" color="var(--c-primary)" size={20} />
                      <span className="school-info-text">{selectedSchool.telefone}</span>
                    </div>

                    <div className="school-info-item">
                      <Icon name="mail" color="var(--c-primary)" size={20} />
                      <a href={`mailto:${selectedSchool.email}`} className="school-info-text" style={{ color: 'var(--c-primary)', fontWeight: 650 }}>
                        {selectedSchool.email}
                      </a>
                    </div>

                    <div className="school-info-item">
                      <Icon name="map" color="var(--c-primary)" size={20} />
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${selectedSchool.coordenadas}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="school-info-text"
                        style={{ color: 'var(--c-primary)', textDecoration: 'underline' }}
                      >
                        Ver Localização no Mapa
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
