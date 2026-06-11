import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PPDTInstructions() {
  const navigate = useNavigate();
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="max-w-6xl mx-auto p-8">

      {/* Hero Section */}
      <div className="
        bg-gradient-to-r
        from-slate-900
        via-green-950
        to-slate-900
        text-white
        rounded-3xl
        p-10
        mb-10
        border
        border-yellow-500/30
      ">
        <h1 className="text-5xl font-bold mb-4">
          🖼️ Picture Perception & Discussion Test
        </h1>

        <p className="text-xl text-slate-300">
          Observe. Analyse. Narrate. Lead.
        </p>
      </div>

      {/* Instructions */}
      <div className="bg-white rounded-3xl shadow-xl p-8">

        <h2 className="text-3xl font-bold mb-6">
          📋 Instructions
        </h2>

        <div className="space-y-6">

          <div>
            <h3 className="text-xl font-bold mb-2">
              🎯 Objective
            </h3>

            <p>
              Observe the picture carefully and write a realistic,
              positive and officer-like story.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              ⏱️ Time Structure
            </h3>

            <ul className="list-disc ml-6 space-y-2">
              <li>Picture Observation → 30 Seconds</li>
              <li>Character Analysis → 1 Minute</li>
              <li>Story Writing → 4 Minutes</li>
              <li>Narration Preparation → 1 Minute</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              🏅 Officer Like Qualities Assessed
            </h3>

            <div className="flex flex-wrap gap-3">
              <span className="bg-yellow-500 px-3 py-1 rounded-full">
                Leadership
              </span>

              <span className="bg-yellow-500 px-3 py-1 rounded-full">
                Initiative
              </span>

              <span className="bg-yellow-500 px-3 py-1 rounded-full">
                Responsibility
              </span>

              <span className="bg-yellow-500 px-3 py-1 rounded-full">
                Confidence
              </span>

              <span className="bg-yellow-500 px-3 py-1 rounded-full">
                Determination
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              ⚠️ Important Guidelines
            </h3>

            <ul className="list-disc ml-6 space-y-2">
              <li>Write realistic stories.</li>
              <li>Avoid negative endings.</li>
              <li>Show initiative and leadership.</li>
              <li>Maintain logical sequence.</li>
              <li>Focus on problem solving.</li>
            </ul>
          </div>

          <div className="flex items-center gap-3 mt-8">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) =>
                setAccepted(e.target.checked)
              }
            />

            <label>
              I have read and understood all instructions.
            </label>
          </div>

          <button
            disabled={!accepted}
            onClick={() => navigate("/ppdt-test")}
            className={`
              mt-8
              px-8
              py-4
              rounded-xl
              font-bold
              text-lg
              transition-all
              ${
                accepted
                  ? "bg-yellow-500 hover:bg-yellow-400 text-black"
                  : "bg-gray-400 text-gray-700 cursor-not-allowed"
              }
            `}
          >
            🚀 Start PPDT Test
          </button>

        </div>
      </div>
    </div>
  );
}

export default PPDTInstructions;