# Jeremiah King: Professional Portfolio

This repository contains Jeremiah King's public professional portfolio. The site presents selected work in research data management, metadata, digital curation, data quality, analysis, relational design, and accessible visualization.

The portfolio is a single-page React application built with Vite and plain CSS. Structured professional content is kept separate from presentation components so that the writing can be maintained independently of the interface.

## Local setup

Use Node.js 24 and install exactly from the committed lockfile:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Vite prints the local URL in the terminal.

## Validation and production build

```bash
npm run lint
npm run build
```

The production output is written to `dist/`. To inspect that output locally:

```bash
npm run preview
```

Do not run automatic dependency-fix commands as part of routine validation.

## Architecture

- `src/content/` contains the public profile, project, study, capability, education, experience, presentation, and service records.
- `src/components/` contains semantic presentation components.
- `src/assets/projects/` contains optimized portfolio media drawn from project sources.
- `src/styles.css` contains the design tokens, editorial layout, responsive behavior, focus treatment, and reduced-motion handling.

The site intentionally uses no router, UI framework, CSS framework, state-management library, analytics package, or animation library.

## Content and evidence policy

Portfolio claims must be traceable to approved facts or to the public repositories they describe. Academic prototypes, course exercises, portfolio projects, and production systems must remain clearly distinguished. Missing facts are omitted rather than replaced with generic claims or invented outcomes.

Project-specific technologies describe work performed in that project; they are not presented as proficiency rankings or broad expertise claims. Data provenance, licensing, material limitations, accessibility decisions, contributor roles, and material AI assistance should remain visible where relevant.

See [`AGENTS.md`](AGENTS.md) for repository working rules.

## Privacy

Do not commit private canonical profile material, handoff bundles, transcripts, student or certificate identifiers, signatures, recommendation material, street addresses, application-specific resumes, licensed course content, or private career-project sources. Only sanitized public content belongs in this repository.

## Deployment

The production target is [https://unguisdraconis.github.io/](https://unguisdraconis.github.io/). Because this is a GitHub user site, Vite uses the root base path (`/`).

The GitHub Pages workflow installs from the committed lockfile, builds the site with Vite, and publishes only the compiled `dist/` directory through GitHub Actions. In the repository settings, Pages Source must be set to **GitHub Actions**. The generated `dist/` directory remains ignored and is not committed.
