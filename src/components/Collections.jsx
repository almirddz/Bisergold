import { useTranslation } from 'react-i18next'
import './Collections.css'

const IMAGES = [
  'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1544376798-76b5c5cae41f?w=500&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1535556116002-6281ff3e9f36?w=500&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1515859005217-8a1f08111902?w=500&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=500&auto=format&fit=crop&q=80',
]

const ACCENTS = [
  'var(--purple)',
  'var(--gold)',
  'var(--teal)',
  'var(--rose)',
  'var(--purple-light)',
  'var(--teal)',
]

export default function Collections() {
  const { t } = useTranslation()
  const items = t('collections.items', { returnObjects: true })

  return (
    <section id="collections" className="collections">
      <div className="collections__header">
        <span className="collections__eyebrow">◆ {t('collections.title')} ◆</span>
        <h2 className="collections__title">{t('collections.subtitle')}</h2>
      </div>

      <div className="collections__grid">
        {items.map((item, i) => (
          <article
            key={item.id}
            className="col-card"
            style={{ '--accent': ACCENTS[i % ACCENTS.length] }}
          >
            <div className="col-card__img-wrap">
              <img src={IMAGES[i]} alt={item.name} className="col-card__img" loading="lazy" />
              <div className="col-card__overlay" />
            </div>
            <div className="col-card__body">
              <h3 className="col-card__name">{item.name}</h3>
              <p className="col-card__desc">{item.desc}</p>
              <span className="col-card__link">{t('collections.cta')} →</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
