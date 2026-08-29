# Build a Brain — Status

**Status:** Phases 1-9 SHIPPED (Phase 1: 2026-08-24, Phase 2: 2026-08-25,
Phase 3: 2026-08-25, Phase 4: 2026-08-27, Phase 5: 2026-08-27, Phase 6:
2026-08-27, Phase 7: 2026-08-27, Phase 8: 2026-08-27, Phase 9: 2026-08-28) —
live on GitHub Pages. Phase 9 (Calculus for Learning) is now 10/10 lessons
written — see "Phase 9" section below.

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
- **Phase 8 (The Perceptron) content: 10/10 lessons fully written** — starts
  at the step function (turning a weighted sum into an all-or-nothing 0/1
  decision, callback to Phase 3's neuron-firing threshold and Phase 4's
  voltage-threshold decisions, and directly paying off lesson 6.12's own
  forward reference: "this is precisely what a...perceptron computes...
  That's a topic for Phase 8"), then folding an explicit threshold into a
  single combined bias number (unifying 6.12's "baseline" framing with
  3.11/4.8's "threshold" framing into one >= 0 rule), then the perceptron
  named precisely for the first time (z = (x . w) + b, output = step(z)),
  paying off lesson 3.14's biological-to-artificial mapping by name; then a
  hand-computation drill, the geometric view of a 2-input perceptron's
  decision boundary as a straight line (callback to 6.3's slope-intercept
  form), AND/OR/NOT built as perceptrons by choosing weights and bias
  (direct payoff of Phase 4's gates), the XOR problem (why a single
  perceptron provably cannot separate XOR's diagonal truth-table corners —
  Minsky & Papert 1969 — forward-referencing Phase 10's layered networks as
  the fix, no new math taught); then coding a perceptron in Python two ways
  — a loop with the accumulator pattern (callback to 2.14-2.16) and
  np.dot (callback to 7.10) — ending in a mini-project that rebuilds
  Phase 4's own fish-tank alarm decision circuit (lesson 4.12) as a single
  perceptron, hand-verified against all 8 truth-table rows and implemented
  both ways in code. Every lesson assumes only Phase 1-7 + earlier Phase 8
  lessons — content was generated in 3 lesson-groups (8.1-8.4, 8.5-8.7,
  8.8-8.10), each grounded in the ACTUAL prior-phase lesson content (pulled
  programmatically from `curriculum.js`, not assumed) needed for its
  callbacks, then schema-validated programmatically (10/10 lessons: correct
  id/number sequence, no duplicate ids across all 111 lessons, exactly 5
  quiz questions and 3-5 practice problems per lesson, valid mc answerIndex
  bounds) plus every worked example/practice/quiz numeric answer
  cross-checked against an independent Python re-computation of the same
  arithmetic (dot products, z values, step-function outputs, the
  slope-intercept boundary line, and all 8 rows of the fish-tank-alarm
  truth table) before merging into `data/curriculum.js` (111 lessons total
  across Phases 1-8).
- Deployed: pushed to `main` on `turlockmike/build-a-brain`, GitHub Pages
  enabled serving from `main` / root (same setup as kana-cards). Verified
  live with a `curl -sI` 200 check + a content check on `data/curriculum.js`
  post-deploy, for the Phase 1, Phase 2, Phase 3, Phase 4, Phase 5, Phase 6,
  Phase 7, and Phase 8 ships.

## Phase 9 (Calculus for Learning) — title breakdown + progress

Full 10-lesson title breakdown (matching the granularity of Phases 1-8's
title lists, each building only on Phase 1-8 content + earlier Phase 9
lessons per the README's progressive-dependency rule):

1. **9.1 — Average rate of change** — the slope of a curve between two
   points (extends 6.3's straight-line slope to curves like 6.4's y = x^2
   via the secant line). **WRITTEN.**
2. **9.2 — The derivative** — instantaneous rate of change as the interval
   shrinks to zero (secant line -> tangent line; numerically estimates
   f'(x) for x^2 and surfaces the f'(x) = 2x pattern). **WRITTEN.**
3. **9.3 — The power rule** — a shortcut for the derivative of x^n, checked
   against 9.2's shrinking-interval method instead of just asserted.
   **WRITTEN.**
4. **9.4 — Derivatives of sums and constant multiples** — building a bigger
   function's derivative from its pieces (needed for anything beyond a
   single power term). **WRITTEN.**
5. **9.5 — What the sign of a derivative means** — positive slope = uphill,
   negative slope = downhill, zero slope = flat; the exact vocabulary
   "finding the downhill direction" (this phase's own subtitle) will cash
   out as, foreshadowing Phase 11's gradient descent. **WRITTEN.**
6. **9.6 — Derivatives of multi-input functions** — holding all-but-one
   input still (partial derivatives), applied to a weighted sum shaped like
   8.3's z = (x . w) + b. **WRITTEN.**
7. **9.7 — The chain rule, part 1** — how a change ripples through a
   function of a function (a "gears" or "dominoes" analogy for composed
   functions), building intuition before any computation.
8. **9.8 — The chain rule, part 2** — computing it step by step on a worked
   composed function, turning 9.7's intuition into a repeatable procedure
   (this is the piece Phase 12's backpropagation will lean on hardest).
9. **9.9 — Coding a derivative** — the tiny-step numerical approximation
   (f(x+h)-f(x))/h in Python, i.e. literally what 9.1/9.2 did by hand,
   now as a function (callback to Phase 7's function-writing).
10. **9.10 — Mini-project** — using a derivative to find which direction
    shrinks a small error-like quantity, a hand-worked preview of the
    "downhill direction" idea Phase 11's gradient descent will formalize;
    mirrors 4.12/5.12/6.13/7.12/8.10's end-of-phase synthesis structure.

**9.1-9.10 (all 10) are fully written and merged into `data/curriculum.js`**
(121 lessons total across Phases 1-9 now), schema-validated
programmatically (`bab-schema-check` with no argument: 121/121 lessons
checked file-wide, 0 duplicate ids) and independently re-verified via
actual Python execution for every numeric claim: 9.1's four practice
intervals plus the x^2-vs-line contrast; 9.2's four h-shrinking sequences
at x=1,2,3,5 converging to 2x; 9.3's power-rule predictions checked against
fresh shrinking-h computations for x^3 and x^4 (h=0.1/0.01/0.001 sequences
converging to the predicted value) plus every practice/quiz power-rule
evaluation; 9.4's sum/constant-multiple predictions checked against
shrinking-h for 3x^2+x plus every practice/quiz evaluation; 9.5's sign
claims (f'(x)=2x-4 and g'(x)=-2x+6 evaluated at each x used, including the
flat point x=3) all recomputed independently; 9.6's partial-derivative
claims (linear z=2x1+5x2+1, and nonlinear z=x1^2+3x2, z3=5x1+x2^2,
z4=3x1^2+4x2) checked against finite-difference partials in both x1 and
x2; 9.7's gear/chain-rate compositions (all linear, e.g. 3x2, 5x4, 2x1)
recomputed directly; 9.8's chain-rule results for (3x+1)^2, (x+5)^2,
(2x)^2, (x-4)^2, (4x+3)^2, and (x+2)^3 each cross-checked against SymPy's
symbolic expansion+differentiation of the same expression (independent
method, exact agreement at every evaluated point); 9.9's
`numerical_derivative(f, x, h)` implementation actually run in Python
against x^2, x^3, and 9.8's (3x+1)^2, matching the power-rule/chain-rule
exact answers to 4 decimal places; 9.10's mini-project error function
E(w)=(10-2w)^2 (chain rule: outer u^2, inner 10-2w) evaluated at w=1,3,4,
5,5.5,6,8 with both the closed-form dE/dw=-40+8w and `numerical_derivative`
agreeing at every point, confirming the sign-flip either side of the w=5
minimum (E(5)=0, dE/dw=0). **Phase 9 is now SHIPPED — all 10/10 lessons
live.** `sw.js` cache bumped to `bab-v12` alongside the 9.7-9.10 merge so
returning users pick up the complete Phase 9 content.

## Phase 10 (Networks of Neurons) — title breakdown

Full 10-lesson title breakdown (matching the granularity of Phases 1-9's
title lists, each building only on Phase 1-9 content + earlier Phase 10
lessons per the README's progressive-dependency rule). No lesson content
written yet — titles only, per this wake's guardrail (breakdown first,
content in a future session).

1. **10.1 — From one perceptron to a layer** — running several perceptrons
   side by side on the same inputs, each with its own weights/bias,
   producing several outputs instead of one (a direct generalization of
   6.10-6.11's matrix-vector multiplication: one dot product per row is now
   one perceptron per row, stacked into a weight matrix).
2. **10.2 — Stacking layers: the forward pass** — feeding one layer's
   outputs as the next layer's inputs; naming input layer / hidden layer /
   output layer, and "forward pass" as the name for one full left-to-right
   pass through the network.
3. **10.3 — Why nonlinearity matters** — showing algebraically that
   stacking two purely-linear (weighted-sum-only) layers collapses to one
   equivalent linear layer, so depth alone buys nothing without something
   nonlinear between layers; reconnects to 8.13's XOR wall as the concrete
   case a stack of linear layers still can't solve.
4. **10.4 — The sigmoid activation function** — squashing any real number
   into (0, 1), contrasted with 8.2's hard step function (smooth vs.
   all-or-nothing), as the nonlinearity 10.3 said was missing.
5. **10.5 — The ReLU activation function** — max(0, x), simpler and
   cheaper than sigmoid, and why it's the default choice in modern deep
   networks (brief compare/contrast with 10.4's sigmoid).
6. **10.6 — Network architecture: width and depth** — input layer size
   fixed by the number of features (callback to Phase 5/6's dataset
   rows/columns), output layer size fixed by the task, hidden layer count
   and width as the tunable choices ("architecture" as a name for these
   choices).
7. **10.7 — Hand-computing a forward pass** — a fully worked small 2-layer
   example (2 inputs, one 2-neuron hidden layer with ReLU, one output
   neuron), tracing every weighted sum and activation by hand, extending
   8.5's hand-computation drill to more than one layer.
8. **10.8 — Coding a forward pass in NumPy** — the same computation as
   10.7 written as matrix multiplication + an elementwise activation
   function, reusing Phase 7's NumPy vectorized-operations toolkit instead
   of hand-rolled loops.
9. **10.9 — Solving XOR with a hidden layer** — the direct payoff of
   8.13's forward-referenced wall and 10.3's motivating example: a
   worked/coded 2-layer network that correctly classifies all four XOR
   inputs, something no single perceptron (Phase 8) could do.
10. **10.10 — Mini-project** — build and trace a small 2-hidden-neuron
    network's forward pass on a toy multi-example dataset by hand and in
    code, combining every idea from the phase (layers, forward pass,
    nonlinearity choice, architecture, NumPy implementation), mirroring
    4.12/5.12/6.13/7.12/8.10/9.10's end-of-phase synthesis structure.

## Pending — next session(s)

- **Phase 10 title breakdown is done (above)** — next up is drafting
  Phase 10 lesson content (10.1 onward), same content bar as every prior
  phase, each lesson assuming only Phases 1-9 + earlier Phase 10 lessons.
- **Phases 10-14 have no lesson content yet** — only their phase titles show
  in the roadmap as locked/coming-soon. Per Mike: build this out phase by
  phase across future sessions, not all at once ("chained background builds
  through the day" per his 2026-08-25 ask).
- **Schema-check tool:** use `bab-schema-check [lesson-id-prefix]` (e.g.
  `bab-schema-check "9."`, or no argument to check every lesson in the
  file) BEFORE hand-rolling a Node `vm` sandbox to load `curriculum.js` —
  the 9.1-9.2 and 9.3-9.6 ACT sessions each independently re-derived that
  same workaround (top-level `const LESSONS` doesn't attach to a vm
  sandbox's globals; needs `vm.runInContext('LESSONS', sandbox)`), so it's
  now a saved, self-tested tool instead of a few re-paid minutes every
  phase. Checks id/number sequence per phase, no duplicate ids file-wide,
  non-empty objectives/explanation/example, 3-5 practice items each with
  problem+solution, exactly 5 quiz questions with in-bounds mc answerIndex
  / present short answers. Does NOT check arithmetic/prose correctness —
  keep doing that via actual Python execution per lesson topic, as 9.1-9.6
  did.
- **Live-deploy verify tool:** use `bab-ship-verify <cache-version>
  <lesson-id-prefix> [timeout-s]` (e.g. `bab-ship-verify bab-v10 "9."`)
  instead of a manual curl after pushing a new phase — it polls past
  GitHub Pages' CDN rebuild lag (bit the Phase 8 ship, a bare curl right
  after push hit a stale cached copy) and checks the new lesson ids are
  actually present in the deployed `curriculum.js` in one step.
- Not done, optional backlog: multi-learner profiles (kana-cards has this
  pattern if wanted later), a lightweight math-notation renderer (KaTeX-style)
  if plain-text exponents/fractions ever feel cramped, print/export view.
