import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './InquiryPage.css'

export default function InquiryPage() {
  const { t } = useTranslation()
  const [sent, setSent] = useState(false)
  const [photo, setPhoto] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  const handlePhoto = (e) => {
    const file = e.target.files[0]
    if (file) setPhoto(file.name)
  }

  if (sent) {
    return (
      <div className="inquiry">
        <div className="inquiry__success">
          <div className="inquiry__success-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <h2>{t('inquiry_page.success_title')}</h2>
          <p>{t('inquiry_page.success_text')}</p>
          <Link to="/" className="btn btn--gold">{t('inquiry_page.back')}</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="inquiry">
      <div className="inquiry__container">
        <div className="inquiry__left">
          <span className="inquiry__badge">{t('inquiry_page.badge')}</span>
          <h1 className="inquiry__title">{t('inquiry_page.title')}</h1>
          <p className="inquiry__subtitle">{t('inquiry_page.subtitle')}</p>

          <div className="inquiry__info">
            <div className="inquiry__info-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>{t('inquiry_page.info_response')}</span>
            </div>
            <div className="inquiry__info-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              <span>{t('inquiry_page.info_service')}</span>
            </div>
            <div className="inquiry__info-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/>
              </svg>
              <span>Čaršıa e Shkupit, Skopje</span>
            </div>
          </div>
        </div>

        <form className="inquiry__form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">{t('inquiry_page.field_name')}</label>
              <input type="text" className="form-input" required />
            </div>
            <div className="form-group">
              <label className="form-label">{t('inquiry_page.field_phone')}</label>
              <input type="tel" className="form-input" required />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">{t('inquiry_page.field_email')}</label>
            <input type="email" className="form-input" />
          </div>

          <div className="form-group">
            <label className="form-label">{t('inquiry_page.field_description')}</label>
            <textarea
              className="form-input form-textarea"
              rows={5}
              placeholder={t('inquiry_page.field_description_hint')}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">{t('inquiry_page.field_budget')}</label>
            <select className="form-input form-select">
              <option value="">{t('inquiry_page.budget_0')}</option>
              <option>{t('inquiry_page.budget_1')}</option>
              <option>{t('inquiry_page.budget_2')}</option>
              <option>{t('inquiry_page.budget_3')}</option>
              <option>{t('inquiry_page.budget_4')}</option>
              <option>{t('inquiry_page.budget_5')}</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">{t('inquiry_page.field_photo')}</label>
            <label className="file-upload">
              <input type="file" accept="image/*" onChange={handlePhoto} className="file-input" />
              <div className="file-upload__inner">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
                <span>{photo || t('inquiry_page.field_photo_hint')}</span>
              </div>
            </label>
          </div>

          <button type="submit" className="btn btn--gold btn--full inquiry__submit">
            {t('inquiry_page.submit')}
          </button>
        </form>
      </div>
    </div>
  )
}
