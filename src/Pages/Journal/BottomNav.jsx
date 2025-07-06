// import { , , , Home_log, journal_log } from "../../lib/Images"

import { Link, useLocation } from "react-router-dom";
import { Home_log, CirclesIco, Journal_log, Profile, Vault, AI } from "../../lib/Images";



function BottomNav() {
  const location = useLocation();
  // Navigation config
  const navItems = [
    {
      path: "/account",
      icon: Home_log,
      label: "Home",
    },
    {
      path: "/newjournal",
      icon: Journal_log,
      label: "Journal",
    },
    {
      path: "/circle",
      icon: CirclesIco,
      label: "Circles",
    },
    {
      path: "/vault",
      icon: Vault,
      label: "Vault",
    },
    {
      path: "/users",
      icon: Profile,
      label: "Me",
    },
    {
      path: "/ai",
      icon: AI,
      label: "AI",
    },
  ];

  return (
    <div>
      {/* Bottom Navbar */}
      <nav className="fixed w-full p-3 bottom-0 flex justify-between items-center mx-auto px-2 pt-1 pb-1 bg-white border-t border-gray-200">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link key={item.path} to={item.path}>
              <button
                className={`flex flex-col items-center flex-1 focus:outline-none transition-colors duration-200
                  ${isActive ? "text-pink-500 border-b-2 border-pink-500" : "text-gray-400 hover:text-pink-400 border-b-2 border-transparent"}
                `}
              >
                <img src={item.icon} alt="" />
                <span className={`text-xs ${isActive ? "font-semibold" : ""}`}>{item.label}</span>
              </button>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
export default BottomNav;