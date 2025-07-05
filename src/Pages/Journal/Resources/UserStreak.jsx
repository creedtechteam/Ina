import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/named
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function getToday() {
  const now = new Date();
  return now.toISOString().split('T')[0];
}

function getStreakData() {
  // Default: streak of 5 ending at Thursday (today is Saturday, July 5, 2025)
  const defaultDays = [
    '2025-06-29', // Sun
    '2025-06-30', // Mon
    '2025-07-01', // Tue
    '2025-07-02', // Wed
    '2025-07-03', // Thu
  ];
  const defaultStreak = {
    days: defaultDays,
    currentStreak: 5,
    firstEntry: '2025-06-29',
    longestStreak: 5,
    mostMood: 'Sad',
  };
  const streak = JSON.parse(localStorage.getItem('journalStreak') || 'null');
  return streak && streak.days && streak.days.length > 0 ? streak : defaultStreak;
}

function UserStreak() {
  const [streakCount, setStreakCount] = useState(0);
  const [visitDays, setVisitDays] = useState([]);
  const [firstEntry, setFirstEntry] = useState('');
  const [longestStreak, setLongestStreak] = useState(0);
  const [mostMood, setMostMood] = useState('');
  const [todayWritten, setTodayWritten] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const streak = getStreakData();
    setStreakCount(streak.currentStreak || 0);
    setVisitDays(streak.days || []);
    // First entry is always today
    setFirstEntry(getToday());
    // Longest streak is total days logged in
    setLongestStreak((streak.days || []).length);
    // Mood: get most selected mood from localStorage (simulate)
    let mood = 'Happy';
    const moodStats = JSON.parse(localStorage.getItem('journalMoodStats') || '{}');
    if (moodStats && typeof moodStats === 'object' && Object.keys(moodStats).length > 0) {
      mood = Object.entries(moodStats).sort((a, b) => b[1] - a[1])[0][0];
    }
    setMostMood(mood);
    setTodayWritten((streak.days || []).includes(getToday()));
  }, []);

  // Calculate week progress
  const weekArr = Array(7).fill(false);
  visitDays.forEach(date => {
    const d = new Date(date);
    weekArr[d.getDay()] = true;
  });

  // Days to reward (example: 3 days away from 9)
  const daysToReward = 3; // static for now, can be dynamic

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#F8E6F0] px-4 py-6">
      {/* Back button */}
      <div className="w-full max-w-xs flex items-center mb-2">
        <button onClick={() => navigate(-1)} className="text-gray-500 hover:text-gray-700 focus:outline-none">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div className="flex-1 text-center -ml-6">
          <span className="text-base font-medium text-gray-700">Streak Overview</span>
        </div>
      </div>

      {/* Motivation */}
      <div className="text-center mb-2">
        <div className="text-base font-medium text-gray-700">You've shown up for yourself.</div>
        <div className="text-xs text-gray-500">Your healing matters. keep going</div>
      </div>

      {/* Streak Icon and Count with Conditional Animation */}
      <div className="flex flex-col items-center my-4">
        {streakCount <= 1 ? (
          <span className="inline-block">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="none">
              <path
                d="M32 8C32 8 44 20 44 32C44 41.9411 32 56 32 56C32 56 20 41.9411 20 32C20 20 32 8 32 8Z"
                fill="#F8AFA6"
              />
              <path
                d="M32 16C32 16 39 24 39 32C39 38.6274 32 48 32 48C32 48 25 38.6274 25 32C25 24 32 16 32 16Z"
                fill="#F47C7C"
              />
            </svg>
          </span>
        ) : (
          <motion.span
            className="inline-block"
            initial={{ scale: 1, rotate: 0 }}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, -5, 5, 0],
              y: [0, -8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
          >
            <svg width="80" height="80" viewBox="0 0 64 64" fill="none">
              <motion.path
                d="M32 8C32 8 44 20 44 32C44 41.9411 32 56 32 56C32 56 20 41.9411 20 32C20 20 32 8 32 8Z"
                fill="#F8AFA6"
                initial={{ opacity: 0.8 }}
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
              />
              <motion.path
                d="M32 16C32 16 39 24 39 32C39 38.6274 32 48 32 48C32 48 25 38.6274 25 32C25 24 32 16 32 16Z"
                fill="#F47C7C"
                initial={{ opacity: 1 }}
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
              />
            </svg>
          </motion.span>
        )}
        <div className="text-4xl font-bold text-[#F47C7C] mt-2">{streakCount}</div>
      </div>
      <div className="text-[#F47C7C] font-semibold text-lg mb-1">Days Streak!</div>
      <div className="text-gray-600 text-sm mb-4">You've journaled for {streakCount} days in a row!</div>

      {/* Week progress */}
      <div className="w-full max-w-xs bg-white rounded-2xl border border-red-500 shadow flex flex-col items-center py-3 px-2 mb-4">
        <div className="flex justify-between w-full mb-1">
          {weekDays.map((day, idx) => (
            <div key={day} className="flex flex-col items-center flex-1">
              <span className={`text-xs font-medium ${weekArr[idx] ? 'text-[#F47C7C]' : 'text-gray-400'}`}>{day}</span>
              <span className={`block w-2.5 h-2.5 rounded-full mt-1 ${weekArr[idx] ? 'bg-[#F47C7C]' : 'bg-gray-200'}`}></span>
            </div>
          ))}
        </div>
        <hr className='bg-red-500'/>
        <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
          <span className="text-[#C97BA8]">🌸</span>
          <span>You're {daysToReward} days away from your reward!</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
          <span className="text-[#C97BA8]">🔓</span>
          <span>Unlocked: Consistent soul badge</span>
        </div>
      </div>

      {/* Stats box */}
      <div className="w-full max-w-xs bg-[#F8E6F0] rounded-xl p-3 mb-4 flex flex-col gap-1 text-xs text-gray-700">
        <div>📅 First Entry logged: {firstEntry ? new Date(firstEntry).toLocaleDateString('en-US', { month: 'long', day: 'numeric' }) : '-'}</div>
        <div>🔥 Longest streak: {longestStreak} days</div>
        <div>😔 mood most logged: {mostMood}</div>
      </div>

      {/* Write today's entry button */}
      <button
        className={`w-full max-w-xs py-3 rounded-lg font-semibold text-white text-base mt-2 mb-2 transition ${todayWritten ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#C97BA8] hover:bg-[#b06a97]'}`}
        disabled={todayWritten}
        onClick={() => navigate('/journal/resources/newjournal')}
      >
        {todayWritten ? "You've written today's entry" : "Write Today's Journal Entry"}
      </button>
    </div>
  );
}

export default UserStreak;