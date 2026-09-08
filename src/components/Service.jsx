import { SectionHeading } from './SectionHeading.jsx'

export function Service({ presentations, service }) {
  return (
    <section id="service" className="page-section" aria-labelledby="service-title">
      <SectionHeading number="05" id="service-title" title="Presentations and Service" />
      <div className="background-grid">
        <div>
          <h3 className="subsection-title">Presentations</h3>
          {presentations.map((item) => (
            <article className="record" key={item.title}>
              <p className="record-kicker">{item.type}</p>
              <h4>{item.title}</h4>
              <p>{item.venue}</p>
              <p className="record-period">{item.date}</p>
            </article>
          ))}
        </div>
        <div>
          <h3 className="subsection-title">Service</h3>
          {service.map((item) => (
            <article className="record" key={`${item.organization}-${item.period}`}>
              <p className="record-kicker">{item.organization}</p>
              <h4>{item.role}</h4>
              <p className="record-period">{item.period}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

