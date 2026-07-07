import { motion } from 'framer-motion';
import CONFIG from '../config';
import { Icon } from '../utils/icons';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function Transparency() {
  return (
    <section id="documentos" className="section bg-light">
      <div className="section-inner">
        <motion.div
          className="s-head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.span className="s-label" variants={fadeInUp}>Transparência</motion.span>
          <motion.h2 className="s-title" variants={fadeInUp}>Documentos Orientadores</motion.h2>
          <motion.p className="s-desc" variants={fadeInUp}>
            Consulte os regulamentos, planos de atividades, relatórios de autoavaliação e demais documentação oficial do agrupamento.
          </motion.p>
        </motion.div>

        <motion.div
          className="transparency-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } }
          }}
        >
          {CONFIG.documentos.map((doc, idx) => (
            <motion.div key={idx} className="doc-card" variants={fadeInUp}>
              <div>
                <div className="doc-icon">
                  <Icon name={doc.icon} color="var(--c-primary)" size={22} />
                </div>
                <h3 className="doc-title">{doc.titulo}</h3>
                <p className="doc-desc">{doc.desc}</p>
              </div>
              <a href="#documentos" className="doc-download">
                <Icon name="download" color="var(--c-primary)" size={16} />
                <span>Descarregar PDF</span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
