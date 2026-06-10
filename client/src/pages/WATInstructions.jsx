import { useNavigate, useParams } from "react-router-dom";
import instructionImage from "../assets/watInstructions.jpg";

function WATInstructions() {
  const navigate = useNavigate();
  const { setId } = useParams();

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-200">
      <div className="max-w-4xl">
        <img
          src={instructionImage}
          alt="WAT Instructions"
          className="rounded-xl shadow-xl"
        />

        <div className="text-center mt-6">
          <button
            onClick={() => navigate(`/wat/test/${setId}`)}
            className="bg-green-500 hover:bg-green-600 text-white text-xl px-8 py-3 rounded-xl"
          >
            Start Test
          </button>
        </div>
      </div>
    </div>
  );
}

export default WATInstructions;