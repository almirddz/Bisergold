import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './Collections.css'

const CATEGORIES = [
  { cat: 'necklaces', img: '/images/chain-necklace.jpg' },
  { cat: 'rings',     img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format&fit=crop&q=80' },
  { cat: 'bracelets', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&auto=format&fit=crop&q=80' },
  { cat: 'earrings',  img: 'https://images.unsplash.com/photo-1535556116002-6281ff3e9f36?w=600&auto=format&fit=crop&q=80' },
  { cat: 'wedding',   img: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&auto=format&fit=crop&q=80' },
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
          <Link
            key={item.id}
            to={`/collections?cat=${CATEGORIES[i].cat}`}
            className="col-card"
          >
            <div className="col-card__img-wrap">
              <img src={CATEGORIES[i].img} alt={item.name} className="col-card__img" loading="lazy" />
              <div className="col-card__overlay" />
            </div>
            <div className="col-card__body">
              <h3 className="col-card__name">{item.name}</h3>
              <p className="col-card__desc">{item.desc}</p>
              <span className="col-card__link">{t('collections.cta')} →</span>
            </div>
          </Link>
        ))}

        {/* Inquiry card */}
        <Link to="/demande" className="col-card col-card--inquiry">
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
          <span className="btn btn--gold inquiry__btn">
            {t('collections.inquiry_cta')}
          </span>
        </Link>
      </div>
    </section>
  )
}
