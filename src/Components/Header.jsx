import React, { useState } from "react";
import { logo } from "../lib/Images";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-pink-100 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="/">
            <img src={logo} alt="logo" loading="lazy" className="w-8 h-8" />
          </a>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 items-center font-medium text-gray-800">
          <li>
            <button
              className="hover:text-pink-400 transition bg-transparent border-none outline-none cursor-pointer"
              onClick={() => {
                window.dispatchEvent(
                  new CustomEvent("scroll-to-section", {
                    detail: { section: "explore" },
                  })
                );
              }}
            >
              Explore
            </button>
          </li>
          <li>
            <button
              className="hover:text-pink-400 transition bg-transparent border-none outline-none cursor-pointer"
              onClick={() => {
                window.dispatchEvent(
                  new CustomEvent("scroll-to-section", {
                    detail: { section: "empower" },
                  })
                );
              }}
            >
              Empower
            </button>
          </li>

          <li>
            <button
              className="hover:text-pink-400 transition bg-transparent border-none outline-none cursor-pointer"
              onClick={() => {
                window.dispatchEvent(
                  new CustomEvent("scroll-to-section", {
                    detail: { section: "how" },
                  })
                );
              }}
            >
              How it works
            </button>
          </li>
        </ul>
        {/* Register Button */}
        <div className="hidden md:block">
          <button className="bg-pink-300 hover:bg-pink-400 text-white font-semibold py-1.5 px-6 rounded-md transition">
            <Link to="/choose">Register/Login</Link>{" "}
          </button>
        </div>
        {/* Mobile Menu Icon */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <svg
            className="w-7 h-7 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* Mobile Menu Drawer */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-50 md:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <div
              className="absolute top-0 right-0 w-2/3 max-w-xs h-full bg-pink-100 shadow-lg flex flex-col p-6 gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="self-end mb-4"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg
                  className="w-7 h-7 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <button
                className="py-2 px-2 rounded hover:bg-pink-200 capitalize text-left text-gray-800"
                onClick={() => {
                  setMenuOpen(false);
                  window.dispatchEvent(
                    new CustomEvent("scroll-to-section", {
                      detail: { section: "explore" },
                    })
                  );
                }}
              >
                explore
              </button>
              <button
                className="py-2 px-2 rounded hover:bg-pink-200 text-left text-gray-800"
                onClick={() => {
                  setMenuOpen(false);
                  window.dispatchEvent(
                    new CustomEvent("scroll-to-section", {
                      detail: { section: "empower" },
                    })
                  );
                }}
              >
                Empower
              </button>

              <button
                className="py-2 px-2 rounded hover:bg-pink-200 text-left text-gray-800"
                onClick={() => {
                  setMenuOpen(false);
                  window.dispatchEvent(
                    new CustomEvent("scroll-to-section", {
                      detail: { section: "how" },
                    })
                  );
                }}
              >
                How it works
              </button>
              <Link to="/choose">
                <button className="bg-pink-300 hover:bg-pink-400 text-white font-semibold py-2 px-6 rounded-md transition mt-4">
                  Register/Login
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
