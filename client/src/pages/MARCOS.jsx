function MARCOS() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      {/* Banner */}
      <div
        className="h-[220px] md:h-[350px] lg:h-[400px] rounded-2xl mb-10 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)), url('/marcos/banner.jpg')",
        }}
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center">
          🔥 MARCOS
        </h1>
      </div>

      <p className="text-center text-xl text-gray-600 mb-10">
        Marine Commandos of the Indian Navy
      </p>

      {/* Quick Facts */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-3xl font-bold text-blue-600">1987</h2>
          <p>Raised</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-3xl font-bold text-green-600">Special Ops</h2>
          <p>Role</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-3xl font-bold text-red-600">Few %</h2>
          <p>Pass Selection</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-3xl font-bold text-purple-600">Elite</h2>
          <p>Force</p>
        </div>

      </div>

      {/* About */}
      <div className="bg-white p-8 rounded-xl shadow mb-8">

        <h2 className="text-3xl font-bold mb-4">
          About MARCOS
        </h2>

        <p>
          Marine Commandos (MARCOS) are the special forces unit of the
          Indian Navy. They conduct special operations, counter-terrorism,
          hostage rescue, maritime interdiction, direct action and covert
          missions in sea, air and land environments.
        </p>

      </div>

      {/* Motto */}
      <div className="bg-blue-50 p-8 rounded-xl shadow mb-8">

        <h2 className="text-3xl font-bold mb-4">
          Motto
        </h2>

        <p className="text-xl font-bold">
          "The Few, The Fearless"
        </p>

      </div>

      {/* Operations */}
      <div className="bg-green-50 p-8 rounded-xl shadow mb-8">

        <h2 className="text-3xl font-bold mb-4">
          Famous Operations
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Operation Pawan</li>
          <li>Operation Cactus</li>
          <li>Kargil Support Operations</li>
          <li>Anti-Piracy Operations</li>
          <li>26/11 Mumbai Response</li>
        </ul>

      </div>

      {/* Equipment */}
      <div className="bg-red-50 p-8 rounded-xl shadow mb-8">

        <h2 className="text-3xl font-bold mb-4">
          Equipment
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Tavor TAR-21</li>
          <li>AK-103</li>
          <li>SIG716</li>
          <li>MP5</li>
          <li>Glock Pistols</li>
          <li>Diving Equipment</li>
        </ul>

      </div>

      {/* SSB Questions */}
      <div className="bg-yellow-50 p-8 rounded-xl shadow">

        <h2 className="text-3xl font-bold mb-4">
          SSB Interview Questions
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>What is MARCOS?</li>
          <li>When was MARCOS raised?</li>
          <li>What is the MARCOS motto?</li>
          <li>Difference between MARCOS and Para SF?</li>
          <li>Why is MARCOS considered elite?</li>
        </ul>

      </div>

    </div>
  );
}

export default MARCOS;