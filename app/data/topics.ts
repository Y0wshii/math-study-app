export const topics = {
    'Quadratic Functions': {
      subtopics: {
        'Word Problems': [
          {
            question: "A ball is thrown upward with an initial velocity of 20 m/s. The height h (in meters) after t seconds is given by h = -4.9t² + 20t. How long will it take for the ball to reach its maximum height?",
            options: [
              { text: "4.08 seconds", correct: false },
              { text: "2.04 seconds", correct: true },
              { text: "1.96 seconds", correct: false },
              { text: "3.50 seconds", correct: false }
            ],
            explanation: "To find the time of maximum height, we need to find when the derivative equals zero: h'(t) = -9.8t + 20 = 0. Solving for t: t = 20/9.8 ≈ 2.04 seconds"
          },
          {
            question: "A rectangular garden has an area of 200 square feet. If the length is twice the width, what are its dimensions?",
            options: [
              { text: "15 feet by 30 feet", correct: false },
              { text: "10 feet by 20 feet", correct: true },
              { text: "8 feet by 16 feet", correct: false },
              { text: "12 feet by 24 feet", correct: false }
            ],
            explanation: "Let width = x. Then length = 2x. Area = width × length = x(2x) = 2x². If area is 200, then 2x² = 200, so x = 10. Therefore width = 10 and length = 20"
          },
          {
            question: "A rectangular field has an area of 180 square meters. If the width is 4 meters less than the length, find its dimensions.",
            options: [
              { text: "16 meters by 12 meters", correct: false },
              { text: "20 meters by 16 meters", correct: false },
              { text: "15 meters by 11 meters", correct: true },
              { text: "18 meters by 14 meters", correct: false }
            ],
            explanation: "Let length = x. Then width = x - 4. Area = length × width = x(x - 4) = x² - 4x. If area is 180, then x² - 4x - 180 = 0. Solving gives x = 15, so length = 15 and width = 11"
          },
          {
            question: "A company's profit (in dollars) from selling x items is given by P = -x² + 60x - 500. How many items should be sold to maximize profit?",
            options: [
              { text: "25 items", correct: false },
              { text: "30 items", correct: true },
              { text: "35 items", correct: false },
              { text: "40 items", correct: false }
            ],
            explanation: "For maximum profit, use vertex formula: x = -b/(2a) = -60/(2(-1)) = 30. This gives the number of items that maximizes profit."
          },
          {
            question: "A rectangular pool is being constructed with a length 3 meters more than its width. If the area must be 40 square meters, what are its dimensions?",
            options: [
              { text: "8 meters by 5 meters", correct: true },
              { text: "9 meters by 6 meters", correct: false },
              { text: "7 meters by 4 meters", correct: false },
              { text: "10 meters by 7 meters", correct: false }
            ],
            explanation: "Let width = x. Then length = x + 3. Area = x(x + 3) = 40. Solve x² + 3x - 40 = 0 to get x = 5. Therefore width = 5 and length = 8"
          }
        ],
        'Finding Roots': [
          {
            question: "Find the roots of the quadratic equation: x² + 5x + 6 = 0",
            options: [
              { text: "x = 1 and x = 4", correct: false },
              { text: "x = -1 and x = -4", correct: false },
              { text: "x = -2 and x = -3", correct: true },
              { text: "x = 2 and x = 3", correct: false }
            ],
            explanation: "Using factoring: x² + 5x + 6 = (x + 2)(x + 3) = 0, therefore x = -2 or x = -3"
          },
          {
            question: "Find the roots of the quadratic equation: 2x² + 7x + 3 = 0",
            options: [
              { text: "x = 2 and x = 1.5", correct: false },
              { text: "x = -3 and x = -0.5", correct: true },
              { text: "x = 3 and x = 0.5", correct: false },
              { text: "x = -2 and x = -1.5", correct: false }
            ],
            explanation: "Using quadratic formula: x = [-7 ± √(49-24)]/4 = [-7 ± √25]/4 = [-7 ± 5]/4, giving x = -3 or x = -0.5"
          },
          {
            question: "Find the roots of the quadratic equation: x² - 4x + 4 = 0",
            options: [
              { text: "x = -4 and x = 0", correct: false },
              { text: "x = -2 (double root)", correct: false },
              { text: "x = 2 (double root)", correct: true },
              { text: "x = 4 and x = 0", correct: false }
            ],
            explanation: "This is a perfect square: (x - 2)² = 0, therefore x = 2 is a double root"
          },
          {
            question: "Find the roots of the quadratic equation: 3x² - 27 = 0",
            options: [
              { text: "x = 3 and x = -3", correct: true },
              { text: "x = 9 and x = -9", correct: false },
              { text: "x = √6 and x = -√6", correct: false },
              { text: "x = 6 and x = -6", correct: false }
            ],
            explanation: "Rearrange to 3x² = 27, then x² = 9, therefore x = ±3"
          },
          {
            question: "Find the roots of the quadratic equation: x² + 2x - 15 = 0",
            options: [
              { text: "x = 3 and x = -5", correct: true },
              { text: "x = 5 and x = -3", correct: false },
              { text: "x = 3 and x = 5", correct: false },
              { text: "x = -3 and x = -5", correct: false }
            ],
            explanation: "Using factoring: x² + 2x - 15 = (x + 5)(x - 3) = 0, therefore x = -5 or x = 3"
          }
        ]
      }
    },
    'Series': {
      subtopics: {
        'Word Problems': [
          {
            question: "A student saves money weekly. They start with $10 in week 1 and add $5 more each week than the previous week. How much will they have saved in total after 8 weeks?",
            options: [
              { text: "$220", correct: false },
              { text: "$180", correct: true },
              { text: "$160", correct: false },
              { text: "$200", correct: false }
            ],
            explanation: "This is an arithmetic series with a₁ = 10 and d = 5. Using Sn = n(a₁ + aₙ)/2, where aₙ = 10 + (8-1)5 = 45. Therefore, S₈ = 8(10 + 45)/2 = 8(55)/2 = 180"
          },
          {
            question: "In a social media challenge, each person donates twice as much as the previous person. If the first person donates $2 and there are 6 people total, what is the total amount donated?",
            options: [
              { text: "$126", correct: true },
              { text: "$64", correct: false },
              { text: "$128", correct: false },
              { text: "$96", correct: false }
            ],
            explanation: "This is a geometric series with a₁ = 2 and r = 2. Using Sn = a₁(1-rⁿ)/(1-r) where n = 6: S₆ = 2(1-2⁶)/(1-2) = 2(1-64)/(-1) = 2(63) = 126"
          },
          {
            question: "A stadium's rows increase in seats. If the first row has 20 seats and each row after has 3 more seats than the previous row, how many total seats are there in 10 rows?",
            options: [
              { text: "335 seats", correct: true },
              { text: "350 seats", correct: false },
              { text: "320 seats", correct: false },
              { text: "365 seats", correct: false }
            ],
            explanation: "This is an arithmetic series with a₁ = 20 and d = 3. Using Sn = n(a₁ + aₙ)/2, where aₙ = 20 + (10-1)3 = 47. Therefore, S₁₀ = 10(20 + 47)/2 = 10(67)/2 = 335"
          },
          {
            question: "A video game player earns points starting with 100 in level 1, and each subsequent level earns 50 more points than the previous level. How many total points after completing 5 levels?",
            options: [
              { text: "700 points", correct: false },
              { text: "800 points", correct: false },
              { text: "650 points", correct: false },
              { text: "750 points", correct: true }
            ],
            explanation: "This is an arithmetic series with a₁ = 100 and d = 50. Using Sn = n(a₁ + aₙ)/2, where aₙ = 100 + (5-1)50 = 300. Therefore, S₅ = 5(100 + 300)/2 = 750"
          },
          {
            question: "A company's sales triple each month. If they sold 10 units in the first month, what is the total number of units sold over 4 months?",
            options: [
              { text: "360 units", correct: false },
              { text: "400 units", correct: true },
              { text: "300 units", correct: false },
              { text: "270 units", correct: false }
            ],
            explanation: "This is a geometric series with a₁ = 10 and r = 3. Using Sn = a₁(1-rⁿ)/(1-r) where n = 4: S₄ = 10(1-3⁴)/(1-3) = 10(80)/(-2) = 400"
          }
        ],
        'General Questions': [
          {
            question: "Find the sum of the first 6 terms of the arithmetic sequence: 3, 8, 13, ...",
            options: [
              { text: "93", correct: true },
              { text: "88", correct: false },
              { text: "98", correct: false },
              { text: "83", correct: false }
            ],
            explanation: "First find d = 5. Then aₙ = 3 + (6-1)5 = 28. Using Sn = n(a₁ + aₙ)/2: S₆ = 6(3 + 28)/2 = 6(31)/2 = 93"
          },
          {
            question: "Find the sum of the geometric series: 2 + 6 + 18 + 54 + 162",
            options: [
              { text: "224", correct: false },
              { text: "256", correct: false },
              { text: "238", correct: false },
              { text: "242", correct: true }
            ],
            explanation: "This is a geometric series with a₁ = 2, r = 3, n = 5. Using Sn = a₁(1-rⁿ)/(1-r): S₅ = 2(1-3⁵)/(1-3) = 2(1-243)/(-2) = 2(121) = 242"
          },
          {
            question: "For an arithmetic series with a₁ = 5 and d = 3, find the value of n if Sₙ = 95",
            options: [
              { text: "10", correct: true },
              { text: "8", correct: false },
              { text: "12", correct: false },
              { text: "9", correct: false }
            ],
            explanation: "Using Sn = n(2a₁ + (n-1)d)/2: 95 = n(10 + (n-1)3)/2, 190 = n(10 + 3n - 3), 190 = n(3n + 7), n = 10"
          },
          {
            question: "Find the sum of: 4 + 12 + 36 + 108",
            options: [
              { text: "150", correct: false },
              { text: "170", correct: false },
              { text: "160", correct: true },
              { text: "140", correct: false }
            ],
            explanation: "This is a geometric series with a₁ = 4, r = 3, n = 4. Using Sn = a₁(1-rⁿ)/(1-r): S₄ = 4(1-3⁴)/(1-3) = 4(80)/(-2) = 160"
          },
          {
            question: "Find the sum of the first 5 terms of the arithmetic series where a₁ = 2 and d = 4",
            options: [
              { text: "50", correct: true },
              { text: "45", correct: false },
              { text: "55", correct: false },
              { text: "40", correct: false }
            ],
            explanation: "Using Sn = n(a₁ + aₙ)/2, where aₙ = 2 + (5-1)4 = 18. Therefore, S₅ = 5(2 + 18)/2 = 5(20)/2 = 50"
          }
        ]
      }
    },
    'Sequences': {
      subtopics: {
        'Word Problems': [
          {
            question: "A bacteria population doubles every 3 hours. If you start with 100 bacteria, how many bacteria will there be after 15 hours?",
            options: [
              { text: "1,600 bacteria", correct: false },
              { text: "3,200 bacteria", correct: true },
              { text: "2,400 bacteria", correct: false },
              { text: "4,800 bacteria", correct: false }
            ],
            explanation: "This is a geometric sequence with r = 2 and n = 5 (15 hours ÷ 3 hours = 5 periods). Using the formula ar^(n-1): 100(2)^5 = 100(32) = 3,200 bacteria"
          },
          {
            question: "A theater has 10 rows. The first row has 8 seats, and each following row has 2 more seats than the row in front of it. How many seats are in the last row?",
            options: [
              { text: "28 seats", correct: false },
              { text: "24 seats", correct: false },
              { text: "26 seats", correct: true },
              { text: "30 seats", correct: false }
            ],
            explanation: "This is an arithmetic sequence with a₁ = 8 and d = 2. Using an = a₁ + (n-1)d: a₁₀ = 8 + (10-1)2 = 8 + 18 = 26 seats"
          },
          {
            question: "An investment grows by 10% each year. If you invest $1000 initially, how much will you have in year 4?",
            options: [
              { text: "$1,300", correct: false },
              { text: "$1,331", correct: true },
              { text: "$1,310", correct: false },
              { text: "$1,400", correct: false }
            ],
            explanation: "This is a geometric sequence with r = 1.1. Using ar^(n-1): 1000(1.1)³ = 1000(1.331) = $1,331"
          },
          {
            question: "A snowball rolling down a hill increases its diameter by 5cm each roll. If it starts with 10cm diameter, what will be its diameter after 8 rolls?",
            options: [
              { text: "45cm", correct: false },
              { text: "50cm", correct: true },
              { text: "40cm", correct: false },
              { text: "55cm", correct: false }
            ],
            explanation: "This is an arithmetic sequence with a₁ = 10 and d = 5. Using an = a₁ + (n-1)d: a₈ = 10 + (8-1)5 = 10 + 35 = 45cm"
          },
          {
            question: "In a pyramid scheme, each person recruits 3 new people. Starting with 1 person, how many people will be at level 4?",
            options: [
              { text: "27 people", correct: true },
              { text: "81 people", correct: false },
              { text: "12 people", correct: false },
              { text: "36 people", correct: false }
            ],
            explanation: "This is a geometric sequence with r = 3. Using ar^(n-1): 1(3)³ = 27 people at level 4"
          }
        ],
        'General Questions': [
          {
            question: "Find the 8th term of the geometric sequence: 2, 6, 18, ...",
            options: [
              { text: "4374", correct: true },
              { text: "4000", correct: false },
              { text: "4500", correct: false },
              { text: "4200", correct: false }
            ],
            explanation: "This is a geometric sequence with a₁ = 2 and r = 3. Using ar^(n-1): 2(3)⁷ = 2(2187) = 4374"
          },
          {
            question: "Determine if the sequence 4, 9, 14, 19, 24 is arithmetic, geometric, or neither.",
            options: [
              { text: "Neither", correct: false },
              { text: "Geometric", correct: false },
              { text: "Arithmetic", correct: true },
              { text: "Both", correct: false }
            ],
            explanation: "The difference between consecutive terms is constant (5), making this an arithmetic sequence with a₁ = 4 and d = 5"
          },
          {
            question: "Find the 5th term of the arithmetic sequence: 3, 7, 11, ...",
            options: [
              { text: "19", correct: true },
              { text: "21", correct: false },
              { text: "17", correct: false },
              { text: "23", correct: false }
            ],
            explanation: "This is an arithmetic sequence with a₁ = 3 and d = 4. Using an = a₁ + (n-1)d: a₅ = 3 + (5-1)4 = 3 + 16 = 19"
          },
          {
            question: "For the sequence 2, -6, 18, -54, what is the common ratio?",
            options: [
              { text: "-3", correct: true },
              { text: "3", correct: false },
              { text: "-2", correct: false },
              { text: "2", correct: false }
            ],
            explanation: "In a geometric sequence, divide any term by the previous term: -6/2 = -3, 18/(-6) = -3, -54/18 = -3. The common ratio is -3"
          },
          {
            question: "In an arithmetic sequence with a₁ = -5 and d = 3, find the 10th term.",
            options: [
              { text: "25", correct: false },
              { text: "19", correct: false },
              { text: "22", correct: true },
              { text: "28", correct: false }
            ],
            explanation: "Using an = a₁ + (n-1)d: a₁₀ = -5 + (10-1)3 = -5 + 27 = 22"
          }
        ]
      }
    }
  };