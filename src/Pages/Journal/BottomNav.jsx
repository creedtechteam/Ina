import React from 'react'
import { Link } from 'react-router-dom'

function BottomNav() {
    return (
        <div>
            {/* Bottom Navbar */}
            <nav className="sticky bottom-0 flex justify-between items-center max-w-md mx-auto px-2 pt-1 pb-1 bg-white border-t border-gray-200">
                <Link to="/account" >
                    <button className="flex flex-col items-center flex-1 text-gray-400 hover:text-pink-400 focus:outline-none">
                        <svg className="w-6 h-6 mb-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        <span className="text-xs">Home</span>
                    </button>
                </Link>
                <Link to="/newjournal" >
                    <button className="flex flex-col items-center flex-1 text-pink-500 focus:outline-none">
                        <svg className="w-6 h-6 mb-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 16v-4a4 4 0 018 0v4" /></svg>
                        <span className="text-xs font-semibold">Journal</span>
                    </button>
                </Link>
                <Link to="/circles" >
                    <button className="flex flex-col items-center flex-1 text-gray-400 hover:text-pink-400 focus:outline-none">
                        <svg className="w-6 h-6 mb-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M16 3v4M8 3v4" /></svg>
                        <span className="text-xs">Circles</span>
                    </button>
                </Link>
                <Link to="/vault" >
                    <button className="flex flex-col items-center flex-1 text-gray-400 hover:text-pink-400 focus:outline-none">
                        <svg className="w-6 h-6 mb-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /></svg>
                        <span className="text-xs">Vault</span>
                    </button>
                </Link>
                <Link to="/users" >
                    <button className="flex flex-col items-center flex-1 text-gray-400 hover:text-pink-400 focus:outline-none">
                        <svg className="w-6 h-6 mb-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M6 20v-2a4 4 0 014-4h0a4 4 0 014 4v2" /></svg>
                        <span className="text-xs">Me</span>
                    </button>
                </Link>
                <Link to="/ai" >
                    <button className="flex flex-col items-center flex-1 text-gray-400 hover:text-pink-400 focus:outline-none">
                        <svg className="w-6 h-6 mb-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20h9" /><path d="M12 4v16" /><path d="M4 4h16" /><path d="M4 20h8" /></svg>
                        <span className="text-xs">AI</span>
                    </button>
                </Link>





            </nav>
        </div>
    )
}

export default BottomNav