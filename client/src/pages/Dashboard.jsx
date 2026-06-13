import { Link } from "react-router-dom";

function Dashboard() {
  const watCompleted = Object.keys(localStorage).filter((key) =>
    key.startsWith("wat_set_"),
  ).length;

  const tatCompleted = Object.keys(localStorage).filter((key) =>
    key.startsWith("tat_set_"),
  ).length;
  const gpeCompleted = Object.keys(localStorage).filter((key) =>
    key.startsWith("gpe_set_"),
  ).length;

  const bestSRT = Number(localStorage.getItem("srt_best")) || 0;

  const ppdtAttempts = Number(localStorage.getItem("ppdt_attempts")) || 0;

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      {/* Hero Section */}
      <div className="text-center mb-14">
        <h1 className="text-6xl font-bold text-slate-900">
          TOTAL_SSB Dashboard
        </h1>

        <p className="text-xl text-slate-600 mt-4">
          Track your Psychology Test Progress
        </p>
      </div>

      {/* Progress Cards */}
      <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
        {/* PPDT */}
        <div className="bg-gradient-to-br from-orange-600 to-orange-800 text-white p-8 rounded-2xl shadow-2xl hover:scale-105 transition duration-300">
          <div className="text-5xl mb-4">🎯</div>

          <h2 className="text-3xl font-bold mb-4">PPDT</h2>

          <p className="text-lg">Attempts</p>

          <p className="text-5xl font-bold mt-2">{ppdtAttempts}</p>

          <div className="mt-6 bg-white/20 rounded-full h-3">
            <div
              className="bg-white h-3 rounded-full"
              style={{
                width: `${Math.min(ppdtAttempts * 10, 100)}%`,
              }}
            />
          </div>
        </div>

        {/* WAT */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-2xl shadow-2xl hover:scale-105 transition duration-300">
          <div className="text-5xl mb-4">📝</div>

          <h2 className="text-3xl font-bold mb-4">WAT</h2>

          <p className="text-lg">Sets Completed</p>

          <p className="text-5xl font-bold mt-2">{watCompleted}/10</p>

          <div className="mt-6 bg-white/20 rounded-full h-3">
            <div
              className="bg-white h-3 rounded-full"
              style={{
                width: `${(watCompleted / 10) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* SRT */}
        <div className="bg-gradient-to-br from-green-600 to-green-800 text-white p-8 rounded-2xl shadow-2xl hover:scale-105 transition duration-300">
          <div className="text-5xl mb-4">⚡</div>

          <h2 className="text-3xl font-bold mb-4">SRT</h2>

          <p className="text-lg">Best Attempt</p>

          <p className="text-5xl font-bold mt-2">{bestSRT}/60</p>

          <div className="mt-6 bg-white/20 rounded-full h-3">
            <div
              className="bg-white h-3 rounded-full"
              style={{
                width: `${(bestSRT / 60) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* TAT */}
        <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white p-8 rounded-2xl shadow-2xl hover:scale-105 transition duration-300">
          <div className="text-5xl mb-4">🖼️</div>

          <h2 className="text-3xl font-bold mb-4">TAT</h2>

          <p className="text-lg">Sets Completed</p>

          <p className="text-5xl font-bold mt-2">{tatCompleted}/9</p>

          <div className="mt-6 bg-white/20 rounded-full h-3">
            <div
              className="bg-white h-3 rounded-full"
              style={{
                width: `${(tatCompleted / 9) * 100}%`,
              }}
            />
          </div>
        </div>
        {/* GPE */}
        <div className="bg-gradient-to-br from-red-600 to-red-800 text-white p-8 rounded-2xl shadow-2xl hover:scale-105 transition duration-300">
          <div className="text-5xl mb-4">🗺️</div>

          <h2 className="text-3xl font-bold mb-4">GPE</h2>

          <p className="text-lg">Sets Completed</p>

          <p className="text-5xl font-bold mt-2">{gpeCompleted}/5</p>

          <div className="mt-6 bg-white/20 rounded-full h-3">
            <div
              className="bg-white h-3 rounded-full"
              style={{
                width: `${(gpeCompleted / 5) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap justify-center gap-6 mt-14">
        <Link
          to="/ppdt"
          className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition"
        >
          Practice PPDT
        </Link>

        <Link
          to="/wat"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition"
        >
          Practice WAT
        </Link>

        <Link
          to="/srt"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition"
        >
          Practice SRT
        </Link>

        <Link
          to="/tat"
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition"
        >
          Practice TAT
        </Link>
        <Link
          to="/gpe"
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition"
        >
          Practice GPE
        </Link>
      </div>

      {/* Motivation Banner */}
      <div className="max-w-5xl mx-auto mt-16 bg-white rounded-2xl shadow-xl p-8 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">
          Keep Practicing Daily
        </h2>

        <p className="text-slate-600 text-lg">
          Consistent practice in PPDT, WAT, SRT and TAT improves observation,
          imagination, decision making, communication skills and Officer Like
          Qualities (OLQs).
        </p>
      </div>
    </div>
  );
}
export default Dashboard;
