import React, { useState } from "react";
import {
  ChevronLeft,
  Calendar,
  Flame,
  Home,
  BookOpen,
  Droplets,
  Vault,
  User,
  Sparkles,
} from "lucide-react";
import BottomNav from "../Pages/Journal/BottomNav";

const Circle = () => {
  const [currentScreen, setCurrentScreen] = useState("welcome");
  const [selectedEmotion, setSelectedEmotion] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  // const [periodStarted, setPeriodStarted] = useState(false); // Removed unused state
  const [isAnimating, setIsAnimating] = useState(false);

  const emotions = [
    {
      name: "Calm",
      emoji: "😌",
      color: "bg-blue-100",
      border: "border-blue-200",
    },
    {
      name: "Sad",
      emoji: "😢",
      color: "bg-gray-100",
      border: "border-gray-200",
    },
    {
      name: "Sick",
      emoji: "🤢",
      color: "bg-green-100",
      border: "border-green-200",
    },
    {
      name: "Hurt",
      emoji: "💔",
      color: "bg-red-100",
      border: "border-red-200",
    },
  ];

  const emotionMessages = {
    Calm: "You're feeling calm—and that's beautiful. Let this stillness hold you gently today. You don't have to rush or fix anything. Just be. Your body is wise, and peace is a gift—receive it fully 🌸",
    Sad: "You're feeling sad, and that's okay. Your emotions are not a burden—they're messengers. Let the heaviness sit beside you without shame. Cry if you need to. Rest if you must. You are still whole, even in sorrow.",
    Sick: "Your body is speaking—slow down and listen. Whether it's cramps, fatigue, or just feeling off, you need tenderness today. Rest is not weakness, it's wisdom. Honor your body with softness, not pressure.",
    Hurt: "You're feeling hurt—and that feeling is real. Whether it's your body, your heart, or your spirit, you deserve gentleness right now. You don't need to explain or justify your pain. Just know this: you are worthy of care, and healing starts with being seen.",
  };

  const navigateScreen = (screen) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentScreen(screen);
      setIsAnimating(false);
    }, 150);
  };

  const generateCalendar = (year, month) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    const current = new Date(startDate);

    while (current <= lastDay || current.getDay() !== 0) {
      days.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }

    return days;
  };

  const ScreenWrapper = ({ children, className = "" }) => (
    <div
      className={`min-h-screen transition-all duration-300 ${
        isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
      } ${className}`}
    >
      {children}
    </div>
  );

  const AnimatedButton = ({ onClick, disabled, className, children }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`transition-all duration-200 lg:cursor-pointer transform hover:scale-95 active:scale-95 hover:shadow-lg ${className} ${
        disabled ? "opacity-50 cursor-not-allowed hover:scale-100" : ""
      }`}
    >
      {children}
    </button>
  );

  const renderWelcome = () => (
    <ScreenWrapper className="bg-gradient-to-b from-purple-200 to-purple-300 p-6">
      <div className="animate-fade-in">
        <div className="flex items-center mb-8">
          <ChevronLeft className="w-6 h-6 text-gray-700" />
          <h1 className="ml-2 text-lg font-medium text-gray-800">
            Welcome To Cycle + Emotion Tracker
          </h1>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 animate-slide-up">
            Track Your Cycle & Emotions Together
          </h2>
          <p className="text-gray-600 leading-relaxed px-4 animate-slide-up animation-delay-200">
            Understand how your feelings change with your body. Get smart
            prompts, mood trends, and insight into your cycle.
          </p>
        </div>

        <div className="flex justify-center mb-16 animate-slide-up animation-delay-400">
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-48 h-48 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto animate-pulse-soft">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-purple-600 rounded-full animate-bounce-subtle"></div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full mr-2 animate-wave"></div>
                  <div className="w-3 h-8 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full animate-wave animation-delay-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* <div className="w-full"> */}
          <AnimatedButton
          onClick={() => navigateScreen("emotion-selection")}
          className="w-full bg-gradient-to-r lg:cursor-pointer mb-[80px] from-rose-400 to-rose-500 text-white py-4 rounded-xl font-medium text-lg shadow-lg animate-slide-up animation-delay-600"
        >
          Get Started
        </AnimatedButton>
      {/* </div> */}
      </div>
    </ScreenWrapper>
  );

  const renderEmotionSelection = () => (
    <ScreenWrapper className="bg-gradient-to-b from-purple-200 to-purple-300 p-6">
      <div className="animate-fade-in">
        <div className="flex items-center mb-8">
          <ChevronLeft
            className="w-6 h-6 text-gray-700 cursor-pointer hover:text-gray-900 transition-colors"
            onClick={() => navigateScreen("welcome")}
          />
          <h1 className="ml-2 text-lg font-medium text-gray-800">
            Welcome To Cycle + Emotion Tracker
          </h1>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-medium text-gray-800 mb-8 animate-slide-up">
            How do you feel about your period?
          </h2>

          <div className="space-y-4">
            {emotions.map((emotion, index) => (
              <AnimatedButton
                key={emotion.name}
                onClick={() => setSelectedEmotion(emotion.name)}
                className={`w-full grid grid-cols-1 p-4 items-center justify-center rounded-xl border-2 transition-all duration-300 animate-slide-up ${
                  selectedEmotion === emotion.name
                    ? "border-purple-400 bg-white shadow-lg scale-105"
                    : "border-purple-200 bg-purple-100 hover:bg-purple-50"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-3 animate-bounce-subtle">
                    {emotion.emoji}
                  </span>
                  <span className="text-lg font-medium text-gray-800">
                    {emotion.name}
                  </span>
                </div>
              </AnimatedButton>
            ))}
          </div>
        </div>

        <AnimatedButton
          onClick={() => navigateScreen("emotion-detail")}
          className="w-full lg:cursor-pointer bg-gradient-to-r from-rose-400 to-rose-500 text-white py-4 rounded-xl font-medium text-lg shadow-lg"
          disabled={!selectedEmotion}
        >
          Continue
        </AnimatedButton>
      </div>
    </ScreenWrapper>
  );

  const renderEmotionDetail = () => (
    <ScreenWrapper className="bg-gradient-to-b from-purple-200 to-purple-300 p-6">
      <div className="animate-fade-in">
        <div className="flex items-center mb-8">
          <ChevronLeft
            className="w-6 h-6 text-gray-700 cursor-pointer hover:text-gray-900 transition-colors"
            onClick={() => navigateScreen("emotion-selection")}
          />
          <h1 className="ml-2 text-lg font-medium text-gray-800">
            Welcome To Cycle + Emotion Tracker
          </h1>
        </div>

        <div className="mb-8">
          <h2 className="text-lg text-gray-800 mb-6 animate-slide-up">
            you're in menstrual phase. how are you feeling today?
          </h2>

          <div className="space-y-4">
            {emotions.map((emotion, index) => (
              <div
                key={emotion.name}
                className={`p-4 rounded-xl transition-all duration-300 hover:shadow-md animate-slide-up ${
                  emotion.color
                } ${
                  selectedEmotion === emotion.name
                    ? "ring-2 ring-purple-400 shadow-lg"
                    : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-2">
                  <span className="text-xl mr-3">{emotion.emoji}</span>
                  <span className="text-lg font-medium text-gray-800">
                    {emotion.name}
                  </span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {emotionMessages[emotion.name]}
                </p>
              </div>
            ))}
          </div>
        </div>

        <AnimatedButton
          onClick={() => navigateScreen("cycle-setup")}
          className="w-full bg-gradient-to-r lg:cursor-pointer from-rose-400 to-rose-500 text-white py-4 rounded-xl lg:mb-10 font-medium text-lg shadow-lg"
        >
          Continue
        </AnimatedButton>
      </div>
    </ScreenWrapper>
  );

  const renderCycleSetup = () => (
    <ScreenWrapper className="bg-gradient-to-b from-purple-200 to-purple-300 p-6">
      <div className="animate-fade-in">
        <div className="flex items-center mb-8">
          <ChevronLeft
            className="w-6 h-6 text-gray-700 cursor-pointer hover:text-gray-900 transition-colors"
            onClick={() => navigateScreen("emotion-detail")}
          />
          <h1 className="ml-2 text-lg font-medium text-gray-800">
            Welcome To Cycle + Emotion Tracker
          </h1>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2 animate-slide-up">
            Track Your Cycle & Emotions Together
          </h2>
          <p className="text-lg text-gray-700 animate-slide-up animation-delay-200">
            Let's Set Up Your Cycle
          </p>
        </div>

        <div className="flex items-center mb-12 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow animate-slide-up animation-delay-400">
          <Calendar className="w-6 h-6 text-gray-600 mr-3" />
          <span className="text-lg font-medium text-gray-800">
            Let's Set Up Your Cycle
          </span>
        </div>

        <div className="flex justify-center mb-16 animate-slide-up animation-delay-600">
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-48 h-48 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto animate-pulse-soft">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-purple-600 rounded-full animate-bounce-subtle"></div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full mr-2 animate-wave"></div>
                  <div className="w-3 h-8 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full animate-wave animation-delay-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AnimatedButton
          onClick={() => navigateScreen("calendar")}
          className="w-full lg:cursor-pointer bg-gradient-to-r from-rose-400 to-rose-500 text-white py-4 rounded-xl font-medium text-lg lg:mb-10 shadow-lg"
        >
          Continue
        </AnimatedButton>
      </div>
    </ScreenWrapper>
  );

  const renderCalendar = () => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;

    const currentMonthDays = generateCalendar(currentYear, currentMonth);
    const nextMonthDays = generateCalendar(nextYear, nextMonth);

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const handleDateSelect = (date) => {
      setSelectedDate(date);
    };

    return (
      <ScreenWrapper className="bg-gradient-to-b from-purple-200 to-purple-300 p-6">
        <div className="animate-fade-in">
          <div className="flex items-center mb-8">
            <Calendar className="w-6 h-6 text-gray-700 mr-3" />
            <h1 className="text-lg font-medium text-gray-800">
              Let's Set Up Your Cycle
            </h1>
          </div>

          <div className="bg-white rounded-xl p-4 mb-6 shadow-lg animate-slide-up">
            <div className="grid grid-cols-7 gap-1 mb-4">
              {dayNames.map((day, index) => (
                <div
                  key={day}
                  className={`text-center text-sm font-medium text-gray-500 py-2 animate-fade-in`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="text-center text-lg font-medium text-gray-800 mb-4">
              {monthNames[currentMonth]}
            </div>

            <div className="grid grid-cols-7 gap-1 mb-6">
              {currentMonthDays.map((date, index) => (
                <AnimatedButton
                  key={index}
                  onClick={() => handleDateSelect(date)}
                  className={`h-10 w-10 rounded-full flex items-center justify-center text-sm transition-all duration-200 ${
                    date.getMonth() === currentMonth
                      ? selectedDate &&
                        selectedDate.getTime() === date.getTime()
                        ? "bg-gradient-to-r from-rose-400 to-rose-500 text-white shadow-lg"
                        : "text-gray-800 hover:bg-gray-100"
                      : "text-gray-300"
                  }`}
                >
                  {date.getDate()}
                </AnimatedButton>
              ))}
            </div>

            <div className="text-center text-lg font-medium text-gray-800 mb-4">
              {monthNames[nextMonth]}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {nextMonthDays.slice(0, 35).map((date, index) => (
                <AnimatedButton
                  key={index}
                  onClick={() => handleDateSelect(date)}
                  className={`h-10 w-10 rounded-full flex items-center justify-center text-sm transition-all duration-200 ${
                    date.getMonth() === nextMonth
                      ? selectedDate &&
                        selectedDate.getTime() === date.getTime()
                        ? "bg-gradient-to-r from-rose-400 to-rose-500 text-white shadow-lg"
                        : "text-gray-800 hover:bg-gray-100"
                      : "text-gray-300"
                  }`}
                >
                  {date.getDate()}
                </AnimatedButton>
              ))}
            </div>
          </div>

          <AnimatedButton
            onClick={() => {
            if (selectedDate) {
              navigateScreen("period-dashboard");
            }
            }}
            className={`w-full py-4 rounded-xl font-medium text-lg mb-4 shadow-lg ${
              selectedDate
                ? "bg-gradient-to-r from-rose-400 to-rose-500 text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!selectedDate}
          >
            {selectedDate ? "Save" : "Please select your period date."}
          </AnimatedButton>

          <div className="flex justify-between">
            <AnimatedButton
              onClick={() => {
                if (selectedDate) {
                  navigateScreen("period-dashboard");
                }
              }}
              className={`font-medium ${
                selectedDate ? "text-rose-400" : "text-gray-400"
              }`}
              disabled={!selectedDate}
            >
              Save
            </AnimatedButton>
            <AnimatedButton
              onClick={() => navigateScreen("cycle-setup")}
              className="text-gray-400 font-medium"
            >
              Cancel
            </AnimatedButton>
          </div>
        </div>
      </ScreenWrapper>
    );
  };

  // The renderDashboard function is not used in the screens object, so it can be removed or fixed if needed.

  const renderPeriodDashboard = () => (
    <ScreenWrapper className="bg-gradient-to-b from-pink-200 to-pink-300 p-6">
      <div className="animate-fade-in">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full mr-3 animate-pulse-soft"></div>
            <span className="text-lg font-medium text-gray-800">July 2</span>
          </div>
          <div className="w-8 h-8 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors cursor-pointer"></div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 animate-slide-up">
            Low Chance of getting pregnant
          </h2>

          <div className="flex items-center justify-center mb-6 animate-slide-up animation-delay-200">
            <div className="w-6 h-6 text-red-500 mr-2 animate-bounce-subtle">
              🩸
            </div>
            <span className="text-xl font-semibold text-gray-800">Period</span>
          </div>

          <div className="relative w-64 h-64 mx-auto mb-8 animate-slide-up animation-delay-400">
            <div className="w-full h-full bg-gradient-to-br from-rose-300 to-rose-400 rounded-full flex items-center justify-center shadow-lg animate-pulse-soft">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  1st day
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-700 text-lg mb-12 animate-slide-up animation-delay-600">
            Ovulation: 13 days left
          </p>
        </div>

        <AnimatedButton
          onClick={() => navigateScreen("empty-state")}
          className="w-full bg-gradient-to-r from-rose-400 to-rose-500 text-white py-4 rounded-xl font-medium text-lg shadow-lg"
        >
          Period end.
        </AnimatedButton>
      </div>
    </ScreenWrapper>
  );

  const renderEmptyState = () => (
    <ScreenWrapper className="bg-gradient-to-b from-purple-200 to-purple-300 p-6">
      <div className="animate-fade-in">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full mr-3 animate-pulse-soft"></div>
            <span className="text-lg font-medium text-gray-800">July 2</span>
          </div>
          <div className="w-8 h-8 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors cursor-pointer"></div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 animate-slide-up">
            Low Chance of getting pregnant
          </h2>
        </div>

        <div className="flex justify-center items-center h-96">
          <AnimatedButton
            onClick={() => navigateScreen("welcome")}
            className="bg-gradient-to-r from-rose-400 to-rose-500 text-white px-6 py-3 rounded-xl font-medium shadow-lg"
          >
            Start New Cycle
          </AnimatedButton>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200">
          <div className="max-w-md mx-auto px-6 py-3">
            <div className="flex justify-around items-center">
              <div className="flex flex-col items-center p-2">
                <Home className="w-6 h-6 text-gray-400" />
                <span className="text-xs text-gray-500 mt-1">Home</span>
              </div>
              <div className="flex flex-col items-center p-2">
                <BookOpen className="w-6 h-6 text-gray-400" />
                <span className="text-xs text-gray-500 mt-1">Journal</span>
              </div>
              <div className="flex flex-col items-center p-2">
                <Droplets className="w-6 h-6 text-rose-400" />
                <span className="text-xs text-rose-400 mt-1">Circles</span>
              </div>
              <div className="flex flex-col items-center p-2">
                <Vault className="w-6 h-6 text-gray-400" />
                <span className="text-xs text-gray-500 mt-1">Vault</span>
              </div>
              <div className="flex flex-col items-center p-2">
                <User className="w-6 h-6 text-gray-400" />
                <span className="text-xs text-gray-500 mt-1">Me</span>
              </div>
              <div className="flex flex-col items-center p-2">
                <Sparkles className="w-6 h-6 text-gray-400" />
                <span className="text-xs text-gray-500 mt-1">AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScreenWrapper>
  );

  const screens = {
    welcome: renderWelcome,
    "emotion-selection": renderEmotionSelection,
    "emotion-detail": renderEmotionDetail,
    "cycle-setup": renderCycleSetup,
    calendar: renderCalendar,
    // dashboard: renderDashboard, // Removed, function not defined
    "period-dashboard": renderPeriodDashboard,
    "empty-state": renderEmptyState,
  };

  return (
    <div className="w-full relative">
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-soft {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes bounce-subtle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        @keyframes wave {
          0%,
          100% {
            transform: rotate(-3deg);
          }
          50% {
            transform: rotate(3deg);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }

        .animate-pulse-soft {
          animation: pulse-soft 2s ease-in-out infinite;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .animate-wave {
          animation: wave 3s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
      {screens[currentScreen]()}
      <BottomNav />
    </div>
  );
};

export default Circle;
