import { useLanguage } from '../context/LanguageContext.jsx'
import { skills } from '../data/skills.js'
import './Skills.css'

export default function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">{t('skills.eyebrow')}</span>
          <h2 className="section-title">{t('skills.heading')}</h2>
          <p className="section-subtitle">{t('skills.subtitle')}</p>
        </div>

        <ul className="skills-list">
          {skills.map((skill) => (
            <li key={skill.name} className="badge skills-badge">
              {skill.name}
              {skill.qualifierKey ? ` (${t(`skills.qualifiers.${skill.qualifierKey}`)})` : ''}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
