import { Link } from "react-router-dom";

function AirForce() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
        ✈ Indian Air Force
      </h1>

      <p className="text-center text-xl text-gray-600 mb-12">
        Touch The Sky With Glory
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <Link
          to="/airforce-commands"
          className="bg-white p-8 rounded-xl shadow hover:shadow-xl"
        >
          <h2 className="text-2xl font-bold">🏢 Commands</h2>

          <p className="mt-4">All Air Force Commands and Headquarters.</p>
        </Link>

        <Link
          to="/aircraft"
          className="bg-white p-8 rounded-xl shadow hover:shadow-xl"
        >
          <h2 className="text-2xl font-bold">✈ Aircraft</h2>

          <p className="mt-4">Fighters, Transport and Helicopters.</p>
        </Link>

        <Link
          to="/garud"
          className="bg-white p-8 rounded-xl shadow hover:shadow-xl"
        >
          <h2 className="text-2xl font-bold">🔥 Garud Commandos</h2>

          <p className="mt-4">Special Forces of the Indian Air Force.</p>
        </Link>
      </div>
    </div>
  );
}

export default AirForce;
