import { motion } from 'framer-motion';
import CONFIG from '../config';
import { Icon } from '../utils/icons';
import { fadeInUp, fadeInLeft, fadeInRight } from '../utils/animations';

export default function Hero() {
  return (
    <section className="hero">
      <div className="section-inner">
        <div className="hero-grid">
          <motion.div
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            <motion.div className="hero-tag" variants={fadeInUp}>
              <Icon name="sparkles" color="var(--c-primary)" size={16} />
              <span>Ano Letivo 2026 / 2027</span>
            </motion.div>
            
            <motion.h1 className="hero-title" variants={fadeInUp}>
              Construímos o <span>Futuro</span> através do Conhecimento
            </motion.h1>
            
            <motion.p className="hero-desc" variants={fadeInUp}>
              Bem-vindo ao portal oficial do {CONFIG.nomeAgrupamento}. 
              Aqui encontra toda a informação pedagógica, serviços digitais, 
              e canais de comunicação com a nossa comunidade escolar.
            </motion.p>
            
            <motion.div className="hero-actions" variants={fadeInUp}>
              <a href="#escolas" className="cta-button">
                <Icon name="search" color="#fff" size={16} />
                <span>Explorar Escolas</span>
              </a>
              <a href="#ementa" className="btn-secondary">
                <Icon name="utensils" color="var(--c-primary)" size={16} />
                <span>Ver Ementa Hoje</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image-pane"
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
          >
            <div className="hero-img-container">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop&q=80" 
                alt="Alunos a estudar na biblioteca escolar" 
                className="hero-img"
              />
              <div className="hero-img-overlay">
                <div className="hero-card-title">Escola de Referência</div>
                <div className="hero-card-desc">Ensino de excelência, criatividade e responsabilidade social.</div>
              </div>
            </div>

            <div className="hero-deco-badge">
              <div className="hero-deco-icon">
                <Icon name="graduation-cap" color="var(--c-primary)" size={20} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--c-secondary)', lineHeight: 1 }}>100%</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>Foco no Aluno</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
