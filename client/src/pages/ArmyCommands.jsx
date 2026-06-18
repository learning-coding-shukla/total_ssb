function ArmyCommands() {
  const commands = [
    {
      emoji: "🏔️",
      name: "Northern Command",
      headquarters: "Udhampur, Jammu & Kashmir",
      responsibility:
        "Responsible for operations along the Line of Control (LoC), Siachen Glacier and the northern borders.",
    },
    {
      emoji: "⚔️",
      name: "Western Command",
      headquarters: "Chandimandir, Haryana",
      responsibility:
        "Guards India's western borders and plays a vital role during conflicts with Pakistan.",
    },
    {
      emoji: "🌄",
      name: "Eastern Command",
      headquarters: "Kolkata, West Bengal",
      responsibility:
        "Responsible for India's eastern frontier bordering China, Myanmar, Bhutan and Bangladesh.",
    },
    {
      emoji: "🌊",
      name: "Southern Command",
      headquarters: "Pune, Maharashtra",
      responsibility:
        "Oldest command of the Indian Army responsible for southern India and logistical support.",
    },
    {
      emoji: "🇮🇳",
      name: "Central Command",
      headquarters: "Lucknow, Uttar Pradesh",
      responsibility:
        "Responsible for central India and strategic reserves. It also supports operations in the northern sector.",
    },
    {
      emoji: "🏜️",
      name: "South Western Command",
      headquarters: "Jaipur, Rajasthan",
      responsibility:
        "Looks after the desert sector along the western border with Pakistan.",
    },
    {
      emoji: "🎓",
      name: "Army Training Command (ARTRAC)",
      headquarters: "Shimla, Himachal Pradesh",
      responsibility:
        "Responsible for training, doctrine development and modernization of the Indian Army.",
    },
  ];

  const facts = [
    "🪖 The Indian Army has 6 Operational Commands and 1 Training Command.",
    "🏔 Northern Command is responsible for Siachen Glacier.",
    "🎓 ARTRAC develops military doctrines and future warfare strategies.",
    "🇮🇳 Central Command Headquarters is located in Lucknow.",
    "⚔️ Each Command is headed by a General Officer Commanding-in-Chief (GOC-in-C).",
    "📍 Commands are divided into Corps, Divisions, Brigades and Battalions.",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}

      <section className="bg-gradient-to-r from-green-950 via-slate-900 to-black py-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <div className="text-7xl mb-6">🪖</div>

          <h1 className="text-5xl md:text-6xl font-black mb-6">

            Indian Army Commands

          </h1>

          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-9">

            The Indian Army is organized into seven commands for efficient
            operational control, administration and national defence. Each
            command is responsible for a specific geographical region and is
            headed by a General Officer Commanding-in-Chief (GOC-in-C).

          </p>

        </div>

      </section>

      {/* Introduction */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="bg-slate-900 border border-green-600 rounded-3xl p-10">

          <h2 className="text-3xl font-bold mb-6 text-green-400">

            🎯 What is an Army Command?

          </h2>

          <p className="text-slate-300 text-lg leading-9">

            An Army Command is the highest operational formation of the Indian
            Army. Commands are responsible for planning, administration,
            logistics, operational readiness and military operations within
            their designated geographical areas.

          </p>

        </div>

      </section>

      {/* Commands */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-4xl font-bold text-center mb-12">

          ⚔️ Seven Commands of the Indian Army

        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {commands.map((command) => (

            <div
              key={command.name}
              className="bg-slate-900 border border-slate-700 rounded-3xl p-8 hover:border-green-500 hover:-translate-y-2 transition-all duration-300"
            >

              <div className="text-5xl mb-5">

                {command.emoji}

              </div>

              <h3 className="text-2xl font-bold mb-4">

                {command.name}

              </h3>

              <p className="text-green-400 font-semibold mb-4">

                📍 Headquarters: {command.headquarters}

              </p>

              <p className="text-slate-300 leading-8">

                {command.responsibility}

              </p>

            </div>

          ))}

        </div>

      </section>

      {/* Facts */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-4xl font-bold text-center mb-12">

          🌟 Important Facts

        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {facts.map((fact, index) => (

            <div
              key={index}
              className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-yellow-500 transition"
            >

              <p className="text-lg text-slate-300 leading-8">

                {fact}

              </p>

            </div>

          ))}

        </div>

      </section>

      {/* Interview */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="bg-blue-900/20 border border-blue-500 rounded-3xl p-10">

          <h2 className="text-3xl font-bold mb-8">

            🎤 SSB Interview Corner

          </h2>

          <ul className="space-y-4 text-lg text-slate-300">

            <li>✅ How many Commands does the Indian Army have?</li>

            <li>✅ Which is the newest Command?</li>

            <li>✅ Where is Northern Command Headquarters?</li>

            <li>✅ What is ARTRAC?</li>

            <li>✅ Which Command is responsible for Siachen Glacier?</li>

            <li>✅ Who commands an Army Command?</li>

          </ul>

        </div>

      </section>

      {/* Officer */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="bg-gradient-to-r from-yellow-900/20 to-slate-900 border border-yellow-500 rounded-3xl p-10">

          <h2 className="text-3xl font-bold mb-6">

            🎖️ Officer's Insight

          </h2>

          <p className="text-slate-300 text-lg leading-9">

            Army Commands form the backbone of India's military command
            structure. Every officer must understand the organization,
            responsibilities and strategic importance of each command. Questions
            related to Commands are frequently asked in SSB interviews,
            Lecturette, Group Discussions and written examinations.

          </p>

        </div>

      </section>

    </div>
  );
}

export default ArmyCommands;