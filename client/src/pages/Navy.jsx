import { Link } from "react-router-dom";

function Navy() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-4">⚓ Indian Navy</h1>

      <p className="text-center text-xl text-gray-600 mb-12">Shanno Varunah</p>

      <div className="grid md:grid-cols-3 gap-8">
        <Link
          to="/navy-commands"
          className="bg-white p-8 rounded-xl shadow hover:shadow-xl"
        >
          <h2 className="text-2xl font-bold">⚓ Navy Commands</h2>

          <p className="mt-4">Western, Eastern and Southern Naval Commands.</p>
        </Link>
        

        <Link
          to="/marcos"
          className="bg-white p-8 rounded-xl shadow hover:shadow-xl"
        >
          <h2 className="text-2xl font-bold">🔥 MARCOS</h2>

          <p className="mt-4">Marine Commandos of the Indian Navy.</p>
        </Link>

        <Link
          to="/naval-fleets"
          className="bg-white p-8 rounded-xl shadow hover:shadow-xl"
        >
          <h2 className="text-2xl font-bold">🚢 Naval Fleets</h2>

          <p className="mt-4">Western Fleet and Eastern Fleet.</p>
        </Link>
      </div>
    </div>
  );
}

export default Navy;
