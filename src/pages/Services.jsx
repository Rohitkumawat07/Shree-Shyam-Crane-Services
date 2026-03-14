import '../styles/services.css'
import { Helmet } from 'react-helmet-async'

// ===== SVG ICONS =====
const MobileCraneIcon = ({ color }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
    <rect x="4" y="36" width="36" height="16" rx="3" fill={color} opacity="0.9"/>
    <rect x="4" y="28" width="16" height="10" rx="2" fill={color}/>
    <rect x="6" y="30" width="8" height="6" rx="1" fill="rgba(255,255,255,0.5)"/>
    <circle cx="12" cy="52" r="5" fill="#1a1a2e" stroke={color} strokeWidth="2"/>
    <circle cx="12" cy="52" r="2" fill={color}/>
    <circle cx="32" cy="52" r="5" fill="#1a1a2e" stroke={color} strokeWidth="2"/>
    <circle cx="32" cy="52" r="2" fill={color}/>
    <rect x="20" y="10" width="6" height="34" rx="2" fill={color} opacity="0.85" transform="rotate(-40 32 40)"/>
    <line x1="46" y1="10" x2="46" y2="30" stroke="rgba(255,255,255,0.8)" strokeWidth="2"/>
    <rect x="40" y="30" width="12" height="8" rx="2" fill="#1a1a2e" stroke={color} strokeWidth="1.5"/>
    <path d="M43 38 L43 44 Q43 48 47 48 Q51 48 51 44" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <rect x="36" y="48" width="18" height="10" rx="2" fill={color} opacity="0.6" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
    <line x1="40" y1="48" x2="44" y2="38" stroke="rgba(255,220,0,0.7)" strokeWidth="1.5"/>
    <line x1="50" y1="48" x2="46" y2="38" stroke="rgba(255,220,0,0.7)" strokeWidth="1.5"/>
  </svg>
)

const TowerCraneIcon = ({ color }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
    <rect x="28" y="12" width="8" height="48" rx="2" fill={color} opacity="0.85"/>
    <line x1="30" y1="18" x2="34" y2="26" stroke="rgba(0,0,0,0.25)" strokeWidth="1.5"/>
    <line x1="34" y1="18" x2="30" y2="26" stroke="rgba(0,0,0,0.25)" strokeWidth="1.5"/>
    <line x1="30" y1="30" x2="34" y2="38" stroke="rgba(0,0,0,0.25)" strokeWidth="1.5"/>
    <line x1="34" y1="30" x2="30" y2="38" stroke="rgba(0,0,0,0.25)" strokeWidth="1.5"/>
    <line x1="30" y1="42" x2="34" y2="50" stroke="rgba(0,0,0,0.25)" strokeWidth="1.5"/>
    <line x1="34" y1="42" x2="30" y2="50" stroke="rgba(0,0,0,0.25)" strokeWidth="1.5"/>
    <rect x="8"  y="12" width="28" height="6" rx="2" fill={color}/>
    <rect x="36" y="12" width="20" height="6" rx="2" fill={color} opacity="0.65"/>
    <rect x="48" y="18" width="14" height="10" rx="2" fill={color} opacity="0.45"/>
    <line x1="32" y1="18" x2="12" y2="18" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2"/>
    <line x1="32" y1="12" x2="14" y2="18" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
    <line x1="16" y1="18" x2="16" y2="38" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5"/>
    <rect x="10" y="38" width="12" height="7" rx="2" fill="#1a1a2e" stroke={color} strokeWidth="1.5"/>
    <path d="M13 45 L13 50 Q13 54 17 54 Q21 54 21 50" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <circle cx="32" cy="10" r="3.5" fill="#ff3333"/>
    <circle cx="32" cy="10" r="1.5" fill="#ff8888"/>
    <rect x="22" y="58" width="20" height="4" rx="2" fill={color} opacity="0.6"/>
  </svg>
)

