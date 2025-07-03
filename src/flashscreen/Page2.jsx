import React, { useState, useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Page2 = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("American");
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredLanguage, setHoveredLanguage] = useState(null);
  const navigate = useNavigate();
  const languages = [
    { name: "Romanian", code: "ro" },
    { name: "Korean", code: "ko" },
    { name: "Hungarian", code: "hu" },
    { name: "American", code: "en" },
    { name: "Arabic", code: "ar" },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  const handleContinue = () => {
    navigate("/splash3");
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-purple-200 via-pink-150 to-purple-150">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-16 left-8 w-24 h-24 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-32 right-12 w-32 h-32 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full blur-xl opacity-15 animate-bounce"></div>
        <div
          className="absolute top-1/3 right-8 w-16 h-16 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-lg opacity-25 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>

        {/* Subtle particles */}
        <div className="absolute top-20 left-16 w-2 h-2 bg-purple-300 rounded-full animate-ping opacity-40"></div>
        <div
          className="absolute bottom-40 left-12 w-2 h-2 bg-pink-300 rounded-full animate-ping opacity-30"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-2 h-2 bg-purple-300 rounded-full animate-ping opacity-35"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
        {/* Header section */}
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          } mb-8`}
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-3">
            Choose your language
          </h1>
          <p className="text-sm text-gray-600 text-center font-medium">
            Select preferred language
          </p>
        </div>

        {/* Language selection list */}
        <div className="w-full max-w-xs space-y-3 mb-16">
          {languages.map((language, index) => (
            <div
              key={language.code}
              className={`transform transition-all duration-700 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <button
                onClick={() => handleLanguageSelect(language.name)}
                onMouseEnter={() => setHoveredLanguage(language.name)}
                onMouseLeave={() => setHoveredLanguage(null)}
                className={`w-full p-4 rounded-xl text-center font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 relative overflow-hidden ${
                  selectedLanguage === language.name
                    ? "bg-gradient-to-r from-pink-300 to-rose-300 text-white shadow-lg border-2 border-pink-400"
                    : "bg-white/70 backdrop-blur-sm text-gray-700 shadow-sm border-2 border-white/50 hover:bg-white/90 hover:shadow-md"
                }`}
              >
                {/* Ripple effect */}
                <div
                  className={`absolute inset-0 bg-pink-200 rounded-xl opacity-0 transition-opacity duration-300 ${
                    hoveredLanguage === language.name ? "opacity-20" : ""
                  }`}
                ></div>

                <div className="relative z-10 flex items-center justify-center">
                  <span className="text-base">{language.name}</span>
                  {selectedLanguage === language.name && (
                    <Check size={18} className="ml-2 animate-pulse" />
                  )}
                </div>

                {/* Glowing border for selected */}
                {selectedLanguage === language.name && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-400 to-rose-400 opacity-30 blur-sm animate-pulse"></div>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Continue button */}
        <div className="absolute bottom-8 right-6">
          <div
            className={`transform transition-all duration-1000 delay-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <button
              onClick={handleContinue}
              className="group relative bg-gradient-to-r from-pink-300 to-rose-300 rounded-full p-4 shadow-xl border-2 border-pink-200 hover:border-pink-300 transition-all duration-300 hover:shadow-2xl hover:scale-110 active:scale-95"
            >
              {/* Ripple effect */}
              <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

              <ArrowRight
                size={24}
                className="text-white group-hover:text-pink-100 transition-colors duration-300 relative z-10"
              />

              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-300 animate-pulse"></div>
            </button>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-pink-300 rounded-full opacity-50"></div>
            <div className="w-2 h-2 bg-pink-300 rounded-full opacity-50"></div>
          </div>
        </div>

        {/* Decorative elements */}
        <div
          className="absolute top-32 left-4 text-purple-300 opacity-50 animate-bounce text-xs font-medium"
          style={{ animationDelay: "2s" }}
        >
          Global
        </div>
        <div
          className="absolute bottom-48 right-4 text-pink-300 opacity-50 animate-bounce text-xs font-medium"
          style={{ animationDelay: "3s" }}
        >
          Connect
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-purple-200 to-transparent opacity-40"></div>
    </div>
  );
};

export default Page2;
