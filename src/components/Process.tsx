import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const ProcessStep = ({ number, title, description }: { number: number, title: string, description: string }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 items-start">
      <div className="flex-shrink-0">
        <div className="bg-solarized-base3 border border-solarized-blue/30 w-16 h-16 rounded-full flex items-center justify-center font-mono text-2xl text-solarized-blue shadow-lg">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-mono font-semibold text-solarized-base01 mb-2">{title}</h3>
        <p className="text-solarized-base00">{description}</p>
      </div>
    </div>
  );
};

const Process = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      title: t('process.steps.research.title'),
      description: t('process.steps.research.description')
    },
    {
      title: t('process.steps.design.title'),
      description: t('process.steps.design.description')
    },
    {
      title: t('process.steps.development.title'),
      description: t('process.steps.development.description')
    }
  ];

  return (
    <section id="process" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-2/5">
            <span className="font-mono text-solarized-blue">{t('process.title')}</span>
            <h2 className="section-title">{t('process.subtitle')} <span className="text-solarized-cyan">{t('process.subtitleHighlight')}</span></h2>
            <p className="section-subtitle">{t('process.tagline')}</p>
          </div>
          
          <div className="md:w-3/5">
            <div className="space-y-12 relative">
              {steps.map((step, index) => (
                <ProcessStep 
                  key={index}
                  number={index + 1}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
