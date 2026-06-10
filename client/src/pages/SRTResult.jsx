import { Link, useLocation, useParams } from "react-router-dom";

function SRTResult() {
  const { setId } = useParams();

  const location = useLocation();

  const attempted = location.state?.attempted || 0;
  const total = location.state?.total || 60;

  const percentage = Math.round((attempted / total) * 100);
  let feedback = "";

  if (attempted >= 55)
    feedback = "Excellent speed. Very close to SSB standards.";
  else if (attempted >= 45)
    feedback = "Good performance. Continue improving writing speed.";
  else feedback = "Focus on quicker decision-making and concise responses.";

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-100">
      <h1 className="text-5xl font-bold mb-6">SRT Completed</h1>

      <div className="bg-white p-10 rounded-xl shadow-xl text-center">
        <h2 className="text-3xl font-bold mb-6">Set {setId}</h2>

        <p className="text-2xl mb-4">
          Attempted: {attempted} / {total}
        </p>

        <p className="text-xl text-gray-600 mb-8">
          Completion Rate: {percentage}%
        </p>
        <p className="mt-6 text-lg text-green-700 font-medium">{feedback}</p>

        <Link
          to="/srt"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          Practice Another Set
        </Link>
      </div>
    </div>
  );
}

export default SRTResult;
