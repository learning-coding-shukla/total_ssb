function App() {
  return (
    <div className="min-h-screen bg-slate-100">

      {/* Navbar */}
      <nav className="bg-slate-950 text-white px-8 py-4 flex justify-between items-center">

        <h1 className="text-3xl font-bold">
          TOTAL_SSB
        </h1>

        <div className="space-x-6">
          <a href="#">Home</a>
          <a href="#">Army</a>
          <a href="#">Navy</a>
          <a href="#">Air Force</a>
          <a href="#">Psychology</a>
          <a href="#">Resources</a>
        </div>

      </nav>

      {/* Hero Section */}
      <section className="text-center py-24">

        <h1 className="text-7xl font-bold text-slate-900">
          TOTAL_SSB
        </h1>

        <p className="text-2xl mt-6 text-slate-700">
          India's Free Defence & SSB Preparation Platform
        </p>

        <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg">
          Start Preparation
        </button>

      </section>

      {/* Statistics */}

      <section className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-4xl font-bold text-green-600">
            1000+
          </h2>
          <p>WAT Words</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-4xl font-bold text-blue-600">
            300+
          </h2>
          <p>SRT Situations</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-4xl font-bold text-red-600">
            150+
          </h2>
          <p>TAT Images</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-4xl font-bold text-purple-600">
            50+
          </h2>
          <p>PPDT Images</p>
        </div>

      </section>

      {/* Services */}

      <section className="max-w-6xl mx-auto py-20 px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Preparation Modules
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-2xl font-bold">
              TAT Practice
            </h3>
            <p className="mt-4">
              Practice with real TAT pictures.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-2xl font-bold">
              WAT Practice
            </h3>
            <p className="mt-4">
              Improve reaction speed and thinking.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-2xl font-bold">
              SRT Practice
            </h3>
            <p className="mt-4">
              Build officer-like responses.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default App;