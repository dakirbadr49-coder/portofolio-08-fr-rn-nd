import { createContext, useContext, useMemo, useState } from 'react'
import { defaultLanguage, locales, supportedLanguages } from '../i18n/locales/index.js'

const LanguageContext = createContext(null)
const STORAGE_KEY = 'portfolio-language'

function getInitialLanguage() {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored && supportedLanguages.includes(stored)) return stored
  return defaultLanguage
}

function readPath(obj, path) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj)
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(getInitialLanguage)

  const setLanguage = (lang) => {
    if (!supportedLanguages.includes(lang)) return
    localStorage.setItem(STORAGE_KEY, lang)
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
