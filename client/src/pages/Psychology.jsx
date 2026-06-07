import { Link } from "react-router-dom";

function Psychology() {
  return (
    <div className="max-w-6xl mx-auto p-10">

      <h1 className="text-5xl font-bold mb-10">
        Psychology Tests
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <Link
          to="/tat"
          className="bg-white shadow rounded-xl p-6"
        >
          <h2 className="text-2xl font-bold">
            TAT Practice
          </h2>
        </Link>

        <Link
          to="/ppdt"
          className="bg-white shadow rounded-xl p-6"
        >
          <h2 className="text-2xl font-bold">
            PPDT Practice
          </h2>
        </Link>

        <Link
          to="/wat"
          className="bg-white shadow rounded-xl p-6"
        >
          <h2 className="text-2xl font-bold">
            WAT Practice
          </h2>
        </Link>

        <Link
          to="/srt"
          className="bg-white shadow rounded-xl p-6"
        >
          <h2 className="text-2xl font-bold">
            SRT Practice
          </h2>
        </Link>

      </div>

    </div>
  );
}

export default Psychology;