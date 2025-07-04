import React, { useState } from "react";
import { ArrowRight, User, UserPlus, Sparkles } from "lucide-react";

const AnimatedButton = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);

    // Navigate to appropriate route
    if (isSignUp) {
      window.location.href = "/splash";
    } else {
      window.location.href = "/splash7";
    }
  };

  return (
    <div className="min-h-screen bg-pink-300 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <div className="w-3 h-3 bg-white/20 rounded-full blur-sm"></div>
          </div>
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-500"></div>

      <div className="relative z-10">
        {/* Header with animated text */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 animate-fade-in">
            {isSignUp ? (
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Ready to Join?
              </span>
            ) : (
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Welcome Back!
              </span>
            )}
          </h1>
          <p className="text-white/80 text-xl animate-fade-in delay-300">
            {isSignUp
              ? "Create your account and start your journey"
              : "Sign in to continue your experience"}
          </p>
        </div>

        {/* Main animated button */}
        <div className="relative group">
          {/* Glowing ring effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 rounded-full opacity-75 group-hover:opacity-100 blur-sm animate-pulse"></div>

          <button
            onClick={handleClick}
            disabled={isLoading}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`
              relative px-12 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 
              text-white font-bold rounded-full text-xl shadow-2xl 
              transform transition-all duration-500 ease-out
              hover:scale-110 hover:shadow-3xl active:scale-95 
              disabled:opacity-70 disabled:cursor-not-allowed
              ${isLoading ? "animate-pulse" : ""}
              ${isHovered ? "animate-bounce" : ""}
            `}
          >
            {/* Animated shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full transform -skew-x-12 animate-shine"></div>

            <div className="relative flex items-center space-x-4">
              {isLoading ? (
                <>
                  <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span className="animate-pulse">Processing...</span>
                  <Sparkles className="w-6 h-6 animate-spin" />
                </>
              ) : (
                <>
                  <div className="relative">
                    {isSignUp ? (
                      <UserPlus className="w-6 h-6 transform group-hover:rotate-12 transition-transform duration-300" />
                    ) : (
                      <User className="w-6 h-6 transform group-hover:rotate-12 transition-transform duration-300" />
                    )}
                    {/* Icon glow */}
                    <div className="absolute inset-0 bg-white/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <span className="transition-all duration-300 transform group-hover:scale-105">
                    {isSignUp ? "Sign Up" : "Sign In"}
                  </span>

                  <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
                </>
              )}
            </div>

            {/* Button background animations */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-300 animate-pulse"></div>

            {/* Click ripple effect */}
            <div className="absolute inset-0 rounded-full opacity-0 group-active:opacity-50 group-active:animate-ping bg-white"></div>
          </button>
        </div>

        {/* Toggle link with animation */}
        <div className="text-center mt-8">
          <p className="text-white/90 text-lg mb-4">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
          </p>
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="relative group text-purple-700 hover:text-purple-800 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <span className="relative z-10">
              {isSignUp ? "Sign In Instead" : "Create Account"}
            </span>
            {/* Animated underline */}
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-purple-400/20 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
          </button>
        </div>

        {/* Floating action indicators */}
        <div className="absolute -top-4 -right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-75"></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-150"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(300%) skewX(-12deg);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-shine {
          animation: shine 2s infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </div>
  );
};

export default AnimatedButton;
