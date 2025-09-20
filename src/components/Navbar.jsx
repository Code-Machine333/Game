import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/login', label: 'Login' },
  { to: '/history', label: 'History' },
];

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full bg-white shadow flex items-center justify-between px-4 py-3 mb-4">
      {/* Logo or site title (optional) */}
      <span className="text-xl font-bold text-blue-600 md:hidden">Game</span>
      {/* Hamburger for mobile */}
      <button className="md:hidden p-2" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {/* Links */}
      <ul className={`flex-col md:flex-row md:flex gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow md:shadow-none z-20 transition-all duration-200 ${open ? 'flex' : 'hidden'}`}>
        {navItems.map(item => (
          <li key={item.to} className="text-center md:text-left">
            <Link
              to={item.to}
              className={`block text-lg font-medium px-3 py-2 rounded transition-colors duration-200 hover:bg-gray-100 ${location.pathname === item.to ? 'text-blue-600 font-bold' : 'text-gray-700'}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
} 