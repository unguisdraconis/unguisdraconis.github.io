function BibliographicHeading({ id, children }) {
  return (
    <h5 id={id} className="bib-heading">
      {children}
    </h5>
  )
}

export function BibliographicEvidence({ evidence, projectId }) {
  const titleId = `${projectId}-evidence-title`
  const captionId = `${projectId}-evidence-caption`

  return (
    <figure
      className="bib-evidence-figure"
      aria-labelledby={titleId}
      aria-describedby={captionId}
    >
      <div className="bib-sheet">
        <header className="bib-masthead">
          <h4 id={titleId}>{evidence.title}</h4>
        </header>

        <section className="bib-metrics-section" aria-labelledby={`${projectId}-dataset`}>
          <BibliographicHeading id={`${projectId}-dataset`}>Dataset and working rows</BibliographicHeading>
          <dl className="bib-metrics">
            {evidence.metrics.map((metric) => (
              <div key={metric.label}>
                <dt>{metric.label}</dt>
                <dd>{metric.value}</dd>
              </div>
            ))}
          </dl>
          <p className="bib-metric-note">{evidence.metricNote}</p>
        </section>

        <section className="bib-section" aria-labelledby={`${projectId}-clusters`}>
          <BibliographicHeading id={`${projectId}-clusters`}>Cluster and review</BibliographicHeading>
          <table className="bib-cluster-table">
            <caption>Author-name clustering operations recorded in the exercise</caption>
            <thead>
              <tr>
                <th scope="col">Method</th>
                <th scope="col">Candidate clusters</th>
                <th scope="col">Accepted groups</th>
                <th scope="col">Affected cells</th>
              </tr>
            </thead>
            <tbody>
              {evidence.clusters.map((cluster) => (
                <tr key={cluster.method}>
                  <th scope="row" data-label="Method">
                    {cluster.method}
                  </th>
                  <td data-label="Candidate clusters">{cluster.candidates}</td>
                  <td data-label="Accepted groups">{cluster.accepted}</td>
                  <td data-label="Affected cells">{cluster.cells}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="bib-cluster-note">{evidence.clusterNote}</p>
        </section>

        <section className="bib-section" aria-labelledby={`${projectId}-expressions`}>
          <BibliographicHeading id={`${projectId}-expressions`}>Selected expressions</BibliographicHeading>
          <div className="bib-expression-list">
            {evidence.transformations.expressions.map((expression) => (
              <div key={expression.code}>
                <p>{expression.label}</p>
                <pre>
                  <code>{expression.code}</code>
                </pre>
              </div>
            ))}
          </div>
          <p className="bib-expression-note">{evidence.transformations.expressionNote}</p>
        </section>

        <div className="bib-service-grid">
          <section className="bib-section" aria-labelledby={`${projectId}-crossref`}>
            <BibliographicHeading id={`${projectId}-crossref`}>Crossref</BibliographicHeading>
            <p className="bib-service-summary">{evidence.crossref.summary}</p>
            <ol className="bib-service-path">
              {evidence.crossref.path.map((step) => (
                <li key={step}>
                  <code>{step}</code>
                </li>
              ))}
            </ol>
          </section>

          <section className="bib-section" aria-labelledby={`${projectId}-viaf`}>
            <BibliographicHeading id={`${projectId}-viaf`}>VIAF through Conciliator</BibliographicHeading>
            <p className="bib-service-summary">{evidence.viaf.summary}</p>
            <dl className="bib-viaf-metrics">
              {evidence.viaf.metrics.map((metric) => (
                <div key={metric.label}>
                  <dt>{metric.label}</dt>
                  <dd>{metric.value}</dd>
                </div>
              ))}
            </dl>
            <p className="bib-service-note">{evidence.viaf.note}</p>
          </section>
        </div>

      </div>
      <figcaption id={captionId}>{evidence.caption}</figcaption>
    </figure>
  )
}
