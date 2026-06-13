import { Link } from "react-router-dom";

function TATHome() {
const sets = Array.from({ length: 9 }, (_, i) => i + 1);

const completedSets = Object.keys(localStorage).filter((key) =>
key.startsWith("tat_set_")
).length;

return ( <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-green-950 text-white">


  <div className="max-w-7xl mx-auto px-6 py-10">

    {/* Hero Section */}

    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-green-950 to-slate-900 border border-yellow-500/30 shadow-2xl p-10 mb-12">

      <div className="absolute right-8 top-4 text-8xl opacity-10">
        🖼️
      </div>

      <div className="inline-flex items-center gap-3 bg-yellow-500/10 border border-yellow-500/30 px-5 py-2 rounded-full mb-5">

        <span>🇮🇳</span>

        <span className="font-bold text-yellow-400">
          TOTAL_SSB PSYCHOLOGY MODULE
        </span>

      </div>

      <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">

        THEMATICAL APPERCEPTION TEST

      </h1>

      <p className="text-xl text-slate-300 max-w-4xl">
        Develop officer-like thinking, leadership, initiative,
        responsibility and problem-solving through story writing.
      </p>

      <div className="flex flex-wrap gap-3 mt-6">

        <span className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold">
          Leadership
        </span>

        <span className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold">
          Initiative
        </span>

        <span className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold">
          Responsibility
        </span>

        <span className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold">
          Problem Solving
        </span>

      </div>

    </div>

    {/* Progress Card */}

    <div className="bg-slate-900/70 border border-yellow-500/20 rounded-3xl p-8 mb-12">

      <div className="flex justify-between items-center mb-4">

        <h2 className="text-3xl font-bold">
          📊 Your Progress
        </h2>

        <span className="text-yellow-400 font-bold text-xl">
          {completedSets}/9 Sets Completed
        </span>

      </div>

      <div className="w-full h-4 bg-slate-700 rounded-full overflow-hidden">

        <div
          className="h-full bg-yellow-500 transition-all duration-500"
          style={{
            width: `${(completedSets / 9) * 100}%`,
          }}
        />

      </div>

    </div>

    {/* What Psychologist Assesses */}

    <div className="mb-12">

      <h2 className="text-3xl font-bold mb-6 text-center">
        🎯 What The Psychologist Assesses
      </h2>

      <div className="grid md:grid-cols-5 gap-4">

        {[
          { icon: "👑", text: "Leadership" },
          { icon: "⚡", text: "Initiative" },
          { icon: "🎯", text: "Planning" },
          { icon: "🤝", text: "Cooperation" },
          { icon: "🧠", text: "Reasoning" },
        ].map((item, index) => (

          <div
            key={index}
            className="bg-slate-900/70 border border-green-500/20 rounded-2xl p-5 text-center"
          >

            <div className="text-4xl mb-2">
              {item.icon}
            </div>

            <p className="font-semibold">
              {item.text}
            </p>

          </div>

        ))}

      </div>

    </div>

    {/* Sets */}

    <h2 className="text-4xl font-bold text-center mb-8">
      📖 Select TAT Set
    </h2>

    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

      {sets.map((set) => (

        <Link
          key={set}
          to={`/tat/test/${set}`}
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
            hover:scale-105
            transition-all
            duration-300
            shadow-xl
          "
        >

          <div className="h-48 bg-gradient-to-br from-yellow-500/20 to-green-500/20 flex items-center justify-center">

            <span className="text-8xl opacity-70">
              🖼️
            </span>

          </div>

          <div className="p-6">

            <div className="inline-block bg-yellow-500 text-black px-3 py-1 rounded-full font-bold text-sm mb-4">
              SET {set}
            </div>

            <h3 className="text-2xl font-bold mb-3">
              TAT Set {set}
            </h3>

            <p className="text-slate-300">
              11 Pictures + 1 Blank Slide
            </p>

            <div className="mt-6 bg-gradient-to-r from-yellow-500 to-amber-400 text-black text-center py-3 rounded-xl font-bold">
              🚀 Start Test
            </div>

          </div>

        </Link>

      ))}

    </div>

    {/* Footer Note */}

    <div className="mt-14 bg-slate-900/70 border border-yellow-500/20 rounded-3xl p-8 text-center">

      <h2 className="text-2xl font-bold mb-3">
        💡 TAT Success Tip
      </h2>

      <p className="text-slate-300 text-lg">
        Always write stories where the main character demonstrates
        initiative, responsibility, planning, teamwork and a positive
        approach towards solving problems.
      </p>

    </div>

  </div>

</div>


);
}

export default TATHome;
