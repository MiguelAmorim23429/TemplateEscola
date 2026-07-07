import { motion } from 'framer-motion';
import CONFIG from '../config';
import { Icon } from '../utils/icons';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function Events() {
  return (
    <section id="eventos" className="section bg-soft">
      <div className="section-inner">
        <div className="events-section">
          <div className="events-left">
            <div className="s-head" style={{ textAlign: 'left', margin: '0 0 40px 0', maxWidth: 'none' }}>
              <span className="s-label">Calendário</span>
              <h2 className="s-title">Próximos Eventos</h2>
              <p className="s-desc">
                Fique a par das reuniões de encarregados de educação, festas escolares, conselhos e marcos do calendário letivo.
              </p>
            </div>

            <motion.div
              className="event-list"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } }
              }}
            >
              {CONFIG.eventos.map((e, idx) => (
                <motion.div key={idx} className="event-item" variants={fadeInUp}>
                  <div className="event-date-box">
                    <span className="event-day">{e.dia}</span>
                    <span className="event-mes">{e.mes}</span>
                  </div>
                  <div className="event-details">
                    <h3 className="event-title">{e.titulo}</h3>
                    <div className="event-meta">
                      <div className="event-meta-item">
                        <Icon name="map-pin" color="#64748b" size={14} />
                        <span>{e.local}</span>
                      </div>
                      <div className="event-meta-item">
                        <Icon name="clock" color="#64748b" size={14} />
                        <span>{e.hora}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="events-right" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <motion.div
              className="event-promo-card"
              style={{
                background: 'linear-gradient(135deg, var(--c-primary), var(--c-secondary))',
                color: '#fff',
                padding: '40px',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-lg)',
                position: 'relative',
                overflow: 'hidden'
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div style={{ position: 'relative', zIndex: 2 }}>
                <Icon name="calendar-days" color="#fff" size={40} style={{ marginBottom: '20px' }} />
                <h3 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '16px', lineHeight: 1.2 }}>Precisa do Calendário Escolar Oficial?</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.95rem', marginBottom: '28px' }}>
                  Consulte os períodos letivos, interrupções escolares (férias de Natal, Carnaval, Páscoa e Verão) e datas de exames nacionais fixadas pelo Ministério da Educação.
                </p>
                <a 
                  href="https://www.dgeste.mec.pt" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cta-button" 
                  style={{ background: 'var(--c-accent)', color: 'var(--c-secondary)' }}
                >
                  <Icon name="download" color="var(--c-secondary)" size={16} />
                  <span>Descarregar PDF</span>
                </a>
              </div>
              <div 
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  right: '-20px',
                  width: '120px',
                  height: '120px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '50%',
                  zIndex: 1
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
