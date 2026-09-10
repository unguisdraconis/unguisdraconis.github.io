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
          <h4 id={titleId}>{evidence.title}</h4>
        </header>

        <section className="lcpl-section" aria-labelledby={`${projectId}-process`}>
          <LcplHeading id={`${projectId}-process`}>Selected implementation details</LcplHeading>
          <ol className="lcpl-process-list">
            {evidence.process.map((stage, index) => (
              <li key={stage.title}>
                <span className="lcpl-stage-number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h6>{stage.title}</h6>
                  <p>{stage.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <aside className="lcpl-dissemination" aria-labelledby={`${projectId}-dissemination`}>
          <LcplHeading id={`${projectId}-dissemination`}>Professional dissemination</LcplHeading>
          <p>{evidence.dissemination}</p>
        </aside>

      </div>
      <figcaption id={captionId}>{evidence.caption}</figcaption>
    </figure>
  )
}
