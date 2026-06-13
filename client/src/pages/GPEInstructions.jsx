import { useNavigate, useParams } from "react-router-dom";

function GPEInstructions() {
const navigate = useNavigate();
const { setId } = useParams();

const instructions = [
{
icon: "🗺️",
title: "Observe The Model",
text: "A GPE model will be displayed on the screen.",
},
{
icon: "📖",
title: "Read Carefully",
text: "The situation story will remain visible for 5 minutes.",
},
{
icon: "🧠",
title: "Build Mental Picture",
text: "Correlate the model and story carefully.",
},
{
icon: "⏳",
title: "Story Disappears",
text: "After 5 minutes the story will disappear automatically.",
},
{
icon: "🗺️",
title: "Map Remains",
text: "Only the model/map remains visible for the next 10 minutes.",
},
{
icon: "✍️",
title: "Write In Notebook",
text: "Write your complete solution in your notebook exactly like real SSB.",
},
];

return ( <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-green-950 text-white">


  <div className="max-w-7xl mx-auto px-6 py-12">

    {/* Header */}

    <div className="text-center mb-12">

      <div className="inline-flex items-center gap-3 bg-yellow-500/10 border border-yellow-500/30 px-5 py-2 rounded-full mb-5">

        <span className="text-xl">🇮🇳</span>

        <span className="font-bold text-yellow-400">
          TOTAL_SSB REAL SIMULATION
        </span>

      </div>

      <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">

        GPE INSTRUCTIONS

      </h1>

      <p className="text-slate-400 text-lg mt-4">
        Group Planning Exercise • Officer Like Thinking • Real SSB Pattern
      </p>

    </div>

    {/* Instruction Cards */}

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      {instructions.map((item, index) => (
        <div
          key={index}
          className="
            bg-slate-900/60
            backdrop-blur
            border
            border-yellow-500/20
            rounded-3xl
            p-6
            hover:border-yellow-500
            hover:shadow-yellow-500/20
            hover:scale-105
            transition-all
            duration-300
          "
        >
          <div className="text-5xl mb-4">
            {item.icon}
          </div>

          <h3 className="text-xl font-bold text-yellow-400 mb-3">
            {item.title}
          </h3>

          <p className="text-slate-300 leading-relaxed">
            {item.text}
          </p>
        </div>
      ))}

    </div>

    {/* GTO Assessment Section */}

    <div className="mt-14">

      <h2 className="text-3xl font-bold mb-6 text-center">
        🎯 What GTO Assesses
      </h2>

      <div className="grid md:grid-cols-5 gap-4">

        {[
          { icon: "⚡", title: "Prioritization" },
          { icon: "🧠", title: "Reasoning" },
          { icon: "👥", title: "Group Division" },
          { icon: "🛠️", title: "Resources" },
          { icon: "⏱️", title: "Time Planning" },
        ].map((item, index) => (
          <div
            key={index}
            className="
              bg-green-900/20
              border
              border-green-500/20
              rounded-2xl
              p-5
              text-center
            "
          >
            <div className="text-4xl mb-2">
              {item.icon}
            </div>

            <p className="font-semibold">
              {item.title}
            </p>
          </div>
        ))}

      </div>

    </div>

    {/* Warning Section */}

    <div
      className="
        mt-12
        bg-gradient-to-r
        from-red-900/40
        to-red-700/20
        border
        border-red-500
        rounded-3xl
        p-8
      "
    >

      <h3 className="text-red-400 text-2xl font-bold mb-3">
        ⚠️ REAL SSB RULE
      </h3>

      <p className="text-red-100 text-lg">
        Do NOT write your solution on the website.
      </p>

      <p className="text-red-200 mt-2">
        Write your complete solution in your notebook exactly as done in the actual SSB.
      </p>

    </div>

    {/* Test Details */}

    <div className="mt-10 bg-slate-900/60 border border-yellow-500/20 rounded-3xl p-6">

      <h3 className="text-2xl font-bold mb-4 text-yellow-400">
        📋 Test Structure
      </h3>

      <div className="grid md:grid-cols-3 gap-4">

        <div className="bg-slate-800 rounded-2xl p-4 text-center">
          <div className="text-3xl mb-2">📖</div>
          <div className="font-bold">Reading Phase</div>
          <div className="text-slate-400">5 Minutes</div>
        </div>

        <div className="bg-slate-800 rounded-2xl p-4 text-center">
          <div className="text-3xl mb-2">✍️</div>
          <div className="font-bold">Writing Phase</div>
          <div className="text-slate-400">10 Minutes</div>
        </div>

        <div className="bg-slate-800 rounded-2xl p-4 text-center">
          <div className="text-3xl mb-2">⏰</div>
          <div className="font-bold">Total Duration</div>
          <div className="text-slate-400">15 Minutes</div>
        </div>

      </div>

    </div>

    {/* Start Button */}

    <div className="text-center mt-12">

      <button
        onClick={() => navigate(`/gpe/test/${setId}`)}
        className="
          group
          px-16
          py-5
          rounded-2xl
          font-black
          text-xl
          bg-gradient-to-r
          from-yellow-500
          via-amber-400
          to-yellow-500
          text-black
          shadow-2xl
          hover:scale-105
          transition-all
          duration-300
        "
      >
        🚀 START GPE TEST
      </button>

    </div>

  </div>

</div>


);
}

export default GPEInstructions;
