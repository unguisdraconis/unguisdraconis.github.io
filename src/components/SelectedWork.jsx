import { ProjectArticle } from './ProjectArticle.jsx'
import { SectionHeading } from './SectionHeading.jsx'

export function SelectedWork({ projects }) {
  return (
    <section id="selected-work" className="page-section" aria-labelledby="selected-work-title">
      <SectionHeading
        number="01"
        id="selected-work-title"
        title="Selected Work"
        introduction="Six projects tracing a practice across stewardship planning, metadata, data quality, relational design, analysis, and accessible visualization."
      />
      <div className="project-list">
        {projects.map((project) => (
          <ProjectArticle key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