const HydraulicCraneIcon = ({ color }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
    <rect x="2" y="38" width="42" height="14" rx="3" fill={color} opacity="0.85"/>
    <rect x="2" y="30" width="18" height="12" rx="2" fill={color}/>
    <rect x="4" y="32" width="9" height="7" rx="1" fill="rgba(255,255,255,0.5)"/>
    <rect x="4"  y="51" width="5" height="8" rx="1" fill={color} opacity="0.7"/>
    <rect x="35" y="51" width="5" height="8" rx="1" fill={color} opacity="0.7"/>
    <rect x="1"  y="57" width="10" height="3" rx="1" fill={color} opacity="0.5"/>
    <rect x="33" y="57" width="10" height="3" rx="1" fill={color} opacity="0.5"/>
    <circle cx="14" cy="52" r="5" fill="#1a1a2e" stroke={color} strokeWidth="2"/>
    <circle cx="14" cy="52" r="2" fill={color}/>
    <circle cx="34" cy="52" r="5" fill="#1a1a2e" stroke={color} strokeWidth="2"/>
    <circle cx="34" cy="52" r="2" fill={color}/>
    <rect x="22" y="8"  width="7" height="36" rx="2" fill={color} opacity="0.9"  transform="rotate(-28 32 40)"/>
    <rect x="24" y="12" width="5" height="28" rx="1" fill={color} opacity="0.65" transform="rotate(-28 32 40)"/>
    <rect x="26" y="16" width="3" height="20" rx="1" fill={color} opacity="0.4"  transform="rotate(-28 32 40)"/>
    <line x1="52" y1="6" x2="52" y2="22" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5"/>
    <rect x="46" y="22" width="12" height="7" rx="2" fill="#1a1a2e" stroke={color} strokeWidth="1.5"/>
    <path d="M49 29 L49 35 Q49 39 53 39 Q57 39 57 35" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
  </svg>
)

const IndustrialIcon = ({ color }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
    <rect x="4" y="30" width="40" height="28" rx="2" fill="rgba(150,150,180,0.2)" stroke={color} strokeWidth="1.8"/>
    <path d="M2 30 L24 18 L46 30" stroke={color} strokeWidth="2.2" fill={color} fillOpacity="0.15" strokeLinejoin="round"/>
    <rect x="8"  y="36" width="8" height="8" rx="1" fill={color} opacity="0.5"/>
    <rect x="22" y="36" width="8" height="8" rx="1" fill={color} opacity="0.35"/>
    <rect x="36" y="36" width="8" height="8" rx="1" fill={color} opacity="0.5"/>
    <rect x="19" y="46" width="10" height="12" rx="1" fill={color} opacity="0.45"/>
    <rect x="46" y="6"  width="8" height="46" rx="2" fill={color} opacity="0.8"/>
    <rect x="42" y="18" width="18" height="5" rx="1" fill={color}/>
    <line x1="52" y1="23" x2="52" y2="36" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeDasharray="3 2"/>
    <rect x="46" y="36" width="12" height="7" rx="2" fill="#1a1a2e" stroke={color} strokeWidth="1.5"/>
    <path d="M49 43 L49 49 Q49 53 53 53 Q57 53 57 49" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <rect x="10" y="10" width="6" height="20" rx="2" fill={color} opacity="0.5"/>
    <rect x="8"  y="8"  width="10" height="4" rx="1" fill={color} opacity="0.7"/>
  </svg>
)

