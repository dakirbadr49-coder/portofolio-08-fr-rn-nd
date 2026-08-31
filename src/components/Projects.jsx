import { useLanguage } from '../context/LanguageContext.jsx'
import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'
import './Projects.css'

export default function Projects() {
  const { t } = useLanguage()
  const texts = t('projects.items')

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">{t('projects.eyebrow')}</span>
          <h2 className="section-title">{t('projects.heading')}</h2>
          <p className="section-subtitle">{t('projects.subtitle')}</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              title={texts[index]?.title}
              description={texts[index]?.description}
              demoLabel={t('projects.demo')}
              codeLabel={t('projects.code')}
              imagePlaceholder={t('projects.imagePlaceholder')}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
