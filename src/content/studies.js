export const studies = [
  {
    id: 'talent-migration-storytelling',
    title: 'Talent Migration Data Storytelling in R',
    context: 'Formative academic visualization project · 2025',
    summary:
      'A 2025 INSC 592 final project built independently in R Markdown during Jeremiah’s first formal training in data analysis and visualization. The topic was self-selected, and the work used neither starter code nor AI.',
    notes: [
      {
        label: 'Methods',
        text: 'Used LinkedIn–World Bank source-provided indicators and OWID-provided World Bank regional classifications for descriptive rankings and comparisons, exploratory OLS modeling, diagnostic reflection, and historical visualization experimentation.',
      },
      {
        label: 'Context',
        text: 'The exploratory analysis used the indicators as supplied, without additional normalization or aggregation. Because source licensing was unclear, the data are not redistributed.',
      },
      {
        label: 'Reflection',
        text: 'The project informed more deliberate choices about color, accessibility, and chart selection in later work. Its original rainbow palette and Sankey treatment remain visible as part of that development.',
      },
    ],
  },
  {
    id: 'rsf-press-freedom-study',
    title: 'RSF Press-Freedom Data Study',
    context: '#30DayChartChallenge · Data interpretation and validation',
    summary:
      'A press-freedom study that retains RSF source CSVs unchanged and performs runtime normalization and interpretation for an exploratory streamgraph.',
    notes: [
      {
        label: 'Interpretation',
        text: 'The stacked “Average Score” is an exploratory, non-additive comparison rather than an official additive RSF score. The project emphasizes data validation before visual presentation.',
      },
      {
        label: 'AI contribution',
        text: 'AI implemented much of the application and diagnostic code. Jeremiah developed the analysis and cleaning theory, diagnosed failures, directed normalization, validated results, and made the final visual and interpretive choices.',
      },
    ],
    links: [
      {
        label: 'Explore the RSF study',
        href: 'https://unguisdraconis.github.io/rsf-streamgraph/',
      },
      {
        label: 'Review the RSF repository',
        href: 'https://github.com/unguisdraconis/rsf-streamgraph',
      },
    ],
  },
  {
    id: 'heatmap-dashboard-study',
    title: 'Heatmap Dashboard',
    context: 'D3 Loves React learning exercise · Historical 2025 temperatures',
    summary:
      'An exploratory heatmap of historical 2025 temperature data from Open-Meteo for 20 selected cities.',
    notes: [
      {
        label: 'Interaction and access',
        text: 'The minimalist legend is the primary exploratory interface. Pointer hover and keyboard focus use the same selection state, and a semantic table provides exact values.',
      },
    ],
    links: [
      {
        label: 'Explore the heatmap study',
        href: 'https://unguisdraconis.github.io/heatmap-dashboard/',
      },
      {
        label: 'Review the heatmap repository',
        href: 'https://github.com/unguisdraconis/heatmap-dashboard',
      },
    ],
  },
]
