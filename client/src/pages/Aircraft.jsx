import { useState } from "react";

const aircrafts = [
  {
    name: "Rafale",
    type: "4.5 Generation Fighter",
    role: "Air Superiority & Strike",
    speed: "Mach 1.8",
    origin: "France",
    image: "/aircraft/rafale.jpg",
    wiki: "https://en.wikipedia.org/wiki/Dassault_Rafale",
  },
  {
    name: "Su-30MKI",
    type: "Multirole Fighter",
    role: "Air Dominance",
    speed: "Mach 2",
    origin: "India-Russia",
    image: "/aircraft/su30mki.jpg",
    wiki: "https://en.wikipedia.org/wiki/Sukhoi_Su-30MKI",
  },
  {
    name: "Tejas",
    type: "Light Combat Aircraft",
    role: "Multirole Fighter",
    speed: "Mach 1.8",
    origin: "India",
    image: "/aircraft/tejas.jpg",
    wiki: "https://en.wikipedia.org/wiki/HAL_Tejas",
  },
  {
    name: "Mirage 2000",
    type: "Multirole Fighter",
    role: "Precision Strike",
    speed: "Mach 2.2",
    origin: "France",
    image: "/aircraft/mirage2000.jpg",
    wiki: "https://en.wikipedia.org/wiki/Dassault_Mirage_2000",
  },
  {
    name: "Jaguar",
    type: "Ground Attack Aircraft",
    role: "Deep Strike",
    speed: "Mach 1.6",
    origin: "UK-France",
    image: "/aircraft/jaguar.jpg",
    wiki: "https://en.wikipedia.org/wiki/SEPECAT_Jaguar",
  },
  {
    name: "C-17 Globemaster",
    type: "Strategic Airlift",
    role: "Heavy Transport",
    speed: "829 km/h",
    origin: "USA",
    image: "/aircraft/c17.jpg",
    wiki: "https://en.wikipedia.org/wiki/Boeing_C-17_Globemaster_III",
  },
  {
    name: "Apache AH-64E",
    type: "Attack Helicopter",
    role: "Close Air Support",
    speed: "293 km/h",
    origin: "USA",
    image: "/aircraft/apache.jpg",
    wiki: "https://en.wikipedia.org/wiki/Boeing_AH-64_Apache",
  },
  {
    name: "Chinook CH-47F",
    type: "Heavy Lift Helicopter",
    role: "Transport",
    speed: "315 km/h",
    origin: "USA",
    image: "/aircraft/chinook.jpg",
    wiki: "https://en.wikipedia.org/wiki/Boeing_CH-47_Chinook",
  },
];

function Aircraft() {
  const [search, setSearch] = useState("");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Banner */}
      <div
        className="h-[400px] rounded-2xl mb-10 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)), url('/aircraft/banner.jpg')",
        }}
      >
        <h1 className="text-6xl font-bold text-white text-center">
          ✈ Indian Air Force Aircraft
        </h1>
      </div>

      {/* Air Power Statistics */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-3xl font-bold text-blue-600">1700+</h2>
          <p>Aircraft Fleet</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-3xl font-bold text-green-600">30+</h2>
          <p>Fighter Squadrons</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-3xl font-bold text-red-600">Rafale</h2>
          <p>Most Advanced Fighter</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-3xl font-bold text-purple-600">Tejas</h2>
          <p>Made In India 🇮🇳</p>
        </div>
      </div>

      {/* Search */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search Aircraft..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-3 rounded-lg w-full max-w-md"
        />
      </div>

      {/* Aircraft Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {aircrafts
          .filter((aircraft) =>
            aircraft.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((aircraft) => (
            <div
              key={aircraft.name}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
            >
              <img
                src={aircraft.image}
                alt={aircraft.name}
                className="w-full h-52 md:h-64 object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold">{aircraft.name}</h2>
                <div className="flex gap-2 mt-3">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    {aircraft.type}
                  </span>
                </div>

                <p className="mt-3">
                  <strong>Type:</strong> {aircraft.type}
                </p>

                <p className="mt-2">
                  <strong>Role:</strong> {aircraft.role}
                </p>

                <p className="mt-2">
                  <strong>Speed:</strong> {aircraft.speed}
                </p>

                <p className="mt-2">
                  <strong>Origin:</strong> {aircraft.origin}
                </p>

                <a
                  href={aircraft.wiki}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
      </div>

      {/* SSB Notes */}
      <div className="bg-blue-50 p-8 rounded-xl shadow mt-12">
        <h2 className="text-3xl font-bold mb-4">SSB Important Aircraft Facts</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>Rafale is India's most advanced 4.5 generation fighter.</li>
          <li>Su-30MKI forms the backbone of the IAF fighter fleet.</li>
          <li>Tejas is India's indigenous Light Combat Aircraft.</li>
          <li>Mirage 2000 played a major role during the Kargil War.</li>
          <li>Apache helicopters provide close air support.</li>
        </ul>
      </div>

      {/* Did You Know? */}
      <div className="bg-yellow-50 p-8 rounded-xl shadow mt-12">
        <h2 className="text-3xl font-bold mb-4">💡 Did You Know?</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>Rafale can carry Meteor Beyond Visual Range missiles.</li>
          <li>Mirage 2000 played a major role during the Kargil War.</li>
          <li>Tejas is India's first indigenous fighter aircraft.</li>
          <li>Su-30MKI forms the backbone of the Indian Air Force.</li>
          <li>Apache is among the world's most capable attack helicopters.</li>
        </ul>
      </div>

      {/* Top IAF Fighters Comparison */}
      <div className="bg-white p-8 rounded-xl shadow mt-12">
        <h2 className="text-4xl font-bold mb-6">✈ Top IAF Fighters Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3">Aircraft</th>
                <th className="border p-3">Origin</th>
                <th className="border p-3">Speed</th>
                <th className="border p-3">Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">Rafale</td>
                <td className="border p-3">France</td>
                <td className="border p-3">Mach 1.8</td>
                <td className="border p-3">Multirole</td>
              </tr>
              <tr>
                <td className="border p-3">Su-30MKI</td>
                <td className="border p-3">India-Russia</td>
                <td className="border p-3">Mach 2</td>
                <td className="border p-3">Air Dominance</td>
              </tr>
              <tr>
                <td className="border p-3">Tejas</td>
                <td className="border p-3">India</td>
                <td className="border p-3">Mach 1.8</td>
                <td className="border p-3">Multirole</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Aircraft;
