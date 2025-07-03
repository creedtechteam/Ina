import page1logo from "../assets/WhatsApp Image 2025-07-02 at 14.41.34_fc51ac99 1.png";

import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Page1 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ripples, setRipples] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setIsVisible(true);

    // Create floating particles
    const interval = setInterval(() => {
      const newRipple = {
        id: Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 20 + 10,
        duration: Math.random() * 3 + 2,
      };

      setRipples((prev) => [...prev.slice(-5), newRipple]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleArrowClick = () => {
    // Add click animation logic here
    navigate("/splash2");
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {ripples.map((ripple) => (
          <div
            key={ripple.id}
            className="absolute rounded-full bg-white opacity-10 animate-ping"
            style={{
              left: `${ripple.x}%`,
              top: `${ripple.y}%`,
              width: `${ripple.size}px`,
              height: `${ripple.size}px`,
              animationDuration: `${ripple.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute top-10 left-4 w-32 h-32 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-8 w-24 h-24 bg-gradient-to-r from-rose-300 to-pink-400 rounded-full blur-xl opacity-25 animate-bounce"></div>
      <div
        className="absolute top-1/3 right-4 w-16 h-16 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full blur-lg opacity-40 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        {/* Logo and brand section */}
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative mb-8">
            {/* Glowing effect behind logo */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full blur-2xl opacity-30 animate-pulse scale-150"></div>

            {/* Logo placeholder - replace with actual logo */}
            <img src={page1logo} alt="Page 1 Logo" />
          </div>

          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-xl font-bold text-gray-600 mb-2 tracking-wider">
              UnchainHer
            </h1>
          </div>
        </div>

        {/* Main heading */}
        <div
          className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 leading-tight">
            Your words{" "}
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent animate-pulse">
              matter
            </span>
            <br />
            even when no one sees them
          </h2>
        </div>

        {/* Subtitle */}
        <div
          className={`transform transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-sm text-gray-600 mb-12 font-medium">
            Built for safety. Designed for strength.
          </p>
        </div>

        {/* Animated decorative elements */}
        <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
          <div className="w-2 h-2 bg-pink-300 rounded-full animate-ping"></div>
        </div>
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
          <div
            className="w-2 h-2 bg-rose-300 rounded-full animate-ping"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>

        {/* Bottom section with arrow */}
        <div className="absolute bottom-8 right-6">
          <div
            className={`transform transition-all duration-1000 delay-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <button
              onClick={handleArrowClick}
              className="group relative bg-white rounded-full p-3 shadow-xl border-2 border-pink-200 hover:border-pink-300 transition-all duration-300 hover:shadow-2xl hover:scale-110 active:scale-95"
            >
              {/* Ripple effect on click */}
              <div className="absolute inset-0 bg-pink-200 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

              <ArrowRight
                size={24}
                className="text-gray-700 group-hover:text-pink-600 transition-colors duration-300 relative z-10"
              />

              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300 animate-pulse"></div>
            </button>
          </div>
        </div>

        {/* Floating text elements */}
        <div
          className="absolute top-20 left-12 text-pink-300 opacity-60 animate-bounce text-xs font-medium"
          style={{ animationDelay: "2s" }}
        >
          Safe
        </div>
        <div
          className="absolute bottom-32 left-8 text-rose-300 opacity-60 animate-bounce text-xs font-medium"
          style={{ animationDelay: "3s" }}
        >
          Strong
        </div>
        <div
          className="absolute top-32 right-12 text-pink-300 opacity-60 animate-bounce text-xs font-medium"
          style={{ animationDelay: "4s" }}
        >
          Free
        </div>
      </div>

      {/* Subtle bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pink-200 to-transparent opacity-50"></div>
    </div>
  );
};

export default Page1;