const BuildingIcon = ({ color }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
    <rect x="4" y="22" width="32" height="40" rx="2" fill="rgba(150,150,180,0.15)" stroke={color} strokeWidth="1.8"/>
    <line x1="4"  y1="34" x2="36" y2="34" stroke={color} strokeWidth="1" opacity="0.3"/>
    <line x1="4"  y1="46" x2="36" y2="46" stroke={color} strokeWidth="1" opacity="0.3"/>
    <rect x="8"  y="25" width="6" height="6" rx="1" fill={color} opacity="0.5"/>
    <rect x="18" y="25" width="6" height="6" rx="1" fill={color} opacity="0.35"/>
    <rect x="28" y="25" width="6" height="6" rx="1" fill={color} opacity="0.5"/>
    <rect x="8"  y="37" width="6" height="6" rx="1" fill={color} opacity="0.35"/>
    <rect x="18" y="37" width="6" height="6" rx="1" fill={color} opacity="0.5"/>
    <rect x="28" y="37" width="6" height="6" rx="1" fill={color} opacity="0.35"/>
    <line x1="2"  y1="22" x2="2"  y2="62" stroke={color} strokeWidth="2.2" opacity="0.6"/>
    <line x1="38" y1="22" x2="38" y2="62" stroke={color} strokeWidth="2.2" opacity="0.6"/>
    <line x1="2"  y1="34" x2="38" y2="34" stroke={color} strokeWidth="1.2" opacity="0.4"/>
    <line x1="2"  y1="46" x2="38" y2="46" stroke={color} strokeWidth="1.2" opacity="0.4"/>
    <rect x="48" y="4"  width="6" height="54" rx="2" fill={color} opacity="0.8"/>
    <rect x="26" y="4"  width="28" height="5" rx="2" fill={color}/>
    <rect x="54" y="4"  width="8" height="5"  rx="2" fill={color} opacity="0.55"/>
    <line x1="30" y1="9" x2="30" y2="20" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5"/>
    <rect x="24" y="20" width="12" height="6" rx="2" fill="#1a1a2e" stroke={color} strokeWidth="1.5"/>
    <path d="M27 26 L27 31 Q27 34 30 34 Q33 34 33 31" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round"/>
    <circle cx="51" cy="3" r="2.5" fill="#ff3333"/>
  </svg>
)

const ErectionIcon = ({ color }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
    <rect x="6"  y="20" width="5" height="42" rx="1.5" fill={color} opacity="0.75"/>
    <rect x="28" y="30" width="5" height="32" rx="1.5" fill={color} opacity="0.75"/>
    <rect x="6"  y="20" width="42" height="4" rx="1.5" fill={color} opacity="0.85"/>
    <rect x="6"  y="36" width="27" height="3" rx="1.5" fill={color} opacity="0.6"/>
    <line x1="6"  y1="62" x2="33" y2="30" stroke={color} strokeWidth="2.5" opacity="0.5" strokeLinecap="round"/>
    <line x1="33" y1="62" x2="6"  y2="30" stroke={color} strokeWidth="2.5" opacity="0.5" strokeLinecap="round"/>
    <rect x="36" y="24" width="26" height="5" rx="1.5" fill={color} opacity="0.9"/>
    <line x1="40" y1="24" x2="48" y2="14" stroke="rgba(255,220,0,0.85)" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="58" y1="24" x2="52" y2="14" stroke="rgba(255,220,0,0.85)" strokeWidth="1.8" strokeLinecap="round"/>
    <rect x="44" y="8"  width="12" height="7" rx="2" fill="#1a1a2e" stroke={color} strokeWidth="1.5"/>
    <line x1="50" y1="8" x2="50" y2="2" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M47 15 L47 20 Q47 23 50 23 Q53 23 53 20" stroke={color} strokeWidth="2.2" fill="none" strokeLinecap="round"/>
    <circle cx="14" cy="59" r="3" fill={color} opacity="0.65"/>
    <circle cx="36" cy="59" r="3" fill={color} opacity="0.65"/>
  </svg>
)

