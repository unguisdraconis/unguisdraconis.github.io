function EvidenceHeading({ id, children }) {
  return (
    <h5 id={id} className="evidence-heading">
      {children}
    </h5>
  )
}

export function DmpEvidence({ evidence, projectId }) {
  const titleId = `${projectId}-evidence-title`
  const captionId = `${projectId}-evidence-caption`

  return (
    <figure className="evidence-figure" aria-labelledby={titleId} aria-describedby={captionId}>
      <div className="evidence-sheet">
        <header className="evidence-masthead">
          <div>
            <p className="evidence-kicker">{evidence.kicker}</p>
            <h4 id={titleId}>{evidence.title}</h4>
          </div>
          <div className="evidence-scope">
            <p>{evidence.scopeLabel}</p>
            <p>{evidence.scope}</p>
          </div>
        </header>

        <section className="evidence-section" aria-labelledby={`${projectId}-outputs`}>
          <EvidenceHeading id={`${projectId}-outputs`}>Four planned research outputs</EvidenceHeading>
          <div className="evidence-table-wrap">
            <table className="evidence-table">
              <thead>
                <tr>
                  <th scope="col">Planned output</th>
                  <th scope="col">Purpose</th>
                  <th scope="col">Planned format / stewardship</th>
                </tr>
              </thead>
              <tbody>
                {evidence.outputs.map((output) => (
                  <tr key={output.name}>
                    <th scope="row" data-label="Planned output">
                      {output.name}
                    </th>
                    <td data-label="Purpose">{output.purpose}</td>
                    <td data-label="Planned format / stewardship">{output.stewardship}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="evidence-section" aria-labelledby={`${projectId}-lifecycle`}>
          <EvidenceHeading id={`${projectId}-lifecycle`}>Planned lifecycle</EvidenceHeading>
          <ol className="evidence-lifecycle">
            {evidence.lifecycle.map((item, index) => (
              <li key={item.step}>
                <span className="evidence-step-number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <strong>{item.step}</strong>
                <span>{item.note}</span>
              </li>
            ))}
          </ol>
        </section>

        <div className="evidence-split">
          <section className="evidence-section" aria-labelledby={`${projectId}-json`}>
            <EvidenceHeading id={`${projectId}-json`}>Machine-readable DMP</EvidenceHeading>
            <p className="evidence-code-label">Selected structural excerpt</p>
            <pre className="evidence-code">
              <code>{evidence.jsonExcerpt}</code>
            </pre>
          </section>

          <section className="evidence-section" aria-labelledby={`${projectId}-stewardship`}>
            <EvidenceHeading id={`${projectId}-stewardship`}>
              Prospective stewardship considerations
            </EvidenceHeading>
            <ul className="evidence-checklist">
              {evidence.stewardship.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        <section className="evidence-section" aria-labelledby={`${projectId}-repositories`}>
          <EvidenceHeading id={`${projectId}-repositories`}>Repository evaluation</EvidenceHeading>
          <div className="evidence-repositories">
            {evidence.repositories.map((repository) => {
              const repositoryId = `${projectId}-${repository.name.replaceAll(' ', '-').toLowerCase()}`

              return (
                <section key={repository.name} aria-labelledby={repositoryId}>
                  <p className="evidence-repository-role">{repository.role}</p>
                  <h6 id={repositoryId}>{repository.name}</h6>
                  <ul>
                    {repository.considerations.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              )
            })}
          </div>
          <p className="evidence-policy-note">{evidence.repositoryNote}</p>
        </section>

      </div>
      <figcaption id={captionId}>{evidence.caption}</figcaption>
    </figure>
  )
}
