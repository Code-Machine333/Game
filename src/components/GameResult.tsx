import React from 'react';

interface GameResultProps {
  resultColor: string; 
  didWin: boolean;
}

const colorMap: Record<string, string> = {
  red: 'bg-red-500',
  green: 'bg-green-500',
  blue: 'bg-blue-500',
  yellow: 'bg-yellow-400',
};   
                         
const GameResult: React.FC<GameResultProps> = ({ resultColor, didWin }) => {
  return (
    <div
      className="flex flex-col items-center justify-center mt-4 md:mt-6 transition-all duration-500 animate-fade-in w-full"
    >
      <div
        className={`w-16 h-16 md:w-24 md:h-24 rounded-full mb-4 shadow-lg transition-transform duration-500 ${colorMap[resultColor] || 'bg-gray-300'} animate-flip`}
      />
      <span
        className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${didWin ? 'text-green-600' : 'text-red-600'} animate-fade-in`}
      >
        {didWin ? 'You Win!' : 'You Lose!'}
      </span>
    </div>
  );
};

export default GameResult;

// Tailwind custom animations (add to tailwind.config.js):
// animation: {
//   'fade-in': 'fadeIn 0.5s ease-in',
//   'flip': 'flip 0.6s cubic-bezier(0.4, 0.2, 0.2, 1)',
// },
// keyframes: {
//   fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
//   flip: { '0%': { transform: 'rotateY(90deg)' }, '100%': { transform: 'rotateY(0)' } },
// }, 