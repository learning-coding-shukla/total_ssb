import { useState } from "react";

const weapons = [
  {
    name: "AK-203",
    type: "Assault Rifle",
    role: "Infantry Weapon",
    range: "800 m",
    origin: "India-Russia",
    image: "/weapons/ak203.jpg",
    wiki: "https://en.wikipedia.org/wiki/AK-203",
  },

  {
    name: "SIG716",
    type: "Battle Rifle",
    role: "Frontline Infantry",
    range: "600 m",
    origin: "USA",
    image: "/weapons/sig716.jpg",
    wiki: "https://en.wikipedia.org/wiki/SIG_Sauer_SIG716",
  },

  {
    name: "T-90 Bhishma",
    type: "Main Battle Tank",
    role: "Armoured Warfare",
    range: "550 km",
    origin: "India-Russia",
    image: "/weapons/t90.jpg",
    wiki: "https://en.wikipedia.org/wiki/T-90",
  },

  {
    name: "Arjun MBT",
    type: "Main Battle Tank",
    role: "Heavy Armour",
    range: "450 km",
    origin: "India",
    image: "/weapons/arjun.jpg",
    wiki: "https://en.wikipedia.org/wiki/Arjun_(tank)",
  },

  {
    name: "K9 Vajra",
    type: "Self Propelled Howitzer",
    role: "Artillery",
    range: "40 km",
    origin: "India-South Korea",
    image: "/weapons/k9vajra.jpg",
    wiki: "https://en.wikipedia.org/wiki/K9_Thunder",
  },

  {
    name: "Pinaka",
    type: "Rocket Artillery",
    role: "Long Range Strike",
    range: "75 km",
    origin: "India",
    image: "/weapons/pinaka.jpg",
    wiki: "https://en.wikipedia.org/wiki/Pinaka_multi-barrel_rocket_launcher",
  },

  {
    name: "BrahMos",
    type: "Supersonic Cruise Missile",
    role: "Precision Strike",
    range: "800 km+",
    origin: "India-Russia",
    image: "/weapons/brahmos.jpg",
    wiki: "https://en.wikipedia.org/wiki/BrahMos",
  },

  {
    name: "Nag Missile",
    type: "ATGM",
    role: "Tank Killer",
    range: "20 km",
    origin: "India",
    image: "/weapons/nag.jpg",
    wiki: "https://en.wikipedia.org/wiki/Nag_(missile)",
  },

  {
    name: "Smerch",
    type: "MBRL",
    role: "Area Saturation",
    range: "90 km",
    origin: "Russia",
    image: "/weapons/smerch.jpg",
    wiki: "https://en.wikipedia.org/wiki/BM-30_Smerch",
  },
];

function ArmyWeapons() {
  const [search, setSearch] = useState("");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      {/* Banner */}
      <div
        className="h-[350px] rounded-2xl mb-10 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)), url('/weapons/banner.jpg')",
        }}
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center">
          🚀 Indian Army Weapons
        </h1>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-3xl font-bold text-red-600">9+</h2>
          <p>Major Systems</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-3xl font-bold text-blue-600">800 km+</h2>
          <p>BrahMos Range</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-3xl font-bold text-green-600">Mach 2.8</h2>
          <p>BrahMos Speed</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-3xl font-bold text-purple-600">Modern</h2>
          <p>Combat Systems</p>
        </div>

      </div>

      <p className="text-center text-gray-600 text-xl mb-10">
        Rifles, Tanks, Artillery, Missiles and Combat Systems
      </p>

      {/* Search */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search Weapon..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-3 rounded-lg w-full max-w-md"
        />
      </div>

      {/* Weapons Grid */}
      <div className="grid md:grid-cols-3 gap-8">

        {weapons
          .filter((weapon) =>
            weapon.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((weapon, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
            >
              <img
                src={weapon.image}
                alt={weapon.name}
                className="w-full h-52 md:h-64 object-cover"
              />

              <div className="p-6">

                <h2 className="text-2xl font-bold">
                  {weapon.name}
                </h2>

                <p className="mt-3">
                  <strong>Type:</strong> {weapon.type}
                </p>

                <p className="mt-2">
                  <strong>Role:</strong> {weapon.role}
                </p>

                <p className="mt-2">
                  <strong>Range:</strong> {weapon.range}
                </p>

                <p className="mt-2">
                  <strong>Origin:</strong> {weapon.origin}
                </p>

                <a
                  href={weapon.wiki}
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

    </div>
  );
}

export default ArmyWeapons;