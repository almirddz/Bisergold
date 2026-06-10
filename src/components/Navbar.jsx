import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import './Navbar.css'

const LANGS = [
  { code: 'sq', label: 'SQ' },
  { code: 'mk', label: 'МК' },
  { code: 'en', label: 'EN' },
]

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          <Logo size={34} />
          <span className="navbar__logo-text">BISER <span>GOLD</span></span>
        </Link>

        <ul className={`navbar__links ${menuOpen ? 'open' : ''}`}>
          <li><a href="/#home" onClick={() => setMenuOpen(false)}>{t('nav.home')}</a></li>
          <li><a href="/#about" onClick={() => setMenuOpen(false)}>{t('nav.about')}</a></li>
          <li><Link to="/collections" onClick={() => setMenuOpen(false)}>{t('nav.collections')}</Link></li>
          <li><a href="/#contact" onClick={() => setMenuOpen(false)}>{t('nav.contact')}</a></li>
        </ul>

        <div className="navbar__actions">
          <div className="lang-switcher">
            {LANGS.map(l => (
              <button
                key={l.code}
                className={`lang-btn ${i18n.language.startsWith(l.code) ? 'active' : ''}`}
                onClick={() => { i18n.changeLanguage(l.code); setMenuOpen(false) }}
              >
                {l.label}
              </button>
            ))}
          </div>

          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}
