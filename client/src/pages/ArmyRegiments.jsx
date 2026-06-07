import { useState } from "react";

const regiments = [
  {
    name: "Rajputana Rifles",
    centre: "Delhi Cantonment",
    motto: "Veer Bhogya Vasundhara",
    warCry: "Raja Ram Chandra Ki Jai",
    image: "/regiments/rajrif.jpg",
    wiki: "https://en.wikipedia.org/wiki/Rajputana_Rifles",
  },

  {
    name: "Jat Regiment",
    centre: "Bareilly",
    motto: "Sangathan Wa Veerta",
    warCry: "Jat Balwan, Jai Bhagwan",
    image: "/regiments/jat.jpg",
    wiki: "https://en.wikipedia.org/wiki/Jat_Regiment",
  },

  {
    name: "Sikh Regiment",
    centre: "Ramgarh",
    motto: "Nischay Kar Apni Jeet Karo",
    warCry: "Bole So Nihal, Sat Sri Akal",
    image: "/regiments/sikh.jpg",
    wiki: "https://en.wikipedia.org/wiki/Sikh_Regiment",
  },

  {
    name: "Gorkha Rifles",
    centre: "Shillong",
    motto: "Kayar Hunu Bhanda Marnu Ramro",
    warCry: "Jai Mahakali, Ayo Gorkhali",
    image: "/regiments/gorkha.jpg",
    wiki: "https://en.wikipedia.org/wiki/Gorkha_Rifles",
  },

  {
    name: "Kumaon Regiment",
    centre: "Ranikhet",
    motto: "Parakramo Vijayate",
    warCry: "Kalika Mata Ki Jai",
    image: "/regiments/kumaon.jpg",
    wiki: "https://en.wikipedia.org/wiki/Kumaon_Regiment",
  },

  {
    name: "Garhwal Rifles",
    centre: "Lansdowne",
    motto: "Yudhaya Krit Nishchaya",
    warCry: "Badri Vishal Ki Jai",
    image: "/regiments/garhwal.jpg",
    wiki: "https://en.wikipedia.org/wiki/Garhwal_Rifles",
  },

  {
    name: "Punjab Regiment",
    centre: "Ramgarh",
    motto: "Sthal Wa Jal",
    warCry: "Bol Jawan, Sat Sri Akal",
    image: "/regiments/punjab.jpg",
    wiki: "https://en.wikipedia.org/wiki/Punjab_Regiment_(India)",
  },

  {
    name: "Bihar Regiment",
    centre: "Danapur",
    motto: "Karam Hi Dharam",
    warCry: "Jai Bajrang Bali",
    image: "/regiments/bihar.jpg",
    wiki: "https://en.wikipedia.org/wiki/Bihar_Regiment",
  },

  {
    name: "Madras Regiment",
    centre: "Wellington",
    motto: "Swadharme Nidhanam Shreyaha",
    warCry: "Veera Madrassi Adi Kollu",
    image: "/regiments/madras.jpg",
    wiki: "https://en.wikipedia.org/wiki/Madras_Regiment",
  },
];

function ArmyRegiments() {
  const [search, setSearch] = useState("");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      <h1 className="text-3xl md:text-5xl lg:text-6xlfont-bold text-center mb-4">
        🎖 Indian Army Regiments
      </h1>

      <p className="text-center text-gray-600 mb-10">
        Regiments, War Cries, Centres and Heritage
      </p>

      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search Regiment..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-3 rounded-lg w-full max-w-md"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {regiments
          .filter((regiment) =>
            regiment.name
              .toLowerCase()
              .includes(search.toLowerCase())
          )
          .map((regiment, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition"
            >

              <img
                src={regiment.image}
                alt={regiment.name}
                className="w-full h-52 md:h-64 object-cover"
              />

              <div className="p-6">

                <h2 className="text-2xl font-bold">
                  {regiment.name}
                </h2>

                <p className="mt-3">
                  <strong>Centre:</strong> {regiment.centre}
                </p>

                <p className="mt-2">
                  <strong>Motto:</strong> {regiment.motto}
                </p>

                <p className="mt-2">
                  <strong>War Cry:</strong> {regiment.warCry}
                </p>

                <a
                  href={regiment.wiki}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded-lg"
                >
                  Read More →
                </a>

              </div>

            </div>

          ))}

      </div>

    </div>
  );
}

export default ArmyRegiments;