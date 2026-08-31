import { useLanguage } from '../context/LanguageContext.jsx'
import './Footer.css'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {year} Badr Dakir</span>
        <span>{t('footer.rights')}</span>
      </div>
    </footer>
  )
}
