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
          <div>
            <p className="bib-kicker">{evidence.kicker}</p>
            <h4 id={titleId}>{evidence.title}</h4>
          </div>
          <div className="bib-context">
            <p>{evidence.courseContext.label}</p>
            <p>{evidence.courseContext.description}</p>
          </div>
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

        <section className="bib-section" aria-labelledby={`${projectId}-workflow`}>
          <BibliographicHeading id={`${projectId}-workflow`}>Workflow</BibliographicHeading>
          <ol className="bib-workflow">
            {evidence.workflow.map((stage, index) => (
              <li key={stage.title}>
                <span className="bib-step-number" aria-hidden="true">
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

        <section className="bib-section bib-inspect" aria-labelledby={`${projectId}-inspect`}>
          <BibliographicHeading id={`${projectId}-inspect`}>Inspect</BibliographicHeading>
          <div className="bib-inspect-grid">
            <div>
              <h6>Exploratory facets</h6>
              <ul>
                {evidence.facets.map((facet) => (
                  <li key={facet}>{facet}</li>
                ))}
              </ul>
            </div>
            <div>
              <h6>DOI presence</h6>
              <dl className="bib-doi-counts">
                {evidence.doiCounts.map((count) => (
                  <div key={count.label}>
                    <dt>{count.label}</dt>
                    <dd>{count.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
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

        <div className="bib-operation-grid">
          <section className="bib-section" aria-labelledby={`${projectId}-transform`}>
            <BibliographicHeading id={`${projectId}-transform`}>Transform</BibliographicHeading>
            <ul className="bib-operation-list">
              {evidence.transformations.types.map((type) => (
                <li key={type}>{type}</li>
              ))}
            </ul>
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

          <section className="bib-section" aria-labelledby={`${projectId}-examples`}>
            <BibliographicHeading id={`${projectId}-examples`}>Transformation examples</BibliographicHeading>
            <div className="bib-example-list">
              {evidence.transformations.examples.map((example) => (
                <section key={example.field} aria-labelledby={`${projectId}-${example.field.toLowerCase()}-example`}>
                  <h6 id={`${projectId}-${example.field.toLowerCase()}-example`}>{example.field}</h6>
                  <p className="bib-before-after">
                    <code>{example.before}</code>
                    <span aria-hidden="true">→</span>
                    <code>{example.after}</code>
                  </p>
                </section>
              ))}
            </div>
          </section>
        </div>

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

        <section className="bib-section bib-reproducibility" aria-labelledby={`${projectId}-reproducibility`}>
          <BibliographicHeading id={`${projectId}-reproducibility`}>Reproducibility</BibliographicHeading>
          <p>{evidence.reproducibility}</p>
        </section>

      </div>
      <figcaption id={captionId}>{evidence.caption}</figcaption>
    </figure>
  )
}
