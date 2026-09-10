import openFlightsOverview from '../assets/projects/openflights-overview.webp'

export const projects = [
  {
    id: 'agricultural-research-dmp',
    number: '01',
    title: 'Agricultural Research Data Management Plan',
    year: '2026',
    context: 'Academic research-data-management project',
    narrative: [
      'For this academic project, I developed a data management plan for a proposed study of AI use in small-scale agriculture. I defined four planned research outputs and documented how they would be created or derived, described, protected, shared, and preserved.',
      'I prepared both a narrative plan and a DMP Roadmap JSON representation. The narrative contains most of the lifecycle detail, including consent, documentation, quality review, identifiers, access, backups, sharing, responsibilities, costs, and preservation. The JSON represents the project, its planned outputs, and distribution structure. I created the plan in 2026 with DMP Tool using a Digital Curation Centre template.',
    ],
    evidence: {
      type: 'dmp-summary',
      title: 'Plan structure and stewardship',
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
          step: 'Plan consent and reuse',
          note: 'Document consent before collection and define reuse expectations for resulting data.',
        },
        {
          step: 'Document and review',
          note: 'Create metadata and method documentation, with quality review built into the workflow.',
        },
        {
          step: 'Protect active data',
          note: 'Separate identifiers from research data and plan access controls and backups by sensitivity.',
        },
        {
          step: 'Share approved outputs',
          note: 'Limit open sharing to approved anonymized outputs and document distribution and licensing.',
        },
        {
          step: 'Preserve and discover',
          note: 'Prepare approved outputs and documentation for repository deposit and discovery.',
        },
      ],
      jsonExcerpt: `{
  "dmp": {
    "dataset": [
      {
        "type": "dataset",
        "title": "Analyzed Data"
      },
      {
        "type": "dataset",
        "title": "Anonymized Data"
      },
      {
        "type": "text",
        "title": "Transcripts"
      },
      {
        "type": "text",
        "title": "Metadata"
      }
    ]
  }
}`,
      repositories: [
        {
          name: 'USDA Ag Data Commons',
          role: 'Primary intended repository',
          rationale: 'Agricultural subject coverage made it the preferred fit for the proposed study.',
        },
        {
          name: 'Zenodo',
          role: 'Fallback repository',
          rationale: 'A general-purpose option if the primary repository was not suitable.',
        },
      ],
      repositoryNote:
        'The 2026 plan considered both options for open access, DOI assignment, deposit preparation, and no anticipated storage charge. Repository acceptance and current service terms would need confirmation before deposit.',
      caption:
        'Output, stewardship, JSON, and repository details from the 2026 academic plan.',
    },
  },
  {
    id: 'lcpl-spanish-language-collection',
    number: '02',
    title: 'Building a Spanish-Language Collection at Lenoir City Public Library',
    year: '2024',
    context: 'Graduate practicum · Spring 2024',
    narrative: [
      'I initiated and led this Spring 2024 graduate practicum to expand Lenoir City Public Library’s existing Spanish-language collection. Earlier group coursework informed the community analysis, and I combined public demographic information with community conversations to identify collection and service needs.',
      'With guidance from professional mentors, including a REFORMA mentor, and other collection-development sources, I researched Spanish-language and bilingual titles and organized recommendations in a public LibGuide. The library director approved the practicum and its purchasing decisions, and we worked together on selection and ordering. The library allocated $1,000 to the project. The director later estimated that we ordered close to 100 books together.',
      'With guidance from library staff and retired librarians, I cataloged and processed materials in Atriuum. I also improved collection discovery through the OPAC and library website and initiated the 1000 Libros donation campaign. The collection continued to grow through donations and further library purchases. After the practicum, I continued as a volunteer for a bilingual storytime and dance program.',
    ],
    links: [
      {
        label: 'Explore the LCPL collection LibGuide',
        href: 'https://sis-utk.libguides.com/LCPL',
      },
      {
        label: 'Review the 2025 ALA conference listing',
        href: 'https://annual2025.eventscribe.net/index.asp?presTarget=2951524',
      },
      {
        label: 'Read the UT CCI practicum profile',
        href: 'https://cci.utk.edu/blog/2024/11/26/jeremiah-kings-making-the-world-into-his-classroom-through-practicum-at-the-lenior-city-library/',
      },
      {
        label: 'Read the News-Herald collection report',
        href: 'https://www.news-herald.net/news/lenoir-city-library-gets-spanish-language-collection-seeks-more-books/article_41990940-3b14-11ef-a92b-c7222feb436b.html',
      },
    ],
    evidence: {
      type: 'collection-development',
      title: 'Collection work in practice',
      process: [
        {
          title: 'Selection research',
          description:
            'Consulted REFORMA and professional recommendations, publisher and bookseller sources, award and bestseller lists, notable authors, and children’s, juvenile, and adult materials across bilingual works, translations, and original Spanish-language works.',
        },
        {
          title: 'Public LibGuide',
          description:
            'Organized candidate titles and selection sources in a public LibGuide that served as a recommendation resource, visual advocacy tool, and secondary discovery resource.',
        },
        {
          title: 'Atriuum cataloging and processing',
          description:
            'Cataloged and processed materials in Atriuum under staff guidance, including item entry, bibliographic-record editing, barcode and spine-label generation, and physical processing.',
        },
        {
          title: 'Online discovery',
          description:
            'Added collection-related content, improved connections among library web resources, worked with a localized OPAC interface, and made the collection easier to locate and promote online.',
        },
        {
          title: '1000 Libros campaign',
          description:
            'Initiated a donation campaign intended to increase collection visibility and invite continued community support.',
        },
      ],
      dissemination:
        'The official 2025 ALA Diversity Fair program lists me as the sole author and presenter for a poster drawing on the practicum’s lessons.',
      caption: 'Selected implementation details from the Spring 2024 practicum.',
    },
  },
  {
    id: 'usgs-lidar-metadata',
    number: '03',
    title: 'USGS 3DEP LiDAR Metadata Record',
    year: '2025',
    context: 'Academic geospatial metadata project',
    summary:
      'Using the accompanying USGS metadata as a starting point, this academic project developed an FGDC CSDGM XML record for a 3DEP LiDAR point-cloud tile near Playa Punta Arenas, Puerto Rico. The work added place keywords and reviewed selected fields against FGDC guidance.',
    challenge:
      'Describe a complex federal scientific resource in structured metadata and refine selected elements for place, spatial reference, access, and distribution.',
    role:
      'Selected the tile, adapted USGS source metadata with the USGS Metadata Wizard, added specific place keywords, and documented the record’s structure and rationale.',
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
      'Most descriptive content originated in the USGS source metadata. The academic record adapted that material with the USGS Metadata Wizard and added selected place keywords and review decisions.',
    ],
    accessibility: [
      'The metadata structure is presented with semantic headings, an ordered section index, and labelled XML excerpts.',
      'The XML excerpts preserve markup as selectable, readable text.',
    ],
    evidence: {
      type: 'metadata-anatomy',
      kicker: 'Academic project · Metadata structure',
      title: 'USGS 3DEP Metadata Anatomy',
      resource:
        'FGDC CSDGM XML record for a USGS 3DEP LiDAR point-cloud tile near Playa Punta Arenas, Puerto Rico, developed from accompanying USGS metadata.',
      focus: 'The project focused on metadata structure, description, and documentation.',
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
          title: 'Selected structural excerpt',
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
        'Source-derived quality statements are identified within the record',
      ],
      metadataProcess: [
        'USGS source context',
        'Adapt source metadata',
        'Add / refine descriptive fields',
        'Review selected fields against FGDC guidance',
        'Document access and distribution',
      ],
      caption:
        'Seven FGDC CSDGM sections and the process used to adapt USGS source metadata, refine description, and document access and distribution.',
    },
  },
  {
    id: 'bibliographic-reconciliation',
    number: '04',
    title: 'Bibliographic Data Cleaning and Authority Reconciliation',
    year: '2026',
    context: 'Academic data-quality and reconciliation exercise · 2026',
    summary:
      'Course-guided OpenRefine work applying facets, reviewed clustering, GREL and regular-expression transformations, one Crossref journal lookup, and Publisher-to-VIAF reconciliation to a supplied sample of 1,001 article records.',
    challenge:
      'Clean and reconcile bibliographic fields while keeping manually reviewed author-name merges distinct from bulk VIAF candidates.',
    role:
      'Carried out and documented the workflow, reviewed selected author-name clusters, configured transformations and external lookups, and explored Publisher-to-VIAF reconciliation.',
    approach:
      'Inspected the DOAJ article-metadata sample with facets and split multi-valued author cells. Reviewed fingerprint, n-gram, Metaphone3, and Cologne candidate clusters, then applied the exercise’s GREL and regular-expression operations. Performed an ISSN-based Crossref journal lookup and reconciled Publisher strings to VIAF Corporate Name candidates through Conciliator.',
    methods: [
      'OpenRefine facets and manual cluster review',
      'Fingerprint and n-gram fingerprint clustering',
      'Metaphone3 and Cologne phonetic clustering',
      'GREL and regular expressions',
      'Date parsing and formatting',
      'Crossref REST JSON lookup',
      'VIAF Corporate Name reconciliation through Conciliator',
    ],
    deliverables: [
      'Documented OpenRefine cleaning and reconciliation exercise',
      'Transformation histories preserved across three OpenRefine project copies',
      'Publisher-to-VIAF reconciliation results retained for analysis',
    ],
    result:
      'Preserved OpenRefine histories document selected transformations across 1,001 article records. VIAF reconciliation produced best-candidate identifiers for 965 Publisher rows and left 36 unmatched.',
    provenance: [
      'The article-metadata sample, exercise sequence, method choices, and example expressions were supplied for the course.',
      'Crossref supplied journal metadata for the lookup. VIAF candidates were retrieved through the third-party Conciliator service.',
      'The source dataset’s redistribution terms were not established, so the portfolio presents a summary and aggregate counts rather than the records.',
    ],
    accessibility: [
      'The workflow is presented as an ordered sequence, and clustering results appear in a data table.',
      'Code examples are labelled, and reviewed merges are distinguished from VIAF candidates in text.',
    ],
    evidence: {
      type: 'bibliographic-workflow',
      kicker: 'Academic project · Record-level data quality',
      title: 'Bibliographic Cleaning & Reconciliation Workflow',
      courseContext: {
        label: 'Course context',
        description:
          'Course-guided 2026 OpenRefine exercise using a supplied sample of DOAJ article metadata. The dataset, exercise sequence, method choices, and example expressions were supplied.',
      },
      metrics: [
        {
          value: '1,001',
          label: 'Supplied article records',
        },
        {
          value: '11',
          label: 'Original columns',
        },
        {
          value: '4,009',
          label: 'Working rows after author splitting',
        },
      ],
      metricNote:
        'Splitting multi-valued author cells expanded the working table to 4,009 rows while the source dataset remained 1,001 article records.',
      workflow: [
        {
          title: 'Inspect',
          description: 'Use facets to examine missing values and variation across selected fields.',
        },
        {
          title: 'Cluster & review',
          description:
            'Generate author-name similarity candidates and manually accept selected merge groups.',
        },
        {
          title: 'Transform',
          description: 'Apply GREL, regular-expression, date, and ordering operations.',
        },
        {
          title: 'External lookup',
          description: 'Perform an ISSN-based Crossref journal-metadata lookup.',
        },
        {
          title: 'Authority reconciliation',
          description: 'Request VIAF Corporate Name candidates for Publisher strings through Conciliator.',
        },
      ],
      facets: [
        'Licence values',
        'Missing DOI values',
        'Language variation',
        'Publisher variation',
        'Author variation',
      ],
      doiCounts: [
        {
          value: '978',
          label: 'Records with DOI',
        },
        {
          value: '23',
          label: 'Records without DOI',
        },
      ],
      clusters: [
        {
          method: 'Fingerprint',
          candidates: '9',
          accepted: '9',
          cells: '29',
        },
        {
          method: 'N-gram fingerprint',
          candidates: '10',
          accepted: '9',
          cells: '55',
        },
        {
          method: 'Metaphone3',
          candidates: '56',
          accepted: '3',
          cells: '8',
        },
        {
          method: 'Cologne phonetic',
          candidates: '98',
          accepted: '1',
          cells: '3',
        },
      ],
      clusterNote:
        'Jeremiah manually reviewed selected author-name candidates and accepted the merge groups shown here.',
      transformations: {
        types: [
          'Language-code edit',
          'Whitespace normalization',
          'Title-case transformation',
          'Date parsing and formatting',
          'Author-order transformation',
        ],
        expressions: [
          {
            label: 'Whitespace expression',
            code: String.raw`value.replace(/[\p{Zs}\s]+/,' ')`,
          },
          {
            label: 'Date-format expression',
            code: 'value.toString("dd MMMM yyyy")',
          },
        ],
        expressionNote:
          'These expressions were supplied for the course exercise and applied in OpenRefine.',
        examples: [
          {
            field: 'Language',
            before: 'English',
            after: 'EN',
          },
          {
            field: 'Date',
            before: '01/11/2015',
            after: '11 January 2015',
          },
        ],
      },
      crossref: {
        summary:
          'For one starred record, an ISSN-based Crossref request returned journal metadata; the exercise stored the JSON and extracted message.title.',
        path: ['ISSN', 'Crossref /journals/{ISSN}', 'message.title', 'Journal Title'],
      },
      viaf: {
        summary:
          'Publisher strings were reconciled against VIAF Corporate Name candidates through Conciliator.',
        metrics: [
          {
            value: '965',
            label: 'Rows with a best candidate',
          },
          {
            value: '36',
            label: 'Rows left unmatched',
          },
        ],
        note: 'The best candidates were not validated row by row.',
      },
      reproducibility:
        'Three preserved OpenRefine project histories document selected transformations. Facets and results from live external services cannot be recreated from the histories alone.',
      caption:
        'An OpenRefine workflow for 1,001 supplied article records, covering facets, reviewed author-name clustering, transformations, one Crossref lookup, and Publisher-to-VIAF reconciliation.',
    },
  },
  {
    id: 'multilingual-library-database',
    number: '05',
    title: 'Multilingual Library Book Database',
    year: '2024',
    context: 'Academic database prototype',
    summary:
      'A 2024 academic SQLite prototype for multilingual book-recommendation data, with 26 user-defined tables spanning core entities, composite-key junctions, and imported reference data.',
    challenge:
      'Translate 16 documented business rules into a relational design for multilingual book-recommendation data.',
    role:
      'Implemented and documented the prototype, modeled its principal relationships through composite-key junctions, integrated credited reference data, and created an ER model.',
    approach:
      'Combined 10 core tables, 13 junction tables, and three reference tables using primary keys, 27 declared foreign keys, and nine explicit user-created indexes. The prototype uses seven BOOK records alongside imported language and country reference data.',
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
      'A later integrity check of the preserved database returned no foreign-key violations. The implemented schema captures the principal entity and junction relationships; two documented language relationships are absent.',
    aiAssistance:
      'AI assisted with generating some test records, which the project report identifies as inaccurate. The database summary relies on schema structure and aggregate counts rather than those records.',
    provenance: [
      'Three imported reference tables contribute 80,381 language and country lookup rows: Language_Index (72,524), LANGUAGE_CODES (7,614), and COUNTRY_CODES (243).',
      'The report credits an external source and states that the reference data were used with permission for the course project. They are summarized here rather than republished.',
    ],
    accessibility: [
      'Relationships appear as ordered text paths as well as visual groupings.',
      'Counts and the integrity result remain in logical reading order and do not depend on color or hover.',
    ],
    evidence: {
      type: 'database-architecture',
      kicker: 'Academic project · Relational architecture',
      title: 'Multilingual Library Database Architecture',
      framing:
        'A 2024 SQLite prototype that models multilingual book-recommendation data through core entities, junction tables, and imported reference data.',
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
        note: 'Sample records used to exercise the prototype',
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
      referenceDescription:
        'These imported language and country lookup rows support the schema.',
      referenceRelationship: 'LANGUAGE_CODES declares a foreign key to COUNTRY_CODES.',
      integrity: {
        label: 'Preserved-database integrity check',
        code: 'PRAGMA foreign_key_check;\n→ 0 rows returned',
        note: 'A later PRAGMA foreign_key_check returned no violations in the preserved database.',
      },
      rules:
        'The design documents 16 intended business rules, and the implemented database captures the principal entity and junction relationships.',
      implementationGap:
        'Two documented language relationships are absent from the implemented SQLite schema.',
      caption:
        'A 26-table SQLite prototype connecting books to authors, publishers, languages, genres, and other entities through composite-key junctions, with imported reference data and a later integrity check.',
    },
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
      'Set the project direction, tested the running application, and guided iterative work on data framing, interaction, accessibility, provenance, and technical tradeoffs.',
    approach:
      'Parsed and indexed airport and route records, resolved endpoints, deduplicated and weighted connections, and coordinated filtering and selection across globe and force-directed views. Pointer selection uses a depth-aware GPU picking pass.',
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
      'Published an interactive portfolio visualization with coordinated views, search, filtering, selection, and documented data sources and licensing.',
    provenance: [
      'Uses OpenFlights airport and route data last updated in June 2014, so the visualization presents a historical network rather than current aviation service.',
      'The project repository documents OpenFlights ODbL/DbCL terms and additional terrain and boundary sources.',
    ],
    accessibility: [
      'Keyboard shortcuts and search-based airport selection',
      'Visible focus, labelled controls, ARIA state, and polite announcements',
      'Reduced-motion behavior and non-color route-pattern cues',
    ],
    aiAssistance:
      'AI materially supported implementation. Jeremiah set the direction, tested the running application, guided iteration, and made final decisions about data framing, interaction, accessibility, and technical tradeoffs.',
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
