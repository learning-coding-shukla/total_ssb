function AirForceCommands() {
  const commands = [
    {
      name: "Western Air Command",
      hq: "New Delhi",
      role: "Pakistan Front & Northern Sector",
      image: "/airforce/wac.jpg",
    },

    {
      name: "Eastern Air Command",
      hq: "Shillong",
      role: "China Border & North-East",
      image: "/airforce/eac.jpg",
    },

    {
      name: "Central Air Command",
      hq: "Prayagraj",
      role: "Central India Operations",
      image: "/airforce/cac.jpg",
    },

    {
      name: "Southern Air Command",
      hq: "Thiruvananthapuram",
      role: "Southern Air Defence",
      image: "/airforce/sac.jpg",
    },

    {
      name: "South Western Air Command",
      hq: "Gandhinagar",
      role: "Western Desert Sector",
      image: "/airforce/swac.jpg",
    },

    {
      name: "Training Command",
      hq: "Bengaluru",
      role: "Pilot & Officer Training",
      image: "/airforce/tc.jpg",
    },

    {
      name: "Maintenance Command",
      hq: "Nagpur",
      role: "Logistics & Maintenance",
      image: "/airforce/mc.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      {/* Banner */}

      <div
        className="h-[220px] md:h-[350px] lg:h-[400px] rounded-2xl mb-10 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)), url('/airforce/banner.jpg')",
        }}
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center">
          ✈ Indian Air Force Commands
        </h1>
      </div>

      {/* Quick Stats */}

      <div className="grid md:grid-cols-4 gap-6 mb-10">

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-3xl font-bold text-blue-600">7</h2>
          <p>Air Commands</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-3xl font-bold text-green-600">
            1932
          </h2>
          <p>Established</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-3xl font-bold text-red-600">
            New Delhi
          </h2>
          <p>Air HQ</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-3xl font-bold text-purple-600">
            1700+
          </h2>
          <p>Aircraft</p>
        </div>

      </div>

      {/* Commands Grid */}

      <div className="grid md:grid-cols-3 gap-8">

        {commands.map((command, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
          >

            <img
              src={command.image}
              alt={command.name}
              className="w-full h-52 md:h-64 object-cover"
            />

            <div className="p-6">

              <h2 className="text-2xl font-bold">
                {command.name}
              </h2>

              <p className="mt-3">
                <strong>Headquarters:</strong> {command.hq}
              </p>

              <p className="mt-2">
                <strong>Role:</strong> {command.role}
              </p>

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

          <li>
            Western Air Command is the largest and most operationally active command.
          </li>

          <li>
            Eastern Air Command is responsible for the China border and North-East region.
          </li>

          <li>
            Training Command controls all flying and ground training establishments.
          </li>

          <li>
            Maintenance Command ensures serviceability of aircraft and equipment.
          </li>

          <li>
            Air Headquarters is located in New Delhi.
          </li>

        </ul>

      </div>

    </div>
  );
}

export default AirForceCommands;
