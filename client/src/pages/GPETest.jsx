import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { gpeSets } from "../data/gpeData";

const READING_TIME = 5 * 60;
const WRITING_TIME = 10 * 60;

function GPETest() {
const { setId } = useParams();
const navigate = useNavigate();

const gpe = gpeSets.find(
(item) => item.id === Number(setId)
);

const [phase, setPhase] = useState("reading");
const [timeLeft, setTimeLeft] = useState(READING_TIME);

useEffect(() => {
const timer = setInterval(() => {
setTimeLeft((prev) => {
if (prev <= 1) {


      if (phase === "reading") {
        setPhase("writing");
        return WRITING_TIME;
      }

      clearInterval(timer);
      navigate(`/gpe-complete/${setId}`);
      return 0;
    }

    return prev - 1;
  });
}, 1000);

return () => clearInterval(timer);


}, [phase, navigate]);

const minutes = Math.floor(timeLeft / 60);
const seconds = timeLeft % 60;

const maxTime =
phase === "reading"
? READING_TIME
: WRITING_TIME;

const progress =
(timeLeft / maxTime) * 100;

return ( <div className="max-w-7xl mx-auto px-4 py-6">


  {/* Header */}

  <div className="bg-gradient-to-r from-slate-900 via-green-950 to-slate-900 text-white rounded-3xl p-6 shadow-xl border border-yellow-500/20">

    <h1 className="text-4xl font-bold mb-3">
      🗺️ {gpe.title}
    </h1>

    <div className="flex flex-wrap items-center gap-4">

      <div
        className={`
          px-5 py-3 rounded-xl font-bold text-xl
          ${
            timeLeft > 120
              ? "bg-green-600"
              : timeLeft > 60
              ? "bg-yellow-500 text-black"
              : "bg-red-600"
          }
        `}
      >
        ⏰ {minutes}:{seconds
          .toString()
          .padStart(2, "0")}
      </div>

      <div className="bg-slate-800 px-4 py-2 rounded-xl font-semibold">

        {phase === "reading"
          ? "📖 Reading Phase"
          : "✍️ Writing Phase"}

      </div>

    </div>

    {/* Phase Banner */}

    <div
      className={`
        mt-5
        rounded-2xl
        p-4
        text-center
        font-bold
        text-xl

        ${
          phase === "reading"
            ? "bg-blue-900 text-blue-100"
            : "bg-green-900 text-green-100"
        }
      `}
    >
      {phase === "reading"
        ? "📖 READING PHASE (5 MINUTES)"
        : "✍️ WRITING PHASE (10 MINUTES)"}
    </div>

    {/* Progress Bar */}

    <div className="mt-5 w-full h-3 bg-slate-700 rounded-full overflow-hidden">

      <div
        className="h-full bg-yellow-500 transition-all duration-1000"
        style={{
          width: `${progress}%`,
        }}
      />

    </div>

  </div>

  {/* Writing Phase Alert */}

  {phase === "writing" && (

    <div className="mt-6 bg-yellow-100 border-l-4 border-yellow-500 rounded-2xl p-5">

      <h2 className="font-bold text-xl mb-2 text-black">
        ✍️ Writing Phase Started
      </h2>

      <p className="text-black">
        The story has disappeared automatically.
      </p>

      <p className="font-semibold mt-2 text-black">
        Write your complete solution in your notebook exactly as in real SSB.
      </p>

    </div>

  )}

  {/* Map */}

  <div className="mt-6 bg-white rounded-3xl shadow-xl overflow-hidden">

    <div className="p-4 border-b">

      <h2 className="text-2xl font-bold">
        🗺️ GPE Model
      </h2>

    </div>

    <img
      src={gpe.map}
      alt={gpe.title}
      className="w-full object-contain"
    />

  </div>

  {/* Story only during reading phase */}

  {phase === "reading" && (

    <div className="mt-6 bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-3xl font-bold mb-6">
        📜 Situation
      </h2>

      <div className="whitespace-pre-line leading-8 text-lg text-slate-700">

        {gpe.story}

      </div>

    </div>

  )}

  {/* Instructions */}

  <div className="mt-6 bg-slate-900 text-white rounded-3xl p-6">

    <h2 className="text-2xl font-bold mb-4">
      Instructions
    </h2>

    <ul className="space-y-3 text-slate-300">

      <li>✓ Prioritize problems correctly</li>

      <li>✓ Use available resources effectively</li>

      <li>✓ Consider time and distance</li>

      <li>✓ Divide the group logically</li>

      <li>✓ Write the solution in your notebook</li>

      <li>✓ No typing required on website</li>

    </ul>

  </div>

</div>


);
}

export default GPETest;
