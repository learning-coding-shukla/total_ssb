// import { Link } from "react-router-dom";

// function Knowledge() {
//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       <h1 className="text-5xl font-bold text-center mb-4">
//         Defence Knowledge Hub
//       </h1>

//       <p className="text-center text-gray-600 mb-12">
//         Complete Defence Knowledge for SSB Aspirants
//       </p>

//       <section className="mb-12">
//         <h2 className="text-3xl font-bold mb-6">🎖 Defence Academies</h2>

//         <div className="grid md:grid-cols-3 gap-6">
//           <Link to="/nda" className="bg-white p-6 rounded-xl shadow">
//             NDA
//           </Link>

//           <Link to="/ima" className="bg-white p-6 rounded-xl shadow">
//             IMA
//           </Link>

//           <Link to="/ota" className="bg-white p-6 rounded-xl shadow">
//             OTA
//           </Link>

//           <Link to="/ina" className="bg-white p-6 rounded-xl shadow">
//             INA
//           </Link>

//           <Link to="/afa" className="bg-white p-6 rounded-xl shadow">
//             AFA
//           </Link>
//         </div>
//       </section>

//       <section className="mb-12">
//         <h2 className="text-3xl font-bold mb-6">⚔ Military History</h2>

//         <div className="grid md:grid-cols-3 gap-6">
//           <Link to="/war1947" className="bg-white p-6 rounded-xl shadow">
//             1947 War
//           </Link>

//           <Link to="/war1965" className="bg-white p-6 rounded-xl shadow">
//             1965 War
//           </Link>

//           <Link to="/war1971" className="bg-white p-6 rounded-xl shadow">
//             1971 War
//           </Link>

//           <Link to="/kargil" className="bg-white p-6 rounded-xl shadow">
//             Kargil War
//           </Link>
//         </div>
//       </section>

//       <section className="mb-12">
//         <h2 className="text-3xl font-bold mb-6">🧠 Intelligence Tests</h2>

//         <div className="grid md:grid-cols-3 gap-6">
//           <Link
//             to="/oir"
//             className="bg-green-600 text-white p-6 rounded-xl shadow hover:bg-green-700 transition"
//           >
//             <h3 className="text-2xl font-bold mb-2">OIR Practice Test</h3>

//             <p>Verbal & Non-Verbal Reasoning Questions</p>
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Knowledge;


import { Link } from "react-router-dom";

import MilitaryHero from "../components/common/MilitaryHero";
import MilitaryStats from "../components/common/MilitaryStats";
import MilitarySection from "../components/common/MilitarySection";
import MilitaryCard from "../components/common/MilitaryCard";
import MilitaryQuote from "../components/common/MilitaryQuote";
import militaryThemes from "../components/common/MilitaryTheme";

const theme = militaryThemes.army;

