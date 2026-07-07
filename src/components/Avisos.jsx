import { motion } from 'framer-motion';
import CONFIG from '../config';
import { Icon } from '../utils/icons';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function Avisos() {
  return (
    <section id="avisos" className="section bg-light">
      <div className="section-inner">
        <motion.div
          className="s-head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.span className="s-label" variants={fadeInUp}>Secretaria e Alertas</motion.span>
          <motion.h2 className="s-title" variants={fadeInUp}>Avisos Importantes</motion.h2>
          <motion.p className="s-desc" variants={fadeInUp}>
            Mantenha-se a par de prazos de candidaturas, renovação de matrículas e avisos oficiais urgentes da direção.
          </motion.p>
        </motion.div>

        <motion.div
          className="avisos-list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } }
          }}
        >
          {CONFIG.avisos.map((aviso, idx) => (
            <motion.div
              key={idx}
              className="aviso-item"
              variants={fadeInUp}
              style={{ borderLeftColor: aviso.cor }}
            >
              <div className="aviso-meta">
                <span className="aviso-badge" style={{ backgroundColor: aviso.cor }}>
                  {aviso.tipo}
                </span>
                <span className="aviso-date">{aviso.data}</span>
              </div>
              <div className="aviso-body">
                <h3 className="aviso-title" style={{ color: aviso.cor }}>{aviso.titulo}</h3>
                <p className="aviso-desc">{aviso.desc}</p>
              </div>
              <div className="aviso-action">
                <Icon name="chevron-right" color="#94a3b8" size={20} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
