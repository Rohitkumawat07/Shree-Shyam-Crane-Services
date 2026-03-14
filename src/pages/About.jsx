import '../styles/about.css'
import { Helmet } from 'react-helmet-async'



// ===== SVG ICONS =====
const MissionIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <circle cx="24" cy="24" r="20" stroke="#f77f00" strokeWidth="2.5" fill="rgba(247,127,0,0.08)" />
    <circle cx="24" cy="24" r="13" stroke="#f77f00" strokeWidth="2" fill="rgba(247,127,0,0.1)" strokeDasharray="4 2" />
    <circle cx="24" cy="24" r="6" fill="#f77f00" opacity="0.85" />
    <circle cx="24" cy="24" r="2.5" fill="white" />
    <line x1="40" y1="8" x2="26" y2="22" stroke="#f77f00" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M36 6 L42 6 L42 12" stroke="#f77f00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
)

const VisionIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <path d="M4 24 Q24 6 44 24 Q24 42 4 24 Z" fill="rgba(21,101,192,0.12)" stroke="#1565c0" strokeWidth="2.5" />
    <circle cx="24" cy="24" r="8" fill="rgba(21,101,192,0.2)" stroke="#1565c0" strokeWidth="2" />
    <circle cx="24" cy="24" r="4" fill="#1565c0" />
    <circle cx="26" cy="22" r="1.5" fill="white" opacity="0.8" />
    <line x1="24" y1="4" x2="24" y2="8" stroke="#1565c0" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    <line x1="38" y1="10" x2="35" y2="13" stroke="#1565c0" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    <line x1="10" y1="10" x2="13" y2="13" stroke="#1565c0" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
  </svg>
)

const ValuesIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <path d="M24 4 L44 20 L24 44 L4 20 Z" fill="rgba(46,125,50,0.12)" stroke="#2e7d32" strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M24 12 L36 22 L24 36 L12 22 Z" fill="rgba(46,125,50,0.15)" stroke="#2e7d32" strokeWidth="1.5" strokeLinejoin="round" strokeDasharray="3 2" />
    <path d="M24 16 L30 22 L24 30 L18 22 Z" fill="#2e7d32" opacity="0.7" />
    <line x1="24" y1="2" x2="24" y2="6" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" />
    <line x1="44" y1="14" x2="40" y2="17" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" />
    <line x1="4" y1="14" x2="8" y2="17" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const CheckIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18" style={{ flexShrink: 0 }}>
    <circle cx="10" cy="10" r="9" fill="rgba(46,125,50,0.15)" stroke="#2e7d32" strokeWidth="1.5" />
    <path d="M6 10 L9 13 L14 7" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const team = [
  { name: 'Vishnu Kumawat', role: 'Founder & Director', img: '/c1.png' },
]

