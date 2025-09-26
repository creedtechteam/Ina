import React from "react";
// import { Wifi, Battery, Signal } from "lucide-react";
import { Link } from "react-router-dom";
import page from "../assets/a896fb003010532864c0d1d711bd9e1a77558018.jpg";
import { useNavigate } from "react-router-dom";
import WalletConnect from "../Components/WalletConnect";
const Page6 = () => {
  const navigate = useNavigate();
  const handleConnectWallet = () => {
    // Handle wallet connection logic
    navigate("/signup");
  };

  const handleSignIn = () => {
    // Handle sign in navigation
    navigate("/signin");
  };

  return (
    <div className="max-w-sm mx-auto bg-white min-h-screen relative overflow-hidden">
      {/* Status Bar */}

      {/* Hero Section with Background */}
      <div>
        <img src={page} alt="" />
      </div>

      {/* Content Section */}
      <div className="relative z-20 bg-gray-100 px-6 py-8  rounded-t-3xl min-h-96">
        {/* Sign up label */}
        <div className="mb-4">
          <span className="text-gray-600 text-sm font-medium">Sign up</span>
        </div>

        {/* Main heading */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
          Begin Your Healing Journey
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-lg mb-12 leading-relaxed">
          Start journaling and owning your story, privately
        </p>

        <div className="mb-6">
          <WalletConnect />
        </div>

        {/* Sign In Link */}
        <div className="text-center">
          <button
            onClick={handleSignIn}
            className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
          >
            Already part of INA?{" "}
            <Link to="/signin">
              <span className="font-semibold text-gray-900">Sign In</span>
            </Link>
          </button>
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

export default Page6;
