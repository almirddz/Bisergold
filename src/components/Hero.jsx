import { useTranslation } from 'react-i18next'
import './Hero.css'

const PARTICLES = Array.from({ length: 18 }, (_, i) => i)

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section id="home" className="hero">
      <div className="hero__bg">
        <img
          src="/images/qarshia_skopje.jpg"
          alt="Biser Gold — Çarşıa e Shkupit"
          className="hero__img"
        />
        <div className="hero__overlay" />
      </div>

      <div className="hero__particles" aria-hidden="true">
        {PARTICLES.map(i => (
          <span key={i} className="particle" style={{ '--i': i }} />
        ))}
      </div>

      <div className="hero__content">
        <div className="hero__badge">Skopje, North Macedonia</div>
        <h1 className="hero__title">{t('hero.tagline')}</h1>
        <p className="hero__subtitle">{t('hero.subtitle')}</p>
        <div className="hero__actions">
          <a href="#collections" className="btn btn--gold">{t('hero.cta')}</a>
          <a href="#contact" className="btn btn--outline">{t('hero.cta2')}</a>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll down">
        <span className="hero__scroll-wheel" />
      </a>
    </section>
  )
}
