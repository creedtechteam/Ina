
import React, { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-pink-100 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/vite.svg" alt="logo" className="w-8 h-8" />
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 items-center font-medium text-gray-800">
          <li><a href="#empower" className="hover:text-pink-400 transition">Empower</a></li>
          <li><a href="#explore" className="hover:text-pink-400 transition">explore</a></li>
          <li><a href="#how" className="hover:text-pink-400 transition">How it work</a></li>
        </ul>
        {/* Register Button */}
        <div className="hidden md:block">
          <button className="bg-pink-300 hover:bg-pink-400 text-white font-semibold py-1.5 px-6 rounded-md transition">Register</button>
        </div>
        {/* Mobile Menu Icon */}
        <button className="md:hidden flex items-center" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
          <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* Mobile Menu Drawer */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black/40 z-50 md:hidden" onClick={() => setMenuOpen(false)}>
            <div className="absolute top-0 right-0 w-2/3 max-w-xs h-full bg-pink-100 shadow-lg flex flex-col p-6 gap-6" onClick={e => e.stopPropagation()}>
              <button className="self-end mb-4" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <a href="#empower" className="py-2 px-2 rounded hover:bg-pink-200" onClick={() => setMenuOpen(false)}>Empower</a>
              <a href="#explore" className="py-2 px-2 rounded hover:bg-pink-200" onClick={() => setMenuOpen(false)}>explore</a>
              <a href="#how" className="py-2 px-2 rounded hover:bg-pink-200" onClick={() => setMenuOpen(false)}>How it work</a>
              <button className="bg-pink-300 hover:bg-pink-400 text-white font-semibold py-2 px-6 rounded-md transition mt-4" onClick={() => setMenuOpen(false)}>Register</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header