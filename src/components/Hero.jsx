export function Hero({ profile }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-index" aria-hidden="true">
        <span>Research folio</span>
        <span>2026</span>
      </div>
      <div className="hero-copy">
        <p className="eyebrow">{profile.descriptor}</p>
        <h1 id="hero-title">{profile.name}</h1>
        <p className="hero-statement">{profile.statement}</p>
        <p className="hero-positioning">{profile.positioning}</p>
        <div className="hero-footer">
          <p>{profile.metadata}</p>
          <a className="text-link" href="#selected-work">
            Explore selected work <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}

