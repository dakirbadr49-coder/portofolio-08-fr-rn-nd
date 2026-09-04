import { useLanguage } from '../context/LanguageContext.jsx'
import './Hero.css'

const CV_FILES = {
  fr: '/cv/Badr_Dakir_CV_FR.pdf',
  en: '/cv/Badr_Dakir_CV_EN.pdf',
  nl: '/cv/Badr_Dakir_CV_NL.pdf',
}

export default function Hero() {
  const { t, language } = useLanguage()
  const cvHref = CV_FILES[language] || CV_FILES.fr

  return (
    <section id="hero" className="hero">
      <div className="container hero-inner">
        <p className="hero-greeting">{t('hero.greeting')}</p>
        <h1 className="hero-name">{t('hero.name')}</h1>
        <p className="hero-title">{t('hero.title')}</p>
        <p className="hero-tagline">{t('hero.tagline')}</p>

        <div className="hero-availability">
          <span className="hero-availability-dot" />
          {t('hero.availability')}
        </div>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            {t('hero.ctaProjects')}
          </a>
          <a href="#contact" className="btn btn-outline">
            {t('hero.ctaContact')}
          </a>
          <a href={cvHref} className="btn btn-outline" download>
            {t('hero.ctaCv')}
          </a>
        </div>
      </div>
    </section>
  )
}
