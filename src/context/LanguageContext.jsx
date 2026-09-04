import { createContext, useContext, useMemo, useState } from 'react'
import { defaultLanguage, locales, supportedLanguages } from '../i18n/locales/index.js'

const LanguageContext = createContext(null)

function readPath(obj, path) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj)
}

export function LanguageProvider({ children }) {
  // Always start in the default language (English) — the site should never
  // reopen in a previously chosen language on a fresh visit/refresh.
  const [language, setLanguageState] = useState(defaultLanguage)

  const setLanguage = (lang) => {
    if (!supportedLanguages.includes(lang)) return
    setLanguageState(lang)
  }

  const t = useMemo(() => {
    return (path) => {
      const value = readPath(locales[language], path)
      if (value !== undefined) return value
      const fallback = readPath(locales[defaultLanguage], path)
      return fallback !== undefined ? fallback : path
    }
  }, [language])

  const value = useMemo(
    () => ({ language, setLanguage, t, supportedLanguages }),
    [language, t]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
