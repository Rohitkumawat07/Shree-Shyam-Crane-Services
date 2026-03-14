import { useState } from 'react'
import '../styles/projects.css'
import { Helmet } from 'react-helmet-async'

const allProjects = [
  {
    img: '/projects/project1.jpg',
    title: 'Heavy Equipment Lifting',
    category: 'Industrial',
    tons: '25T',
    location: 'Jaipur',
    year: '2024',
    color: '#f77f00',
  },
  {
    img: '/projects/project2.jpg',
    title: 'Billboard Structure Erection',
    category: 'Commercial',
    tons: '15T',
    location: 'Jaipur',
    year: '2024',
    color: '#1565c0',
  },
  {
    img: '/projects/project3.jpg',
    title: 'Industrial Chimney Work',
    category: 'Industrial',
    tons: '20T',
    location: 'Jaipur',
    year: '2023',
    color: '#2e7d32',
  },
  {
    img: '/projects/g1.jpg',
    title: 'Tower Erection',
    category: 'Infrastructure',
    tons: '30T',
    location: 'Jaipur',
    year: '2023',
    color: '#7b1fa2',
  },
  {
    img: '/projects/g2.jpg',
    title: 'Road Construction Support',
    category: 'Infrastructure',
    tons: '40T',
    location: 'Jaipur',
    year: '2023',
    color: '#c62828',
  },
  // {
  //   img: '/projects/g4.jpg',
  //   title: 'Transformer Installation',
  //   category: 'Industrial',
  //   tons: '35T',
  //   location: 'Jaipur',
  //   year: '2022',
  //   color: '#e65100',
  // },
]

const categories = ['All', 'Infrastructure', 'Industrial', 'Commercial', 'Residential']

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === active)

  return (
    <>
     <Helmet>
    <title>Our Projects | Crane Lifting Work — Shree Shyam Crane Jaipur</title>
    <meta name="description" content="500+ successful crane projects across Jaipur. Industrial lifting, building construction, bridge work, tower erection. View our portfolio." />
    <meta property="og:title" content="Projects — Shree Shyam Crane Service" />
    <meta property="og:description" content="500+ crane projects in Jaipur, Kota, Jodhpur, Udaipur. View our work." />
  </Helmet>
      <div className="page-banner">
        <div className="container">
          <div className="section-tag">Our Work</div>
          <h1>Completed Projects<br/>& Case Studies</h1>
          <p>A portfolio of successful heavy lifting operations across Jaipur</p>
          <div className="breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Projects</span>
          </div>
        </div>
      </div>

      <section className="projects-page">
        <div className="container">
          <div className="projects-filter">
            {categories.map(c => (
              <button
                key={c}
                className={`filter-btn${active === c ? ' filter-btn--active' : ''}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="projects-page__grid">
            {filtered.map((p, i) => (
              <div key={i} className="project-card" style={{'--proj-color': p.color}}>
                <div className="project-card__visual">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="project-card__img"
                  />
                  <div className="project-card__overlay">
                    <span className="project-card__category">{p.category}</span>
                  </div>
                  <div className="project-card__year">{p.year}</div>
                </div>
                <div className="project-card__body">
                  <h3>{p.title}</h3>
                  <div className="project-card__meta">
                  <span style={{display:'flex', alignItems:'center', gap:'4px'}}>
                    <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 0C3.24 0 1 2.24 1 5c0 3.75 5 10 5 10s5-6.25 5-10c0-2.76-2.24-5-5-5z" fill="#f77f00"/>
                      <circle cx="6" cy="5" r="2" fill="white"/>
                    </svg>
                    {p.location}
                  </span>
                  <span className="project-card__tons">{p.tons} Lift</span>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
