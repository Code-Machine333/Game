import React, { useEffect, useState } from 'react';

interface CountdownTimerProps {
  initialSeconds?: number;
  onComplete: () => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ initialSeconds = 30, onComplete }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds === 0) {
      onComplete();
      return;
    }
    const interval = setInterval(() => setSeconds(s => s - 1), 1000);
    return () => clearInterval(interval);
  }, [seconds, onComplete]);

  useEffect(() => {
    setSeconds(initialSeconds);
  }, [initialSeconds]);

  return (
    <div className="flex flex-col items-center justify-center w-full py-2 md:py-4">
      <span className="text-lg md:text-2xl font-medium text-gray-700 mb-2">Time Left</span>
      <span
        className={                   
          `text-5xl md:text-7xl font-extrabold text-blue-600 transition-all duration-300 ` +
          (seconds <= 5 ? 'animate-pulse text-red-500' : '')
        }
      >
        {seconds}s
      </span>
    </div>
  );
};
                                   
export default CountdownTimer;                       