import { useState } from 'react'
import '../styles/contact.css'

export default function ContactForm({ compact = false }) {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const formData = new FormData(e.target)

    try {
      const res = await fetch('https://formspree.io/f/mojkdwdj', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        e.target.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className={`contact-form-wrap${compact ? ' contact-form-wrap--compact' : ''}`}>
      {!compact && (
        <div className="contact-form-wrap__header">
          <div className="section-tag">Get In Touch</div>
          <h3>Request a <span>Free Quote</span></h3>
          <p>Fill in your details and our team will get back to you within 2 hours.</p>
        </div>
      )}

      {status === 'success' ? (
        <div className="contact-form__success">
          <div className="contact-form__success-icon">✅</div>
          <strong>Thank You!</strong>
          <p>Your request has been received. We'll contact you within 2 hours.</p>
          <button className="btn-primary" style={{marginTop: '16px'}} onClick={() => setStatus('idle')}>
            Send Another
          </button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form__row">
            <div className="contact-form__field">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your full name"
                required
              />
            </div>
            <div className="contact-form__field">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+91 00000 00000"
                required
              />
            </div>
          </div>

          <div className="contact-form__field">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
            />
          </div>

          <div className="contact-form__field">
            <label htmlFor="message">Project Details *</label>
            <textarea
              id="message"
              name="message"
              rows={compact ? 4 : 5}
              placeholder="Describe your lifting requirement, crane type needed, location..."
              required
            />
          </div>

          {status === 'error' && (
            <div className="contact-form__error">
              ⚠️ Kuch galat hua! Dobara try karo ya directly call karo.
            </div>
          )}

          <button
            type="submit"
            className="btn-primary contact-form__submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? (
              <>
                <span className="contact-form__spinner" />
                Sending...
              </>
            ) : (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
                Send Request
              </>
            )}
          </button>
        </form>
      )}
    </div>
  )
}
