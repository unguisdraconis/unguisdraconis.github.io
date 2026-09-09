function LcplHeading({ id, children }) {
  return (
    <h5 id={id} className="lcpl-heading">
      {children}
    </h5>
  )
}

export function LcplEvidence({ evidence, projectId }) {
  const titleId = `${projectId}-evidence-title`
  const captionId = `${projectId}-evidence-caption`

  return (
    <figure
      className="lcpl-evidence-figure"
      aria-labelledby={titleId}
      aria-describedby={captionId}
    >
      <div className="lcpl-sheet">
        <header className="lcpl-masthead">
          <div>
            <p className="lcpl-kicker">{evidence.kicker}</p>
            <h4 id={titleId}>{evidence.title}</h4>
          </div>
          <p className="lcpl-framing">{evidence.framing}</p>
        </header>

        <section
          className="lcpl-metrics-section"
          aria-labelledby={`${projectId}-acquisition-frame`}
        >
          <LcplHeading id={`${projectId}-acquisition-frame`}>Acquisition frame</LcplHeading>
          <dl className="lcpl-metrics">
            {evidence.metrics.map((metric) => (
              <div key={metric.label}>
                <dt>{metric.label}</dt>
                <dd>{metric.value}</dd>
              </div>
            ))}
          </dl>
          <p className="lcpl-metric-note">{evidence.metricNote}</p>
        </section>

        <section className="lcpl-section" aria-labelledby={`${projectId}-process`}>
          <LcplHeading id={`${projectId}-process`}>Collection-development process</LcplHeading>
          <ol className="lcpl-process-list">
            {evidence.process.map((stage, index) => (
              <li key={stage.title}>
                <span className="lcpl-stage-number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h6>{stage.title}</h6>
                  <p>{stage.description}</p>
                  {stage.note && <p className="lcpl-stage-note">{stage.note}</p>}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="lcpl-section" aria-labelledby={`${projectId}-collaboration`}>
          <LcplHeading id={`${projectId}-collaboration`}>Collaboration boundary</LcplHeading>
          <div className="lcpl-collaboration-grid">
            {evidence.collaboration.map((group, index) => {
              const groupId = `${projectId}-collaboration-${index + 1}`

              return (
                <section key={group.title} aria-labelledby={groupId}>
                  <h6 id={groupId}>{group.title}</h6>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              )
            })}
          </div>
        </section>

        <section
          className="lcpl-section lcpl-outreach"
          aria-labelledby={`${projectId}-outreach`}
        >
          <LcplHeading id={`${projectId}-outreach`}>Outreach and later activity</LcplHeading>
          <div className="lcpl-outreach-grid">
            <section aria-labelledby={`${projectId}-outreach-implemented`}>
              <h6 id={`${projectId}-outreach-implemented`}>Implemented</h6>
              <ul>
                {evidence.outreach.implemented.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section aria-labelledby={`${projectId}-outreach-planned`}>
              <h6 id={`${projectId}-outreach-planned`}>Planned—not verified as completed</h6>
              <ul>
                {evidence.outreach.planned.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
        </section>

        <aside className="lcpl-dissemination" aria-labelledby={`${projectId}-dissemination`}>
          <LcplHeading id={`${projectId}-dissemination`}>Professional dissemination</LcplHeading>
          <p>{evidence.dissemination}</p>
        </aside>

        <footer className="lcpl-provenance">
          <span>Evidence basis</span>
          <p>{evidence.provenance}</p>
        </footer>
      </div>
      <figcaption id={captionId}>{evidence.caption}</figcaption>
    </figure>
  )
}
