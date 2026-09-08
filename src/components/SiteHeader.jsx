const navigation = [
  { label: 'Selected work', href: '#selected-work' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Background', href: '#education' },
  { label: 'Experience', href: '#experience' },
]

export function SiteHeader({ name }) {
  return (
    <header className="site-header">
      <a className="site-identity" href="#top" aria-label={`${name}, back to top`}>
        <span aria-hidden="true">JK</span>
        <span>{name}</span>
      </a>
      <nav aria-label="Primary navigation">
        <ul className="primary-nav">
          {navigation.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

