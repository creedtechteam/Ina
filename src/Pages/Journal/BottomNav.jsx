import React from "react";
import { Link, useLocation } from "react-router-dom";

function BottomNav() {
  const location = useLocation();

  // Function to check if current path matches the nav item
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Navigation items configuration
  const navItems = [
    {
      path: "/journal/account",
      label: "Home",
      icon: (
        <svg
          className="w-6 h-6 mb-0.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      path: "/Journal/Resources/NewJournal",
      label: "Journal",
      icon: (
        <svg
          className="w-6 h-6 mb-0.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 16v-4a4 4 0 018 0v4" />
        </svg>
      ),
    },
    {
      path: "/circles",
      label: "Circles",
      icon: (
        <svg
          className="w-6 h-6 mb-0.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M16 3v4M8 3v4" />
        </svg>
      ),
    },
    {
      path: "/vault",
      label: "Vault",
      icon: (
        <svg
          className="w-6 h-6 mb-0.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18" />
        </svg>
      ),
    },
    {
      path: "/users",
      label: "Me",
      icon: (
        <svg
          className="w-6 h-6 mb-0.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M6 20v-2a4 4 0 014-4h0a4 4 0 014 4v2" />
        </svg>
      ),
    },
    {
      path: "/ai",
      label: "AI",
      icon: (
        <svg
          className="w-6 h-6 mb-0.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 20h9" />
          <path d="M12 4v16" />
          <path d="M4 4h16" />
          <path d="M4 20h8" />
        </svg>
      ),
    },
  ];

  return (
    <div>
      {/* Bottom Navbar */}
      <nav className="sticky bottom-0 flex justify-between items-center w-full  px-2 pt-1 pb-1 bg-white border-t border-gray-200">
        {navItems.map((item) => {
          const active = isActive(item.path);

          return (
            <Link key={item.path} to={item.path}>
              <button
                className={`flex flex-col items-center flex-1 focus:outline-none transition-colors duration-200 ${
                  active ? "text-pink-500" : "text-gray-400 hover:text-pink-400"
                }`}
              >
                {item.icon}
                <span className={`text-xs ${active ? "font-semibold" : ""}`}>
                  {item.label}
                </span>
              </button>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default BottomNav;
// This component renders a bottom navigation bar with links to different sections of the journal application.
// It uses React Router's `useLocation` to determine the current path and highlight the active
