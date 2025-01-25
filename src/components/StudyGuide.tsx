'use client';

import React from 'react';

export const StudyGuide = ({ topicName }: { topicName: string }) => {
  const guides = {
    'Quadratic Functions': (
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Core Concepts</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Form: f(x) = ax² + bx + c
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              a: determines opening direction (up if a&gt;0, down if a&lt;0)
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              b: affects axis of symmetry (-b/2a)
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              c: y-intercept
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Steps for Solving</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Identify a, b, and c</li>
            <li>Find vertex: x = -b/2a</li>
            <li>Calculate y-coordinate for vertex</li>
            <li>Determine y-intercept (c)</li>
            <li>Find roots using quadratic formula if needed</li>
          </ol>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Worked Example</h3>
          <div className="bg-blue-50 p-6 rounded-xl">
            <p className="font-semibold mb-4">f(x) = -2x² + 4x + 1</p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>a = -2 (opens down)</li>
              <li>b = 4</li>
              <li>c = 1 (y-intercept)</li>
              <li>Vertex: x = -4/(-4) = 1</li>
              <li>y = -2(1)² + 4(1) + 1 = 3</li>
              <li>Vertex is (1, 3)</li>
            </ol>
          </div>
        </div>
      </div>
    ),

    'Series': (
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Arithmetic Series</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Terms increase by constant difference (d)
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Sum formula: Sn = n(a₁ + aₙ)/2
            </li>
          </ul>
          <div className="bg-blue-50 p-6 rounded-xl mt-4">
            <p className="font-semibold mb-2">Example: 2, 5, 8, 11, 14</p>
            <ul className="space-y-1 text-gray-700">
              <li>d = 3</li>
              <li>n = 5 terms</li>
              <li>Sum = 5(2 + 14)/2 = 40</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Geometric Series</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Terms increase by constant ratio (r)
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Sum formula: Sn = a₁(1-rⁿ)/(1-r)
            </li>
          </ul>
          <div className="bg-blue-50 p-6 rounded-xl mt-4">
            <p className="font-semibold mb-2">Example: 2, 6, 18, 54</p>
            <ul className="space-y-1 text-gray-700">
              <li>r = 3</li>
              <li>n = 4 terms</li>
              <li>Sum = 2(1-3⁴)/(1-3) = 80</li>
            </ul>
          </div>
        </div>
      </div>
    ),

    'Sequences': (
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Types and Formulas</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Arithmetic: aₙ = a₁ + (n-1)d
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Geometric: aₙ = a₁rⁿ⁻¹
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Examples</h3>
          <div className="space-y-4">
            <div className="bg-blue-50 p-6 rounded-xl">
              <p className="font-semibold mb-2">Arithmetic: 3, 7, 11, 15</p>
              <ul className="space-y-1 text-gray-700">
                <li>d = 4</li>
                <li>a₁ = 3</li>
                <li>a₆ = 3 + 5(4) = 23</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <p className="font-semibold mb-2">Geometric: 2, 6, 18, 54</p>
              <ul className="space-y-1 text-gray-700">
                <li>r = 3</li>
                <li>a₁ = 2</li>
                <li>a₅ = 2(3⁴) = 162</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),

    'Direct Variation': (
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Core Concept</h3>
          <p className="text-xl font-semibold text-blue-600 mb-4">y = kx where k is constant</p>
          
          <h4 className="text-xl font-bold text-gray-800 mb-2">Properties</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Graph passes through origin
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              k is slope (rate of change)
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Variables increase/decrease together
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Worked Example</h3>
          <div className="bg-blue-50 p-6 rounded-xl">
            <p className="font-semibold mb-2">Given: y = 12 when x = 3</p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Find k: 12 = k(3)</li>
              <li>k = 4</li>
              <li>Equation: y = 4x</li>
              <li>When x = 7: y = 28</li>
            </ol>
          </div>
        </div>
      </div>
    ),

    'Inverse Variation': (
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Core Concept</h3>
          <p className="text-xl font-semibold text-blue-600 mb-4">xy = k where k is constant</p>
          
          <h4 className="text-xl font-bold text-gray-800 mb-2">Properties</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Graph is hyperbola
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Never touches axes
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              As one variable increases, other decreases
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Worked Example</h3>
          <div className="bg-blue-50 p-6 rounded-xl">
            <p className="font-semibold mb-2">Given: y = 8 when x = 3</p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Find k: (8)(3) = k</li>
              <li>k = 24</li>
              <li>Equation: xy = 24</li>
              <li>When x = 6: y = 24/6 = 4</li>
            </ol>
          </div>

          <div className="mt-4">
            <h4 className="text-xl font-bold text-gray-800 mb-2">Common Applications</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Pressure and volume
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Speed and time
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Work and workers
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),

    'Arcs and Sectors': (
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Formulas</h3>
          <div className="bg-blue-50 p-6 rounded-xl">
            <ul className="space-y-3 text-gray-700">
              <li><strong>Arc Length:</strong> L = (θ/360°) × 2πr</li>
              <li><strong>Sector Area:</strong> A = (θ/360°) × πr²</li>
              <li><strong>Radian Measure:</strong> θ(rad) = θ(deg) × (π/180°)</li>
              <li><strong>Major Arc:</strong> 360° - minor arc</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Important Concepts</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              1 radian creates an arc length equal to the radius
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Sector area is proportional to central angle
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Major arc + minor arc = 360°
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Worked Examples</h3>
          <div className="bg-blue-50 p-6 rounded-xl space-y-4">
            <div>
              <p className="font-semibold mb-2">Arc Length Example</p>
              <p>Find arc length for r = 5 units, θ = 60°:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>L = (60/360) × 2π(5)</li>
                <li>L = (1/6) × 10π</li>
                <li>L = 5π/3 units</li>
              </ol>
            </div>
            <div>
              <p className="font-semibold mb-2">Sector Area Example</p>
              <p>Find sector area for r = 6 units, θ = 90°:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>A = (90/360) × π(6²)</li>
                <li>A = (1/4) × 36π</li>
                <li>A = 9π square units</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    ),

    'Degrees and Radians': (
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Core Concepts</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Degrees: Full circle = 360°
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Radians: Full circle = 2π radians
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Conversion formulas:
              <ul className="ml-6 mt-2">
                <li>Degrees to Radians: multiply by π/180°</li>
                <li>Radians to Degrees: multiply by 180°/π</li>
              </ul>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Common Values</h3>
          <div className="bg-blue-50 p-6 rounded-xl">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left">Degrees</th>
                  <th className="text-left">Radians</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>30°</td>
                  <td>π/6</td>
                </tr>
                <tr>
                  <td>45°</td>
                  <td>π/4</td>
                </tr>
                <tr>
                  <td>60°</td>
                  <td>π/3</td>
                </tr>
                <tr>
                  <td>90°</td>
                  <td>π/2</td>
                </tr>
                <tr>
                  <td>180°</td>
                  <td>π</td>
                </tr>
                <tr>
                  <td>360°</td>
                  <td>2π</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Tips for Problem Solving</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              For angles greater than 360° or 2π, divide by 360° or 2π to find rotations
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              For negative angles, add 360° or 2π to get positive equivalent
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Reference angles are always positive and ≤ 90° or π/2
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Worked Example</h3>
          <div className="bg-blue-50 p-6 rounded-xl">
            <p className="font-semibold mb-2">Convert 225° to radians</p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Use formula: multiply by π/180°</li>
              <li>225° × (π/180°)</li>
              <li>Simplify: 225π/180 = 5π/4</li>
              <li>Answer: 5π/4 radians</li>
            </ol>
          </div>
        </div>
      </div>
    )
  };


  return (
    <div className="bg-white rounded-2xl shadow-xl">
      <div className="p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Study Guide: {topicName}</h2>
        {topicName in guides ? guides[topicName as keyof typeof guides] : null}
      </div>
    </div>
  );
};