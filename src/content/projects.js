import openFlightsOverview from '../assets/projects/openflights-overview.webp'

export const projects = [
  {
    id: 'agricultural-research-dmp',
    number: '01',
    title: 'Agricultural Research Data Management Plan and Machine-Readable DMP',
    year: '2026',
    context: 'Academic research-data-management project',
    summary:
      'An academic data management plan for a proposed study of AI use in small-scale agriculture. The work models how research data would be collected, documented, protected, shared, and preserved; the study was not conducted and no research findings are reported.',
    challenge:
      'Define four planned research outputs and document prospective stewardship decisions before the proposed research began.',
    role:
      'Developed the narrative data management plan, a DMP Roadmap JSON representation, and a repository evaluation for the proposed study.',
    approach:
      'The narrative plan addresses collection, formats, documentation, quality assurance, ethics, anonymization, permissions, storage, backup, sharing, responsibilities, costs, retention, and preservation. The JSON represents project structure, planned outputs, distribution, access, licensing, and metadata-related fields.',
    methods: [
      'Data management planning',
      'DMP Roadmap JSON',
      'Sensitive-data planning',
      'Repository evaluation',
    ],
    deliverables: [
      'Narrative data management plan',
      'Machine-readable DMP Roadmap JSON',
      'Evaluation of USDA Ag Data Commons as the primary intended repository and Zenodo as a fallback',
    ],
    provenance: [
      'The public evidence is a self-authored derivative based on a private narrative DMP and DMP Roadmap JSON; the source exports remain private.',
      'Lifecycle detail is derived primarily from the narrative plan. The sanitized JSON excerpt demonstrates machine-readable structure rather than the complete set of lifecycle decisions.',
    ],
    accessibility: [
      'The evidence summary uses semantic headings, a real data table, an ordered lifecycle, and a labelled code block.',
      'Planning status and repository roles are stated in text rather than communicated by color alone.',
    ],
    limitations: [
      'The plan concerns a proposed study; it does not report a completed study or research findings.',
      'The repository comparison reflects the academic plan’s analysis rather than a current policy audit, and repository acceptance was not assumed.',
    ],
    evidence: {
      type: 'dmp-summary',
      kicker: 'Portfolio evidence · Public derivative',
      title: 'Data stewardship plan at a glance',
      scopeLabel: 'Proposed research context',
      scope:
        'Academic data management plan for a proposed study of AI use in small-scale agriculture. The plan models data stewardship decisions; the study was not conducted.',
      outputs: [
        {
          name: 'Analyzed Data',
          purpose: 'Cleaned, anonymized, analyzed tabular output',
          stewardship: 'CSV/TSV; intended open sharing after anonymization',
        },
        {
          name: 'Anonymized Data',
          purpose: 'Cleaned and de-identified tabular research output',
          stewardship: 'CSV/TSV; planned repository deposit',
        },
        {
          name: 'Transcripts',
          purpose: 'Anonymized text derived from proposed interviews',
          stewardship: 'TXT; temporary source audio not retained',
        },
        {
          name: 'Metadata',
          purpose: 'Documentation of project, methods, questionnaire, and context',
          stewardship: 'JSON; planned public documentation',
        },
      ],
      lifecycle: [
        {
          step: 'Collect / acquire',
          note: 'Consent planned before collection',
        },
        {
          step: 'Document & quality-check',
          note: 'Metadata and review incorporated',
        },
        {
          step: 'Protect & store',
          note: 'Identifiers separated; access and backups planned',
        },
        {
          step: 'Share approved outputs',
          note: 'Open sharing limited to approved anonymized outputs',
        },
        {
          step: 'Preserve in repository',
          note: 'Deposit planned for discovery and preservation',
        },
      ],
      jsonExcerpt: `{
  "dmp": {
    "dataset": [
      { "type": "dataset", "title": "Analyzed Data" },
      { "type": "dataset", "title": "Anonymized Data" },
      { "type": "text", "title": "Transcripts" },
      { "type": "text", "title": "Metadata" }
    ]
  }
}`,
      repositories: [
        {
          name: 'USDA Ag Data Commons',
          role: 'Primary intended repository',
          considerations: [
            'Domain-specific agricultural fit',
            'Intended open access and discovery',
            'DOI anticipated',
            'Deposit preparation considered',
            'No storage cost anticipated',
            'Acceptance was not assumed',
          ],
        },
        {
          name: 'Zenodo',
          role: 'Generalist fallback',
          considerations: [
            'General-purpose repository',
            'Intended open access and discovery',
            'DOI anticipated',
            'Deposit preparation considered',
            'No storage cost anticipated',
          ],
        },
      ],
      repositoryNote:
        'Repository evaluation reflects the academic plan’s analysis, not a current policy audit.',
      stewardship: [
        'Consent and reuse expectations planned before collection',
        'Identifiers separated from research data',
        'Documentation and quality review incorporated into the workflow',
        'Access and backups planned according to sensitivity',
        'Public sharing limited to approved anonymized outputs',
        'Repository deposit planned for discovery and preservation',
      ],
      provenance:
        'Portfolio derivative based on a 2026 academic DMP created with DMP Tool using a Digital Curation Centre template. Original source artifacts are retained privately.',
      caption:
        'This summary distills an academic plan for a proposed study of AI use in small-scale agriculture. It connects four planned research outputs with lifecycle decisions, a sanitized DMP Roadmap JSON excerpt, and repository evaluation; the study was not conducted and produced no findings.',
    },
  },
  {
    id: 'usgs-lidar-metadata',
    number: '02',
    title: 'USGS 3DEP LiDAR Metadata and Lifecycle',
    year: '2025',
    context: 'Academic metadata and lifecycle project',
    summary:
      'A detailed metadata record and lifecycle analysis for USGS 3DEP LiDAR material, connecting description and quality review with long-term stewardship concerns.',
    challenge:
      'Document a complex geospatial resource so that its extent, reference system, lineage, constraints, quality, distribution, and stewardship context remained interpretable.',
    role:
      'Created and quality-checked the metadata record and traced the data lifecycle from acquisition through preservation and reuse.',
    approach:
      'Authored a 194-element FGDC CSDGM XML record covering geographic extent, spatial reference, lineage, data quality, constraints, distribution, and contacts, then documented lifecycle stages and responsibilities.',
    methods: ['FGDC CSDGM', 'XML', 'Metadata quality review', 'Lifecycle analysis'],
    deliverables: [
      '194-element FGDC CSDGM XML metadata record',
      'Data lifecycle documentation',
    ],
    limitations: [
      'This academic metadata and lifecycle project does not represent advanced GIS analysis.',
    ],
  },
  {
    id: 'bibliographic-reconciliation',
    number: '03',
    title: 'Bibliographic Data Cleaning and Authority Reconciliation',
    year: '2026',
    context: 'Academic data-quality and bibliographic-reconciliation project',
    summary:
      'A repeatable cleaning and reconciliation workflow for examining inconsistent bibliographic data and connecting records with external descriptive and authority sources.',
    challenge:
      'Identify variation and inconsistency in bibliographic strings while preserving a reviewable path from raw values to clustered, transformed, and reconciled data.',
    role:
      'Created and applied the cleaning and reconciliation workflow.',
    approach:
      'Used OpenRefine facets with fingerprint, n-gram, and phonetic clustering; applied GREL and regular expressions; examined Crossref API JSON responses; and used VIAF reconciliation.',
    methods: [
      'OpenRefine facets',
      'Fingerprint, n-gram, and phonetic clustering',
      'GREL and regular expressions',
      'Crossref API JSON',
      'VIAF reconciliation',
    ],
    deliverables: ['Documented cleaning and authority-reconciliation workflow'],
    limitations: [
      'The available evidence supports the workflow, not quantitative match-rate or accuracy claims.',
    ],
  },
  {
    id: 'multilingual-library-database',
    number: '04',
    title: 'Multilingual Library Book Database',
    year: '2024',
    context: 'Academic database prototype',
    summary:
      'A normalized 26-table SQLite prototype translating library requirements into a documented relational structure for multilingual book information.',
    challenge:
      'Translate more than 15 business rules into a relational design that could represent multilingual books and their related entities consistently.',
    role:
      'Designed and implemented the prototype, documented its structure, and checked referential integrity.',
    approach:
      'Combined entity, associative, and reference tables with indexes and foreign-key relationships, supported by detailed and simplified crow’s-foot ER diagrams.',
    methods: [
      'Relational modeling',
      'Normalization',
      'SQLite',
      'Foreign-key and referential-integrity checks',
      'Crow’s-foot ER modeling',
    ],
    deliverables: [
      'Normalized 26-table SQLite prototype',
      'Detailed and simplified ER diagrams',
    ],
    result:
      'Integrated more than 80,000 language and country reference records and completed referential-integrity checks.',
    limitations: [
      'The 80,000-plus figure refers primarily to reference and lookup data, not books.',
      'The work is an academic prototype rather than a production library system.',
    ],
  },
  {
    id: 'talent-migration-r',
    number: '05',
    title: 'Talent Migration Analysis in R',
    year: '2025',
    context: 'Academic R analysis project',
    summary:
      'An R workflow integrating multi-sheet World Bank and platform-derived data with regional reference data to develop comparative, network, and Sankey views.',
    challenge:
      'Bring differently structured sources into comparable analytical views while keeping coverage, normalization, diagnostics, and interpretation limits visible.',
    role:
      'Cleaned, joined, aggregated, ranked, visualized, and documented the combined data.',
    approach:
      'Used R and tidyverse to integrate the sources, calculate comparative groupings, and produce comparative charts, network views, and Sankey views.',
    methods: [
      'R and tidyverse',
      'Multi-sheet data integration',
      'Cleaning and joins',
      'Aggregation and ranking',
      'Comparative, network, and Sankey visualization',
    ],
    deliverables: ['Reproducible analysis workflow', 'Comparative and network-based views'],
    limitations: [
      'Interpretation is limited by platform coverage, normalized indicators, and model diagnostics.',
      'The analysis is non-causal and does not establish why migration occurred.',
    ],
  },
  {
    id: 'openflights-3d-network',
    number: '06',
    title: 'OpenFlights 3D Network',
    year: '2026',
    context: 'Portfolio visualization project using historical OpenFlights data',
    summary:
      'An interactive exploration of a historical airport-route network through coordinated geographic and force-directed views.',
    challenge:
      'Make a dense historical network explorable while coordinating data transformation, 3D rendering, selection, filtering, accessibility, and application lifecycle behavior.',
    role:
      'Directed, tested, and iteratively refined the project, making decisions about data framing, interaction, accessibility, provenance, and final technical judgment.',
    approach:
      'Parsed and indexed airport and route records, resolved endpoints, deduplicated and weighted connections, and coordinated filtering and selection across globe and force-directed views. Current pointer selection uses a depth-aware GPU picking pass.',
    methods: [
      'React and Vite',
      'D3 data processing and force layout',
      'Three.js and WebGL rendering',
      'GPU picking',
      'Adaptive rendering and resource cleanup',
    ],
    technologies: ['React', 'Vite', 'D3', 'Three.js', 'WebGL'],
    deliverables: [
      'Interactive 3D globe and topology views',
      'Search, filters, tooltips, and coordinated selection',
      'Public GitHub Pages demonstration',
    ],
    result:
      'Delivered a public interactive portfolio visualization with documented source, licensing, accessibility, and implementation boundaries.',
    provenance: [
      'Uses historical OpenFlights airport and route data. OpenFlights states that its route data was last updated in June 2014; the application is not a source of current aviation information.',
      'The project repository documents OpenFlights ODbL/DbCL terms and additional terrain and boundary sources.',
    ],
    accessibility: [
      'Keyboard shortcuts and search-based airport selection',
      'Visible focus, labelled controls, ARIA state, and polite announcements',
      'Reduced-motion behavior and non-color route-pattern cues',
    ],
    aiAssistance:
      'Human-directed and substantially AI-assisted. Jeremiah set the direction, evaluated the running experience, guided iteration, and made final technical judgments.',
    limitations: [
      'The records describe a historical source dataset, not live routes, schedules, or operational service.',
      'Implemented accessibility features do not constitute a WCAG conformance claim; broader manual assistive-technology and cross-browser validation remains outstanding.',
    ],
    links: [
      {
        label: 'View live project',
        href: 'https://unguisdraconis.github.io/openflights/',
      },
      {
        label: 'Review repository',
        href: 'https://github.com/unguisdraconis/openflights',
      },
    ],
    media: {
      src: openFlightsOverview,
      alt: 'OpenFlights historical route network shown on a 3D globe with filters and details for Charles de Gaulle International Airport.',
      caption: 'Historical airport-route records shown in the geographic globe view.',
    },
  },
]
