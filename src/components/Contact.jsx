import { useTranslation } from 'react-i18next'
import './Contact.css'

export default function Contact() {
  const { t } = useTranslation()

  const handleSubmit = (e) => {
    e.preventDefault()
    e.target.reset()
  }

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <div className="contact__info">
          <span className="contact__eyebrow">◆ {t('contact.title')} ◆</span>
          <h2 className="contact__title">{t('contact.subtitle')}</h2>

          <ul className="contact__details">
            <li className="contact__item">
              <div className="contact__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
              </div>
              <div className="contact__item-text">
                <strong>Address</strong>
                <span>{t('contact.address')}</span>
              </div>
            </li>
            <li className="contact__item">
              <div className="contact__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div className="contact__item-text">
                <strong>{t('contact.hours_title')}</strong>
                <span>{t('contact.hours')}</span>
              </div>
            </li>
            <li className="contact__item">
              <div className="contact__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.06 1.18 2 2 0 012.03 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <div className="contact__item-text">
                <strong>Phone</strong>
                <span>{t('contact.phone')}</span>
              </div>
            </li>
            <li className="contact__item">
              <div className="contact__icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div className="contact__item-text">
                <strong>Instagram</strong>
                <a href="https://www.instagram.com/bisergold/" target="_blank" rel="noopener noreferrer">
                  {t('contact.instagram')}
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div className="contact__right">
          <div className="contact__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23700!2d21.4254!3d41.9981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13541166b7f85ab9%3A0x1ac5b7bab99cfbe0!2sSkopje%20City%20Center!5e0!3m2!1sen!2smk!4v1700000000000"
              title="Biser Gold — Skopje"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" placeholder={t('contact.form_name')} className="form-input" required />
              <input type="email" placeholder={t('contact.form_email')} className="form-input" required />
            </div>
            <textarea
              placeholder={t('contact.form_message')}
              className="form-input form-textarea"
              rows={4}
              required
            />
            <button type="submit" className="btn btn--gold btn--full">
              {t('contact.form_send')}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
