import { Link } from "react-router-dom";
function Interview() {
  return (
    <div className="max-w-5xl mx-auto p-10">
      <h1 className="text-5xl font-bold mb-8">Interview Questions</h1>

      
      <Link
        to="/interview-questions"
        className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 transition"
      >
        <h2 className="text-3xl font-bold">🎤 Interview Question Bank</h2>

        <p className="mt-4 text-gray-600">
          40 Most Expected SSB Interview Questions
        </p>
      </Link>
    </div>
  );
}

export default Interview;
