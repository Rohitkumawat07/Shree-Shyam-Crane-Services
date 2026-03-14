import { Link } from 'react-router-dom'
import '../styles/services.css'

// ===== SVG ICONS =====
const MobileCraneIcon = ({ color }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
    {/* Truck body */}
    <rect x="4" y="36" width="36" height="16" rx="3" fill={color} opacity="0.9"/>
    <rect x="4" y="28" width="16" height="10" rx="2" fill={color}/>
    {/* Cabin window */}
    <rect x="6" y="30" width="8" height="6" rx="1" fill="rgba(255,255,255,0.5)"/>
    {/* Wheels */}
    <circle cx="12" cy="52" r="5" fill="#1a1a2e" stroke={color} strokeWidth="2"/>
    <circle cx="12" cy="52" r="2" fill={color}/>
    <circle cx="32" cy="52" r="5" fill="#1a1a2e" stroke={color} strokeWidth="2"/>
    <circle cx="32" cy="52" r="2" fill={color}/>
    {/* Boom arm */}
    <rect x="20" y="10" width="6" height="34" rx="2" fill={color} opacity="0.85"
      transform="rotate(-40 32 40)"/>
    {/* Rope */}
    <line x1="46" y1="10" x2="46" y2="30" stroke="rgba(255,255,255,0.8)" strokeWidth="2"/>
    {/* Hook block */}
    <rect x="40" y="30" width="12" height="8" rx="2" fill="#1a1a2e" stroke={color} strokeWidth="1.5"/>
    {/* Hook */}
    <path d="M43 38 L43 44 Q43 48 47 48 Q51 48 51 44" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    {/* Load */}
    <rect x="36" y="48" width="18" height="10" rx="2" fill={color} opacity="0.6" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
    {/* Load straps */}
    <line x1="40" y1="48" x2="44" y2="38" stroke="rgba(255,220,0,0.7)" strokeWidth="1.5"/>
    <line x1="50" y1="48" x2="46" y2="38" stroke="rgba(255,220,0,0.7)" strokeWidth="1.5"/>
  </svg>
)

const TowerCraneIcon = ({ color }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
    {/* Tower */}
    <rect x="28" y="12" width="8" height="48" rx="2" fill={color} opacity="0.85"/>
    {/* Tower lattice */}
    <line x1="30" y1="18" x2="34" y2="26" stroke="rgba(0,0,0,0.25)" strokeWidth="1.5"/>
    <line x1="34" y1="18" x2="30" y2="26" stroke="rgba(0,0,0,0.25)" strokeWidth="1.5"/>
    <line x1="30" y1="30" x2="34" y2="38" stroke="rgba(0,0,0,0.25)" strokeWidth="1.5"/>
    <line x1="34" y1="30" x2="30" y2="38" stroke="rgba(0,0,0,0.25)" strokeWidth="1.5"/>
    <line x1="30" y1="42" x2="34" y2="50" stroke="rgba(0,0,0,0.25)" strokeWidth="1.5"/>
    <line x1="34" y1="42" x2="30" y2="50" stroke="rgba(0,0,0,0.25)" strokeWidth="1.5"/>
    {/* Main Jib */}
    <rect x="8" y="12" width="28" height="6" rx="2" fill={color}/>
    {/* Counter jib */}
    <rect x="36" y="12" width="20" height="6" rx="2" fill={color} opacity="0.65"/>
    {/* Counterweight */}
    <rect x="48" y="18" width="14" height="10" rx="2" fill={color} opacity="0.45"/>
    {/* Pendant cables */}
    <line x1="32" y1="18" x2="12" y2="18" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2"/>
    <line x1="32" y1="12" x2="14" y2="18" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
    {/* Rope */}
    <line x1="16" y1="18" x2="16" y2="38" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5"/>
    {/* Hook block */}
    <rect x="10" y="38" width="12" height="7" rx="2" fill="#1a1a2e" stroke={color} strokeWidth="1.5"/>
    {/* Hook */}
    <path d="M13 45 L13 50 Q13 54 17 54 Q21 54 21 50" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    {/* Signal light */}
    <circle cx="32" cy="10" r="3.5" fill="#ff3333"/>
    <circle cx="32" cy="10" r="1.5" fill="#ff8888"/>
    {/* Base plate */}
    <rect x="22" y="58" width="20" height="4" rx="2" fill={color} opacity="0.6"/>
  </svg>
)

