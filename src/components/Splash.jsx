import { useEffect, useState } from 'react'
import './Splash.css'

const FADE_START_MS = 900
const REMOVE_MS = 1300

export default function Splash() {
  const [visible, setVisible] = useState(true)
  const [fadingOut, setFadingOut] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadingOut(true), FADE_START_MS)
    const removeTimer = setTimeout(() => setVisible(false), REMOVE_MS)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = visible ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [visible])

  if (!visible) return null

  return (
    <div className={`splash ${fadingOut ? 'is-fading' : ''}`} aria-hidden="true">
      <div className="splash-content">
        <div className="splash-logo">
          <span className="splash-logo-name">Dakir</span>
          <span className="splash-logo-dot">.dev</span>
        </div>
        <span className="splash-underline" />
      </div>
    </div>
  )
}
