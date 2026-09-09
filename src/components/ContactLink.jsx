export function ContactLink({ contact }) {
  const externalAttributes = contact.external
    ? {
        target: '_blank',
        rel: 'noopener noreferrer',
        'aria-label': `${contact.label}: ${contact.display} (opens in a new tab)`,
      }
    : {}

  return (
    <a href={contact.href} {...externalAttributes}>
      {contact.display}
      {contact.external && <span aria-hidden="true"> ↗</span>}
    </a>
  )
}
