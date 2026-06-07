import { useState } from "react";

const chiefs = [
  {
    name: "Field Marshal K. M. Cariappa",
    tenure: "1949 – 1953",
    achievement: "First Indian Commander-in-Chief of the Indian Army.",
    image: "/chiefs/cariappa.jpg",
    wiki: "https://en.wikipedia.org/wiki/K._M._Cariappa",
  },

  {
    name: "Field Marshal Sam Manekshaw",
    tenure: "1969 – 1973",
    achievement:
      "Led India to victory in the 1971 Indo-Pak War and became India's first Field Marshal.",
    image: "/chiefs/manekshaw.jpg",
    wiki: "https://en.wikipedia.org/wiki/Sam_Manekshaw",
  },

  {
    name: "General Bipin Rawat",
    tenure: "2016 – 2019",
    achievement:
      "Former COAS and India's first Chief of Defence Staff (CDS).",
    image: "/chiefs/rawat.jpg",
    wiki: "https://en.wikipedia.org/wiki/Bipin_Rawat",
  },

  {
    name: "General Manoj Pande",
    tenure: "2022 – 2024",
    achievement:
      "First Engineer officer to become Chief of Army Staff.",
    image: "/chiefs/pande.jpg",
    wiki: "https://en.wikipedia.org/wiki/Manoj_Pande",
  },

  {
    name: "General Upendra Dwivedi",
    tenure: "2024 – Present",
    achievement:
      "Current Chief of Army Staff of the Indian Army.",
    image: "/chiefs/dwivedi.jpg",
    wiki: "https://en.wikipedia.org/wiki/Upendra_Dwivedi",
  },
];

function ArmyChiefs() {
  const [search, setSearch] = useState("");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      <div
        className="h-[350px] rounded-2xl mb-10 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)), url('/chiefs/banner.jpg')",
        }}
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center">
          ⭐ Chiefs of Army Staff
        </h1>
      </div>

      <p className="text-center text-xl text-gray-600 mb-10">
        Leaders who shaped the Indian Army and safeguarded the nation.
      </p>

      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search Army Chief..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-3 rounded-lg w-full max-w-md"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {chiefs
          .filter((chief) =>
            chief.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((chief, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition duration-300"
            >

              <img
                src={chief.image}
                alt={chief.name}
                className="w-full h-80 object-cover"
              />

              <div className="p-6">

                <h2 className="text-2xl font-bold">
                  {chief.name}
                </h2>

                <p className="text-blue-600 font-semibold mt-2">
                  {chief.tenure}
                </p>

                <p className="mt-4 text-gray-700">
                  {chief.achievement}
                </p>

                <a
                  href={chief.wiki}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
                >
                  Read Biography →
                </a>

              </div>

            </div>

          ))}

      </div>

    </div>
  );
}

export default ArmyChiefs;