import { DmpEvidence } from './DmpEvidence.jsx'
import { MetadataEvidence } from './MetadataEvidence.jsx'

function ProjectDetail({ label, children }) {
  if (!children) return null

  return (
    <div className="project-detail">
      <dt>{label}</dt>
      <dd>{children}</dd>
    </div>
  )
}

function DetailList({ title, items }) {
  if (!items?.length) return null

  return (
    <div className="project-list-block">
      <h4>{title}</h4>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export function ProjectArticle({ project }) {
  return (
    <article className="project" aria-labelledby={`${project.id}-title`}>
      <p className="project-number" aria-hidden="true">
        {project.number}
      </p>
      <div className="project-body">
        <header className="project-header">
          <div>
            <p className="project-context">{project.context}</p>
            <h3 id={`${project.id}-title`}>{project.title}</h3>
          </div>
          <p className="project-year">{project.year}</p>
        </header>

        <p className="project-summary">{project.summary}</p>

        {project.evidence?.type === 'dmp-summary' && (
          <DmpEvidence evidence={project.evidence} projectId={project.id} />
        )}

        {project.evidence?.type === 'metadata-anatomy' && (
          <MetadataEvidence evidence={project.evidence} projectId={project.id} />
        )}

        {project.media && (
          <figure className="project-figure">
            <img
              src={project.media.src}
              alt={project.media.alt}
              width="1600"
              height="880"
              loading="lazy"
            />
            {project.media.caption && <figcaption>{project.media.caption}</figcaption>}
          </figure>
        )}

        <dl className="project-details">
          <ProjectDetail label="Challenge">{project.challenge}</ProjectDetail>
          <ProjectDetail label="Role and scope">{project.role}</ProjectDetail>
          <ProjectDetail label="Approach">{project.approach}</ProjectDetail>
          <ProjectDetail label="Result">{project.result}</ProjectDetail>
          <ProjectDetail label="AI assistance">{project.aiAssistance}</ProjectDetail>
        </dl>

        <div className="project-supporting">
          <DetailList title="Methods" items={project.methods} />
          <DetailList title="Deliverables" items={project.deliverables} />
          <DetailList title="Data provenance" items={project.provenance} />
          <DetailList title="Accessibility decisions" items={project.accessibility} />
          <DetailList title="Limits" items={project.limitations} />
        </div>

        {project.links?.length > 0 && (
          <div className="project-links" aria-label={`${project.title} links`}>
            {project.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
