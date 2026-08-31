import { useLanguage } from '../context/LanguageContext.jsx'
import './About.css'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="section section-alt">
      <div className="container about-grid">
        <div className="section-header">
          <span className="section-eyebrow">{t('about.eyebrow')}</span>
          <h2 className="section-title">{t('about.heading')}</h2>
        </div>

        <div className="about-content">
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>

          <div className="about-ai-card card">
            <span className="badge">AI</span>
            <h3>{t('about.aiHeading')}</h3>
            <p>{t('about.aiText')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
