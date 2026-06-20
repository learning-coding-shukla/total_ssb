import { Link } from "react-router-dom";
import armyImg from "../assets/army-logo.png";
import navyImg from "../assets/navy-logo.png";
import airforceImg from "../assets/airforce-logo.png";
import bgImage from "../assets/bg.png";

function Home() {
  return (
    <div className="bg-slate-50">

      {/* ================= HERO SECTION ================= */}

      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.72), rgba(0,0,0,.72)), url(${bgImage})`,
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-slate-950"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">

          {/* Badge */}

          <div className="inline-flex items-center gap-2 bg-white/10 border border-yellow-500/30 backdrop-blur-md px-5 py-2 rounded-full mb-8">

            <span className="text-yellow-400">★</span>

            <span className="tracking-wide text-sm font-medium">
              India's Free Defence Learning Platform
            </span>

          </div>

          {/* Main Heading */}

          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-widest leading-tight">

            TOTAL

            <span className="block text-yellow-400">
              SSB
            </span>

          </h1>

          <p className="mt-8 text-2xl md:text-4xl font-bold leading-relaxed">

            Become The Officer
            <br />

            <span className="text-green-400">
              India Needs.
            </span>

          </p>

          <p className="mt-8 max-w-3xl mx-auto text-gray-300 text-lg md:text-xl leading-8">

            Practice real SSB Psychology Tests, prepare for Group Tasks,
            improve your Defence Knowledge, master Lecturette,
            Current Affairs and Officer Like Qualities —
            all at one place.

          </p>

          {/* CTA Buttons */}

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              to="/psychology"
              className="px-10 py-4 rounded-xl bg-green-600 hover:bg-green-700 transition text-lg font-bold shadow-lg"
            >
              🚀 Start Preparation
            </Link>

            <Link
              to="/knowledge"
              className="px-10 py-4 rounded-xl border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition text-lg font-bold"
            >
              📚 Defence Knowledge
            </Link>

          </div>

          {/* Feature Badges */}

          <div className="mt-14 flex flex-wrap justify-center gap-4">

            {[
              "Army",
              "Navy",
              "Air Force",
              "Psychology",
              "Interview",
              "Lecturette",
              "Current Affairs",
              "GTO",
            ].map((item) => (

              <span
                key={item}
                className="bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-sm"
              >
                {item}
              </span>

            ))}

          </div>

          {/* Hero Statistics */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10">

              <h2 className="text-4xl font-black text-yellow-400">
                100+
              </h2>

              <p className="mt-2 text-gray-300">
                Lecturette Topics
              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10">

              <h2 className="text-4xl font-black text-green-400">
                1500+
              </h2>

              <p className="mt-2 text-gray-300">
                Practice Questions
              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10">

              <h2 className="text-4xl font-black text-blue-400">
                10+
              </h2>

              <p className="mt-2 text-gray-300">
                Practice Modules
              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10">

              <h2 className="text-4xl font-black text-red-400">
                24×7
              </h2>

              <p className="mt-2 text-gray-300">
                Free Learning
              </p>

            </div>

          </div>

          {/* Scroll Indicator */}

          <div className="mt-20 animate-bounce">

            <p className="text-sm tracking-widest text-gray-300">

              SCROLL TO EXPLORE

            </p>

            <div className="text-3xl mt-2">

              ↓

            </div>

          </div>

        </div>

      </section>
            {/* ================= WHY CHOOSE TOTAL SSB ================= */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="text-yellow-600 font-semibold uppercase tracking-widest">
              WHY CHOOSE US
            </span>

            <h2 className="text-4xl md:text-5xl font-black mt-4 text-slate-900">

              Why Thousands of Aspirants
              <br />
              Choose <span className="text-green-600">TOTAL SSB</span>

            </h2>

            <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg leading-8">

              TOTAL SSB is built with one mission —
              to provide every defence aspirant with
              free, structured and realistic SSB preparation
              without expensive coaching.

            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                icon: "🎯",
                title: "Real SSB Experience",
                desc: "Timed Psychology Tests, PPDT, TAT, WAT, SRT and Lecturette just like the actual SSB.",
              },
              {
                icon: "📚",
                title: "Complete Defence Knowledge",
                desc: "Army, Navy, Air Force, Current Affairs, Operations, Wars, Ranks and Military Knowledge.",
              },
              {
                icon: "🆓",
                title: "100% Free Platform",
                desc: "No subscriptions. No hidden charges. Learn anytime from anywhere.",
              },
              {
                icon: "📈",
                title: "Track Your Progress",
                desc: "Dashboard to monitor completed tests and continuously improve performance.",
              },
              {
                icon: "🧠",
                title: "Officer Like Qualities",
                desc: "Develop leadership, communication, psychology and decision-making skills.",
              },
              {
                icon: "🇮🇳",
                title: "Made for Defence Aspirants",
                desc: "Designed specifically for NDA, CDS, AFCAT and other SSB candidates.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="
                bg-slate-50
                rounded-3xl
                p-8
                border
                border-slate-200
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all
                duration-300
                "
              >

                <div className="text-5xl mb-6">

                  {item.icon}

                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">

                  {item.title}

                </h3>

                <p className="text-gray-600 leading-8">

                  {item.desc}

                </p>

              </div>

            ))}

          </div>

        </div>
      </section>



      {/* ================= WEBSITE STATISTICS ================= */}

      <section className="py-24 bg-slate-950 text-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="uppercase tracking-widest text-yellow-400">

              PLATFORM OVERVIEW

            </span>

            <h2 className="text-5xl font-black mt-4">

              Everything You Need
              <br />
              For SSB Preparation

            </h2>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {[
              {
                number: "1000+",
                title: "WAT Words",
                color: "text-green-400",
              },
              {
                number: "300+",
                title: "SRT Situations",
                color: "text-blue-400",
              },
              {
                number: "150+",
                title: "TAT Images",
                color: "text-red-400",
              },
              {
                number: "50+",
                title: "PPDT Images",
                color: "text-yellow-400",
              },
              {
                number: "100+",
                title: "Lecturette Topics",
                color: "text-purple-400",
              },
              {
                number: "3",
                title: "Armed Forces",
                color: "text-cyan-400",
              },
              {
                number: "10+",
                title: "Practice Modules",
                color: "text-pink-400",
              },
              {
                number: "24×7",
                title: "Free Access",
                color: "text-orange-400",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="
                bg-slate-900
                rounded-3xl
                p-8
                border
                border-slate-800
                hover:border-yellow-500
                hover:scale-105
                transition-all
                duration-300
                text-center
                "
              >

                <h2 className={`text-5xl font-black ${item.color}`}>

                  {item.number}

                </h2>

                <p className="mt-4 text-gray-300 text-lg">

                  {item.title}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>
    {/* ================= PRACTICE MODULES ================= */}

<section className="py-24 bg-slate-100">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <span className="uppercase tracking-widest text-green-700 font-semibold">
        PRACTICE MODULES
      </span>

      <h2 className="text-5xl font-black mt-4 text-slate-900">
        Master Every Stage
        <br />
        of the SSB Interview
      </h2>

      <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600 leading-8">
        Practice every assessment exactly like the actual Service Selection
        Board. Improve your psychology, communication, reasoning and officer
        qualities through realistic timed practice.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">

      {[
        {
          icon: "🖼",
          title: "PPDT",
          desc: "Picture Perception & Discussion Test",
          color: "from-blue-600 to-cyan-500",
          link: "/ppdt",
        },
        {
          icon: "📖",
          title: "TAT",
          desc: "Thematic Apperception Test",
          color: "from-green-600 to-emerald-500",
          link: "/tat",
        },
        {
          icon: "⚡",
          title: "WAT",
          desc: "Word Association Test",
          color: "from-yellow-500 to-orange-500",
          link: "/wat",
        },
        {
          icon: "📝",
          title: "SRT",
          desc: "Situation Reaction Test",
          color: "from-red-600 to-rose-500",
          link: "/srt",
        },
        {
          icon: "🧠",
          title: "Self Description",
          desc: "Know Yourself Better",
          color: "from-purple-600 to-fuchsia-500",
          link: "/self-description",
        },
        {
          icon: "🎯",
          title: "GPE",
          desc: "Group Planning Exercise",
          color: "from-indigo-600 to-blue-500",
          link: "/gpe",
        },
        {
          icon: "🗣",
          title: "Lecturette",
          desc: "Improve Public Speaking",
          color: "from-cyan-600 to-sky-500",
          link: "/lecturette",
        },
        {
          icon: "🤝",
          title: "Interview",
          desc: "Personal Interview Questions",
          color: "from-orange-600 to-yellow-500",
          link: "/interview",
        },
        {
          icon: "🏅",
          title: "OLQs",
          desc: "Officer Like Qualities",
          color: "from-slate-800 to-slate-600",
          link: "/olqs",
        },
      ].map((item) => (

        <Link
          key={item.title}
          to={item.link}
          className="
          group
          block
          bg-white
          rounded-3xl
          shadow-lg
          hover:shadow-2xl
          hover:-translate-y-2
          transition-all
          duration-300
          overflow-hidden
          "
        >

          <div className={`h-2 bg-gradient-to-r ${item.color}`} />

          <div className="p-8">

            <div className="text-5xl mb-5">
              {item.icon}
            </div>

            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              {item.title}
            </h3>

            <p className="text-gray-600 leading-7">
              {item.desc}
            </p>

            <div className="flex justify-end mt-8">

              <span
                className="
                text-green-600
                font-bold
                group-hover:translate-x-2
                transition-transform
                duration-300
                "
              >
                Explore →
              </span>

            </div>

          </div>

        </Link>

      ))}

    </div>

  </div>
</section>
{/* ================= SSB TIMELINE ================= */}

<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <span className="uppercase tracking-widest text-yellow-600 font-semibold">

        SSB PROCESS

      </span>

      <h2 className="text-5xl font-black mt-4 text-slate-900">

        The Journey
        <br />
        Towards Becoming an Officer

      </h2>

      <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">

        Understand the complete selection procedure followed by the Services
        Selection Board.

      </p>

    </div>

    <div className="grid md:grid-cols-5 gap-8">

      {[
        {
          no: "01",
          title: "Screening",
          desc: "OIR Test & PPDT",
        },
        {
          no: "02",
          title: "Psychology",
          desc: "TAT • WAT • SRT • SD",
        },
        {
          no: "03",
          title: "GTO Tasks",
          desc: "Outdoor Leadership Tests",
        },
        {
          no: "04",
          title: "Interview",
          desc: "Personal Interview",
        },
        {
          no: "05",
          title: "Conference",
          desc: "Final Assessment",
        },

      ].map((step) => (

        <div
          key={step.no}
          className="
          relative
          bg-slate-900
          text-white
          rounded-3xl
          p-8
          hover:scale-105
          hover:bg-green-700
          transition-all
          duration-300
          "
        >

          <div
            className="
            absolute
            -top-5
            left-8
            w-12
            h-12
            rounded-full
            bg-yellow-400
            text-black
            flex
            items-center
            justify-center
            font-black
            text-xl
            "
          >

            {step.no}

          </div>

          <div className="mt-8">

            <h3 className="text-2xl font-bold mb-4">

              {step.title}

            </h3>

            <p className="text-gray-300">

              {step.desc}

            </p>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>
{/* ================= INDIAN ARMED FORCES ================= */}

<section className="py-24 bg-slate-950 text-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <span className="uppercase tracking-widest text-yellow-400 font-semibold">
        INDIAN ARMED FORCES
      </span>

      <h2 className="text-5xl font-black mt-4">

        Explore the Pride
        <br />
        of Our Nation

      </h2>

      <p className="max-w-3xl mx-auto mt-6 text-gray-400 text-lg leading-8">

        Learn about the Indian Army, Navy and Air Force —
        their history, commands, special forces, operations,
        weapons, aircraft, ships and career opportunities.

      </p>

    </div>

    <div className="grid lg:grid-cols-3 gap-10">

      {/* ================= ARMY ================= */}

      <Link
        to="/army"
        className="
        group
        bg-gradient-to-br
        from-slate-900
        via-slate-800
        to-slate-900
        rounded-3xl
        overflow-hidden
        border
        border-green-500/30
        hover:border-green-400
        hover:-translate-y-3
        hover:shadow-2xl
        transition-all
        duration-300
        "
      >

        <div className="h-2 bg-green-500"></div>

        <div className="p-10">

          <div className="flex justify-center">

            <img
              src={armyImg}
              alt="Indian Army"
              className="h-28 object-contain group-hover:scale-110 transition"
            />

          </div>

          <h3 className="text-3xl font-black mt-8 text-center">

            Indian Army

          </h3>

          <p className="text-center text-green-400 font-semibold mt-2">

            Service Before Self

          </p>

          <div className="grid grid-cols-2 gap-4 mt-8 text-center">

            <div className="bg-slate-800 rounded-xl p-4">

              <h4 className="text-green-400 font-bold">7</h4>

              <p className="text-sm text-gray-400">
                Commands
              </p>

            </div>

            <div className="bg-slate-800 rounded-xl p-4">

              <h4 className="text-green-400 font-bold">

                13 Lakh+

              </h4>

              <p className="text-sm text-gray-400">
                Personnel
              </p>

            </div>

          </div>

          <ul className="space-y-3 mt-8 text-gray-300">

            <li>✔ Commands</li>

            <li>✔ Regiments</li>

            <li>✔ Para SF</li>

            <li>✔ Weapons</li>

            <li>✔ Operations</li>

            <li>✔ Rank Structure</li>

          </ul>

          <button
            className="
            mt-10
            w-full
            bg-green-600
            py-4
            rounded-xl
            font-bold
            hover:bg-green-700
            transition
            "
          >

            Explore Army →

          </button>

        </div>

      </Link>



      {/* ================= NAVY ================= */}

      <Link
        to="/navy"
        className="
        group
        bg-gradient-to-br
        from-slate-900
        via-slate-800
        to-slate-900
        rounded-3xl
        overflow-hidden
        border
        border-blue-500/30
        hover:border-blue-400
        hover:-translate-y-3
        hover:shadow-2xl
        transition-all
        duration-300
        "
      >

        <div className="h-2 bg-blue-500"></div>

        <div className="p-10">

          <div className="flex justify-center">

            <img
              src={navyImg}
              alt="Indian Navy"
              className="h-28 object-contain group-hover:scale-110 transition"
            />

          </div>

          <h3 className="text-3xl font-black mt-8 text-center">

            Indian Navy

          </h3>

          <p className="text-center text-blue-400 font-semibold mt-2">

            Shanno Varunah

          </p>

          <div className="grid grid-cols-2 gap-4 mt-8 text-center">

            <div className="bg-slate-800 rounded-xl p-4">

              <h4 className="text-blue-400 font-bold">3</h4>

              <p className="text-sm text-gray-400">
                Commands
              </p>

            </div>

            <div className="bg-slate-800 rounded-xl p-4">

              <h4 className="text-blue-400 font-bold">

                75,000+

              </h4>

              <p className="text-sm text-gray-400">
                Personnel
              </p>

            </div>

          </div>

          <ul className="space-y-3 mt-8 text-gray-300">

            <li>✔ Fleets</li>

            <li>✔ Aircraft Carriers</li>

            <li>✔ MARCOS</li>

            <li>✔ Submarines</li>

            <li>✔ Operations</li>

            <li>✔ Rank Structure</li>

          </ul>

          <button
            className="
            mt-10
            w-full
            bg-blue-600
            py-4
            rounded-xl
            font-bold
            hover:bg-blue-700
            transition
            "
          >

            Explore Navy →

          </button>

        </div>

      </Link>



      {/* ================= AIR FORCE ================= */}

      <Link
        to="/airforce"
        className="
        group
        bg-gradient-to-br
        from-slate-900
        via-slate-800
        to-slate-900
        rounded-3xl
        overflow-hidden
        border
        border-red-500/30
        hover:border-red-400
        hover:-translate-y-3
        hover:shadow-2xl
        transition-all
        duration-300
        "
      >

        <div className="h-2 bg-red-500"></div>

        <div className="p-10">

          <div className="flex justify-center">

            <img
              src={airforceImg}
              alt="Indian Air Force"
              className="h-28 object-contain group-hover:scale-110 transition"
            />

          </div>

          <h3 className="text-3xl font-black mt-8 text-center">

            Indian Air Force

          </h3>

          <p className="text-center text-red-400 font-semibold mt-2">

            Touch The Sky With Glory

          </p>

          <div className="grid grid-cols-2 gap-4 mt-8 text-center">

            <div className="bg-slate-800 rounded-xl p-4">

              <h4 className="text-red-400 font-bold">7</h4>

              <p className="text-sm text-gray-400">
                Commands
              </p>

            </div>

            <div className="bg-slate-800 rounded-xl p-4">

              <h4 className="text-red-400 font-bold">

                1.4 Lakh+

              </h4>

              <p className="text-sm text-gray-400">
                Personnel
              </p>

            </div>

          </div>

          <ul className="space-y-3 mt-8 text-gray-300">

            <li>✔ Aircraft</li>

            <li>✔ Missiles</li>

            <li>✔ Air Defence</li>

            <li>✔ Commands</li>

            <li>✔ Operations</li>

            <li>✔ Rank Structure</li>

          </ul>

          <button
            className="
            mt-10
            w-full
            bg-red-600
            py-4
            rounded-xl
            font-bold
            hover:bg-red-700
            transition
            "
          >

            Explore Air Force →

          </button>

        </div>

      </Link>

    </div>

  </div>

</section>
{/* ================= TESTIMONIALS ================= */}

<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <span className="uppercase tracking-widest text-green-600 font-semibold">
        WHAT ASPIRANTS SAY
      </span>

      <h2 className="text-5xl font-black mt-4 text-slate-900">

        Built for Defence Aspirants,
        <br />
        Trusted by Learners

      </h2>

    </div>

    <div className="grid md:grid-cols-3 gap-8">

      {[
        {
          name: "NDA Aspirant",
          text: "The psychology tests feel very close to the real SSB. The timers and interface are excellent.",
        },
        {
          name: "CDS Candidate",
          text: "Finally a free platform where I can prepare Lecturette, WAT, TAT and Defence Knowledge together.",
        },
        {
          name: "AFCAT Aspirant",
          text: "Simple, modern and easy to use. The Armed Forces section is my favourite.",
        },
      ].map((item) => (

        <div
          key={item.name}
          className="bg-slate-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
        >

          <div className="text-yellow-500 text-2xl">

            ⭐⭐⭐⭐⭐

          </div>

          <p className="mt-6 text-gray-600 leading-8 italic">

            "{item.text}"

          </p>

          <h4 className="mt-8 font-bold text-slate-900">

            — {item.name}

          </h4>

        </div>

      ))}

    </div>

  </div>

</section>



{/* ================= OFFICER'S CREED ================= */}

<section
className="
py-24
bg-gradient-to-r
from-green-700
via-green-600
to-green-700
text-white
text-center
"
>

<div className="max-w-5xl mx-auto px-6">

<h2 className="text-5xl font-black mb-8">

🇮🇳 OFFICER'S CREED

</h2>

<p className="text-2xl leading-10 font-light">

"The Services Selection Board does not seek perfection.

It seeks individuals with the potential to lead,

the courage to take responsibility,

the character to inspire others,

and the integrity to serve the Nation."

</p>

<div className="mt-12 text-yellow-300 text-xl font-bold">

Lead with Character • Think with Clarity • Serve with Honour

</div>

</div>

</section>



{/* ================= CALL TO ACTION ================= */}

<section className="py-20 bg-slate-950 text-white">

<div className="max-w-6xl mx-auto px-6 text-center">

<h2 className="text-5xl font-black">

Ready to Begin Your SSB Journey?

</h2>

<p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">

Join thousands of defence aspirants preparing for NDA, CDS, AFCAT and SSB interviews through realistic practice modules.

</p>

<div className="mt-12 flex flex-wrap justify-center gap-6">

<Link
to="/psychology"
className="bg-green-600 hover:bg-green-700 px-10 py-4 rounded-xl font-bold text-lg transition"
>

Start Preparation 🚀

</Link>

<Link
to="/knowledge"
className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-10 py-4 rounded-xl font-bold text-lg transition"
>

Explore Defence 📚

</Link>

</div>

</div>

</section>



{/* ================= FOOTER ================= */}

{/* ================= FOOTER ================= */}

<footer className="bg-black text-gray-400">

  <div className="max-w-7xl mx-auto px-6 py-16">

    <div className="grid md:grid-cols-4 gap-10">

      {/* Brand */}

      <div>

        <h3 className="text-3xl font-black text-white">
          TOTAL SSB
        </h3>

        <p className="mt-5 leading-8">
          India's Free Defence & SSB Preparation Platform.
          <br />
          Helping every defence aspirant become an officer.
        </p>

      </div>

      {/* Practice */}

      <div>

        <h4 className="text-xl font-bold text-white mb-5">
          Practice
        </h4>

        <ul className="space-y-3">

          <li>
            <Link to="/ppdt" className="hover:text-green-400 hover:translate-x-2 transition-all duration-300 inline-block">
              PPDT
            </Link>
          </li>

          <li>
            <Link to="/tat" className="hover:text-green-400 hover:translate-x-2 transition-all duration-300 inline-block">
              TAT
            </Link>
          </li>

          <li>
            <Link to="/wat" className="hover:text-green-400 hover:translate-x-2 transition-all duration-300 inline-block">
              WAT
            </Link>
          </li>

          <li>
            <Link to="/srt" className="hover:text-green-400 hover:translate-x-2 transition-all duration-300 inline-block">
              SRT
            </Link>
          </li>

          <li>
            <Link to="/lecturette" className="hover:text-green-400 hover:translate-x-2 transition-all duration-300 inline-block">
              Lecturette
            </Link>
          </li>

          <li>
            <Link to="/interview" className="hover:text-green-400 hover:translate-x-2 transition-all duration-300 inline-block">
              Interview
            </Link>
          </li>

        </ul>

      </div>

      {/* Defence */}

      <div>

        <h4 className="text-xl font-bold text-white mb-5">
          Defence
        </h4>

        <ul className="space-y-3">

          <li>
            <Link to="/army" className="hover:text-yellow-400 hover:translate-x-2 transition-all duration-300 inline-block">
              Indian Army
            </Link>
          </li>

          <li>
            <Link to="/navy" className="hover:text-blue-400 hover:translate-x-2 transition-all duration-300 inline-block">
              Indian Navy
            </Link>
          </li>

          <li>
            <Link to="/airforce" className="hover:text-red-400 hover:translate-x-2 transition-all duration-300 inline-block">
              Indian Air Force
            </Link>
          </li>

          <li>
            <Link to="/operations" className="hover:text-orange-400 hover:translate-x-2 transition-all duration-300 inline-block">
              Military Operations
            </Link>
          </li>

          <li>
            <Link to="/knowledge" className="hover:text-cyan-400 hover:translate-x-2 transition-all duration-300 inline-block">
              Current Affairs
            </Link>
          </li>

          <li>
            <Link to="/history" className="hover:text-purple-400 hover:translate-x-2 transition-all duration-300 inline-block">
              History
            </Link>
          </li>

        </ul>

      </div>

      {/* Quick Links */}

      <div>

        <h4 className="text-xl font-bold text-white mb-5">
          Quick Links
        </h4>

        <ul className="space-y-3">

          <li>
            <Link to="/dashboard" className="hover:text-green-400 hover:translate-x-2 transition-all duration-300 inline-block">
              Dashboard
            </Link>
          </li>

          <li>
            <Link to="/knowledge" className="hover:text-green-400 hover:translate-x-2 transition-all duration-300 inline-block">
              Knowledge Hub
            </Link>
          </li>

          <li>
            <Link to="/psychology" className="hover:text-green-400 hover:translate-x-2 transition-all duration-300 inline-block">
              Psychology
            </Link>
          </li>


        </ul>

      </div>

    </div>

    {/* Bottom */}

    <div className="border-t border-gray-800 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center">

      <p>
        © 2026 <span className="font-bold text-white">TOTAL SSB</span>. All Rights Reserved.
      </p>

      <p className="mt-4 md:mt-0 text-center">
        Made with <span className="text-red-500">❤️</span> for Defence Aspirants 🇮🇳
      </p>

    </div>

  </div>

</footer>

</div>

);

}

export default Home;