import { useNavigate, useParams } from "react-router-dom";

function SRTInstructions() {
  const navigate = useNavigate();
  const { setId } = useParams();

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">
      <div className="bg-white p-10 rounded-xl shadow-xl max-w-3xl">

        <h1 className="text-4xl font-bold mb-6">
          SRT Instructions
        </h1>

        <ul className="space-y-3 text-lg">
          <li>✓ Total 60 Situations</li>
          <li>✓ Total Time: 30 Minutes</li>
          <li>✓ Respond naturally and practically</li>
          <li>✓ Complete maximum situations</li>
          <li>✓ Focus on action-oriented responses</li>
        </ul>

        <div className="grid md:grid-cols-2 gap-4 mt-10">

          <button
            onClick={() =>
              navigate(`/srt/practice/${setId}`)
            }
            className="bg-blue-600 text-white py-3 rounded-lg"
          >
            Practice Mode
          </button>

          <button
            onClick={() =>
              navigate(`/srt/real/${setId}`)
            }
            className="bg-green-600 text-white py-3 rounded-lg"
          >
            Real SSB Mode
          </button>

        </div>
      </div>
    </div>
  );
}

export default SRTInstructions;