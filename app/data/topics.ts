import { Topics } from '../types';

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
            question: "A rectangular field has an area of 180 square meters. If the width is 4 meters less than the length, find its dimensions.",
            options: [
              { text: "15 meters by 11 meters", correct: false },
              { text: "18 meters by 14 meters", correct: true },
              { text: "16 meters by 12 meters", correct: false },
              { text: "20 meters by 16 meters", correct: false }
            ],
            explanation: "Let length = x and width = (x-4)\nArea = length × width = x(x-4) = 180\nx² - 4x - 180 = 0\nUsing quadratic formula: x = [-(-4) ± √(16 + 720)]/2\nx = [4 ± √736]/2\nx = [4 ± 27.13]/2\nx = 18 or -14 (discard negative)\nLength = 18m, Width = 14m\nVerify: 18 × 14 = 252 - 72 = 180 square meters"
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
            explanation: "To find the maximum profit:\n1. This is a quadratic function where a = -1, b = 60, c = -500\n2. For a quadratic function, the maximum occurs at x = -b/(2a)\n3. Here, x = -60/(2(-1)) = 60/2 = 30\n4. We can verify this is a maximum (not minimum) because a is negative\n5. To double-check: \n   - At x = 29: P = -841 + 1740 - 500 = 399\n   - At x = 30: P = -900 + 1800 - 500 = 400\n   - At x = 31: P = -961 + 1860 - 500 = 399\nTherefore, profit is maximized at 30 items."
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
                  { text: "$220", correct: true },
                  { text: "$180", correct: false },
                  { text: "$160", correct: false },
                  { text: "$200", correct: false }
                ],
                explanation: "Let's track the weekly savings:\nWeek 1: $10\nWeek 2: $15 (+$5)\nWeek 3: $20 (+$5)\nWeek 4: $25 (+$5)\nWeek 5: $30 (+$5)\nWeek 6: $35 (+$5)\nWeek 7: $40 (+$5)\nWeek 8: $45 (+$5)\nTotal = $10 + $15 + $20 + $25 + $30 + $35 + $40 + $45 = $220\nNote: This is not a simple arithmetic sequence because each amount increases by a constant ($5), making it a quadratic sequence."
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
              { text: "1000 points", correct: true },
              { text: "750 points", correct: false },
              { text: "850 points", correct: false },
              { text: "900 points", correct: false }
            ],
            explanation: "Let's break it down level by level:\nLevel 1: 100 points\nLevel 2: 150 points\nLevel 3: 200 points\nLevel 4: 250 points\nLevel 5: 300 points\nTotal = 100 + 150 + 200 + 250 + 300 = 1000 points\nThis is an arithmetic sequence with a₁ = 100 and d = 50. Using Sn = n(a₁ + aₙ)/2 = 5(100 + 300)/2 = 5(400)/2 = 1000"
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
              { text: "45cm", correct: true },
              { text: "50cm", correct: false },
              { text: "40cm", correct: false },
              { text: "55cm", correct: false }
            ],
            explanation: "Let's solve step by step:\n1. Initial diameter = 10cm\n2. Each roll adds 5cm\n3. Number of increases = 7 (after 8 rolls, there are 7 increases)\n4. Using arithmetic sequence formula: an = a₁ + (n-1)d\n   where a₁ = 10, n = 8, d = 5\n5. Final diameter = 10 + (8-1)5\n                 = 10 + (7)5\n                 = 10 + 35\n                 = 45cm\nWe can verify: 10→15→20→25→30→35→40→45"
          },
          {
            question: "In a pyramid scheme, each person recruits 3 new people. Starting with 1 person, how many people will be at level 4?",
            options: [
              { text: "27 people", correct: true },
              { text: "81 people", correct: false },
              { text: "12 people", correct: false },
              { text: "36 people", correct: false }
            ],
            explanation: "Let's track each level:\nLevel 1: 1 person\nLevel 2: 3 people (3¹)\nLevel 3: 9 people (3²)\nLevel 4: 27 people (3³)\nThis is a geometric sequence where each level has 3 times as many people as the previous level. For level 4, we use ar^(n-1) = 1(3³) = 27 people. Note that 81 (the wrong answer) would be level 5."
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
    },
    'Direct Variation': {
      subtopics: {
        'Word Problems': [
          {
            question: "The cost of printing custom t-shirts varies directly with the number of shirts ordered. If 25 shirts cost $300, how much would 40 shirts cost?",
            options: [
              { text: "$480", correct: true },
              { text: "$450", correct: false },
              { text: "$500", correct: false },
              { text: "$420", correct: false }
            ],
            explanation: "Since y = kx, find k by dividing $300 by 25 = $12 per shirt. Then multiply $12 by 40 shirts to get $480."
          },
          {
            question: "The force (F) required to stretch a spring varies directly with its displacement (x). If a force of 24 Newtons stretches the spring 6 centimeters, what force is needed to stretch it 15 centimeters?",
            options: [
              { text: "50 Newtons", correct: false },
              { text: "60 Newtons", correct: true },
              { text: "45 Newtons", correct: false },
              { text: "55 Newtons", correct: false }
            ],
            explanation: "Find k by dividing 24N by 6cm = 4 N/cm. Then multiply 4 N/cm by 15cm to get 60N."
          },
          {
            question: "In a chemical reaction, the amount of product formed varies directly with the amount of reactant used. If 15 grams of reactant produces 45 grams of product, how much product will 25 grams of reactant produce?",
            options: [
              { text: "65 grams", correct: false },
              { text: "70 grams", correct: false },
              { text: "75 grams", correct: true },
              { text: "80 grams", correct: false }
            ],
            explanation: "Find k by dividing 45g product by 15g reactant = 3. Then multiply 3 by 25g reactant to get 75g product."
          },
          {
            question: "The time taken to fill a pool varies directly with its volume. If it takes 3 hours to fill a 1500-gallon pool, how long will it take to fill a 2500-gallon pool?",
            options: [
              { text: "4 hours", correct: false },
              { text: "4.5 hours", correct: false },
              { text: "5 hours", correct: true },
              { text: "5.5 hours", correct: false }
            ],
            explanation: "Find k by dividing 3 hours by 1500 gallons = 0.002 hours/gallon. Then multiply by 2500 gallons to get 5 hours."
          },
          {
            question: "The gravitational force between two objects varies directly with their masses. If the force between two 10kg objects is 0.5 Newtons, what would be the force if one object's mass was increased to 25kg?",
            options: [
              { text: "1.25 Newtons", correct: true },
              { text: "1 Newton", correct: false },
              { text: "1.5 Newtons", correct: false },
              { text: "0.75 Newtons", correct: false }
            ],
            explanation: "Original force = k(10)(10). New force = k(25)(10). The ratio is 25/10 = 2.5. Multiply original force 0.5N by 2.5 to get 1.25N."
          }
        ],
        'General Questions': [
          {
            question: "If y varies directly with x, and y = 12 when x = 3, find y when x = 7.",
            options: [
              { text: "24", correct: false },
              { text: "28", correct: true },
              { text: "21", correct: false },
              { text: "32", correct: false }
            ],
            explanation: "Find k by dividing y by x: 12/3 = 4. Then multiply k by new x: 4 × 7 = 28."
          },
          {
            question: "In the direct variation equation y = kx, if y = 15 when x = 5, what is the value of k?",
            options: [
              { text: "2", correct: false },
              { text: "2.5", correct: false },
              { text: "3", correct: true },
              { text: "3.5", correct: false }
            ],
            explanation: "Substitute the values into y = kx: 15 = k(5). Solve for k: k = 15/5 = 3."
          },
          {
            question: "If y varies directly as x, and y = 8 when x = 2, find the equation relating x and y.",
            options: [
              { text: "y = 4x", correct: true },
              { text: "y = 2x", correct: false },
              { text: "y = 6x", correct: false },
              { text: "y = 8x", correct: false }
            ],
            explanation: "Find k using y = kx: 8 = k(2). Solve for k: k = 4. Therefore, y = 4x."
          },
          {
            question: "If P varies directly as Q, and P = 24 when Q = 6, find Q when P = 16.",
            options: [
              { text: "3", correct: false },
              { text: "4", correct: true },
              { text: "5", correct: false },
              { text: "6", correct: false }
            ],
            explanation: "Find k: 24 = k(6), so k = 4. Use P = 4Q and substitute P = 16: 16 = 4Q. Solve for Q: Q = 4."
          },
          {
            question: "If y varies directly as x, and y = -10 when x = 5, find y when x = -3.",
            options: [
              { text: "8", correct: false },
              { text: "6", correct: true },
              { text: "4", correct: false },
              { text: "-6", correct: false }
            ],
            explanation: "Find k: -10 = k(5), so k = -2. Use y = -2x and substitute x = -3: y = -2(-3) = 6."
          }
        ]
      }
    },
    'Inverse Variation': {
      subtopics: {
        'Word Problems': [
          {
            question: "The pressure (P) of a fixed amount of gas varies inversely with its volume (V). If the pressure is 300 kPa when the volume is 4 liters, what is the pressure when the volume is 10 liters?",
            options: [
              { text: "120 kPa", correct: true },
              { text: "150 kPa", correct: false },
              { text: "100 kPa", correct: false },
              { text: "140 kPa", correct: false }
            ],
            explanation: "Using P₁V₁ = P₂V₂: (300)(4) = P₂(10). Solve for P₂: P₂ = 1200/10 = 120 kPa."
          },
          {
            question: "The time taken to complete a construction project varies inversely with the number of workers. If 12 workers can complete the project in 15 days, how many days will it take 20 workers?",
            options: [
              { text: "10 days", correct: false },
              { text: "9 days", correct: true },
              { text: "8 days", correct: false },
              { text: "11 days", correct: false }
            ],
            explanation: "Using k = xy: k = (12)(15) = 180. With 20 workers, time = 180/20 = 9 days."
          },
          {
            question: "The intensity of light varies inversely with the square of the distance from the source. If the intensity is 100 lux at 2 meters, what is it at 5 meters?",
            options: [
              { text: "16 lux", correct: true },
              { text: "20 lux", correct: false },
              { text: "25 lux", correct: false },
              { text: "18 lux", correct: false }
            ],
            explanation: "Using I₁d₁² = I₂d₂²: (100)(2²) = I₂(5²). Solve for I₂: I₂ = 400/25 = 16 lux."
          },
          {
            question: "The frequency (f) of a vibrating string varies inversely with its length (L). If a 30cm string vibrates at 440 Hz, what frequency will it produce when shortened to 20cm?",
            options: [
              { text: "660 Hz", correct: true },
              { text: "600 Hz", correct: false },
              { text: "580 Hz", correct: false },
              { text: "620 Hz", correct: false }
            ],
            explanation: "Using k = fL: k = (440)(30) = 13,200. With L = 20, f = 13,200/20 = 660 Hz."
          },
          {
            question: "The strength of a gravitational field varies inversely with the square of the distance from the center. If the field strength is 10 N/kg at 3 meters, what is it at 6 meters?",
            options: [
              { text: "5 N/kg", correct: false },
              { text: "3.5 N/kg", correct: false },
              { text: "2.5 N/kg", correct: true },
              { text: "4 N/kg", correct: false }
            ],
            explanation: "Using g₁r₁² = g₂r₂²: (10)(3²) = g₂(6²). Solve for g₂: g₂ = 90/36 = 2.5 N/kg."
          }
        ],
        'General Questions': [
          {
            question: "If y varies inversely as x, and y = 8 when x = 3, find y when x = 6.",
            options: [
              { text: "4", correct: true },
              { text: "3", correct: false },
              { text: "5", correct: false },
              { text: "6", correct: false }
            ],
            explanation: "Find k using xy = k: (8)(3) = 24 = k. When x = 6, y = 24/6 = 4."
          },
          {
            question: "In the inverse variation equation xy = k, if y = 12 when x = 2, what is the value of k?",
            options: [
              { text: "20", correct: false },
              { text: "24", correct: true },
              { text: "22", correct: false },
              { text: "26", correct: false }
            ],
            explanation: "Substitute values into xy = k: (2)(12) = k. Therefore, k = 24."
          },
          {
            question: "If y varies inversely as x, and y = 5 when x = -4, find the equation relating x and y.",
            options: [
              { text: "xy = -20", correct: true },
              { text: "xy = 20", correct: false },
              { text: "xy = -15", correct: false },
              { text: "xy = 15", correct: false }
            ],
            explanation: "Find k using xy = k: (5)(-4) = -20 = k. Therefore, xy = -20."
          },
          {
            question: "If P varies inversely as Q, and P = 15 when Q = 2, find Q when P = 6.",
            options: [
              { text: "5", correct: true },
              { text: "4", correct: false },
              { text: "6", correct: false },
              { text: "3", correct: false }
            ],
            explanation: "Find k: (15)(2) = 30 = k. When P = 6: (6)(Q) = 30. Solve for Q: Q = 5."
          },
          {
            question: "If y varies inversely as x², and y = 16 when x = 2, find y when x = 4.",
            options: [
              { text: "8", correct: false },
              { text: "6", correct: false },
              { text: "4", correct: true },
              { text: "2", correct: false }
            ],
            explanation: "Find k using yx² = k: (16)(2²) = 64 = k. When x = 4: y(4²) = 64. Solve for y: y = 64/16 = 4."
          }
        ]      }
    }
  };