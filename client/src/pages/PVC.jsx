const heroes = [
  {
    name: "Major Somnath Sharma",
    war: "Indo-Pak War 1947",
    image: "/pvc/somnath.jpg",
    wiki: "https://en.wikipedia.org/wiki/Somnath_Sharma",
  },

  {
    name: "CQMH Abdul Hamid",
    war: "Indo-Pak War 1965",
    image: "/pvc/abdulhamid.jpg",
    wiki: "https://en.wikipedia.org/wiki/Abdul_Hamid_(soldier)",
  },

  {
    name: "2nd Lt Arun Khetarpal",
    war: "Indo-Pak War 1971",
    image: "/pvc/arun.jpg",
    wiki: "https://en.wikipedia.org/wiki/Arun_Khetarpal",
  },

  {
    name: "Captain Vikram Batra",
    war: "Kargil War 1999",
    image: "/pvc/vikram.jpg",
    wiki: "https://en.wikipedia.org/wiki/Vikram_Batra",
  },

  {
    name: "Captain Manoj Kumar Pandey",
    war: "Kargil War 1999",
    image: "/pvc/manoj.jpg",
    wiki: "https://en.wikipedia.org/wiki/Manoj_Kumar_Pandey",
  },

  {
    name: "Grenadier Yogendra Singh Yadav",
    war: "Kargil War 1999",
    image: "/pvc/yogendra.jpg",
    wiki: "https://en.wikipedia.org/wiki/Yogendra_Singh_Yadav",
  },

  {
    name: "Rifleman Sanjay Kumar",
    war: "Kargil War 1999",
    image: "/pvc/sanjay.jpg",
    wiki: "https://en.wikipedia.org/wiki/Sanjay_Kumar_(soldier)",
  },
];

function PVC() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      <h1 className="text-5xl font-bold text-center mb-4">
        🏅 Param Vir Chakra Heroes
      </h1>

      <p className="text-center text-gray-600 mb-10">
        India's Highest Gallantry Award
      </p>

      <div className="grid md:grid-cols-3 gap-8">

        {heroes.map((hero, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition"
          >

            <img
              src={hero.image}
              alt={hero.name}
              className="w-full h-72 object-cover"
            />

            <div className="p-6">

              <h2 className="text-xl font-bold">
                {hero.name}
              </h2>

              <p className="text-gray-600 mt-2">
                {hero.war}
              </p>

              <a
                href={hero.wiki}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                Read Biography
              </a>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default PVC;