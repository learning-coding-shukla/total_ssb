import { Link } from "react-router-dom";
import { gpeSets } from "../data/gpeData";

function GPEHome() {
return ( <div className="max-w-7xl mx-auto p-8">


  {/* Hero Section */}

  <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-green-950 to-slate-900 rounded-3xl p-10 mb-12 text-white border border-yellow-500/30 shadow-2xl">

    <div className="absolute right-8 top-4 text-8xl opacity-10">
      🗺️
    </div>

    <h1 className="text-5xl font-bold mb-4">
      Group Planning Exercise
    </h1>

    <p className="text-xl text-slate-300 max-w-3xl">
      Practice real SSB Group Planning Exercises exactly as conducted in the Service Selection Board.
    </p>

    <div className="flex flex-wrap gap-3 mt-6">

      <span className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold">
        Prioritization
      </span>

      <span className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold">
        Resource Utilization
      </span>

      <span className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold">
        Leadership
      </span>

      <span className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold">
        Time-Distance Calculation
      </span>

    </div>

  </div>

  {/* Instructions */}

  <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-2xl p-6 mb-10">

    <h2 className="font-bold text-2xl mb-4">
      ⚠ Real SSB Simulation
    </h2>

    <ul className="space-y-2 text-lg">

      <li>• Story visible for first 5 minutes only</li>

      <li>• Story automatically disappears</li>

      <li>• Map remains visible for next 10 minutes</li>

      <li>• Write your solution in your notebook</li>

      <li>• No typing required on website</li>

      <li>• Total duration: 15 minutes</li>

    </ul>

  </div>

  {/* GPE Cards */}

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

    {gpeSets.map((gpe) => (

      <div
        key={gpe.id}
        className="
          group
          bg-gradient-to-br
          from-slate-900
          via-slate-800
          to-slate-900
          rounded-3xl
          overflow-hidden
          border
          border-yellow-500/20
          hover:border-yellow-500
          transition-all
          duration-300
          hover:scale-105
          shadow-xl
        "
      >

        {/* Image */}

        <div className="relative">

          <img
            src={gpe.map}
            alt={gpe.title}
            className="w-full h-52 object-cover"
          />

          <div className="
            absolute
            top-3
            right-3
            bg-yellow-500
            text-black
            px-3
            py-1
            rounded-full
            font-bold
            text-sm
          ">
            GPE {gpe.id}
          </div>

        </div>

        {/* Content */}

        <div className="p-6 text-white">

          <h2 className="text-2xl font-bold mb-3 min-h-[70px]">
            {gpe.title}
          </h2>

          <p className="text-slate-300 mb-6">
            Real SSB Group Planning Exercise
          </p>

          <Link
            to={`/gpe/instructions/${gpe.id}`}
            className="
              block
              text-center
              bg-gradient-to-r
              from-yellow-500
              to-amber-400
              text-black
              py-3
              rounded-xl
              font-bold
              hover:shadow-lg
              transition
            "
          >
            🚀 Start Test
          </Link>

        </div>

      </div>

    ))}

  </div>

</div>


);
}

export default GPEHome;
