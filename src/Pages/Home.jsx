import { doctor_Img, friends, hero_lady } from "../lib/Images";
import { Link } from "react-router-dom";
// red_bg, virtual, vision, googles,
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
              In the Web3 landscape, women often struggle to express their
              feelings without fear of judgment. This anonymity is crucial for
              fostering genuine emotional connections.
            </p>
            <Link to="/splash">
              <button className="bg-pink-300 hover:bg-pink-400 text-white font-semibold py-2 px-6 rounded-md transition mb-6 shadow-md">
                Register
              </button>
            </Link>
            <div className="flex items-center gap-3">
              {/* Avatars */}
              <div className="flex -space-x-3">
                <img
                  src="/vite.svg"
                  alt="avatar1"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="/src/assets/react.svg"
                  alt="avatar2"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="avatar3"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="avatar4"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
              </div>
              <span className="text-sm text-gray-600">
                Love by women across Web3
              </span>
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex justify-center md:justify-end w-full">
            <img
              src={hero_lady}
              alt="Woman writing in journal"
              loading="lazy"
              className="w-64 h-72 md:w-80 md:h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* About INA Section */}
      <section className="w-full bg-pink-100 mt-10 py-10 px-4 flex justify-center">
        <div className="max-w-4xl w-full flex flex-col items-center text-center">
          <span className="text-sm font-medium text-gray-700 mb-1">
            About INA
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            What INA stand for?
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-2">
            Ina is a safe, private space for women to reclaim their voice
            through anonymous journaling and digital support.
            <br />
            Whether you're healing, venting, or seeking clarity, Ina offers a
            calm and judgment-free environment built for emotional freedom.
            <br />
            Powered by Web3, your stories can be securely minted on-chain—giving
            you ownership of your healing journey.
            <br />
            Even in silence, your voice is valid, protected, and powerful.
            <br />
            Ina is more than a journaling tool—it's a movement. Through support
            circles and DAO contributions, you can connect, uplift others, and
            shape a future where women heal on their own terms.
          </p>
          <div className="flex flex-col gap-2 mt-6 w-full max-w-xl mx-auto text-left md:text-center">
            <div className="flex items-center gap-2 text-gray-800 text-base md:text-lg">
              <span role="img" aria-label="smile">
                😊
              </span>
              <span>
                Emotional expression shouldn't come with fear or hesitation.
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-800 text-base md:text-lg">
              <span role="img" aria-label="link">
                🔗
              </span>
              <span>Create a sanctuary for your thoughts and feelings.</span>
            </div>
            <div className="flex items-center gap-2 text-gray-800 text-base md:text-lg">
              <span role="img" aria-label="lock">
                🔒
              </span>
              <span>Your emotions deserve a safe and private space.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full min-h-auto bg-blue-200 mt-10 py-12 flex justify-center items-center relative overflow-hidden">
        {/* Optional: SVG or background image can be added here for wavy effect */}
        <div className="max-w-6xl w-full h-96 bg-[url('/bg-low.png')] flex flex-col justify-center items-center">
          <div className="w-full flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center">
            {/* Card 1 */}
            <div className="bg-white/80 rounded-lg shadow-md p-6 flex-1 min-w-[260px] max-w-xs text-center">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                Track Your Emotions with Ease
              </h3>
              <p className="text-gray-700 text-base">
                Our mood selector allows you to easily log your feelings.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white/80 rounded-lg shadow-md p-6 flex-1 min-w-[260px] max-w-xs text-center">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                Mint Your Memories as Unique NFTs
              </h3>
              <p className="text-gray-700 text-base">
                Transform your journal entries into valuable digital assets.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white/80 rounded-lg shadow-md p-6 flex-1 min-w-[260px] max-w-xs text-center">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                Join a Community of Supportive Women
              </h3>
              <p className="text-gray-700 text-base">
                Vote on powerful stories and uplift others in the Sisterhood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Empowering Women Section */}
      <section className="w-full bg-pink-100 py-12 px-4 flex items-center justify-center mt-10">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Left: Text */}
          <div className="flex-1 flex flex-col items-start justify-center">
            <span className="text-base font-medium text-gray-700 mb-2">
              INA
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight">
              Empowering Women Through
              <br className="hidden md:block" /> Emotional Journaling
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-6 max-w-xl">
              Ina is a unique platform designed for women to express their
              emotions safely and anonymously. Our mission is to create a
              nurturing environment where every story is valued and can be
              transformed into a digital treasure.
            </p>
            <div className="flex gap-4">
              <Link to="/splash">
                <button className="bg-pink-300 hover:bg-pink-400 text-white font-semibold py-2 px-8 rounded-md transition shadow-md">
                  Join
                </button>
              </Link>
              <button className="border border-pink-300 text-pink-700 font-semibold py-2 px-8 rounded-md transition bg-white hover:bg-pink-50">
                Learn more
              </button>
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex justify-center md:justify-end w-full">
            <img
              src={doctor_Img}
              loading="lazy"
              alt="Empowered woman in pink suit"
              className="w-64 h-72 md:w-80 md:h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Explore Emotions Section */}
      <section className="w-full bg-pink-100 py-12 px-4 flex items-center justify-center mt-10">
        <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
          {/* Left: Image */}
          <div className="flex-1 flex justify-center md:justify-start w-full">
            <img
              src={friends}
              alt="Two women in a safe space"
              loading="lazy"
              className="w-64 h-72 md:w-80 md:h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
          {/* Right: Text */}
          <div className="flex-1 flex flex-col items-start justify-center">
            <span className="text-base font-medium text-gray-700 mb-2">
              Explore
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight">
              Explore Your Emotions in a Safe Space
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-xl">
              Ina provides a private platform for women to express their
              thoughts and feelings anonymously. With our innovative journaling
              features, you can track your emotional journey and find solace in
              your own story.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
