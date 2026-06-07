import { Link } from "react-router-dom";

function Operations() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      <h1 className="text-5xl font-bold text-center mb-10">
        Indian Military Operations
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <Link
          to="/trident"
          className="bg-white p-6 rounded-xl shadow hover:shadow-xl"
        >
          ⚓ Operation Trident
        </Link>

        <Link
          to="/python"
          className="bg-white p-6 rounded-xl shadow hover:shadow-xl"
        >
          ⚓ Operation Python
        </Link>

        <Link
          to="/meghdoot"
          className="bg-white p-6 rounded-xl shadow hover:shadow-xl"
        >
          🏔 Operation Meghdoot
        </Link>

        <Link
          to="/cactus"
          className="bg-white p-6 rounded-xl shadow hover:shadow-xl"
        >
          ✈️ Operation Cactus
        </Link>

        <Link
          to="/vijay"
          className="bg-white p-6 rounded-xl shadow hover:shadow-xl"
        >
          🪖 Operation Vijay
        </Link>

        <Link
          to="/sindoor"
          className="bg-white p-6 rounded-xl shadow hover:shadow-xl"
        >
          🎯 Operation Sindoor
        </Link>

      </div>

    </div>
  );
}

export default Operations;