import { SectionHeading } from './SectionHeading.jsx'

export function Experience({ experience }) {
  return (
    <section id="experience" className="page-section" aria-labelledby="experience-title">
      <SectionHeading
        number="04"
        id="experience-title"
        title="Experience"
        introduction="Longstanding work in instruction, program design, client service, and independent project management complements the research-data practice."
      />
      <div className="experience-list">
        {experience.map((item) => (
          <article className="experience-record" key={`${item.organization}-${item.period}`}>
            <p className="record-period">{item.period}</p>
            <div>
              <p className="record-kicker">{item.organization}</p>
              <h3>{item.role}</h3>
              {item.summary && <p>{item.summary}</p>}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

