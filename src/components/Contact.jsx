import { useLanguage } from '../context/LanguageContext.jsx'
import { profile } from '../data/profile.js'
import './Contact.css'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="section section-alt">
      <div className="container contact-inner">
        <div className="section-header">
          <span className="section-eyebrow">{t('contact.eyebrow')}</span>
          <h2 className="section-title">{t('contact.heading')}</h2>
          <p className="section-subtitle">{t('contact.subtitle')}</p>
        </div>

        <div className="contact-links">
          <a href={`mailto:${profile.email}`} className="contact-link card">
            <span className="contact-link-label">{t('contact.email')}</span>
            <span className="contact-link-value">{profile.email}</span>
          </a>

          <a
            href={profile.githubUrl || '#'}
            target={profile.githubUrl ? '_blank' : undefined}
            rel={profile.githubUrl ? 'noreferrer' : undefined}
            className={`contact-link card ${profile.githubUrl ? '' : 'is-disabled'}`}
            title={profile.githubUrl ? undefined : t('contact.githubPlaceholder')}
            onClick={(e) => !profile.githubUrl && e.preventDefault()}
          >
            <span className="contact-link-label">{t('contact.github')}</span>
            <span className="contact-link-value">{profile.githubUrl || t('contact.githubPlaceholder')}</span>
          </a>

          <a
            href={profile.linkedinUrl || '#'}
            target={profile.linkedinUrl ? '_blank' : undefined}
            rel={profile.linkedinUrl ? 'noreferrer' : undefined}
            className={`contact-link card ${profile.linkedinUrl ? '' : 'is-disabled'}`}
            title={profile.linkedinUrl ? undefined : t('contact.linkedinPlaceholder')}
            onClick={(e) => !profile.linkedinUrl && e.preventDefault()}
          >
            <span className="contact-link-label">{t('contact.linkedin')}</span>
            <span className="contact-link-value">{profile.linkedinUrl || t('contact.linkedinPlaceholder')}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
