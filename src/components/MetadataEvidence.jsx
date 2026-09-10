function MetadataHeading({ id, children }) {
  return (
    <h5 id={id} className="metadata-heading">
      {children}
    </h5>
  )
}

function XmlExcerpt({ excerpt }) {
  return (
    <section className="metadata-xml-block" aria-labelledby={`xml-${excerpt.title.replaceAll(' ', '-').toLowerCase()}`}>
      <h6 id={`xml-${excerpt.title.replaceAll(' ', '-').toLowerCase()}`}>{excerpt.title}</h6>
      <pre>
        <code>{excerpt.code}</code>
      </pre>
    </section>
  )
}

export function MetadataEvidence({ evidence, projectId }) {
  const titleId = `${projectId}-evidence-title`
  const captionId = `${projectId}-evidence-caption`

  return (
    <figure
      className="metadata-evidence-figure"
      aria-labelledby={titleId}
      aria-describedby={captionId}
    >
      <div className="metadata-sheet">
        <header className="metadata-masthead">
          <h4 id={titleId}>{evidence.title}</h4>
        </header>

        <div className="metadata-count" aria-label={`${evidence.nodeCount} ${evidence.nodeCountLabel}; ${evidence.uniqueCount}`}>
          <strong>{evidence.nodeCount}</strong>
          <span>{evidence.nodeCountLabel}</span>
          <span>{evidence.uniqueCount}</span>
        </div>

        <section className="metadata-section" aria-labelledby={`${projectId}-anatomy`}>
          <MetadataHeading id={`${projectId}-anatomy`}>Seven-section metadata anatomy</MetadataHeading>
          <div className="metadata-root">
            <code>&lt;metadata&gt;</code>
            <span>FGDC CSDGM-structured record</span>
          </div>
          <ol className="metadata-anatomy-list">
            {evidence.sections.map((section, index) => (
              <li key={section.tag}>
                <span className="metadata-section-number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <code>&lt;{section.tag}&gt;</code>
                  <h6>{section.name}</h6>
                  <p>{section.terms.join(' · ')}</p>
                  {section.note && <p className="metadata-section-note">{section.note}</p>}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="metadata-section" aria-labelledby={`${projectId}-xml`}>
          <MetadataHeading id={`${projectId}-xml`}>Selected XML fields</MetadataHeading>
          <div className="metadata-xml-grid">
            {evidence.excerpts.map((excerpt) => (
              <XmlExcerpt key={excerpt.title} excerpt={excerpt} />
            ))}
          </div>
        </section>

        <section className="metadata-section metadata-decisions" aria-labelledby={`${projectId}-decisions`}>
          <MetadataHeading id={`${projectId}-decisions`}>Selected metadata decisions</MetadataHeading>
          <ul>
            {evidence.decisions.map((decision) => (
              <li key={decision}>{decision}</li>
            ))}
          </ul>
        </section>

      </div>
      <figcaption id={captionId}>{evidence.caption}</figcaption>
    </figure>
  )
}
