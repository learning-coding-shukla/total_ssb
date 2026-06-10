import { Link } from "react-router-dom";

function WATHome() {
  const sets = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <h1 className="text-5xl font-bold text-center mb-10">
        Word Association Test
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {sets.map((set) => (
          <Link
            key={set}
            to={`/wat/instructions/${set}`}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition"
          >
            <h2 className="text-2xl font-bold">WAT Set {set}</h2>

            <p className="mt-2 text-gray-600">
              60 Words • 15 Seconds Per Word
            </p>

            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
              Practice
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default WATHome;