const HydraulicCraneIcon = ({ color }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
    {/* Truck base */}
    <rect x="2" y="38" width="42" height="14" rx="3" fill={color} opacity="0.85"/>
    <rect x="2" y="30" width="18" height="12" rx="2" fill={color}/>
    {/* Cabin window */}
    <rect x="4" y="32" width="9" height="7" rx="1" fill="rgba(255,255,255,0.5)"/>
    {/* Outriggers */}
    <rect x="4"  y="51" width="5" height="8" rx="1" fill={color} opacity="0.7"/>
    <rect x="35" y="51" width="5" height="8" rx="1" fill={color} opacity="0.7"/>
    <rect x="1"  y="57" width="10" height="3" rx="1" fill={color} opacity="0.5"/>
    <rect x="33" y="57" width="10" height="3" rx="1" fill={color} opacity="0.5"/>
    {/* Wheels */}
    <circle cx="14" cy="52" r="5" fill="#1a1a2e" stroke={color} strokeWidth="2"/>
    <circle cx="14" cy="52" r="2" fill={color}/>
    <circle cx="34" cy="52" r="5" fill="#1a1a2e" stroke={color} strokeWidth="2"/>
    <circle cx="34" cy="52" r="2" fill={color}/>
    {/* Telescopic boom sections */}
    <rect x="22" y="8"  width="7" height="36" rx="2" fill={color} opacity="0.9" transform="rotate(-28 32 40)"/>
    <rect x="24" y="12" width="5" height="28" rx="1" fill={color} opacity="0.65" transform="rotate(-28 32 40)"/>
    <rect x="26" y="16" width="3" height="20" rx="1" fill={color} opacity="0.4" transform="rotate(-28 32 40)"/>
    {/* Rope + Hook */}
    <line x1="52" y1="6" x2="52" y2="22" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5"/>
    <rect x="46" y="22" width="12" height="7" rx="2" fill="#1a1a2e" stroke={color} strokeWidth="1.5"/>
    <path d="M49 29 L49 35 Q49 39 53 39 Q57 39 57 35" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
  </svg>
)

const IndustrialIcon = ({ color }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
    {/* Factory building */}
    <rect x="4" y="30" width="40" height="28" rx="2" fill="rgba(150,150,180,0.2)" stroke={color} strokeWidth="1.8"/>
    {/* Roof */}
    <path d="M2 30 L24 18 L46 30" stroke={color} strokeWidth="2.2" fill={color} fillOpacity="0.15" strokeLinejoin="round"/>
    {/* Windows */}
    <rect x="8"  y="36" width="8" height="8" rx="1" fill={color} opacity="0.5"/>
    <rect x="22" y="36" width="8" height="8" rx="1" fill={color} opacity="0.35"/>
    <rect x="36" y="36" width="8" height="8" rx="1" fill={color} opacity="0.5"/>
    {/* Door */}
    <rect x="19" y="46" width="10" height="12" rx="1" fill={color} opacity="0.45"/>
    {/* Overhead crane rail */}
    <rect x="46" y="6"  width="8" height="46" rx="2" fill={color} opacity="0.8"/>
    <rect x="42" y="18" width="18" height="5" rx="1" fill={color}/>
    {/* Chain */}
    <line x1="52" y1="23" x2="52" y2="36" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeDasharray="3 2"/>
    {/* Hook block */}
    <rect x="46" y="36" width="12" height="7" rx="2" fill="#1a1a2e" stroke={color} strokeWidth="1.5"/>
    {/* Hook */}
    <path d="M49 43 L49 49 Q49 53 53 53 Q57 53 57 49" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    {/* Chimney */}
    <rect x="10" y="10" width="6" height="20" rx="2" fill={color} opacity="0.5"/>
    <rect x="8"  y="8"  width="10" height="4" rx="1" fill={color} opacity="0.7"/>
  </svg>
)

const BuildingIcon = ({ color }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
    {/* Building */}
    <rect x="4" y="22" width="32" height="40" rx="2" fill="rgba(150,150,180,0.15)" stroke={color} strokeWidth="1.8"/>
    {/* Floor lines */}
    <line x1="4"  y1="34" x2="36" y2="34" stroke={color} strokeWidth="1" opacity="0.3"/>
    <line x1="4"  y1="46" x2="36" y2="46" stroke={color} strokeWidth="1" opacity="0.3"/>
    {/* Windows floor 1 */}
    <rect x="8"  y="25" width="6" height="6" rx="1" fill={color} opacity="0.5"/>
    <rect x="18" y="25" width="6" height="6" rx="1" fill={color} opacity="0.35"/>
    <rect x="28" y="25" width="6" height="6" rx="1" fill={color} opacity="0.5"/>
    {/* Windows floor 2 */}
    <rect x="8"  y="37" width="6" height="6" rx="1" fill={color} opacity="0.35"/>
    <rect x="18" y="37" width="6" height="6" rx="1" fill={color} opacity="0.5"/>
    <rect x="28" y="37" width="6" height="6" rx="1" fill={color} opacity="0.35"/>
    {/* Scaffolding */}
    <line x1="2"  y1="22" x2="2"  y2="62" stroke={color} strokeWidth="2.2" opacity="0.6"/>
    <line x1="38" y1="22" x2="38" y2="62" stroke={color} strokeWidth="2.2" opacity="0.6"/>
    <line x1="2"  y1="34" x2="38" y2="34" stroke={color} strokeWidth="1.2" opacity="0.4"/>
    <line x1="2"  y1="46" x2="38" y2="46" stroke={color} strokeWidth="1.2" opacity="0.4"/>
    {/* Tower crane */}
    <rect x="48" y="4"  width="6" height="54" rx="2" fill={color} opacity="0.8"/>
    <rect x="26" y="4"  width="28" height="5" rx="2" fill={color}/>
    <rect x="54" y="4"  width="8" height="5"  rx="2" fill={color} opacity="0.55"/>
    {/* Rope */}
    <line x1="30" y1="9" x2="30" y2="20" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5"/>
    {/* Hook block */}
    <rect x="24" y="20" width="12" height="6" rx="2" fill="#1a1a2e" stroke={color} strokeWidth="1.5"/>
    {/* Hook */}
    <path d="M27 26 L27 31 Q27 34 30 34 Q33 34 33 31" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round"/>
    {/* Signal light */}
    <circle cx="51" cy="3" r="2.5" fill="#ff3333"/>
  </svg>
)

