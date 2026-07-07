import CONFIG from '../config';
import { Icon } from '../utils/icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <div className="footer-logo-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: 20, height: 20 }}
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                </svg>
              </div>
              <span className="footer-logo-name">{CONFIG.sigla}</span>
            </a>
            <p className="footer-desc">
              Promovemos um ensino inclusivo, tecnológico e de elevada qualidade pedagógica, formando cidadãos conscientes e preparados para os desafios globais.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Icon name="facebook" color="#94a3b8" size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Icon name="instagram" color="#94a3b8" size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Icon name="youtube" color="#94a3b8" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Contacto Sede</h4>
            <ul className="footer-links" style={{ listStyle: 'none' }}>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.9rem' }}>
                <Icon name="map-pin" color="#94a3b8" size={16} style={{ marginTop: '3px' }} />
                <span>{CONFIG.contacto.morada.replace('\n', ', ')}</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '0.9rem' }}>
                <Icon name="phone" color="#94a3b8" size={16} />
                <span>{CONFIG.contacto.telefone}</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '0.9rem' }}>
                <Icon name="mail" color="#94a3b8" size={16} />
                <a href={`mailto:${CONFIG.contacto.email}`} style={{ color: '#94a3b8' }}>{CONFIG.contacto.email}</a>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '0.9rem' }}>
                <Icon name="clock" color="#94a3b8" size={16} />
                <span>{CONFIG.contacto.horario}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Plataformas</h4>
            <ul className="footer-links" style={{ listStyle: 'none' }}>
              <li><a href={CONFIG.plataformas.giae} target="_blank" rel="noopener noreferrer" className="footer-link">GIAE / Cartões</a></li>
              <li><a href={CONFIG.plataformas.inovar} target="_blank" rel="noopener noreferrer" className="footer-link">Inovar Consulta</a></li>
              <li><a href={CONFIG.plataformas.moodle} target="_blank" rel="noopener noreferrer" className="footer-link">Moodle AE</a></li>
              <li><a href={CONFIG.plataformas.teams} target="_blank" rel="noopener noreferrer" className="footer-link">Teams AE</a></li>
              <li><a href={CONFIG.plataformas.mega} target="_blank" rel="noopener noreferrer" className="footer-link">Manuais MEGA</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Navegação</h4>
            <ul className="footer-links" style={{ listStyle: 'none' }}>
              <li><a href="#escolas" className="footer-link">Nossas Escolas</a></li>
              <li><a href="#servicos" className="footer-link">Serviços e Links</a></li>
              <li><a href="#ementa" className="footer-link">Refeitório</a></li>
              <li><a href="#noticias" className="footer-link">Notícias</a></li>
              <li><a href="#documentos" className="footer-link">Documentos</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>{CONFIG.contacto.copyright}</div>
          <div className="footer-credits">
            <span>Desenvolvido com carinho para as Escolas de Portugal</span>
            <span>·</span>
            <a href="#" style={{ textDecoration: 'underline' }}>Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
