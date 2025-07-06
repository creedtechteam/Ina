import BottomNav from './BottomNav';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MoodChart from '../../Components/MoodChart';
import Circle from '../../circle-component/Circle';



const options = [
    {
        title: "New journal Entry",
        subtitle: "Start writing how you feel",
    },
    {
        title: "Healing Streak",
        subtitle: "Track your consistency & growth",
    },
    {
        title: "Support Circles",
        subtitle: "Join peer-lead space for healing",
    },
    {
        title: "public Vault",
        subtitle: "Browse or mint anonymous stories",
    },
    {
        title: "The Forge",
        subtitle: "Learn emotional coping tools & stories",
    },
];

function Account() {
    const [selectedOption, setSelectedOption] = useState(0);
    const navigate = useNavigate();

    // Map option index to route paths (update as needed)
    const optionRoutes = [
        '/journal/resources/newjournal', // New journal Entry
        '/journal/resources/userstreak', // Healing Streak
        '/circle',              // Support Circles
        '/journal/vault',                // public Vault
        '/journal/forge',                // The Forge
    ];

    const handleContinue = () => {
        const path = optionRoutes[selectedOption];
        if (path) navigate(path);
    };

    return (
        <div>
            <div className="min-h-screen bg-pink-100 p-4">
                <div className="text-center text-lg font-medium text-gray-700 mb-2">
                    How Are You Feeling Today
                </div>
                {/* <Circle/> */}
                <div className="text-center text-sm text-gray-600 mb-4">
                    Check in with Yourself.
                    <br />
                    Tap a color that matches your mood right now
                </div>

                <div className="flex justify-center items-center mb-6">
                <MoodChart/>
                </div>

                <div className="space-y-3 mb-6">
                    {options.map((option, idx) => (
                        <div
                            key={idx}
                            className={`bg-pink-200 rounded p-4 cursor-pointer border-2 transition-all ${selectedOption === idx ? 'border-pink-500' : 'border-transparent'}`}
                            onClick={() => setSelectedOption(idx)}
                        >
                            <div className="text-sm font-semibold text-gray-800">
                                {option.title}
                            </div>
                            <div className="text-xs text-gray-600">{option.subtitle}</div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <button
                        className="bg-pink-400 mb-10 hover:bg-pink-500 w-full text-white py-2 rounded disabled:opacity-50"
                        onClick={handleContinue}
                        disabled={selectedOption === null}
                    >
                        Continue
                    </button>
                </div>
            </div>

            <div>
                <BottomNav />
            </div>
        </div>
    )
}

export default Account