import React from 'react';

export default function GameHeader() {
  return (
    <header className="w-full flex items-center justify-between px-2 sm:px-4 py-2 sm:py-3 bg-white shadow-md">
      {/* Left: Logo and Title */}
      <div className="flex items-center gap-2 sm:gap-4">
        <img src={require('../assets/react.svg').default} alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
        <span className="text-lg sm:text-xl font-bold text-gray-800 hidden sm:inline">Color Prediction Game</span>
      </div>
      {/* Right: Profile Icon/Menu */}
      <button className="p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none">
        {/* Simple profile SVG icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 sm:w-8 sm:h-8 text-gray-700">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 1115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75v-.75z" />
        </svg>
      </button>
    </header>
  );
} 