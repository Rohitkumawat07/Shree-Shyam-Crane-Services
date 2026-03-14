import { Link } from 'react-router-dom'
import '../styles/hero.css'

function AnimatedCrane() {
  return (
    <svg viewBox="0 0 480 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="crane-svg">
      <defs>
        <linearGradient id="heroGrad" x1="0" y1="0" x2="480" y2="380" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0d2147"/>
          <stop offset="1" stopColor="#1a3060"/>
        </linearGradient>
        <linearGradient id="towerGrad" x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#f77f00"/><stop offset="1" stopColor="#ffaa33"/>
        </linearGradient>
        <linearGradient id="jibGrad" x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#ffaa33"/><stop offset="1" stopColor="#f77f00"/>
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
          <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="softglow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* BG */}
      <rect width="480" height="380" rx="16" fill="url(#heroGrad)"/>

      {/* Twinkling stars */}
      <circle cx="40" cy="30" r="1.5" fill="white" className="star star1"/>
      <circle cx="90" cy="20" r="1"   fill="white" className="star star2"/>
      <circle cx="430" cy="25" r="1.5" fill="white" className="star star3"/>
      <circle cx="460" cy="45" r="1"  fill="white" className="star star4"/>
      <circle cx="20" cy="60" r="1"   fill="white" className="star star5"/>
      <circle cx="120" cy="15" r="1.2" fill="white" className="star star1"/>

      {/* Ground */}
      <rect x="0" y="315" width="480" height="65" fill="rgba(0,0,0,0.35)" rx="4"/>
      <line x1="0" y1="318" x2="480" y2="318" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>

      {/* Building */}
      <rect x="55" y="175" width="185" height="142" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
      {/* Floor 1 */}
      <rect x="75"  y="195" width="28" height="30" fill="rgba(247,127,0,0.25)" rx="2" className="win win1"/>
      <rect x="118" y="195" width="28" height="30" fill="rgba(247,127,0,0.12)" rx="2" className="win win2"/>
      <rect x="161" y="195" width="28" height="30" fill="rgba(247,127,0,0.25)" rx="2" className="win win3"/>
      <rect x="204" y="195" width="28" height="30" fill="rgba(247,127,0,0.12)" rx="2" className="win win4"/>
      {/* Floor 2 */}
      <rect x="75"  y="240" width="28" height="30" fill="rgba(247,127,0,0.12)" rx="2" className="win win2"/>
      <rect x="118" y="240" width="28" height="30" fill="rgba(247,127,0,0.25)" rx="2" className="win win3"/>
      <rect x="161" y="240" width="28" height="30" fill="rgba(247,127,0,0.12)" rx="2" className="win win1"/>
      <rect x="204" y="240" width="28" height="30" fill="rgba(247,127,0,0.25)" rx="2" className="win win4"/>
      {/* Top floor partial */}
      <rect x="55" y="155" width="185" height="22" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="6 3"/>

      {/* Scaffolding */}
      <line x1="52"  y1="155" x2="52"  y2="317" stroke="rgba(255,255,255,0.25)" strokeWidth="2.5"/>
      <line x1="243" y1="155" x2="243" y2="317" stroke="rgba(255,255,255,0.25)" strokeWidth="2.5"/>
      <line x1="52"  y1="195" x2="243" y2="195" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5"/>
      <line x1="52"  y1="240" x2="243" y2="240" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5"/>
      <line x1="52"  y1="280" x2="243" y2="280" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5"/>
      <line x1="52"  y1="195" x2="100" y2="240" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <line x1="100" y1="195" x2="52"  y2="240" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>

      {/* Crane tower */}
      <rect x="328" y="55" width="24" height="262" fill="url(#towerGrad)" rx="3" opacity="0.85" filter="url(#glow)"/>
      <line x1="332" y1="80"  x2="348" y2="100" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5"/>
      <line x1="348" y1="80"  x2="332" y2="100" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5"/>
      <line x1="332" y1="115" x2="348" y2="135" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5"/>
      <line x1="348" y1="115" x2="332" y2="135" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5"/>
      <line x1="332" y1="150" x2="348" y2="170" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5"/>
      <line x1="348" y1="150" x2="332" y2="170" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5"/>
      <line x1="332" y1="185" x2="348" y2="205" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5"/>
      <line x1="348" y1="185" x2="332" y2="205" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5"/>
      <line x1="332" y1="220" x2="348" y2="240" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5"/>
      <line x1="348" y1="220" x2="332" y2="240" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5"/>

      {/* Jib */}
      <rect x="138" y="52" width="212" height="12" fill="url(#jibGrad)" rx="3" opacity="0.9" filter="url(#glow)"/>
      <rect x="350" y="52" width="88"  height="12" fill="rgba(247,127,0,0.65)" rx="3"/>
      <rect x="405" y="62" width="44"  height="36" fill="rgba(247,127,0,0.3)"  rx="4" stroke="rgba(247,127,0,0.4)" strokeWidth="1"/>

      {/* Pendant cables */}
      <line x1="338" y1="64" x2="165" y2="64" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
      <line x1="338" y1="58" x2="190" y2="58" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>

      {/* ===== ANIMATED TROLLEY + ROPE + HOOK + LOAD ===== */}
      <g className="crane-trolley">
        {/* Trolley body */}
        <rect x="-10" y="60" width="20" height="10" fill="rgba(247,127,0,0.95)" rx="2"/>
        <circle cx="-5" cy="59" r="2.5" fill="#ffcc00"/>
        <circle cx="5"  cy="59" r="2.5" fill="#ffcc00"/>

        {/* Rope - animates length */}
        <line x1="0" y1="70" x2="0" y2="155" stroke="rgba(255,255,255,0.75)" strokeWidth="2" className="crane-rope"/>

        {/* Hook + Load group - moves up/down */}
        <g className="crane-hook-group">
          {/* Hook block */}
          <rect x="-14" y="153" width="28" height="16" rx="3" fill="rgba(20,40,90,0.95)" stroke="rgba(247,127,0,0.9)" strokeWidth="2"/>
          {/* Hook curve */}
          <path d="M -3 169 L -3 180 Q -3 192 8 192 Q 19 192 19 181 Q 19 174 13 172"
            stroke="#f77f00" strokeWidth="3.5" fill="none" strokeLinecap="round" filter="url(#glow)"/>

          {/* Load box */}
          <g className="crane-load">
            <rect x="-24" y="192" width="48" height="34" fill="rgba(247,127,0,0.88)" rx="5"
              stroke="rgba(255,210,0,0.7)" strokeWidth="1.5" filter="url(#softglow)"/>
            {/* Load straps */}
            <line x1="-18" y1="192" x2="-6"  y2="169" stroke="rgba(255,220,0,0.8)" strokeWidth="1.5"/>
            <line x1="18"  y1="192" x2="6"   y2="169" stroke="rgba(255,220,0,0.8)" strokeWidth="1.5"/>
            {/* Cross mark on load */}
            <line x1="-14" y1="200" x2="14" y2="220" stroke="rgba(255,255,255,0.25)" strokeWidth="1"/>
            <line x1="14"  y1="200" x2="-14" y2="220" stroke="rgba(255,255,255,0.25)" strokeWidth="1"/>
            <text x="0" y="213" textAnchor="middle" fill="rgba(255,255,255,0.95)" fontSize="8" fontWeight="bold" fontFamily="sans-serif">LOAD</text>
          </g>
        </g>
      </g>

      {/* Crane base & wheels */}
      <rect x="308" y="315" width="64" height="10" fill="rgba(247,127,0,0.6)" rx="3"/>
      <circle cx="320" cy="318" r="5" fill="rgba(20,40,80,0.9)" stroke="rgba(247,127,0,0.5)" strokeWidth="1.5"/>
      <circle cx="340" cy="318" r="5" fill="rgba(20,40,80,0.9)" stroke="rgba(247,127,0,0.5)" strokeWidth="1.5"/>
      <circle cx="360" cy="318" r="5" fill="rgba(20,40,80,0.9)" stroke="rgba(247,127,0,0.5)" strokeWidth="1.5"/>

      {/* Operator cabin */}
      <rect x="326" y="290" width="28" height="22" fill="rgba(10,25,70,0.95)" rx="3" stroke="rgba(247,127,0,0.5)" strokeWidth="1.5"/>
      <rect x="330" y="294" width="8" height="8" fill="rgba(100,180,255,0.5)" rx="1"/>
      <rect x="342" y="294" width="8" height="8" fill="rgba(100,180,255,0.5)" rx="1"/>

      {/* Dust particles */}
      <circle cx="150" cy="152" r="3"   fill="rgba(247,127,0,0.4)"  className="dust dust1"/>
      <circle cx="180" cy="148" r="2"   fill="rgba(255,255,255,0.3)" className="dust dust2"/>
      <circle cx="210" cy="155" r="2.5" fill="rgba(247,127,0,0.3)"  className="dust dust3"/>
      <circle cx="130" cy="158" r="2"   fill="rgba(255,255,255,0.2)" className="dust dust4"/>

      {/* Signal light on tower top */}
      <circle cx="340" cy="50" r="5" fill="#ff3333" className="signal-light" filter="url(#glow)"/>

      <text x="240" y="358" textAnchor="middle" fill="rgba(255,255,255,0.35)"
        fontFamily="sans-serif" fontSize="9" letterSpacing="3">SHREE SHYAM CRANE SERVICE</text>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <div className="hero__bg-grid"></div>
        <div className="hero__bg-crane">
          <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <rect x="370" y="80" width="24" height="420" fill="rgba(255,255,255,0.04)"/>
            <rect x="180" y="80" width="220" height="18" fill="rgba(255,255,255,0.04)"/>
            <rect x="394" y="80" width="120" height="18" fill="rgba(255,255,255,0.03)"/>
            <line x1="382" y1="98" x2="190" y2="500" stroke="rgba(255,255,255,0.04)" strokeWidth="2"/>
            <line x1="260" y1="98" x2="260" y2="350" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5"/>
            <rect x="244" y="350" width="32" height="32" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5"/>
            <rect x="100" y="510" width="600" height="20" fill="rgba(255,255,255,0.03)"/>
            <rect x="560" y="300" width="120" height="210" fill="rgba(255,255,255,0.03)"/>
          </svg>
        </div>
        <div className="hero__glow hero__glow--1"></div>
        <div className="hero__glow hero__glow--2"></div>
      </div>

      <div className="container hero__container">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
          Jaipur Trusted Crane Rental
          </div>
          <h1 className="hero__title">
            Heavy Lift,<br />
            <span className="hero__title-accent">Expert Hands.</span>
          </h1>
          <p className="hero__desc">
            Shree Shyam Crane Service delivers safe, reliable, and powerful crane rental solutions
            for construction, infrastructure, and industrial projects across Jaipur.
          </p>
          <div className="hero__stats">
            <div className="hero__stat"><strong>500+</strong><span>Projects Done</span></div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat"><strong>15+</strong><span>Years Experience</span></div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat"><strong>24/7</strong><span>Support</span></div>
          </div>
          <div className="hero__actions">
            <Link to="/contact" className="btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.09 9.83 19.79 19.79 0 01.12 1.2 2 2 0 012.11 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/></svg>
              Get Free Quote
            </Link>
            <Link to="/services" className="btn-outline">Our Services</Link>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__card-grid">
            <div className="hero__img-main">
              <AnimatedCrane />
            </div>
            <div className="hero__info-cards">
              <div className="hero__info-card">
                <div className="hero__info-icon"><img src="/MobileCrane.png" alt="" /></div>
                <div><strong>Mobile Cranes</strong><p>5T – 100T capacity</p></div>
              </div>
              <div className="hero__info-card">
                <div className="hero__info-icon"><img src="/fast-delivery.png" alt="" /></div>
                <div><strong>Fast Deployment</strong><p>On-site in 24 hrs</p></div>
              </div>
              <div className="hero__info-card hero__info-card--accent">
                <div className="hero__info-icon"><img src="/badge.png" alt="" /></div>
                <div><strong>Certified Team</strong><p>Fully licensed operators</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <span>Scroll Down</span>
        <div className="hero__scroll-line"></div>
      </div>
    </section>
  )
}
