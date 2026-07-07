import { motion } from 'framer-motion';
import CONFIG from '../config';
import { Icon } from '../utils/icons';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function News() {
  return (
    <section id="noticias" className="section bg-soft">
      <div className="section-inner">
        <motion.div
          className="s-head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.span className="s-label" variants={fadeInUp}>Atualidade</motion.span>
          <motion.h2 className="s-title" variants={fadeInUp}>Notícias e Destaques</motion.h2>
          <motion.p className="s-desc" variants={fadeInUp}>
            Acompanhe os projetos, conquistas e atividades que marcam a vida quotidiana das nossas escolas.
          </motion.p>
        </motion.div>

        <motion.div
          className="news-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {CONFIG.noticias.map((item, idx) => (
            <motion.article key={idx} className="news-card" variants={fadeInUp}>
              <div className="news-img-box">
                <img src={item.img} alt={item.titulo} className="news-img" />
                <span className="news-tag">{item.tag}</span>
              </div>
              <div className="news-body">
                <div className="news-date">
                  <Icon name="calendar" color="#94a3b8" size={14} />
                  <span>{item.data}</span>
                </div>
                <h3 className="news-title">{item.titulo}</h3>
                <p className="news-excerpt">{item.excerto}</p>
                <a href="#noticias" className="news-read-more">
                  <span>Ler mais</span>
                  <Icon name="arrow-right" color="var(--c-primary)" size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