export default function About() {
  return (
    <>
    <Helmet>
    <title>About Us | Shree Shyam Crane Service Jaipur</title>
    <meta name="description" content="Shree Shyam Crane Service — founded 2009 in Jaipur. NCCBM certified operators, 20+ cranes, 500+ projects across Jaipur. Know our story." />
    <meta property="og:title" content="About Shree Shyam Crane Service" />
    <meta property="og:description" content="15+ years of safe, reliable crane rental in Rajasthan. Know our team and story." />
  </Helmet>
      <div className="page-banner">
        <div className="container">
          <div className="section-tag">Who We Are</div>
          <h1>About Shree Shyam<br />Crane Service</h1>
          <p>Jaipur's trusted crane rental & heavy lifting</p>
          <div className="breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>About</span>
          </div>
        </div>
      </div>

      <section className="about-intro">
        <div className="container about-intro__inner">
          <div className="about-intro__visual">
            <div className="about-intro__img-box">
              <svg viewBox="0 0 440 360" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="440" height="360" rx="16" fill="url(#aGrad)" />
                <defs>
                  <linearGradient id="aGrad" x1="0" y1="0" x2="440" y2="360">
                    <stop stopColor="#0a1628" />
                    <stop offset="1" stopColor="#1a3060" />
                  </linearGradient>
                </defs>
                <rect x="0" y="300" width="440" height="60" fill="rgba(0,0,0,0.35)" rx="0" />
                <rect x="40" y="140" width="160" height="162" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
                <rect x="60" y="160" width="28" height="32" fill="rgba(247,127,0,0.35)" rx="2" />
                <rect x="104" y="160" width="28" height="32" fill="rgba(247,127,0,0.15)" rx="2" />
                <rect x="148" y="160" width="28" height="32" fill="rgba(247,127,0,0.35)" rx="2" />
                <rect x="60" y="208" width="28" height="32" fill="rgba(247,127,0,0.15)" rx="2" />
                <rect x="104" y="208" width="28" height="32" fill="rgba(247,127,0,0.35)" rx="2" />
                <rect x="148" y="208" width="28" height="32" fill="rgba(247,127,0,0.15)" rx="2" />
                <rect x="96" y="260" width="48" height="42" fill="rgba(255,255,255,0.08)" rx="2" />
                <rect x="300" y="60" width="18" height="242" fill="rgba(247,127,0,0.7)" rx="3" />
                <rect x="120" y="60" width="198" height="12" fill="rgba(247,127,0,0.8)" rx="2" />
                <rect x="318" y="60" width="80" height="12" fill="rgba(247,127,0,0.5)" rx="2" />
                <rect x="370" y="72" width="44" height="32" fill="rgba(247,127,0,0.3)" rx="2" />
                <line x1="188" y1="72" x2="188" y2="190" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
                <rect x="178" y="190" width="20" height="18" rx="3" fill="rgba(247,127,0,0.8)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                <line x1="309" y1="72" x2="155" y2="72" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                <rect x="283" y="300" width="52" height="8" fill="rgba(247,127,0,0.5)" rx="2" />
                <circle cx="60" cy="40" r="2" fill="rgba(255,255,255,0.2)" />
                <circle cx="100" cy="25" r="1.5" fill="rgba(255,255,255,0.15)" />
                <circle cx="400" cy="35" r="2" fill="rgba(255,255,255,0.2)" />
                <circle cx="380" cy="18" r="1" fill="rgba(255,255,255,0.1)" />
              </svg>
            </div>
            <div className="about-intro__badge">
              <strong>Est. 2009</strong>
              <span>15+ Years of Excellence</span>
            </div>
          </div>

          <div className="about-intro__text">
            <div className="section-tag">Our Story</div>
            <h2 className="section-heading">Built on <span>Trust</span> & Expertise</h2>
            <p>Shree Shyam Crane Service was founded in 2009 in Jaipur with a simple mission: to provide safe, reliable, and cost-effective crane rental services to the booming construction industry of Rajasthan.</p>
            <p>From a single mobile crane, we have grown into a full-service lifting company with a modern fleet of 20+ cranes ranging from 5-tonne to 100-tonne capacity, serving clients across Jaipur, Jodhpur, Udaipur, Kota, Ajmer, and beyond.</p>
            <p>Our team of NCCBM-certified operators, riggers, and safety officers ensures every lift is executed with maximum precision and zero compromise on safety.</p>
            <div className="about-intro__highlights">
              <div className="about-highlight"><strong>500+</strong><span>Projects</span></div>
              <div className="about-highlight"><strong>20+</strong><span>Cranes in Fleet</span></div>
              <div className="about-highlight"><strong>50+</strong><span>Expert Staff</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card mv-card--mission">
              <div className="mv-card__icon"><MissionIcon /></div>
              <h3>Our Mission</h3>
              <p>To deliver safe, efficient, and reliable crane rental services that help our clients complete their projects on time and within budget, while maintaining the highest standards of safety and professionalism.</p>
            </div>
            <div className="mv-card mv-card--vision">
              <div className="mv-card__icon"><VisionIcon /></div>
              <h3>Our Vision</h3>
              <p>To become the most trusted and technologically advanced crane rental company in Northwest India, setting industry benchmarks for safety, innovation, and customer satisfaction.</p>
            </div>
            <div className="mv-card mv-card--values">
              <div className="mv-card__icon"><ValuesIcon /></div>
              <h3>Our Values</h3>
              <ul>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}><CheckIcon /> Safety above all else</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}><CheckIcon /> Transparent pricing</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}><CheckIcon /> On-time delivery</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}><CheckIcon /> Client-first approach</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckIcon /> Continuous improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="team-section__header">
            <div className="section-tag">Our People</div>
            <h2 className="section-heading">Meet Our <span>Founder</span></h2>
          </div>
          <div className="team-grid">
            {team.map((m, i) => (
              <div key={i} className="team-card">
                <div className="team-card__avatar">
                  <img src={m.img} alt={m.name} style={{ height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                </div>
                <h4>{m.name}</h4>
                <span>{m.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}