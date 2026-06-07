import { useState } from "react";

const operations = [
  "Operation Rakshak",
  "Counter-Terrorism Operations",
  "Airbase Security Missions",
  "Special Reconnaissance",
  "Combat Search and Rescue",
];

function Garud() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      {/* Hero Banner */}

      <div
        className="h-[250px] md:h-[350px] lg:h-[450px] rounded-2xl mb-10 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)), url('/garud/banner.jpg')",
        }}
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center">
          🔥 GARUD COMMANDO FORCE
        </h1>
      </div>

      {/* Quick Facts */}

      <div className="grid md:grid-cols-4 gap-6 mb-10">

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-3xl font-bold text-blue-600">
            2004
          </h2>
          <p>Raised</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-3xl font-bold text-green-600">
            IAF
          </h2>
          <p>Special Forces</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-3xl font-bold text-red-600">
            72 Weeks
          </h2>
          <p>Training</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-3xl font-bold text-purple-600">
            Elite
          </h2>
          <p>Commando Force</p>
        </div>

      </div>

      {/* Main Card */}

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

        <img
          src="/garud/garud-main.jpg"
          alt="Garud Commandos"
          className="w-full h-[450px] object-cover"
        />

        <div className="p-8">

          <h2 className="text-4xl font-bold mb-4">
            About Garud Commandos
          </h2>

          <p className="text-gray-700 leading-8">
            Garud Commandos are the Special Forces unit of the
            Indian Air Force. They are trained for combat search
            and rescue, counter-terrorism operations, special
            reconnaissance, direct action missions and protection
            of vital air force assets. Their training is among the
            toughest in the Indian Armed Forces.
          </p>

        </div>

      </div>

      {/* Operations */}

      <div className="bg-white p-8 rounded-xl shadow mt-12">

        <h2 className="text-3xl font-bold mb-6">
          ⚔ Major Operations
        </h2>

        <ul className="space-y-3">

          {operations.map((op, index) => (
            <li
              key={index}
              className="bg-gray-100 p-4 rounded-lg"
            >
              {op}
            </li>
          ))}

        </ul>

      </div>

      {/* Training */}

      <div className="bg-blue-50 p-8 rounded-xl shadow mt-12">

        <h2 className="text-3xl font-bold mb-6">
          🎯 Training
        </h2>

        <p className="leading-8">
          Garud Commandos undergo approximately 72 weeks of
          rigorous training covering airborne operations,
          combat diving, jungle warfare, mountain warfare,
          CQB, survival training and advanced weapon handling.
        </p>

      </div>

      {/* Interactive Section */}

      <div className="text-center mt-12">

        <button
          onClick={() => setShowMore(!showMore)}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
        >
          {showMore ? "Hide Details" : "Learn More"}
        </button>

      </div>

      {showMore && (

        <div className="bg-yellow-50 p-8 rounded-xl shadow mt-8">

          <h2 className="text-3xl font-bold mb-4">
            💡 SSB Important Facts
          </h2>

          <ul className="list-disc pl-6 space-y-3">

            <li>
              Garud is the Special Forces unit of the Indian Air Force.
            </li>

            <li>
              Raised in 2004.
            </li>

            <li>
              Responsible for airbase protection and CSAR missions.
            </li>

            <li>
              Trained in airborne and special operations.
            </li>

            <li>
              Participated in counter-terrorism missions.
            </li>

          </ul>

        </div>

      )}

    </div>
  );
}

export default Garud;