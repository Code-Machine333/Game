import React, { useState } from 'react';
import GameHeader from '../components/GameHeader';
import { getGameResult } from '../utils/fakeApi';
import CountdownTimer from '../components/CountdownTimer';
import ColorButton from '../components/ColorButton';
import GameResult from '../components/GameResult';

const COLORS = [
  { name: 'Red', value: 'red', tw: 'bg-red-500' },
  { name: 'Green', value: 'green', tw: 'bg-green-500' },
  { name: 'Blue', value: 'blue', tw: 'bg-blue-500' },
  { name: 'Yellow', value: 'yellow', tw: 'bg-yellow-400' },
];

type GameResultType = { color: string; didWin: boolean };
                                                                         
export default function GameScreen() {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [timer, setTimer] = useState(30);
  const [result, setResult] = useState<GameResultType | null>(null);
  const [loading, setLoading] = useState(false);

  // Handle timer complete
  const handleTimerComplete = React.useCallback(() => {
    if (selectedColor) {
      setLoading(true);
      getGameResult(selectedColor).then((res: GameResultType) => {
        setResult(res);
        setLoading(false);
      });
    }
  }, [selectedColor]);

  // Reset for new round
  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    setResult(null);
    setTimer(30);
  };
                                                                      
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <GameHeader />
      <main className="flex-1 flex flex-col items-center justify-center px-2 py-6 md:py-12">
        <div className="w-full max-w-md md:max-w-2xl bg-white rounded-2xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row md:items-center md:gap-10">
          {/* Game Card Left (Color Selection) */}
          <section className="flex-1 flex flex-col items-center md:items-start mb-6 md:mb-0">
            <h2 className="text-lg md:text-2xl font-semibold mb-4 text-center md:text-left">Select a Color</h2>
            <div className="flex gap-4 flex-wrap justify-center md:justify-start">
              {COLORS.map(color => (
                <ColorButton
                  key={color.value}
                  color={color.tw}
                  selected={selectedColor === color.value}
                  onClick={() => handleColorSelect(color.value)}
                  ariaLabel={`Select ${color.name}`}
                />
              ))}
            </div>
          </section>
          {/* Game Card Right (Timer & Result) */}
          <section className="flex-1 flex flex-col items-center md:items-end mt-6 md:mt-0">
            <div className="mb-4 text-center md:text-right w-full flex flex-col items-center md:items-end">
              <CountdownTimer
                initialSeconds={timer}
                onComplete={handleTimerComplete}
              />
            </div>
            <div className="text-center md:text-right w-full flex flex-col items-center md:items-end min-h-[80px] md:min-h-[100px]">
              {loading && <span className="text-gray-500 animate-pulse">Checking result...</span>}
              {result && (
                <GameResult resultColor={result.color} didWin={result.didWin} />
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}                                                  