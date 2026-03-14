import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/navbar.css'

// const CraneLogo = () => (
//   <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <rect width="38" height="38" rx="8" fill="#f77f00"/>
//     <rect x="10" y="28" width="18" height="3" rx="1.5" fill="white"/>
//     <rect x="18" y="10" width="3" height="21" rx="1.5" fill="white"/>
//     <rect x="10" y="10" width="22" height="3" rx="1.5" fill="white"/>
//     <rect x="10" y="10" width="3" height="8" rx="1.5" fill="white"/>
//     <line x1="19.5" y1="13" x2="14" y2="28" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
//     <circle cx="14" cy="29" r="2" fill="#0a1628"/>
//     <circle cx="24" cy="29" r="2" fill="#0a1628"/>
//   </svg>
// )

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo">
          <img
            src="/logo.png"
            alt="Shree Shyam Crane Service Logo"
            className="navbar__logo-img"
          />
          <div className="navbar__logo-text">
            <span className="navbar__logo-main">Shree Shyam</span>
            <span className="navbar__logo-sub">Crane Service</span>
          </div>
        </Link>

        <nav className={`navbar__nav${menuOpen ? ' navbar__nav--open' : ''}`}>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`navbar__link${location.pathname === link.to ? ' navbar__link--active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="navbar__cta btn-primary">Get Quote</Link>
        </nav>

        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {menuOpen && <div className="navbar__overlay" onClick={() => setMenuOpen(false)} />}
    </header>
  )
}
