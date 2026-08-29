# Build a Brain

A free, offline-first web course that takes a learner from basic arithmetic all
the way to coding a neural network from scratch — no frameworks, no libraries,
just real understanding built one lesson at a time.

**Live:** https://turlockmike.github.io/build-a-brain/

## What this is

14 phases, each broken into short lessons. Every lesson has:
- 2-4 learning objectives
- A plain-English explanation with real analogies (written for an 11-12 year old —
  clear and concrete, never condescending)
- A worked example
- 3-5 practice problems with a reveal-to-check solution
- A 5-question comprehension quiz with instant right/wrong feedback

Progress (started / complete / quiz scores) is saved in the browser's
`localStorage` — no account, no login, no backend, nothing leaves the device.
The service worker caches the whole app on first load so it keeps working with
no network afterward (same pattern as the sibling flashcard apps below).

## Status

**Phases 1-9 are fully written** (121 lessons total) — Phase 1 (Math
Foundations I, 20/20), Phase 2 (Programming Foundations I — Python, 17/17),
Phase 3 (How Brains Work, 15/15), Phase 4 (Logic & Computing Basics, 12/12),
Phase 5 (Statistics & Data, 12/12), Phase 6 (Math Foundations II, 13/13),
Phase 7 (Programming Foundations II, 12/12), Phase 8 (The Perceptron,
10/10), and Phase 9 (Calculus for Learning, 10/10). Phases 10-14 have no
lesson content yet, next up is Phase 10 ("Networks of Neurons").
Phases 10-14 are visible in the roadmap as titles only ("coming soon") so the
whole path is motivating to see, but have no lesson content yet. See
`STATUS.md` for the exact cutoff and what's next.

This is intentionally a multi-session project — see Mike's note in the original
task: "even if it takes 200 lessons it's okay... this is not a quick one-shot
project." Each future session should pick up one phase at a time.

## File structure

```
index.html          — shell: header, roadmap view, lesson view (all CSS inline)
app.js               — all app logic: routing (#/ and #/lesson/<id>), rendering,
                        localStorage progress, quiz grading
data/curriculum.js   — ROADMAP (all 14 phase titles) + LESSONS (full Phase 1-2 content)
sw.js                — service worker, cache-first app shell for offline use
manifest.json        — PWA manifest (installable, "Add to Home Screen")
icon.svg             — app icon
.nojekyll             — tells GitHub Pages not to run Jekyll on this repo
```

No build step. No npm, no bundler, no framework — plain HTML/CSS/JS served
as-is by GitHub Pages, matching the pattern used by this project's siblings:
[kana-cards](https://github.com/turlockmike/kana-cards),
[word625-cards](https://github.com/turlockmike/word625-cards), and
[latin-cards](https://github.com/turlockmike/latin-cards).

## Data model

`data/curriculum.js` defines two globals, loaded as a plain `<script>` tag
(no fetch, no CORS issues, works even opened directly from disk):

```js
const ROADMAP = [
  { number: 1, title: "Math Foundations I — arithmetic, intro algebra" },
  { number: 2, title: "Programming Foundations I — ..." },
  // ... through number 14
];

const LESSONS = [
  {
    id: "1.1",                 // "<phase>.<lesson number>"
    number: 1,
    title: "Number sense refresher — place value, rounding, estimating",
    objectives: ["...", "..."],                 // 2-4 short, verb-first
    explanation: ["paragraph 1", "paragraph 2"], // array of paragraphs
    example: { problem: "...", steps: ["...", "..."], answer: "..." },
    practice: [ { problem: "...", solution: "..." } ],  // 3-5 items
    quiz: [
      { type: "mc",    question: "...", choices: ["a","b","c","d"], answerIndex: 0, explanation: "..." },
      { type: "short", question: "...", answer: "...", acceptable: ["...", "..."], explanation: "..." }
      // exactly 5 items per lesson, mc + short mixed
    ]
  },
  // ...
];
```

`app.js`'s `renderRoadmap()` renders any `ROADMAP` entry that has matching
lessons in `LESSONS` (generalized 2026-08-25, no longer a `p.number === 1`
special case) — it never assumes a fixed list length, so appending lessons to
`LESSONS` for a new phase is enough to unlock that phase's lesson list
automatically.

## Adding a new phase (for the next session)

1. Pick the next phase from `ROADMAP` (Phase 9 shipped 2026-08-28, 10/10
   lessons; Phase 10 "Networks of Neurons" title breakdown is written —
   see `STATUS.md` § "Phase 10" — content 10.1 onward is next).
2. Write that phase's lesson list (title-only breakdown first, then full content
   per lesson using the exact schema above — same content bar as Phase 1-6: a
   real 300-500 word explanation with analogies, a worked example, 3-5
   practice problems with solutions, a 5-question quiz). Each lesson may
   assume only earlier-phase content plus earlier lessons in the same phase —
   never anything from a later phase or later lesson.
3. Append those lesson objects to `LESSONS` in `data/curriculum.js`, ids
   `"9.1"`, `"9.2"`, ... (id format is always `"<phase>.<lesson>"`).
3a. Run `bab-schema-check "<phase>."` (e.g. `bab-schema-check "9."`) to
   validate the schema shape — do NOT hand-roll a Node `vm` sandbox to load
   `curriculum.js` yourself, that workaround is already saved in the tool.
   Separately re-verify every arithmetic/prose claim via actual Python
   execution (schema-check does not and cannot check correctness, only shape).
   When a claim is an *exact* symbolic derivative/algebraic identity (not a
   numeric approximation), cross-check it against SymPy's independent
   symbolic differentiation/expansion in addition to (or instead of)
   `numerical_derivative`-style finite-difference checks — numerical carries
   an inherent epsilon of h-error, symbolic expansion is exact. Proven on
   Phase 9's chain-rule lessons (2026-08-28): SymPy caught the same answers a
   finite-difference check would, but with zero approximation error.
4. `renderRoadmap()` in `app.js` needs no further change — it already unlocks
   any phase with matching `LESSONS` entries automatically.
5. Bump the `CACHE` version string in `sw.js` (e.g. `bab-v6` → `bab-v7`) so
   returning users actually pick up the new content instead of a stale cache.
6. Commit, push to `main` — GitHub Pages serves straight from `main` / `/root`,
   no separate deploy step required. Then run `bab-ship-verify
   <cache-version> "<phase>."` to confirm the new content is actually live
   before calling the phase shipped (see below).

## Progress data format (localStorage)

Key: `bab_progress_v1`

```json
{
  "lessons": {
    "1.1": { "started": true, "complete": true, "quizScore": 4, "quizTotal": 5, "lastAttempt": 1755999999999 }
  }
}
```

A lesson is marked `started` the moment its view opens, and `complete` (with a
recorded quiz score) once the learner finishes that lesson's 5-question quiz.
