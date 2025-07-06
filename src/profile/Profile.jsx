import { useState } from "react";
import { ChevronLeft, Bell, Send, Mic, Globe } from "lucide-react";
import BottomNav from "../Pages/Journal/BottomNav";

export default function Profile() {
  const [currentScreen, setCurrentScreen] = useState("profile");
  // const [selectedTab, setSelectedTab] = useState("Me");

  const ProfileScreen = () => (
    <div className="flex-1 bg-purple-100 px-6 py-6">
      <div className="flex items-center justify-between mb-8">
        <ChevronLeft className="w-6 h-6 text-gray-600" />
        <h1 className="text-lg font-semibold text-gray-800">My Profile</h1>
        <div className="w-6"></div>
      </div>

      <div className="flex flex-col items-center mb-8">
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 to-yellow-400 flex items-center justify-center mb-4 overflow-hidden">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <span className="text-2xl">👥</span>
          </div>
        </div>
        <h2 className="text-lg font-medium text-gray-800">Adyemo Aduke</h2>
      </div>

      <div className="space-y-4">
        {[
          { name: "My NFT", highlight: currentScreen === "nft" },
          { name: "Support Circle", highlight: currentScreen === "support" },
          { name: "DAO & Governance", highlight: currentScreen === "dao" },
          { name: "The Forge", highlight: false },
        ].map((item) => (
          <button
            key={item.name}
            onClick={() => {
              if (item.name === "My NFT") setCurrentScreen("nft");
              if (item.name === "Support Circle") setCurrentScreen("support");
              if (item.name === "DAO & Governance") setCurrentScreen("dao");
            }}
            className={`w-full py-4 px-4 rounded-lg text-left font-medium ${
              item.highlight
                ? "bg-pink-200 text-gray-800"
                : "bg-transparent text-gray-700"
            }`}
          >
            {item.name}
          </button>
        ))}

        <div className="pt-8">
          <button className="text-gray-600 font-medium">settings</button>
          <button className="block text-gray-600 font-medium mt-3">
            Rate us on Google play
          </button>
          <button className="block text-gray-600 font-medium mt-3">
            Share with Friends
          </button>
          <button className="block text-gray-600 font-medium mt-6">
            log out
          </button>
        </div>
      </div>
    </div>
  );

  const NFTScreen = () => (
    <div className="flex-1 bg-purple-100">
      <div className="flex items-center justify-between p-6">
        <button onClick={() => setCurrentScreen("profile")}>
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <h1 className="text-lg font-semibold text-gray-800">My NFT</h1>
        <div className="w-6"></div>
      </div>

      {currentScreen === "nft-empty" ? (
        <div className="px-6">
          <div className="text-center mb-8">
            <h2 className="text-lg font-medium text-gray-800 mb-2">
              My Journal NFTs
            </h2>
            <p className="text-gray-600 text-sm">
              You haven't minted any journal entries yet
            </p>
          </div>

          <div className="flex-1 flex items-end pb-20">
            <button className="w-full bg-pink-300 text-white py-4 rounded-lg font-medium">
              Start Journaling & Mint One
            </button>
          </div>
        </div>
      ) : (
        <div className="px-6">
          <div className="text-center mb-6">
            <h2 className="text-lg font-medium text-gray-800 mb-2">
              My Journal NFTs
            </h2>
            <p className="text-gray-600 text-sm">
              Your personal collection of emotional moments,
            </p>
            <p className="text-gray-600 text-sm">minted as memories</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="aspect-square bg-gradient-to-br from-red-500 via-yellow-500 to-teal-400 rounded-lg flex items-center justify-center">
              <div className="text-black text-4xl">👤</div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center">
              <div className="text-black text-4xl">💃</div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-blue-600 to-teal-400 rounded-lg flex items-center justify-center">
              <div className="text-white text-4xl">📐</div>
            </div>
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-pink-400 to-pink-500 rounded-lg"
              ></div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const VaultScreen = () => (
    <div className="flex-1 bg-purple-100">
      <div className="flex items-center justify-between p-6">
        <button onClick={() => setCurrentScreen("nft")}>
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <h1 className="text-lg font-semibold text-gray-800">
          Journaling Vault
        </h1>
        <div className="w-6"></div>
      </div>

      <div className="px-6">
        <div className="text-center mb-6">
          <h2 className="text-lg font-medium text-gray-800 mb-2">
            Mint Your Journal Entry as an NFT
          </h2>
          <p className="text-gray-600 text-sm">
            Preserve your emotional journey as a one-of-a-
          </p>
          <p className="text-gray-600 text-sm">kind digital keepsake</p>
        </div>

        <p className="text-sm font-medium text-gray-800 mb-4">
          Journal Entry july 2-2025
        </p>

        <div className="relative mb-6">
          <div className="aspect-[3/4] bg-gradient-to-r from-red-500 via-yellow-500 to-teal-400 rounded-lg flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-32 h-48 text-black"
                fill="currentColor"
                viewBox="0 0 100 150"
              >
                <path
                  d="M50 10 C30 10, 20 25, 20 40 L20 120 C20 130, 25 140, 35 145 L50 150 L65 145 C75 140, 80 130, 80 120 L80 40 C80 25, 70 10, 50 10 Z"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                />
                <g stroke="currentColor" strokeWidth="0.5">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <line
                      key={i}
                      x1="25"
                      y1={20 + i * 6}
                      x2="75"
                      y2={20 + i * 6}
                    />
                  ))}
                </g>
              </svg>
            </div>
            <div className="absolute bottom-4 right-4 bg-gray-200 px-3 py-1 rounded text-xs text-gray-600">
              Private vault
            </div>
          </div>
        </div>

        <div className="space-y-2 mb-6">
          <p className="text-xs text-gray-600">Mint ID: INA-JRN-#430314</p>
          <p className="text-sm text-gray-800">
            I've been feeling so down and lonely lately. It's hard to find
            motivat.......
          </p>
        </div>

        <div className="mb-4">
          <p className="text-lg font-semibold text-gray-800 mb-2">
            Feature Coming Soon
          </p>
        </div>

        <button className="w-full bg-pink-200 text-pink-600 py-4 rounded-lg font-medium">
          View on INA Explorer
        </button>
      </div>
    </div>
  );

  const SupportScreen = () => (
    <div className="flex-1 bg-purple-100">
      <div className="flex items-center justify-between p-6">
        <button onClick={() => setCurrentScreen("profile")}>
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <h1 className="text-lg font-semibold text-gray-800">Support Circle</h1>
        <Bell className="w-6 h-6 text-gray-600" />
      </div>

      <div className="px-6">
        <p className="text-center text-gray-600 text-sm mb-8">
          Join an anonymous space to express your emotions safely and without
          words
        </p>

        <div className="space-y-6">
          <button onClick={() => setCurrentScreen("grief")} className="w-full">
            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg">
              <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-medium text-gray-800">Grief Room</h3>
                <p className="text-sm text-gray-600">
                  Release pain and honor your loss.
                </p>
                <p className="text-xs text-gray-500 flex items-center mt-1">
                  ⚙️ 28 Members online
                </p>
              </div>
            </div>
          </button>

          <button onClick={() => setCurrentScreen("rage")} className="w-full">
            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg">
              <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-medium text-gray-800">Rage Room</h3>
                <p className="text-sm text-gray-600">Let it out no judgment.</p>
                <p className="text-xs text-gray-500 flex items-center mt-1">
                  ⚙️ 20 Members online
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );

  const ChatScreen = ({ roomName, avatar, onBack }) => (
    <div className="flex-1 bg-purple-100 flex flex-col">
      <div className="flex items-center justify-between p-6">
        <button onClick={onBack}>
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <h1 className="text-lg font-semibold text-gray-800">{roomName}</h1>
        <Bell className="w-6 h-6 text-gray-600" />
      </div>

      <div className="flex-1 px-6">
        <p className="text-center text-gray-600 text-sm mb-8">
          No message yet.say something to start the conversation
        </p>

        <div className="mb-6">
          <div className="flex items-start space-x-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
              <span className="text-lg">{avatar}</span>
            </div>
            <div className="flex-1 bg-white rounded-lg p-4 min-h-[60px]"></div>
          </div>
          <p className="text-xs text-gray-400 text-right">7:20</p>
        </div>
      </div>

      <div className="p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Type your message here..."
            className="w-full py-3 px-4 pr-12 bg-white rounded-lg border-0 focus:outline-none"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <Send className="w-5 h-5 text-blue-500" />
          </button>
        </div>
      </div>
    </div>
  );

  const DAOScreen = () => (
    <div className="flex-1 bg-purple-100">
      <div className="flex items-center justify-between p-6">
        <button onClick={() => setCurrentScreen("profile")}>
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <h1 className="text-lg font-semibold text-gray-800">
          DAO & Governance
        </h1>
        <div className="w-6"></div>
      </div>

      <div className="px-6 text-center">
        <p className="text-gray-600 text-sm mb-12">
          Your voice helps shape the future of healing
        </p>

        <div className="flex justify-center mb-8">
          <div className="w-24 h-16 bg-gray-700 rounded-lg flex items-center justify-center relative">
            <div className="w-8 h-8 bg-white rounded-sm"></div>
            <div className="absolute -top-2 -right-2 w-8 h-6 bg-gray-700 rounded transform rotate-12"></div>
            <svg
              className="w-12 h-8 text-white absolute"
              fill="currentColor"
              viewBox="0 0 24 16"
            >
              <path
                d="M2 2 L8 8 L22 2 L22 14 L2 14 Z"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M4 6 L12 10 L20 6"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            INA DAO & Governance
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            Your voice helps shape the future of healing
          </p>

          <p className="text-gray-700 text-sm mb-2">
            We're building a space where your vote and voice shape how INA
            grows.
          </p>
          <p className="text-gray-700 text-sm mb-6">
            Stay tuned for healing-centered proposals and DAO features
          </p>

          <button className="bg-pink-200 text-gray-700 px-6 py-2 rounded-lg text-sm font-medium mb-8 flex items-center justify-center mx-auto">
            🔔 Notify me
          </button>
        </div>

        <div className="flex-1 flex items-end pb-8">
          <button
            onClick={() => setCurrentScreen("profile")}
            className="w-full bg-pink-300 text-white py-4 rounded-lg font-medium"
          >
            Back to my profile
          </button>
        </div>
      </div>
    </div>
  );

  const renderScreen = () => {
    switch (currentScreen) {
      case "nft":
        return <NFTScreen />;
      case "nft-empty":
        return <NFTScreen />;
      case "vault":
        return <VaultScreen />;
      case "support":
        return <SupportScreen />;
      case "grief":
        return (
          <ChatScreen
            roomName="Grief Room"
            avatar="👤"
            onBack={() => setCurrentScreen("support")}
          />
        );
      case "rage":
        return (
          <ChatScreen
            roomName="Rage Room"
            avatar="👩"
            onBack={() => setCurrentScreen("support")}
          />
        );
      case "dao":
        return <DAOScreen />;
      default:
        return <ProfileScreen />;
    }
  };

  return (
    <div className="w-full bg-purple-100 min-h-screen flex flex-col">
      {renderScreen()}
      <BottomNav />
    </div>
  );
}
