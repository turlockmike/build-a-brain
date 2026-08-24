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
  }
];
