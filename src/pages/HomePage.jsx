import React, { useState } from 'react';

export default function HomePage() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [timer, setTimer] = useState(30); // Example timer value
  const [result, setResult] = useState(null);
  const colors = ['red', 'green', 'blue', 'yellow'];

  // Dummy timer logic (replace with real logic as needed)
  React.useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(t => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      {/* Header with logo */}
      <header className="mb-8 flex flex-col items-center">
        <img src={require('../assets/react.svg').default} alt="Game Logo" className="w-20 h-20 mb-2" />
        <h1 className="text-3xl font-bold text-gray-800">Color Prediction Game</h1>
      </header>
   <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">History Page</h1>
      <p className="text-gray-600">This is a placeholder for the history screen.</p>
    </div>
      {/* Game Card */}
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col items-center">
        {/* Color Selection */}
        <div className="mb-6 w-full">
          <h2 className="text-xl font-semibold mb-4 text-center">Select a Color</h2>
          <div className="flex justify-center gap-4 flex-wrap">
            {colors.map(color => (
              <button
                key={color}
                className={`w-16 h-16 rounded-full border-4 transition-all duration-200 focus:outline-none ${selectedColor === color ? 'border-black scale-110' : 'border-gray-300'} bg-${color}-500`}
                onClick={() => setSelectedColor(color)}
                aria-label={`Select ${color}`}
              />
            ))}
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="mb-6 text-center">
          <span className="text-lg font-medium text-gray-700">Time Left: </span>
          <span className="text-2xl font-bold text-blue-600">{timer}s</span>
        </div>

        {/* Result Display */}
        <div className="text-center mt-4">
          <span className="text-lg font-medium text-gray-700">Result: </span>
          <span className="text-2xl font-bold text-green-600">{result ?? '--'}</span>
        </div>
      </div>
    </div>
  );
} 