import { Link } from "react-router-dom";

function Wars() {
  return (
    <div className="max-w-6xl mx-auto p-10">

      <h1 className="text-5xl font-bold mb-10">
        Indian Military History
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <Link
          to="/war1947"
          className="bg-white p-6 rounded-xl shadow"
        >
          1947 Indo-Pak War
        </Link>

        <Link
          to="/war1965"
          className="bg-white p-6 rounded-xl shadow"
        >
          1965 Indo-Pak War
        </Link>

        <Link
          to="/war1971"
          className="bg-white p-6 rounded-xl shadow"
        >
          1971 Indo-Pak War
        </Link>

        <Link
          to="/kargil"
          className="bg-white p-6 rounded-xl shadow"
        >
          Kargil War
        </Link>

      </div>

    </div>
  );
}

export default Wars;