const BridgeIcon = ({ color }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
    {/* Water */}
    <path d="M2 52 Q10 48 18 52 Q26 56 34 52 Q42 48 50 52 Q58 56 62 52 L62 62 L2 62 Z" fill={color} opacity="0.2"/>
    {/* Bridge deck */}
    <rect x="2" y="36" width="60" height="5" rx="2" fill={color} opacity="0.9"/>
    {/* Left tower */}
    <rect x="10" y="14" width="7" height="28" rx="2" fill={color} opacity="0.85"/>
    {/* Right tower */}
    <rect x="47" y="14" width="7" height="28" rx="2" fill={color} opacity="0.85"/>
    {/* Tower crossbars */}
    <rect x="8"  y="20" width="11" height="3" rx="1" fill={color} opacity="0.6"/>
    <rect x="45" y="20" width="11" height="3" rx="1" fill={color} opacity="0.6"/>
    {/* Main cables */}
    <path d="M13 14 Q32 28 51 14" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    {/* Suspender cables */}
    <line x1="20" y1="22" x2="20" y2="36" stroke={color} strokeWidth="1.2" opacity="0.6"/>
    <line x1="27" y1="26" x2="27" y2="36" stroke={color} strokeWidth="1.2" opacity="0.6"/>
    <line x1="32" y1="28" x2="32" y2="36" stroke={color} strokeWidth="1.2" opacity="0.6"/>
    <line x1="37" y1="26" x2="37" y2="36" stroke={color} strokeWidth="1.2" opacity="0.6"/>
    <line x1="44" y1="22" x2="44" y2="36" stroke={color} strokeWidth="1.2" opacity="0.6"/>
    {/* Tower tops */}
    <rect x="11" y="10" width="5" height="6" rx="1" fill={color}/>
    <rect x="48" y="10" width="5" height="6" rx="1" fill={color}/>
    {/* Road markings */}
    <line x1="20" y1="38" x2="26" y2="38" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeDasharray="4 3"/>
    <line x1="32" y1="38" x2="38" y2="38" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeDasharray="4 3"/>
  </svg>
)

const MaintenanceIcon = ({ color }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
    {/* Gear big */}
    <path d="M32 18 L34 12 L38 14 L40 10 L44 13 L42 17 L46 20 L50 18 L52 22 L48 25 L49 30 L54 31 L53 35 L48 35 L46 40 L50 43 L47 46 L44 43 L39 46 L40 51 L36 52 L34 47 L30 47 L28 52 L24 51 L25 46 L20 43 L17 46 L14 43 L18 40 L16 35 L11 35 L10 31 L15 30 L16 25 L12 22 L14 18 L18 20 L22 17 L20 13 L24 10 L26 14 L30 12 Z" fill={color} opacity="0.25" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
    {/* Inner circle */}
    <circle cx="32" cy="32" r="8" fill={color} opacity="0.5" stroke={color} strokeWidth="2"/>
    <circle cx="32" cy="32" r="3.5" fill={color}/>
    {/* Wrench overlay */}
    <path d="M44 8 Q50 8 50 14 Q50 18 46 19 L30 36 Q29 39 26 40 Q22 41 20 38 Q18 35 20 32 Q21 29 24 28 L41 12 Q42 8 44 8 Z" fill={color} opacity="0.3" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
    <circle cx="24" cy="36" r="3" fill={color} opacity="0.7"/>
    <rect x="46" y="7" width="5" height="8" rx="2" fill={color} opacity="0.6" transform="rotate(15 48 11)"/>
  </svg>
)

const serviceIcons = [
  MobileCraneIcon, TowerCraneIcon, HydraulicCraneIcon, IndustrialIcon,
  BuildingIcon, ErectionIcon, BridgeIcon, MaintenanceIcon
]

