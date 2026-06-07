import { Link } from "react-router-dom";

function Psychology() {
  return (
    <div className="max-w-6xl mx-auto p-10">
      <h1 className="text-5xl font-bold mb-10">Psychology Tests</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <Link to="/tat" className="bg-white shadow rounded-xl p-6">
          <h2 className="text-2xl font-bold">TAT Practice</h2>
        </Link>

        <Link to="/ppdt" className="bg-white shadow rounded-xl p-6">
          <h2 className="text-2xl font-bold">PPDT Practice</h2>
        </Link>

        <Link to="/wat" className="bg-white shadow rounded-xl p-6">
          <h2 className="text-2xl font-bold">WAT Practice</h2>
        </Link>

        <Link to="/srt" className="bg-white shadow rounded-xl p-6">
          <h2 className="text-2xl font-bold">SRT Practice</h2>
        </Link>
        <Link
          to="/gd-topics"
          className="bg-white rounded-xl shadow p-6 hover:scale-105 transition"
        >
          <h2 className="text-3xl font-bold">🗣 GD Practice</h2>

          <p className="mt-4">50 Most Expected Group Discussion Topics</p>
        </Link>
      </div>
    </div>
  );
}

export default Psychology;
