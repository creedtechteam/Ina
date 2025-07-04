import React, { useState } from 'react'
import { ChevronLeft, Star, Users, Lock, BookOpen } from 'lucide-react';

function Journal() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [animatingMood, setAnimatingMood] = useState(null);
  const [step, setStep] = useState(1); // 1: mood, 2: journal entry
  const [selectedResource, setSelectedResource] = useState('journal'); // default to journal
  const [journalText, setJournalText] = useState('');
  const [showJournalInput, setShowJournalInput] = useState(false);

  const moods = [
    { id: 'happy', label: 'Happy', emoji: '😊', color: 'bg-yellow-200', textColor: 'text-yellow-800' },
    { id: 'calm', label: 'Calm', emoji: '😌', color: 'bg-blue-200', textColor: 'text-blue-800' },
    { id: 'love', label: 'Love', emoji: '😍', color: 'bg-red-200', textColor: 'text-red-800' },
    { id: 'hurt', label: 'Hurt', emoji: '😢', color: 'bg-pink-200', textColor: 'text-pink-800' },
    { id: 'sad', label: 'Sad', emoji: '😞', color: 'bg-gray-200', textColor: 'text-gray-800' },
    { id: 'angry', label: 'Angry', emoji: '😠', color: 'bg-orange-200', textColor: 'text-orange-800' },
    { id: 'anxious', label: 'Anxious', emoji: '😰', color: 'bg-purple-200', textColor: 'text-purple-800' },
    { id: 'sick', label: 'Sick', emoji: '🤒', color: 'bg-green-200', textColor: 'text-green-800' },
  ];

  const handleMoodClick = (mood) => {
    setSelectedMood(mood.id);
    setAnimatingMood(mood.id);
    
    // Reset animation after 800ms (Telegram-style duration)
    setTimeout(() => {
      setAnimatingMood(null);
    }, 800);
  };

  const handleResourceClick = (resource) => {
    setSelectedResource(resource);
    setShowJournalInput(false);
  };

  const handleContinue = () => {
    if (step === 1 && selectedMood) setStep(2);
    if (step === 2 && selectedResource === 'journal') setShowJournalInput(true);
    // You can add navigation for other resources here if needed
  };

  const handleBack = () => {
    if (step === 2) setStep(1);
  };

