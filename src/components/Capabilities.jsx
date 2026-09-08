import { SectionHeading } from './SectionHeading.jsx'

export function Capabilities({ groups }) {
  return (
    <section id="capabilities" className="page-section" aria-labelledby="capabilities-title">
      <SectionHeading
        number="02"
        id="capabilities-title"
        title="Capabilities"
        introduction="Methods and technologies evidenced across the selected academic and portfolio work."
      />
      <div className="capability-grid">
        {groups.map((group) => (
          <section className="capability-group" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  )
}

