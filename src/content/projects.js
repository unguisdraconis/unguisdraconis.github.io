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
    title: 'USGS 3DEP LiDAR Metadata Record',
    year: '2025',
    context: 'Academic geospatial metadata project',
    summary:
      'An academic geospatial-metadata project describing a USGS 3DEP LiDAR point-cloud tile near Playa Punta Arenas, Puerto Rico. The work adapted USGS source metadata into an FGDC CSDGM-structured XML record, added selected descriptive metadata, and documented review decisions. It did not involve LiDAR acquisition, processing, or advanced GIS analysis.',
    challenge:
      'Represent a complex federal scientific resource in structured metadata while preserving source provenance and distinguishing inherited facts from added descriptive choices.',
    role:
      'Selected the tile, adapted USGS source metadata with the USGS Metadata Wizard, added specific place keywords, reviewed selected fields against FGDC guidance, and documented the rationale.',
    approach:
      'The XML record contains 194 total element nodes, including repeated and container elements, across seven top-level CSDGM sections. It represents geographic bounding extent, horizontal and vertical reference fields, source-derived data-quality fields, access and use constraints, and distribution information.',
    methods: [
      'FGDC CSDGM',
      'XML',
      'USGS Metadata Wizard',
      'Place-name thesauri and controlled keywords',
    ],
    deliverables: [
      'FGDC CSDGM-structured XML metadata record',
      'Metadata rationale report',
    ],
    provenance: [
      'USGS originated the LiDAR resource and much of its descriptive metadata; the academic record adapts that source material rather than claiming original authorship of every statement.',
      'The public evidence is a self-authored metadata-anatomy derivative. The original academic XML and report remain private.',
    ],
    accessibility: [
      'The metadata-anatomy evidence uses semantic headings, an ordered section index, and labelled XML code blocks.',
      'The source boundary, evidence path, and limitations are stated in text rather than communicated by color alone.',
    ],
    limitations: [
      'Source metadata forms much of the record.',
      'Selected fields were reviewed, but no full schema-validation evidence is available.',
      'The supplied project sources do not document preservation or reuse planning.',
      'No LiDAR processing or advanced GIS analysis was performed.',
    ],
    evidence: {
      type: 'metadata-anatomy',
      kicker: 'Portfolio evidence · Metadata structure',
      title: 'USGS 3DEP Metadata Anatomy',
      resource:
        'USGS 3DEP LiDAR point-cloud tile near Playa Punta Arenas, Puerto Rico. This academic exercise adapted source metadata into an FGDC CSDGM-structured XML record.',
      boundary: 'Metadata/documentation work — not LiDAR processing or advanced GIS analysis.',
      nodeCount: '194',
      nodeCountLabel:
        'total XML element nodes, including repeated and container elements, across seven top-level CSDGM sections',
      uniqueCount: '117 unique element names',
      sections: [
        {
          tag: 'idinfo',
          name: 'Identification Information',
          terms: ['citation', 'description', 'bounding extent', 'keywords', 'constraints'],
        },
        {
          tag: 'dataqual',
          name: 'Data Quality Information',
          terms: [
            'attribute accuracy fields',
            'logical consistency field',
            'completeness field',
            'vertical accuracy field',
            'minimal lineage/process step',
          ],
          note: 'CSDGM data-quality fields with source-derived quality statements',
        },
        {
          tag: 'spdoinfo',
          name: 'Spatial Data Organization Information',
          terms: ['point representation'],
        },
        {
          tag: 'spref',
          name: 'Spatial Reference Information',
          terms: ['horizontal reference', 'vertical reference'],
        },
        {
          tag: 'eainfo',
          name: 'Entity and Attribute Information',
          terms: ['LAS specification overview'],
        },
        {
          tag: 'distinfo',
          name: 'Distribution Information',
          terms: ['digital format', 'network access', 'fee'],
        },
        {
          tag: 'metainfo',
          name: 'Metadata Reference Information',
          terms: ['standard name', 'standard version'],
        },
      ],
      excerpts: [
        {
          title: 'Sanitized structural excerpt',
          code: `<metadata>
  <idinfo>…</idinfo>
  <dataqual>…</dataqual>
  <spdoinfo>…</spdoinfo>
  <spref>…</spref>
  <eainfo>…</eainfo>
  <distinfo>…</distinfo>
  <metainfo>…</metainfo>
</metadata>`,
        },
        {
          title: 'Bounding extent',
          code: `<bounding>
  <westbc>-67.946275</westbc>
  <eastbc>-67.944831</eastbc>
  <northbc>18.084241</northbc>
  <southbc>18.080595</southbc>
</bounding>`,
        },
        {
          title: 'Reference-system fields',
          code: `<geodetic>
  <horizdn>NAD83_National_Spatial_Reference_System_2011</horizdn>
  <ellips>GRS1980</ellips>
</geodetic>
<altdatum>Puerto Rico Vertical Datum of 2002</altdatum>
<altunits>meters</altunits>`,
        },
      ],
      decisions: [
        'Added specific place keywords for Puerto Rico, Punta Arenas, and Playa Punta Arenas',
        'Consulted FGDC guidance when reviewing a spatial-reference warning',
        'Revised a related XML reference after review',
      ],
      representationNotes: [
        'Access and use constraints are represented without reproducing source boilerplate',
        'Digital format and online network access are represented; no fee is listed',
        'Source-derived quality statements are identified as metadata content, not accuracy testing',
      ],
      evidencePath: [
        'USGS source context',
        'Adapt source metadata',
        'Add / refine descriptive fields',
        'Review selected fields against FGDC guidance',
        'Document access and distribution',
      ],
      evidencePathNote:
        'This is an evidence path, not a data lifecycle. The supplied sources do not document preservation or reuse planning.',
      limitations: [
        'Source metadata forms much of the record',
        'Selected fields were reviewed, but no full schema-validation evidence is available',
        'The supplied project sources do not document preservation or reuse planning',
        'No LiDAR processing or advanced GIS analysis was performed',
      ],
      provenance:
        'Portfolio derivative based on Jeremiah King’s 2025 academic metadata record and accompanying rationale report. Most descriptive content was adapted from USGS source metadata, and the record was created with the USGS Metadata Wizard. Original academic files remain private.',
      caption:
        'This metadata-anatomy figure summarizes a 2025 academic XML record for a USGS 3DEP LiDAR point-cloud tile near Playa Punta Arenas, Puerto Rico. It shows seven FGDC CSDGM sections and the path from USGS source context through metadata adaptation, selected field review, and distribution description. The project demonstrates metadata and curation practice rather than LiDAR processing or advanced GIS analysis.',
    },
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
      'A 2024 academic SQLite prototype for multilingual book-recommendation data, with 26 user-defined tables spanning core entities, composite-key junctions, and imported reference data.',
    challenge:
      'Documented 16 intended business rules and implemented the prototype’s principal entity and junction relationships; the surviving schema does not implement every documented relationship.',
    role:
      'Implemented and documented the prototype, modeled its principal relationships through composite-key junctions, integrated credited reference data, and created an ER model.',
    approach:
      'Combined 10 core tables, 13 junction tables, and three reference tables using primary keys, 27 declared foreign keys, and nine explicit user-created indexes. The structure demonstrates relational modeling and reference-data integration rather than a production system.',
    methods: [
      'SQLite',
      'SQL',
      'Relational modeling',
      'Composite-key junctions',
      'Primary and foreign keys',
      'Controlled and reference data',
      'ER modeling',
    ],
    deliverables: [
      'SQLite academic prototype',
      'ER model and design documentation',
    ],
    result:
      'A current read-only schema audit found 26 user-defined tables, 27 declared foreign keys, nine explicit user-created indexes, and zero rows returned by PRAGMA foreign_key_check.',
    aiAssistance:
      'Some test records were created with AI assistance and acknowledged in the source report as inaccurate. This public case study uses schema and count evidence only and excludes those records.',
    provenance: [
      'Three imported reference tables contain 80,381 language and country lookup rows: Language_Index (72,524), LANGUAGE_CODES (7,614), and COUNTRY_CODES (243). These are reference data, not books; the BOOK table contains seven rows.',
      'The report credits an external source and states that the reference data were used with permission, but public redistribution rights were not independently established. The private database, report, ER diagram, imported rows, and source URL remain unpublished.',
      'No assignment prompt or starter schema was supplied, so the available evidence does not support claiming that every aspect of the design originated from scratch.',
    ],
    accessibility: [
      'The public architecture derivative presents relationships as ordered text paths as well as visual groupings.',
      'Counts, evidence boundaries, and the integrity result remain available in the figure’s logical reading order and do not depend on color or hover.',
    ],
    limitations: [
      'This is an academic prototype with seven BOOK rows, not a production library system.',
      'The 80,381 imported rows are language and country reference or lookup data, not a book catalog.',
      'The surviving schema does not implement every one of the 16 intended business rules.',
      'Some AI-assisted test records were acknowledged as inaccurate and are excluded from the public evidence.',
      'The original report’s permission statement was not independently verified as a basis for public redistribution.',
      'A current PRAGMA foreign_key_check returned zero rows, but foreign-key enforcement in the original connection was connection-specific and cannot be established from that result.',
    ],
    evidence: {
      type: 'database-architecture',
      kicker: 'Portfolio evidence · Relational architecture',
      title: 'Multilingual Library Database Architecture',
      framing:
        '2024 academic SQLite prototype for multilingual book-recommendation data. The implemented structure demonstrates relational modeling and reference-data integration—not a production catalog or recommendation system.',
      metrics: [
        { value: '26', label: 'user-defined tables' },
        { value: '10', label: 'core / domain tables' },
        { value: '13', label: 'junction tables' },
        { value: '3', label: 'reference tables' },
        { value: '27', label: 'declared foreign keys' },
        { value: '9', label: 'explicit user-created indexes' },
      ],
      centralEntity: {
        name: 'BOOK',
        count: '7 rows',
        note: 'Central domain entity · test-scale academic data',
      },
      bookRelationships: [
        { junction: 'BOOK_AUTHOR', entity: 'AUTHOR' },
        { junction: 'BOOK_PUBLISHER', entity: 'PUBLISHER' },
        { junction: 'BOOK_LANGUAGE', entity: 'LANGUAGE_CODES' },
        { junction: 'BOOK_GENRE', entity: 'GENRE' },
        { junction: 'BOOK_REVIEW', entity: 'REVIEW' },
        { junction: 'BOOK_AWARD', entity: 'AWARD' },
        { junction: 'BOOK_BOOKLIST', entity: 'BOOKLIST' },
        { junction: 'BOOK_SERIES', entity: 'SERIES' },
        { junction: 'BOOK_ISBN', entity: 'ISBN' },
        { junction: 'BOOK_VENDOR', entity: 'VENDOR' },
      ],
      additionalRelationships: [
        { source: 'AUTHOR', junction: 'AUTHOR_COUNTRY', target: 'COUNTRY_CODES' },
        { source: 'AUTHOR', junction: 'AUTHOR_REVIEW', target: 'REVIEW' },
        { source: 'PUBLISHER', junction: 'PUBLISHER_COUNTRY', target: 'COUNTRY_CODES' },
      ],
      referenceData: [
        { name: 'Language_Index', rows: '72,524' },
        { name: 'LANGUAGE_CODES', rows: '7,614' },
        { name: 'COUNTRY_CODES', rows: '243' },
      ],
      referenceTotal: '80,381',
      referenceBoundary: 'Reference / lookup rows—not books.',
      referenceRelationship: 'LANGUAGE_CODES declares a foreign key to COUNTRY_CODES.',
      integrity: {
        label: 'Current read-only integrity audit',
        code: 'PRAGMA foreign_key_check;\n→ 0 rows returned',
        note: 'SQLite foreign-key enforcement is connection-specific, so this result does not establish how every original project session was configured.',
      },
      rules:
        'The project report documents 16 intended business rules; the implemented database captures the principal entity and junction relationships, but not every documented relationship.',
      implementationGap:
        'Two documented language relationships are absent from the implemented SQLite schema.',
      aiBoundary:
        'The report documents AI-assisted test-record generation and acknowledges inaccuracies in some sample data. This public artifact therefore uses schema structure and audited counts—not test bibliographic records—as evidence.',
      provenance:
        'The academic report credits the imported language and country reference tables to an external source and states they were used with permission. Public redistribution rights were not independently established, so this portfolio derivative shows only schema-level counts and structure.',
      evidenceBasis:
        'Self-authored portfolio architecture derivative based on the verified SQLite structure and a current read-only schema audit.',
      caption:
        'This architecture summary presents a 2024 academic SQLite prototype for multilingual book-recommendation data. The implemented schema contains 26 user-defined tables, including junction tables connecting books with authors, publishers, languages, genres, and other entities. Three imported reference tables contain 80,381 language-name, language-code, and country-code rows; that figure does not represent books. A current read-only audit returned no foreign-key violations. The prototype is not a production library system.',
    },
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
