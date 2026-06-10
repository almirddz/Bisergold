import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './AboutPage.css'

const GALLERY = [
  { src: '/images/store-front.jpg',     wide: true },
  { src: '/images/chain-necklace.jpg',  wide: false },
  { src: '/images/pendant-necklace.jpg',wide: false },
  { src: '/images/qarshia_skopje.jpg',  wide: true },
]

const VALUE_ICONS = [
  // family / heart
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  // star / quality
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  // user / personal
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  // shield / trust
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
]

export default function AboutPage() {
  const { t } = useTranslation()

  const values = [
    { title: t('about_page.v1_title'), text: t('about_page.v1_text'), icon: VALUE_ICONS[0] },
    { title: t('about_page.v2_title'), text: t('about_page.v2_text'), icon: VALUE_ICONS[1] },
    { title: t('about_page.v3_title'), text: t('about_page.v3_text'), icon: VALUE_ICONS[2] },
    { title: t('about_page.v4_title'), text: t('about_page.v4_text'), icon: VALUE_ICONS[3] },
  ]

  return (
    <div className="about-page">

      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero__bg" />
        <div className="about-hero__content">
          <span className="about-hero__label">{t('about_page.hero_label')}</span>
          <h1 className="about-hero__title">{t('about_page.hero_title')}</h1>
          <p className="about-hero__sub">{t('about_page.hero_sub')}</p>
        </div>
      </section>

      {/* Story */}
      <section className="about-story">
        <div className="about-story__head">
          <span className="about-story__label">{t('about_page.story_label')}</span>
          <h2 className="about-story__title">{t('about_page.story_title')}</h2>
          <div className="about-story__divider" />
        </div>
        <div className="about-story__text">
          <p>{t('about_page.story_p1')}</p>
          <p>{t('about_page.story_p2')}</p>
          <p>{t('about_page.story_p3')}</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="about-gallery">
        <span className="about-gallery__label">{t('about_page.gallery_label')}</span>
        <h2 className="about-gallery__title">{t('about_page.gallery_title')}</h2>
        <div className="about-gallery__grid">
          {GALLERY.map((img, i) => (
            <div key={i} className={`g-item${img.wide ? ' g-item--wide' : ''}`}>
              <img src={img.src} alt="" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <span className="about-values__label">{t('about_page.values_label')}</span>
        <h2 className="about-values__title">{t('about_page.values_title')}</h2>
        <div className="about-values__grid">
          {values.map((v, i) => (
            <div key={i} className="vcard">
              <div className="vcard__icon">{v.icon}</div>
              <h3 className="vcard__title">{v.title}</h3>
              <p className="vcard__text">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="about-cta">
        <h2 className="about-cta__title">{t('about_page.cta_title')}</h2>
        <Link to="/collections" className="btn btn--gold">
          {t('about_page.cta_btn')}
        </Link>
      </div>

    </div>
  )
}
