import Hero from '../components/Hero'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'
import ContactForm from '../components/ContactForm'
import { Link } from 'react-router-dom'
import '../styles/home.css'
import { Helmet } from 'react-helmet-async'

// ===== WHY US SVG ICONS =====
const SafetyIcon = ({ color }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
    {/* Shield */}
    <path d="M24 4 L40 10 L40 24 Q40 36 24 44 Q8 36 8 24 L8 10 Z"
      fill={color} opacity="0.15" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    {/* Checkmark */}
    <path d="M16 24 L21 30 L32 18"
      stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    {/* Lock keyhole */}
    <circle cx="24" cy="21" r="3" fill={color} opacity="0.7"/>
  </svg>
)

const AvailabilityIcon = ({ color }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
    {/* Clock circle */}
    <circle cx="24" cy="24" r="18" stroke={color} strokeWidth="2.5" fill={color} fillOpacity="0.1"/>
    {/* Clock hands */}
    <line x1="24" y1="24" x2="24" y2="12" stroke={color} strokeWidth="3" strokeLinecap="round"/>
    <line x1="24" y1="24" x2="33" y2="28" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
    {/* Center dot */}
    <circle cx="24" cy="24" r="2.5" fill={color}/>
    {/* 24 text */}
    <text x="24" y="42" textAnchor="middle" fill={color} fontSize="7" fontWeight="bold" fontFamily="sans-serif">24/7</text>
    {/* Tick marks */}
    <line x1="24" y1="7"  x2="24" y2="10" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <line x1="24" y1="38" x2="24" y2="41" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <line x1="7"  y1="24" x2="10" y2="24" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <line x1="38" y1="24" x2="41" y2="24" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const RatesIcon = ({ color }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
    {/* Rupee coin */}
    <circle cx="24" cy="24" r="18" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="2.5"/>
    {/* Rupee symbol ₹ */}
    <text x="24" y="30" textAnchor="middle" fill={color} fontSize="20" fontWeight="bold" fontFamily="sans-serif">₹</text>
    {/* Down arrow (competitive = low price) */}
    <path d="M34 8 L40 14 L36 14 L36 20 L32 20 L32 14 L28 14 Z" fill={color} opacity="0.7"/>
  </svg>
)

const ExperienceIcon = ({ color }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
    {/* Trophy cup */}
    <path d="M16 8 L32 8 L32 22 Q32 32 24 34 Q16 32 16 22 Z"
      fill={color} opacity="0.2" stroke={color} strokeWidth="2.5" strokeLinejoin="round"/>
    {/* Trophy handles */}
    <path d="M16 12 Q8 12 8 18 Q8 24 16 24" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M32 12 Q40 12 40 18 Q40 24 32 24" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    {/* Base stem */}
    <rect x="21" y="34" width="6" height="6" rx="1" fill={color} opacity="0.7"/>
    {/* Base plate */}
    <rect x="16" y="40" width="16" height="4" rx="2" fill={color}/>
    {/* Star in trophy */}
    <path d="M24 14 L25.5 18.5 L30 18.5 L26.5 21 L28 25.5 L24 23 L20 25.5 L21.5 21 L18 18.5 L22.5 18.5 Z"
      fill={color} opacity="0.8"/>
    {/* 15+ text */}
    <text x="24" y="10" textAnchor="middle" fill={color} fontSize="5" fontWeight="bold" fontFamily="sans-serif">15+</text>
  </svg>
)

const reasonIcons = [SafetyIcon, AvailabilityIcon, RatesIcon, ExperienceIcon]
const reasonColors = ['#f77f00', '#1565c0', '#2e7d32', '#7b1fa2']

function WhyUs() {
  const reasons = [
    { title: 'Safety First',         desc: 'All operations follow IS/ISO safety standards with certified operators and rigging crews.' },
    { title: '24/7 Availability',    desc: 'Round-the-clock support and emergency crane deployment within 24 hours.' },
    { title: 'Competitive Rates',    desc: 'Transparent pricing with no hidden costs. Best value crane rental in Rajasthan.' },
    { title: '15+ Years Experience', desc: 'Over a decade of successful heavy lifting projects across the state.' },
  ]

  return (
    <section className="why-us">
      <div className="container why-us__inner">
        <div className="why-us__left">
          <div className="section-tag">Why Choose Us</div>
          <h2 className="section-heading">Jaipur's Most <span>Reliable</span> Crane Partner</h2>
          <p className="section-sub">We combine experience, safety, and speed to deliver crane solutions that keep your project moving.</p>

          <div className="why-us__certs">
            <div className="cert-badge">ISO 9001:2015</div>
            <div className="cert-badge">NCCBM Certified</div>
            <div className="cert-badge">OSHA Compliant</div>
          </div>

          <Link to="/about" className="btn-primary" style={{ marginTop: '28px', display: 'inline-flex' }}>
            Learn More About Us
          </Link>
        </div>

        <div className="why-us__right">
          {reasons.map((r, i) => {
            const Icon = reasonIcons[i]
            const color = reasonColors[i]
            return (
              <div key={i} className="why-card">
                <div className="why-card__icon" style={{ background: `${color}18` }}>
                  <Icon color={color} />
                </div>
                <div>
                  <h4>{r.title}</h4>
                  <p>{r.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ContactBanner() {
  return (
    <section className="contact-banner">
      <div className="container contact-banner__inner">
        <div className="contact-banner__text">
          <h2>Need a Crane for Your Project?</h2>
          <p>Get a free quote in 30 minutes. Available across Jaipur 24/7.</p>
        </div>
        <div className="contact-banner__actions">
          <a href="tel:+919887481776" className="btn-primary">
            📞 Call Now: +91 98874 81776
          </a>
          <Link to="/contact" className="btn-outline">Request Online Quote</Link>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
    <Helmet>
        <title>Shree Shyam Crane Service | Crane Rental Jaipur, Rajasthan</title>
        <meta name="description" content="Jaipur's most trusted crane rental service. Mobile crane, hydraulic crane, tower crane. 15+ years experience. 500+ projects completed. Available 24/7 across Jaipur and Rajasthan." />
        <meta property="og:title" content="Shree Shyam Crane Service | Crane Rental Jaipur" />
        <meta property="og:description" content="Jaipur's trusted crane rental. 500+ projects. 24/7 available. Call now!" />
      </Helmet>
      <Hero />
      <Services />
      <WhyUs />
      <Projects />
      <Testimonials />
      <ContactBanner />
    </>
  )
}
