import { Link } from "react-router-dom";

function Knowledge() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-5xl font-bold text-center mb-4">
        Defence Knowledge Hub
      </h1>

      <p className="text-center text-gray-600 mb-12">
        Complete Defence Knowledge for SSB Aspirants
      </p>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">🎖 Defence Academies</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Link to="/nda" className="bg-white p-6 rounded-xl shadow">
            NDA
          </Link>

          <Link to="/ima" className="bg-white p-6 rounded-xl shadow">
            IMA
          </Link>

          <Link to="/ota" className="bg-white p-6 rounded-xl shadow">
            OTA
          </Link>

          <Link to="/ina" className="bg-white p-6 rounded-xl shadow">
            INA
          </Link>

          <Link to="/afa" className="bg-white p-6 rounded-xl shadow">
            AFA
          </Link>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">⚔ Military History</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Link to="/war1947" className="bg-white p-6 rounded-xl shadow">
            1947 War
          </Link>

          <Link to="/war1965" className="bg-white p-6 rounded-xl shadow">
            1965 War
          </Link>

          <Link to="/war1971" className="bg-white p-6 rounded-xl shadow">
            1971 War
          </Link>

          <Link to="/kargil" className="bg-white p-6 rounded-xl shadow">
            Kargil War
          </Link>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">🧠 Intelligence Tests</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Link
            to="/oir"
            className="bg-green-600 text-white p-6 rounded-xl shadow hover:bg-green-700 transition"
          >
            <h3 className="text-2xl font-bold mb-2">OIR Practice Test</h3>

            <p>Verbal & Non-Verbal Reasoning Questions</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Knowledge;
