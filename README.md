# Impara italiano 🇮🇹

An Italian course that runs in the browser, built on the same design as [Deutsch lernen](https://github.com/matthewedwarddavidson/deutsch-lernen): typed recall with spaced repetition, grammar explained in English, graded reading and listening, and writing practice. No streaks, no AI tutor, nothing to pay for.

Work in progress. The plan is in [docs/roadmap.md](docs/roadmap.md); work is tracked as GitHub issues, grouped into stages by milestone.

### [Open the app →](https://matthewedwarddavidson.github.io/impara-italiano/)

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm test           # unit and content tests (Vitest)
npm run build      # type-check and production build into dist/
```

Word lists live in `src/content/words` (format in `src/content/parseWords.ts`); nouns are written with their article, and a content test checks each article against the rules in `src/lib/articles.ts`.

Your progress stays in your browser.
