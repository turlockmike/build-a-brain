# Build a Brain — Status

**Status:** Phases 1-3 SHIPPED (Phase 1: 2026-08-24, Phase 2: 2026-08-25,
Phase 3: 2026-08-25) — live on GitHub Pages.

Live: https://turlockmike.github.io/build-a-brain/
Repo: https://github.com/turlockmike/build-a-brain

## Done so far

- Full app scaffold: `index.html` + `app.js` + `sw.js` + `manifest.json` +
  `icon.svg` + `.nojekyll`, vanilla JS / no build step, matching the
  kana-cards/word625-cards/latin-cards family pattern.
- Roadmap view: all 14 phases visible as a vertical path/timeline. Any phase
  with lesson content in `LESSONS` unlocks and expands automatically (see
  `renderRoadmap()` in `app.js`, generalized 2026-08-25 from a Phase-1-only
  special case) — with per-lesson status + quiz score once complete, and a
  phase-level progress bar. Phases with no content yet render as locked
  "coming soon" cards showing only their title — full path visible, nothing
  hidden, nothing else clickable until it has content.
- Lesson view: objectives, explanation, worked example, 3-5 practice problems
  (reveal-to-check), 5-question quiz with instant right/wrong feedback per
  question and an end-of-quiz score + encouragement message. Prev/next lesson
  navigation.
- Progress tracking in `localStorage` only (`bab_progress_v1`): started /
  complete / quiz score per lesson, phase progress bar, overall progress bar.
  No account, no login, no backend.
- Offline support: service worker (`sw.js`, cache `bab-v4` as of the Phase 3
  ship) caches the whole app shell on first load; works with no network after
  that. Cache version gets bumped every time new phase content ships so
  returning users' service workers pick it up.
- **Phase 1 (Math Foundations I) content: 20/20 lessons fully written** —
  number sense through the coordinate plane, ending in a mini-project puzzle
  lesson that combines equation-solving, the distributive property, and
  negative numbers.
- **Phase 2 (Programming Foundations I — Python) content: 17/17 lessons fully
  written** — starts at "what is a program?" (print, comments), through
  variables, arithmetic/string operators, f-strings, if/elif/else, comparison
  and boolean operators, while and for loops, range(), lists (indexing,
  len(), append()), the accumulator pattern, and functions (parameters,
  return values), ending in a mini-project (a quiz-grader program) that
  combines every tool from the phase into one working program. Each lesson
  assumes only Phase 1 + earlier Phase 2 lessons — verified by spot-check
  (2.1, 2.13, 2.17) during the ship pass.
  Each lesson has real explanatory text (not filler), a worked example,
  practice problems with full solutions, and a 5-question quiz.
- **Phase 3 (How Brains Work) content: 15/15 lessons fully written** — starts
  at "what is a neuron?" (with a scale estimate callback to Phase 1's
  rounding skills), through neuron anatomy (dendrites/cell body/axon),
  electrical firing and the all-or-nothing threshold rule, crossing the
  synapse (presynaptic/postsynaptic, neurotransmitters), synaptic strength,
  "neurons that fire together wire together," why single neurons are limited
  but many-to-many networks aren't, layered pattern recognition, learning and
  memory as strengthened connections, forgetting as weakened connections,
  weighing many excitatory/inhibitory signals against a threshold, reflex
  circuits, specialized brain regions, and the bridge from biological neurons
  to the artificial neuron (naming the weights/threshold/layers mapping
  without teaching any of the math — that's reserved for Phase 8+), ending in
  a mini-project that traces a hand-worked 3-neuron circuit combining every
  idea from the phase. Every lesson assumes only Phase 1 + Phase 2 + earlier
  Phase 3 lessons — no forward references to Phase 8's perceptron math or
  Phase 9's calculus; the phase stays conceptual/biological throughout, as
  Mike's progressive-levels constraint requires.
- Deployed: pushed to `main` on `turlockmike/build-a-brain`, GitHub Pages
  enabled serving from `main` / root (same setup as kana-cards). Verified
  live with a `curl -sI` 200 check + a content check on `data/curriculum.js`
  post-deploy, for the Phase 1, Phase 2, and Phase 3 ships.

## Pending — next session(s)

- **Phases 4-14 have no lesson content yet** — only their phase titles show
  in the roadmap as locked/coming-soon. Per Mike: build this out phase by
  phase across future sessions, not all at once ("chained background builds
  through the day" per his 2026-08-25 ask).
- Next up: Phase 4, "Logic & Computing Basics — binary, logic gates,
  threshold decisions." Needs its own lesson-title breakdown (like Phase 1,
  2, and 3 got) before full lesson content in the same schema.
- Not done, optional backlog: multi-learner profiles (kana-cards has this
  pattern if wanted later), a lightweight math-notation renderer (KaTeX-style)
  if plain-text exponents/fractions ever feel cramped, print/export view.
