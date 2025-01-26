import React from 'react';
import { Trophy, Star, ChevronUp } from 'lucide-react';

interface LevelProgressProps {
  xp: number;
  oldRank: string;
  newRank: string;
  showLevelUp: boolean;
  onClose: () => void;
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
    <>
      {showLevelUp && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-[9999]" 
             style={{ background: 'linear-gradient(135deg, rgba(30,58,138,0.95), rgba(49,46,129,0.95))' }}>
          <div className="animate-bounce">
            <div className="relative p-1 rounded-2xl"
                 style={{ background: 'linear-gradient(90deg, #facc15, #f97316, #ef4444)',
                         boxShadow: '0 0 30px 5px rgba(250,204,21,0.5)' }}>
              <div className="px-16 py-12 rounded-xl text-center"
                   style={{ background: 'linear-gradient(135deg, rgb(30,58,138), rgb(49,46,129))' }}>
                <ChevronUp className="w-20 h-20 mx-auto mb-6 text-yellow-400 animate-pulse" strokeWidth={3} />
                <div className="text-5xl font-black mb-4"
                     style={{ background: 'linear-gradient(90deg, #facc15, #f97316, #ef4444)',
                             WebkitBackgroundClip: 'text',
                             WebkitTextFillColor: 'transparent' }}>
                  LEVEL UP!
                </div>
                <div className="text-2xl font-medium text-white/90">
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
    </>
  );
};

export default LevelProgress;