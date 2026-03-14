import ContactForm from '../components/ContactForm'
import '../styles/contact.css'
import { Helmet } from 'react-helmet-async'

// ===== SVG ICONS — Realistic, Blue Color =====
const CallIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
    <path d="M12 8 L18 8 Q20 8 20 10 L20 17 Q20 19 18 19 L15 19 Q15 21 17 25 Q20 30 23 33 Q26 36 30 37 L30 34 Q30 32 32 32 L39 32 Q41 32 41 34 L41 41 Q41 43 39 43 Q14 44 7 13 Q6 11 8 9 Z"
      fill="rgba(21,101,192,0.2)" stroke="#1565c0" strokeWidth="2.2" strokeLinejoin="round"/>
    <path d="M26 6 Q36 8 40 18" stroke="#1565c0" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M26 11 Q33 13 36 20" stroke="#1565c0" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
    <path d="M26 16 Q30 17 32 21" stroke="#1565c0" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
  </svg>
)

const MailIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
    <rect x="4" y="10" width="40" height="28" rx="4" fill="rgba(21,101,192,0.12)" stroke="#1565c0" strokeWidth="2.2"/>
    <path d="M4 14 L24 27 L44 14" stroke="#1565c0" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="4"  y1="38" x2="17" y2="26" stroke="#1565c0" strokeWidth="1.5" opacity="0.5" strokeLinecap="round"/>
    <line x1="44" y1="38" x2="31" y2="26" stroke="#1565c0" strokeWidth="1.5" opacity="0.5" strokeLinecap="round"/>
  </svg>
)

const LocationIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
    <path d="M24 4 C15 4 9 11 9 19 C9 30 24 44 24 44 C24 44 39 30 39 19 C39 11 33 4 24 4 Z"
      fill="rgba(21,101,192,0.18)" stroke="#1565c0" strokeWidth="2.2"/>
    <circle cx="24" cy="19" r="6" fill="rgba(21,101,192,0.25)" stroke="#1565c0" strokeWidth="2"/>
    <circle cx="24" cy="19" r="2.5" fill="#1565c0"/>
    <ellipse cx="24" cy="44" rx="7" ry="2.2" fill="#1565c0" opacity="0.18"/>
  </svg>
)

const WhatsAppIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
    <path d="M6 36 L8 28 C5 24 4 20 4 18 C4 9 13 2 24 2 C35 2 44 9 44 18 C44 27 35 34 24 34 C21 34 18 33 15 32 Z"
      fill="rgba(21,101,192,0.15)" stroke="#1565c0" strokeWidth="2.2" strokeLinejoin="round"/>
    <path d="M16 12 L19 12 Q20 12 20 13 L20 17 Q20 18 19 18 L17.5 18 Q18 20 20 22 Q22 24 24 24.5 L24 23 Q24 22 25 22 L29 22 Q30 22 30 23 L30 27 Q30 28 29 28 Q18 29 15 16 Q14 14 15 13 Z"
      fill="rgba(21,101,192,0.3)" stroke="#1565c0" strokeWidth="1.8" strokeLinejoin="round"/>
  </svg>
)

export default function Contact() {
  return (
    <>
     <Helmet>
    <title>Contact Us | Get Crane Quote — Shree Shyam Crane Jaipur</title>
    <meta name="description" content="Contact Shree Shyam Crane Service for crane rental quote. Call +91 98874 81776. Located in Basant Vihar Colony, Chomu, Jaipur. 24/7 available." />
    <meta property="og:title" content="Contact Shree Shyam Crane Service" />
    <meta property="og:description" content="Get free crane rental quote. Call +91 98874 81776. Jaipur, Rajasthan. 24/7." />
  </Helmet>
      <div className="page-banner">
        <div className="container">
          <div className="section-tag">Reach Us</div>
          <h1>Contact &<br/>Get a Quote</h1>
          <p>We respond within 2 hours. Available 24/7 for urgent requirements.</p>
          <div className="breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Contact</span>
          </div>
        </div>
      </div>

      <section className="contact-page">
        <div className="container contact-page__inner">
          <div className="contact-info">
            <div className="section-tag">Get In Touch</div>
            <h2 className="section-heading">Let's Discuss <span>Your Project</span></h2>
            <p className="section-sub">Tell us about your lifting requirements and we'll provide a tailored solution with a competitive quote.</p>

            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-card__icon"><CallIcon /></div>
                <div>
                  <h4>Call Us</h4>
                  <a href="tel:+919887481776">+91 98874 81776</a>
                  <a href="tel:+919660141775">+91 96601 41775</a>
                  <span>Available 24/7</span>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card__icon"><MailIcon /></div>
                <div>
                  <h4>Email Us</h4>
                  <a href="mailto:shreeshyamcraneservice65@gmail.com">shreeshyamcraneservice65@gmail.com</a>
                  <span>Reply within 2 hours</span>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card__icon"><LocationIcon /></div>
                <div>
                  <h4>Our Office</h4>
                  <p>Basant Vihar Colony, Chomu<br/>Jaipur, Rajasthan 303702</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card__icon"><WhatsAppIcon /></div>
                <div>
                  <h4>WhatsApp</h4>
                  <a href="https://wa.me/919887481776">+91 98874 81776</a>
                  <span>Quick response guaranteed</span>
                </div>
              </div>
            </div>

            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps?q=Shree+Shyam+Crane+Service,+Basant+Vihar+Colony,+Chomu,+Jaipur,+Rajasthan+303702&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shree Shyam Crane Service Location"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  )
}