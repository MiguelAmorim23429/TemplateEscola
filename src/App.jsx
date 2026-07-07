import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import CONFIG from './config';
import SplashScreen from './components/SplashScreen';
import DemoBanner from './components/DemoBanner';
import UtilBar from './components/UtilBar';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import SchoolsList from './components/SchoolsList';
import Services from './components/Services';
import LunchMenu from './components/LunchMenu';
import News from './components/News';
import Avisos from './components/Avisos';
import Events from './components/Events';
import Transparency from './components/Transparency';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ChatbotButton from './components/ChatbotButton';

function applyThemeToDOM(themeIdx) {
  const theme = CONFIG.temas[themeIdx];
  const rootStyle = document.documentElement.style;
  rootStyle.setProperty('--c-primary', theme.p);
  rootStyle.setProperty('--c-secondary', theme.s);
  rootStyle.setProperty('--c-accent', theme.a);
  rootStyle.setProperty('--c-text', theme.t);
  rootStyle.setProperty('--bg-light', theme.bl);
  rootStyle.setProperty('--bg-soft', theme.bs);
  rootStyle.setProperty('--c-tint', theme.ti);
}

export default function App() {
  const [themeIdx, setThemeIdx] = useState(CONFIG.temaInicial);
  const [showSplash, setShowSplash] = useState(true);
  const [siteReady, setSiteReady] = useState(false);

  useEffect(() => {
    applyThemeToDOM(CONFIG.temaInicial);
    document.title = `${CONFIG.sigla} · ${CONFIG.nomeAgrupamento}`;
    document.body.style.overflow = 'hidden';

    // Splash duration: 2.5s display, then animate out
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleThemeChange = (idx) => {
    setThemeIdx(idx);
    applyThemeToDOM(idx);
  };

  const handleSplashExited = () => {
    setSiteReady(true);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const handleScroll = () => {
      const pixelsScrolled = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = totalHeight > 0 ? (pixelsScrolled / totalHeight) * 100 : 0;
      const progressBar = document.querySelector('.reading-progress');
      if (progressBar) {
        progressBar.style.width = `${percentage}%`;
      }
    };

    if (siteReady) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, [siteReady]);

  return (
    <>
      <AnimatePresence onExitComplete={handleSplashExited}>
        {showSplash && <SplashScreen />}
      </AnimatePresence>

      {siteReady && (
        <>
          <div className="reading-progress" aria-hidden="true" />
          <a className="skip-link" href="#escolas">Saltar para o conteúdo</a>
          <DemoBanner />
          <UtilBar themeIdx={themeIdx} onThemeChange={handleThemeChange} />
          <Header />
          <Hero />
          <StatsBar />
          <SchoolsList />
          <Services />
          <LunchMenu />
          <News />
          <Avisos />
          <Events />
          <Transparency />
          <FAQ />
          <Footer />
          <ChatbotButton />
        </>
      )}
    </>
  );
}