# Build a Brain — Status

**Status:** Phase 1 SHIPPED (2026-08-24) — live on GitHub Pages.

Live: https://turlockmike.github.io/build-a-brain/
Repo: https://github.com/turlockmike/build-a-brain

## Done this session

- Full app scaffold: `index.html` + `app.js` + `sw.js` + `manifest.json` +
  `icon.svg` + `.nojekyll`, vanilla JS / no build step, matching the
  kana-cards/word625-cards/latin-cards family pattern.
- Roadmap view: all 14 phases visible as a vertical path/timeline. Phase 1 is
  unlocked and expandable to its 20 lessons (with per-lesson status + quiz
  score once complete, and a phase-level progress bar). Phases 2-14 render as
  locked "coming soon" cards showing only their title — full path visible,
  nothing hidden, nothing else clickable yet.
- Lesson view: objectives, explanation, worked example, 3-5 practice problems
  (reveal-to-check), 5-question quiz with instant right/wrong feedback per
  question and an end-of-quiz score + encouragement message. Prev/next lesson
  navigation.
- Progress tracking in `localStorage` only (`bab_progress_v1`): started /
  complete / quiz score per lesson, phase progress bar, overall Phase 1 bar.
  No account, no login, no backend.
- Offline support: service worker (`sw.js`, cache `bab-v1`) caches the whole
  app shell on first load; works with no network after that.
- **Phase 1 (Math Foundations I) content: 20/20 lessons fully written** —
  number sense through the coordinate plane, ending in a mini-project puzzle
  lesson that combines equation-solving, the distributive property, and
  negative numbers. Each lesson has real explanatory text (not filler),
  a worked example, practice problems with full solutions, and a 5-question
  quiz.
- Deployed: pushed to `main` on a new public repo `turlockmike/build-a-brain`,
  GitHub Pages enabled serving from `main` / root (same setup as kana-cards).
  Verified live with a `curl -sI` 200 check post-deploy.

## Pending — next session(s)

- **Phases 2-14 have no lesson content yet** — only their phase titles show in
  the roadmap as locked/coming-soon. Per Mike: build this out phase by phase
  across future sessions, not all at once.
- Next up: Phase 2, "Programming Foundations I — Python: variables, loops,
  if/else, functions." Needs its own lesson-title breakdown from Mike first
  (like Phase 1 got), then full lesson content in the same schema.
- One small code change needed when phase 2 content lands: `renderRoadmap()`
  in `app.js` currently special-cases `p.number === 1` to decide which phase
  renders its lesson list — generalize that to "does this phase have entries
  in `LESSONS`" so each newly-written phase unlocks itself automatically. See
  README.md "Adding a new phase" for the full checklist (data schema, cache
  version bump, etc.).
- Not done, optional backlog: multi-learner profiles (kana-cards has this
  pattern if wanted later), a lightweight math-notation renderer (KaTeX-style)
  if plain-text exponents/fractions ever feel cramped, print/export view.
