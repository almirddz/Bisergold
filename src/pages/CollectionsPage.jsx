import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useSearchParams } from 'react-router-dom'
import { PRODUCTS } from '../data/products'
import './CollectionsPage.css'

const FILTERS = [
  { key: 'all',       tkey: 'filter_all' },
  { key: 'necklaces', tkey: 'filter_necklaces' },
  { key: 'rings',     tkey: 'filter_rings' },
  { key: 'bracelets', tkey: 'filter_bracelets' },
  { key: 'earrings',  tkey: 'filter_earrings' },
  { key: 'wedding',   tkey: 'filter_wedding' },
]

export default function CollectionsPage() {
  const { t, i18n } = useTranslation()
  const [searchParams] = useSearchParams()
  const [active, setActive] = useState(() => searchParams.get('cat') || 'all')

  useEffect(() => {
    const cat = searchParams.get('cat')
    if (cat) setActive(cat)
  }, [searchParams])

  const lang = i18n.language.startsWith('mk') ? 'mk' : i18n.language.startsWith('en') ? 'en' : 'sq'

  const filtered = active === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.cat === active)

  return (
    <div className="cpage">
      <div className="cpage__hero">
        <h1 className="cpage__title">{t('collections_page.title')}</h1>
        <p className="cpage__sub">{t('collections_page.subtitle')}</p>
      </div>

      <div className="cpage__filters">
        {FILTERS.map(f => (
          <button
            key={f.key}
            className={`cpage__filter-btn ${active === f.key ? 'active' : ''}`}
            onClick={() => setActive(f.key)}
          >
            {t(`collections_page.${f.tkey}`)}
          </button>
        ))}
      </div>

      <div className="cpage__grid">
        {filtered.map(p => (
          <article key={p.id} className="pcard">
            <div className="pcard__img-wrap">
              <img src={p.img} alt={p[lang]} className="pcard__img" loading="lazy" />
            </div>
            <div className="pcard__body">
              <span className="pcard__cat">{t(`collections_page.filter_${p.cat}`)}</span>
              <h3 className="pcard__name">{p[lang]}</h3>
              <p className="pcard__desc">{p[`desc_${lang}`]}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="cpage__inquiry-banner">
        <span>{t('collections_page.inquiry_banner')}</span>
        <Link to="/demande" className="btn btn--gold">
          {t('collections_page.inquiry_link')}
        </Link>
      </div>
    </div>
  )
}
