/* Build a Brain — curriculum data.
 * ROADMAP: all 14 phases (title only for phases 2-14 — content not written yet).
 * LESSONS: full lesson content for Phase 1 (20 lessons). Phases 2-14 will each get
 * their own LESSONS entries in a future session — see README.md "Adding a new phase".
 *
 * Loaded as a plain <script> (like kana.js in the kana-cards template) so app.js can
 * use ROADMAP / LESSONS as globals with no fetch/CORS dependency — works from a
 * file:// open and is trivially cached by the service worker.
 */
const ROADMAP = [
  { number: 1,  title: "Math Foundations I — arithmetic, intro algebra" },
  { number: 2,  title: "Programming Foundations I — Python: variables, loops, if/else, functions" },
  { number: 3,  title: "How Brains Work — neurons, signals, synapses as connection strength" },
  { number: 4,  title: "Logic & Computing Basics — binary, logic gates, threshold decisions" },
  { number: 5,  title: "Statistics & Data — mean/median/variance/std dev, probability, expected value, what a dataset is, train/test split intuition" },
  { number: 6,  title: "Math Foundations II — functions & graphing, vectors and matrices, matrix multiplication, weighted sums" },
  { number: 7,  title: "Programming Foundations II — arrays, multi-input functions, vectorized thinking (NumPy)" },
  { number: 8,  title: "The Perceptron — inputs × weights + threshold = decision, built by hand and in code" },
  { number: 9,  title: "Calculus for Learning — derivatives/slopes, chain rule, “finding the downhill direction”" },
  { number: 10, title: "Networks of Neurons — stacking into layers, forward pass, why nonlinearity (sigmoid/ReLU) is what makes depth actually add power" },
  { number: 11, title: "Learning: Loss & Gradient Descent — loss functions, learning rate" },
  { number: 12, title: "Backpropagation — chain rule applied layer by layer, error flowing backward through the network" },
  { number: 13, title: "Evaluation & Overfitting — accuracy, confusion matrix, precision/recall, overfitting vs underfitting, why data size/quality and regularization matter" },
  { number: 14, title: "Capstone — code a tiny neural net from scratch, no frameworks, that recognizes handwritten digits, then properly evaluate it" }
];

