import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './Collections.css'

const IMAGES = [
  'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1535556116002-6281ff3e9f36?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&auto=format&fit=crop&q=80',
]

export default function Collections() {
  const { t } = useTranslation()
  const items = t('collections.items', { returnObjects: true })

  return (
    <section id="collections" className="collections">
      <div className="collections__header">
        <span className="collections__eyebrow">{t('collections.title')}</span>
        <h2 className="collections__title">{t('collections.subtitle')}</h2>
      </div>

      <div className="collections__grid">
        {items.map((item, i) => (
          <article key={item.id} className="col-card">
            <div className="col-card__img-wrap">
              <img src={IMAGES[i]} alt={item.name} className="col-card__img" loading="lazy" />
              <div className="col-card__overlay" />
            </div>
            <div className="col-card__body">
              <h3 className="col-card__name">{item.name}</h3>
              <p className="col-card__desc">{item.desc}</p>
              <Link to="/collections" className="col-card__link">{t('collections.cta')} →</Link>
            </div>
          </article>
        ))}

        {/* Inquiry card */}
        <article className="col-card col-card--inquiry">
          <div className="inquiry__icon">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              <line x1="11" y1="8" x2="11" y2="14"/>
              <line x1="8" y1="11" x2="14" y2="11"/>
            </svg>
          </div>
          <h3 className="inquiry__title">{t('collections.inquiry_title')}</h3>
          <p className="inquiry__text">{t('collections.inquiry_text')}</p>
          <Link to="/demande" className="btn btn--gold inquiry__btn">
            {t('collections.inquiry_cta')}
          </Link>
        </article>
      </div>
    </section>
  )
}
