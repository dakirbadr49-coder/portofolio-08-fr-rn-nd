import { useLanguage } from '../context/LanguageContext.jsx'
import LocationMap from './LocationMap.jsx'
import './Education.css'

export default function Education() {
  const { t } = useLanguage()
  const items = t('education.items')

  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">{t('education.eyebrow')}</span>
          <h2 className="section-title">{t('education.heading')}</h2>
          <p className="section-subtitle">{t('education.subtitle')}</p>
        </div>

        <div className="education-grid">
          <ol className="education-timeline">
            {items.map((item) => (
              <li key={item.title} className="education-item card">
                <span className="education-period">{item.period}</span>
                <h3 className="education-title">{item.title}</h3>
                <p className="education-place">{item.place}</p>
                <p className="education-description">{item.description}</p>
              </li>
            ))}
          </ol>

          <div className="education-map-block">
            <h3 className="education-map-heading">{t('education.locationHeading')}</h3>
            <LocationMap />
            <p className="education-map-caption">{t('education.locationNote')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
