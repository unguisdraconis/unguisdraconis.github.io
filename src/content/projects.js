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
    id: 'lcpl-spanish-language-collection',
    number: '02',
    title: 'Building a Spanish-Language Collection at Lenoir City Public Library',
    year: '2024',
    context: 'Graduate practicum · Spring 2024',
    summary:
      'An applied public-library practicum that expanded an existing Spanish-language collection by connecting community-needs assessment, evidence-informed title research, collaborative acquisition, cataloging, discovery, and outreach.',
    challenge:
      'Expand access to Spanish-language and bilingual materials within the library’s existing collection, budget, cataloging workflows, and public discovery systems.',
    role:
      'Initiated and led the local practicum implementation, working with library staff, professional mentors, earlier course collaborators, and community members on selection, acquisition, cataloging, discovery, and outreach.',
    approach:
      'Combined public demographic information with direct community engagement; researched Spanish-language and bilingual materials; organized recommendations in a public LibGuide; worked with the library director on budget-constrained ordering; cataloged and processed materials in Atriuum under staff guidance; improved OPAC and website discovery; and initiated the 1000 Libros donation campaign.',
    methods: [
      'Community-needs assessment and direct engagement',
      'Evidence-informed collection development',
      'Spanish-language and bilingual title research',
      'LibGuide recommendation design',
      'Budget-constrained acquisitions',
      'Atriuum cataloging and physical processing',
      'OPAC and website discovery',
      'Outreach planning and professional collaboration',
    ],
    deliverables: [
      'Public collection-development LibGuide',
      'Spanish-language and bilingual title recommendations',
      'Collaborative ordering and collection processing',
      'OPAC and website discovery improvements',
      '1000 Libros donation campaign',
    ],
    result:
      'The library director publicly estimated that close to 100 books were ordered through the collaborative project using a $1,000 library allocation. Public reporting later documented continued collection use and at least one post-practicum volunteer program; no quantified circulation increase or exact later collection total is claimed.',
    provenance: [
      'The public evidence is a self-authored derivative of the documented practicum process. The private evaluation and original poster remain unpublished.',
      'Earlier collaborative graduate coursework informed the community analysis. The library director approved and funded institutional actions; library staff and retired librarians provided cataloging and processing guidance; professional mentors supplied resources and advice; and community members contributed needs information.',
      'The approximate order count is attributed to the library director’s public estimate. It is neither an exact personal-selection count nor a later collection total.',
      'Public LibGuide, conference, institutional, and local-news pages are linked rather than reproduced; third-party book covers, descriptions, article text, and photographs are excluded.',
    ],
    accessibility: [
      'The evidence artifact presents the eight-stage process as a semantic ordered list whose meaning does not depend on arrows, color, or hover.',
      'Metrics, implemented and planned outreach, collaboration boundaries, and later-activity boundaries are represented in text.',
      'The text-first layout stacks without horizontal overflow at narrow viewport widths and retains logical keyboard and reading order.',
    ],
    limitations: [
      '“Close to 100” is an approximate estimate reported publicly by the library director; purchasing was collaborative and institutional.',
      'LibGuide recommendations, WorldCat link instances, ordered books, later donations, additional purchases, and later collection totals are not interchangeable.',
      'No quantified circulation increase, exact later collection size, or completion of the 1,000-book campaign goal is claimed.',
      'Post-practicum use and volunteer activity are later organizational developments, not all practicum deliverables or outcomes attributable solely to Jeremiah.',
      'The community-needs work does not establish an official demographic rate, language proficiency, or a formal institutional collection-development policy.',
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
      kicker: 'Portfolio evidence · Applied information-service practice',
      title: 'From Community Need to Collection Access',
      framing:
        'Spring 2024 graduate practicum in an operating public library. The project expanded an existing collection through collaborative, staff-authorized work; post-practicum use and programming are identified as later developments.',
      metrics: [
        {
          value: '$1,000',
          label: 'Library acquisition allocation',
        },
        {
          value: 'Close to 100',
          label: 'Books ordered through the collaborative project',
        },
      ],
      metricNote:
        'Recommendation, ordering, and later collection totals overlap but are not interchangeable; no exact personal-selection or post-practicum growth total is claimed.',
      process: [
        {
          title: 'Community need',
          description:
            'Combined public demographic information with direct community engagement to assess Spanish-language collection and service needs.',
          note:
            'The public derivative excludes informal population estimates and demographic speculation.',
        },
        {
          title: 'Selection research',
          description:
            'Consulted REFORMA and professional recommendations, publisher and bookseller sources, award and bestseller lists, notable authors, and children’s, juvenile, and adult materials across bilingual works, translations, and original Spanish-language works.',
          note:
            'The research informed title recommendations; it was not a formal institutional collection-development policy.',
        },
        {
          title: 'LibGuide recommendations',
          description:
            'Organized candidate titles and selection sources in a public LibGuide that served as a recommendation resource, visual advocacy tool, and secondary discovery resource.',
          note: 'WorldCat link instances represent recommendations, not verified purchases.',
        },
        {
          title: 'Budget & ordering',
          description:
            'Researched and organized title recommendations and worked with the library director to order close to 100 books through a $1,000 library allocation.',
          note:
            'The order count is the director’s approximate public estimate; purchasing was collaborative and institutional.',
        },
        {
          title: 'Cataloging & processing',
          description:
            'Cataloged and processed materials in Atriuum under staff guidance, including item entry, bibliographic-record editing, barcode and spine-label generation, and physical processing.',
        },
        {
          title: 'OPAC / website discovery',
          description:
            'Added collection-related content, improved connections among library web resources, worked with a localized OPAC interface, and made the collection easier to locate and promote online.',
          note: 'This was information-access and discovery work, not a web-development project.',
        },
        {
          title: '1000 Libros outreach',
          description:
            'Initiated a donation campaign intended to increase collection visibility and invite continued community support.',
          note:
            'Campaign initiation is distinct from planned radio, flyer, social-media, QR-analytics, and grant activity.',
        },
        {
          title: 'Post-practicum use & activity',
          description:
            'Public reporting later documented continued collection use and at least one post-practicum volunteer program.',
          note:
            'Later organizational activity is not treated as a practicum deliverable or attributed solely to Jeremiah.',
        },
      ],
      collaboration: [
        {
          title: 'Jeremiah',
          items: [
            'Initiated the practicum and led its local implementation',
            'Conducted local research and title-recommendation work',
            'Created the LibGuide and performed cataloging and discovery tasks',
            'Developed the outreach approach',
          ],
        },
        {
          title: 'Library staff',
          items: [
            'Provided institutional approval and implementation authority',
            'Allocated the budget and collaborated on ordering',
            'Provided cataloging and processing instruction and guidance',
          ],
        },
        {
          title: 'Professional and community input',
          items: [
            'REFORMA mentor and professional resources informed selection',
            'Earlier course collaborators informed the community analysis',
            'Community members contributed needs information',
          ],
        },
      ],
      outreach: {
        implemented: [
          'Initiated the 1000 Libros donation campaign',
          'Improved collection visibility through library discovery channels',
          'Later public reporting documented the collection and campaign',
        ],
        planned: [
          'Additional flyer, Spanish-language radio, social-media, and community-organization outreach',
          'QR-code analytics',
          'Grant applications beyond opportunity research',
        ],
      },
      dissemination:
        'The official 2025 ALA Diversity Fair program listed a poster drawing on the practicum’s lessons, with Jeremiah as the sole listed author/presenter. This derivative does not independently claim attendance or delivery.',
      provenance:
        'Self-authored portfolio process summary based on the documented Spring 2024 practicum and linked public evidence. Private evaluation material, the original poster, third-party images, and copyrighted article or LibGuide content are not reproduced.',
      caption:
        'This process summary traces a Spring 2024 graduate practicum that expanded an existing Spanish-language collection at Lenoir City Public Library. Community analysis and direct engagement informed title research, a public LibGuide, collaborative ordering, cataloging and processing, discovery improvements, and the 1000 Libros outreach campaign. The library director later estimated that close to 100 books were ordered through the project; later collection growth is not attributed solely to the practicum.',
    },
  },
  {
    id: 'usgs-lidar-metadata',
    number: '03',
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
    number: '04',
    title: 'Bibliographic Data Cleaning and Authority Reconciliation',
    year: '2026',
    context: 'Academic data-quality and reconciliation exercise · 2026',
    summary:
      'Course-guided OpenRefine work applying facets, reviewed clustering, GREL and regular-expression transformations, one Crossref journal lookup, and Publisher-to-VIAF reconciliation to a supplied sample of 1,001 article records.',
    challenge:
      'Apply a supplied cleaning sequence while distinguishing manually reviewed author-name merges from unverified external reconciliation candidates.',
    role:
      'Applied and documented the supplied workflow, reviewed selected author-name clusters, configured transformations and external lookups, and explored Publisher-to-VIAF reconciliation. The dataset, exercise sequence, and example expressions were supplied.',
    approach:
      'Inspected a supplied DOAJ article-metadata sample with facets; split multi-valued author cells; reviewed fingerprint, n-gram, Metaphone3, and Cologne candidate clusters; applied supplied GREL and regular-expression operations; performed one ISSN-based Crossref journal lookup; and reconciled Publisher strings to VIAF Corporate Name candidates through Conciliator.',
    methods: [
      'OpenRefine facets and manual cluster review',
      'Fingerprint and n-gram fingerprint clustering',
      'Metaphone3 and Cologne phonetic clustering',
      'Course-supplied GREL and regular expressions',
      'Date parsing and formatting',
      'One Crossref REST JSON lookup',
      'VIAF Corporate Name reconciliation through Conciliator',
    ],
    deliverables: [
      'Documented OpenRefine cleaning and reconciliation exercise',
      'Preserved transformation histories across three private OpenRefine project copies',
      'Publisher-to-VIAF best-candidate reconciliation output retained privately',
    ],
    result:
      'Preserved OpenRefine histories document selected transformations across 1,001 article records. A separate VIAF exercise retained best-candidate identifiers for 965 Publisher rows and left 36 unmatched; no reconciliation-accuracy evaluation was performed.',
    provenance: [
      'The article-metadata sample, exercise sequence, method choices, and example expressions were supplied through instructional material. The public artifact is a self-authored summary of the completed workflow, not the original exercise or data.',
      'Crossref supplied journal metadata for one lookup. VIAF was the authority-data source, queried through the third-party Conciliator reconciliation service.',
      'Original records, reports, API output, reconciliation mappings, and OpenRefine project files remain private; dataset redistribution terms were not established.',
    ],
    accessibility: [
      'The public derivative represents the workflow as an ordered process and the clustering results as a data table.',
      'Expressions use labelled code blocks, while candidate, review, and repeatability boundaries are stated in text rather than communicated by color.',
    ],
    limitations: [
      'The dataset, workflow design, method choices, and example expressions were supplied as part of a course-guided exercise.',
      'The preserved histories are only partially repeatable because work is divided across three project copies and facets are not always recorded as history operations.',
      'Clustering generated candidate similarities; only selected author-name merges were manually reviewed.',
      'Crossref was used for one journal lookup, not across all 1,001 records.',
      'The 965 VIAF best-candidate mappings were not independently validated and do not establish correct authority matches or an accuracy rate.',
      'External-service results may change, and the source dataset’s redistribution terms remain unresolved.',
    ],
    evidence: {
      type: 'bibliographic-workflow',
      kicker: 'Portfolio evidence · Record-level data quality',
      title: 'Bibliographic Cleaning & Reconciliation Workflow',
      boundary: {
        label: 'Project boundary',
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
        'The 4,009 working rows reflect split multi-valued author cells; they do not represent 4,009 bibliographic records.',
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
          description: 'Apply supplied GREL, regular-expression, date, and ordering operations.',
        },
        {
          title: 'External lookup',
          description: 'Perform one ISSN-based Crossref journal-metadata lookup.',
        },
        {
          title: 'Authority reconciliation',
          description: 'Request VIAF Corporate Name candidates for Publisher strings through Conciliator.',
        },
        {
          title: 'Review boundary',
          description: 'Separate reviewed author merges from unverified bulk best-candidate mappings.',
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
      doiNote:
        'Facet counts describe fields in the supplied article metadata; licence values do not establish a licence for redistributing the dataset.',
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
        'Clustering generated candidate similarities. Jeremiah reviewed and accepted selected author-name merges; the counts do not establish that every candidate represented one verified identity.',
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
            label: 'Course-supplied whitespace expression',
            code: String.raw`value.replace(/[\p{Zs}\s]+/,' ')`,
          },
          {
            label: 'Course-supplied date-format expression',
            code: 'value.toString("dd MMMM yyyy")',
          },
        ],
        expressionNote:
          'The example expressions were supplied through instructional material and applied during the exercise; no independent authorship claim is made.',
        examples: [
          {
            field: 'Language',
            before: 'English',
            after: 'EN',
            note:
              'The transformation occurred in the exercise; the language-code policy was not independently evaluated.',
          },
          {
            field: 'Date',
            before: '01/11/2015',
            after: '11 January 2015',
            note:
              'The operation is documented; the original date-locale interpretation was not independently validated.',
          },
        ],
      },
      crossref: {
        summary:
          'One starred record was isolated for an ISSN-based Crossref journal-metadata lookup; returned JSON was stored and message.title was extracted.',
        path: ['ISSN', 'Crossref /journals/{ISSN}', 'message.title', 'Journal Title'],
        note:
          'This was one journal lookup—not a lookup across all 1,001 records and not authority reconciliation. The raw response remains private.',
      },
      viaf: {
        summary:
          'Publisher strings were reconciled to VIAF Corporate Name candidates through the third-party Conciliator service.',
        metrics: [
          {
            value: '965',
            label: 'Rows retaining best-candidate mappings',
          },
          {
            value: '36',
            label: 'Rows left unmatched',
          },
        ],
        note:
          'Best-candidate mappings are workflow output, not independently verified authority matches.',
      },
      reviewBoundary:
        'Selected author-name clusters were manually reviewed. The final VIAF “match each cell to its best candidate” operation was not independently validated row by row; candidate does not mean verified identity.',
      repeatability: {
        summary:
          'Preserved OpenRefine histories make selected operations partially repeatable, not fully reproducible.',
        details: [
          'Work is divided across three private OpenRefine project copies',
          'Facets are not always represented as history operations',
          'Clustering algorithms are inferred from the documented exercise sequence',
          'Crossref, VIAF, and Conciliator depend on live services whose results may change',
        ],
      },
      limitations: [
        'Course-supplied dataset and workflow design',
        'Example expressions supplied through instructional material',
        'Partially repeatable histories across multiple project copies',
        'One Crossref lookup only',
        'VIAF mappings are unverified best candidates',
        'No reconciliation-accuracy metric',
        'Dataset redistribution terms unresolved',
      ],
      provenance:
        'Self-authored portfolio derivative based on the documented 2026 exercise and preserved OpenRefine histories. Original records, author names, article titles, identifiers, project files, API output, mappings, and instructional material remain private.',
      caption:
        'This workflow summary presents a 2026 academic OpenRefine exercise using 1,001 supplied article records. It traces facet-based inspection, reviewed author-name clustering, GREL and regular-expression transformations, one Crossref journal lookup, and Publisher-to-VIAF reconciliation. Preserved histories document the operations, but external candidates were not independently validated and no reconciliation-accuracy rate is available.',
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
