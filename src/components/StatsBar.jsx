import { motion } from 'framer-motion';
import CONFIG from '../config';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function StatsBar() {
  return (
    <section className="stats-bar">
      <motion.div
        className="stats-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {CONFIG.stats.map((stat, i) => (
          <motion.div key={i} className="stat-card" variants={fadeInUp}>
            <div className="stat-number">
              {stat.valor.toLocaleString('pt-PT')}
              {stat.sufixo}
            </div>
            <div className="stat-label">{stat.label}</div>
            <div className="stat-bar-outer" aria-hidden="true">
              <motion.div
                className="stat-bar-inner"
                initial={{ width: 0 }}
                whileInView={{ width: `${stat.barra * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeOut', delay: i * 0.1 }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
