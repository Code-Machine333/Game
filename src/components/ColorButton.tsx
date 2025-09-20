import React from 'react';
import { motion } from 'framer-motion';

interface ColorButtonProps {
  color: string; // Tailwind color class, e.g. 'bg-red-500'
  onClick: () => void;
  selected?: boolean;
  ariaLabel?: string;
}

const ColorButton: React.FC<ColorButtonProps> = ({ color, onClick, selected = false, ariaLabel }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.97 }}
      animate={selected ? { boxShadow: '0 0 0 4px #60a5fa, 0 0 16px 4px rgba(96,165,250,0.5)' } : { boxShadow: 'none' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`w-14 h-14 md:w-20 md:h-20 rounded-full border-4 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${selected ? 'border-black scale-110' : 'border-gray-300'} ${color} hover:scale-105 hover:shadow-lg m-1`}
      onClick={onClick}
      aria-label={ariaLabel}
      style={{ outline: 'none' }}
    />
  );
};

export default ColorButton; 