const ErectionIcon = ({ color }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
    {/* Steel frame structure */}
    <rect x="6"  y="20" width="5" height="42" rx="1.5" fill={color} opacity="0.75"/>
    <rect x="28" y="30" width="5" height="32" rx="1.5" fill={color} opacity="0.75"/>
    {/* Horizontal beams */}
    <rect x="6"  y="20" width="42" height="4" rx="1.5" fill={color} opacity="0.85"/>
    <rect x="6"  y="36" width="27" height="3" rx="1.5" fill={color} opacity="0.6"/>
    {/* Diagonal braces */}
    <line x1="6"  y1="62" x2="33" y2="30" stroke={color} strokeWidth="2.5" opacity="0.5" strokeLinecap="round"/>
    <line x1="33" y1="62" x2="6"  y2="30" stroke={color} strokeWidth="2.5" opacity="0.5" strokeLinecap="round"/>
    {/* Beam being lifted */}
    <rect x="36" y="24" width="26" height="5" rx="1.5" fill={color} opacity="0.9"/>
    {/* Sling cables */}
    <line x1="40" y1="24" x2="48" y2="14" stroke="rgba(255,220,0,0.85)" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="58" y1="24" x2="52" y2="14" stroke="rgba(255,220,0,0.85)" strokeWidth="1.8" strokeLinecap="round"/>
    {/* Hook block */}
    <rect x="44" y="8"  width="12" height="7" rx="2" fill="#1a1a2e" stroke={color} strokeWidth="1.5"/>
    {/* Rope going up */}
    <line x1="50" y1="8" x2="50" y2="2" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round"/>
    {/* Hook */}
    <path d="M47 15 L47 20 Q47 23 50 23 Q53 23 53 20" stroke={color} strokeWidth="2.2" fill="none" strokeLinecap="round"/>
    {/* Workers */}
    <circle cx="14" cy="59" r="3" fill={color} opacity="0.65"/>
    <rect x="12" y="58" width="4" height="5" rx="1" fill={color} opacity="0.5"/>
    <circle cx="36" cy="59" r="3" fill={color} opacity="0.65"/>
    <rect x="34" y="58" width="4" height="5" rx="1" fill={color} opacity="0.5"/>
  </svg>
)

const serviceIcons = [MobileCraneIcon, TowerCraneIcon, HydraulicCraneIcon, IndustrialIcon, BuildingIcon, ErectionIcon]

const services = [
  { title: 'Mobile Crane Rental',    desc: 'Flexible mobile cranes from 5T to 100T capacity, available for short-term or long-term rental across Jaipur.',       color: '#f77f00' },
  { title: 'Tower Crane Services',   desc: 'Stationary tower cranes for high-rise construction, with professional installation and operation support.',            color: '#1565c0' },
  { title: 'Hydraulic Crane Hire',   desc: 'All-terrain hydraulic cranes for precise heavy lifting tasks in tight or difficult access locations.',                 color: '#2e7d32' },
  { title: 'Industrial Lifting',     desc: 'Specialized lifting solutions for factories, plants, and industrial installations with expert rigging.',               color: '#7b1fa2' },
  { title: 'Building Construction',  desc: 'End-to-end crane support for building and infrastructure projects from foundation to finishing.',                      color: '#c62828' },
  { title: 'Erection & Dismantling', desc: 'Safe erection and dismantling of structures, precast components, steel frames, and more.',                           color: '#e65100' },
]

export default function Services() {
  return (
    <section className="services-section">
      <div className="container">
        <div className="services-section__header">
          <div>
            <div className="section-tag">What We Offer</div>
            <h2 className="section-heading">Our Crane <span>Services</span></h2>
            <p className="section-sub">From mobile cranes to tower cranes, we have the right machine and team for every lifting challenge.</p>
          </div>
          <Link to="/services" className="btn-primary">View All Services</Link>
        </div>

        <div className="services-section__grid">
          {services.map((s, i) => {
            const Icon = serviceIcons[i]
            return (
              <div key={i} className="service-card" style={{'--card-color': s.color}}>
                <div className="service-card__icon">
                  <Icon color={s.color} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="service-card__arrow">→</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}