import { ContactLink } from './ContactLink.jsx'
import { SectionHeading } from './SectionHeading.jsx'

export function Contact({ profile, invitation }) {
  return (
    <section id="contact" className="contact-section page-section" aria-labelledby="contact-title">
      <SectionHeading number="07" id="contact-title" title="Contact" />
      <div className="contact-panel">
        <div className="contact-introduction">
          <p className="contact-kicker">Start a conversation</p>
          <p>{invitation}</p>
        </div>
        <div className="contact-details">
          <p className="contact-location">Based in {profile.location}</p>
          <dl className="contact-list">
            {profile.contacts.map((contact) => (
              <div key={contact.label}>
                <dt>{contact.label}</dt>
                <dd>
                  <ContactLink contact={contact} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
