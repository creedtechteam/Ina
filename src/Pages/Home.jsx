import {
    doctor_Img, virtual, vision, googles, friends, hero_lady, enny,
    joy,
    favour,
    rose,
    sarah
} from '../lib/Images';
import { useEffect, useRef } from 'react';

// Animate On Scroll Library
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
    // Section refs for scroll
    const empowerRef = useRef(null);
    const exploreRef = useRef(null);
    const howRef = useRef(null);

    useEffect(() => {
        AOS.init({ duration: 900, once: true, offset: 80 });

        // Listen for custom scroll events from nav
        const handleScrollToSection = (e) => {
            if (e.detail && e.detail.section) {
                let ref = null;
                if (e.detail.section === 'empower') ref = empowerRef;
                if (e.detail.section === 'explore') ref = exploreRef;
                if (e.detail.section === 'how') ref = howRef;
                if (ref && ref.current) {
                    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        };
        window.addEventListener('scroll-to-section', handleScrollToSection);
        return () => window.removeEventListener('scroll-to-section', handleScrollToSection);
    }, []);

    // Offset for fixed header (height: 56px = 3.5rem, adjust if needed)
    // const headerOffset = 64; // px, adjust to match your header height

    // Helper to add scroll-margin-top to sections
    const sectionClass = "scroll-mt-16"; // Tailwind: mt-16 = 4rem = 64px

    return (
        <>
            {/* ...existing code... */}
            <section ref={exploreRef} className={`w-full min-h-[60vh] flex items-center justify-center bg-pink-100 py-8 px-4 md:px-0 ${sectionClass}`} data-aos="fade-up">
                <div className="max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
                    {/* Left: Text Content */}
                    <div className="flex-1 flex flex-col items-start justify-center">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                            Finding a safe space to share your emotions can be challenging.
                        </h1>
                        <p className="text-base md:text-lg text-gray-700 mb-6 max-w-xl">
                            In the Web3 landscape, women often struggle to express their feelings without fear of judgment. This anonymity is crucial for fostering genuine emotional connections.
                        </p>
                        <button className="bg-pink-300 lg:cursor-pointer hover:bg-pink-400 text-white font-semibold py-2 px-6 rounded-md transition mb-6 shadow-md">
                            <a href="/signup"> Register</a>
                        </button>
                        <div className="flex items-center gap-3">
                            {/* Avatars */}
                            <div className="flex -space-x-3">
                                <img src={joy} alt="avatar1" loading="lazy" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                                <img src={favour} alt="avatar2" loading="lazy" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                                <img src={sarah} alt="avatar3" loading="lazy" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                                <img src={enny} alt="avatar4" loading="lazy" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                                <img src={rose} alt="avatar4" loading="lazy" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                            </div>
                            <span className="text-sm text-gray-600">Loved by women across Web3</span>
                        </div>
                    </div>
                    {/* Right: Image */}
                    <div className="flex-1 flex justify-center md:justify-end w-full">
                        <img
                            src={hero_lady}
                            alt="Woman writing in journal"
                            loading='lazy'
                            className="w-64 h-72 md:w-80 md:h-96 object-cover rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* About INA Section */}
            <section className={`w-full bg-pink-100 mt-10 py-10 px-4 flex justify-center ${sectionClass}`} data-aos="fade-up">
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

            {/* Features Section */}
            <section ref={howRef} className={`w-[100%] min-h-auto bg-[url('/bg-low.png')] bg-center-[4rem] bg-cover bg-no-repeat lg:h-[600px] mt-10 py-12 px-4 flex justify-center items-center overflow-hidden ${sectionClass}`} data-aos="fade-up" >
                {/* relative*/}
                {/* Optional: SVG or background image can be added here for wavy effect */}
                <div className="w-full lg:h-[500px]  flex flex-col justify-center items-center">
                    <div className="w-full flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center">
                        {/* Card 1 */}
                        <div className="bg-white/80 rounded-lg shadow-md p-6 flex-1 min-w-[260px] max-w-xs text-center">
                            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Track Your Emotions with Ease</h3>
                            <p className="text-gray-700 text-base">Our mood selector allows you to easily log your feelings.</p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-white/80 rounded-lg shadow-md p-6 flex-1 min-w-[260px] max-w-xs text-center">
                            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Mint Your Memories as Unique NFTs</h3>
                            <p className="text-gray-700 text-base">Transform your journal entries into valuable digital assets.</p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-white/80 rounded-lg shadow-md p-6 flex-1 min-w-[260px] max-w-xs text-center">
                            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Join a Community of Supportive Women</h3>
                            <p className="text-gray-700 text-base">Vote on powerful stories and uplift others in the Sisterhood.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Empowering Women Section */}
            <section ref={empowerRef} className={`w-full bg-pink-100 py-12 px-4 flex items-center justify-center mt-10 ${sectionClass}`} data-aos="fade-up">
                <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    {/* Left: Text */}
                    <div className="flex-1 flex flex-col items-start justify-center">
                        <span className="text-base font-medium text-gray-700 mb-2">INA</span>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                            Empowering Women Through<br className="hidden md:block" /> Emotional Journaling
                        </h2>
                        <p className="text-base md:text-lg text-gray-700 mb-6 max-w-xl">
                            Ina is a unique platform designed for women to express their emotions safely and anonymously. Our mission is to create a nurturing environment where every story is valued and can be transformed into a digital treasure.
                        </p>
                        <div className="flex gap-4 items-center mx-auto">
                            <button className="bg-pink-300 lg:cursor-pointer hover:bg-pink-400 text-white font-semibold py-2 px-8 rounded-md transition shadow-md">
                                <a href='/signup'>Join</a>
                            </button>
                            <button className="border lg:cursor-pointer border-pink-300 text-pink-700 font-semibold py-2 px-8 rounded-md transition bg-white hover:bg-pink-50">
                                <a href='/signup'>Learn more</a>
                            </button>
                        </div>
                    </div>
                    {/* Right: Image */}
                    <div className="flex-1 flex justify-center md:justify-end w-full">
                        <img
                            src={doctor_Img}
                            loading='lazy'
                            alt="Empowered woman in pink suit"
                            className="w-64 h-72 md:w-80 md:h-96 object-cover rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </section>


            {/* Explore Emotions Section */}
            <section className={`w-full bg-pink-100 py-12 px-4 flex items-center justify-center mt-10 ${sectionClass}`} data-aos="fade-up">
                <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
                    {/* Left: Image */}
                    <div className="flex-1 flex justify-center md:justify-start w-full">
                        <img
                            src={friends}
                            alt="Two women in a safe space"
                            loading='lazy'
                            className="w-64 h-72 md:w-80 md:h-96 object-cover rounded-xl shadow-lg"
                        />
                    </div>
                    {/* Right: Text */}
                    <div className="flex-1 flex flex-col items-start justify-center">
                        <span className="text-base font-medium text-gray-700 mb-2">Explore</span>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                            Explore Your Emotions in a Safe Space
                        </h2>
                        <p className="text-base md:text-lg text-gray-700 max-w-xl">
                            Ina provides a private platform for women to express their thoughts and feelings anonymously. With our innovative journaling features, you can track your emotional journey and find solace in your own story.
                        </p>
                    </div>
                </div>
            </section>

            {/* Digital Legacy Gallery Section */}
            <section className="w-full bg-gray-200 mt-10 py-10 px-4 flex flex-col items-center" data-aos="fade-up">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-8 text-center">Transform Emotions Into Digital Legacy.</h2>
                <div className="w-full max-w-5xl flex flex-col md:flex-row gap-6 justify-center items-center">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full md:w-1/3 flex-shrink-0">
                        <img src={virtual} loading="lazy" alt="Virtual woman 1" className="w-full h-56 object-cover" />
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full md:w-1/3 flex-shrink-0">
                        <img src={vision} loading="lazy" alt="Virtual woman 2" className="w-full h-56 object-cover" />
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full md:w-1/3 flex-shrink-0">
                        <img src={googles} loading="lazy" alt="Virtual woman 3" className="w-full h-56 object-cover" />
                    </div>
                </div>
            </section>

            {/* Join The sister hood */}
            <section className="bg-pink-50 mt-10 py-10 px-4 flex flex-col items-center justify-center w-full" data-aos="fade-up">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4 text-center">join the sisterhood today</h2>
                <p className="text-gray-700 text-base md:text-lg mb-6 text-center max-w-2xl">Embrace your journey and connect with a community that understands and supports you.</p>
                <div className="flex gap-4 justify-center">
                    <button className="bg-pink-300 lg:cursor-pointer hover:bg-pink-400 text-white font-semibold py-2 px-8 rounded-md transition shadow-md"><a href='/signup'>Join</a></button>
                    <button className="border border-pink-300 lg:cursor-pointer text-pink-700 font-semibold py-2 px-8 rounded-md transition bg-white hover:bg-pink-100"> <a href='/signup' >Learn more </a> </button>
                </div>
            </section>
        </>
    );
}

export default Home;