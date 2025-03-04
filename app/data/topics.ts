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
        ]      
      }
    },
    'Arcs and Sectors': {
      subtopics: {
        'Arcs': [
          {
            question: "In a circle with radius 10 units, a central angle of 90° is drawn. What is the length of the arc?",
            options: [
              { text: "5π units", correct: true },
              { text: "10π units", correct: false },
              { text: "15π units", correct: false },
              { text: "20π units", correct: false }
            ],
            explanation: "Arc length = (θ/360°) × 2πr = (90/360) × 2π(10) = (1/4) × 20π = 5π units"
          },
          {
            question: "If a minor arc measures 60°, what is the measure of its corresponding major arc?",
            options: [
              { text: "300°", correct: true },
              { text: "120°", correct: false },
              { text: "240°", correct: false },
              { text: "180°", correct: false }
            ],
            explanation: "Major arc = 360° - minor arc = 360° - 60° = 300°"
          },
          {
            question: "In a circle with radius 8 units, an arc has length 8π units. What is its central angle in degrees?",
            options: [
              { text: "180°", correct: true },
              { text: "90°", correct: false },
              { text: "120°", correct: false },
              { text: "360°", correct: false }
            ],
            explanation: "Using θ = (arc length × 360°)/(2πr): θ = (8π × 360°)/(2π × 8) = 180°"
          },
          {
            question: "A central angle of 30° creates an arc length of 5π units. What is the radius of the circle?",
            options: [
              { text: "30 units", correct: true },
              { text: "15 units", correct: false },
              { text: "20 units", correct: false },
              { text: "25 units", correct: false }
            ],
            explanation: "Using arc length formula: 5π = (30/360) × 2πr. Solve for r: 5π = (π/6)r, therefore r = 30 units"
          },
          {
            question: "If an arc length is equal to the radius of the circle, what is its measure in radians?",
            options: [
              { text: "1 radian", correct: true },
              { text: "π radians", correct: false },
              { text: "2 radians", correct: false },
              { text: "π/2 radians", correct: false }
            ],
            explanation: "By definition, 1 radian is the angle that creates an arc length equal to the radius of the circle"
          }
        ],
        'Sectors': [
          {
            question: "A sector has a central angle of 120° in a circle with radius 6 units. What is its area?",
            options: [
              { text: "12π square units", correct: true },
              { text: "18π square units", correct: false },
              { text: "24π square units", correct: false },
              { text: "36π square units", correct: false }
            ],
            explanation: "Sector area = (θ/360°) × πr² = (120/360) × π(6²) = (1/3) × 36π = 12π square units"
          },
          {
            question: "If a sector has area 8π square units and radius 4 units, what is its central angle in degrees?",
            options: [
              { text: "180°", correct: true },
              { text: "90°", correct: false },
              { text: "120°", correct: false },
              { text: "360°", correct: false }
            ],
            explanation: "Using sector area formula: 8π = (θ/360°) × π(16). Solve for θ: θ = 180°"
          },
          {
            question: "In a circle of radius 5 units, what is the area of a sector with central angle 72°?",
            options: [
              { text: "5π square units", correct: true },
              { text: "10π square units", correct: false },
              { text: "15π square units", correct: false },
              { text: "25π square units", correct: false }
            ],
            explanation: "Sector area = (72/360) × π(5²) = (1/5) × 25π = 5π square units"
          },
          {
            question: "A sector has area 18π square units and central angle 90°. What is the radius of the circle?",
            options: [
              { text: "6 units", correct: true },
              { text: "8 units", correct: false },
              { text: "9 units", correct: false },
              { text: "12 units", correct: false }
            ],
            explanation: "Using sector area formula: 18π = (90/360) × πr². Solve for r: 18π = (1/4)πr², therefore r = 6 units"
          },
          {
            question: "What fraction of a circle's area is represented by a sector with central angle 60°?",
            options: [
              { text: "1/6", correct: true },
              { text: "1/3", correct: false },
              { text: "1/4", correct: false },
              { text: "1/8", correct: false }
            ],
            explanation: "Fraction = θ/360° = 60°/360° = 1/6 of the total circle area"
          }
        ]
      }
    },
    'Degrees and Radians': {
      subtopics: {
        'Converting Between Units': [
          {
            question: "Convert 180° to radians.",
            options: [
              { text: "π radians", correct: true },
              { text: "2π radians", correct: false },
              { text: "π/2 radians", correct: false },
              { text: "3π/2 radians", correct: false }
            ],
            explanation: "To convert degrees to radians, multiply by π/180°. So 180° × (π/180°) = π radians"
          },
          {
            question: "Convert 2π radians to degrees.",
            options: [
              { text: "180°", correct: false },
              { text: "360°", correct: true },
              { text: "90°", correct: false },
              { text: "270°", correct: false }
            ],
            explanation: "To convert radians to degrees, multiply by 180°/π. So 2π × (180°/π) = 360°"
          },
          {
            question: "Convert 45° to radians.",
            options: [
              { text: "π/6 radians", correct: false },
              { text: "π/3 radians", correct: false },
              { text: "π/4 radians", correct: true },
              { text: "π/2 radians", correct: false }
            ],
            explanation: "45° × (π/180°) = (45π/180) = π/4 radians"
          },
          {
            question: "Convert 3π/4 radians to degrees.",
            options: [
              { text: "135°", correct: true },
              { text: "120°", correct: false },
              { text: "145°", correct: false },
              { text: "150°", correct: false }
            ],
            explanation: "(3π/4) × (180°/π) = (3 × 180°)/4 = 135°"
          },
          {
            question: "Convert 270° to radians.",
            options: [
              { text: "π radians", correct: false },
              { text: "3π/2 radians", correct: true },
              { text: "2π radians", correct: false },
              { text: "5π/3 radians", correct: false }
            ],
            explanation: "270° × (π/180°) = (270π/180) = 3π/2 radians"
          }
        ],
        'Word Problems': [
          {
            question: "A Ferris wheel makes one complete rotation in 60 seconds. How many radians does it rotate per second?",
            options: [
              { text: "π/30 radians", correct: true },
              { text: "π/15 radians", correct: false },
              { text: "π/45 radians", correct: false },
              { text: "π/60 radians", correct: false }
            ],
            explanation: "One complete rotation is 2π radians. In 60 seconds, it rotates 2π radians, so per second it rotates 2π/60 = π/30 radians"
          },
          {
            question: "An angle of 40° appears in the first quadrant. What is its reference angle in radians?",
            options: [
              { text: "2π/9 radians", correct: true },
              { text: "π/9 radians", correct: false },
              { text: "π/4.5 radians", correct: false },
              { text: "π/6 radians", correct: false }
            ],
            explanation: "The reference angle is the same as the original angle in first quadrant. Convert 40° to radians: 40° × (π/180°) = (40π/180) = 2π/9 radians"
          },
          {
            question: "A planet completes 1/3 of its orbit in 60 days. How many degrees does it travel per day?",
            options: [
              { text: "2°", correct: true },
              { text: "3°", correct: false },
              { text: "1.5°", correct: false },
              { text: "2.5°", correct: false }
            ],
            explanation: "1/3 of orbit = 120° (as full orbit is 360°). In 60 days it travels 120°, so per day it travels 120°/60 = 2°"
          },
          {
            question: "A robot arm rotates π/6 radians every 2 seconds. How many degrees does it rotate in 10 seconds?",
            options: [
              { text: "150°", correct: true },
              { text: "120°", correct: false },
              { text: "180°", correct: false },
              { text: "90°", correct: false }
            ],
            explanation: "In 2 seconds: π/6 radians = 30°. In 10 seconds: (30° × 10)/2 = 150°"
          },
          {
            question: "A wind turbine rotates 20° per second. How many complete rotations does it make in one minute?",
            options: [
              { text: "2.5 rotations", correct: false },
              { text: "3 rotations", correct: false },
              { text: "3.33 rotations", correct: true },
              { text: "4 rotations", correct: false }
            ],
            explanation: "In one minute (60 seconds): 20° × 60 = 1200°. Complete rotations = 1200°/360° = 3.33 rotations"
          }
        ]
      }
    },
    'Relative Frequency': {
      subtopics: {
        'Word Problems': [
          {
            question: "A class of 30 students was surveyed about their favorite season. If 12 chose summer, what is the relative frequency?",
            options: [
              { text: "0.4 or 40%", correct: true },
              { text: "0.3 or 30%", correct: false },
              { text: "0.5 or 50%", correct: false },
              { text: "0.6 or 60%", correct: false }
            ],
            explanation: "Relative frequency = count/total = 12/30 = 0.4 = 40%"
          },
          {
            question: "In a survey of 50 students about transportation to school, 20 walk, 15 take the bus, and 15 get driven. What is the relative frequency of students who walk?",
            options: [
              { text: "0.4 or 40%", correct: true },
              { text: "0.3 or 30%", correct: false },
              { text: "0.45 or 45%", correct: false },
              { text: "0.35 or 35%", correct: false }
            ],
            explanation: "Relative frequency of walking = 20/50 = 0.4 = 40%"
          },
          {
            question: "In two different classes, Class A has 8 out of 20 students playing sports, while Class B has 12 out of 25 students playing sports. Which class has a higher relative frequency of athletes?",
            options: [
              { text: "Class A (0.4)", correct: false },
              { text: "Class B (0.48)", correct: true },
              { text: "They are equal", correct: false },
              { text: "Cannot be determined", correct: false }
            ],
            explanation: "Class A: 8/20 = 0.4\nClass B: 12/25 = 0.48\nClass B has a higher relative frequency"
          },
          {
            question: "In a school of 200 students, 80 participate in music programs. If another school has 150 students and the same relative frequency of music participation, how many students would be in music?",
            options: [
              { text: "60 students", correct: true },
              { text: "50 students", correct: false },
              { text: "70 students", correct: false },
              { text: "75 students", correct: false }
            ],
            explanation: "First school relative frequency = 80/200 = 0.4\nSecond school participants = 150 × 0.4 = 60 students"
          },
          {
            question: "A basketball player makes 15 out of 25 free throws in game A, and 18 out of 30 free throws in game B. In which game was their relative frequency of successful shots better?",
            options: [
              { text: "Game A", correct: true },
              { text: "Game B", correct: false },
              { text: "Equal performance", correct: false },
              { text: "Need more information", correct: false }
            ],
            explanation: "Game A: 15/25 = 0.6 or 60%\nGame B: 18/30 = 0.6 or 60%\nEqual performance in both games"
          }
        ],
        'Data Analysis': [
          {
            question: "A survey shows the following responses for favorite colors: Red: 8, Blue: 12, Green: 5 (Total: 25). What is the relative frequency of blue?",
            options: [
              { text: "0.48 or 48%", correct: true },
              { text: "0.32 or 32%", correct: false },
              { text: "0.52 or 52%", correct: false },
              { text: "0.40 or 40%", correct: false }
            ],
            explanation: "Relative frequency of blue = 12/25 = 0.48 = 48%"
          },
          {
            question: "If 15 out of 40 students have brown eyes, and you surveyed 100 more students with the same relative frequency, how many brown-eyed students would you expect?",
            options: [
              { text: "37.5 students", correct: true },
              { text: "35 students", correct: false },
              { text: "40 students", correct: false },
              { text: "45 students", correct: false }
            ],
            explanation: "Current relative frequency = 15/40 = 0.375\nExpected number = 0.375 × 100 = 37.5 students"
          },
          {
            question: "In a sample of 200 test scores, 40 students got A, 80 got B, 60 got C, and 20 got D. What is the relative frequency of B grades?",
            options: [
              { text: "0.4 or 40%", correct: true },
              { text: "0.3 or 30%", correct: false },
              { text: "0.35 or 35%", correct: false },
              { text: "0.45 or 45%", correct: false }
            ],
            explanation: "Relative frequency of B grades = 80/200 = 0.4 = 40%"
          },
          {
            question: "A coin is flipped 50 times, resulting in 28 heads. What is the relative frequency of heads?",
            options: [
              { text: "0.56 or 56%", correct: true },
              { text: "0.50 or 50%", correct: false },
              { text: "0.52 or 52%", correct: false },
              { text: "0.54 or 54%", correct: false }
            ],
            explanation: "Relative frequency of heads = 28/50 = 0.56 = 56%"
          },
          {
            question: "In a school library, out of 150 borrowed books last week, 45 were fiction, 75 were non-fiction, and 30 were reference books. What is the relative frequency of non-fiction books?",
            options: [
              { text: "0.5 or 50%", correct: true },
              { text: "0.4 or 40%", correct: false },
              { text: "0.6 or 60%", correct: false },
              { text: "0.45 or 45%", correct: false }
            ],
            explanation: "Relative frequency of non-fiction = 75/150 = 0.5 = 50%"
          }
        ]
      }
    },
    'Sample Space and Tree Diagrams': {
      subtopics: {
        'Sample Space': [
          {
            question: "A bag contains 3 red marbles and 4 blue marbles. Two marbles are drawn without replacement. How many possible outcomes are in the sample space?",
            options: [
              { text: "49 outcomes", correct: false },
              { text: "42 outcomes", correct: true },
              { text: "21 outcomes", correct: false },
              { text: "14 outcomes", correct: false }
            ],
            explanation: "For the first draw: 7 possibilities (3 red + 4 blue). For each first draw: if red drawn first (3 choices) → 6 remaining (3 blue). If blue drawn first (4 choices) → 6 remaining (3 red + 3 blue). Total = (3×6) + (4×6) = 42 outcomes"
          },
          {
            question: "A fair six-sided die is rolled twice. What is the size of the sample space for outcomes where the sum of the two rolls is greater than 7?",
            options: [
              { text: "15 outcomes", correct: true },
              { text: "18 outcomes", correct: false },
              { text: "21 outcomes", correct: false },
              { text: "12 outcomes", correct: false }
            ],
            explanation: "Total possible combinations = 36. Count pairs that sum > 7: (2,6),(3,5),(3,6),(4,4),(4,5),(4,6),(5,3),(5,4),(5,5),(5,6),(6,2),(6,3),(6,4),(6,5),(6,6) = 15 outcomes"
          },
          {
            question: "Three coins are flipped simultaneously. In the sample space, how many outcomes contain exactly two heads?",
            options: [
              { text: "4 outcomes", correct: false },
              { text: "3 outcomes", correct: true },
              { text: "2 outcomes", correct: false },
              { text: "6 outcomes", correct: false }
            ],
            explanation: "Total sample space = 8 outcomes (HHH,HHT,HTH,THH,HTT,THT,TTH,TTT). Outcomes with exactly 2 heads: HHT, HTH, THH = 3 outcomes"
          },
          {
            question: "A card is drawn from a standard deck, then replaced, and a second card is drawn. What is the size of the sample space for getting at least one heart?",
            options: [
              { text: "765 outcomes", correct: true },
              { text: "689 outcomes", correct: false },
              { text: "832 outcomes", correct: false },
              { text: "676 outcomes", correct: false }
            ],
            explanation: "Total outcomes = 52 × 52 = 2704. Probability of no hearts = (39/52)² = 1939/2704. Therefore, outcomes with at least one heart = 2704 - 1939 = 765"
          },
          {
            question: "In a group of 4 students, each student must choose either math or science. How many different possible outcomes are in the sample space?",
            options: [
              { text: "8 outcomes", correct: false },
              { text: "16 outcomes", correct: true },
              { text: "12 outcomes", correct: false },
              { text: "24 outcomes", correct: false }
            ],
            explanation: "Each student has 2 choices, and there are 4 students. Using multiplication principle: 2⁴ = 16 possible outcomes"
          }
        ],
        'Tree Diagrams': [
          {
            question: "In a tree diagram representing the gender of three children in order of birth, how many different paths lead to exactly two boys?",
            options: [
              { text: "2 paths", correct: false },
              { text: "3 paths", correct: true },
              { text: "4 paths", correct: false },
              { text: "6 paths", correct: false }
            ],
            explanation: "Possible paths for two boys: BBG, BGB, GBB = 3 paths. Each level of tree splits into B/G, creating these combinations"
          },
          {
            question: "A tree diagram shows a person picking 2 cards from a deck without replacement. How many branches are at the first level?",
            options: [
              { text: "52 branches", correct: true },
              { text: "26 branches", correct: false },
              { text: "13 branches", correct: false },
              { text: "4 branches", correct: false }
            ],
            explanation: "First level shows all possible first picks = 52 cards. Each of these branches then splits into 51 possibilities for second pick"
          },
          {
            question: "In a two-stage experiment, a coin is flipped and then a die is rolled if heads, or a card is drawn if tails. How many endpoints are in the tree diagram?",
            options: [
              { text: "58 endpoints", correct: true },
              { text: "54 endpoints", correct: false },
              { text: "52 endpoints", correct: false },
              { text: "62 endpoints", correct: false }
            ],
            explanation: "From H: 6 possible die outcomes. From T: 52 possible card outcomes. Total endpoints = 6 + 52 = 58"
          },
          {
            question: "A tree diagram represents selecting a color (Red/Blue) and then a number (1-3) if Red was chosen, or a letter (A/B) if Blue was chosen. How many complete paths are possible?",
            options: [
              { text: "5 paths", correct: true },
              { text: "6 paths", correct: false },
              { text: "4 paths", correct: false },
              { text: "8 paths", correct: false }
            ],
            explanation: "From Red: 3 paths (R1, R2, R3). From Blue: 2 paths (BA, BB). Total = 3 + 2 = 5 complete paths"
          },
          {
            question: "In a three-stage experiment with binary choices (Success/Failure) at each stage, how many unique paths in the tree diagram lead to exactly two successes?",
            options: [
              { text: "2 paths", correct: false },
              { text: "3 paths", correct: true },
              { text: "4 paths", correct: false },
              { text: "6 paths", correct: false }
            ],
            explanation: "Paths for two successes: SSF, SFS, FSS = 3 paths. Each stage splits into S/F, creating these combinations"
          }
        ]
      }
    }
  };
  