import React from "react";
// import { Wifi, Battery, Signal } from "lucide-react";
import { Link } from "react-router-dom";
import page6 from "../assets/6cd7f03ef24ae7564631da2ede85722e42d6bcbf.jpg";
const Page7 = () => {
  const handleConnectWallet = () => {
    // Handle wallet connection logic
    window.location.href = "/signin";
  };

  const handleSignIn = () => {
    // Handle sign in navigation
    window.location.href = "/signin";
  };

  return (
    <div className="max-w-sm mx-auto bg-white min-h-screen relative overflow-hidden">
      {/* Status Bar */}

      {/* Hero Section with Background */}
      <div>
        <img src={page6} alt="" />
      </div>

      {/* Content Section */}
      <div className="relative z-20 bg-gray-100 px-6 py-8  rounded-t-3xl min-h-96">
        {/* Sign up label */}
        <div className="mb-4">
          <span className="text-gray-600 text-sm font-medium">Sign in</span>
        </div>

        {/* Main heading */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
          Welcome Back to Your Sanctuary
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-lg mb-12 leading-relaxed">
          "Log in to reconnect with your voice, your vault, and your healing
          path
        </p>

        {/* Connect Wallet Button */}
        <button
          onClick={handleConnectWallet}
          className="w-full bg-gradient-to-r from-pink-400 to-pink-500 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mb-6"
        >
          Enter Safely
        </button>

        {/* Sign In Link */}
        <div className="text-center">
          <Link to="/signin">
            <button
              onClick={handleSignIn}
              className="text-gray-600 hover:text-gray-800 transition-colors duration-300 hover:underline"
            >
              New here? Sign up to reclaim your voice
            </button>
          </Link>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-pink-300 rounded-full opacity-50"></div>
        <div className="absolute top-12 right-8 w-1 h-1 bg-pink-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-20 left-4 w-1 h-1 bg-pink-300 rounded-full opacity-40"></div>
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-4 w-32 h-32 bg-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-4 w-24 h-24 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Page7;
