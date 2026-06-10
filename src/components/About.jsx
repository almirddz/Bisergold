import { useTranslation } from 'react-i18next'
import './About.css'

export default function About() {
  const { t } = useTranslation()

  const stats = [
    { num: t('about.stat1_num'), label: t('about.stat1_label') },
    { num: t('about.stat2_num'), label: t('about.stat2_label') },
    { num: t('about.stat3_num'), label: t('about.stat3_label') },
  ]

  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__image-wrap">
          <div className="about__img-frame">
            <img
              src="/images/store-front.jpg"
              alt="Biser Gold — Çarşıa e Shkupit"
              className="about__img"
            />
          </div>
          <div className="about__accent-card">
            <strong>Biser Gold</strong>
            <span>Est. 2000</span>
          </div>
        </div>

        <div className="about__content">
          <span className="about__eyebrow">{t('about.title')}</span>
          <h2 className="about__title">{t('about.subtitle')}</h2>
          <p className="about__text">{t('about.text1')}</p>
          <p className="about__text">{t('about.text2')}</p>

          <div className="about__stats">
            {stats.map((s, i) => (
              <div key={i} className="stat">
                <span className="stat__num">{s.num}</span>
                <span className="stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
