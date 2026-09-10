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
          <h4 id={titleId}>{evidence.title}</h4>
        </header>

        <section className="evidence-section" aria-labelledby={`${projectId}-outputs`}>
          <EvidenceHeading id={`${projectId}-outputs`}>Four planned research outputs</EvidenceHeading>
          <div className="evidence-table-wrap">
            <table className="evidence-table">
              <thead>
                <tr>
                  <th scope="col">Planned output</th>
                  <th scope="col">Purpose</th>
                  <th scope="col">Planned format and stewardship</th>
                </tr>
              </thead>
              <tbody>
                {evidence.outputs.map((output) => (
                  <tr key={output.name}>
                    <th scope="row" data-label="Planned output">
                      {output.name}
                    </th>
                    <td data-label="Purpose">{output.purpose}</td>
                    <td data-label="Planned format and stewardship">{output.stewardship}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="evidence-section" aria-labelledby={`${projectId}-lifecycle`}>
          <EvidenceHeading id={`${projectId}-lifecycle`}>Planned stewardship</EvidenceHeading>
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
            <EvidenceHeading id={`${projectId}-json`}>
              Selected output fields from the DMP Roadmap JSON
            </EvidenceHeading>
            <pre className="evidence-code">
              <code>{evidence.jsonExcerpt}</code>
            </pre>
          </section>

          <section className="evidence-section" aria-labelledby={`${projectId}-repositories`}>
            <EvidenceHeading id={`${projectId}-repositories`}>Repository evaluation</EvidenceHeading>
            <div className="evidence-repository-list">
              {evidence.repositories.map((repository) => {
                const repositoryId = `${projectId}-${repository.name.replaceAll(' ', '-').toLowerCase()}`

                return (
                  <section key={repository.name} aria-labelledby={repositoryId}>
                    <h6 id={repositoryId}>{repository.name}</h6>
                    <p className="evidence-repository-role">{repository.role}</p>
                    <p className="evidence-repository-rationale">{repository.rationale}</p>
                  </section>
                )
              })}
            </div>
            <p className="evidence-policy-note">{evidence.repositoryNote}</p>
          </section>
        </div>

      </div>
      <figcaption id={captionId}>{evidence.caption}</figcaption>
    </figure>
  )
}
