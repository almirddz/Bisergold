import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
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

  const navLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#about', label: t('nav.about') },
    { href: '#collections', label: t('nav.collections') },
    { href: '#contact', label: t('nav.contact') },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#home" className="navbar__logo">
          <Logo size={34} />
          <span className="navbar__logo-text">BISER <span>GOLD</span></span>
        </a>

        <ul className={`navbar__links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
            </li>
          ))}
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
