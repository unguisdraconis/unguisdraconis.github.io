function DatabaseHeading({ id, children }) {
  return (
    <h5 id={id} className="database-heading">
      {children}
    </h5>
  )
}

function RelationshipPath({ source, junction, target }) {
  return (
    <p className="database-relationship-path">
      <code>{source}</code>
      <span>↔</span>
      <code>{junction}</code>
      <span>↔</span>
      <code>{target}</code>
    </p>
  )
}

export function DatabaseEvidence({ evidence, projectId }) {
  const titleId = `${projectId}-evidence-title`
  const captionId = `${projectId}-evidence-caption`

  return (
    <figure
      className="database-evidence-figure"
      aria-labelledby={titleId}
      aria-describedby={captionId}
    >
      <div className="database-sheet">
        <header className="database-masthead">
          <div>
            <p className="database-kicker">{evidence.kicker}</p>
            <h4 id={titleId}>{evidence.title}</h4>
          </div>
          <p className="database-framing">{evidence.framing}</p>
        </header>

        <dl className="database-metrics" aria-label="Database architecture counts">
          {evidence.metrics.map((metric) => (
            <div key={metric.label}>
              <dt>{metric.label}</dt>
              <dd>{metric.value}</dd>
            </div>
          ))}
        </dl>

        <section className="database-model" aria-labelledby={`${projectId}-book-model`}>
          <DatabaseHeading id={`${projectId}-book-model`}>
            Book-centered composite-key junction model
          </DatabaseHeading>
          <div className="database-model-grid">
            <div className="database-central-entity">
              <p>Central domain entity</p>
              <code>{evidence.centralEntity.name}</code>
              <strong>{evidence.centralEntity.count}</strong>
              <span>{evidence.centralEntity.note}</span>
            </div>

            <ol className="database-book-relationships">
              {evidence.bookRelationships.map((relationship) => (
                <li key={relationship.junction}>
                  <RelationshipPath
                    source={evidence.centralEntity.name}
                    junction={relationship.junction}
                    target={relationship.entity}
                  />
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="database-additional" aria-labelledby={`${projectId}-additional-model`}>
          <DatabaseHeading id={`${projectId}-additional-model`}>
            Additional implemented junctions
          </DatabaseHeading>
          <ul>
            {evidence.additionalRelationships.map((relationship) => (
              <li key={relationship.junction}>
                <RelationshipPath
                  source={relationship.source}
                  junction={relationship.junction}
                  target={relationship.target}
                />
              </li>
            ))}
          </ul>
        </section>

        <section className="database-reference" aria-labelledby={`${projectId}-reference-data`}>
          <div className="database-reference-heading">
            <DatabaseHeading id={`${projectId}-reference-data`}>
              Imported reference data
            </DatabaseHeading>
            <p>
              <strong>{evidence.referenceTotal}</strong> imported reference rows
              <span>{evidence.referenceDescription}</span>
            </p>
          </div>
          <dl className="database-reference-counts">
            {evidence.referenceData.map((table) => (
              <div key={table.name}>
                <dt>
                  <code>{table.name}</code>
                </dt>
                <dd>{table.rows} rows</dd>
              </div>
            ))}
          </dl>
          <p className="database-reference-note">{evidence.referenceRelationship}</p>
        </section>

        <div className="database-detail-grid">
          <section aria-labelledby={`${projectId}-integrity-check`}>
            <DatabaseHeading id={`${projectId}-integrity-check`}>
              {evidence.integrity.label}
            </DatabaseHeading>
            <pre className="database-integrity-code">
              <code>{evidence.integrity.code}</code>
            </pre>
            <p>{evidence.integrity.note}</p>
          </section>

          <section aria-labelledby={`${projectId}-implemented-rules`}>
            <DatabaseHeading id={`${projectId}-implemented-rules`}>
              Design and implementation
            </DatabaseHeading>
            <p>{evidence.rules}</p>
            <p className="database-gap-note">{evidence.implementationGap}</p>
          </section>
        </div>

      </div>
      <figcaption id={captionId}>{evidence.caption}</figcaption>
    </figure>
  )
}
