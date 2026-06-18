function ArmyHistory() {
  const timeline = [
    {
      year: "1776",
      title: "Origins",
      description:
        "The roots of the Indian Army can be traced to the East India Company's Presidency Armies.",
    },
    {
      year: "1895",
      title: "British Indian Army",
      description:
        "The Presidency Armies were merged to form the unified British Indian Army.",
    },
    {
      year: "1947",
      title: "Independence",
      description:
        "Following Independence, the Indian Army became the land warfare branch of the Indian Armed Forces.",
    },
    {
      year: "1947–48",
      title: "First Indo-Pak War",
      description:
        "Indian forces defended Jammu & Kashmir against invading forces.",
    },
    {
      year: "1962",
      title: "Sino-Indian War",
      description:
        "A difficult conflict that led to major military reforms and modernization.",
    },
    {
      year: "1965",
      title: "Indo-Pak War",
      description:
        "The Indian Army displayed exceptional courage across multiple sectors.",
    },
    {
      year: "1971",
      title: "Bangladesh Liberation War",
      description:
        "A decisive victory that led to the creation of Bangladesh.",
    },
    {
      year: "1984",
      title: "Operation Meghdoot",
      description:
        "India secured control of the strategic Siachen Glacier.",
    },
    {
      year: "1999",
      title: "Kargil War",
      description:
        "Operation Vijay successfully evicted infiltrators from Indian territory.",
    },
    {
      year: "2016",
      title: "Surgical Strikes",
      description:
        "Precision strikes were carried out across the Line of Control.",
    },
    {
      year: "2025",
      title: "Operation Sindoor",
      description:
        "A modern operation demonstrating India's evolving military capabilities.",
    },
  ];

  const wars = [
    "1947–48 Indo-Pak War",
    "1962 Sino-Indian War",
    "1965 Indo-Pak War",
    "1971 Bangladesh Liberation War",
    "1999 Kargil War",
  ];

  const facts = [
    "🪖 World's second-largest standing army.",
    "🏔 Controls the world's highest battlefield — Siachen Glacier.",
    "🎖️ Over 12 lakh active personnel.",
    "⚔️ Operates through seven operational commands.",
    "🇮🇳 Protects over 15,000 km of land borders.",
    "🚁 Equipped with tanks, artillery, missiles, helicopters and UAVs.",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}

      <section className="bg-gradient-to-r from-green-950 via-slate-900 to-black py-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <div className="text-7xl mb-6">🪖</div>

          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Indian Army History
          </h1>

          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-9">
            Discover the glorious journey of the Indian Army—from its origins
            during the East India Company era to becoming one of the world's
            most powerful and respected armed forces. Every chapter reflects
            courage, sacrifice, discipline and unwavering commitment to the
            nation.
          </p>

        </div>

      </section>

      {/* Why Study */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="bg-slate-900 border border-green-600 rounded-3xl p-10">

          <h2 className="text-3xl font-bold mb-6 text-green-400">

            🎯 Why Learn Indian Army History?

          </h2>

          <p className="text-slate-300 text-lg leading-9">

            Understanding Army History helps aspirants appreciate India's
            military traditions, leadership, strategic thinking and sacrifices.
            Questions related to wars, operations, military reforms and famous
            commanders are frequently asked during the SSB Interview, Lecturette,
            Group Discussion and Personal Interview.

          </p>

        </div>

      </section>

      {/* Timeline */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-4xl font-bold text-center mb-14">

          📜 Historical Timeline

        </h2>

        <div className="space-y-8">

          {timeline.map((item) => (

            <div
              key={item.year}
              className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-green-500 hover:-translate-y-1 transition-all duration-300"
            >

              <span className="text-green-400 text-2xl font-bold">

                {item.year}

              </span>

              <h3 className="text-2xl font-bold mt-3">

                {item.title}

              </h3>

              <p className="text-slate-300 mt-4 leading-8">

                {item.description}

              </p>

            </div>

          ))}

        </div>

      </section>

      {/* Major Wars */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-4xl font-bold text-center mb-12">

          ⚔️ Major Wars

        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {wars.map((war) => (

            <div
              key={war}
              className="bg-slate-900 rounded-2xl border border-slate-700 p-8 hover:border-yellow-500 transition duration-300"
            >

              <div className="text-5xl mb-5">

                ⚔️

              </div>

              <h3 className="text-xl font-bold">

                {war}

              </h3>

            </div>

          ))}

        </div>

      </section>

      {/* Interesting Facts */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-4xl font-bold text-center mb-12">

          🌟 Interesting Facts

        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {facts.map((fact, index) => (

            <div
              key={index}
              className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-blue-500 transition duration-300"
            >

              <p className="text-slate-300 text-lg leading-8">

                {fact}

              </p>

            </div>

          ))}

        </div>

      </section>

      {/* Officer's Insight */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="bg-gradient-to-r from-yellow-900/20 to-slate-900 border border-yellow-500 rounded-3xl p-10">

          <h2 className="text-3xl font-bold mb-6">

            🎖️ Officer's Insight

          </h2>

          <p className="text-slate-300 text-lg leading-9">

            The history of the Indian Army is not merely a record of battles.
            It reflects leadership, resilience, courage and selfless service.
            Every officer is expected to understand this legacy because today's
            leaders build upon the sacrifices and achievements of those who
            came before them.

          </p>

        </div>

      </section>

      {/* SSB Corner */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="bg-green-900/20 border border-green-500 rounded-3xl p-10">

          <h2 className="text-3xl font-bold mb-8">

            🎤 SSB Interview Corner

          </h2>

          <ul className="space-y-5 text-lg text-slate-300">

            <li>✅ Explain the significance of the 1971 Indo-Pak War.</li>

            <li>✅ Why is Operation Meghdoot strategically important?</li>

            <li>✅ What lessons were learned from the 1962 War?</li>

            <li>✅ Why is the Kargil War considered unique?</li>

            <li>✅ Who was Field Marshal Sam Manekshaw and why is he remembered?</li>

            <li>✅ Name the operational commands of the Indian Army.</li>

          </ul>

        </div>

      </section>

    </div>
  );
}

export default ArmyHistory;