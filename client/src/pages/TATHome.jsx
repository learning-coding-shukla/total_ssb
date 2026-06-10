import { Link } from "react-router-dom";

function TATHome() {
  const sets = Array.from(
    { length: 9 },
    (_, i) => i + 1
  );

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-5xl font-bold text-center mb-10">
        Thematic Apperception Test
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {sets.map((set) => (
          <Link
            key={set}
            to={`/tat/test/${set}`}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl"
          >
            <h2 className="text-2xl font-bold">
              TAT Set {set}
            </h2>

            <p className="mt-3">
              11 Pictures
            </p>

            <p>
              1 Blank Slide
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TATHome;