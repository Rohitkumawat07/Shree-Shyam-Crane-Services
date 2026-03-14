import { Link } from 'react-router-dom'
import '../styles/projects.css'

const projects = [
  {
    img: '/projects/project1.jpg',
    title: 'Heavy Equipment Lifting',
    category: 'Industrial',
    tons: '25T',
    location: 'Chomu, Jaipur',
    color: '#f77f00',
  },
  {
    img: '/projects/project2.jpg',
    title: 'Billboard Structure Erection',
    category: 'Commercial',
    tons: '15T',
    location: 'Chomu, Jaipur',
    color: '#1565c0',
  },
  {
    img: '/projects/project3.jpg',
    title: 'Industrial Chimney Work',
    category: 'Industrial',
    tons: '20T',
    location: 'Chomu, Jaipur',
    color: '#2e7d32',
  },
  // {
  //   img: '/projects/g1.jpg',
  //   title: 'Tower Erection',
  //   category: 'Infrastructure',
  //   tons: '30T',
  //   location: 'Chomu, Jaipur',
  //   color: '#7b1fa2',
  // },
  // {
  //   img: '/projects/g2.jpg',
  //   title: 'Road Construction Support',
  //   category: 'Infrastructure',
  //   tons: '40T',
  //   location: 'Chomu, Jaipur',
  //   color: '#c62828',
  // },
  // {
  //   img: '/projects/g4.jpg',
  //   title: 'Transformer Installation',
  //   category: 'Industrial',
  //   tons: '35T',
  //   location: 'Chomu, Jaipur',
  //   color: '#e65100',
  // },
]

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="container">
        <div className="projects-section__header">
          <div className="section-tag">Portfolio</div>
          <h2 className="section-heading">Complete <span>Projects</span></h2>
          <p className="section-sub">A glimpse into our successful heavy lifting projects across Jaipur.</p>
        </div>

        <div className="projects-section__grid">
          {projects.map((p, i) => (
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

        <div className="projects-section__footer">
          <Link to="/projects" className="btn-primary">View All Projects</Link>
        </div>
      </div>
    </section>
  )
}
