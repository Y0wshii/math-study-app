import React from 'react';
import { Trophy, Star, ArrowUp, X } from 'lucide-react';

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

interface RankUpModalProps {
  oldRank: string;
  newRank: string;
  isOpen: boolean;
  onClose: () => void;
}

const RankUpModal = ({ oldRank, newRank, isOpen, onClose }: RankUpModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="text-center mb-6">
          <div className="relative inline-block">
            <Trophy className="h-16 w-16 text-yellow-500 mb-4 animate-bounce" />
            <ArrowUp className="h-6 w-6 text-green-500 absolute -right-2 -top-2 animate-pulse" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Level Up!</h2>
          <div className="flex items-center justify-center">
            <Star className="h-5 w-5 text-blue-500 mr-1" />
            <span className="text-blue-600 font-semibold">Congratulations!</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-center">
            <div className="text-gray-600 mb-2">You've advanced from</div>
            <div className="text-xl font-semibold text-gray-800 mb-4">{oldRank}</div>
            <div className="flex justify-center items-center mb-4">
              <div className="h-0.5 w-12 bg-gray-300" />
              <ArrowUp className="h-6 w-6 text-blue-500 mx-2" />
              <div className="h-0.5 w-12 bg-gray-300" />
            </div>
            <div className="text-2xl font-bold text-blue-600 animate-pulse">{newRank}</div>
          </div>

          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
          >
            Continue Learning
          </button>
        </div>
      </div>
    </div>
  );
};

export default RankUpModal;