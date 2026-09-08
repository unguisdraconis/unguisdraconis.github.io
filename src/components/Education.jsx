import { SectionHeading } from './SectionHeading.jsx'

export function Education({ education, development }) {
  return (
    <section id="education" className="page-section" aria-labelledby="education-title">
      <SectionHeading
        number="03"
        id="education-title"
        title="Education and Professional Development"
      />
      <div className="background-grid">
        <div>
          <h3 className="subsection-title">Education</h3>
          <div className="record-list">
            {education.map((item) => (
              <article className="record" key={`${item.credential}-${item.year}`}>
                <p className="record-kicker">{item.institution}</p>
                <h4>{item.credential}</h4>
                <p className="record-period">{item.year}</p>
                {item.details?.length > 0 && (
                  <ul>
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
        <div>
          <h3 className="subsection-title">Professional development</h3>
          <div className="record-list development-list">
            {development.map((item) => (
              <article className="record" key={item.program}>
                <p className="record-status">{item.status}</p>
                <h4>{item.program}</h4>
                {item.provider && <p>{item.provider}</p>}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

