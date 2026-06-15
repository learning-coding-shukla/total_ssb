import { Link } from "react-router-dom";

function Psychology() {
  const tests = [
    {
      title: "📖 TAT Practice",
      subtitle: "Officer Story Analysis",
      description:
        "Develop leadership, initiative, determination and problem-solving through story writing.",
      path: "/tat",
    },
    {
      title: "🖼️ PPDT Practice",
      subtitle: "Perception & Narration Training",
      description:
        "Improve observation, narration and group discussion abilities.",
      path: "/ppdt",
    },
    {
      title: "⚡ WAT Practice",
      subtitle: "Officer Thinking Development",
      description:
        "Train positive thinking, confidence and power of expression.",
      path: "/wat",
    },
    {
      title: "📝 SRT Practice",
      subtitle: "Decision Making Under Pressure",
      description:
        "Enhance courage, responsibility and practical intelligence.",
      path: "/srt",
    },
    {
      title: "🧠 Self Description Test",
      subtitle: "Self Analysis & Personality Assessment",
      description:
        "Practice the final psychology test exactly like the real SSB by writing your responses in your notebook.",
      path: "/psychology/self-description",
    },

    {
      title: "🎤 Lecturette Practice",
      subtitle: "Public Speaking & Expression",
      description:
        "Improve confidence, knowledge, communication skills and officer-like expression through Lecturette practice.",
      path: "/lecturette",
    },
    {
      title: "🗣️ GD Practice",
      subtitle: "Group Discussion Arena",
      description: "Practice the most expected SSB group discussion topics.",
      path: "/gd-topics",
    },
    {
      title: "🗺️ GPE Practice",
      subtitle: "Group Planning Exercise",
      description:
        "Practice real SSB GPEs with authentic maps and timer-based simulation.",
      path: "/gpe",
      featured: true,
    },
    {
      title: "🏅 Officer Like Qualities",
      subtitle: "The Foundation of Leadership",
      description:
        "Explore the 15 qualities assessed throughout the SSB process.",
      path: "/olqs",
      featured: true,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8">
      {/* Hero Section */}
      <div
        className="
        relative
        overflow-hidden
        bg-gradient-to-r
        from-slate-900
        via-green-950
        to-slate-900
        rounded-3xl
        p-10
        mb-12
        text-white
        border
        border-yellow-500/30
        shadow-2xl
      "
      >
        <div className="absolute right-8 top-4 text-8xl opacity-10">🇮🇳</div>

        <h1 className="text-5xl font-bold mb-4">
          🧠 Psychology Testing Ground
        </h1>

        <p className="text-xl text-slate-300 max-w-3xl">
          Every thought reveals your personality. Every reaction reflects your
          character. Train the mindset of a future officer.
        </p>

        <div className="flex flex-wrap gap-3 mt-6">
          <span className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold">
            Leadership
          </span>

          <span className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold">
            Courage
          </span>

          <span className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold">
            Responsibility
          </span>

          <span className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold">
            Determination
          </span>
        </div>
      </div>

      {/* Section Heading */}
      <div className="mb-8">
        <h2 className="text-4xl font-bold">⚔️ Officer Development Modules</h2>

        <p className="text-gray-500 mt-2">
          Train the qualities expected from future leaders of the Armed Forces.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tests.map((test) => (
          <Link
            key={test.title}
            to={test.path}
            className={`
              relative
              overflow-hidden
              rounded-2xl
              p-6
              transition-all
              duration-300
              hover:scale-105
              hover:-translate-y-2
              hover:shadow-yellow-500/20
              shadow-xl
              border
              ${
                test.featured
                  ? "bg-gradient-to-br from-yellow-500 via-amber-400 to-yellow-600 text-black border-yellow-300"
                  : "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white border-yellow-500/30"
              }
            `}
          >
            {test.featured && (
              <div className="absolute top-3 right-3 bg-black text-yellow-400 text-xs px-3 py-1 rounded-full font-bold">
                MOST IMPORTANT
              </div>
            )}

            <h3 className="text-2xl font-bold mb-2">{test.title}</h3>

            <p className="font-semibold mb-3 opacity-90">{test.subtitle}</p>

            <p className={test.featured ? "text-black/80" : "text-slate-300"}>
              {test.description}
            </p>

            <div className="mt-5 font-bold">➜ Enter Training</div>
          </Link>
        ))}
      </div>

      {/* Quote Section */}
      <div
        className="
        mt-12
        bg-slate-900
        border-l-4
        border-yellow-500
        p-8
        rounded-2xl
        text-slate-300
      "
      >
        <p className="text-xl italic">
          "The SSB does not look for perfect candidates. It looks for
          individuals with the potential to become officers."
        </p>
      </div>

      {/* Officer Creed */}
      <div
        className="
        mt-12
        rounded-3xl
        p-10
        bg-gradient-to-r
        from-yellow-500
        via-amber-400
        to-yellow-500
        text-black
        text-center
        shadow-xl
      "
      >
        <h2 className="text-4xl font-bold mb-4">🇮🇳 Officer's Creed</h2>

        <p className="text-lg font-medium max-w-4xl mx-auto">
          The SSB does not select the most talented candidate. It selects the
          candidate with the greatest officer potential. Develop your OLQs every
          day, and your personality will naturally reflect the qualities of a
          leader.
        </p>
      </div>
    </div>
  );
}

export default Psychology;
