import { useLanguage } from '../context/LanguageContext.jsx'
import './Hero.css'

export default function Hero() {
  const { t } = useLanguage()

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
        </div>
      </div>
    </section>
  )
}
