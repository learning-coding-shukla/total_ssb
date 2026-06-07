import { Link } from "react-router-dom";

function Army() {
  return (
    <div className="max-w-7xl mx-auto p-8">

      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
        🪖 Indian Army
      </h1>

      <p className="text-center text-gray-600 text-xl mb-12">
        Service Before Self
      </p>

      <div className="grid md:grid-cols-3 gap-8">

        <Link
          to="/army-history"
          className="bg-white p-8 rounded-xl shadow hover:shadow-xl"
        >
          <h3 className="text-2xl font-bold">
            📜 Army History
          </h3>

          <p className="mt-4">
            Evolution of the Indian Army from
            Independence to present day.
          </p>
        </Link>

        <Link
          to="/army-commands"
          className="bg-white p-8 rounded-xl shadow hover:shadow-xl"
        >
          <h3 className="text-2xl font-bold">
            🪖 Commands
          </h3>

          <p className="mt-4">
            All Army Commands and their Headquarters.
          </p>
        </Link>

        <Link
          to="/army-regiments"
          className="bg-white p-8 rounded-xl shadow hover:shadow-xl"
        >
          <h3 className="text-2xl font-bold">
            🎖 Regiments
          </h3>

          <p className="mt-4">
            Infantry, Armoured and Artillery Regiments.
          </p>
        </Link>

        <Link
          to="/army-corps"
          className="bg-white p-8 rounded-xl shadow hover:shadow-xl"
        >
          <h3 className="text-2xl font-bold">
            ⚔ Corps
          </h3>

          <p className="mt-4">
            Signals, Engineers, ASC, AMC and more.
          </p>
        </Link>

        <Link
          to="/parasf"
          className="bg-white p-8 rounded-xl shadow hover:shadow-xl"
        >
          <h3 className="text-2xl font-bold">
            🔥 Para SF
          </h3>

          <p className="mt-4">
            Indian Army Special Forces.
          </p>
        </Link>

        <Link
          to="/army-weapons"
          className="bg-white p-8 rounded-xl shadow hover:shadow-xl"
        >
          <h3 className="text-2xl font-bold">
            🚀 Weapons
          </h3>

          <p className="mt-4">
            Tanks, Artillery, Rifles and Missiles.
          </p>
        </Link>

        <Link
          to="/army-chiefs"
          className="bg-white p-8 rounded-xl shadow hover:shadow-xl"
        >
          <h3 className="text-2xl font-bold">
            ⭐ Army Chiefs
          </h3>

          <p className="mt-4">
            Chiefs of Army Staff through history.
          </p>
        </Link>

        <Link
          to="/pvc"
          className="bg-white p-8 rounded-xl shadow hover:shadow-xl"
        >
          <h3 className="text-2xl font-bold">
            🏅 PVC Winners
          </h3>

          <p className="mt-4">
            Param Vir Chakra Heroes.
          </p>
        </Link>

        <Link
          to="/army-quiz"
          className="bg-white p-8 rounded-xl shadow hover:shadow-xl"
        >
          <h3 className="text-2xl font-bold">
            ❓ Army Quiz
          </h3>

          <p className="mt-4">
            Test your Army Knowledge.
          </p>
        </Link>

      </div>

    </div>
  );
}

export default Army;