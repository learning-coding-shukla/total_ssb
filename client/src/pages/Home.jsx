import { Link } from "react-router-dom";
import armyImg from "../assets/army-logo.png";
import navyImg from "../assets/navy-logo.png";
import airforceImg from "../assets/airforce-logo.png";
function Home() {
  return (
    <div>
      <section
        className="
min-h-[75vh]
md:min-h-screen
flex
items-center
justify-center
text-white
bg-cover
bg-center
"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/hero/hero-bg.jpg')",
            "backgroundPosition" : " 65% center",
        }}
      >
        <div className="text-center px-4 max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">total_ssb</h1>

          <p className="text-base md:text-xl mb-4">
            One Platform For Complete SSB Preparation
          </p>

          <p className="text-sm md:text-lg mb-8">
            India's Free Defence & SSB Preparation Platform
          </p>

          <Link
            to="/psychology"
            className="inline-block bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl text-lg font-semibold"
          >
            Start Preparation
          </Link>

          {/* Hero Stats */}

          <div className="grid grid-cols-3 gap-2 md:gap-6 gap-6 mt-12 text-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold">100+</h2>
              <p>Topics</p>
            </div>

            <div>
              <h2 className="text-2xl md:text-4xl font-bold">500+</h2>
              <p>Questions</p>
            </div>

            <div>
              <h2 className="text-2xl md:text-4xl font-bold">24×7</h2>
              <p>Learning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}

      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h2 className="text-4xl font-bold text-green-600">1000+</h2>
            <p>WAT Words</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h2 className="text-4xl font-bold text-blue-600">300+</h2>
            <p>SRT Situations</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h2 className="text-4xl font-bold text-red-600">150+</h2>
            <p>TAT Images</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h2 className="text-4xl font-bold text-purple-600">50+</h2>
            <p>PPDT Images</p>
          </div>
        </div>
      </section>

      {/* Defence Services */}

      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-5xl font-bold text-center mb-4">
          Indian Armed Forces
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Explore the Army, Navy and Air Force in depth.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Army */}

          <Link
            to="/army"
            className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 transition"
          >
            <div className="flex flex-col items-center mb-6">
              <img
                src={armyImg}
                alt="Indian Army"
                className="h-24 w-24 object-contain mb-3"
              />

              <h3 className="text-3xl font-bold">Indian Army</h3>
              <p className="text-green-700 font-semibold mt-2">
                Service Before Self
              </p>
            </div>

            <ul className="space-y-2 text-gray-700">
              <li>✓ Commands</li>
              <li>✓ Regiments</li>
              <li>✓ Para SF</li>
              <li>✓ Weapons</li>
              <li>✓ Operations</li>
            </ul>

            <div className="mt-6 text-green-600 font-bold">Explore →</div>
          </Link>

          {/* Navy */}

          <Link
            to="/navy"
            className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 transition"
          >
            <div className="flex flex-col items-center mb-6">
              <img
                src={navyImg}
                alt="Indian Navy"
                className="h-24 w-24 object-contain mb-3"
              />

              <h3 className="text-3xl font-bold">Indian Navy</h3>
              <p className="text-blue-700 font-semibold mt-2">Shanno Varunah</p>
            </div>

            <ul className="space-y-2 text-gray-700">
              <li>✓ Commands</li>
              <li>✓ Fleets</li>
              <li>✓ MARCOS</li>
              <li>✓ Ships</li>
              <li>✓ Operations</li>
            </ul>

            <div className="mt-6 text-blue-600 font-bold">Explore →</div>
          </Link>

          {/* Air Force */}

          <Link
            to="/airforce"
            className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 transition"
          >
            <div className="flex flex-col items-center mb-6">
              <img
                src={airforceImg}
                alt="Indian Air Force"
                className="h-24 w-24 object-contain mb-3"
              />

              <h3 className="text-3xl font-bold">Indian Air Force</h3>
              <p className="text-red-700 font-semibold mt-2">
                Touch The Sky With Glory
              </p>
            </div>

            <ul className="space-y-2 text-gray-700">
              <li>✓ Commands</li>
              <li>✓ Aircraft</li>
              <li>✓ Missiles</li>
              <li>✓ Air Defence</li>
              <li>✓ Operations</li>
            </ul>

            <div className="mt-6 text-red-600 font-bold">Explore →</div>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
