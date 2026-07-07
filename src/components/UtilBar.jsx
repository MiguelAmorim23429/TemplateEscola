import CONFIG from '../config';
import { Icon } from '../utils/icons';

export default function UtilBar({ themeIdx, onThemeChange }) {
  return (
    <div className="util-bar">
      <div className="util-links">
        <a href={CONFIG.plataformas.giae} target="_blank" rel="noopener noreferrer" className="util-link">
          <Icon name="credit-card" color="var(--c-primary)" size={14} />
          <span>GIAE / Cartão</span>
        </a>
        <a href={CONFIG.plataformas.inovar} target="_blank" rel="noopener noreferrer" className="util-link">
          <Icon name="graduation-cap" color="var(--c-primary)" size={14} />
          <span>Inovar Consulta</span>
        </a>
        <a href={CONFIG.plataformas.moodle} target="_blank" rel="noopener noreferrer" className="util-link">
          <Icon name="book" color="var(--c-primary)" size={14} />
          <span>Moodle</span>
        </a>
        <a href={CONFIG.plataformas.teams} target="_blank" rel="noopener noreferrer" className="util-link">
          <Icon name="video" color="var(--c-primary)" size={14} />
          <span>Teams</span>
        </a>
        <a href={CONFIG.plataformas.mega} target="_blank" rel="noopener noreferrer" className="util-link">
          <Icon name="ticket" color="var(--c-primary)" size={14} />
          <span>Manuais MEGA</span>
        </a>
      </div>

      <div className="theme-selector">
        <span>Esquema de Cores:</span>
        <div className="theme-dots">
          {CONFIG.temas.map((theme, i) => (
            <button
              key={i}
              className={`theme-dot ${themeIdx === i ? 'active' : ''}`}
              style={{ backgroundColor: theme.p }}
              onClick={() => onThemeChange(i)}
              title={theme.nome}
              aria-label={`Mudar para tema ${theme.nome}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
