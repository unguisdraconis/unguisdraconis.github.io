export const studies = [
  {
    id: 'talent-migration-storytelling',
    title: 'Talent Migration Data Storytelling in R',
    context: 'Formative academic visualization project · 2025',
    summary:
      'An unguided INSC 592 final project built in R Markdown, without starter code or AI, around a self-selected migration topic during Jeremiah’s first formal training in data analysis and visualization.',
    notes: [
      {
        label: 'Learning signal',
        text: 'Used LinkedIn–World Bank source-provided indicators and OWID-provided World Bank regional classifications for descriptive rankings and comparisons, exploratory OLS modeling, diagnostic reflection, and historical visualization experimentation.',
      },
      {
        label: 'Evidence boundary',
        text: 'The supplied indicators were not independently normalized or aggregated. The study is not presented as robust, causal, population-wide, or completely reproducible analysis; source licensing and redistribution remain unresolved.',
      },
      {
        label: 'Reflection',
        text: 'Retained as a formative visualization study. Later work reflects more deliberate color, accessibility, and chart-selection decisions; the original rainbow palette and Sankey treatment are not presented as current analytical practice.',
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
        label: 'Learning signal',
        text: 'The stacked “Average Score” is an interpretive, non-additive comparison—not an official additive RSF score. The work foregrounds validation over visually attractive but inaccurate machine output.',
      },
      {
        label: 'Contribution boundary',
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
      'An exploratory heatmap of historical 2025 temperature data for 20 selected cities from Open-Meteo; it does not present current weather.',
    notes: [
      {
        label: 'Learning signal',
        text: 'The minimalist legend is the intentional primary exploratory interface. Hover and keyboard focus share the interaction, while a secondary table provides exact values.',
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
