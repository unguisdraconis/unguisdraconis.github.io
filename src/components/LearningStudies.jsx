export function LearningStudies({ studies }) {
  return (
    <section
      id="learning-studies"
      className="learning-studies page-section"
      aria-labelledby="learning-studies-title"
    >
      <header className="studies-heading">
        <p className="studies-kicker">Development record · Selected studies</p>
        <h2 id="learning-studies-title">Learning &amp; Visualization Studies</h2>
        <p>
          Compact studies retained to show experimentation, development over time, and the
          judgment carried into later work.
        </p>
      </header>

      <div className="study-list">
        {studies.map((study) => (
          <article className="study-entry" key={study.id} aria-labelledby={`${study.id}-title`}>
            <header className="study-entry-heading">
              <p>{study.context}</p>
              <h3 id={`${study.id}-title`}>{study.title}</h3>
            </header>

            <div className="study-entry-body">
              <p className="study-summary">{study.summary}</p>

              <dl className="study-notes">
                {study.notes.map((note) => (
                  <div key={note.label}>
                    <dt>{note.label}</dt>
                    <dd>{note.text}</dd>
                  </div>
                ))}
              </dl>

              {study.links?.length > 0 && (
                <div className="study-links" aria-label={`${study.title} links`}>
                  {study.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${link.label} — ${study.title} (opens in a new tab)`}
                    >
                      {link.label} <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