/* LESSONS: full content for Phase 1 (20 lessons, ids "1.1" .. "1.20"). */
const LESSONS = [
  {
    "id": "1.1",
    "number": 1,
    "title": "Number sense refresher — place value, rounding, estimating",
    "objectives": [
      "Identify the value of a digit based on its place in a number",
      "Round numbers to a given place value",
      "Estimate the result of a calculation by rounding first",
      "Explain why estimating before computing is a useful habit"
    ],
    "explanation": [
      "Every number you've ever seen is really a team of digits, and each digit's job depends entirely on where it's standing. Take the number 5,382. The 5 isn't just \"five\" — it's sitting in the thousands spot, so it's worth 5,000. The 3 is in the hundreds spot, worth 300. Slide that same digit 5 one spot to the right and it's suddenly worth only 500. Nothing about the digit changed — only its position did. This is called place value, and it's the reason a bank statement showing $50,000 looks so different from one showing $5,000, even though both use the exact same digits.",
      "Once you're comfortable reading place value, rounding becomes a tool for simplifying numbers without losing the big picture. Rounding means replacing a number with a nearby \"friendlier\" one — usually because you don't need perfect precision, just a good sense of size. Think about a video game showing you have 48,732 gems. You don't need to know it's exactly that number to know you have \"about 49,000\" gems. The rule for rounding is simple: find the place you're rounding to, then look at the digit immediately to its right. If that digit is 5 or more, round up. If it's less than 5, round down (leave it as is) and everything after becomes zero.",
      "Estimating takes rounding one step further — you round the numbers in a problem first, then do the easier math, to get a quick, reasonable answer before (or instead of) grinding through the exact calculation. Imagine you're at a store with $40 and want to buy items priced $12.85, $9.40, and $18.20. Instead of adding those exactly in your head, you could round to $13, $9, and $18, which add to $40. That tells you instantly you're cutting it close, without needing a calculator. Estimating is also your best defense against silly mistakes: if you calculate something exactly and get an answer wildly different from your estimate, that's a signal to check your work.",
      "The habit of rounding and estimating shows up constantly once you notice it — in sports commentary (\"about 30,000 fans\"), in cooking (\"roughly a cup\"), and later in this course, in checking whether a computed answer is even in the right ballpark. Getting comfortable with place value now is also the foundation for everything else in this unit: decimals, percents, and even negative numbers all build directly on the idea that where a digit sits changes what it means."
    ],
    "example": {
      "problem": "A YouTuber's video has 48,732 views. Round this number to the nearest thousand. Then estimate 48,732 + 21,406 by rounding each number to the nearest thousand first.",
      "steps": [
        "To round 48,732 to the nearest thousand, look at the thousands digit (8) and the digit right after it, the hundreds digit (7).",
        "Since 7 is 5 or more, round the thousands digit up: 48,732 rounds to 49,000.",
        "Now round 21,406 to the nearest thousand: the thousands digit is 1, and the digit right after it, the hundreds digit, is 4.",
        "Since 4 is less than 5, round down (keep the thousands digit the same): 21,406 rounds to 21,000.",
        "Add the rounded numbers: 49,000 + 21,000 = 70,000."
      ],
      "answer": "48,732 rounds to 49,000, and the estimated sum of 48,732 + 21,406 is about 70,000."
    },
    "practice": [
      {
        "problem": "What is the value of the digit 6 in 3,682?",
        "solution": "In 3,682, the digits from left to right are thousands (3), hundreds (6), tens (8), ones (2). The digit 6 is in the hundreds place, so its value is 6 × 100 = 600."
      },
      {
        "problem": "Round 3,451 to the nearest hundred.",
        "solution": "The hundreds digit is 4. The digit right after it (the tens digit) is 5. Since 5 rounds up, the hundreds digit becomes 5 and everything after becomes 0. 3,451 rounds to 3,500."
      },
      {
        "problem": "Round 67,289 to the nearest thousand.",
        "solution": "The thousands digit is 7. The digit right after it (the hundreds digit) is 2. Since 2 is less than 5, round down — keep the thousands digit as is and zero out the rest. 67,289 rounds to 67,000."
      },
      {
        "problem": "Estimate 293 × 41 by rounding each number to a friendly value first.",
        "solution": "Round 293 to the nearest hundred: 300. Round 41 to the nearest ten: 40. Multiply the rounded numbers: 300 × 40 = 12,000. (The exact answer is 12,013, so the estimate is very close.)"
      },
      {
        "problem": "A concert had 52,384 attendees. Round this to the nearest ten-thousand, then estimate the total attendance over 3 identical concerts.",
        "solution": "The ten-thousands digit is 5. The digit right after it (the thousands digit) is 2, which is less than 5, so round down: 52,384 rounds to 50,000. For 3 concerts, estimate 50,000 × 3 = 150,000 total attendees."
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "question": "What is the value of the digit 4 in 24,916?",
        "choices": [
          "4",
          "40",
          "400",
          "4,000"
        ],
        "answerIndex": 3,
        "explanation": "The 4 sits in the thousands place in 24,916, so its value is 4 × 1,000 = 4,000."
      },
      {
        "type": "mc",
        "question": "Round 8,749 to the nearest hundred.",
        "choices": [
          "8,700",
          "8,750",
          "8,800",
          "8,900"
        ],
        "answerIndex": 0,
        "explanation": "The hundreds digit is 7, and the digit right after it (tens digit) is 4, which is less than 5, so you round down and keep the hundreds digit the same: 8,700."
      },
      {
        "type": "short",
        "question": "Round 391 to the nearest ten.",
        "answer": "390",
        "acceptable": [
          "390"
        ],
        "explanation": "The tens digit is 9, and the digit after it (ones digit) is 1, which is less than 5, so you round down to 390."
      },
      {
        "type": "mc",
        "question": "Why is it useful to estimate before finding an exact answer?",
        "choices": [
          "It gives you a quick way to check if your exact answer is reasonable",
          "It avoids having to do any math at all",
          "Exact answers are always wrong",
          "It makes numbers bigger than they really are"
        ],
        "answerIndex": 0,
        "explanation": "Estimating gives you a ballpark figure, so if your exact calculation comes out very different from the estimate, you know to double-check your work."
      },
      {
        "type": "short",
        "question": "Estimate 4,215 + 3,890 by rounding each number to the nearest thousand first.",
        "answer": "8000",
        "acceptable": [
          "8000",
          "8,000"
        ],
        "explanation": "4,215 rounds to 4,000 and 3,890 rounds to 4,000 (since its hundreds digit, 8, rounds up). 4,000 + 4,000 = 8,000."
      }
    ]
  },
  {
    "id": "1.2",
    "number": 2,
    "title": "Order of operations (PEMDAS) — what it is and why it matters",
    "objectives": [
      "State the order of operations (PEMDAS)",
      "Evaluate multi-step numeric expressions in the correct order",
      "Explain why a shared order of operations is necessary",
      "Spot and avoid common order-of-operations mistakes"
    ],
    "explanation": [
      "Imagine two people are given the exact same math problem, 3 + 4 × 2, and told to solve it. One person adds first: 3 + 4 = 7, then multiplies by 2, getting 14. The other multiplies first: 4 × 2 = 8, then adds 3, getting 11. Both followed the instructions exactly as written, yet they got two different answers to the same problem. That's a real problem for math — if the same expression can mean two different things depending on who's reading it, then numbers can't be trusted to communicate anything reliably. Order of operations exists to make sure everyone in the world, doing the same problem, lands on the exact same answer.",
      "The order everyone agreed to follow is often remembered with the letters PEMDAS: Parentheses first, then Exponents, then Multiplication and Division (done left to right, together, as a pair — whichever comes first in the expression goes first), and finally Addition and Subtraction (also left to right, together). It helps to think of PEMDAS less like a strict list of six separate steps and more like four tiers: grouping symbols, then powers, then the two \"stronger\" operations, then the two \"weaker\" ones.",
      "A good way to picture why this order makes sense is to think of multiplication as repeated addition and exponents as repeated multiplication — they're more powerful operations that deserve to happen before the simpler ones \"zoom out.\" In 3 + 4 × 2, the 4 × 2 represents a single group — four groups of two, or 8 — before it gets added to the 3 that's sitting separately. Parentheses jump the line entirely because they're a direct instruction from whoever wrote the problem: \"handle what's inside me first, no matter what it is.\" That's why (3 + 4) × 2 gives a totally different answer (14) than 3 + 4 × 2 (11) — the parentheses forced the addition to happen first.",
      "A common trap is treating multiplication as always going before division, or addition as always going before subtraction, just because of the order of the letters in PEMDAS. That's not actually the rule — multiplication and division are equal-priority partners, and you do whichever one appears first as you read left to right; the same goes for addition and subtraction. For example, in 20 ÷ 4 × 5, you divide first only because it comes first, getting 5 × 5 = 25 — not because division outranks multiplication. Getting this order locked in now matters more than it might seem: every formula you'll ever use, including the ones inside a neural network later in this course, depends on operations happening in a precise, predictable order."
    ],
    "example": {
      "problem": "Evaluate 3 + 4 × (6 − 2)^2 ÷ 8",
      "steps": [
        "Parentheses first: (6 − 2) = 4.",
        "The expression is now 3 + 4 × 4^2 ÷ 8.",
        "Exponents next: 4^2 = 16.",
        "The expression is now 3 + 4 × 16 ÷ 8.",
        "Multiplication and division, left to right: 4 × 16 = 64, then 64 ÷ 8 = 8.",
        "The expression is now 3 + 8.",
        "Addition last: 3 + 8 = 11."
      ],
      "answer": "11"
    },
    "practice": [
      {
        "problem": "Evaluate 5 + 3 × 2.",
        "solution": "Multiplication before addition: 3 × 2 = 6. Then 5 + 6 = 11."
      },
      {
        "problem": "Evaluate (5 + 3) × 2.",
        "solution": "Parentheses first: 5 + 3 = 8. Then 8 × 2 = 16."
      },
      {
        "problem": "Evaluate 2^3 + 4 × (7 − 5).",
        "solution": "Parentheses first: 7 − 5 = 2. Exponent next: 2^3 = 8. Multiplication next: 4 × 2 = 8. Finally add: 8 + 8 = 16."
      },
      {
        "problem": "Evaluate 18 ÷ 3 × 2 − 4.",
        "solution": "Multiplication and division, left to right: 18 ÷ 3 = 6, then 6 × 2 = 12. Then subtract: 12 − 4 = 8."
      },
      {
        "problem": "Evaluate 6 + 2 × (3 + 5)^2 ÷ 4 − 1.",
        "solution": "Parentheses first: 3 + 5 = 8. Exponent next: 8^2 = 64. Multiplication and division, left to right: 2 × 64 = 128, then 128 ÷ 4 = 32. Now the expression is 6 + 32 − 1. Addition and subtraction, left to right: 6 + 32 = 38, then 38 − 1 = 37."
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "question": "Evaluate 10 − 2 × 3.",
        "choices": [
          "4",
          "24",
          "8",
          "1"
        ],
        "answerIndex": 0,
        "explanation": "Multiplication happens before subtraction: 2 × 3 = 6, then 10 − 6 = 4."
      },
      {
        "type": "mc",
        "question": "What is 4 × (2 + 3)?",
        "choices": [
          "20",
          "24",
          "9",
          "11"
        ],
        "answerIndex": 0,
        "explanation": "Parentheses are evaluated first: 2 + 3 = 5, then 4 × 5 = 20."
      },
      {
        "type": "short",
        "question": "Evaluate 2 + 3 × 4^2.",
        "answer": "50",
        "acceptable": [
          "50"
        ],
        "explanation": "Exponent first: 4^2 = 16. Then multiplication: 3 × 16 = 48. Finally addition: 2 + 48 = 50."
      },
      {
        "type": "mc",
        "question": "Why does order of operations exist?",
        "choices": [
          "So everyone gets the same answer for the same expression",
          "To make math harder on purpose",
          "Because calculators require it",
          "It's just a suggestion, not a real rule"
        ],
        "answerIndex": 0,
        "explanation": "Without an agreed-upon order, the same expression could be read in different ways and give different answers — order of operations guarantees one correct answer."
      },
      {
        "type": "short",
        "question": "Evaluate (8 − 3) × 2^2 ÷ 5.",
        "answer": "4",
        "acceptable": [
          "4"
        ],
        "explanation": "Parentheses first: 8 − 3 = 5. Exponent next: 2^2 = 4. Then left to right: 5 × 4 = 20, and 20 ÷ 5 = 4."
      }
    ]
  },
  {
    "id": "1.3",
    "number": 3,
    "title": "Fractions — add/subtract, like and unlike denominators",
    "objectives": [
      "Add and subtract fractions that already share a denominator",
      "Find a common denominator for fractions with different denominators",
      "Add and subtract fractions with unlike denominators",
      "Simplify a fraction answer to its lowest terms"
    ],
    "explanation": [
      "A fraction describes equal-sized pieces of something whole, like a pizza. The bottom number, the denominator, tells you how many equal pieces the whole thing got cut into. The top number, the numerator, tells you how many of those pieces you actually have. So 3/4 means the pizza was cut into 4 equal slices, and you have 3 of them. The denominator sets the size of the pieces — cutting a pizza into 8 slices makes each slice smaller than cutting it into 4, even though both are still \"one whole pizza.\"",
      "When two fractions already share the same denominator, adding or subtracting them is easy: the pieces are already the same size, so you just add or subtract how many pieces you have and keep the denominator the same. 2/7 + 3/7 = 5/7, because you're combining 2 sevenths and 3 sevenths into 5 sevenths — the size of each piece never changed, only the count did.",
      "The trouble starts when the denominators are different, because then the pieces are different sizes and you can't just add the piece-counts together — it would be like saying \"2 apples plus 3 oranges equals 5 apple-oranges,\" which doesn't mean anything. To fix this, you rewrite both fractions using a common denominator: a shared piece size both fractions can be expressed in, usually the least common multiple (LCM) of the two denominators. For 1/2 and 1/3, the smallest number both 2 and 3 divide into evenly is 6, so you rewrite 1/2 as 3/6 (multiply top and bottom by 3) and 1/3 as 2/6 (multiply top and bottom by 2). Now both fractions are talking about sixths, so you can add them directly: 3/6 + 2/6 = 5/6.",
      "The key rule when converting to a common denominator is that you must multiply the top and bottom of a fraction by the same number — this keeps the fraction's actual value unchanged, because you're really just multiplying by a clever form of 1 (like 3/3 or 2/2). Once you've added or subtracted, always check whether your answer can be simplified — that is, whether the numerator and denominator share a common factor you can divide out. 2/4, for instance, simplifies to 1/2 because both 2 and 4 can be divided by 2. Simplifying doesn't change the value of the fraction; it just expresses it using the smallest possible piece size, which is the standard, cleanest way to report a fraction answer."
    ],
    "example": {
      "problem": "Evaluate 2/3 + 1/4",
      "steps": [
        "The denominators (3 and 4) are different, so find a common denominator: the least common multiple of 3 and 4 is 12.",
        "Rewrite 2/3 as twelfths: multiply top and bottom by 4, giving 8/12.",
        "Rewrite 1/4 as twelfths: multiply top and bottom by 3, giving 3/12.",
        "Add the numerators, keeping the denominator: 8/12 + 3/12 = 11/12.",
        "Check for simplifying: 11 and 12 share no common factor besides 1, so 11/12 is already in simplest form."
      ],
      "answer": "11/12"
    },
    "practice": [
      {
        "problem": "Evaluate 1/5 + 2/5.",
        "solution": "Same denominator, so add numerators directly: 1 + 2 = 3. Result: 3/5. This is already in simplest form."
      },
      {
        "problem": "Evaluate 3/4 − 1/4.",
        "solution": "Same denominator, so subtract numerators: 3 − 1 = 2. Result: 2/4, which simplifies (divide top and bottom by 2) to 1/2."
      },
      {
        "problem": "Evaluate 1/2 + 1/3.",
        "solution": "Common denominator of 2 and 3 is 6. 1/2 = 3/6 and 1/3 = 2/6. Add: 3/6 + 2/6 = 5/6, already in simplest form."
      },
      {
        "problem": "Evaluate 5/6 − 1/4.",
        "solution": "Common denominator of 6 and 4 is 12. 5/6 = 10/12 and 1/4 = 3/12. Subtract: 10/12 − 3/12 = 7/12, already in simplest form."
      },
      {
        "problem": "Evaluate 2/3 + 3/5 − 1/6.",
        "solution": "Common denominator of 3, 5, and 6 is 30. 2/3 = 20/30, 3/5 = 18/30, 1/6 = 5/30. Combine: 20/30 + 18/30 − 5/30 = 33/30. Simplify by dividing top and bottom by 3: 11/10, which as a mixed number is 1 and 1/10."
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "question": "1/6 + 2/6 = ?",
        "choices": [
          "1/2",
          "1/3",
          "3/12",
          "1/8"
        ],
        "answerIndex": 0,
        "explanation": "Same denominator, so add numerators: 1 + 2 = 3, giving 3/6, which simplifies to 1/2."
      },
      {
        "type": "mc",
        "question": "What must you do before adding fractions that have different denominators?",
        "choices": [
          "Rewrite them using a common denominator",
          "Add the numerators and denominators straight across",
          "Multiply the two fractions together",
          "Cross out any matching digits"
        ],
        "answerIndex": 0,
        "explanation": "Fractions with different denominators represent different-sized pieces, so you must convert them to a shared denominator before combining the numerators."
      },
      {
        "type": "short",
        "question": "3/8 + 1/8 = ?",
        "answer": "1/2",
        "acceptable": [
          "1/2",
          "4/8",
          "0.5"
        ],
        "explanation": "Same denominator, so add numerators: 3 + 1 = 4, giving 4/8, which simplifies to 1/2."
      },
      {
        "type": "short",
        "question": "2/5 − 1/10 = ?",
        "answer": "3/10",
        "acceptable": [
          "3/10"
        ],
        "explanation": "Common denominator of 5 and 10 is 10. 2/5 = 4/10, so 4/10 − 1/10 = 3/10."
      },
      {
        "type": "mc",
        "question": "Simplify 6/8 to lowest terms.",
        "choices": [
          "3/4",
          "2/4",
          "4/3",
          "6/4"
        ],
        "answerIndex": 0,
        "explanation": "Both 6 and 8 can be divided by 2, giving 3/4, which has no more common factors."
      }
    ]
  },
  {
    "id": "1.4",
    "number": 4,
    "title": "Fractions — multiply and divide",
    "objectives": [
      "Multiply fractions by multiplying numerators and denominators straight across",
      "Simplify fractions using cross-cancellation before or after multiplying",
      "Divide fractions by multiplying by the reciprocal",
      "Solve real-world problems involving multiplying or dividing fractions"
    ],
    "explanation": [
      "Multiplying fractions is actually more straightforward than adding them, because you don't need a common denominator at all — you just multiply straight across. Multiply the two numerators together to get the new numerator, and multiply the two denominators together to get the new denominator. So 1/2 × 1/3 = (1×1)/(2×3) = 1/6. It helps to read the word \"times\" as \"of\" when fractions are involved: 1/2 × 1/3 means \"one half of one third,\" and if you split a third of a pizza in half, you'd end up with a piece that's one sixth of the whole pizza — which matches the math exactly.",
      "Before multiplying, it often pays to simplify first using a trick called cross-cancellation: if a numerator in one fraction shares a common factor with a denominator in the other fraction, you can divide both by that factor before multiplying, which keeps the numbers smaller and easier to work with. For 4/9 × 3/8, notice that 4 (a numerator) and 8 (the other denominator) share a factor of 4, shrinking them to 1 and 2. Also, 3 (the other numerator) and 9 (a denominator) share a factor of 3, shrinking them to 1 and 3. That leaves 1/3 × 1/2 = 1/6 — the same answer you'd get multiplying straight across and then simplifying, just with smaller numbers along the way.",
      "Dividing fractions uses a rule that looks strange at first: \"keep, change, flip.\" Keep the first fraction as it is, change the division sign to multiplication, and flip (find the reciprocal of) the second fraction — swap its numerator and denominator. So 3/4 ÷ 1/2 becomes 3/4 × 2/1, which equals 6/4, or 1 and 1/2. It's worth understanding why this works rather than just memorizing it: dividing by a number asks \"how many of that fits into this?\" If you have 2 cups of flour and a recipe calls for 1/4 cup per batch, 2 ÷ 1/4 asks how many quarter-cups fit into 2 cups — and the answer is 8, because there are 4 quarter-cups in every whole cup, and 4 × 2 = 8. That's exactly what \"multiply by the reciprocal\" computes: 2 ÷ 1/4 = 2 × 4/1 = 8.",
      "This also explains a pattern that surprises a lot of people: dividing by a fraction smaller than 1 makes the answer bigger, not smaller, because smaller pieces mean more of them fit into the same amount. Keep an eye on that pattern — it will make the sign rules and reasoning in later lessons about negative numbers feel far more natural, since both rely on tracking what an operation actually does rather than just applying a memorized step."
    ],
    "example": {
      "problem": "Evaluate 4/9 × 3/8",
      "steps": [
        "Look for cross-cancellation opportunities: 4 (a numerator) and 8 (the other fraction's denominator) share a factor of 4 — divide both by 4, turning them into 1 and 2.",
        "Also, 3 (the other numerator) and 9 (a denominator) share a factor of 3 — divide both by 3, turning them into 1 and 3.",
        "The problem is now 1/3 × 1/2.",
        "Multiply straight across: numerators 1 × 1 = 1, denominators 3 × 2 = 6."
      ],
      "answer": "1/6"
    },
    "practice": [
      {
        "problem": "Evaluate 1/2 × 1/3.",
        "solution": "Multiply straight across: numerators 1 × 1 = 1, denominators 2 × 3 = 6. Result: 1/6."
      },
      {
        "problem": "Evaluate 2/5 × 5/6.",
        "solution": "Cross-cancel the 5s (a numerator and a denominator): they become 1 and 1. The problem becomes 2/1 × 1/6 = 2/6, which simplifies to 1/3."
      },
      {
        "problem": "Evaluate 3/4 ÷ 1/2.",
        "solution": "Keep, change, flip: 3/4 × 2/1 = 6/4, which simplifies to 3/2, or 1 and 1/2."
      },
      {
        "problem": "Evaluate 5/8 ÷ 5/6.",
        "solution": "Keep, change, flip: 5/8 × 6/5. Cross-cancel the 5s to get 1/8 × 6/1 = 6/8, which simplifies to 3/4."
      },
      {
        "problem": "A recipe needs 2/3 cup of sugar for a full batch. How much sugar is needed for 3/4 of a batch?",
        "solution": "Multiply the amount per full batch by the fraction of a batch: 2/3 × 3/4. Cross-cancel the 3s to get 2/1 × 1/4 = 2/4, which simplifies to 1/2. So 1/2 cup of sugar is needed."
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "question": "2/3 × 3/5 = ?",
        "choices": [
          "2/5",
          "5/8",
          "6/8",
          "3/5"
        ],
        "answerIndex": 0,
        "explanation": "Cross-cancel the 3s to get 2/1 × 1/5 = 2/5."
      },
      {
        "type": "mc",
        "question": "To divide by a fraction, you multiply by its ___.",
        "choices": [
          "reciprocal",
          "square",
          "opposite sign",
          "denominator alone"
        ],
        "answerIndex": 0,
        "explanation": "Dividing by a fraction is the same as multiplying by that fraction flipped upside down — its reciprocal."
      },
      {
        "type": "short",
        "question": "1/4 ÷ 1/2 = ?",
        "answer": "1/2",
        "acceptable": [
          "1/2",
          "2/4",
          "0.5"
        ],
        "explanation": "Keep, change, flip: 1/4 × 2/1 = 2/4, which simplifies to 1/2."
      },
      {
        "type": "short",
        "question": "3/5 × 5/9 = ?",
        "answer": "1/3",
        "acceptable": [
          "1/3"
        ],
        "explanation": "Cross-cancel the 5s to get 3/1 × 1/9 = 3/9, which simplifies to 1/3."
      },
      {
        "type": "mc",
        "question": "Why does dividing 2 by 1/2 give an answer bigger than 2?",
        "choices": [
          "Dividing by a fraction less than 1 asks how many smaller pieces fit, and more small pieces fit than whole ones",
          "Division always makes numbers bigger no matter what",
          "It's a special exception with no real reason",
          "Because 1/2 is treated as a negative number"
        ],
        "answerIndex": 0,
        "explanation": "Dividing by 1/2 counts how many halves fit into 2 wholes — since halves are smaller than wholes, more of them fit, giving a bigger count (4)."
      }
    ]
  },
  {
    "id": "1.5",
    "number": 5,
    "title": "Decimals — add/subtract/multiply/divide",
    "objectives": [
      "Add and subtract decimals by lining up place value",
      "Multiply decimals and correctly place the decimal point in the answer",
      "Divide decimals, including dividing by a decimal",
      "Use estimation to check whether a decimal answer is reasonable"
    ],
    "explanation": [
      "Decimals are just place value continuing past the ones place, into pieces smaller than a whole. The first spot after the decimal point is tenths, the next is hundredths, and so on — each spot is worth ten times less than the one before it, the same pattern as whole numbers but running in the other direction. Money is the easiest way to feel this: $12.50 means 1 ten, 2 ones, 5 tenths (dimes), and 0 hundredths (pennies). That's why decimals and money go together so naturally — cents are literally hundredths of a dollar.",
      "Adding and subtracting decimals works exactly like adding and subtracting whole numbers, as long as you line up the decimal points so that each place value matches its partner — tenths under tenths, hundredths under hundredths. This is the single most common source of decimal mistakes: lining digits up by the right edge of the number instead of by the decimal point. To add 4.56 and 2.3, it helps to think of 2.3 as 2.30 so both numbers show two decimal places, then add column by column just like whole numbers: 4.56 + 2.30 = 6.86.",
      "Multiplying decimals looks trickier but has a clean shortcut: ignore the decimal points at first and multiply the numbers as if they were whole numbers, then count up the total number of digits after the decimal point in both original numbers, and place the decimal point that many spots from the right in your answer. For 12.5 × 0.3, first multiply 125 × 3 = 375. Then count decimal places: 12.5 has 1, and 0.3 has 1, for a total of 2. Counting 2 places from the right in 375 gives 3.75. This works because multiplying by 10 or 100 just shifts the decimal point, and un-shifting it at the end undoes that.",
      "Dividing decimals gets easiest when you turn the divisor (the number you're dividing by) into a whole number first. Do this by multiplying both the divisor and the dividend by the same power of 10 — moving the decimal point in both numbers the same number of spots — since multiplying both parts of a division problem by the same amount doesn't change the answer. For 3.24 ÷ 1.2, multiply both by 10 to clear the decimal from the divisor: 32.4 ÷ 12, which divides evenly to 2.7. Whatever method you use, always sanity-check a decimal answer with a quick estimate — rounding 3.24 to 3 and 1.2 to 1 suggests an answer near 3, and 2.7 is indeed close, confirming the decimal point landed in the right place."
    ],
    "example": {
      "problem": "Evaluate 12.5 × 0.3",
      "steps": [
        "Ignore the decimal points and multiply as whole numbers: 125 × 3 = 375.",
        "Count the total decimal places in the original numbers: 12.5 has 1 decimal place, and 0.3 has 1 decimal place, for a total of 2.",
        "Place the decimal point 2 digits from the right in 375, giving 3.75.",
        "Check with an estimate: 12.5 is close to 12 and 0.3 is close to a third, and about a third of 12 is roughly 4 — close to 3.75, so the answer is reasonable."
      ],
      "answer": "3.75"
    },
    "practice": [
      {
        "problem": "Evaluate 4.56 + 2.3.",
        "solution": "Line up decimal points, treating 2.3 as 2.30: 4.56 + 2.30 = 6.86."
      },
      {
        "problem": "Evaluate 9.2 − 3.75.",
        "solution": "Line up decimal points, treating 9.2 as 9.20: 9.20 − 3.75 = 5.45."
      },
      {
        "problem": "Evaluate 0.6 × 0.4.",
        "solution": "Multiply as whole numbers: 6 × 4 = 24. Total decimal places: 1 + 1 = 2. Place the decimal 2 digits from the right: 0.24."
      },
      {
        "problem": "Evaluate 7.5 ÷ 0.5.",
        "solution": "Multiply both numbers by 10 to clear the decimal in the divisor: 75 ÷ 5 = 15."
      },
      {
        "problem": "Evaluate 3.24 ÷ 1.2.",
        "solution": "Multiply both numbers by 10 to clear the decimal in the divisor: 32.4 ÷ 12 = 2.7."
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "question": "5.6 + 2.45 = ?",
        "choices": [
          "8.05",
          "8.1",
          "7.05",
          "8.15"
        ],
        "answerIndex": 0,
        "explanation": "Lining up decimal points: 5.60 + 2.45 = 8.05."
      },
      {
        "type": "mc",
        "question": "When multiplying 2.3 × 0.4, how many decimal places should the answer have before simplifying?",
        "choices": [
          "1",
          "2",
          "3",
          "4"
        ],
        "answerIndex": 1,
        "explanation": "2.3 has 1 decimal place and 0.4 has 1 decimal place, for a total of 1 + 1 = 2 decimal places in the answer (0.92)."
      },
      {
        "type": "short",
        "question": "6.75 − 4.2 = ?",
        "answer": "2.55",
        "acceptable": [
          "2.55"
        ],
        "explanation": "Lining up decimal points, 4.2 becomes 4.20: 6.75 − 4.20 = 2.55."
      },
      {
        "type": "short",
        "question": "8.4 ÷ 0.2 = ?",
        "answer": "42",
        "acceptable": [
          "42",
          "42.0"
        ],
        "explanation": "Multiply both numbers by 10 to clear the decimal: 84 ÷ 2 = 42."
      },
      {
        "type": "mc",
        "question": "Which is the correct way to divide 4.8 ÷ 0.6?",
        "choices": [
          "Multiply both numbers by 10 to get 48 ÷ 6, which equals 8",
          "Just divide 4 by 0.6 and ignore the .8",
          "Ignore the decimals entirely and divide 4 by 6",
          "Subtract the decimals first, then divide"
        ],
        "answerIndex": 0,
        "explanation": "Multiplying both the dividend and divisor by 10 clears the decimal from the divisor without changing the answer: 48 ÷ 6 = 8."
      }
    ]
  },
  {
    "id": "1.6",
    "number": 6,
    "title": "Converting between fractions, decimals, and percents",
    "objectives": [
      "Convert a fraction to a decimal by dividing the numerator by the denominator",
      "Convert between decimals and percents",
      "Convert a fraction directly to a percent",
      "Choose the most useful form (fraction, decimal, or percent) for a situation"
    ],
    "explanation": [
      "Fractions, decimals, and percents are three different costumes for the exact same idea: a part of a whole. 1/2, 0.5, and 50% are not three different numbers — they're three different ways of writing the identical amount, and you'll flip between all three constantly in real life, from sales discounts to test scores to batting averages. Knowing how to convert between them on demand is one of the most useful math skills there is.",
      "The word \"percent\" literally means \"per hundred\" — a percent is just a fraction where the denominator is fixed at 100. That makes converting a decimal to a percent almost automatic: since the hundredths place is already the second digit after the decimal point, you just move the decimal point two spots to the right and add a percent sign. 0.75 becomes 75%, and 0.06 becomes 6%. Going the other direction, from percent to decimal, you move the decimal point two spots to the left: 32% becomes 0.32.",
      "To convert a fraction to a decimal, just do what the fraction bar is telling you to do: divide the numerator by the denominator. 3/4 means \"3 divided by 4,\" which is 0.75. Long division works here even when it doesn't come out evenly — 7/8 means 7 divided by 8, which works out to 0.875. Once you have the decimal, converting to a percent is the same move as before: shift the decimal point two places right, giving 87.5%.",
      "You can also jump straight from a fraction to a percent without the decimal step, if the denominator divides evenly into 100. For 1/4, ask \"what do I multiply 4 by to get 100?\" — the answer is 25 — then multiply the numerator by that same number: 1 × 25 = 25, so 1/4 = 25/100 = 25%. Different forms are useful in different situations: fractions are great for exact, clean values (like splitting a pizza among friends), decimals are great for calculators and precise measurements, and percents are great for comparing things at a glance, like discounts, grades, or probabilities — saying \"you got 72%\" communicates a sense of performance far faster than saying \"you got 18/25.\""
    ],
    "example": {
      "problem": "Convert 3/4 to a decimal and to a percent.",
      "steps": [
        "To convert the fraction to a decimal, divide the numerator by the denominator: 3 ÷ 4 = 0.75.",
        "To convert the decimal to a percent, move the decimal point two places to the right and add a percent sign: 0.75 becomes 75%."
      ],
      "answer": "3/4 = 0.75 = 75%"
    },
    "practice": [
      {
        "problem": "Convert 1/2 to a decimal and a percent.",
        "solution": "1 ÷ 2 = 0.5. Moving the decimal point two places right: 0.5 = 50%."
      },
      {
        "problem": "Convert 0.3 to a fraction and a percent.",
        "solution": "0.3 is 3 tenths, so as a fraction it's 3/10. Moving the decimal point two places right: 0.3 = 30%."
      },
      {
        "problem": "Convert 7/8 to a decimal and a percent.",
        "solution": "7 ÷ 8 = 0.875. Moving the decimal point two places right: 0.875 = 87.5%."
      },
      {
        "problem": "Convert 45% to a fraction in simplest form and to a decimal.",
        "solution": "45% = 45/100. Both 45 and 100 divide by 5, giving 9/20. As a decimal, move the decimal point two places left: 45% = 0.45."
      },
      {
        "problem": "A student got 18 out of 25 questions right on a quiz. What percent is that?",
        "solution": "Write it as a fraction: 18/25. Divide: 18 ÷ 25 = 0.72. Moving the decimal point two places right: 0.72 = 72%."
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "question": "What does the word \"percent\" mean?",
        "choices": [
          "Per hundred",
          "Per thousand",
          "A part of ten",
          "A special type of fraction only used in stores"
        ],
        "answerIndex": 0,
        "explanation": "\"Percent\" comes from \"per centum,\" meaning \"per hundred\" — a percent is a fraction out of 100."
      },
      {
        "type": "mc",
        "question": "Convert 0.6 to a percent.",
        "choices": [
          "60%",
          "0.6%",
          "6%",
          "0.06%"
        ],
        "answerIndex": 0,
        "explanation": "Move the decimal point two places to the right: 0.6 becomes 60%."
      },
      {
        "type": "short",
        "question": "Convert 1/4 to a percent.",
        "answer": "25%",
        "acceptable": [
          "25%",
          "25 percent",
          "25"
        ],
        "explanation": "1 ÷ 4 = 0.25, and moving the decimal point two places right gives 25%."
      },
      {
        "type": "short",
        "question": "Convert 3/5 to a decimal.",
        "answer": "0.6",
        "acceptable": [
          "0.6",
          "0.60",
          ".6"
        ],
        "explanation": "3 ÷ 5 = 0.6."
      },
      {
        "type": "mc",
        "question": "Which fraction is equivalent to 40%?",
        "choices": [
          "2/5",
          "1/4",
          "3/8",
          "1/2"
        ],
        "answerIndex": 0,
        "explanation": "40% = 40/100, which simplifies (dividing top and bottom by 20) to 2/5."
      }
    ]
  },
  {
    "id": "1.7",
    "number": 7,
    "title": "Negative numbers — number line, adding/subtracting",
    "objectives": [
      "Locate negative numbers on a number line",
      "Add and subtract using number line movement or sign rules",
      "Explain what a negative number represents in real-world contexts",
      "Rewrite subtraction as adding the opposite"
    ],
    "explanation": [
      "Every number you've used so far has probably felt like it measures \"how much\" of something. Negative numbers introduce a new idea: direction, not just amount. A number line makes this visible — zero sits in the middle, positive numbers stretch out to the right, and negative numbers stretch out to the left, as a mirror image. The number -5 isn't just \"5 with a minus sign glued on\" — it's a point exactly as far from zero as 5 is, just in the opposite direction.",
      "Negative numbers show up constantly once you start looking: a temperature of -10°F means 10 degrees below zero, not just a small number. A submarine at -200 feet is 200 feet below sea level. Owing a friend $15 can be written as -$15 on a ledger, because it's the opposite of having $15. In every case, the negative sign is doing real work — it's telling you \"below,\" \"owed,\" \"in the past,\" or \"opposite direction,\" depending on the context.",
      "On the number line, addition and subtraction become movements. Adding a positive number moves you to the right; subtracting a positive number moves you to the left. Starting at -3 and adding 5 means moving 5 steps to the right from -3, landing on 2. This matches real life: if you owe $3 (you're at -3) and then earn $5, you're now $2 ahead (you're at 2) — the earning canceled the debt and left a little extra.",
      "Subtraction gets a powerful reframe once negative numbers are involved: subtracting a number is always the same as adding its opposite. So a - b is exactly the same as a + (-b). This explains why 6 - (-4) equals 10 instead of 2: subtracting -4 means adding the opposite of -4, which is positive 4, so 6 - (-4) = 6 + 4 = 10. Think of it as a double negative, the same way \"I don't dislike it\" actually means you do like it — un-doing a negative flips it back to positive. This one idea, that subtracting a negative is the same as adding a positive, is one of the most important rules in this entire course, because it's the seed of the sign rules you'll formalize in the next lesson."
    ],
    "example": {
      "problem": "Compute -3 + 5",
      "steps": [
        "Picture a number line with -3 marked on it.",
        "Adding a positive number means moving to the right, so move 5 steps to the right from -3.",
        "Counting right: -3, -2, -1, 0, 1, 2 — that's 5 steps, landing on 2.",
        "Real-world check: if you owe $3 (starting at -3) and earn $5, you now have $2 left over after paying off the debt."
      ],
      "answer": "2"
    },
    "practice": [
      {
        "problem": "Evaluate -4 + 6.",
        "solution": "Start at -4 on the number line and move 6 steps right: -4, -3, -2, -1, 0, 1, 2. Result: 2."
      },
      {
        "problem": "Evaluate 7 + (-9).",
        "solution": "Adding a negative number is the same as subtracting: 7 + (-9) = 7 − 9 = -2."
      },
      {
        "problem": "Evaluate -5 − 3.",
        "solution": "Starting at -5 and subtracting moves further left (more negative): -5 − 3 = -8."
      },
      {
        "problem": "Evaluate 6 − (-4).",
        "solution": "Subtracting a negative is the same as adding its opposite: 6 − (-4) = 6 + 4 = 10."
      },
      {
        "problem": "Evaluate -8 + (-2) − (-5).",
        "solution": "Rewrite each step as addition of the opposite: -8 + (-2) − (-5) = -8 − 2 + 5. Combine left to right: -8 − 2 = -10, then -10 + 5 = -5."
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "question": "On a number line, which direction do you move to add a positive number?",
        "choices": [
          "Right",
          "Left",
          "Up",
          "Down"
        ],
        "answerIndex": 0,
        "explanation": "Positive numbers increase in value moving to the right on a standard number line, so adding a positive number moves you to the right."
      },
      {
        "type": "mc",
        "question": "What is -6 + 2?",
        "choices": [
          "-4",
          "4",
          "-8",
          "8"
        ],
        "answerIndex": 0,
        "explanation": "Starting at -6 and moving 2 steps to the right lands on -4."
      },
      {
        "type": "short",
        "question": "What is 5 − 9?",
        "answer": "-4",
        "acceptable": [
          "-4"
        ],
        "explanation": "Starting at 5 and moving 9 steps left lands on -4."
      },
      {
        "type": "short",
        "question": "What is -3 − (-7)?",
        "answer": "4",
        "acceptable": [
          "4"
        ],
        "explanation": "Subtracting a negative is the same as adding its opposite: -3 − (-7) = -3 + 7 = 4."
      },
      {
        "type": "mc",
        "question": "A submarine is at -120 feet (120 feet below sea level) and rises 45 feet. What is its new position?",
        "choices": [
          "-75 feet",
          "-165 feet",
          "75 feet",
          "165 feet"
        ],
        "answerIndex": 0,
        "explanation": "Rising means adding a positive number to the depth: -120 + 45 = -75 feet."
      }
    ]
  },
  {
    "id": "1.8",
    "number": 8,
    "title": "Negative numbers — multiplying/dividing, why the sign rules work",
    "objectives": [
      "Apply sign rules to multiply and divide positive and negative numbers",
      "Explain why a negative times a negative equals a positive",
      "Predict the sign of an answer before calculating it",
      "Apply sign rules across multi-step multiplication and division problems"
    ],
    "explanation": [
      "You've probably already been told the rules: positive times positive is positive, positive times negative is negative, and negative times negative is positive. The first two feel obvious enough, but that last one — two negatives making a positive — often gets memorized without ever being understood. It's worth actually digging into why it's true, because \"just memorize it\" is a shaky foundation for something you'll use for the rest of your math life.",
      "Start with a pattern using a fact you already trust: multiplying by 1 less each time should decrease the result by the same fixed amount every time, since that's how multiplication has always behaved. Look at 3 × 2 = 6, 3 × 1 = 3, 3 × 0 = 0. Each time the second number drops by 1, the answer drops by 3. If that pattern is going to keep being true — and it has to, for math to stay consistent — then 3 × (-1) must be 0 − 3 = -3, and 3 × (-2) must be -3 − 3 = -6. This is where \"positive times negative is negative\" comes from — not a rule someone made up, but the only way to keep the pattern from breaking.",
      "Now do the same trick starting from a negative number: -3 × 2 = -6, -3 × 1 = -3, -3 × 0 = 0. Each time the second number drops by 1, the answer increases by 3 (it moves from -6 up to -3 up to 0). For the pattern to keep working as the second number keeps dropping into negative territory, -3 × (-1) must be 0 + 3 = 3, and -3 × (-2) must be 3 + 3 = 6. There it is: negative times negative gives a positive result — not by decree, but because it's the only outcome that keeps multiplication behaving consistently no matter what numbers you plug in.",
      "A second way to feel this in your gut: think of a negative sign as an instruction to \"flip to the opposite.\" Multiplying by -1 flips a number to its opposite on the number line. Flip once, and positive becomes negative. Flip a number that's already negative, and it flips back to positive — two flips return you to where a single positive flip would have started. That's exactly what negative times negative captures: two \"opposite\" instructions cancel out. Division follows the exact same sign rules as multiplication, because division is just multiplication's reverse — dividing by a negative number undoes a negative multiplication, so the same positive/negative pattern applies: same signs give a positive answer, different signs give a negative answer."
    ],
    "example": {
      "problem": "Compute (-4) × (-5)",
      "steps": [
        "Identify the signs: both numbers are negative.",
        "Two negative numbers multiplied together give a positive result (as shown by the pattern reasoning above).",
        "Multiply the numbers as if they were both positive: 4 × 5 = 20.",
        "Apply the sign: the result is positive."
      ],
      "answer": "20"
    },
    "practice": [
      {
        "problem": "Evaluate 5 × (-3).",
        "solution": "Different signs (positive and negative) give a negative result. 5 × 3 = 15, so the answer is -15."
      },
      {
        "problem": "Evaluate -7 × (-2).",
        "solution": "Same signs (both negative) give a positive result. 7 × 2 = 14, so the answer is 14."
      },
      {
        "problem": "Evaluate -18 ÷ 3.",
        "solution": "Different signs give a negative result. 18 ÷ 3 = 6, so the answer is -6."
      },
      {
        "problem": "Evaluate -24 ÷ (-6).",
        "solution": "Same signs (both negative) give a positive result. 24 ÷ 6 = 4, so the answer is 4."
      },
      {
        "problem": "Evaluate (-3) × (-2) × (-4).",
        "solution": "Work left to right. First (-3) × (-2): same signs give positive, and 3 × 2 = 6, so this is 6. Then 6 × (-4): different signs give negative, and 6 × 4 = 24, so this is -24."
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "question": "What is the sign of the product of two negative numbers?",
        "choices": [
          "Positive",
          "Negative",
          "Zero",
          "It depends on the specific numbers"
        ],
        "answerIndex": 0,
        "explanation": "Two negative numbers always multiply to a positive result — this follows from keeping multiplication's patterns consistent, and can also be seen as two sign-flips canceling out."
      },
      {
        "type": "mc",
        "question": "-9 × 3 = ?",
        "choices": [
          "-27",
          "27",
          "-6",
          "6"
        ],
        "answerIndex": 0,
        "explanation": "Different signs give a negative result: 9 × 3 = 27, so the answer is -27."
      },
      {
        "type": "short",
        "question": "-36 ÷ (-4) = ?",
        "answer": "9",
        "acceptable": [
          "9"
        ],
        "explanation": "Same signs (both negative) give a positive result: 36 ÷ 4 = 9."
      },
      {
        "type": "short",
        "question": "Using the pattern 3 × 2 = 6, 3 × 1 = 3, 3 × 0 = 0, 3 × (-1) = ?, what comes next in the pattern?",
        "answer": "-3",
        "acceptable": [
          "-3"
        ],
        "explanation": "Each step the second factor drops by 1, the product drops by 3 (6, 3, 0, then -3), showing why a positive times a negative is negative."
      },
      {
        "type": "mc",
        "question": "(-2) × (-3) × (-1) = ?",
        "choices": [
          "-6",
          "6",
          "5",
          "-5"
        ],
        "answerIndex": 0,
        "explanation": "(-2) × (-3) = 6 (same signs, positive), then 6 × (-1) = -6 (different signs, negative)."
      }
    ]
  },
  {
    "id": "1.9",
    "number": 9,
    "title": "Exponents — what they mean, squaring/cubing",
    "objectives": [
      "Explain what an exponent represents as repeated multiplication",
      "Compute squares and cubes of numbers",
      "Evaluate exponent expressions with negative bases, including the effect of parentheses",
      "Distinguish squaring a number from simply multiplying it by 2"
    ],
    "explanation": [
      "An exponent is shorthand for multiplying a number by itself a certain number of times. In an expression like 5^3, the 5 is called the base and the 3 is called the exponent (or power). It tells you to multiply 5 by itself 3 times: 5 × 5 × 5 = 125. This is a huge convenience — imagine having to write out 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 every time instead of just writing 2^10. Exponents let you compress repeated multiplication the same way multiplication itself compresses repeated addition.",
      "The two most common exponents get their own special names. Raising a number to the power of 2 is called \"squaring\" it, and it connects directly to area: if a square has sides of length 5, its area is 5 × 5 = 5^2 = 25 square units — the exponent literally comes from a square shape. Raising a number to the power of 3 is called \"cubing\" it, and it connects to volume: a cube with sides of length 5 has a volume of 5 × 5 × 5 = 5^3 = 125 cubic units. These geometric pictures are worth keeping in your head, because they make squaring and cubing feel like real physical quantities instead of abstract rules.",
      "A very common mix-up is confusing \"squaring\" with \"doubling.\" Doubling a number means multiplying it by 2 (5 doubled is 10), while squaring a number means multiplying it by itself (5 squared is 25). They sound similar but grow completely differently — doubling grows steadily, while squaring accelerates fast, which is part of why exponents matter so much in real applications like population growth, compound interest, and (later in this course) how a neural network combines many numbers together.",
      "Negative bases deserve extra care, because whether the negative sign is trapped inside parentheses changes the entire answer. In (-2)^4, the parentheses mean the base is -2 itself, so you multiply -2 by itself 4 times: (-2) × (-2) × (-2) × (-2). Working left to right using the sign rules from the last lesson: (-2) × (-2) = 4 (positive), then 4 × (-2) = -8 (negative), then -8 × (-2) = 16 (positive). So (-2)^4 = 16. Without the parentheses, though, the exponent applies only to the number right next to it, not to any minus sign in front. So -3^2 means \"the opposite of 3^2,\" not \"(-3) squared\": you compute 3^2 = 9 first, then apply the negative sign, giving -3^2 = -9. This distinction — whether the negative sign is part of the base or applied afterward — is one of the most important habits to build now, because it's the exact source of the trickiest mistakes in the next lesson."
    ],
    "example": {
      "problem": "Evaluate 4^3 and (-2)^4",
      "steps": [
        "For 4^3, multiply 4 by itself 3 times: 4 × 4 = 16, then 16 × 4 = 64.",
        "For (-2)^4, the parentheses mean -2 is the whole base, so multiply -2 by itself 4 times: (-2) × (-2) = 4.",
        "Continue: 4 × (-2) = -8.",
        "Continue: -8 × (-2) = 16."
      ],
      "answer": "4^3 = 64, and (-2)^4 = 16"
    },
    "practice": [
      {
        "problem": "Evaluate 6^2.",
        "solution": "6 × 6 = 36."
      },
      {
        "problem": "Evaluate 2^5.",
        "solution": "2 × 2 × 2 × 2 × 2 = 32 (multiplying step by step: 2, 4, 8, 16, 32)."
      },
      {
        "problem": "Evaluate (-3)^3.",
        "solution": "The parentheses make -3 the base: (-3) × (-3) × (-3). First, (-3) × (-3) = 9 (same signs, positive). Then 9 × (-3) = -27 (different signs, negative). Result: -27."
      },
      {
        "problem": "Evaluate -5^2.",
        "solution": "Without parentheses, the exponent applies only to the 5, not the negative sign. So compute 5^2 = 25 first, then apply the negative sign: -25."
      },
      {
        "problem": "Evaluate 10^3.",
        "solution": "10 × 10 × 10 = 1,000. (Notice this connects to place value — each extra power of 10 adds another zero.)"
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "question": "What does 3^4 mean?",
        "choices": [
          "3 × 3 × 3 × 3",
          "3 × 4",
          "4 × 4 × 4",
          "3 + 3 + 3 + 3"
        ],
        "answerIndex": 0,
        "explanation": "An exponent tells you how many times to multiply the base by itself: 3^4 means 3 multiplied by itself 4 times."
      },
      {
        "type": "mc",
        "question": "What is 7^2?",
        "choices": [
          "49",
          "14",
          "21",
          "343"
        ],
        "answerIndex": 0,
        "explanation": "7^2 means 7 × 7 = 49."
      },
      {
        "type": "short",
        "question": "What is 2^6?",
        "answer": "64",
        "acceptable": [
          "64"
        ],
        "explanation": "2 × 2 × 2 × 2 × 2 × 2 = 64 (doubling six times: 2, 4, 8, 16, 32, 64)."
      },
      {
        "type": "short",
        "question": "What is (-4)^2?",
        "answer": "16",
        "acceptable": [
          "16"
        ],
        "explanation": "The parentheses make -4 the base: (-4) × (-4) = 16, since same signs multiply to a positive result."
      },
      {
        "type": "mc",
        "question": "What is -2^2?",
        "choices": [
          "-4",
          "4",
          "-2",
          "2"
        ],
        "answerIndex": 0,
        "explanation": "Without parentheses, the exponent applies only to the 2, not the negative sign: compute 2^2 = 4 first, then apply the negative sign, giving -4."
      }
    ]
  },
  {
    "id": "1.10",
    "number": 10,
    "title": "Combining exponents + negatives + order of operations",
    "objectives": [
      "Evaluate expressions that combine exponents, negative numbers, and order of operations",
      "Apply PEMDAS correctly when negative numbers and exponents appear together",
      "Avoid sign errors caused by exponents applying to negative bases incorrectly",
      "Confidently solve and check multi-step expressions"
    ],
    "explanation": [
      "This lesson doesn't introduce anything new — it puts every tool from this unit into one toolbox at the same time. You already know the order of operations (parentheses, exponents, multiplication/division, addition/subtraction), you know how negative numbers add, subtract, multiply, and divide, and you know how exponents work, including the crucial difference between (-2)^4 and -2^4. The only new skill here is discipline: working through a longer expression one correct step at a time without letting any of those pieces slip.",
      "The single biggest source of errors in combined expressions is rushing past the exponent step without checking whether a negative sign is trapped inside parentheses or sitting outside them. Before doing anything else in a complicated expression, it's worth scanning it just for exponents and asking, for each one, \"is the negative part of the base, or not?\" Get that question right first, and the rest of the problem is just careful bookkeeping using rules you already have.",
      "It also helps to slow down and treat multi-step expressions like a to-do list rather than trying to do everything in your head at once: rewrite the expression after each stage, the same way the worked example below does. This might feel slower at first, but it dramatically cuts down on careless mistakes, and professional mathematicians and programmers do exactly this — no one solves a long expression in a single mental leap.",
      "Getting genuinely comfortable with this combination — negatives, exponents, and order of operations, all working together — matters beyond just this course. Later, when you start combining many numbers together in formulas (weighing different inputs, squaring differences, working with numbers that can be positive or negative), those formulas will lean on exactly this kind of careful, multi-step evaluation. Nailing it now, on numbers you can fully check by hand, is what makes the more abstract versions of this skill feel automatic later."
    ],
    "example": {
      "problem": "Evaluate -3^2 + (-4)^2 × 2 − 6 ÷ (-3)",
      "steps": [
        "Handle exponents first, watching parentheses carefully. -3^2 has no parentheses around the -3, so the exponent applies only to 3: -3^2 = -(3^2) = -9.",
        "(-4)^2 has parentheses around -4, so the exponent applies to the whole -4: (-4) × (-4) = 16.",
        "The expression is now -9 + 16 × 2 − 6 ÷ (-3).",
        "Multiplication and division, left to right: 16 × 2 = 32, and 6 ÷ (-3) = -2.",
        "The expression is now -9 + 32 − (-2).",
        "Subtracting a negative is the same as adding its opposite: -9 + 32 + 2.",
        "Add left to right: -9 + 32 = 23, then 23 + 2 = 25."
      ],
      "answer": "25"
    },
    "practice": [
      {
        "problem": "Evaluate (-2)^3 + 5.",
        "solution": "Exponent first: (-2)^3 = (-2) × (-2) × (-2) = 4 × (-2) = -8. Then add: -8 + 5 = -3."
      },
      {
        "problem": "Evaluate -4^2 − 3.",
        "solution": "No parentheses around -4, so the exponent applies only to 4: 4^2 = 16, then apply the negative: -16. Then subtract: -16 − 3 = -19."
      },
      {
        "problem": "Evaluate 2 × (-3)^2 − 4^2.",
        "solution": "Exponents first: (-3)^2 = 9 (parentheses include the negative), and 4^2 = 16. Now: 2 × 9 − 16. Multiply: 2 × 9 = 18. Subtract: 18 − 16 = 2."
      },
      {
        "problem": "Evaluate (-6 + 2)^2 ÷ 4 − (-1)^3.",
        "solution": "Parentheses first: -6 + 2 = -4. Now: (-4)^2 ÷ 4 − (-1)^3. Exponents: (-4)^2 = 16, and (-1)^3 = -1. Now: 16 ÷ 4 − (-1). Divide: 16 ÷ 4 = 4. Subtracting a negative is adding its opposite: 4 − (-1) = 4 + 1 = 5."
      },
      {
        "problem": "Evaluate -2^4 + (-2)^4 − 3 × (-5).",
        "solution": "Exponents first, watching parentheses: -2^4 has no parentheses around -2, so it's -(2^4) = -16. (-2)^4 has parentheses, so it's (-2)×(-2)×(-2)×(-2) = 16. Now: -16 + 16 − 3 × (-5). Multiply: 3 × (-5) = -15. Now: -16 + 16 − (-15). Combine: -16 + 16 = 0, and subtracting -15 means adding 15: 0 + 15 = 15."
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "question": "In the expression -5^2, what does the exponent apply to?",
        "choices": [
          "Only the 5, since there are no parentheses around -5",
          "The entire -5, since the negative sign always comes first",
          "Nothing — the expression is invalid",
          "It applies to both the 5 and the minus sign equally"
        ],
        "answerIndex": 0,
        "explanation": "Without parentheses, an exponent applies only to the number directly next to it, not to a minus sign in front, so -5^2 means -(5^2) = -25."
      },
      {
        "type": "mc",
        "question": "Evaluate (-3)^2 − 2^3.",
        "choices": [
          "1",
          "-1",
          "17",
          "-17"
        ],
        "answerIndex": 0,
        "explanation": "(-3)^2 = 9 (parentheses include the negative) and 2^3 = 8, so 9 − 8 = 1."
      },
      {
        "type": "short",
        "question": "Evaluate -2^3 + 10.",
        "answer": "2",
        "acceptable": [
          "2"
        ],
        "explanation": "No parentheses around -2, so -2^3 = -(2^3) = -8. Then -8 + 10 = 2."
      },
      {
        "type": "short",
        "question": "Evaluate 3 × (-2)^2 − (-4).",
        "answer": "16",
        "acceptable": [
          "16"
        ],
        "explanation": "(-2)^2 = 4 (parentheses include the negative). Then 3 × 4 = 12. Subtracting a negative is adding: 12 − (-4) = 12 + 4 = 16."
      },
      {
        "type": "mc",
        "question": "Which of these expressions equals 16?",
        "choices": [
          "(-2)^4",
          "-2^4",
          "-2^3",
          "2^3"
        ],
        "answerIndex": 0,
        "explanation": "(-2)^4 has parentheses around the negative, so it equals (-2)×(-2)×(-2)×(-2) = 16. In contrast, -2^4 = -16, -2^3 = -8, and 2^3 = 8."
      }
    ]
  },
  {
    "id": "1.11",
    "number": 11,
    "title": "What's a variable? — a box holding an unknown number",
    "objectives": [
      "Explain what a variable is and why math uses letters for unknown numbers",
      "Recognize variables in real-world situations",
      "Represent an unknown quantity with a letter",
      "Explain why the same letter can stand for different numbers in different problems"
    ],
    "explanation": [
      "Imagine you're a detective standing in front of a locked treasure chest. You don't know how many gold coins are inside, but you know it's some exact number — you just haven't found it out yet. In math, we have a name for that kind of mystery number: a variable. A variable is a letter, usually something like x, n, or a, that stands in for a number we don't know yet, or a number that can change.",
      "Think of a variable as a labeled box. If you write a box on paper and label it \"x,\" that box is holding some specific number — you just can't see inside yet. The label \"x\" isn't magic and it isn't code; it's just a name tag, exactly like writing \"MYSTERY\" on a sealed present. You could use any letter you want — x, n, c, even z — and it would work exactly the same way, as long as you're consistent about what that letter means in your problem.",
      "You actually use this kind of thinking all the time without calling it algebra. In a video game, your character's score is unknown until the match ends — you could call it s. The number of minutes until your favorite show starts is unknown until you check the clock — call it m. The amount of money in your piggy bank right now is unknown until you count it — call it p. Every one of these is a variable: a placeholder for a number that exists, that has one true value, but that you haven't pinned down yet.",
      "Here's the part that trips people up at first: the same letter, like x, does NOT always mean the same number. In one problem, x might turn out to be 7. In a totally different problem, x might turn out to be 100. The letter is just doing a job — holding a spot for whatever number belongs there in THAT problem. That's actually where the word \"variable\" comes from: it's able to vary, or change, from situation to situation.",
      "Why bother with letters at all instead of just leaving a blank space? Because letters let us write rules and relationships clearly, even before we know the number. \"x + 5 = 12\" tells us something true and useful about x, and later lessons will show you how to use clues like that to hunt down exactly what number x is hiding. For now, the big idea is simple: whenever you see a letter sitting where a number should be, it's a box, holding one specific unknown number, waiting for you to figure out what's inside."
    ],
    "example": {
      "problem": "Mia has some trading cards hidden in a shoebox. She says, \"If I had 4 more cards than I do right now, I'd have 15 cards total.\" Use a variable to represent Mia's unknown number of cards, and figure out what number it stands for.",
      "steps": [
        "Choose a letter to be the box for the unknown number of cards. Let's use c.",
        "Translate Mia's sentence: her current cards (c), plus 4 more, gives 15 total. So c is the number that, when you add 4 to it, gives 15.",
        "Think backward: what number plus 4 equals 15? Since 11 + 4 = 15, that number must be 11.",
        "So the variable c stands for 11 in this problem."
      ],
      "answer": "c = 11 cards"
    },
    "practice": [
      {
        "problem": "A game character starts a level with an unknown number of coins, represented by the variable c. After earning 20 more coins, the character has 45 coins total. What number does c stand for?",
        "solution": "The unknown starting coins is c. After earning 20 more, the total is 45, so c + 20 = 45. Think backward: what number plus 20 gives 45? Since 25 + 20 = 45, c = 25. Answer: c = 25 coins."
      },
      {
        "problem": "Let n stand for the number of pages Jordan still has left to read in a book. Jordan has already read 30 pages, and the whole book has 82 pages. What number does n stand for?",
        "solution": "Total pages (82) equals pages already read (30) plus pages left (n), so 30 + n = 82, meaning n is the pages remaining: 82 − 30 = 52. Answer: n = 52 pages."
      },
      {
        "problem": "A recipe calls for b cups of sugar for one batch of cookies. If you double the recipe, you need 3 cups of sugar total. What number does b stand for?",
        "solution": "Doubling one batch means 2 × b = 3. So b is the number that, doubled, gives 3. Dividing, b = 3 ÷ 2 = 1.5. Answer: b = 1.5 cups."
      },
      {
        "problem": "The temperature this morning was t degrees. By noon, it had risen 15 degrees to reach 68 degrees. What number does t stand for?",
        "solution": "Morning temperature plus the rise equals the noon temperature: t + 15 = 68. Thinking backward, 68 − 15 = 53. Answer: t = 53 degrees."
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "question": "What is a variable in math?",
        "choices": [
          "A letter that stands for an unknown or changeable number",
          "A number that is always equal to zero",
          "A special symbol that only means multiplication",
          "A rule that says you must use the letter x"
        ],
        "answerIndex": 0,
        "explanation": "A variable is a placeholder letter that stands in for a number that is unknown or can change, like a labeled box holding a hidden number."
      },
      {
        "type": "mc",
        "question": "Which of these is the best real-world example of a variable?",
        "choices": [
          "The number of days in a week, which is always 7",
          "The number of points you'll score in your next game, unknown until it happens",
          "The number 100",
          "The plus sign in an addition problem"
        ],
        "answerIndex": 1,
        "explanation": "Your next score is unknown ahead of time and can change game to game — exactly the kind of quantity variables are used to represent, unlike a fixed fact like 7 days in a week."
      },
      {
        "type": "mc",
        "question": "In the equation x + 5 = 12, what does x represent?",
        "choices": [
          "The number 5",
          "The number 12",
          "An unknown number that, combined with the given clue, works out to 7",
          "It has no meaning until we solve it"
        ],
        "answerIndex": 2,
        "explanation": "x is a placeholder for the unknown number that makes the equation true; working backward, x turns out to be 7 since 7 + 5 = 12."
      },
      {
        "type": "short",
        "question": "True or False: The letter x must always represent the same number in every math problem you ever see.",
        "answer": "False",
        "acceptable": [
          "false",
          "no"
        ],
        "explanation": "A variable's value depends on the specific problem — x might be 7 in one problem and 100 in another; the letter is just a reusable name tag."
      },
      {
        "type": "short",
        "question": "You have p pencils in your backpack. After a friend gives you 6 more, you have 14 pencils. What number does p represent?",
        "answer": "8",
        "acceptable": [
          "p = 8",
          "8 pencils"
        ],
        "explanation": "Since p + 6 = 14, working backward gives p = 14 − 6 = 8."
      }
    ]
  },
  {
    "id": "1.12",
    "number": 12,
    "title": "Writing expressions — turning words into math (\"5 more than a number\")",
    "objectives": [
      "Translate everyday phrases into math expressions",
      "Identify keywords that signal each operation",
      "Write expressions using a chosen variable",
      "Recognize when word order flips the math order (like \"less than\")"
    ],
    "explanation": [
      "Math is really just a shorthand for ideas we already say in words. When you say \"three more cookies than I have now,\" you're already doing algebra in your head — you just haven't written it with symbols yet. This lesson is about becoming a translator: turning everyday sentences into short math expressions using a variable for the unknown part.",
      "Certain words are strong clues about which operation to use. For addition, watch for words like sum, more than, plus, increased by, and total. For subtraction, watch for difference, decreased by, minus, and fewer than. For multiplication, watch for product, times, twice (which means times 2), and sometimes the word of (like \"half of a number\"). For division, watch for quotient, divided by, per, and split evenly.",
      "Here's the trickiest part, and it trips up almost everyone at first: order matters, and some phrases flip the order around. \"5 more than a number\" means you start with the number and add 5, so it's written x + 5 — and conveniently, addition doesn't care about order, so x + 5 and 5 + x mean the same thing. But \"5 less than a number\" is different: it means you start with the number and take 5 away, so it's written x − 5, NOT 5 − x. The phrase \"less than\" always flips the order compared to how it sounds — the number that comes right before \"less than\" in the sentence goes SECOND in the subtraction.",
      "A good way to catch yourself is to test it with a real number first. Take \"7 less than a number,\" and imagine the number is 10. Would the answer be 3 (10 − 7) or −3 (7 − 10)? Since taking 7 away from 10 leaves 3, you know the expression has to be x − 7, not 7 − x. Trying a real number is a great trick any time a word problem feels confusing.",
      "Real life is full of these phrases. \"Your allowance, increased by $5 for chores\" is a + 5. \"Twice your video game score, minus 100 penalty points\" is 2s − 100. \"The number of players, split evenly into 4 teams\" is p ÷ 4. Once you get comfortable spotting the operation words and watching out for order-flippers like \"less than\" and \"subtracted from,\" you can turn almost any sentence about an unknown quantity into a clean, short math expression — the very first step before you can ever solve for that unknown."
    ],
    "example": {
      "problem": "Write an expression for \"seven less than a number.\"",
      "steps": [
        "Identify the unknown number and give it a letter: let the number be n.",
        "Notice the keyword \"less than.\" This phrase reverses the order compared to how it sounds — you don't write 7 − n.",
        "Test it with a real number: if n were 20, \"seven less than 20\" should be 13, which is 20 − 7, not 7 − 20.",
        "So the correct expression starts with n and subtracts 7: n − 7."
      ],
      "answer": "n − 7"
    },
    "practice": [
      {
        "problem": "Write an expression for \"a number increased by 9.\"",
        "solution": "\"Increased by\" means addition, and this phrase does not flip order. Let the number be n. The expression is n + 9."
      },
      {
        "problem": "Write an expression for \"the difference of a number and 6.\"",
        "solution": "\"Difference of A and B\" is written A − B, in the order given. Let the number be n. The expression is n − 6."
      },
      {
        "problem": "Write an expression for \"nine less than a number.\"",
        "solution": "\"Less than\" flips the order: start with the number, then subtract 9. Let the number be n. The expression is n − 9 (check with n = 15: nine less than 15 is 6, and 15 − 9 = 6, which matches)."
      },
      {
        "problem": "Write an expression for \"the product of 4 and a number, decreased by 5.\"",
        "solution": "\"Product of 4 and a number\" is 4n. \"Decreased by 5\" means subtract 5 afterward. The expression is 4n − 5."
      },
      {
        "problem": "Write an expression for \"twice a number, increased by 3.\"",
        "solution": "\"Twice a number\" means 2 times the number, or 2n. \"Increased by 3\" means add 3. The expression is 2n + 3."
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "question": "Which expression matches \"5 more than a number x\"?",
        "choices": [
          "x + 5",
          "5 − x",
          "x − 5",
          "5x"
        ],
        "answerIndex": 0,
        "explanation": "\"More than\" means addition and doesn't flip order, so it's simply x + 5."
      },
      {
        "type": "mc",
        "question": "Which expression matches \"8 less than a number y\"?",
        "choices": [
          "8 − y",
          "y − 8",
          "y + 8",
          "8y"
        ],
        "answerIndex": 1,
        "explanation": "\"Less than\" flips the spoken order: you start with y and subtract 8, giving y − 8, not 8 − y."
      },
      {
        "type": "mc",
        "question": "Which keyword most strongly signals multiplication?",
        "choices": [
          "sum",
          "difference",
          "product",
          "quotient"
        ],
        "answerIndex": 2,
        "explanation": "\"Product\" specifically means the result of multiplying two numbers together."
      },
      {
        "type": "short",
        "question": "Write an expression for \"the quotient of a number n and 3.\"",
        "answer": "n/3",
        "acceptable": [
          "n / 3",
          "n divided by 3",
          "n÷3"
        ],
        "explanation": "\"Quotient\" means division, in the order given, so it's n divided by 3."
      },
      {
        "type": "short",
        "question": "Write an expression for \"6 subtracted from a number x.\"",
        "answer": "x-6",
        "acceptable": [
          "x - 6",
          "x − 6"
        ],
        "explanation": "\"Subtracted from\" also flips order like \"less than\": the number x comes first, then 6 is taken away, giving x − 6."
      }
    ]
  },
  {
    "id": "1.13",
    "number": 13,
    "title": "Evaluating expressions — plug in a value for x",
    "objectives": [
      "Substitute a given number in for a variable in an expression",
      "Apply the order of operations while evaluating",
      "Evaluate expressions that include exponents and negative values",
      "Check work by re-reading the substitution carefully"
    ],
    "explanation": [
      "Once you can write an expression like 3x + 4, the next skill is figuring out what it actually equals once you know what x is. This is called evaluating an expression, and it's basically \"unlocking\" the mystery box from earlier lessons: someone tells you exactly what number is inside, and your job is to plug that number in everywhere the variable appears and simplify.",
      "The process has two parts. First, substitute: everywhere you see the variable, carefully replace it with the given number, usually in parentheses to keep things tidy (this matters a lot with negative numbers and exponents). Second, simplify using the order of operations — the same PEMDAS rules you already know: Parentheses first, then Exponents, then Multiplication and Division left to right, then Addition and Subtraction left to right.",
      "Why does the order matter so much here? Because an expression like 3x^2 means \"3 times x, squared\" — but you square x FIRST, then multiply by 3. If you multiplied by 3 first by mistake, you'd get a completely different, wrong answer. Using parentheses when you substitute helps you avoid this trap. If x = 2, write 3(2)^2, not 3·2^2 with the substitution unclear — then square the 2 to get 4, and finally multiply by 3 to get 12.",
      "Negative numbers need extra care too. If x = −3 and the expression is x^2, you must substitute as (−3)^2, which is (−3) × (−3) = 9, a positive number. But if the expression is −x^2, that means \"the opposite of x squared,\" so you'd square first to get 9, then apply the negative sign to get −9. Small differences like this change the answer completely, so always substitute with parentheses and go slowly.",
      "Evaluating expressions is one of the most useful skills in all of math and science, because formulas are just expressions waiting for you to plug in real numbers. A formula for the area of a circle, the distance a ball falls, or the score in a game all work the same way: you're handed an expression with variables, you're told what the variables equal in this specific situation, and you substitute and simplify to get a real, useful number out."
    ],
    "example": {
      "problem": "Evaluate the expression 3x^2 − 4 when x = 2.",
      "steps": [
        "Substitute x = 2 into the expression, using parentheses: 3(2)^2 − 4.",
        "Follow order of operations — exponents first: (2)^2 = 4, so the expression becomes 3(4) − 4.",
        "Do the multiplication next: 3 × 4 = 12, so the expression becomes 12 − 4.",
        "Finish with the subtraction: 12 − 4 = 8."
      ],
      "answer": "8"
    },
    "practice": [
      {
        "problem": "Evaluate x + 8 when x = 5.",
        "solution": "Substitute: 5 + 8. Add: 5 + 8 = 13. Answer: 13."
      },
      {
        "problem": "Evaluate 4x − 3 when x = 6.",
        "solution": "Substitute: 4(6) − 3. Multiply first: 4 × 6 = 24. Then subtract: 24 − 3 = 21. Answer: 21."
      },
      {
        "problem": "Evaluate 2x^2 + 1 when x = 3.",
        "solution": "Substitute: 2(3)^2 + 1. Exponent first: 3^2 = 9. Multiply: 2 × 9 = 18. Add: 18 + 1 = 19. Answer: 19."
      },
      {
        "problem": "Evaluate 5x − x^2 when x = −2.",
        "solution": "Substitute with parentheses: 5(−2) − (−2)^2. Exponent first: (−2)^2 = 4. Multiply: 5 × (−2) = −10. Now subtract: −10 − 4 = −14. Answer: −14."
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "question": "What does it mean to \"evaluate\" an expression?",
        "choices": [
          "Write it using different letters",
          "Substitute a given number for the variable and simplify to find its value",
          "Rewrite it as a word problem",
          "Guess the answer without doing any math"
        ],
        "answerIndex": 1,
        "explanation": "Evaluating means replacing the variable with a known number and simplifying using order of operations to get a numeric answer."
      },
      {
        "type": "mc",
        "question": "Evaluate 2x + 7 when x = 4.",
        "choices": [
          "13",
          "15",
          "22",
          "9"
        ],
        "answerIndex": 1,
        "explanation": "Substitute: 2(4) + 7 = 8 + 7 = 15."
      },
      {
        "type": "mc",
        "question": "Why should you use parentheses when substituting a negative number for a variable?",
        "choices": [
          "Parentheses are only decoration and don't change anything",
          "They help avoid sign mistakes, especially with exponents",
          "They make the expression shorter",
          "They are required only for positive numbers"
        ],
        "answerIndex": 1,
        "explanation": "Parentheses keep the negative sign attached correctly, which matters a lot for things like (−3)^2 versus −3^2."
      },
      {
        "type": "short",
        "question": "Evaluate x^2 − 5 when x = 4.",
        "answer": "11",
        "acceptable": [],
        "explanation": "Substitute: (4)^2 − 5 = 16 − 5 = 11."
      },
      {
        "type": "short",
        "question": "Evaluate (−3)^2 when x = −3 and the expression is x^2.",
        "answer": "9",
        "acceptable": [],
        "explanation": "(−3)^2 means −3 times −3, and a negative times a negative gives a positive: 9."
      }
    ]
  },
  {
    "id": "1.14",
    "number": 14,
    "title": "Solving one-step equations (x + 5 = 12)",
    "objectives": [
      "Understand an equation as a balanced scale",
      "Use inverse operations to isolate the variable",
      "Solve one-step addition, subtraction, multiplication, and division equations",
      "Check a solution by substituting it back into the original equation"
    ],
    "explanation": [
      "Picture an old-fashioned balance scale, the kind with two flat pans hanging from a bar. If both sides hold the exact same weight, the scale stays perfectly level. An equation, like x + 5 = 12, works exactly the same way: whatever is on the left side and whatever is on the right side are equal, balanced against each other, with an equals sign as the balance point.",
      "The golden rule of equations is this: whatever you do to one side, you must do the exact same thing to the other side, or you'll tip the scale and break the balance. If you add 3 to the left pan, you must add 3 to the right pan too, to keep things equal. This rule is what lets us solve equations — we're allowed to change both sides at once, as long as we do it identically.",
      "Our goal when solving is always to get the variable completely alone on one side, so the equation reads something like x = [a number]. To do that, we undo whatever is being done to x, using the opposite, or inverse, operation. Addition and subtraction are inverses of each other; multiplication and division are inverses of each other. If a number is being added to x, we subtract that number from both sides. If a number is being subtracted from x, we add it back to both sides. If x is being multiplied by a number, we divide both sides by that number. If x is being divided by a number, we multiply both sides by that number.",
      "Take x + 5 = 12. Something is being added to x (namely 5), so we undo it with the inverse operation: subtract 5 from both sides. On the left, x + 5 − 5 leaves just x. On the right, 12 − 5 gives 7. So x = 7 — the scale stays balanced the whole time because we did the same subtraction to both pans.",
      "Always double-check your answer by substituting it back into the ORIGINAL equation, not a rearranged version. If x = 7, does 7 + 5 really equal 12? Yes, it does, so the solution checks out. This checking step catches almost every mistake, and it's a habit worth building early — professional mathematicians, engineers, and programmers check their answers this exact same way, every time."
    ],
    "example": {
      "problem": "Solve for x: x + 5 = 12.",
      "steps": [
        "Identify what's happening to x: 5 is being added to it.",
        "Undo it with the inverse operation — subtract 5 from both sides: x + 5 − 5 = 12 − 5.",
        "Simplify both sides: the left side becomes just x, and the right side becomes 7.",
        "Check: substitute x = 7 back into the original equation — 7 + 5 = 12, which is true."
      ],
      "answer": "x = 7"
    },
    "practice": [
      {
        "problem": "Solve for x: x + 9 = 14.",
        "solution": "Subtract 9 from both sides: x = 14 − 9 = 5. Check: 5 + 9 = 14. Answer: x = 5."
      },
      {
        "problem": "Solve for y: y − 8 = 3.",
        "solution": "Add 8 to both sides: y = 3 + 8 = 11. Check: 11 − 8 = 3. Answer: y = 11."
      },
      {
        "problem": "Solve for x: 4x = 28.",
        "solution": "Divide both sides by 4: x = 28 ÷ 4 = 7. Check: 4 × 7 = 28. Answer: x = 7."
      },
      {
        "problem": "Solve for n: n − 12 = −3.",
        "solution": "Add 12 to both sides: n = −3 + 12 = 9. Check: 9 − 12 = −3. Answer: n = 9."
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "question": "In the equation x + 5 = 12, what operation should you use to isolate x?",
        "choices": [
          "Add 5 to both sides",
          "Subtract 5 from both sides",
          "Multiply both sides by 5",
          "Divide both sides by 5"
        ],
        "answerIndex": 1,
        "explanation": "Since 5 is being added to x, the inverse operation — subtracting 5 from both sides — undoes it and isolates x."
      },
      {
        "type": "mc",
        "question": "Solve for x: x − 9 = 6.",
        "choices": [
          "x = 3",
          "x = 15",
          "x = −3",
          "x = 54"
        ],
        "answerIndex": 1,
        "explanation": "Add 9 to both sides: x = 6 + 9 = 15."
      },
      {
        "type": "mc",
        "question": "Solve for x: 6x = 42.",
        "choices": [
          "x = 36",
          "x = 48",
          "x = 7",
          "x = 252"
        ],
        "answerIndex": 2,
        "explanation": "Divide both sides by 6: x = 42 ÷ 6 = 7."
      },
      {
        "type": "short",
        "question": "Solve for x: x/3 = 9.",
        "answer": "27",
        "acceptable": [
          "x = 27"
        ],
        "explanation": "Multiply both sides by 3 to undo the division: x = 9 × 3 = 27."
      },
      {
        "type": "short",
        "question": "Why must you do the same operation to both sides of an equation when solving it?",
        "answer": "to keep the equation balanced",
        "acceptable": [
          "to keep both sides equal",
          "so it stays balanced",
          "to keep it balanced"
        ],
        "explanation": "An equation is like a balance scale — changing only one side would break the equality, so any operation must be applied identically to both sides."
      }
    ]
  },
  {
    "id": "1.15",
    "number": 15,
    "title": "Solving two-step equations (2x + 3 = 11)",
    "objectives": [
      "Solve two-step equations using inverse operations in the correct order",
      "Undo addition or subtraction before undoing multiplication or division",
      "Check a two-step equation's solution by substitution",
      "Solve two-step equations that involve negative numbers"
    ],
    "explanation": [
      "One-step equations only had one thing happening to the variable. Two-step equations, like 2x + 3 = 11, have two things happening at once: x is being multiplied by 2, AND 3 is being added. To solve it, you need to undo both operations — but the order you undo them in matters a lot.",
      "Think of it like unwrapping a present. The equation 2x + 3 builds up in a certain order: first x gets multiplied by 2, then 3 gets added on top. To unwrap it and get back to plain x, you have to remove things in reverse order — take off the outer layer first (the added 3), and THEN deal with the inner layer (the multiplication by 2). This is exactly the opposite order of PEMDAS, which makes sense: PEMDAS builds expressions up, and solving equations tears them back down.",
      "So the strategy for two-step equations is: first, undo any addition or subtraction (get the term with the variable alone on one side), and second, undo any multiplication or division (get the variable completely by itself). Always addition/subtraction first, multiplication/division second, no matter what order they appear in the equation.",
      "Let's walk through 2x + 3 = 11. First, undo the \"+ 3\" by subtracting 3 from both sides: 2x + 3 − 3 = 11 − 3, which simplifies to 2x = 8. Now only the multiplication is left. Undo it by dividing both sides by 2: 2x ÷ 2 = 8 ÷ 2, which gives x = 4.",
      "As always, check by substituting back into the original equation: 2(4) + 3 = 8 + 3 = 11, which matches. Two-step equations show up constantly in real situations — like figuring out how many weeks of saving $2x plus a $3 starting bonus it takes to reach $11 — and the same two-step \"undo, then undo again\" strategy works no matter how big or messy the numbers get, including when negative numbers are involved."
    ],
    "example": {
      "problem": "Solve for x: 2x + 3 = 11.",
      "steps": [
        "Undo the addition first: subtract 3 from both sides — 2x + 3 − 3 = 11 − 3, giving 2x = 8.",
        "Undo the multiplication next: divide both sides by 2 — 2x ÷ 2 = 8 ÷ 2, giving x = 4.",
        "Check by substituting into the original equation: 2(4) + 3 = 8 + 3 = 11, which is true."
      ],
      "answer": "x = 4"
    },
    "practice": [
      {
        "problem": "Solve for x: 3x − 4 = 11.",
        "solution": "Add 4 to both sides: 3x = 15. Divide both sides by 3: x = 5. Check: 3(5) − 4 = 15 − 4 = 11. Answer: x = 5."
      },
      {
        "problem": "Solve for x: 5x + 7 = −3.",
        "solution": "Subtract 7 from both sides: 5x = −10. Divide both sides by 5: x = −2. Check: 5(−2) + 7 = −10 + 7 = −3. Answer: x = −2."
      },
      {
        "problem": "Solve for x: x/4 − 2 = 3.",
        "solution": "Add 2 to both sides: x/4 = 5. Multiply both sides by 4: x = 20. Check: 20/4 − 2 = 5 − 2 = 3. Answer: x = 20."
      },
      {
        "problem": "Solve for x: −2x + 6 = 0.",
        "solution": "Subtract 6 from both sides: −2x = −6. Divide both sides by −2: x = 3. Check: −2(3) + 6 = −6 + 6 = 0. Answer: x = 3."
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "question": "When solving a two-step equation like 2x + 3 = 11, which should you undo first?",
        "choices": [
          "The multiplication, then the addition",
          "The addition or subtraction, then the multiplication or division",
          "It doesn't matter what order you use",
          "You must guess and check values of x"
        ],
        "answerIndex": 1,
        "explanation": "Undo addition or subtraction first to isolate the variable term, then undo multiplication or division to isolate the variable itself."
      },
      {
        "type": "mc",
        "question": "Solve for x: 4x − 5 = 19.",
        "choices": [
          "x = 6",
          "x = 4.5",
          "x = 96",
          "x = 3.5"
        ],
        "answerIndex": 0,
        "explanation": "Add 5 to both sides: 4x = 24. Divide by 4: x = 6."
      },
      {
        "type": "mc",
        "question": "Solve for x: 3x + 9 = 0.",
        "choices": [
          "x = 3",
          "x = −3",
          "x = 9",
          "x = −9"
        ],
        "answerIndex": 1,
        "explanation": "Subtract 9 from both sides: 3x = −9. Divide by 3: x = −3."
      },
      {
        "type": "short",
        "question": "Solve for x: 7x − 2 = 12.",
        "answer": "2",
        "acceptable": [
          "x = 2"
        ],
        "explanation": "Add 2 to both sides: 7x = 14. Divide by 7: x = 2."
      },
      {
        "type": "short",
        "question": "Solve for x: 2x + 10 = 4.",
        "answer": "-3",
        "acceptable": [
          "x = -3",
          "−3",
          "x = −3"
        ],
        "explanation": "Subtract 10 from both sides: 2x = −6. Divide by 2: x = −3."
      }
    ]
  },
  {
    "id": "1.16",
    "number": 16,
    "title": "Combining like terms",
    "objectives": [
      "Identify like terms in an expression",
      "Combine like terms by adding or subtracting their coefficients",
      "Simplify expressions with multiple variable and constant terms",
      "Recognize when terms are NOT alike and cannot be combined"
    ],
    "explanation": [
      "Imagine dumping out a mixed box of trading cards, coins, and small toy figures all at once. To make sense of the pile, you'd naturally sort it — cards with cards, coins with coins, figures with figures. You wouldn't try to add \"3 cards\" and \"5 coins\" together into one pile of 8 somethings, because they're different kinds of things. Combining like terms in algebra works exactly the same way.",
      "In an expression like 4x + 7 − 2x + 3, each piece separated by a plus or minus sign is called a term. Some terms are \"like terms\" because they have the exact same variable (or no variable at all). Here, 4x and −2x are like terms because they both involve x. And 7 and 3 are like terms because they're both plain numbers, called constants. But 4x and 7 are NOT like terms — one is a multiple of x, the other is just a number — so you can never combine a variable term with a constant term.",
      "To combine like terms, you simply add or subtract their coefficients — the numbers in front of the variable — and keep the variable part the same. Think of 4x as \"4 copies of x\" and −2x as \"negative 2 copies of x.\" Combine them: 4 copies minus 2 copies leaves 2 copies, or 2x. The variable x itself never changes; only the count in front of it changes.",
      "This idea also applies when an expression has more than one type of variable, like 3x + 5y − x + 2y. Here you'd sort x-terms separately from y-terms: (3x − x) gives 2x, and (5y + 2y) gives 7y, so the whole thing simplifies to 2x + 7y. Notice x-terms and y-terms never mix together, no matter how tempting it looks — they represent different unknown quantities, just like cards and coins are different kinds of objects.",
      "Combining like terms is one of the most useful cleanup skills in algebra. Messy expressions with lots of terms scattered around become short and simple once you group and combine what matches. This skill will show up constantly from here on — especially once equations start getting more complicated with the distributive property and variables on both sides, where combining like terms is often the very first move that makes a scary-looking equation manageable."
    ],
    "example": {
      "problem": "Simplify the expression 4x + 7 − 2x + 3.",
      "steps": [
        "Identify the like terms: 4x and −2x are like terms (both have x); 7 and 3 are like terms (both are constants).",
        "Group them: (4x − 2x) + (7 + 3).",
        "Combine the x-terms: 4x − 2x = 2x.",
        "Combine the constants: 7 + 3 = 10.",
        "Write the simplified expression: 2x + 10."
      ],
      "answer": "2x + 10"
    },
    "practice": [
      {
        "problem": "Simplify: 5x + 3x − 2.",
        "solution": "Combine the like x-terms: 5x + 3x = 8x. The constant −2 has no like term to combine with. Answer: 8x − 2."
      },
      {
        "problem": "Simplify: 7 − 3x + 2x − 1.",
        "solution": "Combine x-terms: −3x + 2x = −x. Combine constants: 7 − 1 = 6. Answer: 6 − x (or equivalently −x + 6)."
      },
      {
        "problem": "Simplify: 4x + 3y − x + 5y.",
        "solution": "Combine x-terms: 4x − x = 3x. Combine y-terms: 3y + 5y = 8y. Answer: 3x + 8y."
      },
      {
        "problem": "Simplify: −2x + 9 − 5x − 4.",
        "solution": "Combine x-terms: −2x − 5x = −7x. Combine constants: 9 − 4 = 5. Answer: −7x + 5."
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "question": "Which pair below are like terms?",
        "choices": [
          "3x and 5y",
          "3x and 5x",
          "3x and 5x^2",
          "3x and 5"
        ],
        "answerIndex": 1,
        "explanation": "3x and 5x both have the same variable x raised to the same power, so they can be combined; the others involve different variables, different exponents, or a plain constant."
      },
      {
        "type": "mc",
        "question": "Simplify: 6x + 4 − 2x − 1.",
        "choices": [
          "4x + 3",
          "8x + 3",
          "4x + 5",
          "4x − 3"
        ],
        "answerIndex": 0,
        "explanation": "Combine x-terms: 6x − 2x = 4x. Combine constants: 4 − 1 = 3. Result: 4x + 3."
      },
      {
        "type": "mc",
        "question": "What is the coefficient in the term −7x?",
        "choices": [
          "7",
          "−7",
          "x",
          "−1"
        ],
        "answerIndex": 1,
        "explanation": "The coefficient is the number multiplying the variable, including its sign, so it's −7."
      },
      {
        "type": "short",
        "question": "Simplify: 2x + 9y − x − 3y.",
        "answer": "x+6y",
        "acceptable": [
          "x + 6y"
        ],
        "explanation": "Combine x-terms: 2x − x = x. Combine y-terms: 9y − 3y = 6y. Result: x + 6y."
      },
      {
        "type": "short",
        "question": "Simplify: 8 + 3x − 8.",
        "answer": "3x",
        "acceptable": [],
        "explanation": "The constants combine: 8 − 8 = 0, leaving only the term 3x."
      }
    ]
  },
  {
    "id": "1.17",
    "number": 17,
    "title": "The distributive property",
    "objectives": [
      "Apply the distributive property a(b + c) = ab + ac",
      "Expand expressions by distributing a number across parentheses",
      "Combine distributing with combining like terms",
      "Distribute negative numbers correctly, including sign changes"
    ],
    "explanation": [
      "Imagine you're handing out treat bags at a party. You have 3 friends, and each friend's bag needs 4 candies plus 2 stickers. You could figure out the total two ways: pack one bag completely (4 candies + 2 stickers) and multiply the whole bag by 3 friends, or hand out all the candies to everyone (3 × 4 = 12 candies) and all the stickers to everyone (3 × 2 = 6 stickers) separately, then add those totals together. Either way, you get the same result — that's the idea behind the distributive property.",
      "In math, this is written as a(b + c) = ab + ac. The number outside the parentheses, a, gets \"distributed\" — multiplied — into EVERY term inside the parentheses, not just the first one. So 3(x + 4) means 3 times x, plus 3 times 4, which gives 3x + 12. You're not allowed to only multiply the first term and leave the second one alone; the outside number has to touch every single term inside.",
      "The distributive property becomes especially important, and trickier, when a negative number is involved. When you distribute a negative number, EVERY term inside the parentheses flips its sign. For example, −2(x − 5) means −2 times x, which is −2x, plus −2 times −5, which is +10 (a negative times a negative is a positive). So −2(x − 5) = −2x + 10. A common mistake is forgetting that the negative sign applies to both terms inside, not just the first — always double-check both signs after distributing.",
      "Distributing is almost always just the first step. Once the parentheses are gone, you'll often have several terms sitting around, and the natural next move is to combine like terms, just like you learned in the previous lesson. For example, in 3(x + 4) − 2x, you'd first distribute to get 3x + 12 − 2x, and then combine the like x-terms (3x − 2x) to simplify all the way down to x + 12.",
      "This two-step combo — distribute, then combine like terms — is one of the most common patterns in algebra, and you'll use it constantly from here on, including in the next lesson on equations with variables on both sides. Getting comfortable spotting parentheses that need to be distributed, and carefully tracking every sign, will make much harder-looking problems feel completely manageable."
    ],
    "example": {
      "problem": "Expand and simplify: 3(x + 4) − 2x.",
      "steps": [
        "Distribute the 3 into both terms inside the parentheses: 3(x) + 3(4) = 3x + 12.",
        "Rewrite the full expression with the parentheses removed: 3x + 12 − 2x.",
        "Combine the like x-terms: 3x − 2x = x.",
        "Write the fully simplified expression: x + 12."
      ],
      "answer": "x + 12"
    },
    "practice": [
      {
        "problem": "Expand: 4(x + 3).",
        "solution": "Distribute the 4 into both terms: 4(x) + 4(3) = 4x + 12. Answer: 4x + 12."
      },
      {
        "problem": "Expand and simplify: 2(x − 5) + 3x.",
        "solution": "Distribute: 2(x) + 2(−5) = 2x − 10. Full expression: 2x − 10 + 3x. Combine like terms: 2x + 3x = 5x. Answer: 5x − 10."
      },
      {
        "problem": "Expand: −3(x + 2).",
        "solution": "Distribute the −3 into both terms, watching signs: −3(x) + (−3)(2) = −3x − 6. Answer: −3x − 6."
      },
      {
        "problem": "Expand and simplify: 5(x − 2) − 2(x + 1).",
        "solution": "Distribute each part separately: 5(x) + 5(−2) = 5x − 10, and −2(x) + (−2)(1) = −2x − 2. Full expression: 5x − 10 − 2x − 2. Combine like terms: (5x − 2x) + (−10 − 2) = 3x − 12. Answer: 3x − 12."
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "question": "Which expression is equivalent to 5(x + 2)?",
        "choices": [
          "5x + 2",
          "x + 10",
          "5x + 10",
          "5x + 5"
        ],
        "answerIndex": 2,
        "explanation": "Distribute the 5 into both terms: 5(x) + 5(2) = 5x + 10."
      },
      {
        "type": "mc",
        "question": "What is −4(x − 3) after distributing?",
        "choices": [
          "−4x − 12",
          "−4x + 12",
          "4x − 12",
          "−4x − 3"
        ],
        "answerIndex": 1,
        "explanation": "Distribute −4 into both terms: −4(x) = −4x, and −4(−3) = +12 since a negative times a negative is positive. Result: −4x + 12."
      },
      {
        "type": "mc",
        "question": "After distributing and combining like terms, 2(x + 3) − x simplifies to:",
        "choices": [
          "x + 6",
          "2x + 3",
          "3x + 6",
          "x + 3"
        ],
        "answerIndex": 0,
        "explanation": "Distribute: 2x + 6 − x. Combine like terms: (2x − x) + 6 = x + 6."
      },
      {
        "type": "short",
        "question": "Expand: 6(x − 1).",
        "answer": "6x-6",
        "acceptable": [
          "6x - 6",
          "6x − 6"
        ],
        "explanation": "Distribute the 6 into both terms: 6(x) + 6(−1) = 6x − 6."
      },
      {
        "type": "short",
        "question": "Expand and simplify: 3(x + 4) + 2(x − 1).",
        "answer": "5x+10",
        "acceptable": [
          "5x + 10"
        ],
        "explanation": "Distribute each part: 3x + 12 and 2x − 2. Combine: (3x + 2x) + (12 − 2) = 5x + 10."
      }
    ]
  },
  {
    "id": "1.18",
    "number": 18,
    "title": "Equations with variables on both sides",
    "objectives": [
      "Combine like terms and distribute on each side of an equation before solving",
      "Move variable terms to one side using inverse operations",
      "Solve equations with the variable appearing on both sides",
      "Check the solution by substituting into the original equation"
    ],
    "explanation": [
      "So far, every equation you've solved has had the variable on just one side, like 2x + 3 = 11. But real equations don't always cooperate that nicely — sometimes the variable shows up on BOTH sides, like 5x − 3 = 2x + 9. Picture the balance scale again: this time, both pans have some unknown weight (x's) sitting on them, along with some known weights (plain numbers). The scale is still perfectly balanced; we just need one more move before we can solve it the usual way.",
      "The key extra step is to get all the variable terms onto ONE side of the equation, using the same inverse-operation rule as always: whatever you do to one side, you do to the other. If there's a 2x on the right side, you can subtract 2x from BOTH sides to remove it from the right entirely, leaving all the x's together on the left. Once every x-term is on one side and every constant is on the other, it becomes a regular two-step equation you already know how to solve.",
      "Here's a solid game plan for these problems, in order: first, if there are any parentheses, distribute to remove them. Second, combine like terms on each side separately (don't mix terms from the left side with terms from the right side yet — just tidy up each side on its own). Third, move all variable terms to one side by adding or subtracting. Fourth, move all constant terms to the other side by adding or subtracting. Fifth, divide to finish isolating the variable. Finally, check your answer.",
      "Let's apply this to 5x − 3 = 2x + 9. There are no parentheses and nothing to combine yet on either side. Move the variables together by subtracting 2x from both sides: 5x − 2x − 3 = 2x − 2x + 9, which simplifies to 3x − 3 = 9. Now it's a two-step equation: add 3 to both sides to get 3x = 12, then divide both sides by 3 to get x = 4.",
      "Always check by substituting back into the ORIGINAL equation on both sides separately: the left side becomes 5(4) − 3 = 20 − 3 = 17, and the right side becomes 2(4) + 9 = 8 + 9 = 17. Both sides match, so x = 4 is correct. This kind of two-sided checking is especially valuable here, since these equations have more steps and more chances for a small sign mistake to sneak in."
    ],
    "example": {
      "problem": "Solve for x: 5x − 3 = 2x + 9.",
      "steps": [
        "Move the variable terms to one side by subtracting 2x from both sides: 5x − 2x − 3 = 2x − 2x + 9, which simplifies to 3x − 3 = 9.",
        "Undo the subtraction by adding 3 to both sides: 3x = 12.",
        "Undo the multiplication by dividing both sides by 3: x = 4.",
        "Check both sides of the original equation: left side 5(4) − 3 = 17, right side 2(4) + 9 = 17. Both sides match."
      ],
      "answer": "x = 4"
    },
    "practice": [
      {
        "problem": "Solve for x: 6x + 2 = 3x + 14.",
        "solution": "Subtract 3x from both sides: 3x + 2 = 14. Subtract 2 from both sides: 3x = 12. Divide by 3: x = 4. Check: 6(4)+2=26 and 3(4)+14=26. Answer: x = 4."
      },
      {
        "problem": "Solve for x: 7x − 5 = 2x + 20.",
        "solution": "Subtract 2x from both sides: 5x − 5 = 20. Add 5 to both sides: 5x = 25. Divide by 5: x = 5. Check: 7(5)−5=30 and 2(5)+20=30. Answer: x = 5."
      },
      {
        "problem": "Solve for x: 3x + 8 = 9x − 4.",
        "solution": "Subtract 3x from both sides: 8 = 6x − 4. Add 4 to both sides: 12 = 6x. Divide by 6: x = 2. Check: 3(2)+8=14 and 9(2)−4=14. Answer: x = 2."
      },
      {
        "problem": "Solve for x: 2(x + 3) = x + 10.",
        "solution": "Distribute the left side first: 2x + 6 = x + 10. Subtract x from both sides: x + 6 = 10. Subtract 6 from both sides: x = 4. Check: 2(4+3)=14 and 4+10=14. Answer: x = 4."
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "question": "What should you do FIRST if an equation with variables on both sides also contains parentheses?",
        "choices": [
          "Ignore the parentheses",
          "Distribute to remove the parentheses",
          "Divide both sides by the number in front of the parentheses",
          "Immediately move all variables to one side without simplifying"
        ],
        "answerIndex": 1,
        "explanation": "Distributing first clears the parentheses so you can then combine like terms and move variables cleanly."
      },
      {
        "type": "mc",
        "question": "Solve for x: 4x + 6 = x + 21.",
        "choices": [
          "x = 5",
          "x = 7",
          "x = 15",
          "x = 9"
        ],
        "answerIndex": 0,
        "explanation": "Subtract x from both sides: 3x + 6 = 21. Subtract 6: 3x = 15. Divide by 3: x = 5."
      },
      {
        "type": "mc",
        "question": "Why is it a good idea to check both sides of the original equation separately after solving?",
        "choices": [
          "It isn't necessary once you've solved the equation",
          "It confirms both sides equal the same number, catching any sign or arithmetic mistakes",
          "It changes the value of x",
          "It's only needed when the answer is negative"
        ],
        "answerIndex": 1,
        "explanation": "Substituting the solution into both the original left and right sides and confirming they match is a reliable way to catch mistakes."
      },
      {
        "type": "short",
        "question": "Solve for x: 8x − 1 = 3x + 19.",
        "answer": "4",
        "acceptable": [
          "x = 4"
        ],
        "explanation": "Subtract 3x: 5x − 1 = 19. Add 1: 5x = 20. Divide by 5: x = 4."
      },
      {
        "type": "short",
        "question": "Solve for x: 3(x − 1) = x + 5.",
        "answer": "4",
        "acceptable": [
          "x = 4"
        ],
        "explanation": "Distribute: 3x − 3 = x + 5. Subtract x: 2x − 3 = 5. Add 3: 2x = 8. Divide by 2: x = 4."
      }
    ]
  },
  {
    "id": "1.19",
    "number": 19,
    "title": "Intro to the coordinate plane — plotting (x, y) points",
    "objectives": [
      "Identify the x-axis, y-axis, and origin on a coordinate plane",
      "Plot ordered pairs (x, y) as points on the plane",
      "Identify which of the four quadrants a point lies in",
      "Read the coordinates of a point that's already plotted"
    ],
    "explanation": [
      "Imagine a treasure map with a grid drawn over it, where every location can be described with exactly two directions: how far to walk sideways, and how far to walk up or down. That grid is exactly what a coordinate plane is: two number lines crossing each other at a right angle, letting you pin down the exact location of any point using just two numbers.",
      "The horizontal number line is called the x-axis, and it measures how far left or right a point is. The vertical number line is called the y-axis, and it measures how far up or down a point is. The spot where these two axes cross, right in the middle, is called the origin, and it represents the point (0, 0) — zero steps sideways, zero steps up or down, the starting point for every location on the map.",
      "Every point on the plane is described by an ordered pair, written (x, y). The word \"ordered\" matters a lot here — the order tells you which number is which, and swapping them gives you a totally different point. A handy way to remember the order: \"x before y, walk before you fly\" — move horizontally (left/right) along the x-axis first, then move vertically (up/down) for the y-value. To plot (3, −2), you'd start at the origin, walk 3 steps to the right (since 3 is positive), then walk 2 steps down (since −2 is negative), and mark your landing spot.",
      "The two axes divide the plane into four regions called quadrants, numbered with Roman numerals I through IV, going counter-clockwise starting from the upper right. In Quadrant I, both x and y are positive. In Quadrant II, x is negative and y is positive. In Quadrant III, both x and y are negative. In Quadrant IV, x is positive and y is negative. If a point has a coordinate of exactly 0, like (0, 5) or (4, 0), it sits directly on one of the axes rather than inside any quadrant.",
      "The coordinate plane is one of the most powerful tools in all of math — it's how graphs, maps, video game screens, and even computer images are built, by locating every pixel or point with a simple pair of numbers. And here's a sneak peek ahead: this same idea of combining two or more numbers in a structured, ordered way to describe something meaningfully is closely related to \"weighted sums,\" a key building block you'll meet later on the road to building a neural network."
    ],
    "example": {
      "problem": "Plot the point (3, −2) and identify which quadrant it is in.",
      "steps": [
        "Start at the origin (0, 0).",
        "Move according to the x-coordinate first: since x = 3 is positive, move 3 units to the right.",
        "Move according to the y-coordinate next: since y = −2 is negative, move 2 units down.",
        "Mark the point where you land — that's (3, −2).",
        "Determine the quadrant: x is positive and y is negative, which matches Quadrant IV."
      ],
      "answer": "The point (3, −2) is located in Quadrant IV."
    },
    "practice": [
      {
        "problem": "Point A is located 4 units right and 5 units up from the origin. What are its coordinates, and which quadrant is it in?",
        "solution": "4 units right means x = 4; 5 units up means y = 5. Coordinates: (4, 5). Both x and y are positive, so it's in Quadrant I."
      },
      {
        "problem": "Plot the point (−3, 2). Which quadrant is it in?",
        "solution": "x = −3 is negative (move left), y = 2 is positive (move up). Since x is negative and y is positive, the point is in Quadrant II."
      },
      {
        "problem": "Plot the point (−6, −1). Which quadrant is it in?",
        "solution": "x = −6 is negative (move left), y = −1 is negative (move down). Since both x and y are negative, the point is in Quadrant III."
      },
      {
        "problem": "Plot the point (2, −7). Which quadrant is it in?",
        "solution": "x = 2 is positive (move right), y = −7 is negative (move down). Since x is positive and y is negative, the point is in Quadrant IV."
      },
      {
        "problem": "The point (0, −5) is plotted. Is it in a quadrant, or somewhere else? Explain.",
        "solution": "Since x = 0, the point has no left/right movement, so it sits directly on the y-axis, not inside any of the four quadrants."
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "question": "What is the name of the point where the x-axis and y-axis cross?",
        "choices": [
          "The center",
          "The origin",
          "The vertex",
          "Quadrant I"
        ],
        "answerIndex": 1,
        "explanation": "The crossing point of the two axes is called the origin, and it has coordinates (0, 0)."
      },
      {
        "type": "mc",
        "question": "In the ordered pair (x, y), what does the x-value tell you?",
        "choices": [
          "How far up or down the point is",
          "How far left or right the point is",
          "Which quadrant the point is in automatically",
          "The distance from the point to the origin"
        ],
        "answerIndex": 1,
        "explanation": "The x-value, listed first, tells you the horizontal position — how far left or right of the origin to move."
      },
      {
        "type": "mc",
        "question": "Which quadrant contains the point (−4, −7)?",
        "choices": [
          "Quadrant I",
          "Quadrant II",
          "Quadrant III",
          "Quadrant IV"
        ],
        "answerIndex": 2,
        "explanation": "Both coordinates are negative, which places the point in Quadrant III."
      },
      {
        "type": "short",
        "question": "A point is 5 units left and 2 units up from the origin. Write its coordinates as an ordered pair.",
        "answer": "(-5,2)",
        "acceptable": [
          "(-5, 2)",
          "-5,2",
          "(−5, 2)"
        ],
        "explanation": "Left means a negative x-value (−5), and up means a positive y-value (2), giving (−5, 2)."
      },
      {
        "type": "short",
        "question": "Which quadrant contains the point (6, 3)?",
        "answer": "Quadrant I",
        "acceptable": [
          "I",
          "quadrant 1",
          "1"
        ],
        "explanation": "Both x and y are positive, which is the definition of Quadrant I."
      }
    ]
  },
  {
    "id": "1.20",
    "number": 20,
    "title": "Mini-project — use algebra to crack a real puzzle, checks it all stuck",
    "objectives": [
      "Combine equation-solving, the distributive property, and negative numbers to solve a multi-step real puzzle",
      "Set up and solve equations from a word-based clue instead of a ready-made equation",
      "Apply combining like terms and percent-to-decimal conversion within a single connected challenge",
      "Verify a final answer by checking every step against the original clues"
    ],
    "explanation": [
      "You are a codebreaker for the Numeria Detective Agency, and you've just been called to the old workshop of Inventor Quill, a brilliant but famously secretive engineer who built a security vault to protect the blueprint for her greatest invention: a working model glider powered entirely by rubber bands and gears. Quill vanished on a research trip months ago, leaving only a note: \"If anything happens to me, the blueprint is safe behind the Locked Vault Door. Only someone who truly understands numbers will get it open. — Q.\"",
      "The Vault Door is sealed by four brass padlocks in a row, each stamped with a riddle instead of a keyhole. Below the padlocks, an engraved plate reads: \"Solve each lock for its digit. Read the four digits left to right for the vault code.\" Your job is to solve all four locks and combine your answers into the code that opens the door.",
      "THE ROSTY BOLT (Lock 1): A small plaque reads: \"Take a number, multiply it by 3, then subtract 8. The result is −2. What is the number?\" As an equation, this is 3x − 8 = −2.",
      "THE BRASS DIAL (Lock 2): This plaque shows a little sketch of parentheses and reads: \"Take a number, add 3 to it, and double the whole thing. Then take away one copy of the original number. The result is 9. What is the number?\" As an equation, this is 2(x + 3) − x = 9.",
      "THE IRON LATCH (Lock 3): This plaque reads: \"Five copies of a number, minus 4, is exactly equal to two copies of that same number, plus 11. What is the number?\" As an equation, this is 5x − 4 = 2x + 11.",
      "THE GOLDEN CLASP (Lock 4): The final plaque is smudged, but you can still read: \"25% of a number is 2. What is the number?\" As an equation, this is 0.25x = 2 (since 25% means 0.25, or 1/4).",
      "Each lock's answer is a single digit from 0 to 9. Solve all four equations, using everything you've learned in Phase 1 — one-step and two-step equations, the distributive property, combining like terms, equations with the variable on both sides, and converting a percent to a decimal — and line up the four digits in order (Rusty Bolt, Brass Dial, Iron Latch, Golden Clasp) to reveal the 4-digit vault code. Crack all four locks correctly, in order, and the vault door swings open, revealing Inventor Quill's blueprint — and proof that you truly understand numbers."
    ],
    "example": {
      "problem": "Solve all four padlocks and determine the 4-digit vault code that opens the Locked Vault Door.",
      "steps": [
        "Lock 1 — The Rusty Bolt: Solve 3x − 8 = −2. Add 8 to both sides: 3x = 6. Divide both sides by 3: x = 2. Check: 3(2) − 8 = 6 − 8 = −2. Correct — the first digit is 2.",
        "Lock 2 — The Brass Dial: Solve 2(x + 3) − x = 9. Distribute the 2: 2x + 6 − x = 9. Combine like terms (2x − x = x): x + 6 = 9. Subtract 6 from both sides: x = 3. Check: 2(3 + 3) − 3 = 2(6) − 3 = 12 − 3 = 9. Correct — the second digit is 3.",
        "Lock 3 — The Iron Latch: Solve 5x − 4 = 2x + 11. Subtract 2x from both sides: 3x − 4 = 11. Add 4 to both sides: 3x = 15. Divide both sides by 3: x = 5. Check: left side 5(5) − 4 = 21, right side 2(5) + 11 = 21. Correct — the third digit is 5.",
        "Lock 4 — The Golden Clasp: Solve 0.25x = 2. Divide both sides by 0.25 (or multiply both sides by 4, since 0.25 = 1/4): x = 8. Check: 0.25 × 8 = 2. Correct — the fourth digit is 8.",
        "Line up the four digits in order: Lock 1 gives 2, Lock 2 gives 3, Lock 3 gives 5, Lock 4 gives 8, forming the code 2358."
      ],
      "answer": "The vault code is 2358, and the door swings open to reveal Inventor Quill's blueprint."
    },
    "practice": [
      {
        "problem": "Mini-Puzzle: The Shed Padlock reads: \"A number, decreased by 12, equals −5. What is the number?\"",
        "solution": "Write the equation: n − 12 = −5. Add 12 to both sides: n = −5 + 12 = 7. Check: 7 − 12 = −5. Answer: n = 7."
      },
      {
        "problem": "Mini-Puzzle: The Garage Lock reads: \"Four copies of a number, plus 7, equals −1. What is the number?\"",
        "solution": "Write the equation: 4x + 7 = −1. Subtract 7 from both sides: 4x = −8. Divide both sides by 4: x = −2. Check: 4(−2) + 7 = −8 + 7 = −1. Answer: x = −2."
      },
      {
        "problem": "Mini-Puzzle: The Attic Latch reads: \"Take a number, subtract 4, and triple the whole thing. Add two more copies of the original number. The result is 13. What is the number?\"",
        "solution": "Write the equation: 3(x − 4) + 2x = 13. Distribute: 3x − 12 + 2x = 13. Combine like terms: 5x − 12 = 13. Add 12 to both sides: 5x = 25. Divide both sides by 5: x = 5. Check: 3(5 − 4) + 2(5) = 3(1) + 10 = 3 + 10 = 13. Answer: x = 5."
      },
      {
        "problem": "Mini-Puzzle: The Cellar Bolt reads: \"Seven copies of a number, plus 2, equals three copies of that number, minus 10. What is the number?\"",
        "solution": "Write the equation: 7x + 2 = 3x − 10. Subtract 3x from both sides: 4x + 2 = −10. Subtract 2 from both sides: 4x = −12. Divide both sides by 4: x = −3. Check: left side 7(−3) + 2 = −21 + 2 = −19; right side 3(−3) − 10 = −9 − 10 = −19. Answer: x = −3."
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "question": "In the vault puzzle, Lock 1 (The Rusty Bolt) was 3x − 8 = −2. What is x?",
        "choices": [
          "x = 2",
          "x = 3",
          "x = −2",
          "x = 10"
        ],
        "answerIndex": 0,
        "explanation": "Add 8 to both sides to get 3x = 6, then divide by 3 to get x = 2."
      },
      {
        "type": "mc",
        "question": "After distributing and combining like terms, 2(x + 3) − x simplifies to:",
        "choices": [
          "x + 6",
          "2x + 3",
          "3x + 6",
          "x + 3"
        ],
        "answerIndex": 0,
        "explanation": "Distributing gives 2x + 6 − x, and combining the like x-terms (2x − x = x) leaves x + 6."
      },
      {
        "type": "mc",
        "question": "Which decimal correctly represents \"25% of x\" when written as a multiplication expression?",
        "choices": [
          "0.25x",
          "2.5x",
          "25x",
          "0.025x"
        ],
        "answerIndex": 0,
        "explanation": "25% means 25 out of 100, or 0.25, so \"25% of x\" is written as 0.25x."
      },
      {
        "type": "short",
        "question": "Solve for x: 5x − 4 = 2x + 11 (this was Lock 3, The Iron Latch).",
        "answer": "5",
        "acceptable": [
          "x = 5"
        ],
        "explanation": "Subtract 2x from both sides to get 3x − 4 = 11, add 4 to get 3x = 15, then divide by 3 to get x = 5."
      },
      {
        "type": "short",
        "question": "What is the final 4-digit vault code found by solving all four locks in the mini-project?",
        "answer": "2358",
        "acceptable": [
          "2,3,5,8",
          "2-3-5-8"
        ],
        "explanation": "The four locks solve to x = 2, x = 3, x = 5, and x = 8 in order, forming the code 2358."
      }
    ]
  },
  {
    "id": "2.1",
    "number": 1,
    "title": "What is a program? — instructions, Python, print(), and comments",
    "objectives": [
      "Explain what a computer program is as a precise, ordered list of instructions",
      "Describe what Python is and how a Python program runs, one line at a time",
      "Use print() to display text on the screen",
      "Write comments with # to leave notes that Python ignores"
    ],
    "explanation": [
      "A computer program is nothing more than a list of exact instructions, carried out one at a time, in the exact order they're written. Think of a recipe: \"crack two eggs into a bowl, whisk for 30 seconds, add a cup of flour.\" A recipe only works if every step is precise and unambiguous — a computer is even less forgiving than a home cook. It has zero common sense and makes zero guesses about what you \"probably meant.\" If an instruction is missing, out of order, or the tiniest bit unclear, the computer either does the wrong thing or refuses to run at all. Learning to program is really learning to think in precise, ordered steps — a skill that turns out to be useful far beyond computers.",
      "Python is one particular language for writing those instructions. There are many programming languages, but Python is a great place to start because it's designed to read almost like plain English, without a lot of extra symbols cluttering up the page. A Python program is just a plain text file full of instructions, called statements, and when you run it, the computer reads and carries out those statements from top to bottom, one line after another — the exact same way you'd read a page of a book, left to right, top to bottom, never skipping ahead or jumping backward unless a later lesson explicitly tells it to.",
      "The very first tool you'll use constantly is print(). It's a built-in command Python already understands — you don't have to build it yourself — and its job is simple: display whatever you put inside its parentheses on the screen. print('Hello, world!') shows the text Hello, world! Notice the text sits inside quotation marks; that tells Python \"this is literal text, show it exactly as written,\" not an instruction to carry out. A program can contain many print() statements, and they run in order just like every other line — the first print() in the file shows its message first, the second shows its message second, and so on.",
      "One last essential tool: comments. Any line that starts with a # symbol is a comment, and Python skips over it completely — it produces no output and has zero effect on what the program does. Comments exist purely for humans: to leave yourself (or anyone else reading the code later) a plain-English note about what a tricky bit of code is doing or why. # this line prints a greeting is a comment; Python's eyes glide right past it as if it weren't there. Getting into the habit of writing a short comment to explain your reasoning — the same habit that makes a worked math solution easy to follow — will make your programs far easier to read, debug, and come back to later."
    ],
    "example": {
      "problem": "Predict exactly what this program prints, line by line:\nprint('Starting program')\n# this line is a comment, Python skips it\nprint('All done')",
      "steps": [
        "Line 1 is a print() statement, so Python runs it immediately: it displays Starting program on the screen.",
        "Line 2 begins with #, so it's a comment — Python skips it entirely and produces no output for it.",
        "Line 3 is another print() statement, so Python runs it: it displays All done on the screen.",
        "The program has no more lines, so it stops."
      ],
      "answer": "The program prints two lines total: Starting program, then All done. The comment produces no output at all."
    },
    "practice": [
      {
        "problem": "What does print('Hi there!') display on the screen?",
        "solution": "It displays exactly the text inside the quotes, with the quotes themselves not shown: Hi there!"
      },
      {
        "problem": "How many lines of output does this program produce?\n# print the total\nprint('Total: 10')\n# end of program",
        "solution": "One line of output. Both lines starting with # are comments and are skipped; only the single print() statement produces output: Total: 10."
      },
      {
        "problem": "Predict the output, in order:\nprint('One')\nprint('Two')\nprint('Three')",
        "solution": "Python runs statements top to bottom, so it prints, in order: One, then Two, then Three — each on its own line."
      },
      {
        "problem": "Why can't a computer just \"figure out\" a vague or missing instruction the way a person might?",
        "solution": "A computer has no common sense or judgment of its own — it can only carry out exactly what it's told, in exactly the order it's told. If an instruction is missing or unclear, it does the wrong thing or fails, rather than guessing what a person probably meant."
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "question": "What is a computer program?",
        "choices": [
          "A precise, ordered list of instructions the computer carries out one at a time",
          "A random collection of ideas the computer interprets however it likes",
          "A single instruction that runs forever",
          "A picture of what an app should look like"
        ],
        "answerIndex": 0,
        "explanation": "A program is an exact, ordered sequence of instructions — the computer follows each one precisely, in order, with no guessing."
      },
      {
        "type": "mc",
        "question": "What does print('Score: 5') do?",
        "choices": [
          "Displays the text Score: 5 on the screen",
          "Adds 5 to a variable called Score",
          "Deletes the text Score: 5",
          "Does nothing, since it starts with a lowercase letter"
        ],
        "answerIndex": 0,
        "explanation": "print() displays whatever text is inside its parentheses exactly as written."
      },
      {
        "type": "short",
        "question": "What symbol starts a comment line in Python?",
        "answer": "#",
        "acceptable": [
          "#",
          "hashtag",
          "pound sign"
        ],
        "explanation": "A line starting with # is a comment, and Python ignores it completely — it produces no output."
      },
      {
        "type": "short",
        "question": "How many lines does this program print?\nprint('A')\n# print('B')\nprint('C')",
        "answer": "2",
        "acceptable": [
          "2",
          "two"
        ],
        "explanation": "The middle line starts with #, so it's a comment and is skipped — even though it looks like a print() statement, Python never runs it. Only lines 1 and 3 actually print, giving 2 lines of output: A and C."
      },
      {
        "type": "mc",
        "question": "In what order does Python run the statements in a program?",
        "choices": [
          "Top to bottom, one at a time, in the order they're written",
          "Bottom to top",
          "In a random order each time",
          "All at the exact same instant"
        ],
        "answerIndex": 0,
        "explanation": "Python reads and executes a program from top to bottom, one statement after another, unless a later lesson's tool (like a loop) changes that flow."
      }
    ]
  },
  {
    "id": "2.2",
    "number": 2,
    "title": "Variables — storing values with a name",
    "objectives": [
      "Explain what a variable is and how assignment (=) stores a value in one",
      "Distinguish Python's = (assignment) from the math meaning of =",
      "Apply Python's variable naming rules",
      "Trace how a variable's value changes after reassignment"
    ],
    "explanation": [
      "Back in Phase 1, you met the idea of a variable as a box that holds a number you don't know yet — an unknown you solve for. Python variables borrow that same \"box\" picture, but with a twist: instead of solving for what's already inside, you get to choose what goes in, and you can even swap it out for something else later. A Python variable is a named storage spot that holds a value — a number, a piece of text, anything — so you can refer back to it by name instead of retyping the value every time.",
      "You create a variable with an assignment statement: age = 12. Read this from right to left in your head: \"take the value 12, and store it in a box named age.\" This is the single most important thing to get right early on, because Python's = does NOT mean the same thing as the = you've used since Phase 1. In math, x + 3 = 7 is a statement claiming two things are equal, and your job is to figure out what makes that true. In Python, = is not a claim at all — it's a command: \"compute whatever's on the right, then store that value into the name on the left.\" There's no equation to solve and nothing being claimed as equal; it's purely an instruction to save a value under a name.",
      "Variable names follow a few firm rules: they can use letters, digits, and underscores, but can't start with a digit (age2 is fine, 2age is not), and they're case-sensitive, meaning Age and age are treated as two completely different variables. Spaces aren't allowed inside a name either — use an underscore instead, like total_score. Beyond the rules, good practice matters too: a name like x tells a reader nothing, while score or total_score describes what the value actually represents — exactly like choosing a clear label instead of a mystery box.",
      "A variable can be reassigned — given a brand-new value that replaces the old one, with the old value simply gone, unrecoverable unless you saved it somewhere else first. Picture a whiteboard instead of a diary: writing a new number on the whiteboard erases whatever was there before, while a diary keeps every past entry. age = 12 followed later by age = 13 leaves age holding only 13; there's no built-in memory of the earlier 12. You can even use a variable's own current value to compute its new one, like score = score + 3, which is read the same instructive way: \"take the current value of score, add 3 to it, and store that new result back into score\" — not an equation claiming score equals score plus 3 (which would be impossible), but a two-step instruction: compute, then store."
    ],
    "example": {
      "problem": "Predict what this program prints:\nname = 'Maya'\nscore = 87\nscore = score + 3\nprint(score)",
      "steps": [
        "Line 1 stores the text 'Maya' into a variable named name. It's never used again in this program, but that's allowed.",
        "Line 2 stores the number 87 into a variable named score.",
        "Line 3 is a reassignment: Python first computes the right side using score's CURRENT value (87 + 3 = 90), then stores that new result, 90, into score, overwriting the old value of 87.",
        "Line 4 prints score's current value, which is now 90."
      ],
      "answer": "90 — the earlier value of 87 is completely overwritten by the reassignment."
    },
    "practice": [
      {
        "problem": "After running x = 5 followed by x = x + 10, what value does x hold?",
        "solution": "Python computes the right side using x's current value first: 5 + 10 = 15. That result, 15, is then stored into x, overwriting the 5. x now holds 15."
      },
      {
        "problem": "Which of these is a valid Python variable name: 2total, total_2, or total 2?",
        "solution": "total_2 is valid. 2total is invalid because it starts with a digit. total 2 is invalid because it contains a space (an underscore would be needed instead)."
      },
      {
        "problem": "Predict the final value of coins after this program runs:\ncoins = 10\ncoins = 25\ncoins = coins + 5\nprint(coins)",
        "solution": "coins is set to 10, then immediately overwritten to 25 (the 10 is gone). Then coins = coins + 5 uses the current value, 25, giving 25 + 5 = 30, which is stored back into coins. Final value: 30."
      },
      {
        "problem": "Explain in your own words why age = age + 1 is not a math equation, even though it uses the = symbol.",
        "solution": "In Python, = is an instruction to store a value, not a claim that two things are equal. age = age + 1 tells Python to take age's current value, add 1 to it, and store that new result back into age — it's a two-step command (compute, then store), not an equation being solved. As a math equation, age = age + 1 would have no solution, since no number equals itself plus 1."
      },
      {
        "problem": "Are Score and score the same variable in Python? Why or why not?",
        "solution": "No. Python variable names are case-sensitive, so Score and score are two completely separate variables, even though they look almost identical to a human reader."
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "question": "What does the statement total = 20 do in Python?",
        "choices": [
          "Stores the value 20 in a variable named total",
          "Checks whether total already equals 20",
          "Solves for the unknown value of total",
          "Prints the number 20 to the screen"
        ],
        "answerIndex": 0,
        "explanation": "Python's = is an assignment instruction: it stores the value on the right into the variable named on the left. It doesn't check or solve anything."
      },
      {
        "type": "mc",
        "question": "Which variable name is INVALID in Python?",
        "choices": [
          "3rd_place",
          "third_place",
          "thirdPlace",
          "_third"
        ],
        "answerIndex": 0,
        "explanation": "Variable names can't start with a digit, so 3rd_place is invalid. The others are all legal Python names."
      },
      {
        "type": "short",
        "question": "After x = 4 then x = x * 2, what value does x hold?",
        "answer": "8",
        "acceptable": [
          "8"
        ],
        "explanation": "Python computes the right side with x's current value first: 4 * 2 = 8. That result is stored back into x."
      },
      {
        "type": "short",
        "question": "In one short sentence, how is Python's = different from the = used in a math equation?",
        "answer": "Python's = stores a value into a variable (an instruction), while math's = states that two things are equal.",
        "acceptable": [
          "assignment not equality",
          "it stores a value instead of stating equality",
          "it's a command to store, not a claim of equality"
        ],
        "explanation": "Math's = makes a claim that both sides are equal and asks you to solve for an unknown. Python's = is a command: compute the right side, then store that result into the variable named on the left."
      },
      {
        "type": "mc",
        "question": "After running coins = 5 then coins = 12, what does print(coins) show?",
        "choices": [
          "12",
          "5",
          "17",
          "coins"
        ],
        "answerIndex": 0,
        "explanation": "The second assignment overwrites the first — the earlier value of 5 is gone, and coins now holds only 12."
      }
    ]
  },
  {
    "id": "2.3",
    "number": 3,
    "title": "Data types — int, float, str, bool, and type()",
    "objectives": [
      "Identify the four basic Python data types: int, float, str, bool",
      "Explain how quotes make a value a str, even if it looks like a number",
      "Use type() to check what type a value is",
      "Explain why data types matter for how Python treats a value"
    ],
    "explanation": [
      "Every value in Python belongs to a type — a category that describes what kind of value it is and what you're allowed to do with it. You'll start with four basic types. int (short for \"integer\") is a whole number, positive or negative, exactly the whole and negative numbers from Phase 1 — 7, 0, and -42 are all ints. float is a number with a decimal point, matching the decimals from Phase 1 — 3.14 and -0.5 are floats. Even a number like 4.0, which looks like a whole number, is a float in Python simply because it's written with a decimal point.",
      "str (short for \"string,\" as in a string of characters) is text — any sequence of characters wrapped in quotes, either single quotes or double quotes; Python treats 'hello' and \"hello\" as exactly the same, as long as the quote marks on each end match. This means a number can secretly be text: '5' (in quotes) is a str, not an int, even though it looks like a number to your eye. Python doesn't peek inside the quotes and guess — anything in quotes is text, full stop, and you can't directly do math with it the way you can with a real int or float (a later lesson will show how to convert between them on purpose).",
      "bool (short for \"Boolean,\" named after the mathematician George Boole) has only two possible values: True and False, always capitalized exactly like that and never in quotes. A bool represents a yes/no, on/off, true/false state, and you'll meet it constantly starting in the next few lessons, once you start asking Python questions like \"is this number bigger than that one?\"",
      "To check what type a value actually is, Python gives you a built-in tool called type(). type(5) reports int, type(5.0) reports float, type('5') reports str, and type(True) reports bool. Types matter because the exact same operator can behave completely differently depending on the types involved — adding two ints gives you a bigger int, but (as you'll see in an upcoming lesson) \"adding\" two strings glues them together as text instead of computing a sum. Knowing a value's type tells you exactly what kind of behavior to expect from it."
    ],
    "example": {
      "problem": "What does type() report for each of these: 12, 12.5, '12', True?",
      "steps": [
        "12 has no decimal point and isn't in quotes, so it's a whole number: type(12) is int.",
        "12.5 has a decimal point, so it's a decimal number: type(12.5) is float.",
        "'12' is wrapped in quotes, so no matter what characters are inside, Python treats it as text: type('12') is str.",
        "True is one of the two special capitalized values with no quotes: type(True) is bool."
      ],
      "answer": "12 is int, 12.5 is float, '12' is str, and True is bool."
    },
    "practice": [
      {
        "problem": "What type is the value -8?",
        "solution": "It's a whole number with no decimal point, so it's an int (Python ints can be negative, matching the negative numbers from Phase 1)."
      },
      {
        "problem": "What type is the value 0.0?",
        "solution": "It has a decimal point, so it's a float — even though it looks like it could be a whole number, the decimal point makes it a float in Python."
      },
      {
        "problem": "What type is the value \"9\" (in quotes)?",
        "solution": "It's wrapped in quotes, so Python treats it purely as text — it's a str, not an int, even though every character inside looks like a digit."
      },
      {
        "problem": "What does type(False) report?",
        "solution": "bool — False (along with True) is one of the two possible values of the bool type."
      },
      {
        "problem": "Why can't you directly add the values 5 and '5' together as numbers in Python?",
        "solution": "5 is an int, but '5' is a str (text) because it's in quotes. Even though they look similar, they're different types, and Python won't automatically treat text as a number for math — you'd need to deliberately convert '5' into an int first."
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "question": "Which value is a float?",
        "choices": [
          "7.0",
          "7",
          "'7'",
          "True"
        ],
        "answerIndex": 0,
        "explanation": "7.0 has a decimal point, which makes it a float in Python, even though it represents a whole-number amount."
      },
      {
        "type": "mc",
        "question": "What are the only two possible values of a bool?",
        "choices": [
          "True and False",
          "1 and 0 only, never words",
          "'True' and 'False' in quotes",
          "Yes and No"
        ],
        "answerIndex": 0,
        "explanation": "A bool can only ever be True or False, written exactly that way — capitalized, and never in quotes."
      },
      {
        "type": "short",
        "question": "What type is the value 3.14?",
        "answer": "float",
        "acceptable": [
          "float"
        ],
        "explanation": "3.14 has a decimal point, so it's a float."
      },
      {
        "type": "short",
        "question": "What built-in tool would you use to check what type a value is?",
        "answer": "type()",
        "acceptable": [
          "type()",
          "type"
        ],
        "explanation": "type() is Python's built-in tool for reporting a value's type, e.g. type(5) reports int."
      },
      {
        "type": "mc",
        "question": "Why is '42' (in quotes) a str instead of an int, even though it looks like a number?",
        "choices": [
          "Anything inside quotes is treated as text, no matter what characters it contains",
          "42 is too big to be an int",
          "Python randomly decides the type each time",
          "Quotes always mean the value is a float"
        ],
        "answerIndex": 0,
        "explanation": "Python doesn't examine what's inside quotes to decide the type — quotes always mean \"this is text,\" so '42' is a str regardless of what it looks like."
      }
    ]
  },
  {
    "id": "2.4",
    "number": 4,
    "title": "Arithmetic operators — +, -, *, /, //, %, ** and order of operations",
    "objectives": [
      "Use Python's arithmetic operators, including // (floor division) and % (modulo)",
      "Apply PEMDAS order of operations rules inside Python expressions",
      "Explain the difference between Python's ** and the ^ symbol used in math notation",
      "Predict whether / gives an int or float result"
    ],
    "explanation": [
      "Python supports the same basic arithmetic you already know from Phase 1: + for addition, - for subtraction, * for multiplication, and / for division. And the same PEMDAS order of operations rules from Phase 1's very first lessons apply exactly the same way inside a line of Python code: parentheses first, then exponents, then multiplication and division (left to right), then addition and subtraction (left to right). Python didn't invent a new order of operations — it uses the exact same one you already know.",
      "There's one important notation trap to watch for. In math class, you might write an exponent with a caret, like 4^2. In Python, the ^ symbol means something else entirely (a rarely-used operation on the binary representation of numbers, well outside this course), so using it for \"to the power of\" gives a wrong and confusing result. Python's actual exponent operator is two asterisks together: **. So \"4 squared\" is written 4 ** 2 in code, which evaluates to 16. This mix-up — typing ^ out of math-class habit — is one of the single most common early Python mistakes, so it's worth building the correct habit now: always use ** for exponents in code.",
      "Python also gives you two operators with no direct equivalent from Phase 1, both built from ordinary division-with-a-remainder. Imagine splitting 17 candies evenly among 5 friends: each friend gets 3 whole candies, with 2 candies left over that can't be split evenly. Floor division, written //, gives you just that whole-number part: 17 // 5 is 3. Modulo, written %, gives you just the leftover remainder: 17 % 5 is 2. These come up constantly in real programs — for example, a number is even exactly when dividing it by 2 leaves nothing left over, so number % 2 == 0 is a common way to test for that (you'll meet == properly in a later lesson).",
      "One more detail worth knowing up front: regular division, /, always produces a float result in Python, even when the division comes out perfectly even. 10 / 2 gives 5.0, not the int 5 — the decimal point is always there for regular division. Floor division, //, is different: it always chops off any leftover and gives you just the whole-number part (for positive numbers, this is the same as the // 5 = 3 candy-splitting example above). Keeping / (always gives a float, keeps any decimal) and // (always gives the truncated whole-number part) straight in your head will save you from a lot of confusing bugs later on."
    ],
    "example": {
      "problem": "Evaluate these two Python expressions: 3 + 4 * 2 ** 2, and 17 // 5, and 17 % 5",
      "steps": [
        "For 3 + 4 * 2 ** 2, apply PEMDAS: exponent first, 2 ** 2 = 4.",
        "The expression is now 3 + 4 * 4. Multiplication next: 4 * 4 = 16.",
        "The expression is now 3 + 16. Addition last: 3 + 16 = 19.",
        "For 17 // 5, this is floor division: how many whole times does 5 fit into 17? 5 fits 3 whole times (3 * 5 = 15), so 17 // 5 = 3.",
        "For 17 % 5, this is the remainder left over: 17 − 15 = 2, so 17 % 5 = 2."
      ],
      "answer": "3 + 4 * 2 ** 2 is 19. 17 // 5 is 3. 17 % 5 is 2."
    },
    "practice": [
      {
        "problem": "Evaluate 2 + 3 * 4 ** 2 in Python.",
        "solution": "Exponent first: 4 ** 2 = 16. Multiplication next: 3 * 16 = 48. Addition last: 2 + 48 = 50."
      },
      {
        "problem": "Evaluate 20 // 6 and 20 % 6.",
        "solution": "6 fits into 20 a total of 3 whole times (3 * 6 = 18), so 20 // 6 = 3. The leftover is 20 − 18 = 2, so 20 % 6 = 2."
      },
      {
        "problem": "What does 9 / 3 evaluate to in Python, and what type is the result?",
        "solution": "9 / 3 evaluates to 3.0, and its type is float — regular division (/) always gives a float result in Python, even when the division is exact."
      },
      {
        "problem": "A student writes 5^2 in their Python code expecting to get 25. What actually goes wrong, and how should they fix it?",
        "solution": "In Python, ^ is not the exponent operator (it means something unrelated). To compute 5 squared, they need to use two asterisks instead: 5 ** 2, which correctly evaluates to 25."
      },
      {
        "problem": "Use % to determine whether 14 is even (leaves no remainder when divided by 2).",
        "solution": "14 % 2 gives the remainder when 14 is divided by 2. Since 14 divides evenly by 2 (2 * 7 = 14), the remainder is 0, so 14 % 2 = 0, confirming 14 is even."
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "question": "How do you write \"6 to the power of 2\" in Python code?",
        "choices": [
          "6 ** 2",
          "6 ^ 2",
          "6 * 2",
          "6 // 2"
        ],
        "answerIndex": 0,
        "explanation": "Python's exponent operator is **, not ^ (which means something else entirely). 6 ** 2 evaluates to 36."
      },
      {
        "type": "mc",
        "question": "What does 13 // 4 evaluate to?",
        "choices": [
          "3",
          "3.25",
          "1",
          "4"
        ],
        "answerIndex": 0,
        "explanation": "4 fits into 13 a total of 3 whole times (3 * 4 = 12), with 1 left over, so floor division gives just the whole part: 13 // 4 = 3."
      },
      {
        "type": "short",
        "question": "What does 13 % 4 evaluate to?",
        "answer": "1",
        "acceptable": [
          "1"
        ],
        "explanation": "4 fits into 13 three whole times (3 * 4 = 12), leaving a remainder of 13 − 12 = 1, so 13 % 4 = 1."
      },
      {
        "type": "short",
        "question": "Evaluate (2 + 3) ** 2 in Python.",
        "answer": "25",
        "acceptable": [
          "25"
        ],
        "explanation": "Parentheses first: 2 + 3 = 5. Then the exponent: 5 ** 2 = 25."
      },
      {
        "type": "mc",
        "question": "What type does 8 / 4 evaluate to in Python, even though the division comes out perfectly even?",
        "choices": [
          "float (2.0)",
          "int (2)",
          "str",
          "bool"
        ],
        "answerIndex": 0,
        "explanation": "Regular division with / always produces a float result in Python, so 8 / 4 gives 2.0, not the int 2."
      }
    ]
  },
  {
    "id": "2.5",
    "number": 5,
    "title": "Strings — concatenation, repetition, len(), and f-strings",
    "objectives": [
      "Combine strings with + (concatenation) and repeat them with *",
      "Explain why mixing str and int directly with + causes an error",
      "Use f-strings to insert variable values into text",
      "Use len() to find how many characters are in a string"
    ],
    "explanation": [
      "You already know from the last lesson that a str is text in quotes, and that operators can behave differently depending on type. + between two strings doesn't add anything numerically — it glues them together end to end, a process called concatenation. 'Hello' + 'World' produces 'HelloWorld' — notice there's no space between them, because + only joins exactly what's there; if you want a space, you have to include one yourself, like 'Hello' + ' ' + 'World', which gives 'Hello World'.",
      "* between a string and an int repeats the string that many times, joined back to back. This connects directly to an idea from Phase 1's very first lessons: multiplication as repeated addition. String repetition is quite literally repeated concatenation — 'ab' * 3 is exactly the same as writing 'ab' + 'ab' + 'ab', giving 'ababab'. It's the same multiplication idea, just applied to text instead of numbers.",
      "Mixing a str and an int directly with + causes an error, because Python refuses to guess whether you mean \"add them as numbers\" or \"glue them as text.\" 'Score: ' + 87 fails outright — you can't concatenate a str with an int. To fix it, you have to explicitly convert the number to text first using str(): 'Score: ' + str(87) correctly produces 'Score: 87'. That works, but there's a much more convenient tool built for exactly this: f-strings. Put the letter f immediately before the opening quote, and anything inside curly braces {} gets automatically evaluated and converted to text and inserted right there. f'Score: {score}' does the same job as the str() version above, but more directly and readably, and it works for any variable, not just numbers — you'll use f-strings constantly from here on.",
      "One more useful built-in tool for strings: len(), which reports how many characters are in a string, counting every letter, space, and punctuation mark. len('hello') is 5. len('Hi there!') is 9 — 2 letters, a space, 5 letters, and the exclamation mark, all counted. len() will come back in a later lesson doing a very similar job for a different kind of value, so it's worth remembering what question it always answers: \"how many things are in this?\""
    ],
    "example": {
      "problem": "Predict the output of this program:\nname = 'Alex'\nscore = 92\nprint('Name: ' + name)\nprint(f'{name} scored {score} points')\nprint('-' * 10)",
      "steps": [
        "Line 3 concatenates the str 'Name: ' with the str stored in name ('Alex'), giving 'Name: Alex', which is printed.",
        "Line 4 is an f-string: {name} is replaced with Alex and {score} is replaced with 92 (converted to text automatically), giving 'Alex scored 92 points', which is printed.",
        "Line 5 repeats the string '-' ten times, giving '----------', which is printed."
      ],
      "answer": "The program prints three lines: Name: Alex, then Alex scored 92 points, then ----------"
    },
    "practice": [
      {
        "problem": "What does 'Cat' + 'fish' evaluate to?",
        "solution": "Concatenation glues the two strings directly together with nothing in between: 'Catfish'."
      },
      {
        "problem": "What does 'ha' * 4 evaluate to?",
        "solution": "The string 'ha' is repeated 4 times back to back, exactly like 'ha' + 'ha' + 'ha' + 'ha': 'hahahaha'."
      },
      {
        "problem": "A student writes 'Total: ' + 25 and gets an error. Explain what went wrong and how to fix it.",
        "solution": "'Total: ' is a str and 25 is an int — Python won't concatenate a str with an int directly, since it can't tell whether you mean addition or text-joining. Fixing it requires converting the number to text first: 'Total: ' + str(25), or more simply, an f-string: f'Total: {25}'."
      },
      {
        "problem": "Given age = 12, what does f'I am {age} years old' evaluate to?",
        "solution": "The f-string inserts age's current value, 12, in place of {age}: 'I am 12 years old'."
      },
      {
        "problem": "What does len('Python') evaluate to?",
        "solution": "len() counts every character in the string. 'Python' has 6 letters, so len('Python') is 6."
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "question": "What does 'Sun' + 'flower' evaluate to?",
        "choices": [
          "'Sunflower'",
          "'Sun flower'",
          "'flowerSun'",
          "An error"
        ],
        "answerIndex": 0,
        "explanation": "+ between two strings concatenates them exactly as written, with no space added automatically: 'Sunflower'."
      },
      {
        "type": "mc",
        "question": "Why does 'Points: ' + 10 cause an error in Python?",
        "choices": [
          "You can't directly concatenate a str and an int with + — Python won't guess which one you mean",
          "The colon inside the string is not allowed",
          "10 is too large a number for +",
          "Python doesn't support the + operator at all"
        ],
        "answerIndex": 0,
        "explanation": "+ between a str and an int is not allowed directly, since Python refuses to guess whether you want numeric addition or text-joining. The int must be converted to a str first, e.g. with str(10), or an f-string can be used instead."
      },
      {
        "type": "short",
        "question": "Given score = 88, what does f'Score: {score}' evaluate to (as a string)?",
        "answer": "Score: 88",
        "acceptable": [
          "Score: 88",
          "'Score: 88'"
        ],
        "explanation": "The f-string automatically converts score's current value, 88, to text and inserts it in place of {score}."
      },
      {
        "type": "short",
        "question": "What does len('coding') evaluate to?",
        "answer": "6",
        "acceptable": [
          "6"
        ],
        "explanation": "len() counts every character in the string. 'coding' has 6 letters, so the result is 6."
      },
      {
        "type": "mc",
        "question": "What does '='  * 5 evaluate to?",
        "choices": [
          "'====='",
          "'5555='",
          "25",
          "An error"
        ],
        "answerIndex": 0,
        "explanation": "* between a string and an int repeats the string that many times back to back: '=' repeated 5 times is '====='."
      }
    ]
  },
  {
    "id": "2.6",
    "number": 6,
    "title": "input() and converting types with int() and float()",
    "objectives": [
      "Use input() to read text typed by the user",
      "Explain why input() always returns a str, even when digits are typed",
      "Convert user input to int or float using int() and float()",
      "Combine input(), conversion, variables, and f-strings in a small interactive program"
    ],
    "explanation": [
      "So far, every value in your programs has been fixed right there in the code. input() lets a program pause, wait for a person to type something and press enter, and then hands back whatever they typed. name = input('What is your name? ') displays the message 'What is your name? ', waits for the user to type a response, and stores whatever they typed into the variable name.",
      "Here's the detail that trips people up: input() ALWAYS returns a str, no matter what the user types — even if they type digits like 12, the value stored is the str '12', not the int 12. This matters because, as you saw two lessons ago, you can't do math directly with a str. If a program asks for someone's age and then tries to do age + 1 without converting first, it will fail, because age is holding the str '12', not a usable number.",
      "The fix is to convert deliberately, using the same idea from the strings lesson but in reverse: int() converts a str made of digits into an int, and float() converts a str into a float. age = int(input('How old are you? ')) does both steps in a single line — it reads the typed text, then immediately hands the whole result to int(), converting it before storing the final int value into age. From that point on, age behaves like any other int: you can add to it, compare it, and so on.",
      "One thing worth knowing, without needing to worry about it deeply yet: if the text typed isn't actually a valid number — like someone typing 'banana' when int() expects digits — the conversion will fail. For now, just build the habit of converting input() any time you plan to do math with it, and leaving it as plain str whenever you just want to work with it as text (like someone's name). Combining input(), conversion, and the f-strings from the last lesson lets you write small, genuinely interactive programs — the kind that respond differently depending on what a real person types in."
    ],
    "example": {
      "problem": "A program runs this code, and the user types 15 when asked their age:\nage = int(input('How old are you? '))\nnext_year = age + 1\nprint(f'Next year you will be {next_year}')\nWhat does it print?",
      "steps": [
        "input('How old are you? ') displays the prompt and waits; the user types 15, so input() returns the str '15'.",
        "int('15') converts that str into the int 15, which is stored into age.",
        "next_year = age + 1 computes 15 + 1 = 16 (this works because age is now a real int, not a str) and stores 16 into next_year.",
        "The f-string inserts next_year's value, 16, into the message."
      ],
      "answer": "The program prints: Next year you will be 16"
    },
    "practice": [
      {
        "problem": "Why does this code fail if age was created with age = input('Age? ') (without int())?\nnext_age = age + 1",
        "solution": "input() always returns a str, so age holds the str version of whatever was typed, like '12', not the int 12. You can't add an int (1) directly to a str with +, so age + 1 fails. Wrapping the input() call in int() would fix it: age = int(input('Age? '))."
      },
      {
        "problem": "A program reads a price with price = float(input('Price? ')) and the user types 4.5. What value and type does price hold?",
        "solution": "input() returns the str '4.5', and float() converts it into the float 4.5. price holds the float 4.5."
      },
      {
        "problem": "Write the single line of code that reads a whole number of tickets from the user (prompt: 'How many tickets? ') and stores it as an int in a variable called tickets.",
        "solution": "tickets = int(input('How many tickets? '))"
      },
      {
        "problem": "If a program only ever needs someone's name as text and never does math with it, does it need int() or float() around the input() call?",
        "solution": "No — since input() already returns a str, and a name is meant to stay as text, no conversion is needed at all: name = input('Name? ') is enough."
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "question": "What type of value does input() always return, no matter what the user types?",
        "choices": [
          "str",
          "int",
          "float",
          "bool"
        ],
        "answerIndex": 0,
        "explanation": "input() always returns a str, even if the user types only digits — converting it to a number requires int() or float() explicitly."
      },
      {
        "type": "mc",
        "question": "What does int(input('Score? ')) do, if the user types 90?",
        "choices": [
          "Reads '90' as text, then converts it to the int 90",
          "Reads it directly as the int 90 with no conversion needed",
          "Always fails because input() can't be combined with int()",
          "Converts it into a float, 90.0"
        ],
        "answerIndex": 0,
        "explanation": "input() first returns the str '90', and wrapping it in int() converts that str into the int 90 in the same line."
      },
      {
        "type": "short",
        "question": "If a program does x = input('Number? ') and the user types 7, what is the type of x?",
        "answer": "str",
        "acceptable": [
          "str",
          "string"
        ],
        "explanation": "Without wrapping in int() or float(), input() always returns a str, so x holds the str '7', not the int 7."
      },
      {
        "type": "short",
        "question": "Which built-in tool converts a str like '3.5' into a usable decimal number?",
        "answer": "float()",
        "acceptable": [
          "float()",
          "float"
        ],
        "explanation": "float() converts a str representing a decimal number into an actual float value that can be used in math."
      },
      {
        "type": "mc",
        "question": "Why can't you directly do math with the result of input() without converting it first?",
        "choices": [
          "input() always returns a str, and you can't do math directly with a str",
          "input() only works with negative numbers",
          "input() automatically deletes the value after use",
          "You actually can, no conversion is ever needed"
        ],
        "answerIndex": 0,
        "explanation": "input() always hands back a str, and (as covered in the strings lesson) a str can't be used directly in math the way an int or float can — it must be converted with int() or float() first."
      }
    ]
  },
  {
    "id": "2.7",
    "number": 7,
    "title": "Comparison operators — ==, !=, <, >, <=, >=",
    "objectives": [
      "Use Python's six comparison operators to compare values",
      "Explain the difference between = (assignment) and == (equality comparison)",
      "State that every comparison evaluates to a bool, True or False",
      "Apply comparisons to numbers, including negatives"
    ],
    "explanation": [
      "Two lessons back you learned that = stores a value into a variable — it's a command, not a question. To actually ask Python \"are these two things equal?\" you need a different, two-character operator: ==. age == 12 changes nothing at all; it simply evaluates to one of the two bool values from the data types lesson, True or False, answering the question \"is age currently equal to 12?\" A helpful habit going forward: read = as \"gets set to,\" and read == as \"is equal to?\" — keeping that mental split will prevent one of the most common bugs beginners run into.",
      "Python has six comparison operators in total, and each one, when evaluated, produces exactly one bool. == means \"equal to,\" and its opposite, != , means \"not equal to.\" < means \"less than,\" > means \"greater than,\" <= means \"less than or equal to,\" and >= means \"greater than or equal to.\" 5 == 5 evaluates to True. 5 == 6 evaluates to False. 7 != 3 evaluates to True, because 7 really isn't equal to 3.",
      "These comparisons work exactly the way you'd expect from the number line you built in Phase 1's negative numbers lessons — numbers further to the right are always greater. -5 < 2 evaluates to True, because -5 sits to the left of 2 on the number line, and \"left\" always means smaller. -5 > -10 also evaluates to True, since -5 sits to the right of -10 (less negative means bigger, exactly the reasoning you already practiced back then).",
      "Comparisons aren't limited to numbers either — Python can compare strings too, most commonly with == and != to check whether two pieces of text are identical, character for character (including matching capitalization: 'Cat' == 'cat' evaluates to False, since capital C and lowercase c are different characters). For now, the comparisons you'll use constantly are the numeric ones, and you'll put them to real use starting in the very next lesson, where a program's bool answer to a comparison decides which block of code actually runs."
    ],
    "example": {
      "problem": "Given x = 8, evaluate each of these: x == 8, x != 8, x < 10, x >= 9",
      "steps": [
        "x == 8 asks \"is x equal to 8?\" Since x currently holds 8, this evaluates to True.",
        "x != 8 asks \"is x NOT equal to 8?\" Since x does equal 8, this evaluates to False.",
        "x < 10 asks \"is x less than 10?\" Since 8 is less than 10, this evaluates to True.",
        "x >= 9 asks \"is x greater than or equal to 9?\" Since 8 is neither greater than nor equal to 9, this evaluates to False."
      ],
      "answer": "x == 8 is True, x != 8 is False, x < 10 is True, x >= 9 is False."
    },
    "practice": [
      {
        "problem": "Given temp = -4, evaluate temp < 0.",
        "solution": "-4 sits to the left of 0 on the number line, so -4 is less than 0: temp < 0 evaluates to True."
      },
      {
        "problem": "Given score = 75, evaluate score >= 80.",
        "solution": "75 is not greater than or equal to 80, so score >= 80 evaluates to False."
      },
      {
        "problem": "Given a = -3 and b = -7, evaluate a > b.",
        "solution": "On the number line, -3 sits to the right of -7 (it's less negative), so -3 is greater than -7: a > b evaluates to True."
      },
      {
        "problem": "What's the difference between what x = 5 does and what x == 5 does?",
        "solution": "x = 5 is an assignment: it stores the value 5 into the variable x, overwriting whatever was there before. x == 5 is a comparison: it doesn't change x at all, it just asks \"does x currently equal 5?\" and evaluates to True or False."
      },
      {
        "problem": "Given name = 'Sam', evaluate name == 'sam'.",
        "solution": "String comparisons with == check every character exactly, including capitalization. 'Sam' and 'sam' differ in the first letter's capitalization, so they are not equal: name == 'sam' evaluates to False."
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "question": "What does the expression 6 == 6 evaluate to?",
        "choices": [
          "True",
          "False",
          "6",
          "It stores 6 into a variable"
        ],
        "answerIndex": 0,
        "explanation": "== checks equality without changing anything, and 6 does equal 6, so the expression evaluates to the bool True."
      },
      {
        "type": "mc",
        "question": "What is the key difference between = and == in Python?",
        "choices": [
          "= stores a value into a variable; == asks whether two values are equal",
          "They mean exactly the same thing",
          "= is for text and == is for numbers",
          "== stores a value; = only compares"
        ],
        "answerIndex": 0,
        "explanation": "= is an assignment command that stores a value. == is a comparison that evaluates to True or False without changing anything."
      },
      {
        "type": "short",
        "question": "Given n = -2, what does n <= -2 evaluate to?",
        "answer": "True",
        "acceptable": [
          "True",
          "true"
        ],
        "explanation": "<= means \"less than or equal to.\" Since n is exactly -2, it is equal to -2, so n <= -2 evaluates to True."
      },
      {
        "type": "short",
        "question": "What type of value does every comparison (like <, ==, or >=) evaluate to?",
        "answer": "bool",
        "acceptable": [
          "bool",
          "boolean",
          "True or False"
        ],
        "explanation": "Every comparison evaluates to exactly one of the two bool values, True or False."
      },
      {
        "type": "mc",
        "question": "Given price = 12, which expression evaluates to True?",
        "choices": [
          "price != 15",
          "price == 15",
          "price < 12",
          "price > 12"
        ],
        "answerIndex": 0,
        "explanation": "price holds 12, which is indeed not equal to 15, so price != 15 evaluates to True. The other three are all False."
      }
    ]
  },
  {
    "id": "2.8",
    "number": 8,
    "title": "Boolean operators — and, or, not",
    "objectives": [
      "Combine comparisons using and, or, and not",
      "State the truth rule for each: and, or, not",
      "Predict the result of a compound boolean expression",
      "Use parentheses to group boolean expressions clearly"
    ],
    "explanation": [
      "A single comparison like age >= 13 asks one yes/no question. Often, though, a real decision depends on more than one condition at once — \"is this person a teenager?\" really means \"is their age 13 or more, AND is it also 19 or less?\" Python's boolean operators — and, or, not — let you combine bools (from comparisons, or from anywhere else) into a single, more complex True-or-False answer.",
      "and evaluates to True only when BOTH sides are True — if either side is False, the whole thing is False. age >= 13 and age <= 19 is True only for someone whose age satisfies both conditions at once; a 10-year-old fails the first condition, and a 25-year-old fails the second, so both would make the whole and expression False.",
      "or evaluates to True when AT LEAST ONE side is True — it only comes out False when both sides are False. day == 'Saturday' or day == 'Sunday' is True whenever day is either one (it doesn't need to be both, which wouldn't even be possible for a single value), and False only when day is neither.",
      "not flips a bool to its opposite — True becomes False, and False becomes True. This should feel familiar: it's the same \"undo the opposite\" idea from Phase 1's negative numbers lesson, where subtracting a negative flipped back to a positive, like a double negative canceling out. not (age >= 18) is True exactly when age >= 18 is False, i.e. when someone is under 18. Just like PEMDAS gives arithmetic operators a fixed priority order, Python evaluates not before and, and and before or, when there are no parentheses — but exactly like in math, you can always add parentheses to make the grouping explicit and unmistakable, which is usually the clearer choice anyway."
    ],
    "example": {
      "problem": "Given age = 15 and has_ticket = True, evaluate: age >= 13 and age <= 19, and evaluate: has_ticket or age >= 18",
      "steps": [
        "First, evaluate the two comparisons inside the and expression: age >= 13 is True (15 is at least 13), and age <= 19 is True (15 is at most 19).",
        "and requires both sides True to be True: True and True evaluates to True.",
        "Next, evaluate the or expression: has_ticket is already True (it doesn't need to be computed further), and age >= 18 is False (15 is not at least 18).",
        "or needs only one side True: True or False evaluates to True."
      ],
      "answer": "Both expressions evaluate to True."
    },
    "practice": [
      {
        "problem": "Given x = 4, evaluate x > 0 and x < 10.",
        "solution": "x > 0 is True (4 is greater than 0), and x < 10 is True (4 is less than 10). Since and needs both sides True: True and True evaluates to True."
      },
      {
        "problem": "Given x = 4, evaluate x < 0 or x > 100.",
        "solution": "x < 0 is False, and x > 100 is False. Since or needs at least one side True and neither is: False or False evaluates to False."
      },
      {
        "problem": "Given is_raining = False, evaluate not is_raining.",
        "solution": "not flips the bool to its opposite. is_raining is False, so not is_raining evaluates to True."
      },
      {
        "problem": "Given score = 55, evaluate score >= 60 and score < 70.",
        "solution": "score >= 60 is False (55 is not at least 60). Since one side of and is already False, the whole expression is False regardless of the other side — no need to even check it. Result: False."
      },
      {
        "problem": "Given age = 20, evaluate not (age < 18).",
        "solution": "First evaluate the inside: age < 18 is False (20 is not less than 18). Then not flips it: not False evaluates to True."
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "question": "When does an and expression evaluate to True?",
        "choices": [
          "Only when both sides are True",
          "When at least one side is True",
          "Always, no matter what",
          "Only when both sides are False"
        ],
        "answerIndex": 0,
        "explanation": "and requires both sides to be True; if either side is False, the whole expression is False."
      },
      {
        "type": "mc",
        "question": "Given p = True and q = False, what does p or q evaluate to?",
        "choices": [
          "True",
          "False",
          "p",
          "It cannot be determined"
        ],
        "answerIndex": 0,
        "explanation": "or only needs one side to be True. p is True, so p or q evaluates to True regardless of q."
      },
      {
        "type": "short",
        "question": "Given x = 5, what does not (x == 5) evaluate to?",
        "answer": "False",
        "acceptable": [
          "False",
          "false"
        ],
        "explanation": "x == 5 is True (x really does equal 5), and not flips True to False."
      },
      {
        "type": "short",
        "question": "Given n = 8, what does n > 0 and n < 5 evaluate to?",
        "answer": "False",
        "acceptable": [
          "False",
          "false"
        ],
        "explanation": "n > 0 is True, but n < 5 is False (8 is not less than 5). Since and requires both sides True, the result is False."
      },
      {
        "type": "mc",
        "question": "Which boolean operator flips True to False and False to True?",
        "choices": [
          "not",
          "and",
          "or",
          "=="
        ],
        "answerIndex": 0,
        "explanation": "not reverses a bool to its opposite value — the same \"undo\" idea as a double negative flipping back to positive."
      }
    ]
  },
  {
    "id": "2.9",
    "number": 9,
    "title": "if / else — making decisions and Python's indentation rule",
    "objectives": [
      "Write an if statement that runs code only when a condition is True",
      "Add an else block that runs when the condition is False",
      "Explain how Python uses indentation to group lines into a block",
      "Trace which block of an if/else actually runs, given a variable's value"
    ],
    "explanation": [
      "Every program you've written so far runs every single line, every single time, top to bottom, no exceptions. Real programs usually need to behave differently depending on the situation — show a \"you win\" message only if the score is high enough, or a different one otherwise. That's exactly what an if statement does: it runs a block of code only when a given condition (a bool, from the last two lessons) evaluates to True, and skips that block entirely when the condition is False.",
      "The syntax looks like this:\nif age >= 13:\n    print('Welcome, teen!')\nThe line starts with if, followed by a condition, followed by a colon (:). The line right after it, print('Welcome, teen!'), is indented — pushed in with extra spaces at the start of the line. That indentation is not just for looks: in Python, it's the actual rule that decides which lines belong \"inside\" the if. Unlike math, where grouping is shown with parentheses (from Phase 1's PEMDAS lesson), Python groups blocks of code purely by how far each line is indented. Every line indented directly under the if is part of what runs only when the condition is True; the moment a line goes back to the same indentation as the if itself, it's outside the block again, and runs regardless of the condition.",
      "else gives you the other branch: an optional partner block that runs exactly when the if's condition was False. \nif age >= 13:\n    print('Welcome, teen!')\nelse:\n    print('Welcome, kid!')\nHere, exactly one of the two print() lines runs each time the program executes — never both, never neither. If age is 15, the condition is True, so only the first message prints and the else block is skipped entirely; if age is 9, the condition is False, so only the second message prints.",
      "It helps to think of if/else the same way you think of the two branches of a fork in a path — you take exactly one of them, based on the True-or-False answer to a single question. As your programs grow, an entire block's worth of behavior can hinge on that one question, which is why getting the condition right (using the comparison and boolean operators from the last two lessons) and the indentation right (so Python knows exactly which lines belong to which branch) both matter enormously."
    ],
    "example": {
      "problem": "Predict what this program prints, given score = 42:\nif score >= 50:\n    print('You passed!')\nelse:\n    print('Keep practicing.')\nprint('Program finished.')",
      "steps": [
        "First, evaluate the condition: score >= 50. Since score is 42, this is False.",
        "Because the condition is False, the indented block right under if is skipped entirely — nothing from it runs.",
        "Because the condition was False, the indented block under else DOES run: print('Keep practicing.') executes.",
        "print('Program finished.') is not indented under either branch, so it always runs regardless of the condition, right after the if/else finishes."
      ],
      "answer": "The program prints two lines: Keep practicing. then Program finished."
    },
    "practice": [
      {
        "problem": "Given temp = 85, predict the output:\nif temp > 90:\n    print('Very hot')\nelse:\n    print('Not too bad')",
        "solution": "temp > 90 is False (85 is not greater than 90), so the else block runs instead: Not too bad."
      },
      {
        "problem": "Given x = 7, predict the output:\nif x % 2 == 0:\n    print('even')\nelse:\n    print('odd')",
        "solution": "x % 2 computes the remainder when 7 is divided by 2, which is 1, so x % 2 == 0 evaluates to False. The else block runs: odd."
      },
      {
        "problem": "What determines which lines are considered \"inside\" an if block in Python?",
        "solution": "Indentation. Every line indented directly under the if line (by the same consistent amount) is part of that block; a line that returns to the same indentation level as the if itself is no longer part of the block, no matter what it does."
      },
      {
        "problem": "Given has_key = True, predict the output:\nif has_key:\n    print('Door unlocked')\nelse:\n    print('Door stays locked')",
        "solution": "has_key is already a bool (True), so it can be used directly as the condition with no comparison needed — it evaluates to True, so the if block runs: Door unlocked."
      },
      {
        "problem": "In an if/else, is it possible for both blocks to run in the same pass through the code? Why or why not?",
        "solution": "No. The condition evaluates to exactly one of True or False, and exactly one branch corresponds to each outcome — so exactly one of the two blocks runs, never both and never neither."
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "question": "What decides which lines belong inside an if block in Python?",
        "choices": [
          "Indentation — how far the lines are pushed in from the left",
          "Parentheses around the lines",
          "The color of the text",
          "The order the lines were typed in"
        ],
        "answerIndex": 0,
        "explanation": "Python uses indentation, not parentheses or any other symbol, to group lines into a block that belongs to an if (or any other structure with a colon)."
      },
      {
        "type": "mc",
        "question": "Given n = 3, what does this print?\nif n > 5:\n    print('big')\nelse:\n    print('small')",
        "choices": [
          "small",
          "big",
          "Both small and big",
          "Nothing"
        ],
        "answerIndex": 0,
        "explanation": "n > 5 is False (3 is not greater than 5), so the else block runs, printing small."
      },
      {
        "type": "short",
        "question": "In an if/else statement, how many of the two blocks run during a single pass through the code?",
        "answer": "1",
        "acceptable": [
          "1",
          "one",
          "exactly one"
        ],
        "explanation": "Exactly one block runs — the if block when the condition is True, or the else block when it's False — never both, never neither."
      },
      {
        "type": "short",
        "question": "Given passed = True, what does this print?\nif passed:\n    print('Pass')\nelse:\n    print('Fail')",
        "answer": "Pass",
        "acceptable": [
          "Pass",
          "'Pass'"
        ],
        "explanation": "passed is already a bool with value True, so the if condition is True and its block runs, printing Pass."
      },
      {
        "type": "mc",
        "question": "What symbol must end the line that starts an if statement?",
        "choices": [
          "A colon (:)",
          "A semicolon (;)",
          "A period (.)",
          "An equals sign (=)"
        ],
        "answerIndex": 0,
        "explanation": "An if line always ends with a colon, which signals that an indented block follows."
      }
    ]
  },
  {
    "id": "2.10",
    "number": 10,
    "title": "if / elif / else — handling more than two outcomes",
    "objectives": [
      "Write an if/elif/else chain to handle three or more possible outcomes",
      "Explain that Python runs only the first True branch and skips the rest",
      "Order conditions correctly when ranges could overlap",
      "Trace which branch of a chain runs for a given value"
    ],
    "explanation": [
      "if/else only ever covers two outcomes — but plenty of real decisions have more than two. What if a program needs to sort a score into an A, B, C, or F range? Python's answer is elif, short for \"else if,\" which lets you check additional conditions in sequence, all part of the same chain: if / elif / elif / ... / else.",
      "if score >= 90:\n    print('A')\nelif score >= 80:\n    print('B')\nelif score >= 70:\n    print('C')\nelse:\n    print('F')\nPython checks the conditions from top to bottom, in order, and runs the block belonging to the FIRST one that evaluates to True — then it skips every remaining condition in the chain entirely, even if a later one would also have been True. This is the single most important rule to understand about elif chains, and it's exactly why the order of the conditions matters so much.",
      "Picture score = 95. The first condition, score >= 90, is True, so Python runs print('A') and then jumps straight past every remaining elif and the else, without even checking them. Now picture the conditions written in the wrong order: if score >= 70: ... elif score >= 90: ... — a 95 would get caught by score >= 70 (which is also True for 95) before ever reaching the score >= 90 check, incorrectly reporting a C instead of an A. Whenever ranges could overlap like this, the most restrictive or highest condition needs to come first in the chain, exactly so the right one gets caught before a looser one steals it.",
      "This top-to-bottom, first-match-wins behavior connects directly to how you evaluated expressions in Phase 1 by plugging a specific value in for x and working through the result — here, you're similarly \"plugging in\" the variable's current value against each condition in order, until you find the first one that comes out True. The else at the end is optional but a common safety net, catching any value that didn't match any of the conditions above it — for the grade example, anything below 70."
    ],
    "example": {
      "problem": "Given score = 82, trace this chain and predict what prints:\nif score >= 90:\n    print('A')\nelif score >= 80:\n    print('B')\nelif score >= 70:\n    print('C')\nelse:\n    print('F')",
      "steps": [
        "Check the first condition: score >= 90. Is 82 >= 90? No, this is False. Skip this block and move to the next condition.",
        "Check the next condition: score >= 80. Is 82 >= 80? Yes, this is True.",
        "Run the block belonging to this condition: print('B').",
        "Because a True condition was already found and its block ran, Python skips every remaining elif and the else entirely, without checking them."
      ],
      "answer": "The program prints: B"
    },
    "practice": [
      {
        "problem": "Given temp = 45, trace this chain:\nif temp >= 80:\n    print('hot')\nelif temp >= 50:\n    print('mild')\nelse:\n    print('cold')",
        "solution": "temp >= 80 is False (45 is not >= 80). temp >= 50 is also False (45 is not >= 50). Since neither condition was True, the else block runs: cold."
      },
      {
        "problem": "A student writes a grade chain but puts the conditions in this order: if score >= 70: ... elif score >= 90: .... For score = 95, what prints, and why is this a bug?",
        "solution": "score >= 70 is checked first and is True for 95, so its block runs and everything after (including the score >= 90 check) is skipped — a 95 incorrectly gets the score >= 70 result instead of the intended score >= 90 result. The conditions need to be reordered from highest to lowest so the more restrictive, higher check happens first."
      },
      {
        "problem": "Given n = 0, trace this chain:\nif n > 0:\n    print('positive')\nelif n < 0:\n    print('negative')\nelse:\n    print('zero')",
        "solution": "n > 0 is False (0 is not greater than 0). n < 0 is also False (0 is not less than 0). Neither condition matched, so the else block runs: zero."
      },
      {
        "problem": "In an if/elif/else chain, if the very first condition is True, does Python still check the remaining elif conditions?",
        "solution": "No. As soon as Python finds the first True condition, it runs that block and then skips every remaining elif and the else entirely — it never checks them, even if one of them would also have been True."
      },
      {
        "problem": "Given age = 17, trace this chain:\nif age >= 18:\n    print('adult')\nelif age >= 13:\n    print('teen')\nelse:\n    print('child')",
        "solution": "age >= 18 is False (17 is not >= 18). age >= 13 is True (17 is >= 13). This block runs: teen. The else is skipped since a True branch was already found."
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "question": "In an if/elif/else chain, how many blocks run during a single pass through the code?",
        "choices": [
          "At most one — the first one whose condition is True",
          "Every block whose condition is True",
          "Always all of them",
          "Always exactly the last elif"
        ],
        "answerIndex": 0,
        "explanation": "Python checks conditions top to bottom and runs only the block for the first True one, then skips the rest of the chain entirely."
      },
      {
        "type": "mc",
        "question": "Why must the highest/most restrictive condition come first when ranges could overlap?",
        "choices": [
          "Because Python stops checking after the first True condition, so a looser earlier condition could wrongly catch a value meant for a later, stricter one",
          "Because Python always checks conditions from bottom to top",
          "It doesn't matter what order the conditions are in",
          "Because elif requires conditions to be in alphabetical order"
        ],
        "answerIndex": 0,
        "explanation": "Since only the first True condition's block runs, a looser condition placed earlier would catch values that were meant to be caught by a stricter, later condition."
      },
      {
        "type": "short",
        "question": "Given score = 65, what prints? if score >= 90: print('A') / elif score >= 70: print('C') / else: print('F')",
        "answer": "F",
        "acceptable": [
          "F",
          "'F'"
        ],
        "explanation": "score >= 90 is False and score >= 70 is also False (65 is not >= 70), so neither elif matches and the else block runs, printing F."
      },
      {
        "type": "short",
        "question": "What keyword lets you check an additional condition after an if, as part of the same chain?",
        "answer": "elif",
        "acceptable": [
          "elif"
        ],
        "explanation": "elif (short for \"else if\") lets you add another condition to the same if/else chain."
      },
      {
        "type": "mc",
        "question": "Given x = 10, what prints? if x > 20: print('big') / elif x > 5: print('medium') / elif x > 0: print('small') / else: print('zero or negative')",
        "choices": [
          "medium",
          "big",
          "small",
          "zero or negative"
        ],
        "answerIndex": 0,
        "explanation": "x > 20 is False. x > 5 is True (10 is greater than 5), so this block runs, printing medium — the remaining elif and else are skipped even though x > 0 would also have been True."
      }
    ]
  },
  {
    "id": "2.11",
    "number": 11,
    "title": "for loops and range()",
    "objectives": [
      "Explain what a for loop does and why it avoids repeating code by hand",
      "Use range() to generate a sequence of numbers for a loop to run over",
      "Explain range()'s zero-start, exclusive-end behavior",
      "Use the loop variable inside a for loop's block"
    ],
    "explanation": [
      "Suppose you wanted to print 'Hello!' five times. You could write print('Hello!') five separate times, but that gets unwieldy fast — imagine needing it 500 times, or a number that isn't even known until the program runs. A for loop solves this: it repeats an indented block of code (using the same indentation rule from the if/else lesson) a set number of times, without you having to write that block out more than once. This is the same repeated-action idea behind multiplication as repeated addition, from all the way back in Phase 1's very first lessons — a loop is just \"do this thing over and over\" made explicit and controllable.",
      "The most common way to control how many times a for loop runs is with range(). range(5) produces the sequence of whole numbers 0, 1, 2, 3, 4 — five numbers in total. Two details are easy to trip over here, so it's worth stating them plainly: range() always starts counting at 0, not 1, and it stops just BEFORE the number you give it, never including it. range(5) gives you five numbers, but the last one is 4, not 5. \nfor i in range(5):\n    print(i)\nprints five lines: 0, 1, 2, 3, then 4 — one line per pass through the loop, with the loop variable i taking on each value in the sequence, in order.",
      "range() also accepts two or three arguments for more control. range(start, stop) counts from start up to (but not including) stop: range(2, 6) gives 2, 3, 4, 5. range(start, stop, step) additionally lets you control the size of each jump: range(0, 10, 2) counts by twos, giving 0, 2, 4, 6, 8. In every case, the ending number you give range() is never actually included in the sequence — the loop always stops one step short of it.",
      "The loop variable (i in the examples above — though it can be named anything, like count or n) is just a regular variable, created fresh and updated automatically by the loop itself on every pass. You can use it inside the block for anything you need — printing it, doing math with it, or simply ignoring it entirely if all you need is to repeat something a fixed number of times without caring which repeat you're currently on."
    ],
    "example": {
      "problem": "Predict the exact output of this program:\nfor i in range(3):\n    print(f'Lap {i}')\nprint('Done!')",
      "steps": [
        "range(3) produces the sequence 0, 1, 2 — three numbers, starting at 0, stopping just before 3.",
        "The loop runs its indented block once per value in that sequence. First pass: i is 0, so print(f'Lap {i}') prints Lap 0.",
        "Second pass: i is 1, printing Lap 1.",
        "Third pass: i is 2, printing Lap 2. The sequence is now exhausted, so the loop ends.",
        "print('Done!') is not indented under the for loop, so it runs once, after the loop finishes."
      ],
      "answer": "The program prints four lines: Lap 0, Lap 1, Lap 2, then Done!"
    },
    "practice": [
      {
        "problem": "How many times does the block inside for i in range(7): run, and what is the very last value i takes on?",
        "solution": "range(7) produces 7 numbers: 0, 1, 2, 3, 4, 5, 6. The block runs 7 times, and the last value i takes on is 6 (not 7, since range() always stops just before its argument)."
      },
      {
        "problem": "Predict the output:\nfor n in range(1, 4):\n    print(n)",
        "solution": "range(1, 4) counts from 1 up to (but not including) 4, giving 1, 2, 3. The loop prints three lines: 1, then 2, then 3."
      },
      {
        "problem": "Predict the output:\nfor n in range(0, 10, 5):\n    print(n)",
        "solution": "range(0, 10, 5) starts at 0, stops before 10, and jumps by 5 each time: 0, 5. (10 itself is not included, since the stop value is always excluded.) The loop prints two lines: 0, then 5."
      },
      {
        "problem": "Write a for loop that prints the word 'Go!' exactly four times.",
        "solution": "for i in range(4):\n    print('Go!')\nThis repeats the block 4 times (i takes values 0, 1, 2, 3), and the loop variable i doesn't need to be used inside the block at all, since only the repeat count matters here."
      },
      {
        "problem": "Predict the total number of lines printed:\nfor i in range(2, 8, 2):\n    print(i)",
        "solution": "range(2, 8, 2) starts at 2, stops before 8, jumping by 2: 2, 4, 6. That's 3 values, so 3 lines are printed: 2, 4, then 6."
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "question": "What sequence of numbers does range(4) produce?",
        "choices": [
          "0, 1, 2, 3",
          "1, 2, 3, 4",
          "0, 1, 2, 3, 4",
          "4, 3, 2, 1"
        ],
        "answerIndex": 0,
        "explanation": "range() always starts at 0 and stops just before its argument, so range(4) gives four numbers: 0, 1, 2, 3."
      },
      {
        "type": "mc",
        "question": "How many times does the block inside for x in range(6): run?",
        "choices": [
          "6",
          "5",
          "7",
          "0"
        ],
        "answerIndex": 0,
        "explanation": "range(6) produces exactly 6 numbers (0 through 5), so the loop body runs 6 times."
      },
      {
        "type": "short",
        "question": "What is the last value the loop variable takes on in for i in range(5):?",
        "answer": "4",
        "acceptable": [
          "4"
        ],
        "explanation": "range(5) produces 0, 1, 2, 3, 4 — the last value is 4, since range() always stops just before the number given, so 5 itself is never included."
      },
      {
        "type": "short",
        "question": "What does range(3, 6) produce, as a sequence of numbers?",
        "answer": "3, 4, 5",
        "acceptable": [
          "3,4,5",
          "3 4 5"
        ],
        "explanation": "range(start, stop) counts from start up to (but not including) stop, so range(3, 6) gives 3, 4, 5."
      },
      {
        "type": "mc",
        "question": "What does range(0, 12, 4) produce?",
        "choices": [
          "0, 4, 8",
          "0, 4, 8, 12",
          "4, 8, 12",
          "0, 3, 6, 9"
        ],
        "answerIndex": 0,
        "explanation": "range(start, stop, step) starts at 0, jumps by 4 each time, and always stops before reaching 12 (never including it): 0, 4, 8."
      }
    ]
  },
  {
    "id": "2.12",
    "number": 12,
    "title": "while loops",
    "objectives": [
      "Explain how a while loop repeats based on a condition rather than a fixed count",
      "Compare when to use a for loop versus a while loop",
      "Explain why something inside a while loop must eventually make its condition False",
      "Trace a while loop's execution step by step"
    ],
    "explanation": [
      "A for loop with range() is perfect when you know exactly how many times you want to repeat something in advance. But plenty of real situations don't work that way — you might want to \"keep asking the user for a password until they get it right\" or \"keep doubling a number until it passes 1000,\" where the number of repeats isn't fixed ahead of time; it depends on what happens as the program runs. That's exactly what a while loop is for: it repeats its indented block for as long as a given condition (a bool, just like an if's condition) stays True, rechecking that condition fresh before every single pass through the block.",
      "count = 0\nwhile count < 3:\n    print(count)\n    count = count + 1\nHere, Python checks count < 3 before every pass. First pass: count is 0, 0 < 3 is True, so the block runs — it prints 0, then updates count to 1. Second pass: count is 1, 1 < 3 is still True, so it prints 1 and updates count to 2. Third pass: count is 2, 2 < 3 is still True, so it prints 2 and updates count to 3. Fourth check: count is now 3, and 3 < 3 is False, so the loop stops without running the block again.",
      "That count = count + 1 line inside the block is doing essential work, and it's worth naming explicitly why: something inside a while loop's block MUST eventually make its condition become False, or the loop will repeat forever — an infinite loop that never lets the rest of the program run. If that update line were accidentally left out, count would stay at 0 forever, count < 3 would stay True forever, and the loop would never stop. This is the single biggest gotcha with while loops, and it's exactly the kind of bug worth double-checking for by name every time you write one: \"what, inside this loop, is guaranteed to eventually make the condition False?\"",
      "As a rule of thumb: reach for a for loop when you know the number of repeats in advance (or can express it as a range of numbers), and reach for a while loop when you're repeating until some condition changes and you can't say in advance exactly how many passes that will take."
    ],
    "example": {
      "problem": "Trace this program and predict its output:\ntotal = 0\nwhile total < 10:\n    total = total + 4\n    print(total)",
      "steps": [
        "Check the condition before the first pass: total is 0, and 0 < 10 is True, so the block runs. total becomes 0 + 4 = 4, and print(total) shows 4.",
        "Check the condition again: total is 4, and 4 < 10 is True, so the block runs again. total becomes 4 + 4 = 8, and print(total) shows 8.",
        "Check the condition again: total is 8, and 8 < 10 is True, so the block runs again. total becomes 8 + 4 = 12, and print(total) shows 12.",
        "Check the condition again: total is 12, and 12 < 10 is False, so the loop stops without running the block again."
      ],
      "answer": "The program prints three lines: 4, 8, then 12."
    },
    "practice": [
      {
        "problem": "Trace this program:\nn = 5\nwhile n > 0:\n    print(n)\n    n = n - 1",
        "solution": "n starts at 5. Each pass prints n's current value, then subtracts 1. Passes print, in order: 5, 4, 3, 2, 1. After the pass where n becomes 0, the condition n > 0 is False, so the loop stops. Output: 5, 4, 3, 2, 1."
      },
      {
        "problem": "What is wrong with this loop, and what will happen if it runs?\ncount = 0\nwhile count < 5:\n    print('hello')",
        "solution": "The block never changes count, so count stays 0 forever, and count < 5 stays True forever — this is an infinite loop that will keep printing 'hello' without ever stopping. It needs a line like count = count + 1 inside the block to eventually make the condition False."
      },
      {
        "problem": "Would you use a for loop or a while loop to print the numbers 1 through 20? Why?",
        "solution": "A for loop, because the exact number of repeats (20) is known in advance — for i in range(1, 21): print(i) is a natural fit. A while loop would work too but is a less natural choice when the repeat count is already known."
      },
      {
        "problem": "Would you use a for loop or a while loop to keep asking a user to type 'yes' until they actually do? Why?",
        "solution": "A while loop, because you don't know in advance how many times the user will need to be asked — the loop needs to keep going based on a changing condition (whether they've typed 'yes' yet), not a fixed count."
      },
      {
        "problem": "Trace this program:\nx = 1\nwhile x < 20:\n    x = x * 2\nprint(x)",
        "solution": "x starts at 1. Pass 1: 1 < 20 is True, x becomes 1 * 2 = 2. Pass 2: 2 < 20 is True, x becomes 2 * 2 = 4. Pass 3: 4 < 20 is True, x becomes 4 * 2 = 8. Pass 4: 8 < 20 is True, x becomes 8 * 2 = 16. Pass 5: 16 < 20 is True, x becomes 16 * 2 = 32. Pass 6: 32 < 20 is False, loop stops. print(x) shows 32."
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "question": "What determines how many times a while loop's block runs?",
        "choices": [
          "Whether its condition is still True, rechecked before every pass",
          "A fixed count set by range()",
          "The number of variables in the program",
          "It always runs exactly once"
        ],
        "answerIndex": 0,
        "explanation": "A while loop keeps running its block as long as its condition evaluates to True, checking fresh before every single pass."
      },
      {
        "type": "mc",
        "question": "Why must something inside a while loop's block eventually make the condition False?",
        "choices": [
          "Otherwise the loop runs forever (an infinite loop)",
          "Otherwise Python refuses to start the loop at all",
          "It's just a style preference, not a requirement",
          "Because while loops are only allowed to run once"
        ],
        "answerIndex": 0,
        "explanation": "If nothing inside the loop ever changes the condition to False, the loop keeps repeating forever, since the condition is rechecked and stays True every time."
      },
      {
        "type": "short",
        "question": "Given n = 2, how many times does this loop's block run? while n < 20: n = n * 2",
        "answer": "4",
        "acceptable": [
          "4"
        ],
        "explanation": "n goes 2 -> 4 (pass 1, since 2 < 20) -> 8 (pass 2, since 4 < 20) -> 16 (pass 3, since 8 < 20) -> 32 (pass 4, since 16 < 20). After pass 4, n is 32, and 32 < 20 is False, so it stops. The block ran 4 times."
      },
      {
        "type": "short",
        "question": "When you know exactly how many times you want to repeat something in advance, which loop is usually the more natural choice: for or while?",
        "answer": "for",
        "acceptable": [
          "for",
          "for loop"
        ],
        "explanation": "A for loop (often with range()) is the natural choice when the number of repeats is known ahead of time; a while loop is better suited to repeating until a condition changes, when the count isn't known in advance."
      },
      {
        "type": "mc",
        "question": "What will this loop do?\nx = 5\nwhile x > 0:\n    print(x)",
        "choices": [
          "Run forever, since x is never changed and x > 0 stays True",
          "Print 5 once and stop",
          "Print 5, 4, 3, 2, 1 and stop",
          "Cause an immediate error"
        ],
        "answerIndex": 0,
        "explanation": "The block never updates x, so x stays 5 forever, and x > 0 never becomes False — this is an infinite loop."
      }
    ]
  },
  {
    "id": "2.13",
    "number": 13,
    "title": "Lists — creating, indexing, len(), and append()",
    "objectives": [
      "Create a list and explain how it differs from a single-value variable",
      "Access list items using zero-based indexing",
      "Use len() to find how many items are in a list",
      "Add items with append() and change an item by index"
    ],
    "explanation": [
      "Every variable you've used so far has held exactly one value at a time. A list changes that: it's a single variable that holds an ORDERED collection of multiple values together, all under one name. You create one with square brackets, separating the items with commas: scores = [85, 92, 78]. Now scores isn't one number — it's a whole ordered group of three numbers, stored under a single variable name, and you can grow it, shrink it, or change individual items inside it as your program runs.",
      "Each item in a list sits at a position called an index, and here's the detail that trips almost everyone up at first: Python starts counting positions from 0, not 1. This is the exact same zero-start pattern you just saw with range() in an earlier lesson — it's not a coincidence, it's how Python counts positions in general. So for scores = [85, 92, 78], scores[0] is the FIRST item, 85; scores[1] is the second item, 92; and scores[2] is the third and last item, 78. Trying to access scores[3] would cause an error, since there is no fourth item — the last valid index is always one less than the number of items in the list.",
      "len(), the exact same tool from the strings lesson, works on lists too — there, it counted characters in a string; here, it counts items in a list. len(scores) is 3. This is a nice pattern worth noticing: len() always answers the same question, \"how many things are in this?\", no matter what kind of collection you hand it.",
      "Two more essential list tools: append(value) adds a new item onto the very end of the list, growing it by one — scores.append(90) turns [85, 92, 78] into [85, 92, 78, 90]. And you can change an existing item in place by assigning to its index, reusing the same assignment idea from the variables lesson but applied to just one slot of the list: scores[1] = 95 overwrites only the second item, turning [85, 92, 78] into [85, 95, 78] — the other two items are untouched."
    ],
    "example": {
      "problem": "Given scores = [70, 82, 91], trace this program and predict its final output:\nscores.append(88)\nscores[0] = 75\nprint(scores)\nprint(len(scores))\nprint(scores[2])",
      "steps": [
        "scores starts as [70, 82, 91].",
        "scores.append(88) adds 88 onto the end: scores becomes [70, 82, 91, 88].",
        "scores[0] = 75 overwrites the item at index 0 (the first item, currently 70) with 75: scores becomes [75, 82, 91, 88].",
        "print(scores) shows the whole list: [75, 82, 91, 88].",
        "print(len(scores)) shows how many items are in the list, which is 4.",
        "print(scores[2]) shows the item at index 2 — counting from 0, that's the third item, 91."
      ],
      "answer": "The program prints: [75, 82, 91, 88], then 4, then 91."
    },
    "practice": [
      {
        "problem": "Given colors = ['red', 'blue', 'green'], what is colors[1]?",
        "solution": "Indexing starts at 0, so colors[0] is 'red' (first item) and colors[1] is 'blue' (second item)."
      },
      {
        "problem": "Given nums = [4, 8, 15], what is len(nums), and what is the largest valid index you can use?",
        "solution": "len(nums) is 3, since there are 3 items. The largest valid index is always one less than the length, so the largest valid index here is 2 (nums[2] is the last item, 15)."
      },
      {
        "problem": "Given items = [1, 2, 3], predict the list after items.append(4) runs.",
        "solution": "append() adds the new value onto the end: items becomes [1, 2, 3, 4]."
      },
      {
        "problem": "Given nums = [10, 20, 30], predict the list after nums[1] = 99 runs.",
        "solution": "nums[1] refers to the item at index 1, the second item (currently 20). Assigning to it overwrites just that one slot: nums becomes [10, 99, 30]."
      },
      {
        "problem": "Given fruits = ['apple', 'pear'], explain why fruits[2] would cause an error.",
        "solution": "fruits has only 2 items, at valid indexes 0 ('apple') and 1 ('pear'). Index 2 would be a nonexistent third item, so trying to access fruits[2] causes an error — the largest valid index is always length minus one, which here is 1."
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "question": "In Python, what index does the FIRST item of a list have?",
        "choices": [
          "0",
          "1",
          "-1",
          "It depends on the list"
        ],
        "answerIndex": 0,
        "explanation": "Python lists are zero-indexed — the first item is always at index 0, the second at index 1, and so on."
      },
      {
        "type": "mc",
        "question": "Given nums = [3, 6, 9, 12], what does nums[2] evaluate to?",
        "choices": [
          "9",
          "3",
          "6",
          "12"
        ],
        "answerIndex": 0,
        "explanation": "Counting from index 0: nums[0] is 3, nums[1] is 6, nums[2] is 9 — the third item."
      },
      {
        "type": "short",
        "question": "Given letters = ['a', 'b', 'c'], what does len(letters) evaluate to?",
        "answer": "3",
        "acceptable": [
          "3"
        ],
        "explanation": "len() reports the number of items in the list, and there are 3: 'a', 'b', and 'c'."
      },
      {
        "type": "short",
        "question": "Which list method adds a new item onto the end of a list?",
        "answer": "append()",
        "acceptable": [
          "append()",
          "append",
          ".append()"
        ],
        "explanation": "append(value) adds value onto the end of the list, growing it by one item."
      },
      {
        "type": "mc",
        "question": "Given nums = [5, 10, 15], what does nums become after nums[0] = 1 runs?",
        "choices": [
          "[1, 10, 15]",
          "[5, 10, 15, 1]",
          "[1, 5, 10, 15]",
          "[15, 10, 5]"
        ],
        "answerIndex": 0,
        "explanation": "nums[0] refers to the first item (5), and assigning to it overwrites just that one slot with 1, leaving the rest unchanged: [1, 10, 15]."
      }
    ]
  },
  {
    "id": "2.14",
    "number": 14,
    "title": "Looping over lists — combining for loops and lists",
    "objectives": [
      "Loop over every item in a list with for item in list",
      "Use for i in range(len(list)) when the index itself is also needed",
      "Apply the accumulator pattern to total up values in a list",
      "Choose between the two looping styles for a given task"
    ],
    "explanation": [
      "Two of the most useful tools you now have — for loops and lists — combine into one of the most common patterns in all of programming: visiting every item in a list, one at a time, automatically. for item in my_list: lets you do exactly that, without managing index numbers by hand at all. \nfor score in scores:\n    print(score)\nHere, score takes on each value in the scores list in order, one per pass, exactly the same way the loop variable in a range()-based for loop took on each number in the sequence — just now it's taking on each list item instead of each number.",
      "Sometimes you need the position (the index) as well as the value — maybe to also change an item while looping, or to print which position a value came from. For that, combine range() with len() (both from earlier lessons) like this: for i in range(len(scores)): lets i take on every valid index of scores, 0 up to (but not including) len(scores), and you can then use scores[i] inside the block to get the actual value at that position, or assign to scores[i] to change it. Use plain for item in list when you only need the values themselves; use for i in range(len(list)) when you also need to know (or change) the position.",
      "One extremely common thing to do while looping over a list is add up its values — this is called the accumulator pattern, and you've already used half of it: the reassignment idea (score = score + 3) from the variables lesson. Start a total variable at 0 BEFORE the loop begins, then, inside the loop's block, add each item to it: \ntotal = 0\nfor score in scores:\n    total = total + score\nAfter the loop finishes, total holds the sum of every item that was in the list. This exact pattern — start at a starting value before the loop, update it on every pass inside the loop — comes up constantly in real programs, and you'll rely on it again in this phase's final project.",
      "It's worth noticing why the total = 0 line has to come before the loop, not inside it: if it were inside the loop's block, it would reset total back to 0 on every single pass, wiping out everything added so far, and the loop would never actually accumulate anything."
    ],
    "example": {
      "problem": "Given scores = [70, 85, 90], trace this program and predict its output:\ntotal = 0\nfor score in scores:\n    total = total + score\nprint(total)",
      "steps": [
        "Before the loop starts, total is set to 0.",
        "First pass: score is 70 (the first item in scores). total = total + score computes 0 + 70 = 70, storing 70 into total.",
        "Second pass: score is 85. total = total + score computes 70 + 85 = 155, storing 155 into total.",
        "Third pass: score is 90. total = total + score computes 155 + 90 = 245, storing 245 into total.",
        "The list is exhausted, so the loop ends. print(total) shows the final accumulated value."
      ],
      "answer": "The program prints: 245"
    },
    "practice": [
      {
        "problem": "Given names = ['Ana', 'Ben', 'Cy'], predict the output:\nfor name in names:\n    print(f'Hi, {name}!')",
        "solution": "The loop visits each item in order, printing an f-string for each: Hi, Ana!, then Hi, Ben!, then Hi, Cy!"
      },
      {
        "problem": "Given nums = [2, 4, 6, 8], trace and predict the final value of total:\ntotal = 0\nfor n in nums:\n    total = total + n",
        "solution": "total starts at 0, then accumulates: 0+2=2, 2+4=6, 6+6=12, 12+8=20. Final value of total: 20."
      },
      {
        "problem": "Given nums = [10, 20, 30], predict the output:\nfor i in range(len(nums)):\n    print(f'Index {i}: {nums[i]}')",
        "solution": "range(len(nums)) is range(3), giving indexes 0, 1, 2. The loop prints: Index 0: 10, then Index 1: 20, then Index 2: 30."
      },
      {
        "problem": "Why would total = 0 placed INSIDE the loop's block (instead of before it) break the accumulator pattern?",
        "solution": "If total = 0 were inside the loop, it would reset total back to 0 at the start of every single pass, erasing whatever had already been added — the loop would never actually build up a running sum, and total would just end up holding the value of the last item added to 0."
      },
      {
        "problem": "Given prices = [3, 7, 2], would you use for price in prices or for i in range(len(prices)) to simply print each price, with no need for the index? Why?",
        "solution": "for price in prices, since only the values are needed, not their positions — this style is simpler and more direct whenever the index itself isn't required."
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "question": "What does for item in my_list: let you do?",
        "choices": [
          "Visit every item in the list, one at a time, in order, without managing index numbers by hand",
          "Only visit the first item in the list",
          "Delete every item in the list",
          "Sort the list automatically"
        ],
        "answerIndex": 0,
        "explanation": "This loop style takes on each value in the list in turn, letting you process every item without writing separate code for each index."
      },
      {
        "type": "mc",
        "question": "When should you use for i in range(len(my_list)) instead of for item in my_list?",
        "choices": [
          "When you also need the index (position), not just the value",
          "It's never useful, always prefer for item in my_list",
          "Only when the list is empty",
          "Only for lists of strings"
        ],
        "answerIndex": 0,
        "explanation": "for i in range(len(my_list)) gives you the index itself, which you can then use to look up or change my_list[i] — useful whenever the position matters, not just the value."
      },
      {
        "type": "short",
        "question": "Given nums = [1, 2, 3, 4], what is the final value of total after this runs? total = 0 / for n in nums: total = total + n",
        "answer": "10",
        "acceptable": [
          "10"
        ],
        "explanation": "Accumulating: 0+1=1, 1+2=3, 3+3=6, 6+4=10. Final total: 10."
      },
      {
        "type": "short",
        "question": "In the accumulator pattern, where must the starting total = 0 line be placed relative to the loop?",
        "answer": "before the loop",
        "acceptable": [
          "before",
          "before the loop starts",
          "outside and before the loop"
        ],
        "explanation": "total = 0 must run once, before the loop begins — if it were inside the loop's block, it would reset the total on every pass instead of accumulating."
      },
      {
        "type": "mc",
        "question": "Given nums = [5, 15, 25], what does for i in range(len(nums)): print(nums[i]) print?",
        "choices": [
          "5, then 15, then 25",
          "0, then 1, then 2",
          "Only 25",
          "An error, since len(nums) can't be used in range()"
        ],
        "answerIndex": 0,
        "explanation": "len(nums) is 3, so range(len(nums)) gives indexes 0, 1, 2. nums[i] for each of those indexes gives 5, 15, then 25 — the actual values, printed in order."
      }
    ]
  },
  {
    "id": "2.15",
    "number": 15,
    "title": "Functions — def, parameters, and return",
    "objectives": [
      "Define a function with def, a parameter, and a return statement",
      "Explain how a parameter works like the x in an algebraic expression",
      "Distinguish return (hands back a usable value) from print (only displays)",
      "Call a function and use its returned value"
    ],
    "explanation": [
      "You've actually been using functions this entire phase without calling them that by name: print(), input(), len(), type(), int(), float(), str(), and range() are all functions Python already provides, ready-made — you just call them by name with parentheses. Now it's time to write your own. A function is a reusable, named block of instructions that you can run whenever you want, as many times as you want, by calling its name.",
      "This connects directly back to Phase 1's expressions lessons: you learned to evaluate an expression like 2x + 3 by \"plugging in\" a specific value for x — plug in x = 5 and you get 13; plug in x = 10 and you get 23. A Python function works the same way, but can do much more than a single formula — its body can contain multiple steps, and (from the last several lessons) if/elif/else, loops, and lists, all packaged under one reusable name. def double(x):\n    return x * 2\nHere, def starts a function definition, double is the name you're giving it, and x — inside the parentheses — is a parameter: a placeholder variable name, exactly like the x in an algebra expression, that receives whatever value gets passed in when the function is actually called.",
      "The indented body follows the same indentation rule from the if/else lesson — everything indented under the def line belongs to the function. return is the keyword that sends a value back out of the function to wherever it was called from, and it also immediately ends the function's execution at that point (any lines after a return inside the same function never run). This is an important and easy-to-blur distinction: print() only displays something on the screen — it doesn't hand anything back that the rest of the program can use. return actually hands a value back, so it can be stored in a variable, used in more math, or passed straight into another function. A function with print() inside it shows something; a function with return inside it gives something back you can actually use.",
      "Writing def double(x): return x * 2 only defines the function — it doesn't run it yet, the same way writing down a recipe doesn't cook the meal. To actually run it, you call it by name with a value in the parentheses: double(5) runs the function with x set to 5, and evaluates to 10 (because of the return), which you can then store: result = double(5) stores 10 into result, or print it directly: print(double(5))."
    ],
    "example": {
      "problem": "Given this function definition:\ndef square(x):\n    return x * x\nwhat does result = square(6) followed by print(result) do?",
      "steps": [
        "The def line defines the function square, which takes one parameter, x. Defining it doesn't run anything yet.",
        "square(6) calls the function, matching the parameter x to the value 6.",
        "Inside the function, return x * x computes 6 * 6 = 36 and hands that value back out to wherever the function was called.",
        "result = square(6) stores that returned value, 36, into result.",
        "print(result) displays result's current value."
      ],
      "answer": "The program prints: 36"
    },
    "practice": [
      {
        "problem": "Given def triple(n): return n * 3, what does triple(5) evaluate to?",
        "solution": "The parameter n is matched to 5, so return n * 3 computes 5 * 3 = 15. triple(5) evaluates to 15."
      },
      {
        "problem": "What is the key difference between a function that uses print(x) inside it and one that uses return x inside it?",
        "solution": "print(x) only displays x's value on the screen — it doesn't give the rest of the program anything usable back. return x actually hands x's value back out of the function to wherever it was called, so it can be stored in a variable or used in further calculations."
      },
      {
        "problem": "Write a function called add_five that takes one parameter, n, and returns n plus 5.",
        "solution": "def add_five(n):\n    return n + 5"
      },
      {
        "problem": "Does writing def add_five(n): return n + 5 by itself cause anything to print or calculate immediately? Why or why not?",
        "solution": "No — defining a function only creates it, it doesn't run it. The function's code only actually executes when the function is called later, like add_five(3)."
      },
      {
        "problem": "Given def is_even(n): return n % 2 == 0, what does is_even(8) evaluate to, and what type is the result?",
        "solution": "Inside the function, n is 8, so n % 2 computes the remainder of 8 divided by 2, which is 0. 0 == 0 evaluates to True. The result is the bool True."
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "question": "What keyword do you use to start defining a function?",
        "choices": [
          "def",
          "func",
          "return",
          "define"
        ],
        "answerIndex": 0,
        "explanation": "def starts a function definition, followed by the function's name, parentheses (with any parameters), and a colon."
      },
      {
        "type": "mc",
        "question": "What is the main difference between print(x) and return x inside a function?",
        "choices": [
          "print only displays a value on screen; return hands the value back so the rest of the program can use it",
          "They do exactly the same thing",
          "return only works inside loops",
          "print can only be used with numbers"
        ],
        "answerIndex": 0,
        "explanation": "print() displays a value but gives nothing back to the calling code. return actually hands a usable value back out of the function."
      },
      {
        "type": "short",
        "question": "Given def cube(x): return x * x * x, what does cube(3) evaluate to?",
        "answer": "27",
        "acceptable": [
          "27"
        ],
        "explanation": "The parameter x is matched to 3, and x * x * x computes 3 * 3 * 3 = 27, which is returned."
      },
      {
        "type": "short",
        "question": "In a function definition, what is the name for a placeholder variable (like x) that receives a value when the function is called?",
        "answer": "parameter",
        "acceptable": [
          "parameter",
          "a parameter"
        ],
        "explanation": "A parameter is a placeholder name inside a function's parentheses that gets matched to an actual value whenever the function is called."
      },
      {
        "type": "mc",
        "question": "What happens if you write a function definition but never call it anywhere in the program?",
        "choices": [
          "Nothing runs — the function's code only executes when it's actually called",
          "It runs automatically once, right after being defined",
          "Python causes an error immediately",
          "It runs once for every other function in the program"
        ],
        "answerIndex": 0,
        "explanation": "Defining a function only creates it, the same way writing a recipe doesn't cook the meal — its code only runs when the function is actually called by name."
      }
    ]
  },
  {
    "id": "2.16",
    "number": 16,
    "title": "Functions with multiple parameters, and combining functions with loops and if",
    "objectives": [
      "Define and call a function with more than one parameter",
      "Write a function whose body contains a loop and/or an if/elif/else",
      "Use a default parameter value",
      "Explain why functions help organize and reuse code"
    ],
    "explanation": [
      "A function can take more than one parameter, separated by commas in the def line, and each one gets matched, in order, to the values supplied when the function is called. def add(a, b):\n    return a + b\nCalling add(3, 5) matches a to 3 and b to 5 (in that order), computing and returning 3 + 5 = 8. The order matters — add(3, 5) and add(5, 3) happen to give the same result here since addition doesn't care about order, but for an operation like subtraction, subtract(a, b) returning a - b, the order absolutely would change the answer.",
      "A function's body isn't limited to a single line — it can contain anything you've learned so far: if/elif/else, for and while loops, lists, the accumulator pattern, all of it, wrapped up under one reusable name. Here's a function that counts how many items in a list are even, combining a for loop, an if, %  from the arithmetic lesson, and an accumulator: \ndef count_evens(nums):\n    count = 0\n    for n in nums:\n        if n % 2 == 0:\n            count = count + 1\n    return count\nNotice the nesting: the if is indented under the for loop, and the for loop's whole block is indented under the function — each level of indentation shows which structure a line belongs to, layered just like a math expression's parentheses can be layered inside other parentheses.",
      "One more small but handy feature: default parameter values. def greet(name, greeting='Hello'):\n    return f'{greeting}, {name}!'\nlets you call greet('Maya') and it automatically fills in 'Hello' for greeting since you didn't supply one, giving 'Hello, Maya!' — or you can override the default by supplying your own second value: greet('Maya', 'Hi') gives 'Hi, Maya!' instead.",
      "The whole point of functions is reuse and organization: writing the logic once inside a well-named function, then calling it as many times as needed with different values, instead of copy-pasting the same block of code over and over. A large program is, in the end, really just a collection of smaller, well-named functions calling each other — exactly the approach you'll use in this phase's final project."
    ],
    "example": {
      "problem": "Given this function:\ndef count_evens(nums):\n    count = 0\n    for n in nums:\n        if n % 2 == 0:\n            count = count + 1\n    return count\nWhat does count_evens([3, 4, 7, 8, 10]) evaluate to?",
      "steps": [
        "count starts at 0.",
        "First item, 3: 3 % 2 is 1, so 3 % 2 == 0 is False — the if block doesn't run, count stays 0.",
        "Second item, 4: 4 % 2 is 0, so the if block runs — count becomes 0 + 1 = 1.",
        "Third item, 7: 7 % 2 is 1, False — count stays 1.",
        "Fourth item, 8: 8 % 2 is 0, True — count becomes 1 + 1 = 2.",
        "Fifth item, 10: 10 % 2 is 0, True — count becomes 2 + 1 = 3.",
        "The loop ends, and return count hands back count's final value."
      ],
      "answer": "count_evens([3, 4, 7, 8, 10]) evaluates to 3."
    },
    "practice": [
      {
        "problem": "Given def multiply(a, b): return a * b, what does multiply(4, 7) evaluate to?",
        "solution": "a is matched to 4 and b is matched to 7, so a * b computes 4 * 7 = 28."
      },
      {
        "problem": "Write a function called is_in_range that takes three parameters, n, low, and high, and returns True if n is between low and high (inclusive), False otherwise.",
        "solution": "def is_in_range(n, low, high):\n    return n >= low and n <= high\nThis reuses the comparison and boolean operators from earlier lessons: the function returns the bool result of the and expression directly."
      },
      {
        "problem": "Given def greet(name, greeting='Hi'): return f'{greeting}, {name}!', what does greet('Sam') evaluate to?",
        "solution": "Since no second value was supplied, greeting uses its default value, 'Hi'. The result is 'Hi, Sam!'."
      },
      {
        "problem": "Trace what sum_positive([2, -3, 5, -1, 4]) returns, given:\ndef sum_positive(nums):\n    total = 0\n    for n in nums:\n        if n > 0:\n            total = total + n\n    return total",
        "solution": "total starts at 0. 2 is positive, total becomes 2. -3 is not positive, skipped. 5 is positive, total becomes 2+5=7. -1 is not positive, skipped. 4 is positive, total becomes 7+4=11. The function returns 11."
      },
      {
        "problem": "Why is it useful to wrap the count_evens logic in a function instead of writing the loop out fresh every time you need it?",
        "solution": "Wrapping it in a function lets you write the loop-and-if logic exactly once, then reuse it by calling count_evens(some_list) on as many different lists as needed, instead of copy-pasting the same block of code every time it's needed — the function name also makes the code's intent clear at a glance."
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "question": "Given def subtract(a, b): return a - b, what does subtract(10, 4) evaluate to?",
        "choices": [
          "6",
          "-6",
          "14",
          "40"
        ],
        "answerIndex": 0,
        "explanation": "a is matched to 10 and b to 4, in that order, so a - b computes 10 - 4 = 6."
      },
      {
        "type": "mc",
        "question": "What is a default parameter value used for?",
        "choices": [
          "It's automatically used for a parameter when the caller doesn't supply a value for it",
          "It forces every call to supply that value",
          "It deletes the parameter",
          "It only works with the return keyword"
        ],
        "answerIndex": 0,
        "explanation": "A default value is filled in automatically whenever a call doesn't supply a value for that parameter — the caller can still override it by supplying their own value instead."
      },
      {
        "type": "short",
        "question": "Given def add(a, b): return a + b, what does add(6, 9) evaluate to?",
        "answer": "15",
        "acceptable": [
          "15"
        ],
        "explanation": "a is matched to 6 and b to 9, so a + b computes 6 + 9 = 15."
      },
      {
        "type": "short",
        "question": "Can a function's body contain a for loop and an if statement together? (yes/no)",
        "answer": "yes",
        "acceptable": [
          "yes",
          "Yes"
        ],
        "explanation": "Yes — a function's body can contain anything covered so far, including loops, if/elif/else, and lists, all nested together using indentation."
      },
      {
        "type": "mc",
        "question": "In def add(a, b): return a + b, what does the ORDER of a and b in the call add(2, 9) determine?",
        "choices": [
          "Which value gets matched to a and which gets matched to b",
          "Nothing, order never matters in Python",
          "Whether the function returns or prints",
          "The function's name"
        ],
        "answerIndex": 0,
        "explanation": "Parameters are matched to the values in a call in order — the first value given matches the first parameter, and so on. Here, a gets 2 and b gets 9."
      }
    ]
  },
  {
    "id": "2.17",
    "number": 17,
    "title": "Mini-project — a quiz-grader program that combines it all",
    "objectives": [
      "Combine variables, lists, loops, if/elif/else, and functions into one working program",
      "Trace a multi-part program's execution from start to finish",
      "Write and modify small pieces of a larger program correctly",
      "Verify a program's output by checking it against each part of the logic"
    ],
    "explanation": [
      "Ms. Alvarez teaches math down the hall, and she just asked for your help: she has a whole class of quiz scores to grade, and typing out feedback for each student by hand is taking forever. She wants a small Python program that takes a list of scores, prints personalized feedback for every student, and also reports the class average — exactly the kind of task you now have every tool for.",
      "The plan combines everything from this phase. A list (from two lessons ago) holds all the scores together: scores = [95, 68, 82, 55, 74]. A function (from the last two lessons) computes the average, using the accumulator pattern from the lists-and-loops lesson: add up every score with a for loop, then divide the total by len(scores) — the same len() that's been counting characters and list items this whole phase. A for loop visits each score in order, and for each one, an if/elif/else chain (checking the score against grade boundaries, highest first, exactly like the grading example two lessons back) decides which feedback message applies, printed with an f-string.",
      "def average(nums):\n    total = 0\n    for n in nums:\n        total = total + n\n    return total / len(nums)\n\nscores = [95, 68, 82, 55, 74]\nfor score in scores:\n    if score >= 90:\n        print(f'{score}: Excellent work!')\n    elif score >= 70:\n        print(f'{score}: Good job.')\n    elif score >= 60:\n        print(f'{score}: Needs review.')\n    else:\n        print(f'{score}: Please see me for extra help.')\n\nclass_average = average(scores)\nprint(f'Class average: {class_average}')",
      "Notice how each piece is something you've already fully mastered on its own — a function definition, an accumulator loop inside it, a separate for loop over the same list, an if/elif/else chain nested inside that loop, and f-strings tying the output together — and the whole program is really just those familiar pieces, called in the right order, working together. That's the real shape of programming: not new tricks appearing out of nowhere, but familiar, individually simple tools combined to do something bigger than any one of them could alone."
    ],
    "example": {
      "problem": "Using the program above, trace exactly what prints for scores = [95, 68, 82, 55, 74].",
      "steps": [
        "First, def average(nums): ... defines the function, but doesn't run it yet.",
        "scores is set to [95, 68, 82, 55, 74].",
        "The for loop begins. score = 95: 95 >= 90 is True, so it prints '95: Excellent work!' and skips the rest of that chain.",
        "score = 68: 68 >= 90 is False, 68 >= 70 is False, 68 >= 60 is True, so it prints '68: Needs review.'",
        "score = 82: 82 >= 90 is False, 82 >= 70 is True, so it prints '82: Good job.'",
        "score = 55: all three comparisons are False, so the else runs: it prints '55: Please see me for extra help.'",
        "score = 74: 74 >= 90 is False, 74 >= 70 is True, so it prints '74: Good job.'",
        "The loop ends. class_average = average(scores) calls the function: total accumulates 95+68+82+55+74 = 374, and total / len(nums) computes 374 / 5 = 74.8, which is returned and stored.",
        "The final print shows the f-string with class_average's value."
      ],
      "answer": "The program prints, in order: 95: Excellent work!, 68: Needs review., 82: Good job., 55: Please see me for extra help., 74: Good job., then Class average: 74.8"
    },
    "practice": [
      {
        "problem": "Using the average() function from the lesson, what does average([80, 90, 100]) evaluate to?",
        "solution": "total accumulates 0+80=80, 80+90=170, 170+100=270. len([80, 90, 100]) is 3. The function returns 270 / 3 = 90.0 (a float, since / always gives a float)."
      },
      {
        "problem": "A new student's score, 61, is added to the class: scores = [95, 68, 82, 55, 74, 61]. Which feedback message does 61 get, using the if/elif/else chain from the lesson?",
        "solution": "61 >= 90 is False. 61 >= 70 is False. 61 >= 60 is True, so this branch runs (and the else is skipped): '61: Needs review.'"
      },
      {
        "problem": "Ms. Alvarez wants a new top tier: any score of 98 or above should print 'Outstanding!' instead of 'Excellent work!'. Where in the if/elif/else chain does this new condition need to go, and why?",
        "solution": "It needs to go FIRST, before the score >= 90 check, as a new condition: if score >= 98: print(f'{score}: Outstanding!') — because Python runs only the first True condition in the chain, so a score of 98 would otherwise get caught by score >= 90 first (since 98 is also >= 90) and never reach a check placed after it."
      },
      {
        "problem": "Write a function called count_passing that takes a list of scores and returns how many of them are 60 or above, using a for loop, an if, and an accumulator.",
        "solution": "def count_passing(nums):\n    count = 0\n    for n in nums:\n        if n >= 60:\n            count = count + 1\n    return count\nThis reuses the same accumulator pattern as average() and count_evens(), just with a different condition inside the if."
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "question": "In the quiz-grader program, what does the average() function use to add up all the scores before dividing?",
        "choices": [
          "The accumulator pattern: a total variable starting at 0, updated inside a for loop",
          "The len() function alone, with no loop",
          "An if/elif/else chain",
          "A while loop that never stops"
        ],
        "answerIndex": 0,
        "explanation": "average() uses the accumulator pattern from the lists-and-loops lesson: total starts at 0 before the loop, and each score is added to it inside the loop, before dividing by len(nums)."
      },
      {
        "type": "mc",
        "question": "Why does the if/elif/else chain in the quiz-grader program check score >= 90 before score >= 70?",
        "choices": [
          "Because Python runs only the first True condition in a chain, so the higher, more restrictive condition must come first to avoid being caught by a looser one",
          "The order doesn't matter at all",
          "Because 90 is an even number",
          "Because elif chains always have to count downward"
        ],
        "answerIndex": 0,
        "explanation": "As covered in the if/elif/else lesson, only the first True condition's block runs — so checking the higher threshold (90) first ensures a high score isn't wrongly caught by a lower threshold's condition instead."
      },
      {
        "type": "short",
        "question": "Using average([70, 90]), what value is returned?",
        "answer": "80.0",
        "acceptable": [
          "80.0",
          "80"
        ],
        "explanation": "total accumulates 0+70=70, 70+90=160. len([70, 90]) is 2. 160 / 2 = 80.0 (a float, since regular division always gives a float)."
      },
      {
        "type": "short",
        "question": "In the quiz-grader program, what tool converts each score and feedback message into a single printable string?",
        "answer": "f-string",
        "acceptable": [
          "f-strings",
          "f-string",
          "an f-string"
        ],
        "explanation": "Each print() call uses an f-string, like f'{score}: Good job.', to insert the score's value directly into the message text."
      },
      {
        "type": "mc",
        "question": "What does the for loop in the quiz-grader program iterate over?",
        "choices": [
          "Every score in the scores list, one at a time, in order",
          "Every letter grade from A to F",
          "Only the first and last scores",
          "The result of the average() function"
        ],
        "answerIndex": 0,
        "explanation": "for score in scores: visits every item in the scores list, one per pass, exactly like the looping-over-lists lesson covered."
      }
    ]
  }
];
