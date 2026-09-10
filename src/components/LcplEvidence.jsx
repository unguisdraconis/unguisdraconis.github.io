export function LcplEvidence({ evidence, projectId }) {
  const titleId = `${projectId}-dissemination`

  return (
    <aside className="lcpl-dissemination" aria-labelledby={titleId}>
      <h4 id={titleId}>Professional dissemination</h4>
      <p>{evidence.dissemination}</p>
    </aside>
  )
}