function Knowledge() {

  const hero = {
    title: "Defence Knowledge Hub",

    motto: "Knowledge is the First Weapon",

    description:
      "Master Defence Services, Military History, Wars, Operations, Rank Structures, Academies and Officer Intelligence in one comprehensive platform specially designed for SSB Aspirants.",

    stats: [
      {
        icon: "🎖️",
        value: "20+",
        label: "Topics",
      },

      {
        icon: "📜",
        value: "100+",
        label: "Articles",
      },

      {
        icon: "⚔️",
        value: "10+",
        label: "Historic Wars",
      },

      {
        icon: "🧠",
        value: "500+",
        label: "Practice Questions",
      },
    ],

    primaryAction: {
      label: "Start Learning",
    },

    secondaryAction: {
      label: "Practice OIR",
    },
  };

  const stats = [
    {
      icon: "🎖️",
      value: "5",
      label: "Academies",
    },

    {
      icon: "⚔️",
      value: "4",
      label: "Major Wars",
    },

    {
      icon: "🧠",
      value: "500+",
      label: "Questions",
    },

    {
      icon: "📚",
      value: "20+",
      label: "Knowledge Topics",
    },

    {
      icon: "🇮🇳",
      value: "24×7",
      label: "Learning",
    },
  ];

  const academies = [
    {
      emoji: "🎖️",
      title: "National Defence Academy",
      description:
        "Joint training academy for Army, Navy and Air Force cadets.",
      color: "green",
      link: "/nda",
    },

    {
      emoji: "🪖",
      title: "Indian Military Academy",
      description:
        "Premier training institution for Army officers at Dehradun.",
      color: "yellow",
      link: "/ima",
    },

    {
      emoji: "🏅",
      title: "Officers Training Academy",
      description:
        "Commissioning academy for Short Service Commission officers.",
      color: "orange",
      link: "/ota",
    },

    {
      emoji: "⚓",
      title: "Indian Naval Academy",
      description:
        "Training academy for officers of the Indian Navy.",
      color: "blue",
      link: "/ina",
    },

    {
      emoji: "✈️",
      title: "Air Force Academy",
      description:
        "Training institution for Flying, Ground Duty and Technical Branches.",
      color: "sky",
      link: "/afa",
    },
  ];

  const wars = [
    {
      emoji: "⚔️",
      title: "1947 Indo-Pak War",
      description:
        "The first war after Independence fought over Jammu & Kashmir.",
      color: "red",
      link: "/war1947",
    },

    {
      emoji: "🔥",
      title: "1965 Indo-Pak War",
      description:
        "One of India's largest conventional wars showcasing bravery and armour battles.",
      color: "orange",
      link: "/war1965",
    },

    {
      emoji: "🏅",
      title: "1971 Indo-Pak War",
      description:
        "Historic victory leading to the liberation of Bangladesh.",
      color: "green",
      link: "/war1971",
    },

    {
      emoji: "⛰️",
      title: "Kargil War",
      description:
        "Operation Vijay to recapture Indian territory from intruders in 1999.",
      color: "purple",
      link: "/kargil",
    },
  ];
    const intelligence = [
    {
      emoji: "🧠",
      title: "OIR Practice Test",
      description:
        "Practice Verbal & Non-Verbal Reasoning questions with real SSB exam pattern.",
      color: "emerald",
      link: "/oir",
    },
  ];

  const quote = {
    emoji: "🇮🇳",

    quote:
      "The more you sweat in peace, the less you bleed in war.",

    author: "Military Proverb",

    designation: "A Timeless Principle of Military Preparation",
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* ================= HERO ================= */}

      <MilitaryHero
        theme={theme}
        title={hero.title}
        motto={hero.motto}
        description={hero.description}
        stats={hero.stats}
        primaryAction={hero.primaryAction}
        secondaryAction={hero.secondaryAction}
      />

      {/* ================= STATS ================= */}

      <MilitaryStats
        theme={theme}
        stats={stats}
      />

      {/* ================= ACADEMIES ================= */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <MilitarySection
          theme={theme}
          emoji="🎖️"
          title="Defence Academies"
          subtitle="India's premier military training institutions responsible for producing courageous and capable officers."
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {academies.map((academy) => (

            <Link
              key={academy.title}
              to={academy.link}
            >
              <MilitaryCard
                theme={theme}
                emoji={academy.emoji}
                title={academy.title}
                description={academy.description}
                color={academy.color}
              />
            </Link>

          ))}

        </div>

      </section>

      {/* ================= HISTORY ================= */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <MilitarySection
          theme={theme}
          emoji="⚔️"
          title="Military History"
          subtitle="Explore the major wars and operations that shaped the history of modern India."
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {wars.map((war) => (

            <Link
              key={war.title}
              to={war.link}
            >
              <MilitaryCard
                theme={theme}
                emoji={war.emoji}
                title={war.title}
                description={war.description}
                color={war.color}
              />
            </Link>

          ))}

        </div>

      </section>

      {/* ================= INTELLIGENCE ================= */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <MilitarySection
          theme={theme}
          emoji="🧠"
          title="Officer Intelligence Rating"
          subtitle="Prepare for OIR tests using timed reasoning questions based on the SSB examination pattern."
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {intelligence.map((item) => (

            <Link
              key={item.title}
              to={item.link}
            >
              <MilitaryCard
                theme={theme}
                emoji={item.emoji}
                title={item.title}
                description={item.description}
                color={item.color}
              />
            </Link>

          ))}

        </div>

      </section>
            {/* ================= MOTIVATIONAL QUOTE ================= */}

      <MilitaryQuote
        theme={theme}
        emoji={quote.emoji}
        quote={quote.quote}
        author={quote.author}
        designation={quote.designation}
      />

      {/* ================= QUICK ACCESS ================= */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <MilitarySection
          theme={theme}
          emoji="🚀"
          title="Quick Access"
          subtitle="Jump directly to the most frequently visited modules of TOTAL SSB."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <Link to="/army/ranks">
            <div className="rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-900/10 border border-emerald-500/30 hover:border-emerald-400 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/20">
              <div className="text-5xl mb-4">🪖</div>
              <h3 className="text-xl font-bold text-white">Army Ranks</h3>
              <p className="mt-3 text-slate-300 text-sm">
                Learn insignia, appointments and promotions.
              </p>
            </div>
          </Link>

          <Link to="/navy/ranks">
            <div className="rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-900/10 border border-cyan-500/30 hover:border-cyan-400 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20">
              <div className="text-5xl mb-4">⚓</div>
              <h3 className="text-xl font-bold text-white">Navy Ranks</h3>
              <p className="mt-3 text-slate-300 text-sm">
                Officer, Sailor and Warrant ranks.
              </p>
            </div>
          </Link>

          <Link to="/airforce/ranks">
            <div className="rounded-2xl bg-gradient-to-br from-sky-500/20 to-sky-900/10 border border-sky-500/30 hover:border-sky-400 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-500/20">
              <div className="text-5xl mb-4">✈️</div>
              <h3 className="text-xl font-bold text-white">
                Air Force Ranks
              </h3>
              <p className="mt-3 text-slate-300 text-sm">
                Explore ranks, insignias and appointments.
              </p>
            </div>
          </Link>

          <Link to="/psychology">
            <div className="rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-900/10 border border-purple-500/30 hover:border-purple-400 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white">
                Psychology Tests
              </h3>
              <p className="mt-3 text-slate-300 text-sm">
                Practice TAT, PPDT, WAT and SRT.
              </p>
            </div>
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Knowledge;