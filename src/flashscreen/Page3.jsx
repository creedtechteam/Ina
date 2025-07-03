import React, { useState, useEffect } from "react";
import pag3lo from "../assets/Ellipse 150.png";
import { useNavigate } from "react-router-dom";
const Page3 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setIsVisible(true);
    // Simulate image loading
    setTimeout(() => setImageLoaded(true), 500);
  }, []);

  const handleSkip = () => {
    navigate("/splash4");
    // Add navigation logic here
  };

  const handleNext = () => {
    navigate("/splash4");
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-purple-200 via-pink-150 to-purple-150">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-20 left-6 w-20 h-20 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 right-8 w-28 h-28 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full blur-xl opacity-15 animate-bounce"></div>
        <div
          className="absolute top-1/4 right-12 w-16 h-16 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-lg opacity-25 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Subtle particles */}
        <div className="absolute top-32 left-12 w-2 h-2 bg-purple-300 rounded-full animate-ping opacity-40"></div>
        <div
          className="absolute bottom-60 left-8 w-2 h-2 bg-pink-300 rounded-full animate-ping opacity-30"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-48 right-16 w-2 h-2 bg-purple-300 rounded-full animate-ping opacity-35"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Skip button */}
      <div className="absolute top-12 right-6 z-20">
        <div
          className={`transform transition-all duration-800 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <button
            onClick={handleSkip}
            className="text-gray-700 font-medium text-base hover:text-gray-900 transition-colors duration-300 hover:scale-105 active:scale-95 transform"
          >
            Skip
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
        {/* Header */}
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          } mb-12`}
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center">
            Reclaim your story
          </h1>
        </div>

        {/* Hero image */}
        <div
          className={`transform transition-all duration-1200 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          } mb-12`}
        >
          <div className="relative">
            {/* Glowing ring around image */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-lg opacity-30 animate-pulse scale-110"></div>

            {/* Image container */}
            <div
              className={`relative w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white/50 transition-all duration-1000 ${
                imageLoaded ? "scale-100 rotate-0" : "scale-95 rotate-3"
              }`}
            >
              {/* Placeholder image - replace with actual image */}
              <img src={pag3lo} alt="" />

              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer"></div>
            </div>

            {/* Floating elements around image */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full blur-sm opacity-60 animate-bounce"></div>
            <div
              className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur-sm opacity-60 animate-bounce"
              style={{ animationDelay: "1s" }}
            ></div>
            <div className="absolute top-8 -right-8 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-sm opacity-50 animate-pulse"></div>
          </div>
        </div>

        {/* Message */}
        <div
          className={`transform transition-all duration-1000 delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          } mb-16`}
        >
          <p className="text-gray-700 text-center font-medium text-base leading-relaxed max-w-xs">
            Your words matter. Even when no one sees them.
          </p>
        </div>

        {/* Next button */}
        <div
          className={`transform transition-all duration-1000 delay-900 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          } w-full max-w-xs`}
        >
          <button
            onClick={handleNext}
            className="w-full bg-gradient-to-r from-pink-300 to-rose-300 hover:from-pink-400 hover:to-rose-400 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 border-2 border-pink-200 hover:border-pink-300 relative overflow-hidden"
          >
            {/* Ripple effect */}
            <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>

            <span className="relative z-10 text-lg">Next</span>

            {/* Glowing effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 opacity-0 hover:opacity-30 blur-sm transition-opacity duration-300 rounded-2xl"></div>
          </button>
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-pink-300 rounded-full opacity-50"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-pink-300 rounded-full opacity-50"></div>
          </div>
        </div>

        {/* Decorative floating words */}
        <div
          className="absolute top-24 left-8 text-purple-300 opacity-40 animate-bounce text-xs font-medium"
          style={{ animationDelay: "2s" }}
        >
          Write
        </div>
        <div
          className="absolute bottom-32 right-8 text-pink-300 opacity-40 animate-bounce text-xs font-medium"
          style={{ animationDelay: "3s" }}
        >
          Heal
        </div>
        <div
          className="absolute top-40 right-4 text-purple-300 opacity-40 animate-bounce text-xs font-medium"
          style={{ animationDelay: "4s" }}
        >
          Grow
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Page3;
