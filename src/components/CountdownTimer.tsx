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
       <button className="p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none">
        {/* Simple profile SVG icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 sm:w-8 sm:h-8 text-gray-700">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 1115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75v-.75z" />
        </svg>
      </button>
    </div>
  );
};
                                   
export default CountdownTimer;                       