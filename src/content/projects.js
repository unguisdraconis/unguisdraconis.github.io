import openFlightsOverview from "../assets/projects/openflights-overview.webp";

export const projects = [
  {
    id: "agricultural-research-dmp",
    number: "01",
    title: "Agricultural Research Data Management Plan",
    year: "2026",
    context: "Academic research-data-management project",
    narrative: [
      "For this academic project, I developed a data management plan for a proposed study of AI use in small-scale agriculture. I defined four planned research outputs and documented how they would be created or derived, described, protected, shared, and preserved.",
      "I prepared both a narrative plan and a DMP Roadmap JSON representation. The narrative contains most of the lifecycle detail, including consent, documentation, quality review, identifiers, access, backups, sharing, responsibilities, costs, and preservation. The JSON represents the project, its planned outputs, and distribution structure. I created the plan with DMP Tool using a Digital Curation Centre template.",
    ],
    evidence: {
      type: "dmp-summary",
      title: "Plan structure and stewardship",
      outputs: [
        {
          name: "Analyzed Data",
          purpose: "Cleaned, anonymized, analyzed tabular output",
          stewardship: "CSV/TSV; intended open sharing after anonymization",
        },
        {
          name: "Anonymized Data",
          purpose: "Cleaned and de-identified tabular research output",
          stewardship: "CSV/TSV; planned repository deposit",
        },
        {
          name: "Transcripts",
          purpose: "Anonymized text derived from proposed interviews",
          stewardship: "TXT; temporary source audio not retained",
        },
        {
          name: "Metadata",
          purpose:
            "Documentation of project, methods, questionnaire, and context",
          stewardship: "JSON; planned public documentation",
        },
      ],
      lifecycle: [
        {
          step: "Plan consent and reuse",
          note: "Document consent before collection and define reuse expectations for resulting data.",
        },
        {
          step: "Document and review",
          note: "Create metadata and method documentation, with quality review built into the workflow.",
        },
        {
          step: "Protect active data",
          note: "Separate identifiers from research data and plan access controls and backups by sensitivity.",
        },
        {
          step: "Share approved outputs",
          note: "Limit open sharing to approved anonymized outputs and document distribution and licensing.",
        },
        {
          step: "Preserve and discover",
          note: "Prepare approved outputs and documentation for repository deposit and discovery.",
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
          name: "USDA Ag Data Commons",
          role: "Primary intended repository",
          rationale:
            "Agricultural subject coverage made it the preferred fit for the proposed study.",
        },
        {
          name: "Zenodo",
          role: "Fallback repository",
          rationale:
            "A general-purpose option if the primary repository was not suitable.",
        },
      ],
      repositoryNote:
        "The 2026 plan considered both options for open access, DOI assignment, deposit preparation, and no anticipated storage charge. Repository acceptance and current service terms would need confirmation before deposit.",
      caption:
        "Output, stewardship, JSON, and repository details from the 2026 academic plan.",
    },
  },
  {
    id: "lcpl-spanish-language-collection",
    number: "02",
    title:
      "Building a Spanish-Language Collection at Lenoir City Public Library",
    year: "2024",
    context: "Graduate practicum · Spring 2024",
    narrative: [
      "I initiated and led this Spring 2024 graduate practicum to expand Lenoir City Public Library’s existing Spanish-language collection. Earlier group coursework informed the community analysis, and I combined public demographic information with community conversations to identify collection and service needs.",
      "With guidance from professional mentors, including a REFORMA mentor, I consulted professional recommendations, publisher and bookseller sources, award and bestseller lists, and the work of notable authors. I considered children’s, juvenile, and adult materials across bilingual works, translations, and original Spanish-language works. I organized candidate titles and selection sources in a public LibGuide that served as a recommendation resource, visual advocacy tool, and secondary discovery resource. The library director approved the practicum and its purchasing decisions, and we worked together on selection and ordering. The library allocated $1,000 to the project. The director later estimated that we ordered close to 100 books together.",
      "With guidance from library staff and retired librarians, I cataloged and processed materials in Atriuum, including item entry, bibliographic-record editing, barcode and spine-label generation, and physical processing. I also improved collection discovery through the OPAC and library website and initiated the 1000 Libros donation campaign. The collection continued to grow through donations and further library purchases. After the practicum, I continued as a volunteer for a bilingual storytime and dance program.",
    ],
    links: [
      {
        label: "Explore the LCPL collection LibGuide",
        href: "https://sis-utk.libguides.com/LCPL",
      },
      {
        label: "Review the 2025 ALA conference listing",
        href: "https://annual2025.eventscribe.net/index.asp?presTarget=2951524",
      },
      {
        label: "Read the UT CCI practicum profile",
        href: "https://cci.utk.edu/blog/2024/11/26/jeremiah-kings-making-the-world-into-his-classroom-through-practicum-at-the-lenior-city-library/",
      },
      {
        label: "Read the News-Herald collection report",
        href: "https://www.news-herald.net/news/lenoir-city-library-gets-spanish-language-collection-seeks-more-books/article_41990940-3b14-11ef-a92b-c7222feb436b.html",
      },
    ],
    evidence: {
      type: "collection-development",
      dissemination:
        "Listed in the 2025 ALA Diversity Fair program as the author and presenter for a poster about the practicum’s lessons.",
    },
  },
  {
    id: "usgs-lidar-metadata",
    number: "03",
    title: "USGS 3DEP LiDAR Metadata Record",
    year: "2025",
    context: "Academic geospatial metadata project",
    narrative: [
      "For this academic project, I selected a USGS 3DEP LiDAR point-cloud tile near Playa Punta Arenas, Puerto Rico, and developed an FGDC CSDGM XML record with the USGS Metadata Wizard. Most descriptive content came from the accompanying USGS metadata. I adapted that source, added specific place keywords, reviewed selected fields against FGDC guidance, and documented the record’s structure and my decisions in a rationale report.",
      "The resulting record represents geographic extent, horizontal and vertical reference information, source-derived data-quality fields, access and use constraints, and distribution across seven top-level CSDGM sections.",
    ],
    evidence: {
      type: "metadata-anatomy",
      title: "Record structure and selected fields",
      nodeCount: "194",
      nodeCountLabel:
        "total XML element nodes, including repeated and container elements",
      uniqueCount: "117 unique element names",
      sections: [
        {
          tag: "idinfo",
          name: "Identification Information",
          terms: [
            "citation",
            "description",
            "bounding extent",
            "keywords",
            "constraints",
          ],
        },
        {
          tag: "dataqual",
          name: "Data Quality Information",
          terms: [
            "attribute accuracy fields",
            "logical consistency field",
            "completeness field",
            "vertical accuracy field",
            "minimal lineage/process step",
          ],
          note: "CSDGM data-quality fields with source-derived quality statements",
        },
        {
          tag: "spdoinfo",
          name: "Spatial Data Organization Information",
          terms: ["point representation"],
        },
        {
          tag: "spref",
          name: "Spatial Reference Information",
          terms: ["horizontal reference", "vertical reference"],
        },
        {
          tag: "eainfo",
          name: "Entity and Attribute Information",
          terms: ["LAS specification overview"],
        },
        {
          tag: "distinfo",
          name: "Distribution Information",
          terms: ["digital format", "network access", "fee"],
        },
        {
          tag: "metainfo",
          name: "Metadata Reference Information",
          terms: ["standard name", "standard version"],
        },
      ],
      excerpts: [
        {
          title: "Bounding extent",
          code: `<bounding>
  <westbc>-67.946275</westbc>
  <eastbc>-67.944831</eastbc>
  <northbc>18.084241</northbc>
  <southbc>18.080595</southbc>
</bounding>`,
        },
        {
          title: "Reference-system fields",
          code: `<geodetic>
  <horizdn>NAD83_National_Spatial_Reference_System_2011</horizdn>
  <ellips>GRS1980</ellips>
</geodetic>
<altdatum>Puerto Rico Vertical Datum of 2002</altdatum>
<altunits>meters</altunits>`,
        },
      ],
      decisions: [
        "Added specific place keywords for Puerto Rico, Punta Arenas, and Playa Punta Arenas",
        "Consulted FGDC guidance when reviewing a spatial-reference warning",
        "Revised a related XML reference after review",
      ],
      caption:
        "Selected structure and field content from the academic FGDC CSDGM XML record.",
    },
  },
  {
    id: "bibliographic-reconciliation",
    number: "04",
    title: "Bibliographic Data Cleaning and Authority Reconciliation",
    year: "2026",
    context: "Academic data-quality and reconciliation exercise",
    narrative: [
      "For this course-guided 2026 OpenRefine exercise, I worked with a supplied sample of 1,001 DOAJ article-metadata records. The dataset, exercise sequence, and method choices were provided for the course.",
      "I inspected selected fields with facets, split multi-valued author cells, manually reviewed author-name cluster candidates, and applied GREL and regular-expression transformations. I also performed an ISSN-based Crossref journal-metadata lookup and requested VIAF Corporate Name candidates for Publisher strings through the third-party Conciliator service.",
      "Three preserved OpenRefine project histories document selected transformations. Facets and live-service results cannot be recreated from those histories alone.",
    ],
    evidence: {
      type: "bibliographic-workflow",
      title: "Selected cleaning and reconciliation evidence",
      metrics: [
        {
          value: "1,001",
          label: "Supplied article records",
        },
        {
          value: "11",
          label: "Original columns",
        },
        {
          value: "4,009",
          label: "Working rows after author splitting",
        },
      ],
      metricNote:
        "Splitting multi-valued author cells expanded the working table to 4,009 rows while the source dataset remained 1,001 article records.",
      clusters: [
        {
          method: "Fingerprint",
          candidates: "9",
          accepted: "9",
          cells: "29",
        },
        {
          method: "N-gram fingerprint",
          candidates: "10",
          accepted: "9",
          cells: "55",
        },
        {
          method: "Metaphone3",
          candidates: "56",
          accepted: "3",
          cells: "8",
        },
        {
          method: "Cologne phonetic",
          candidates: "98",
          accepted: "1",
          cells: "3",
        },
      ],
      clusterNote:
        "I manually reviewed selected author-name candidates and accepted the merge groups shown here.",
      transformations: {
        expressions: [
          {
            label: "Whitespace expression",
            code: String.raw`value.replace(/[\p{Zs}\s]+/,' ')`,
          },
          {
            label: "Date-format expression",
            code: 'value.toString("dd MMMM yyyy")',
          },
        ],
        expressionNote:
          "These expressions were supplied for the course exercise and applied in OpenRefine.",
      },
      crossref: {
        summary:
          "For one starred record, an ISSN-based Crossref request returned journal metadata; the exercise stored the JSON and extracted message.title.",
        path: [
          "ISSN",
          "Crossref /journals/{ISSN}",
          "message.title",
          "Journal Title",
        ],
      },
      viaf: {
        summary:
          "I queried VIAF Corporate Names through Conciliator and applied the bulk best-candidate option to the publisher results.",
        metrics: [
          {
            value: "965",
            label: "Rows with a best candidate",
          },
          {
            value: "36",
            label: "Rows left unmatched",
          },
        ],
        note: "These mappings were not verified individually.",
      },
      caption:
        "Aggregate results and selected operations from the course-guided OpenRefine exercise.",
    },
  },
  {
    id: "multilingual-library-database",
    number: "05",
    title: "Multilingual Library Book Database",
    year: "2024",
    context: "Academic database prototype",
    narrative: [
      "For this 2024 academic project, I designed and implemented a SQLite prototype for multilingual book-recommendation data. I translated documented business rules into an entity-relationship model and a schema built from core domain tables, composite-key junctions, and imported reference tables. The seven BOOK rows are sample records used to exercise the prototype.",
      "The project report credits an external source for the language and country reference data and states that I used it with permission.",
      "AI assisted with generating some test records, which the report identifies as inaccurate.",
    ],
    evidence: {
      type: "database-architecture",
      title: "Implemented relationship model",
      metrics: [
        { value: "26", label: "user-defined tables" },
        { value: "10", label: "core / domain tables" },
        { value: "13", label: "junction tables" },
        { value: "3", label: "reference tables" },
        { value: "27", label: "declared foreign keys" },
        { value: "9", label: "explicit user-created indexes" },
      ],
      centralEntity: {
        name: "BOOK",
        count: "7 rows",
        note: "Sample records used to exercise the prototype",
      },
      bookRelationships: [
        { junction: "BOOK_AUTHOR", entity: "AUTHOR" },
        { junction: "BOOK_PUBLISHER", entity: "PUBLISHER" },
        { junction: "BOOK_LANGUAGE", entity: "LANGUAGE_CODES" },
        { junction: "BOOK_GENRE", entity: "GENRE" },
        { junction: "BOOK_REVIEW", entity: "REVIEW" },
        { junction: "BOOK_AWARD", entity: "AWARD" },
        { junction: "BOOK_BOOKLIST", entity: "BOOKLIST" },
        { junction: "BOOK_SERIES", entity: "SERIES" },
        { junction: "BOOK_ISBN", entity: "ISBN" },
        { junction: "BOOK_VENDOR", entity: "VENDOR" },
      ],
      additionalRelationships: [
        {
          source: "AUTHOR",
          junction: "AUTHOR_COUNTRY",
          target: "COUNTRY_CODES",
        },
        { source: "AUTHOR", junction: "AUTHOR_REVIEW", target: "REVIEW" },
        {
          source: "PUBLISHER",
          junction: "PUBLISHER_COUNTRY",
          target: "COUNTRY_CODES",
        },
      ],
      referenceData: [
        { name: "Language_Index", rows: "72,524" },
        { name: "LANGUAGE_CODES", rows: "7,614" },
        { name: "COUNTRY_CODES", rows: "243" },
      ],
      referenceTotal: "80,381",
      referenceDescription:
        "These imported language and country lookup rows support the schema.",
      referenceRelationship:
        "LANGUAGE_CODES declares a foreign key to COUNTRY_CODES.",
      integrity: {
        label: "Foreign-key check",
        code: "PRAGMA foreign_key_check;\n→ 0 rows returned",
        note: "A later check of the preserved database returned no foreign-key violations.",
      },
      rules:
        "The design documents 16 intended business rules, and the implemented database captures the principal entity and junction relationships.",
      implementationGap:
        "Two documented language relationships are absent from the implemented SQLite schema.",
      caption:
        "Selected schema structure and aggregate counts from the academic SQLite prototype.",
    },
  },
  {
    id: "openflights-3d-network",
    number: "06",
    title: "OpenFlights 3D Network",
    year: "2026",
    context: "Portfolio visualization project",
    narrative: [
      "This portfolio visualization explores OpenFlights airport and route data, last updated in June 2014, as a historical network rather than current aviation service. It coordinates a 3D globe with a force-directed topology view.",
      "The React and Vite application uses D3 for data processing and force layout and Three.js with WebGL for rendering. It parses and indexes airport and route records, resolves endpoints, deduplicates and weights connections, and coordinates filtering and selection between views. Pointer selection uses a depth-aware GPU picking pass. Search, filters, tooltips, keyboard shortcuts, labelled controls, ARIA state, polite announcements, reduced-motion behavior, and non-color route patterns support exploration across input methods.",
      "AI materially supported implementation. I set the project direction, tested the running application, guided iteration, and made final decisions about data framing, interaction, accessibility, and technical tradeoffs. The repository documents the OpenFlights ODbL/DbCL terms and the additional terrain and boundary sources.",
    ],
    links: [
      {
        label: "View live project",
        href: "https://unguisdraconis.github.io/openflights/",
      },
      {
        label: "Review repository",
        href: "https://github.com/unguisdraconis/openflights",
      },
    ],
    media: {
      src: openFlightsOverview,
      alt: "OpenFlights historical route network shown on a 3D globe with filters and details for Charles de Gaulle International Airport.",
      caption: "Airport-route records shown in the geographic globe view.",
    },
  },
];