//   const selectedMoodObj = moods.find(m => m.id === selectedMood);

  return (
    <div className="min-h-screen bg-purple-100 flex flex-col">
      {/* Header */}
      <div className="flex items-center p-4 pt-8">
        {step === 2 ? (
          <button onClick={handleBack}>
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
        ) : (
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        )}
        <h1 className="text-lg font-semibold text-gray-800 ml-2">
          {step === 1 ? "How Are You Feeling Today?" : "New Journal Entry"}
        </h1>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-6">
        {step === 1 ? (
          <>
            <div className="mb-8">
              <h2 className="text-xl font-medium text-gray-800 mb-2">Check in with Yourself.</h2>
              <p className="text-gray-600 text-sm">Tap a color that matches your mood right now</p>
            </div>
            {/* Mood Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8 max-w-md mx-auto">
              {moods.map((mood) => (
                <button
                  key={mood.id}
                  onClick={() => handleMoodClick(mood)}
                  className={`
                    ${mood.color} 
                    ${mood.textColor}
                    rounded-xl p-4 flex items-center justify-center space-x-3
                    transition-all duration-200 hover:scale-105 active:scale-95
                    ${selectedMood === mood.id ? 'ring-2 ring-purple-400 ring-offset-2' : ''}
                    min-h-[60px]
                  `}
                >
                  <span 
                    className={`
                      text-2xl transition-all duration-300 ease-out
                      ${animatingMood === mood.id ? 'animate-telegram-bounce' : ''}
                    `}
                  >
                    {mood.emoji}
                  </span>
                  <span className="font-medium text-sm">{mood.label}</span>
                </button>
              ))}
            </div>
          </>
        ) : (
          // Journal Entry Step
          <div className="flex flex-col items-center">
            {/* Mood Wheel Graph */}
            <div className="relative w-56 h-56 mb-8">
              {/* Each mood as a segment */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="224" height="224" viewBox="0 0 224 224" className="block">
                  <g>
                    {/* Happy */}
                    <path d="M112,112 L112,12 A100,100 0 0,1 192.39,48.78 Z" fill="#FEF08A"/>
                    {/* Calm */}
                    <path d="M112,112 L192.39,48.78 A100,100 0 0,1 200,112 Z" fill="#BFDBFE"/>
                    {/* Love */}
                    <path d="M112,112 L200,112 A100,100 0 0,1 192.39,175.22 Z" fill="#FCA5A5"/>
                    {/* Angry */}
                    <path d="M112,112 L192.39,175.22 A100,100 0 0,1 112,212 Z" fill="#FDBA74"/>
                    {/* Anxious */}
                    <path d="M112,112 L112,212 A100,100 0 0,1 31.61,175.22 Z" fill="#DDD6FE"/>
                    {/* Sick */}
                    <path d="M112,112 L31.61,175.22 A100,100 0 0,1 24,112 Z" fill="#BBF7D0"/>
                    {/* Sad */}
                    <path d="M112,112 L24,112 A100,100 0 0,1 31.61,48.78 Z" fill="#E5E7EB"/>
                    {/* Hurt */}
                    <path d="M112,112 L31.61,48.78 A100,100 0 0,1 112,12 Z" fill="#FBCFE8"/>
                  </g>
                </svg>
                {/* Emoji labels - positioned in a perfect circle */}
                <div
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '8px',
                    transform: 'translate(-50%, 0)',
                  }}
                >{/* Happy */}<span className="text-yellow-800 text-lg font-bold">😊</span></div>
                <div
                  className="absolute"
                  style={{
                    left: 'calc(50% + 78px)',
                    top: 'calc(50% - 78px)',
                    transform: 'translate(-50%, -50%)',
                  }}
                >{/* Calm */}<span className="text-blue-800 text-lg font-bold">😌</span></div>
                <div
                  className="absolute"
                  style={{
                    left: 'calc(100% - 8px)',
                    top: '50%',
                    transform: 'translate(-100%, -50%)',
                  }}
                >{/* Love */}<span className="text-red-800 text-lg font-bold">😍</span></div>
                <div
                  className="absolute"
                  style={{
                    left: 'calc(50% + 78px)',
                    top: 'calc(50% + 78px)',
                    transform: 'translate(-50%, -50%)',
                  }}
                >{/* Angry */}<span className="text-orange-800 text-lg font-bold">😠</span></div>
                <div
                  className="absolute"
                  style={{
                    left: '50%',
                    top: 'calc(100% - 8px)',
                    transform: 'translate(-50%, -100%)',
                  }}
                >{/* Anxious */}<span className="text-purple-800 text-lg font-bold">😰</span></div>
                <div
                  className="absolute"
                  style={{
                    left: 'calc(50% - 78px)',
                    top: 'calc(50% + 78px)',
                    transform: 'translate(-50%, -50%)',
                  }}
                >{/* Sick */}<span className="text-green-800 text-lg font-bold">🤒</span></div>
                <div
                  className="absolute"
                  style={{
                    left: '8px',
                    top: '50%',
                    transform: 'translate(0, -50%)',
                  }}
                >{/* Sad */}<span className="text-gray-800 text-lg font-bold">😞</span></div>
                <div
                  className="absolute"
                  style={{
                    left: 'calc(50% - 78px)',
                    top: 'calc(50% - 78px)',
                    transform: 'translate(-50%, -50%)',
                  }}
                >{/* Hurt */}<span className="text-pink-800 text-lg font-bold">😢</span></div>
              </div>
              {/* Center hole */}
              <div className="absolute left-1/2 top-1/2 w-28 h-28 bg-purple-100 rounded-full -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center shadow
                cursor-pointer
                " 
                style={{
                  border: selectedResource === 'journal' ? '2px solid black' : 'none'
                }}
                onClick={() => handleResourceClick('journal')}
              >
                <span className="text-md font-semibold text-gray-700">New journal Entry</span>
                <span className="text-xs text-gray-500">Start writing how you feel</span>
              </div>
            </div>
            {/* Resource Links */}
            <div className="w-full max-w-md space-y-3 mb-8">
              <div
                className={`bg-pink-100 rounded-xl px-4 py-3 flex items-center space-x-3 cursor-pointer ${selectedResource === 'streak' ? 'border-2 border-black' : ''}`}
                onClick={() => handleResourceClick('streak')}
              >
                <Star className="text-pink-400 w-6 h-6" />
                <div>
                  <div className="font-medium text-gray-800">Healing Streak</div>
                  <div className="text-xs text-gray-500">Track your consistency & growth</div>
                </div>
              </div>
              <div
                className={`bg-pink-100 rounded-xl px-4 py-3 flex items-center space-x-3 cursor-pointer ${selectedResource === 'circles' ? 'border-2 border-black' : ''}`}
                onClick={() => handleResourceClick('circles')}
              >
                <Users className="text-pink-400 w-6 h-6" />
                <div>
                  <div className="font-medium text-gray-800">Support Circles</div>
                  <div className="text-xs text-gray-500">Join peer-leed space for healing</div>
                </div>
              </div>
              <div
                className={`bg-pink-100 rounded-xl px-4 py-3 flex items-center space-x-3 cursor-pointer ${selectedResource === 'vault' ? 'border-2 border-black' : ''}`}
                onClick={() => handleResourceClick('vault')}
              >
                <Lock className="text-pink-400 w-6 h-6" />
                <div>
                  <div className="font-medium text-gray-800">public Vault</div>
                  <div className="text-xs text-gray-500">Browse or mint anonymous stories</div>
                </div>
              </div>
              <div
                className={`bg-pink-100 rounded-xl px-4 py-3 flex items-center space-x-3 cursor-pointer ${selectedResource === 'forge' ? 'border-2 border-black' : ''}`}
                onClick={() => handleResourceClick('forge')}
              >
                <BookOpen className="text-pink-400 w-6 h-6" />
                <div>
                  <div className="font-medium text-gray-800">The Forge</div>
                  <div className="text-xs text-gray-500">Learn emotional coping tools & stories</div>
                </div>
              </div>
            </div>
            {/* Journal Input */}
            {showJournalInput && selectedResource === 'journal' && (
              <textarea
                className="w-full max-w-md rounded-lg border border-gray-300 p-4 min-h-[120px] mb-4 focus:outline-none focus:ring-2 focus:ring-pink-300 bg-white"
                placeholder="Start writing how you feel..."
                value={journalText}
                onChange={e => setJournalText(e.target.value)}
              />
            )}
            {/* Continue Button */}
            <button 
              className="w-full max-w-md py-4 rounded-xl font-medium text-white bg-pink-400 mt-2"
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>
        )}
      </div>

      {/* Continue Button */}
      {step === 1 && (
        <div className="p-4 pb-8 mb-20">
          <button 
            className={`
              w-full py-4 rounded-xl font-medium text-white transition-all duration-200
              ${selectedMood 
                ? 'bg-pink-400 hover:bg-pink-500 active:bg-pink-600' 
                : 'bg-gray-300 cursor-not-allowed'
              }
            `}
            disabled={!selectedMood}
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      )}

      {/* Additional CSS for Telegram-style animations */}
      <style jsx>{`
        @keyframes telegram-bounce {
          0% {
            transform: scale(1);
          }
          15% {
            transform: scale(1.15);
          }
          30% {
            transform: scale(0.95);
          }
          45% {
            transform: scale(1.05);
          }
          60% {
            transform: scale(0.98);
          }
          75% {
            transform: scale(1.02);
          }
          100% {
            transform: scale(1);
          }
        }
        
        @keyframes telegram-pop {
          0% {
            transform: scale(1);
          }
          20% {
            transform: scale(1.2) rotate(-5deg);
          }
          40% {
            transform: scale(1.1) rotate(3deg);
          }
          60% {
            transform: scale(1.15) rotate(-2deg);
          }
          80% {
            transform: scale(1.05) rotate(1deg);
          }
          100% {
            transform: scale(1.1) rotate(0deg);
          }
        }
        
        @keyframes telegram-float {
          0%, 100% {
            transform: scale(1.1) translateY(0px);
          }
          50% {
            transform: scale(1.1) translateY(-5px);
          }
        }
        
        .animate-telegram-bounce {
          animation: telegram-bounce 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
      `}</style>

      {/* Bottom Navbar */}
      <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-50">
        <div className="flex justify-between items-center max-w-md mx-auto px-2 py-1">
          <button className="flex flex-col items-center flex-1 text-gray-400 hover:text-pink-400 focus:outline-none">
            <svg className="w-6 h-6 mb-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span className="text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center flex-1 text-pink-500 focus:outline-none">
            <svg className="w-6 h-6 mb-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 16v-4a4 4 0 018 0v4" /></svg>
            <span className="text-xs font-semibold">Journal</span>
          </button>
          <button className="flex flex-col items-center flex-1 text-gray-400 hover:text-pink-400 focus:outline-none">
            <svg className="w-6 h-6 mb-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M16 3v4M8 3v4" /></svg>
            <span className="text-xs">Circles</span>
          </button>
          <button className="flex flex-col items-center flex-1 text-gray-400 hover:text-pink-400 focus:outline-none">
            <svg className="w-6 h-6 mb-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /></svg>
            <span className="text-xs">Vault</span>
          </button>
          <button className="flex flex-col items-center flex-1 text-gray-400 hover:text-pink-400 focus:outline-none">
            <svg className="w-6 h-6 mb-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M6 20v-2a4 4 0 014-4h0a4 4 0 014 4v2" /></svg>
            <span className="text-xs">Me</span>
          </button>
          <button className="flex flex-col items-center flex-1 text-gray-400 hover:text-pink-400 focus:outline-none">
            <svg className="w-6 h-6 mb-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20h9" /><path d="M12 4v16" /><path d="M4 4h16" /><path d="M4 20h8" /></svg>
            <span className="text-xs">AI</span>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Journal