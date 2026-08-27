# Build a Brain — Status

**Status:** Phases 1-7 SHIPPED (Phase 1: 2026-08-24, Phase 2: 2026-08-25,
Phase 3: 2026-08-25, Phase 4: 2026-08-27, Phase 5: 2026-08-27, Phase 6:
2026-08-27, Phase 7: 2026-08-27) — live on GitHub Pages.

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
- Offline support: service worker (`sw.js`, cache `bab-v8` as of the Phase 7
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
- **Phase 4 (Logic & Computing Basics) content: 12/12 lessons fully written** —
  starts at what a bit is and why computers use two-state switches instead of
  ten (with an explicit callback to Phase 3's all-or-nothing neuron firing),
  through binary<->decimal conversion, binary addition with carrying, and
  bits/bytes representing more than numbers (2^N combinations, ASCII);
  then AND/OR/NOT gates and truth tables, NAND/NOR/XOR, combining gates into
  small circuits, and a lesson that explicitly pays off Phase 3's own
  forward-reference by connecting a gate's HIGH/LOW output to the same
  threshold-decision shape as a neuron firing; then Boolean logic in Python
  (and/or/not ARE the gates), if/elif/else traced as gate-circuit decisions,
  a half adder (XOR for sum, AND for carry, directly reusing binary addition
  from 4.3), ending in a mini-project (a fish-tank alarm decision circuit)
  that combines binary, gates, and the threshold-decision idea into one
  worked design. Every lesson assumes only Phase 1-3 + earlier Phase 4
  lessons — content was generated in 3 lesson-groups (4.1-4.4, 4.5-4.8,
  4.9-4.12) each briefed on the prior groups' coverage to keep the
  progressive-dependency constraint intact, then schema-validated
  programmatically (12/12 lessons: correct id/number sequence, non-empty
  objectives/explanation/practice, exactly 5 quiz questions each) before
  merging into `data/curriculum.js`.
- **Phase 5 (Statistics & Data) content: 12/12 lessons fully written** —
  starts at what a dataset is (rows=examples, columns=features, a small
  worked table plus a Python list-of-dicts callback to Phase 2), through
  mean (reusing the Phase 2 accumulator pattern), median (with an
  income-outlier example showing why it resists what the mean doesn't),
  mode and a three-way mean/median/mode comparison on shared data; then
  range, variance (deviation -> squared deviation -> average, population
  variance stated explicitly, divide by N), and standard deviation (sqrt of
  variance, same worked dataset carried across both lessons for numeric
  continuity); then probability basics (outcomes/events/favorable-over-total,
  tied to Phase 1 fractions), combining probabilities with AND/OR (an
  explicit callback to Phase 4's AND/OR gates — multiply for AND, add-minus-
  overlap for OR), expected value (weighted average of outcomes, tied back
  to lesson 5.2's mean), and train/test split intuition (memorizing vs.
  learning metaphor, fully conceptual, no ML math — that's Phase 8+), ending
  in a mini-project that runs one small dataset (6 kids' pull-up counts)
  through every measure from the phase (mean, median, mode, range, variance,
  std dev, a probability question, an expected-value question) in one
  coherent walkthrough, mirroring 4.12's synthesis structure. Every lesson
  assumes only Phase 1-4 + earlier Phase 5 lessons — content was generated
  in 3 lesson-groups (5.1-5.4, 5.5-5.8, 5.9-5.12) each briefed on the prior
  groups' coverage plus the actual Phase 1-4 content (grepped from
  `curriculum.js`, not assumed) to keep callbacks accurate and the
  progressive-dependency constraint intact, then schema- and arithmetic-
  validated programmatically (12/12 lessons: correct id/number sequence,
  non-empty objectives/explanation/practice, exactly 5 quiz questions each,
  valid mc answerIndex bounds; hand-spot-checked variance/probability/EV
  worked examples for correct arithmetic) before merging into
  `data/curriculum.js` (76 lessons total across Phases 1-5).
- **Phase 6 (Math Foundations II) content: 13/13 lessons fully written** —
  starts at what a function is (input/output machine, f(x) notation,
  callback to Phase 1's expression evaluation and Phase 2's Python
  functions), through graphing (x, f(x)) as ordered pairs on the coordinate
  plane, linear functions (slope-intercept form, rate of change), and a
  conceptual intro to nonlinear functions (y=x^2, non-constant rate of
  change, area-quadrupling); then vectors as ordered lists of numbers
  (callback to Phase 2 lists and Phase 5 dataset rows), vector addition and
  scalar multiplication, the dot product (multiply-then-add, tied explicitly
  to Phase 5's mean as a dot product with equal weights), and vector
  magnitude (sqrt of sum of squares, tied to Phase 5's standard deviation's
  square/sum/sqrt shape and the Pythagorean theorem); then matrices as grids
  built from row vectors (tied to Phase 5 datasets: rows=examples,
  columns=features), matrix-vector multiplication (one dot product per
  row), matrix-matrix multiplication (matrix-vector multiplication repeated
  once per column of the second matrix), and weighted sums (a dot product
  plus one bias number — named, not taught, as what a perceptron computes,
  deferring the actual firing/threshold mechanics to Phase 8), ending in a
  mini-project that runs one small business scenario (Mia's smoothie truck)
  through every tool from the phase — function evaluation, dot product,
  magnitude, matrix-vector multiplication, and weighted sum — in one
  coherent walkthrough, mirroring 4.12/5.12's synthesis structure. Every
  lesson assumes only Phase 1-5 + earlier Phase 6 lessons — content was
  generated in 3 lesson-groups (6.1-6.4, 6.5-6.8, 6.9-6.13) each briefed on
  the prior groups' ACTUAL content (grepped/pasted from the real lesson
  objects, not assumed) plus the actual Phase 1-5 content needed for
  callbacks, to keep the progressive-dependency constraint intact, then
  schema-validated programmatically (13/13 lessons: correct id/number
  sequence, non-empty objectives/explanation/practice, exactly 5 quiz
  questions each, valid mc answerIndex bounds, no duplicate ids across all
  89 lessons) plus hand-checked arithmetic on every worked example, practice
  problem, and quiz question across all 13 lessons (function evaluations,
  slopes, x^2 tables, vector addition/scaling, dot products, magnitudes
  including 3-4-5/6-8-10/5-12-13/8-15-17 triples, and every matrix
  multiplication entry) before merging into `data/curriculum.js` (89 lessons
  total across Phases 1-6).
- **Phase 7 (Programming Foundations II) content: 12/12 lessons fully
  written** — starts at 2D lists as tables (rows/columns, tying to Phase 5's
  dataset rows and Phase 6's matrix), through indexing and slicing beyond
  Phase 2's basics (negative indices, step slices, slicing a 2D list's rows),
  functions that return multiple values as tuples (extending Phase 2's
  multi-parameter functions with a comma-separated return, tuple unpacking
  at the call site), and the accumulator pattern extended to two dimensions
  (nested-loop grand totals, row sums, column sums, tied to Phase 5's
  row=example/column=feature idea); then parallel iteration with zip()
  (reimplementing Phase 6's vector addition and dot product as real Python
  functions), an explicit concept lesson on why hand-written loops don't
  scale and what "vectorized thinking" means, a gentle NumPy introduction
  (np.array(), shape, the array/list print-format tell), elementwise
  operations (+, -, *, explicitly distinguishing elementwise multiplication
  from Phase 6's dot product), broadcasting a scalar across an array
  (reproducing Phase 6's scalar multiplication example exactly), and
  NumPy's vectorized sum/mean/dot-product reductions and 2D-array
  axis-based row/column sums (replacing this phase's own earlier nested
  loops one method call at a time) — ending in a mini-project that returns
  to Mia's smoothie truck from Phase 6, now tracking a small sales table,
  and runs every tool from the phase (2D indexing/slicing, a tuple-returning
  function, zip(), NumPy arrays, elementwise/broadcasting operations, the
  dot product, and axis sums) through one coherent worked scenario,
  mirroring 4.12/5.12/6.13's synthesis structure. Every lesson assumes only
  Phase 1-6 + earlier Phase 7 lessons — content was generated in 3
  lesson-groups (7.1-7.4, 7.5-7.8, 7.9-7.12) each briefed on the prior
  groups' ACTUAL content plus the actual Phase 2, Phase 5, and Phase 6
  content needed for callbacks (grepped/pasted from the real lesson
  objects, not assumed), then schema-validated programmatically (12/12
  lessons: correct id/number sequence, non-empty objectives/explanation/
  practice, exactly 5 practice problems and 5 quiz questions each, valid mc
  answerIndex bounds, no duplicate ids across all 101 lessons) plus
  hand-verified arithmetic (via actual Python/NumPy execution, not just
  mental math) on every worked example, practice problem, and quiz question
  across all 12 lessons — including every NumPy elementwise/broadcasting/
  reduction/axis-sum computation and its cross-check against the equivalent
  Phase 6 hand-computed result — before merging into `data/curriculum.js`
  (101 lessons total across Phases 1-7).
- Deployed: pushed to `main` on `turlockmike/build-a-brain`, GitHub Pages
  enabled serving from `main` / root (same setup as kana-cards). Verified
  live with a `curl -sI` 200 check + a content check on `data/curriculum.js`
  post-deploy, for the Phase 1, Phase 2, Phase 3, Phase 4, Phase 5, Phase 6,
  and Phase 7 ships.

## Pending — next session(s)

- **Phases 8-14 have no lesson content yet** — only their phase titles show
  in the roadmap as locked/coming-soon. Per Mike: build this out phase by
  phase across future sessions, not all at once ("chained background builds
  through the day" per his 2026-08-25 ask).
- Next up: Phase 8, "The Perceptron — inputs × weights + threshold =
  decision, built by hand and in code." Needs its own lesson-title
  breakdown (like Phase 1-7 got) before full lesson content in the same
  schema.
- Not done, optional backlog: multi-learner profiles (kana-cards has this
  pattern if wanted later), a lightweight math-notation renderer (KaTeX-style)
  if plain-text exponents/fractions ever feel cramped, print/export view.
