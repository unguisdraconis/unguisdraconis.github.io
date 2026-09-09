import { ContactLink } from './ContactLink.jsx'
import { SectionHeading } from './SectionHeading.jsx'

function ExperienceGroup({ id, title, entries }) {
  return (
    <section className="resume-block" aria-labelledby={id}>
      <h4 id={id}>{title}</h4>
      <div className="resume-entry-list">
        {entries.map((item) => (
          <article className="resume-entry" key={`${item.organization}-${item.period}`}>
            <header className="resume-entry-header">
              <div>
                <h5>{item.role}</h5>
                <p className="resume-entry-organization">{item.organization}</p>
              </div>
              <p className="resume-entry-period">{item.period}</p>
            </header>
            {item.summary && <p>{item.summary}</p>}
          </article>
        ))}
      </div>
    </section>
  )
}

function DevelopmentList({ id, title, items }) {
  return (
    <section className="resume-development-group" aria-labelledby={id}>
      <h5 id={id}>{title}</h5>
      <ul>
        {items.map((item) => (
          <li key={item.program}>
            <strong>{item.program}</strong>
            <span>
              {[item.provider, item.status].filter(Boolean).join(' · ')}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function Resume({ profile, resume }) {
  return (
    <section id="resume" className="resume-section page-section" aria-labelledby="resume-title">
      <SectionHeading
        number="06"
        id="resume-title"
        title="Résumé"
        introduction="A concise public professional summary. Detailed methods, evidence, and project boundaries remain in Selected Work."
      />

      <div className="resume-actions">
        <button type="button" onClick={() => window.print()} aria-describedby="print-resume-note">
          Print résumé
        </button>
        <p id="print-resume-note">Opens the browser print dialog for printing or saving as PDF.</p>
      </div>

      <article className="resume-sheet" aria-label={`${profile.name} public professional résumé`}>
        <header className="resume-header">
          <div>
            <p className="resume-kicker">Public professional résumé</p>
            <h3>{profile.name}</h3>
            <p className="resume-positioning">{profile.positioning}</p>
          </div>
          <address className="resume-contact">
            <p>{profile.location}</p>
            <ul>
              {profile.contacts.map((contact) => (
                <li key={contact.label}>
                  <span>{contact.label}</span>
                  <ContactLink contact={contact} />
                </li>
              ))}
            </ul>
          </address>
        </header>

        <section className="resume-summary" aria-labelledby="resume-summary-title">
          <h4 id="resume-summary-title">Professional Summary</h4>
          <p>{profile.resumeSummary}</p>
        </section>

        <div className="resume-columns">
          <div className="resume-column resume-column-primary">
            <ExperienceGroup
              id="resume-relevant-experience-title"
              title="Relevant Experience"
              entries={resume.relevantExperience}
            />
            <ExperienceGroup
              id="resume-additional-experience-title"
              title="Additional Professional Experience"
              entries={resume.additionalExperience}
            />

            <section className="resume-block" aria-labelledby="resume-education-title">
              <h4 id="resume-education-title">Education</h4>
              <div className="resume-entry-list">
                {resume.education.map((item) => (
                  <article className="resume-entry resume-education-entry" key={item.credential}>
                    <header className="resume-entry-header">
                      <div>
                        <h5>{item.credential}</h5>
                        <p className="resume-entry-organization">{item.institution}</p>
                      </div>
                      <p className="resume-entry-period">{item.year}</p>
                    </header>
                    {item.details?.length > 0 && (
                      <ul className="resume-compact-list">
                        {item.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </article>
                ))}
              </div>
            </section>

            <section className="resume-block" aria-labelledby="resume-development-title">
              <h4 id="resume-development-title">Professional Development</h4>
              <div className="resume-development">
                <DevelopmentList
                  id="resume-development-completed-title"
                  title="Completed"
                  items={resume.development.completed}
                />
                <DevelopmentList
                  id="resume-development-progress-title"
                  title="In progress"
                  items={resume.development.inProgress}
                />
              </div>
            </section>
          </div>

          <aside className="resume-column resume-column-secondary" aria-label="Supporting résumé details">
            <section className="resume-block" aria-labelledby="resume-capabilities-title">
              <h4 id="resume-capabilities-title">Core Capabilities</h4>
              <p className="resume-note resume-capabilities-note">
                {resume.capabilitiesIntroduction}
              </p>
              <dl className="resume-capabilities">
                {resume.capabilities.map((group) => (
                  <div key={group.title}>
                    <dt>{group.title}</dt>
                    <dd>{group.items.join(' · ')}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section className="resume-block" aria-labelledby="resume-selected-work-title">
              <h4 id="resume-selected-work-title">Selected Work</h4>
              <ul className="resume-project-list">
                {resume.selectedWork.map((project) => (
                  <li key={project.id}>
                    <a href={`#${project.id}-title`}>{project.title}</a>
                  </li>
                ))}
              </ul>
              <p className="resume-note">Evidence and limitations appear in the portfolio case studies.</p>
            </section>

            <section className="resume-block" aria-labelledby="resume-presentation-service-title">
              <h4 id="resume-presentation-service-title">Presentation &amp; Service</h4>
              <div className="resume-mini-list">
                {resume.presentations.map((item) => (
                  <article className="resume-mini-entry" key={item.title}>
                    <h5>{item.title}</h5>
                    <p>{item.venue}</p>
                    <p className="resume-entry-period">{item.date}</p>
                  </article>
                ))}
                {resume.service.map((item) => (
                  <article className="resume-mini-entry" key={`${item.organization}-${item.period}`}>
                    <h5>{item.role}</h5>
                    <p>{item.organization}</p>
                    <p className="resume-entry-period">{item.period}</p>
                  </article>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </article>
    </section>
  )
}
