import React from 'react';
import { Trophy, Star, ChevronUp } from 'lucide-react';

interface LevelProgressProps {
  xp: number;
  showLevelUp: boolean;
}

const LEVELS = [
  { name: "Number Novice", minXP: 0 },
  { name: "Equation Explorer", minXP: 100 },
  { name: "Formula Fighter", minXP: 250 },
  { name: "Math Maverick", minXP: 500 },
  { name: "Algebra Ace", minXP: 1000 },
  { name: "Calculus Conqueror", minXP: 2000 },
  { name: "Theory Titan", minXP: 4000 },
  { name: "Math Master", minXP: 8000 }
];

const calculateLevel = (xp: number) => {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].minXP) {
      return {
        currentLevel: i,
        nextLevel: i < LEVELS.length - 1 ? i + 1 : i,
        progress: i < LEVELS.length - 1 
          ? ((xp - LEVELS[i].minXP) / (LEVELS[i + 1].minXP - LEVELS[i].minXP)) * 100
          : 100
      };
    }
  }
  return { currentLevel: 0, nextLevel: 1, progress: 0 };
};

const LevelProgress: React.FC<LevelProgressProps> = ({ xp, showLevelUp }) => {
  const { currentLevel, nextLevel, progress } = calculateLevel(xp);
  
  return (
    <div className="relative">
      {showLevelUp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-900/95 to-indigo-900/95">
          <div className="animate-[bounce_1.5s_infinite] text-center">
            <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-1 rounded-2xl shadow-[0_0_30px_5px] shadow-yellow-400/50">
              <div className="bg-gradient-to-br from-blue-900 to-indigo-900 px-12 py-8 rounded-xl">
                <ChevronUp className="h-16 w-16 mx-auto mb-4 text-yellow-400 animate-pulse" strokeWidth={3} />
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 mb-2">
                  LEVEL UP!
                </div>
                <div className="text-xl font-medium text-white/90">
                  You've reached a new level!
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Trophy className="h-6 w-6 text-yellow-500 mr-2" />
            <h3 className="text-lg font-bold text-gray-900">
              {LEVELS[currentLevel].name}
            </h3>
          </div>
          <div className="flex items-center">
            <Star className="h-5 w-5 text-blue-500 mr-1" />
            <span className="text-blue-600 font-semibold">{xp} XP</span>
          </div>
        </div>
        
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div className="text-xs font-semibold text-gray-600">
              Level {currentLevel + 1}
            </div>
            {currentLevel < LEVELS.length - 1 && (
              <div className="text-xs font-semibold text-gray-600">
                Next: {LEVELS[nextLevel].name}
              </div>
            )}
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
            <div
              style={{ width: `${progress}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 transition-all duration-500"
            />
          </div>
          {currentLevel < LEVELS.length - 1 && (
            <div className="text-xs text-gray-600">
              {LEVELS[nextLevel].minXP - xp} XP to next level
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LevelProgress;