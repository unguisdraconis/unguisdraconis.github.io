# Repository Working Instructions

## Purpose

This repository contains Jeremiah King's public professional portfolio. It should present evidence of research data management, digital curation, metadata, data quality, analysis, and accessible visualization without overstating the work.

## Claims and evidence

- Use precise claims supported by approved public content or repository evidence.
- Distinguish academic prototypes, course exercises, portfolio projects, and production systems.
- Never invent metrics, outcomes, dates, proficiency levels, impact, or project maturity.
- Treat project technologies as project-specific evidence rather than broad expertise claims.
- Preserve data provenance, licensing, limitations, contribution boundaries, and material AI-assistance disclosures.

## Privacy

- Keep private source records, handoff bundles, transcripts, identifiers, certificate numbers, signatures, recommendation material, street addresses, and application-specific resumes out of the repository.
- Commit only public-safe, sanitized content and assets.
- Do not copy private canonical profile files into this repository.

## Architecture and accessibility

- Keep structured content separate from presentation components.
- Avoid unnecessary dependencies and preserve the single-page React/Vite/plain-CSS architecture.
- Use semantic HTML, logical headings, keyboard-operable controls, visible focus, strong contrast, meaningful image alternatives, and reduced-motion handling.
- Do not make essential information or interaction depend on color or hover alone.

## Validation

Before completing an implementation task:

1. Install from the committed lockfile with `npm ci`.
2. Run `npm run lint`.
3. Run `npm run build`.
4. Run `git diff --check`.
5. Review the rendered content for unsupported claims and private information.
6. Report the commands and results.

Do not run automatic dependency fixes.

## Git safety

- Work on task-specific branches, not directly on `main`.
- Do not force-push or rewrite history without explicit authorization.
- Do not merge into `main` without explicit authorization.
- Do not deploy or enable publishing without explicit authorization.