const allServices = [
  { title: 'Mobile Crane Rental',          desc: 'Flexible mobile cranes from 5T to 100T capacity. Perfect for general construction, industrial projects, and infrastructure work. Available on daily, weekly, or monthly hire.',                                                       color: '#f77f00', capacity: '5T – 100T'   },
  { title: 'Tower Crane Services',          desc: 'Heavy-duty tower cranes for high-rise residential and commercial buildings. We handle complete installation, operation by certified personnel, and safe dismantling.',                                                               color: '#1565c0', capacity: '50T – 120T'  },
  { title: 'Hydraulic Crane Hire',          desc: 'All-terrain hydraulic cranes capable of working in tight spaces, confined job sites, and difficult terrain. Perfect for complex lifts requiring precision placement.',                                                              color: '#2e7d32', capacity: '10T – 80T'   },
  { title: 'Industrial Lifting',            desc: 'Specialized crane solutions for factories, power plants, refineries, and industrial installations. Full rigging and supervision provided by experienced engineers.',                                                               color: '#7b1fa2', capacity: 'Up to 100T'  },
  { title: 'Building Construction Support', desc: 'Comprehensive crane support for multi-story buildings including material hoisting, precast panel placement, steel erection, and formwork operations.',                                                                              color: '#c62828', capacity: '20T – 80T'   },
  { title: 'Erection & Dismantling',        desc: 'Safe and efficient erection and dismantling of steel structures, precast components, pre-engineered buildings, and industrial equipment nationwide.',                                                                              color: '#e65100', capacity: 'Custom'      },
  { title: 'Bridge & Infrastructure',       desc: 'Specialized cranes and lifting solutions for bridge girder placement, flyover construction, metro rail projects, and other major infrastructure developments.',                                                                     color: '#00796b', capacity: '80T – 200T'  },
  { title: 'Maintenance Lifts',             desc: 'Crane hire for scheduled and emergency maintenance work at factories, warehouses, substations, and commercial properties across Rajasthan.',                                                                                       color: '#455a64', capacity: '5T – 50T'    },
]

export default function Services() {
  return (
    <>
    <Helmet>
    <title>Crane Services | Mobile, Tower, Hydraulic Crane — Jaipur</title>
    <meta name="description" content="Mobile crane, tower crane, hydraulic crane, industrial lifting, bridge construction. 5T to 200T capacity. Available across Jaipur. Get free quote." />
    <meta property="og:title" content="Crane Services — Shree Shyam Crane Service" />
    <meta property="og:description" content="8 specialized crane services. 5T to 200T capacity. Rajasthan wide coverage." />
  </Helmet>
      <div className="page-banner">
        <div className="container">
          <div className="section-tag">What We Offer</div>
          <h1>Our Crane & Lifting<br />Services</h1>
          <p>Comprehensive crane rental solutions for every industry</p>
          <div className="breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Services</span>
          </div>
        </div>
      </div>

      <section className="services-page">
        <div className="container">
          <div className="services-page__intro">
            <div className="section-tag">Full Service Range</div>
            <h2 className="section-heading">Lifting Solutions for <span>Every Need</span></h2>
            <p className="section-sub">Whether it's a 5-tonne pick or a 200-tonne heavy lift, our fleet and team are ready to deliver safely and on time.</p>
          </div>

          <div className="services-section__grid">
            {allServices.map((s, i) => {
              const Icon = serviceIcons[i]
              return (
                <div key={i} className="service-card service-card--page" style={{ '--card-color': s.color }}>
                  <div className="service-card__icon">
                    <Icon color={s.color} />
                  </div>
                  <div className="service-card__cap">{s.capacity}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <div className="service-card__arrow">Learn More →</div>
                </div>
              )
            })}
          </div>

          <div className="services-page__features">
            <div className="feature-item">
              <div className="feature-item__num">20+</div>
              <div className="feature-item__label">Cranes in Fleet</div>
            </div>
            <div className="feature-item">
              <div className="feature-item__num">5T–200T</div>
              <div className="feature-item__label">Lifting Capacity</div>
            </div>
            <div className="feature-item">
              <div className="feature-item__num">24/7</div>
              <div className="feature-item__label">Availability</div>
            </div>
            <div className="feature-item">
              <div className="feature-item__num">100%</div>
              <div className="feature-item__label">Safety Record</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}