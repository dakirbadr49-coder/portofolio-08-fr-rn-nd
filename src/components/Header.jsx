import { useState } from 'react'
import { useTheme } from '../context/ThemeContext.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'
import './Header.css'

const NAV_ITEMS = [
  { href: '#hero', key: 'home' },
  { href: '#about', key: 'about' },
  { href: '#projects', key: 'projects' },
  { href: '#skills', key: 'skills' },
  { href: '#education', key: 'education' },
  { href: '#contact', key: 'contact' },
]

const LANGUAGE_LABELS = { en: 'EN', fr: 'FR', nl: 'NL' }

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.4M12 19.1v2.4M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M20.4 14.7A8.6 8.6 0 1 1 9.3 3.6a7 7 0 0 0 11.1 11.1Z" />
    </svg>
  )
}

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header">
      <div className="header-inner container">
        <a href="#hero" className="header-logo" onClick={closeMenu}>
          Badr<span>.dev</span>
        </a>

        <nav className={`header-nav ${menuOpen ? 'is-open' : ''}`}>
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <a href={item.href} onClick={closeMenu}>
                  {t(`nav.${item.key}`)}
                </a>
              </li>
            ))}
          </ul>

          <div className="header-controls-mobile">
            <LanguageSwitcher language={language} setLanguage={setLanguage} />
          </div>
        </nav>

        <div className="header-controls">
          <LanguageSwitcher language={language} setLanguage={setLanguage} />

          <button
            type="button"
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t('theme.toggleToLight') : t('theme.toggleToDark')}
            title={theme === 'dark' ? t('theme.toggleToLight') : t('theme.toggleToDark')}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            type="button"
            className="icon-btn menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span className="menu-toggle-bar" />
            <span className="menu-toggle-bar" />
            <span className="menu-toggle-bar" />
          </button>
        </div>
      </div>
    </header>
  )
}

function LanguageSwitcher({ language, setLanguage }) {
  return (
    <div className="lang-switcher" role="group" aria-label="Language">
      {Object.keys(LANGUAGE_LABELS).map((code) => (
        <button
          key={code}
          type="button"
          className={`lang-btn ${language === code ? 'is-active' : ''}`}
          onClick={() => setLanguage(code)}
        >
          {LANGUAGE_LABELS[code]}
        </button>
      ))}
    </div>
  )
}
