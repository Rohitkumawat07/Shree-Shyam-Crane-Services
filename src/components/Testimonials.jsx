import '../styles/home.css'

const testimonials = [
  {
    name: 'Rakesh Sharma',
    role: 'Site Engineer, Jaipur',
    text: 'Shree Shyam Crane Service delivered exactly on time. Their 80-tonne crane handled our girder lifting with precision. Highly recommended for big infrastructure projects.',
    rating: 5,
  },
  {
    name: 'Priya Construction Co.',
    role: 'Contractor, Jaipur',
    text: 'We have worked with them on 3 hotel projects now. Their operators are skilled, equipment is well-maintained, and pricing is transparent. A trusted partner.',
    rating: 5,
  },
  {
    name: 'Mahesh Industries',
    role: 'Plant Manager, Chomu, Jaipur',
    text: 'For our factory machinery installation, we needed a hydraulic crane on short notice. They arranged it within 18 hours. Excellent responsiveness!',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <div className="section-tag">Client Reviews</div>
          <h2 className="section-heading">What Our <span>Clients Say</span></h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-card__quote">"</div>
              <p className="testimonial-card__text">{t.text}</p>
              <div className="testimonial-card__stars">
                {'★'.repeat(t.rating)}
              </div>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
