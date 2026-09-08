export function SectionHeading({ number, title, introduction, id }) {
  return (
    <header className="section-heading">
      <p className="section-number" aria-hidden="true">
        {number}
      </p>
      <div>
        <h2 id={id}>{title}</h2>
        {introduction && <p>{introduction}</p>}
      </div>
    </header>
  )
}

