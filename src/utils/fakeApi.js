/**
 * @typedef {Object} GameResultType
 * @property {string} color
 * @property {boolean} didWin
 */

const COLORS = ['red', 'green', 'blue', 'yellow'];

/**
 * @param {string} selectedColor
 * @returns {Promise<GameResultType>}
 */
export function getGameResult(selectedColor) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const didWin = color === selectedColor;
      resolve({ color, didWin });
    }, 700); // Simulate network delay
  });
} 