import { useState } from "react";
import { ArrowLeft, Lock, Users, Hexagon } from "lucide-react";
import frame1 from "../assets/Frame 1686561526.png";
import frame2 from "../assets/WhatsApp Image 2025-06-30 at 00.13.20_98dc560f 1.png";
import frame3 from "../assets/WhatsApp Image 2025-06-30 at 00.13.23_21848b0c 1.png";
import { Link } from "react-router-dom";
export default function ChooseStyle() {
  const [selectedStyle, setSelectedStyle] = useState(null);

  const styles = [
    {
      id: "silent",
      title: "Silent Journaling",
      description: "Write privately, anonymous, and securely",
      icon: frame1,
      gradient: "from-orange-400 via-yellow-400 to-orange-500",
      bgColor: "bg-gradient-to-br from-orange-500 to-yellow-600",

      direct: "/journal/account",
    },
    {
      id: "support",
      title: "Support Circle Explorer",
      description: "Join safe peer-led community for shared healing",
      icon: frame2,
      gradient: "from-pink-300 via-orange-200 to-yellow-200",
      bgColor: "bg-gradient-to-br from-pink-300 to-orange-200",
    },
    {
      id: "dao",
      title: "DAO Contributor",
      description:
        "Be part of the mission, help others through governance & idea",
      icon: frame3,
      gradient: "from-purple-300 via-pink-200 to-blue-200",
      bgColor: "bg-gradient-to-br from-purple-300 to-pink-200",
    },
  ];

  // const LockIllustration = () => (
  //   <div className="relative w-full h-32 lg:h-40 flex items-center justify-center">
  //     <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-yellow-700 rounded-2xl"></div>
  //     <div className="relative z-10">
  //       <div className="w-16 h-16 lg:w-20 lg:h-20 bg-yellow-300 rounded-lg border-4 border-yellow-400 flex items-center justify-center shadow-lg">
  //         <Lock className="w-8 h-8 lg:w-10 lg:h-10 text-orange-800" />
  //       </div>
  //       <div className="absolute -top-2 -right-2 w-6 h-6 lg:w-8 lg:h-8 bg-yellow-200 rounded-full opacity-60"></div>
  //       <div className="absolute -bottom-1 -left-1 w-4 h-4 lg:w-6 lg:h-6 bg-orange-300 rounded-full opacity-40"></div>
  //     </div>
  //     <div className="absolute top-4 right-4 w-8 h-8 lg:w-10 lg:h-10 bg-yellow-300 rounded-full opacity-30"></div>
  //     <div className="absolute bottom-6 left-6 w-6 h-6 lg:w-8 lg:h-8 bg-orange-300 rounded-full opacity-20"></div>
  //   </div>
  // );

  // const HandshakeIllustration = () => (
  //   <div className="relative w-full h-32 lg:h-40 flex items-center justify-center">
  //     <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-orange-200 rounded-2xl"></div>
  //     <div className="relative z-10 flex items-center justify-center">
  //       <div className="flex items-center space-x-2 lg:space-x-3">
  //         <div className="w-10 h-10 lg:w-12 lg:h-12 bg-pink-300 rounded-full flex items-center justify-center border-2 border-pink-400">
  //           <div className="w-6 h-6 lg:w-8 lg:h-8 bg-pink-500 rounded-full"></div>
  //         </div>
  //         <div className="w-12 h-8 lg:w-16 lg:h-10 bg-orange-300 rounded-lg flex items-center justify-center">
  //           <div className="w-8 h-4 lg:w-10 lg:h-6 bg-orange-400 rounded-full"></div>
  //         </div>
  //         <div className="w-10 h-10 lg:w-12 lg:h-12 bg-yellow-300 rounded-full flex items-center justify-center border-2 border-yellow-400">
  //           <div className="w-6 h-6 lg:w-8 lg:h-8 bg-yellow-500 rounded-full"></div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  // const GovernanceIllustration = () => (
  //   <div className="relative w-full h-32 lg:h-40 flex items-center justify-center">
  //     <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl"></div>
  //     <div className="relative z-10 flex items-center justify-center">
  //       <div className="relative">
  //         <div className="w-16 h-16 lg:w-20 lg:h-20 bg-blue-300 rounded-lg border-2 border-blue-400 flex items-center justify-center">
  //           <Hexagon className="w-8 h-8 lg:w-10 lg:h-10 text-blue-700" />
  //         </div>
  //         <div className="absolute -top-3 -left-3 w-8 h-8 lg:w-10 lg:h-10 bg-purple-300 rounded-full opacity-60"></div>
  //         <div className="absolute -bottom-2 -right-2 w-6 h-6 lg:w-8 lg:h-8 bg-pink-300 rounded-full opacity-50"></div>
  //       </div>
  //       <div className="absolute top-2 right-8 w-6 h-6 lg:w-8 lg:h-8 bg-purple-200 rounded-full opacity-40"></div>
  //       <div className="absolute bottom-4 left-8 w-4 h-4 lg:w-6 lg:h-6 bg-blue-200 rounded-full opacity-30"></div>
  //     </div>
  //   </div>
  // );

  // const getIllustration = (type) => {
  //   switch (type) {
  //     case "lock":
  //       return <LockIllustration />;
  //     case "handshake":
  //       return <HandshakeIllustration />;
  //     case "governance":
  //       return <GovernanceIllustration />;
  //     default:
  //       return null;
  //   }
  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-purple-100 p-4 lg:p-8">
      <div className="max-w-md mx-auto lg:max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pt-4 lg:justify-center lg:relative">
          <button className="p-2 hover:bg-white/20 rounded-full transition-colors lg:absolute lg:left-0">
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-xl lg:text-3xl font-semibold text-gray-800">
            Choose Your Style
          </h1>
          <div className="w-10 lg:hidden"></div>
        </div>

        {/* Subtitle */}
        <p className="text-gray-600 mb-8 text-center lg:text-xl lg:mb-12">
          How would you like to begin?
        </p>

        {/* Style Options */}
        <div className="space-y-6 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0 lg:max-w-5xl lg:mx-auto">
          {styles.map((style) => (
            <Link to={style.direct}>
              <button
                key={style.id}
                onClick={() => setSelectedStyle(style.id)}
                className={`w-full text-left rounded-3xl p-6 lg:p-8 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] lg:hover:scale-[1.05] ${
                  selectedStyle === style.id
                    ? "ring-4 ring-purple-300 shadow-xl lg:shadow-2xl"
                    : "shadow-lg hover:shadow-xl lg:hover:shadow-2xl"
                }`}
              >
                <img src={style.icon} alt="" />

                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 lg:p-6">
                  <h3 className="font-semibold text-gray-800 text-lg lg:text-xl mb-2 lg:mb-3">
                    {style.title}
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                    {style.description}
                  </p>
                </div>
              </button>
            </Link>
          ))}
        </div>

        {/* Continue Button */}
        {selectedStyle && (
          <div className="mt-8 mb-8 lg:mt-12 lg:mb-12 lg:max-w-md lg:mx-auto">
            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-6 rounded-2xl font-semibold text-lg lg:text-xl lg:py-5 lg:px-8 shadow-lg hover:shadow-xl lg:hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]">
              Continue with {styles.find((s) => s.id === selectedStyle)?.title}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
