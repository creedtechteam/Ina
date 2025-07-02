import React from 'react'


function Home() {
    return (
        <>
            <section className="w-full min-h-[60vh] flex items-center justify-center bg-pink-100 py-8 px-4 md:px-0">
                <div className="max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
                    {/* Left: Text Content */}
                    <div className="flex-1 flex flex-col items-start justify-center">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                            Finding a safe space to share your emotions can be challenging.
                        </h1>
                        <p className="text-base md:text-lg text-gray-700 mb-6 max-w-xl">
                            In the Web3 landscape, women often struggle to express their feelings without fear of judgment. This anonymity is crucial for fostering genuine emotional connections.
                        </p>
                        <button className="bg-pink-300 hover:bg-pink-400 text-white font-semibold py-2 px-6 rounded-md transition mb-6 shadow-md">
                            Register
                        </button>
                        <div className="flex items-center gap-3">
                            {/* Avatars */}
                            <div className="flex -space-x-3">
                                <img src="/vite.svg" alt="avatar1" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                                <img src="/src/assets/react.svg" alt="avatar2" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar3" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="avatar4" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                            </div>
                            <span className="text-sm text-gray-600">Love by women across Web3</span>
                        </div>
                    </div>
                    {/* Right: Image */}
                    <div className="flex-1 flex justify-center md:justify-end w-full">
                        <img
                            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&h=400&facepad=2"
                            alt="Woman writing in journal"
                            className="w-64 h-72 md:w-80 md:h-96 object-cover rounded-xl shadow-lg bg-pink-200"
                        />
                    </div>
                </div>
            </section>

            {/* About INA Section */}
            <section className="w-full bg-pink-100 mt-10 py-10 px-4 flex justify-center">
                <div className="max-w-4xl w-full flex flex-col items-center text-center">
                    <span className="text-sm font-medium text-gray-700 mb-1">About INA</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">What INA stand for?</h2>
                    <p className="text-gray-700 text-base md:text-lg mb-2">
                        Ina is a safe, private space for women to reclaim their voice through anonymous journaling and digital support.<br />
                        Whether you're healing, venting, or seeking clarity, Ina offers a calm and judgment-free environment built for emotional freedom.<br />
                        Powered by Web3, your stories can be securely minted on-chain—giving you ownership of your healing journey.<br />
                        Even in silence, your voice is valid, protected, and powerful.<br />
                        Ina is more than a journaling tool—it's a movement. Through support circles and DAO contributions, you can connect, uplift others, and shape a future where women heal on their own terms.
                    </p>
                    <div className="flex flex-col gap-2 mt-6 w-full max-w-xl mx-auto text-left md:text-center">
                        <div className="flex items-center gap-2 text-gray-800 text-base md:text-lg">
                            <span role="img" aria-label="smile">😊</span>
                            <span>Emotional expression shouldn't come with fear or hesitation.</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-800 text-base md:text-lg">
                            <span role="img" aria-label="link">🔗</span>
                            <span>Create a sanctuary for your thoughts and feelings.</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-800 text-base md:text-lg">
                            <span role="img" aria-label="lock">🔒</span>
                            <span>Your emotions deserve a safe and private space.</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home