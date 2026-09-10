import { capabilityGroups } from './capabilities.js'
import { education, professionalDevelopment } from './education.js'
import { experience } from './experience.js'
import { projects } from './projects.js'
import { presentations, service } from './service.js'

const selectedProjectIds = [
  'agricultural-research-dmp',
  'usgs-lidar-metadata',
  'bibliographic-reconciliation',
  'multilingual-library-database',
]

const evidencedCapabilities = new Set(capabilityGroups.flatMap((group) => group.items))

function selectCapabilities(items) {
  const unsupportedItems = items.filter((item) => !evidencedCapabilities.has(item))

  if (unsupportedItems.length > 0) {
    throw new Error(`Résumé capabilities require evidence: ${unsupportedItems.join(', ')}`)
  }

  return items
}

export const publicResume = {
  capabilitiesIntroduction:
    'Methods and technologies applied in selected academic and portfolio projects.',
  capabilities: [
    {
      title: 'Research Data & Stewardship',
      items: selectCapabilities([
        'Data management planning',
        'FAIR assessment',
        'Repository evaluation',
        'Provenance and lineage',
        'Sensitive-data planning',
        'Retention and preservation planning',
        'Persistent identifiers',
      ]),
    },
    {
      title: 'Metadata & Information Organization',
      items: selectCapabilities([
        'FGDC CSDGM',
        'Dublin Core',
        'DataCite',
        'MODS',
        'MARC/RDA foundations',
        'XML and JSON',
        'Controlled vocabularies',
        'Authority control',
        'OpenRefine',
      ]),
    },
    {
      title: 'Analysis & Visualization',
      items: selectCapabilities([
        'R and R Markdown',
        'Tidyverse',
        'D3 and SVG',
        'JavaScript and React',
        'Accessibility-aware interaction',
      ]),
    },
    {
      title: 'Structured Data & Web',
      items: selectCapabilities([
        'SQL and SQLite',
        'Relational modeling',
        'HTML and CSS',
        'Vite',
        'Git and GitHub',
      ]),
    },
  ],
  relevantExperience: experience.filter((item) => item.resumeGroup === 'relevant'),
  additionalExperience: experience.filter((item) => item.resumeGroup === 'additional'),
  education,
  development: {
    completed: professionalDevelopment.filter((item) => item.status.startsWith('Completed')),
    inProgress: professionalDevelopment.filter((item) => item.status === 'In progress'),
  },
  selectedWork: selectedProjectIds.map((id) => {
    const project = projects.find((item) => item.id === id)

    return {
      id: project.id,
      title: project.title,
    }
  }),
  presentations,
  service,
  contactInvitation:
    'Open to research-data, digital-curation, metadata, visualization, scientific-information, and related information-science opportunities.',
}
