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
              <div className="contact__icon">📍</div>
              <div className="contact__item-text">
                <strong>Address</strong>
                <span>{t('contact.address')}</span>
              </div>
            </li>
            <li className="contact__item">
              <div className="contact__icon">🕐</div>
              <div className="contact__item-text">
                <strong>{t('contact.hours_title')}</strong>
                <span>{t('contact.hours')}</span>
              </div>
            </li>
            <li className="contact__item">
              <div className="contact__icon">📞</div>
              <div className="contact__item-text">
                <strong>Phone</strong>
                <span>{t('contact.phone')}</span>
              </div>
            </li>
            <li className="contact__item">
              <div className="contact__icon">📸</div>
              <div className="contact__item-text">
                <strong>Instagram</strong>
                <a
                  href="https://www.instagram.com/bisergold/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
