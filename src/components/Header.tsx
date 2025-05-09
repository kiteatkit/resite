import React, { useState } from 'react';
import { ChevronRight, Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ContactModal from './ContactModal';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ru' : 'en');
  };

  return (
    <>
      <header className="fixed w-full top-0 z-50 bg-solarized-base3/80 backdrop-blur-md border-b border-solarized-base1/20 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="font-mono text-solarized-blue text-xl font-semibold">BYTE</span>
            <span className="font-mono text-solarized-cyan ml-1">CRAFT</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <a 
              href="#services" 
              className="font-mono text-solarized-base01 hover:text-solarized-blue transition-colors"
              onClick={e => {
                e.preventDefault();
                const services = document.getElementById('services');
                if (services) {
                  services.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {t('nav.services')}
            </a>
            <a 
              href="#process" 
              className="font-mono text-solarized-base01 hover:text-solarized-blue transition-colors"
              onClick={e => {
                e.preventDefault();
                const process = document.getElementById('process');
                if (process) {
                  process.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {t('nav.process')}
            </a>
            <a 
              href="#about" 
              className="font-mono text-solarized-base01 hover:text-solarized-blue transition-colors"
              onClick={e => {
                e.preventDefault();
                const about = document.getElementById('about');
                if (about) {
                  about.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {t('nav.about')}
            </a>
            <Button 
              variant="outline" 
              className="font-mono border-solarized-blue text-solarized-blue hover:bg-solarized-blue/10"
              onClick={() => setContactModalOpen(true)}
            >
              <span className="flex items-center gap-2">
                {t('nav.contact')} <ChevronRight className="h-4 w-4" />
              </span>
            </Button>
            <Button
              variant="ghost"
              className="font-mono text-solarized-base01 hover:text-solarized-blue"
              onClick={toggleLanguage}
            >
              {language.toUpperCase()}
            </Button>
          </nav>
          <button className="md:hidden p-2" onClick={() => setMobileOpen(v => !v)} aria-label="Open menu">
            <Menu className="w-7 h-7 text-solarized-blue" />
          </button>
        </div>
        {mobileOpen && (
          <div className="fixed top-16 right-4 z-50 bg-solarized-base3/95 rounded-lg shadow-lg flex flex-col items-center justify-center gap-4 text-center md:hidden w-64 py-6 px-4">
            <button className="absolute top-2 right-2 text-xl" onClick={() => setMobileOpen(false)} aria-label="Close menu">✕</button>
            <a onClick={() => handleNavClick('services')} className="font-mono text-base text-solarized-base01 hover:text-solarized-blue transition-colors cursor-pointer w-full">{t('nav.services')}</a>
            <a onClick={() => handleNavClick('process')} className="font-mono text-base text-solarized-base01 hover:text-solarized-blue transition-colors cursor-pointer w-full">{t('nav.process')}</a>
            <a onClick={() => handleNavClick('about')} className="font-mono text-base text-solarized-base01 hover:text-solarized-blue transition-colors cursor-pointer w-full">{t('nav.about')}</a>
            <a 
              onClick={() => {
                setMobileOpen(false);
                setContactModalOpen(true);
              }} 
              className="font-mono text-base text-solarized-blue border border-solarized-blue rounded px-4 py-2 mt-2 hover:bg-solarized-blue/10 transition-colors cursor-pointer flex items-center justify-center gap-2 w-full"
            >
              {t('nav.contact')} <ChevronRight className="h-4 w-4" />
            </a>
            <Button
              variant="ghost"
              className="font-mono text-solarized-base01 hover:text-solarized-blue w-full"
              onClick={toggleLanguage}
            >
              {language.toUpperCase()}
            </Button>
          </div>
        )}
      </header>
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </>
  );
};

export default Header;
