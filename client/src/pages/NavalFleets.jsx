function NavalFleets() {
  const fleets = [
    {
      name: "Western Fleet",
      base: "Mumbai",
      role: "Arabian Sea Operations",
      commander: "Flag Officer Commanding Western Fleet",
      ships: "Destroyers, Frigates, Submarines, Aircraft Carrier Battle Group",
      image: "/fleets/western-fleet.jpg",
      wiki: "https://en.wikipedia.org/wiki/Western_Fleet_(India)",
    },

    {
      name: "Eastern Fleet",
      base: "Visakhapatnam",
      role: "Bay of Bengal & Indo-Pacific Operations",
      commander: "Flag Officer Commanding Eastern Fleet",
      ships: "Destroyers, Frigates, Corvettes, Amphibious Ships",
      image: "/fleets/eastern-fleet.jpg",
      wiki: "https://en.wikipedia.org/wiki/Eastern_Fleet_(India)",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      {/* Banner */}
      <div
        className="h-[220px] md:h-[350px] lg:h-[400px] rounded-2xl mb-10 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)), url('/fleets/banner.jpg')",
        }}
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center">
          🚢 Indian Naval Fleets
        </h1>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-3xl font-bold text-blue-600">2</h2>
          <p>Operational Fleets</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-3xl font-bold text-green-600">Mumbai</h2>
          <p>Western Fleet Base</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-3xl font-bold text-red-600">
            Visakhapatnam
          </h2>
          <p>Eastern Fleet Base</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-3xl font-bold text-purple-600">
            Blue Water
          </h2>
          <p>Navy Capability</p>
        </div>

      </div>

      <div className="grid md:grid-cols-2 gap-8">

        {fleets.map((fleet, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
          >

            <img
              src={fleet.image}
              alt={fleet.name}
              className="w-full h-72 object-cover"
            />

            <div className="p-6">

              <h2 className="text-3xl font-bold">
                {fleet.name}
              </h2>

              <p className="mt-4">
                <strong>Base:</strong> {fleet.base}
              </p>

              <p className="mt-2">
                <strong>Role:</strong> {fleet.role}
              </p>

              <p className="mt-2">
                <strong>Commander:</strong> {fleet.commander}
              </p>

              <p className="mt-2">
                <strong>Assets:</strong> {fleet.ships}
              </p>

              <a
                href={fleet.wiki}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
              >
                Learn More →
              </a>

            </div>

          </div>
        ))}

      </div>

      {/* SSB Notes */}

      <div className="bg-blue-50 p-8 rounded-xl shadow mt-12">

        <h2 className="text-3xl font-bold mb-4">
          SSB Important Facts
        </h2>

        <ul className="list-disc pl-6 space-y-3">
          <li>Western Fleet is known as the Sword Arm of the Indian Navy.</li>

          <li>Eastern Fleet operates mainly in the Bay of Bengal and Indo-Pacific region.</li>

          <li>Mumbai serves as the headquarters of the Western Naval Command.</li>

          <li>Visakhapatnam serves as the headquarters of the Eastern Naval Command.</li>

          <li>Indian Navy is a Blue Water Navy capable of operating far from Indian shores.</li>
        </ul>

      </div>

    </div>
  );
}

export default NavalFleets;