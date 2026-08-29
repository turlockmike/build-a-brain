# Build a Brain — Status

**Status:** Phases 1-12 SHIPPED (Phase 1: 2026-08-24, Phase 2: 2026-08-25,
Phase 3: 2026-08-25, Phase 4: 2026-08-27, Phase 5: 2026-08-27, Phase 6:
2026-08-27, Phase 7: 2026-08-27, Phase 8: 2026-08-27, Phase 9: 2026-08-28,
Phase 10: 2026-08-29, Phase 11: 2026-08-29, Phase 12: 2026-08-29) — live on
GitHub Pages. Phase 13 (Evaluation & Overfitting) is underway, 13.1-13.7/~10
lessons shipped 2026-08-29 — see "Phase 13" sections below. (This header
line drifts easily — see the ship-log sections below and git log for the
authoritative per-phase state; trust those over this summary on conflict.)

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
  Phase 7, and Phase 8 ships; Phase 9 and Phase 10 ships used the same
  post-deploy verification via the `bab-ship-verify` tool instead of a manual
  curl (it polls past GitHub Pages' CDN rebuild lag — see "Live-deploy verify
  tool" below).

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

## Phase 10 (Networks of Neurons) — title breakdown + progress

Full 10-lesson title breakdown (matching the granularity of Phases 1-9's
title lists, each building only on Phase 1-9 content + earlier Phase 10
lessons per the README's progressive-dependency rule).

1. **10.1 — From one perceptron to a layer** — running several perceptrons
   side by side on the same inputs, each with its own weights/bias,
   producing several outputs instead of one (a direct generalization of
   6.10-6.11's matrix-vector multiplication: one dot product per row is now
   one perceptron per row, stacked into a weight matrix). **WRITTEN.**
2. **10.2 — Stacking layers: the forward pass** — feeding one layer's
   outputs as the next layer's inputs; naming input layer / hidden layer /
   output layer, and "forward pass" as the name for one full left-to-right
   pass through the network. **WRITTEN** (worked example hand-solves XOR
   with a 2-perceptron hidden layer + 1-perceptron output layer, resolving
   8.7's cliffhanger — see note below on 10.9).
3. **10.3 — Why nonlinearity matters** — showing algebraically that
   stacking two purely-linear (weighted-sum-only) layers collapses to one
   equivalent linear layer, so depth alone buys nothing without something
   nonlinear between layers; reconnects to 8.7's XOR wall as the concrete
   case a stack of linear layers still can't solve. **WRITTEN.**
4. **10.4 — The sigmoid activation function** — squashing any real number
   into (0, 1), contrasted with 8.1's hard step function (smooth vs.
   all-or-nothing), as the nonlinearity 10.3 said was missing. **WRITTEN.**
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
   8.7's forward-referenced wall and 10.3's motivating example: a
   worked/coded 2-layer network that correctly classifies all four XOR
   inputs, something no single perceptron (Phase 8) could do. **Note for
   whoever writes this lesson:** 10.2 already hand-solves this exact XOR
   network (OR/NAND-shaped hidden layer + AND-shaped output layer, step
   activation) as its own worked example, so 10.9 should differentiate —
   e.g. lean on the NumPy/code angle (10.8) or the ReLU-based network from
   10.6/10.7 — rather than re-deriving the identical by-hand case.
10. **10.10 — Mini-project** — build and trace a small 2-hidden-neuron
    network's forward pass on a toy multi-example dataset by hand and in
    code, combining every idea from the phase (layers, forward pass,
    nonlinearity choice, architecture, NumPy implementation), mirroring
    4.12/5.12/6.13/7.12/8.10/9.10's end-of-phase synthesis structure.

**10.1-10.4 (group 1) were written and merged into `data/curriculum.js`**
first, schema-validated programmatically (`bab-schema-check "10."`: 4/4
lessons checked, plus `bab-schema-check` with no argument: 125/125
file-wide, 0 duplicate ids) and independently re-verified via actual
Python execution for every numeric claim: 10.1's layer computations
(perceptron-by-perceptron vs. matrix-vector multiplication agreeing at
every input, including the worked example and all practice/quiz cases);
10.2's full forward pass for all four XOR inputs (0,0)/(0,1)/(1,0)/(1,1),
each traced through the hidden layer's z/activation and the output
layer's z/activation and checked against XOR's truth table exactly;
10.3's linear-collapse claim — two purely-linear layers computed
sequentially vs. via one combined Wcombined/bcombined, at two different
inputs, agreeing to the exact integer in both cases; 10.4's sigmoid
values (sigma(0)=0.5 exactly; sigma(1), sigma(-1), sigma(2), sigma(-2),
sigma(3), sigma(-3), sigma(10) all matching a fresh `math.exp`-based
computation to 4+ decimal places, plus the sigma(z)+sigma(-z)=1 symmetry
check at z=1 and z=2). **Also fixed:** an existing typo in this file's
own title breakdown (two references to a nonexistent lesson "8.13" —
Phase 8 only has 10 lessons, 8.1-8.10; the actual XOR-wall lesson is
**8.7** — corrected above). `sw.js` cache bumped to `bab-v13` alongside
this merge (commit `5cfea14`, 2026-08-28).

**10.5-10.10 (group 2) are now also written and merged**, completing
Phase 10 at 10/10 lessons: 10.5's ReLU (max(0,z), contrasted with 10.4's
sigmoid on both compute cost and saturation); 10.6's architecture lesson
(input size fixed by dataset features per 5.1/6.9, output size fixed by
the task, hidden depth/width as the tunable choices, using 10.1's shape
rule); 10.7's fully hand-traced 2-input/2-hidden-ReLU/1-output forward
pass; 10.8's NumPy recoding of that same network (`np.dot` + `np.maximum`,
extending 8.9's loop-to-np.dot replacement to a whole layer); 10.9's
second, structurally different XOR solution — a ReLU "tent function"
hidden layer with NO output activation, deliberately distinct from 10.2's
step-based OR/NAND/AND construction (10.2 already solved XOR by hand once,
so 10.9 leans on a different mechanism entirely rather than re-deriving
10.2's case); and 10.10's mini-project, which hand-traces the 10.7 network
per row and then computes an entire 4-example toy dataset's forward pass
in one batched NumPy matrix multiplication, extending 7.11's 2D-array
handling. Every worked example/practice/quiz numeric claim was
independently re-verified via actual Python/NumPy execution (not mental
math): ReLU-vs-sigma value pairs at z=6,8,10,20; the full 2-layer forward
pass for x=[3,-1],[1,1],[0,0],[-2,5],[4,0]; the ReLU XOR "tent" network
traced across all 4 truth-table rows; the batched 4-example matrix
forward pass cross-checked row-by-row against the individually
hand-traced results; and a random-matrix shape-rule sanity check for
10.6's claims. The NumPy code shown in 10.8/10.9/10.10 was actually run,
not just described. `bab-schema-check "10."` passes 10/10 clean, and
`bab-schema-check` with no argument passes 131/131 file-wide, 0 duplicate
ids. `sw.js` cache bumped to `bab-v14`, committed and pushed (commit
`99ab625`, 2026-08-29), and confirmed live via `bab-ship-verify bab-v14
"10."` (OK, all 10 lesson ids present in the deployed
`data/curriculum.js`). **Phase 10 (Networks of Neurons) is now SHIPPED —
all 10/10 lessons live**, matching Phases 1-9's shipped status.

## Phase 11 (Learning: Loss & Gradient Descent) — title breakdown + progress

Full 10-lesson title breakdown (matching the granularity of Phases 8-10's
title lists, each building only on Phase 1-10 content + earlier Phase 11
lessons per the README's progressive-dependency rule).

**Scope note:** Phase 11 teaches a SINGLE neuron (perceptron-shaped, but
with 10.4's sigmoid instead of 8.1's step, since step has no useful slope
— see 10.4's own foreshadowing) to learn its own weights via loss +
gradient descent — the exact promise lesson 8.3 made ("it does not yet
learn those weights on its own — that's lessons 9 and 11's job"). The
multi-layer chain-rule machinery needed to train a whole STACKED network
(Phase 10's multi-layer forward pass) is deliberately saved for Phase 12
(backpropagation, "error flowing backward through the network" per the
roadmap) — Phase 11 stays to one neuron, one layer, so the update rule
itself can be learned clean before the chain-rule complexity of
multi-layer credit assignment is added on top.

1. **11.1 — What a loss function measures** — turning "how wrong was this
   prediction" into one number, generalizing 9.10's mini-project
   E(w) = (target - prediction)^2 from a one-off worked example into a
   named, reusable idea: the loss function. **WRITTEN.**
2. **11.2 — Mean Squared Error over a dataset** — averaging squared error
   (5.x's mean, applied across many examples' individual losses) into ONE
   number describing how well a model fits a whole dataset, not just one
   example. **WRITTEN.**
3. **11.3 — Loss as a function of the weights** — reading loss the same
   way 9.10 read E(w): as a curve that changes as a weight is tweaked,
   with a lowest point representing the best-fitting weight for that
   dataset. **WRITTEN.**
4. **11.4 — The gradient** — packaging 9.6's partial derivatives (one per
   weight) into a single vector that says, for every weight at once,
   which direction is uphill for the loss. **WRITTEN.**
5. **11.5 — Gradient descent: the update rule** — formalizing 9.10's
   "downhill direction" into a repeatable algorithm:
   w_new = w_old - (learning rate) x (dLoss/dw), applied to every weight.
6. **11.6 — The learning rate** — what the step-size number in 11.5's
   update rule controls, and why too large a value overshoots/diverges
   while too small a value crawls, shown with a small worked comparison.
7. **11.7 — Hand-computing one gradient descent step** — a fully worked
   tiny example (one sigmoid neuron, 10.4's activation, a couple of
   weights) tracing forward pass -> loss -> gradient -> updated weight,
   entirely by hand, extending 10.7's hand-traced forward pass one step
   further.
8. **11.8 — Coding gradient descent in NumPy** — the same 4-step
   computation (forward pass, loss, gradient, update) as vectorized code,
   reusing 10.8's NumPy forward-pass pattern and 7.x's vectorized-thinking
   toolkit.
9. **11.9 — Training loop: epochs** — repeating 11.8's one-step update
   many times in a loop and watching the loss number get smaller pass
   after pass, until it levels off; naming one full pass through this loop
   an "epoch."
10. **11.10 — Mini-project: training a single neuron from scratch** —
    starting from random/given weights, running 11.9's training loop until
    a single sigmoid neuron correctly fits a small toy dataset, tracing
    the loss curve dropping across iterations, combining every idea from
    the phase (loss, gradient, update rule, learning rate, epochs) into
    one end-to-end trained model — mirroring
    4.12/5.12/6.13/7.12/8.10/9.10/10.10's end-of-phase synthesis
    structure.

**11.1-11.4 (group 1) were written and merged into `data/curriculum.js`**,
staying to a single sigmoid neuron per the scope note above (no
multi-layer chain rule): 11.1's squared-error loss L=(t-p)^2 for one
sigmoid-neuron prediction; 11.2's Mean Squared Error, averaging several
examples' individual losses under one shared weight/bias; 11.3's
loss-as-a-function-of-w curve, using a target (t=0.5) sigmoid can hit
exactly so the worked example bottoms out at a clean L=0 at the
minimizing weight, tracing a symmetric bowl on either side; and 11.4's
gradient, extending 9.6's partial derivative + 9.9's numerical-derivative
technique to a two-weight neuron, packaging both partials into one
vector and reading its sign/magnitude per weight. Schema-validated
programmatically (`bab-schema-check "11."`: 4/4 lessons checked, plus
`bab-schema-check` with no argument: 135/135 file-wide, 0 duplicate ids)
and independently re-verified via actual Python execution for every
numeric claim: every z/p/L triple in 11.1's example, practice, and quiz
(x/w/b/t combinations spanning both a near-target and a far-from-target
case); 11.2's three-example MSE (0.3365/3 ~ 0.1122), the 4th-example
extension (~0.1022), and both practice-dataset MSEs (~0.1611, ~0.1321);
11.3's full symmetric-bowl table at w=-1,-0.5,0,0.25,0.5,1,1.5,2 (matching
pairs like w=-1 and w=2 landing on the identical L=0.2048, confirming the
bowl's symmetry around the w=0.5 minimum) plus the L=0-at-the-minimum
claim; and 11.4's two worked gradients (numerical dL/dw1, dL/dw2 at
h=0.001, cross-checked against the exact chain-rule value
2(p-t).sigma(z)(1-sigma(z)).x_i, agreeing to 3+ decimal places in both
the main example and the "Example" block) plus both practice gradients
(one confirming a sign flip when the target sits below all the
predictions). `sw.js` cache bumped to `bab-v15` alongside this merge.

**11.5-11.8 (group 2) were written and merged into `data/curriculum.js`**,
staying to the same single sigmoid neuron scope: 11.5 formalizes the
gradient descent update rule w_new = w_old - eta.(dL/dw), applied per
weight, reusing 11.4's own worked example (gradient [-0.355, -0.177]) to
show one step with eta=0.1 shrinking loss from ~0.1425 to ~0.1274; 11.6
explains the learning rate eta with a 3-step worked comparison on a
single-weight neuron (x=1, b=0, t=0.5, start w=-2) across eta=0.5
(crawls: L 0.1450->0.1349), eta=4 (reasonable: L 0.1450->0.0473), and
eta=30 (too large: overshoots the minimum on step 1 then bounces back up
to L=0.1217, worse than the reasonable run); 11.7 derives the sigmoid's
exact closed-form derivative sigma'(z)=sigma(z)(1-sigma(z)) and the
chain-rule gradient dL/dw_i = 2(p-t).sigma'(z).x_i, replacing 11.4's
numerical-derivative technique, then hand-traces one full forward-pass ->
loss -> gradient -> update cycle (x1=2, x2=-1, w1=0.6, w2=0.2, t=0,
eta=0.5: loss drops from ~0.5344 to ~0.3248); 11.8 codes the identical
4-step computation in vectorized NumPy (`grad = 2*(p-t)*p*(1-p)*x`,
`w = w - eta*grad`), confirming its output matches 11.7's hand-computed
numbers exactly. Schema-validated programmatically (`bab-schema-check
"11."`: 8/8 lessons checked, plus `bab-schema-check` with no argument:
139/139 file-wide, 0 duplicate ids) and independently re-verified via
actual Python/NumPy execution for every numeric claim, including 11.7's
exact-formula-vs-11.4's-numerical-method cross-check (agreeing to 3+
decimal places) and 11.8's NumPy output matching 11.7's hand trace
exactly. `sw.js` cache bumped to `bab-v16` alongside this merge, confirmed
live via `bab-ship-verify`.

**11.9-11.10 (group 3, final group) were written and merged into
`data/curriculum.js`**, closing out Phase 11: 11.9 defines an EPOCH as
one full pass through the training dataset, wraps 11.8's 4-step update
(forward pass, loss, gradient, new weights) in a loop, and traces the
shrink-then-flatten loss pattern on the single-example neuron used since
11.5 (x1=2, x2=-1, b=0, t=0, eta=0.5, start w=[0.6,0.2]) across 5+
epochs: loss ~0.5344 -> 0.3248 -> 0.1578 -> 0.0844 -> 0.0542 ->
(epoch 6) 0.0391. 11.10 is the Phase 11 mini-project: trains a 2-weight
sigmoid neuron from scratch on a NEW 3-example toy dataset
((x1=2,x2=-1,t=0), (x1=1,x2=1,t=1), (x1=-1,x2=2,t=1), start
w=[0.1,-0.1]), looping 11.8's per-example update through all 3 examples
each epoch and scoring the epoch's final weights with 11.2's MSE
formula — end-of-epoch MSE falls ~0.3033 (pre-training) -> 0.1335 ->
0.0861 -> 0.0646 -> 0.0516 -> 0.0428 over 5 epochs (~7x shrink, never
reaching exactly 0), synthesizing loss (11.1), MSE (11.2), the gradient
(11.4), the update rule/learning rate (11.5-11.6), the exact sigmoid
gradient (11.7), vectorized NumPy (11.8), and epochs (11.9) into one
end-to-end training loop. Stayed to ONE sigmoid neuron throughout (scope
note above) — no multi-layer chain rule. 141/141 lessons total across
Phases 1-11. Every numeric claim (every z/p/L/gradient/weight-update/MSE
across both lessons, all epochs) independently re-verified via actual
Python/NumPy execution, not mental math. `bab-schema-check "11."` 10/10
clean, file-wide 141/141 clean, 0 duplicate ids; `sw.js` cache bumped to
`bab-v17` alongside this merge, confirmed live via `bab-ship-verify`.
**Phase 11 (Learning: Loss & Gradient Descent) is now COMPLETE, 10/10.**

## Phase 12 (Backpropagation) — title breakdown (kickoff, no content yet)

Full 10-lesson title breakdown (matching the granularity of Phases 9-11's
title lists, each building only on Phase 1-11 content + earlier Phase 12
lessons per the README's progressive-dependency rule). **No lessons
written this session — this is the scope-note + breakdown session that
Phase 9/10/11 each did before their own content-writing sessions.**

**Scope note:** Phase 12 lifts the single-neuron restriction Phase 11 held
throughout (per Phase 11's own scope note above). It teaches multi-layer
CREDIT ASSIGNMENT — computing dL/dw for every weight in a network with a
hidden layer, not only the weights that touch the output directly — which
is what the roadmap's own Phase 12 description names: "chain rule applied
layer by layer, error flowing backward through the network"
(`data/curriculum.js:26`). Phase 12 keeps Phase 11's loss (11.1-11.2), the
update rule (11.5), the learning rate (11.6), and epochs (11.9) exactly as
defined — the ONLY new machinery is how to compute a gradient for a weight
that sits one layer before the output, by extending 11.7's two-step chain
rule (loss -> activation -> z -> weight) one link further (loss -> output
activation -> output z -> hidden activation -> hidden z -> weight) and
naming the reusable intermediate quantity at each layer a "delta." Scope
stays to a network with exactly ONE hidden layer, mirroring 10.7/10.9's
worked-example architecture — a second hidden layer would only repeat the
same backward step again, not teach a new idea, so it's left as an
unstated generalization rather than a taught case. Sigmoid (10.4) stays
the activation function in every worked example, reusing 11.7's exact
sigma'(z)=sigma(z)(1-sigma(z)) formula at every layer; ReLU (10.5) is not
given full backprop treatment in this phase, to keep the phase's actual
new idea (the backward-flowing chain rule / credit assignment) the
throughline rather than juggling two derivative formulas at once.
**Corrected while reading this context:** lesson 10.2's explanation and
one of its quiz solutions both said "Phase 11's backpropagation" — a
holdover from before Phase 11 became the single-neuron loss/gradient-
descent phase; fixed to "Phase 12's backpropagation" to match the current
roadmap (`data/curriculum.js:12871`, `:12905`), `bab-schema-check`
re-confirmed clean (141/141) after the fix.

1. **12.1 — The multi-layer credit-assignment problem** — why 11.7's exact
   gradient formula, dL/dw_i = 2(p-t).sigma'(z).x_i, only answers "how
   wrong was this weight" for a weight that connects DIRECTLY to the
   output neuron; a hidden-layer weight is one more forward-pass step
   removed, so the same formula doesn't yet apply — naming the gap this
   phase exists to close.
2. **12.2 — Extending the chain rule across layers** — revisiting 9.7's
   chain rule and 11.7's two-link chain (loss -> activation -> z ->
   weight) and adding one more link for a hidden-layer weight (loss ->
   output activation -> output z -> hidden activation -> hidden z ->
   weight), showing algebraically that the extra link is one more
   multiplication, not a new kind of math.
3. **12.3 — The output layer's error signal (delta)** — naming
   delta_output = dL/dz for the output neuron (the same 2(p-t).sigma'(z)
   quantity from 11.7, now given its own reusable name instead of being
   recomputed), because it is about to be passed backward in 12.4.
4. **12.4 — Backpropagating error to the hidden layer** — the phase's
   core new idea: each hidden neuron's "blame" (delta_hidden) is a
   WEIGHTED SUM of every output-layer delta it feeds into, using the same
   weights from the forward pass read backward (transposed), times that
   hidden neuron's own sigma'(z) — this is literally the "error flowing
   backward through the network" the roadmap names the phase for.
5. **12.5 — Computing every gradient from the deltas** — combining
   12.3/12.4's deltas with each layer's own inputs (delta times input,
   matching 11.7's x_i term) to get dL/dw for BOTH layers' weights,
   showing the output-layer and hidden-layer gradient formulas are
   structurally identical once the right delta is known.
6. **12.6 — Hand-computing one full backward pass** — a fully worked tiny
   2-input/2-hidden/1-output sigmoid network (extending 10.7's
   hand-traced forward pass and 11.7's hand-traced single-neuron gradient
   step): forward pass, loss, delta_output, delta_hidden, every weight's
   gradient, entirely by hand.
7. **12.7 — Coding backpropagation in NumPy** — vectorizing 12.6's hand
   computation into matrix operations (`delta_hidden = (W_output.T @
   delta_output) * sigmoid_derivative(z_hidden)`), reusing 10.8's
   forward-pass matrix code and 11.8's NumPy gradient-descent pattern.
8. **12.8 — Training loop for a multi-layer network** — wrapping 12.7's
   forward-pass-then-backward-pass computation in 11.9's epoch loop
   (forward, loss, backward, update — every layer, every epoch),
   extending single-neuron training (Phase 11) to a whole network.
9. **12.9 — Learning XOR from scratch** — the payoff: training a small
   hidden-layer network via 12.8's loop, starting from RANDOM weights
   (not the hand-picked OR/NAND/AND or ReLU-tent weights 10.2/10.9 used),
   watching gradient descent discover XOR-solving weights on its own —
   finally answering, by learning rather than by hand-design, the
   question Phase 8's single perceptron provably couldn't and Phase 10
   could only solve by construction.
10. **12.10 — Mini-project: training a 2-layer network end-to-end** —
    building and training a small hidden-layer network on a toy
    multi-example dataset from scratch, tracing the loss curve across
    epochs, combining every idea from the phase (credit assignment, the
    backward-flowing chain rule, deltas, hand + NumPy backprop, the
    training loop) with Phase 10's forward pass and Phase 11's
    loss/update-rule/learning-rate machinery into one complete pipeline —
    mirroring
    4.12/5.12/6.13/7.12/8.10/9.10/10.10/11.10's end-of-phase synthesis
    structure.

Suggested content-writing groups (mirroring Phase 11's 4+4+2 split):
group 1 = 12.1-12.4 (the conceptual buildup: problem, chain rule
extension, output delta, backprop-to-hidden), group 2 = 12.5-12.8 (the
mechanics: gradient formulas, hand computation, NumPy code, training
loop), group 3 = 12.9-12.10 (the payoff: learning XOR from scratch, then
the phase mini-project). Not started this session — next session's job.

## Phase 12 (Backpropagation) — group 1 (12.1-12.4) SHIPPED 2026-08-29

**Content written, verified, and live:** 12.1 the multi-layer credit-assignment problem
(why 11.7's exact gradient formula only covers weights touching the output directly —
worked with a 2-input/2-hidden/1-output network, x1=1/x2=0.5/t=1, showing w11 does not even
appear in zo's formula); 12.2 extending the chain rule across layers (the 5-link chain
dL/dw11 = dL/dp x dp/dzo x dzo/dh1 x dh1/dzh1 x dzh1/dw11, evaluated to approximately
-0.0301 and cross-checked against a finite-difference gradient check); 12.3 naming the
output layer's error signal, delta_output = dL/dzo = 2(p-t) x sigma'(zo) (the same quantity
11.7's formula always computed, now packaged for reuse); 12.4 backpropagating error to the
hidden layer, delta_hidden_j = [weighted sum of every output delta it feeds, via the same
forward-pass weights read backward] x sigma'(zh_j) — worked with both the running
single-output network (delta_hidden2 approximately 0.0258) and a supplementary
1-hidden/2-output network (delta_hidden approximately -0.0411) to make the weighted-sum
case concrete, both cross-checked against finite differences.

145/145 lessons total across Phases 1-12 so far. Every worked example/practice/quiz numeric
claim independently re-verified via actual Python execution (not mental math), including
the finite-difference gradient checks called out explicitly in 12.2's and 12.4's lesson
text per the verification note below. Pre-flight grep for stray "Phase 11's backpropagation"
misattributions came back clean (already fully fixed in the prior session's 10.2 patch —
nothing new to correct). `bab-schema-check "12."` 4/4 clean, file-wide 145/145 clean, 0
duplicate ids; `sw.js` cache bumped `bab-v18`->`bab-v19`; committed `5d7a09b`, pushed, live
confirmed via `bab-ship-verify bab-v19 "12."`.

## Phase 12 (Backpropagation) — group 2 (12.5-12.8) SHIPPED 2026-08-29

**Content written, verified, and live:** 12.5 computing every gradient from the deltas
(completed the full 9-parameter gradient table for the phase's running network — delta_output
x h_i for the 3 output-layer params, delta_hidden_j x x_i for the 6 hidden-layer params —
showing the output-layer and hidden-layer formulas are structurally identical; the two values
not yet computed in 12.1-12.4, dL/dw12 approximately -0.0151 and dL/dwo2 approximately
-0.1213, cross-checked against finite differences); 12.6 hand-computing one full backward pass
(a FRESH 2-input/2-hidden/1-output network, deliberately different weights/inputs/target than
the running example, run through the complete 5-step procedure — forward, loss, delta_output,
delta_hidden, every gradient — end to end by hand, one gradient finite-difference-checked);
12.7 coding backpropagation in NumPy (vectorizing 12.6's exact same network into matrix form —
`zh = W_hidden @ x + b_hidden`, `delta_hidden = (W_output.T @ delta_output) *
sigmoid_derivative(z_hidden)`, `grad_W_hidden = np.outer(delta_hidden, x)` — confirmed the
vectorized numbers reproduce 12.6's hand-computed table exactly, entry for entry); 12.8
training loop for a multi-layer network (wrapping 12.7's forward+backward pass in 11.9's
epoch loop, now updating all 4 parameter tensors — W_hidden/b_hidden/W_output/b_output — every
epoch; an ACTUAL 100-epoch training run on 12.6/12.7's network, lr=0.5, was executed in
Python and its real trajectory used as the lesson's worked example, not fabricated numbers:
loss 0.4087 -> 0.3449 -> 0.0949 -> 0.0124 -> 0.0054 at epochs 1/2/10/50/100).

149/149 lessons total across Phases 1-12 so far. Every worked example/practice/quiz numeric
claim independently verified via actual Python/NumPy execution before being written into the
lesson (not mental math), including finite-difference gradient checks in 12.5 and 12.6 per
the backprop-specific verification note below, and 12.7's vectorized-vs-hand cross-check
matching to 4 decimal places. Pre-flight grep for stray "Phase 11's backpropagation"
misattributions came back clean (both existing hits already correctly say "Phase 12's
backpropagation"). `bab-schema-check "12."` 8/8 clean, file-wide 149/149 clean, 0 duplicate
ids; `node --check` and a full LESSONS-array load both clean; `sw.js` cache bumped
`bab-v19`->`bab-v20`; committed, pushed, live confirmed via `bab-ship-verify`.

## Phase 12 (Backpropagation) — group 3 (12.9-12.10) SHIPPED 2026-08-29 — PHASE 12 COMPLETE

**Content written, verified, and live:** 12.9 learning XOR from scratch (the full 4-row XOR
truth table trained on the 2-input/2-hidden/1-output network using 12.8's training loop,
starting from RANDOM weights — seed 42 — instead of 10.2/10.9's hand-picked ones; an ACTUAL
5000-epoch training run was executed in Python and its real trajectory used as the lesson's
worked example: MSE 0.2526 (untrained) -> 0.2518 (epoch 1) -> 0.2499 (epoch 100) -> 0.2481
(epoch 500) -> 0.0134 (epoch 1000) -> 0.0013 (epoch 2000) -> 0.0003 (epoch 5000), a long
near-flat plateau through epoch 500 followed by a sharp drop, ending with all 4 XOR
predictions correctly classified; one gradient finite-difference-checked, including the
zero-weight-gradient-on-a-zero-input edge case 12.5's formula predicts); 12.10 mini-project
training a 2-layer network end-to-end (a FRESH 3-example toy dataset, deliberately different
from 12.9's XOR rows, run through the complete pipeline — Phase 10's forward pass, Phase 11's
loss/update-rule/learning-rate machinery, Phase 12's backpropagation — starting from small
random weights, seed 7; an ACTUAL 300-epoch training run executed in Python: MSE 0.2489
(untrained) -> 0.2425 (epoch 1) -> 0.2379 (epoch 2) -> 0.2227 (epoch 10) -> 0.0691 (epoch 50)
-> 0.0139 (epoch 100) -> 0.0025 (epoch 300), ending with all 3 examples correctly classified;
one gradient finite-difference-checked). Both lessons mirror 11.10's multi-example
end-of-epoch-MSE convention (per-example update, then one MSE snapshot per epoch against the
final weights) layered onto 12.8's forward-loss-backward-update loop.

151/151 lessons total across Phases 1-12 — **Phase 12 (Backpropagation) is now fully
SHIPPED, 10/10 lessons.** Every worked example/practice/quiz numeric claim independently
verified via actual Python/NumPy execution before being written into the lesson (not mental
math), including finite-difference gradient checks in both 12.9 and 12.10 per the
backprop-specific verification note below. Pre-flight grep for stray "Phase 11's
backpropagation" misattributions came back clean (0 hits); "Phase 12's backpropagation"
correctly appears 4 times. `bab-schema-check "12."` 10/10 clean, file-wide 151/151 clean, 0
duplicate ids; `node --check` and a full LESSONS-array load both clean; `sw.js` cache bumped
`bab-v20`->`bab-v21`; committed, pushed, live confirmed via `bab-ship-verify`.

## Phase 13 (Evaluation & Overfitting) — lesson 13.1 SHIPPED 2026-08-29

**Phase 13 (Evaluation & Overfitting), lesson 13.1 ("Accuracy: turning predictions into a
single score") SHIPPED 2026-08-29:** formalizes the round-at-0.5-threshold decision rule
every lesson since 11.9 already used informally, into accuracy = correct/total. Worked
example reuses 12.10's already-trained 2-input/2-hidden/1-output network — its exact
300-epoch training run was independently re-executed in Python/NumPy this session (matching
every intermediate number 12.10's own text states: epoch-1 example deltas, the epoch
1/2/10/50/100/300 MSE checkpoints, and the final 3 training predictions ~0.9634/~0.0710/
~0.9654) to obtain the network's ACTUAL final weights (not previously recorded in the
curriculum text), approximately W_hidden=[[2.6713,-0.8203],[2.2003,-0.6652]],
b_hidden=[-0.3101,-0.3218], W_output=[3.7789,2.5863], b_output=-2.7568. Training accuracy
on the network's own 3 training examples: 3/3 = 100%. A NEW 4-point held-out labeled test
set — (x=[1,1],t=1), (x=[-1,-1],t=0), (x=[0,-1],t=0), (x=[-2,2],t=0), never used in any
training update — scored against the SAME final weights: 3/4 = 75%, missing only
(x=[0,-1],t=0) which the network rounds to 1 (p approximately 0.7535). The 100%-vs-75% gap
from identical weights and the identical threshold rule, using only different data, is the
lesson's payoff and sets up the rest of the phase (confusion matrix, precision/recall,
overfitting).

152/152 lessons total across Phases 1-13 so far (13.1 of ~10 planned for Phase 13). Every
forward-pass number in 13.1 was independently computed via actual NumPy execution (no
training/gradients in this lesson, so no finite-difference check applies — 13.1 only scores
an already-trained, already-verified network). `bab-schema-check "13."` 1/1 clean, file-wide
152/152 clean, 0 duplicate ids; `node --check` clean; `sw.js` cache bumped
`bab-v21`->`bab-v22`; top-of-file ROADMAP/LESSONS doc comment refreshed to match (was stale
since before Phase 9 shipped — undercounted Phases 9-12 as unwritten).

**Next up: Phase 13 lessons 13.3 onward** — precision/recall (building directly on 13.2's
TP/FP/FN counts), then overfitting vs underfitting and why data size/quality/regularization
matter (the phase's stated scope). No lesson-title breakdown was pre-written for Phase 13
the way Phases 9-12 got one before content started — 13.1 and 13.2 were written directly
against the phase title's own bullet list (accuracy, confusion matrix, precision/recall,
overfitting vs underfitting, data size/quality, regularization); a future session may still
want to write the explicit 13.1-13.N title breakdown for planning continuity, mirroring
Phases 9-12's pattern, before pushing further into content.

## Phase 13 (Evaluation & Overfitting) — lesson 13.2 SHIPPED 2026-08-29

**Phase 13 lesson 13.2, "The confusion matrix: breaking accuracy into 4 kinds of outcome,"
SHIPPED 2026-08-29:** defines TP/TN/FP/FN, names 13.1's single wrong case (x=[0,-1],t=0)
explicitly as a false positive, then extends 13.1's 4-point held-out test set with 2 new
points — (x=[-1,2],t=1) and (x=[1,-2],t=1) — using the SAME 12.10 final trained weights (no
retraining) to surface a false negative, a mistake kind the original 4-point set never
contained. Confusion matrix over the resulting 6 points: TP=2, TN=2, FP=1, FN=1; accuracy =
(TP+TN)/6 = 4/6 approximately 66.7% — differs from 13.1's 75% only because the test set
changed, not the network or the rule (13.1's own point about data vs. weights, now
regrouped through the matrix). Payoff: two classifiers can tie on accuracy (e.g. 2 FP/0 FN
vs. 0 FP/2 FN) while failing in opposite directions — accuracy alone can't tell them apart,
the confusion matrix can. Every forward-pass number independently computed via actual NumPy
execution against 12.10's exact weight formula, cross-checked to reproduce 13.1's own 4
stated numbers before adding the 2 new points; no training/gradients in this lesson, so no
finite-difference check applies (same as 13.1). 153/153 lessons total across Phases 1-13 so
far. `bab-schema-check "13."` 2/2 clean, 153/153 file-wide, 0 dup ids; `sw.js` bumped
`bab-v22`->`bab-v23`, confirmed live via `bab-ship-verify`. Top-of-file ROADMAP/LESSONS doc
comment refreshed (152->153, 13.1->13.1-13.2).

## Phase 13 (Evaluation & Overfitting) — lesson 13.3 SHIPPED 2026-08-29

**Phase 13 lesson 13.3, "Precision and recall: two scores for the two ways a classifier
can be wrong," SHIPPED 2026-08-29** (commit `d194e9a`): defines precision=TP/(TP+FP) and
recall=TP/(TP+FN), built off the same 4 confusion-matrix counts 13.2 introduced. Computes
both on 13.2's own 6-point matrix (TP=2,TN=2,FP=1,FN=1): precision=recall=2/3 approximately
66.7%, equal only because FP=FN=1 in that particular matrix. Then reuses 13.2's own
practice problem 3 (two 80%-accuracy classifiers, A: TP=4/FP=2/FN=0, B: TP=4/FP=0/FN=2) to
show the scores diverge: A gets perfect recall (100%, never misses a real positive) but
66.7% precision (2 wrong "yes" calls); B gets perfect precision (100%, never wrong when it
says yes) but 66.7% recall (misses 2 real positives) — same accuracy, opposite failure
directions, exactly what 13.2 could only describe in words. A spam-filter worked example
(TP=18,TN=70,FP=2,FN=10 on 100 emails) grounds both scores in plain language: 90%
precision, 64.3% recall. Closes with the "predict positive for everything" gaming case
(recall=1.0 for free, precision collapses) as the reason both scores are always reported
together. Every number independently computed via Python: the 12.10-trained-network
forward pass was re-derived from scratch (zh = W_hidden @ x + b_hidden, sigmoid, then
W_output . h + b_output, sigmoid) and matched 13.1/13.2's stated p-values to 4 decimals
before reusing their confusion-matrix counts; all precision/recall ratios verified via
direct Python arithmetic. No training/gradients in this lesson, so no finite-difference
check applies (same as 13.1/13.2). 154/154 lessons total across Phases 1-13 so far.
`bab-schema-check "13."` 3/3 clean, 154/154 file-wide, 0 dup ids; `sw.js` bumped
`bab-v23`->`bab-v24`, confirmed live via `bab-ship-verify`. Top-of-file ROADMAP/LESSONS doc
comment refreshed (153->154, 13.1-13.2->13.1-13.3).

## Phase 13 (Evaluation & Overfitting) — lesson 13.4 SHIPPED 2026-08-29

**Phase 13 lesson 13.4, "Overfitting vs. underfitting: when more training stops helping,"
SHIPPED 2026-08-29:** the first Phase 13 lesson back on the TRAINING side (13.1-13.3 only
ever scored an already-trained, fixed network). Re-runs 12.10's exact training setup (same
starting weights, same 3-example training set, 12.8's per-example loop, lr=0.5) and scores
against 13.1's own 4-point held-out test set at many epoch checkpoints from epoch 1 through
epoch 20000 — far past 13.1's own stopping point of 300 — tracking training MSE and test MSE
together instead of one before/after snapshot. Underfitting shows up at epoch 20 (both train
MSE approximately 0.2076/66.7% accuracy and test MSE approximately 0.3544/25% accuracy are
poor together). Test MSE bottoms out at approximately 0.1450 around epoch 200 (13.1's own
epoch-300 checkpoint, MSE approximately 0.1482, turns out to sit just past that floor).
Past epoch 200 the curves split: training MSE keeps falling smoothly toward 0 (approximately
0.0001 by epoch 5000, approximately 0.0000 by epoch 20000) while test MSE turns around and
rises monotonically (approximately 0.1482 -> 0.1537 -> 0.1622 -> 0.1711 -> 0.1825 -> 0.1906
-> 0.1982 at epochs 300/500/1000/2000/5000/10000/20000) — the textbook overfitting curve.
Test ACCURACY never shows any of this: it is frozen at exactly 75% from epoch 50 through
epoch 20000 because the same single point, (x=[0,-1], t=0), is the only one ever wrong the
whole time — only its predicted probability drifts further wrong (approximately 0.7349 at
epoch 200 to 0.8535 at epoch 5000), invisible to a threshold-based score, extending 13.2/13.3's
point that a single accuracy number can hide the real pattern. Every number independently
computed via NumPy re-execution of the actual training loop (not hand-derived): epoch 1's
forward pass/gradients for the first training example matched 12.10's own published numbers
to 4 decimals before being trusted (this lesson's version of the 13.3-learned reimplementation
check), and the resulting epoch-300 weights/test predictions matched 13.1/13.2/13.3's own
published numbers exactly, confirming this is the SAME training run those lessons used,
carried further. Two finite-difference checks (11.4's technique) — one reproducing 12.10's
own published epoch-1 check, one freshly computed at epoch 200's weights (a state no prior
lesson published) — both matched analytic gradients to within 1e-6. 155/155 lessons total
across Phases 1-13 so far. `bab-schema-check "13."` 4/4 clean, 155/155 file-wide, 0 dup ids;
`sw.js` bumped `bab-v24`->`bab-v25`, confirmed live via `bab-ship-verify`. Top-of-file
ROADMAP/LESSONS doc comment refreshed (154->155, 13.1-13.3->13.1-13.4).

**Next up: Phase 13's remaining lessons** — data size/quality is the natural next topic
(13.4 already showed WHY more training epochs alone can hurt generalization once a tiny
3-example training set is "used up"; the natural next question is what more OR better
training data would do to the same picture), then regularization as a direct fix for the
overfitting 13.4 just demonstrated, continuing the ~10-lesson Phase 13 arc one lesson/session
at a time per Mike's phase-by-phase pacing.

## Phase 13 (Evaluation & Overfitting) — lesson 13.5 SHIPPED 2026-08-29

**Phase 13 lesson 13.5, "Data size and quality: two more knobs on the same overfitting
picture," SHIPPED 2026-08-29:** answers 13.4's own "Next up" question by holding epoch count
secondary and varying the training DATA itself, reusing 12.10's identical starting weights,
lr=0.5, and 13.1's identical 4-point test set throughout. First observation: all 7
previously-published points (13.1's 3 training + 4 test examples) are consistent with one
simple rule — label=1 iff x1>0, x2 irrelevant — which a 3-point training set cannot force a
network to discover, since many x2-dependent boundaries fit those same 3 points equally well.
SIZE experiment: extended the same 3 examples with 9 more clean examples following the
identical rule, deliberately spanning both signs of x2 for both classes (12 total, none
overlapping the test set). Test MSE floor drops to approximately 0.0725 (epoch 50), under
half the 3-example baseline's approximately 0.1450 floor (epoch 200), and the post-floor
overfitting rise is far gentler: approximately 0.0725 -> 0.0812 by epoch 20000 (+12%) versus
the baseline's approximately 0.1450 -> 0.1982 (+37%). Test accuracy stays flat at 75% in BOTH
runs the whole time — same single point, (x=[0,-1], t=0), sitting exactly on the true rule's
x1=0 boundary, wrong in both — so accuracy alone shows NO difference between two training
sets whose test LOSS differs by roughly 2x, extending 13.2/13.3/13.4's throughline. QUALITY
experiment: kept the training set the SAME SIZE as the baseline (3 examples) but flipped ONE
label ((x=[2,2], t=0) instead of the true t=1). Test MSE never bottoms out at all, climbing
straight from approximately 0.2052 (epoch 20) to approximately 0.7329 (epoch 20000) —
roughly 3.7x the clean baseline's own epoch-20000 test MSE — while test accuracy collapses to
25% (worse than guessing on a binary task) from epoch 50 onward. All three training sets
(12-clean, 3-clean, 3-mislabeled) reach the same 100% training accuracy / near-0 training MSE
— gradient descent fits whatever labels it is given, right or wrong, extending 13.1's point
that training accuracy proves fit, never correctness, to the labels themselves — yet
generalize wildly differently: quality is not a weaker version of quantity, since one wrong
label out of 3 is a large fraction of a tiny set's information. Every number independently
computed via NumPy re-execution of 12.8's training loop on all 3 datasets; the shared
implementation was re-confirmed FIRST by reproducing 13.4's own published checkpoint numbers
(epochs 20/50/200/300/500/1000/2000/5000/10000/20000, train+test MSE+accuracy) to 4 decimal
places on the identical 3-example set, before any new numbers were trusted. Two fresh
finite-difference checks (11.4's technique, on states no prior lesson published): one at the
12-example run's epoch-5 weights, on a never-before-used example (x=[3,-2], t=1); one at the
mislabeled run's epoch-5 weights, on the mislabeled example itself (x=[2,2], t=0) — both
matched analytic gradients to within 1e-6 (measured agreement approximately 1e-12). 156/156
lessons total across Phases 1-13 so far. `bab-schema-check "13."` 5/5 clean, 156/156
file-wide, 0 dup ids; `sw.js` bumped `bab-v25`->`bab-v26`, confirmed live via
`bab-ship-verify`. Top-of-file ROADMAP/LESSONS doc comment refreshed (155->156,
13.1-13.4->13.1-13.5).

**Next up: Phase 13's remaining lessons** — regularization is the natural next topic (a
direct fix for the overfitting 13.4 demonstrated and 13.5 showed clean data alone only
partially mitigates — the 12-example run still overfits somewhat, just from a much lower
floor), continuing the ~10-lesson Phase 13 arc one lesson/session at a time per Mike's
phase-by-phase pacing.

## Phase 13 (Evaluation & Overfitting) — lesson 13.6 SHIPPED 2026-08-29

Lesson 13.6 (`data/curriculum.js`, id "13.6") introduces the first change to the TRAINING
RULE itself, not just to how long/what data 12.10's exact 3-example baseline trains on: L2
regularization (weight decay). Loss becomes L_reg = (p-t)^2 + (lambda/2)*(sum of squared
weights in W_hidden and W_output; biases deliberately excluded), which adds lambda*W to
each weight's gradient only — grad_b_hidden/grad_b_output are unchanged from 12.8.
Equivalently each update first shrinks every weight by (1 - lr*lambda) before subtracting
the ordinary data gradient. Three full 20000-epoch runs from 12.10's identical starting
weights, the identical 3-example training set, lr=0.5, and 13.1's identical 4-point test
set, varying only lambda: lambda=0 (13.4's own published baseline, unchanged) floors at
test MSE approximately 0.1450 (epoch 200) then rises to approximately 0.1982 by epoch
20000 (+37% past floor). lambda=0.01 floors at approximately 0.1462 (epoch 200) and stays
essentially flat — approximately 0.1493 by epoch 1000, unchanged to 4 decimals through
epoch 20000 (+~0.0031 past floor, versus lambda=0's +0.0532) — while still reaching 100%
training accuracy by epoch 50, same as lambda=0. lambda=0.1 is NOT a stronger version of
the same fix: training accuracy stays stuck at 66.7% the entire run (the network never
fits its own training set), test MSE sits around 0.37 (worse than lambda=0's final value),
and the epoch-20000 weights collapse to magnitudes around 1e-4 to 1e-5 — the network
predicts the same p approximately 0.6761 (the majority training label) for all 3 training
AND all 4 test points regardless of x, having stopped using its input entirely. Every
number independently computed via NumPy: the lambda=0 run was first diffed against 13.4's
own published checkpoint numbers (epoch 20/50/200/300/500/1000/2000/5000/10000/20000,
train+test MSE+accuracy) to 4 decimal places, and epoch 1's forward pass for training
example 1 matched 12.10's own published zh/h/zo/p/L/delta_output/delta_hidden, before any
regularized run was trusted. A finite-difference check (11.4's technique, extended to the
new L_reg = (p-t)^2 + (lambda/2)*sum(W^2)) at the lambda=0.01 run's epoch-5 weights (a
state no prior lesson published), on training example 1, matched analytic gradients
including the new lambda*W term to within 1e-6 for grad_W_output, grad_W_hidden,
grad_b_output, and grad_b_hidden (measured agreement on the order of 1e-11). 157/157
lessons total across Phases 1-13 so far. `bab-schema-check "13."` 6/6 clean, 157/157
file-wide, 0 dup ids; `sw.js` bumped `bab-v26`->`bab-v27`, confirmed live via
`bab-ship-verify`. Top-of-file ROADMAP/LESSONS doc comment refreshed (156->157,
13.1-13.5->13.1-13.6).

**Next up (superseded by 13.7 section below — see there for the current pointer).**

## Phase 13 (Evaluation & Overfitting) — lesson 13.7 SHIPPED 2026-08-29

Lesson 13.7 (`data/curriculum.js`, id "13.7") turns 13.4's hand-checked advice ("watch test
loss, not training loss, to decide when to stop") into an automatic rule: early stopping.
Monitor a held-out metric (test MSE) every epoch, keep the best-seen weights, and stop once
`patience` consecutive epochs pass with no improvement — then report the SAVED best weights,
not the current ones. Re-running 13.4's identical lambda=0 setup (12.10's starting weights,
the same 3-example training set, lr=0.5, 13.1's 4-point test set) but checking EVERY epoch
instead of only 13.4's 10 checkpoints found two things 13.4's coarser grid could not see:
(1) the run's TRUE global-minimum test MSE is approximately 0.1442 at epoch 151, slightly
lower and earlier than 13.4's own reported lowest checkpoint value (approximately 0.1450 at
epoch 200) — not an error in 13.4 (epoch 200 genuinely was the lowest of its 10 sampled
points), just a gap only every-epoch monitoring can close; (2) test MSE is not simply
fall-then-rise — it actually RISES for the first 14 epochs (approximately 0.3098 at epoch 1
to approximately 0.3600 at epoch 14) before falling to the epoch-151 floor, a three-segment
shape (up, down, up) 13.4's checkpoints never revealed. That opening rise makes `patience`
a real, load-bearing choice, not a free knob: test MSE does not fall back below its own
epoch-1 value until epoch 31, so patience<=29 exhausts itself during that stretch and stops
at epoch 30 having only ever recorded epoch 1 (66.7% train accuracy, 25% test accuracy —
essentially untrained) as "best", while patience>=30 survives to epoch 31's first real
improvement and rides the curve down to the true epoch-151 optimum (100% train accuracy,
75% test accuracy, test MSE approximately 0.1442 — better than any fixed checkpoint any
prior Phase 13 lesson used). Every checkpoint reused from 13.4 (epochs
20/50/200/300/500/1000/2000/5000/10000/20000, train+test MSE+accuracy) was independently
re-derived in NumPy and matched 13.4's own published numbers to 4 decimal places, and epoch
1's training MSE (approximately 0.2425) matched 12.10's own published value, before the
finer every-epoch grid was trusted. Since this lesson adds no new gradient term (only a
monitoring/stopping rule on top of 12.8's existing backprop), a finite-difference check
(11.4's technique) was still run at the epoch-150 weights (a state no prior lesson
published), on training example 1 — analytic and numerical grad_W_output, grad_b_output,
grad_W_hidden, and grad_b_hidden all matched to within 1e-6 (measured agreement on the
order of 1e-11). 158/158 lessons total across Phases 1-13 so far. `bab-schema-check "13."`
7/7 clean, 158/158 file-wide, 0 dup ids; `sw.js` bumped `bab-v27`->`bab-v28`, confirmed live
via `bab-ship-verify`. Top-of-file ROADMAP/LESSONS doc comment refreshed (157->158,
13.1-13.6->13.1-13.7).

**Next up: Phase 13's remaining lessons** — with epoch count (13.4), data size/quality
(13.5), L2 regularization (13.6), and early stopping (13.7) each covered as a separate knob
on the same 3-example overfitting picture, the one clearly-named remaining candidate is
cross-validation / a proper train-vs-validation split: this course has used a single fixed
4-point test set throughout all of Phase 13 so far, and it is worth surfacing explicitly
that hyperparameters like 13.6's lambda and 13.7's patience were themselves chosen by
eyeballing performance ON that same fixed test set — its own subtle form of fitting to the
"held out" data, and the natural closing topic for the ~10-lesson Phase 13 arc. Continuing
one lesson/session at a time per Mike's phase-by-phase pacing.

## Phase 13 (Evaluation & Overfitting) — lesson 13.8 SHIPPED 2026-08-29

Lesson 13.8 (`data/curriculum.js`, id "13.8") closes the "single fixed test set is quietly
doing double duty" thread 13.6/13.7 raised, but not by splitting the already-tiny 4-point
external test set further (tried first: splitting it into a 2-point validation set + 2-point
held-out test set gave three different, noisy "best epoch" answers — best-by-2pt-validation
at epoch 2000, best-by-full-4pt at epoch 151, best-by-2pt-heldout at epoch 76 — no clean
story from an already-thin slice). Instead it introduces leave-one-out cross-validation
(LOOCV) on 12.10's 3-example TRAINING set itself: with only 3 training examples, permanently
reserving any one as a validation point would cost a third of the data the network ever
learns from, so LOOCV rotates which single example is held out, training on the other 2 each
time (3 folds total, each from 12.10's identical starting weights, lr=0.5, 300 epochs).
Result: fold 1 (hold out (x=[1,-1],t=1), train on the other two) predicts p approximately
0.8679 — correct. Fold 2 (hold out (x=[-1,1],t=0)) predicts p approximately 0.9750, rounding
to 1 — WRONG. Fold 3 (hold out (x=[2,2],t=1)) predicts p approximately 0.4402, rounding to 0
— WRONG. LOOCV-averaged validation accuracy is therefore 1/3 approximately 33.3% (average
validation MSE approximately 0.4272) — far below both the 100% training accuracy this same
network reaches when trained on all 3 points together and the 75% accuracy 13.1 reported on
the fixed 4-point external test set, not because the numbers disagree but because they
measure different things: LOOCV averages 3 separately-trained 2-point networks, each scored
on the 1 point excluded from its own fold, revealing that removing even 1 of only 3 training
points (33% of the data) is enough to flip this network's prediction on the removed point in
2 of 3 cases. Every fold reuses 12.8's unmodified backprop; the full-3-example (no-fold)
baseline run was checked first and reproduced 13.1's own published forward-pass numbers to
4 decimal places before any 2-example fold run was trusted, and a finite-difference check
(11.4's technique) on fold 1's first training update matched analytic gradients to within
1e-6 (measured agreement approximately 1e-9). 159/159 lessons total across Phases 1-13.
`bab-schema-check "13."` 8/8 clean, 159/159 file-wide, 0 dup ids; `sw.js` bumped
`bab-v28`->`bab-v29`, confirmed live via `bab-ship-verify`. Top-of-file ROADMAP/LESSONS doc
comment refreshed (158->159, 13.1-13.7->13.1-13.8).

**Next up (corrected 2026-08-29, later still — the line below was stale):** Phase 13
lesson 13.9 (F1 score) shipped 2026-08-29, closing 13.3's "precision and recall must always
be reported together" warning with one combined harmonic-mean number. **SURPRISE caught this
session:** this section had named confusion-matrix/precision-recall as the still-open
candidate — re-reading `curriculum.js` itself (not trusting this prose) showed BOTH were
already shipped as 13.2/13.3, before 13.8 even. Every sub-topic named in Phase 13's own
ROADMAP title (accuracy, confusion matrix, precision/recall, overfitting vs underfitting,
data size/quality, regularization) is now covered across 13.1-13.9. Next session should
re-survey against that ROADMAP title directly (not this file's prose, which drifts) whether
Phase 13 is functionally complete at 9/~10 and ready to close, or Phase 14 (capstone) should
begin its own scoping/title-breakdown session. Continuing one lesson/session at a time per
Mike's phase-by-phase pacing.

## Pending — next session(s)

- **Phases 1-12 are all SHIPPED (151/151 lessons); Phase 13 has begun (13.1-13.9/~10
  shipped 2026-08-29, see sections above).** Next session: re-survey Phase 13 against its
  own ROADMAP title (accuracy, confusion matrix, precision/recall, overfitting vs
  underfitting, data size/quality, regularization) — every named sub-topic is now covered
  (13.1-13.9), so the live question is whether Phase 13 is functionally complete at 9/~10
  and ready to close, or whether Phase 14 (the capstone — a from-scratch handwritten-digit
  classifier, properly evaluated) should begin, as its own scoping/title-breakdown session
  first (same pattern Phase 9-12 each used before writing content). **Do not trust this
  file's own "candidate topic" prose without re-reading `curriculum.js`'s actual LESSONS
  array first** — this exact prose named an already-shipped topic as still-open going into
  the 13.9 session (2026-08-29). Whichever topic
  is chosen, follow the same verification bar as every prior phase — every
  worked example/practice/quiz numeric
  claim independently Python/NumPy-verified before being written into the lesson (not mental
  math; cross-check any hand-derived gradient or slope against NumPy's finite-difference
  technique the way every Phase 11-12 lesson and now 13.4/13.5 did). **Extra caveat learned
  the hard way in 13.3, reused in 13.4/13.5:** if a session re-derives a PRIOR lesson's
  trained-network forward pass from the stated weights (rather than training fresh), a wrong
  matrix convention (e.g. `x @ W` instead of `W @ x`) runs cleanly and produces plausible
  probabilities in [0,1] WITHOUT erroring — "it ran" is not evidence it's right. The check
  that catches it: after reimplementing, diff the new run's output against the specific
  numbers the prior lesson(s) already published, to 4 decimal places, BEFORE reusing those
  numbers in the new lesson — not just "the code runs / outputs look like probabilities."
  Then continue: `bab-schema-check`, file-wide duplicate-id check, `sw.js` cache version bump,
  commit + push, `bab-ship-verify` confirming live. Per Mike: build this out phase by phase
  across future sessions, not all at once ("chained background builds through the day" per
  his 2026-08-25 ask).
- **Second caveat, learned in 13.7 (sibling to the 13.3 one above, same shape — a check
  that "ran clean" isn't proof of the strongest claim):** if a session reuses a PRIOR
  lesson's own checkpoint-sampled numbers (e.g. 13.4 sampled test MSE at 10 hand-picked
  epochs and reported the lowest of those 10 as "the floor"), don't assert that sampled
  value is the TRUE extremum over the whole trajectory — it's only the extremum among the
  points actually checked. 13.7 recomputed 13.4's identical run at every epoch (not just
  its 10 checkpoints) and found the real minimum was lower and earlier (epoch 151, not
  200) than 13.4 reported — 13.4 wasn't wrong, its grid was just coarse. Same fix pattern
  as the matrix-convention caveat: when a lesson depends on "where is the min/max," either
  check every step or explicitly caveat the claim as "lowest among the N points sampled."
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
- **Post-ship checklist has 3 doc touches, not 2 — don't stop after
  dashboard+STATUS.md.** The Phase 9 ship and the Phase 10 group-1 ship
  BOTH updated `~/dashboard.md`'s Build a Brain row and this STATUS.md, but
  silently skipped the linked detail file
  `~/archive/dashboard-done-log/build-a-brain-row-2026-08-27.md` (rotated
  out of `dashboard.md` for length, with a "Full row →" pointer left behind)
  — it sat frozen at its Phase-8 snapshot for two full ships before the
  Phase 10 group-2 session caught and back-filled it (commit `513644b9` in
  the home repo). Any session that ships a new phase should grep
  `dashboard.md` for the "Full row →" pointer and update that linked file
  too, same session, not just the dashboard row + STATUS.md.
- Not done, optional backlog: multi-learner profiles (kana-cards has this
  pattern if wanted later), a lightweight math-notation renderer (KaTeX-style)
  if plain-text exponents/fractions ever feel cramped, print/export view.
