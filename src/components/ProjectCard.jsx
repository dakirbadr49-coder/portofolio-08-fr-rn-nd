import './ProjectCard.css'

export default function ProjectCard({ project, title, description, demoLabel, codeLabel, imagePlaceholder }) {
  const { techs, image, demoUrl, githubUrl } = project

  return (
    <article className="project-card card">
      <div className="project-card-media">
        {image ? (
          <img src={image} alt={title} loading="lazy" />
        ) : (
          <span className="project-card-placeholder">{imagePlaceholder}</span>
        )}
      </div>

      <div className="project-card-body">
        <h3 className="project-card-title">{title}</h3>

        <ul className="project-card-techs">
          {techs.map((tech) => (
            <li key={tech} className="badge">
              {tech}
            </li>
          ))}
        </ul>

        <p className="project-card-description">{description}</p>

        <div className="project-card-actions">
          <LinkButton href={demoUrl} label={demoLabel} variant="primary" />
          <LinkButton href={githubUrl} label={codeLabel} variant="outline" />
        </div>
      </div>
    </article>
  )
}

function LinkButton({ href, label, variant }) {
  const hasUrl = Boolean(href)
  return (
    <a
      href={hasUrl ? href : '#'}
      target={hasUrl ? '_blank' : undefined}
      rel={hasUrl ? 'noreferrer' : undefined}
      className={`btn btn-sm btn-${variant} ${hasUrl ? '' : 'is-disabled'}`}
      aria-disabled={!hasUrl}
      title={hasUrl ? undefined : 'TODO: add this URL in src/data/projects.js'}
      onClick={(event) => {
        if (!hasUrl) event.preventDefault()
      }}
    >
      {label}
    </a>
  )
}
