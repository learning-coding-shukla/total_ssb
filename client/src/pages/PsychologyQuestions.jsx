import {
  FaBrain,
  FaCheckCircle,
  FaTimesCircle,
  FaUserShield,
  FaLightbulb,
} from "react-icons/fa";

const questionCategories = [
  {
    emoji: "👤",
    title: "About Yourself",
    questions: [
      "Tell me about yourself.",
      "What are your strengths?",
      "What are your weaknesses?",
      "How do your friends describe you?",
      "How do your parents describe you?",
    ],
  },
  {
    emoji: "🎯",
    title: "Goals & Motivation",
    questions: [
      "Why do you want to join the Armed Forces?",
      "What motivates you in life?",
      "What are your future goals?",
      "Why should we select you?",
      "What if you are not selected?",
    ],
  },
  {
    emoji: "⚡",
    title: "Leadership",
    questions: [
      "Describe a situation where you led a team.",
      "How do you resolve conflicts?",
      "How do you motivate others?",
      "How do you react when people disagree with you?",
      "Have you ever failed as a leader?",
    ],
  },
  {
    emoji: "💪",
    title: "Stress & Decision Making",
    questions: [
      "Describe your biggest failure.",
      "How do you handle pressure?",
      "How do you react in emergencies?",
      "What do you do when things go wrong?",
      "Tell us about a difficult decision you made.",
    ],
  },
  {
    emoji: "🏡",
    title: "Family & Social Life",
    questions: [
      "Describe your family.",
      "Who inspires you?",
      "How do you spend weekends?",
      "How do you help your family?",
      "What responsibilities do you have?",
    ],
  },
];

const PsychologyQuestions = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}

      <section className="bg-gradient-to-r from-purple-900 via-slate-900 to-black py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <div className="text-7xl mb-6">🧠</div>

          <h1 className="text-5xl font-black mb-6">

            Psychology Interview Questions

          </h1>

          <p className="text-xl text-slate-300 leading-9 max-w-4xl mx-auto">

            Psychology questions help the Interviewing Officer understand your
            personality, emotional stability, leadership qualities, confidence,
            responsibility and Officer Like Qualities (OLQs). There are no
            perfect answers—only honest and logical ones.

          </p>

        </div>

      </section>

      {/* Why Asked */}

      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="bg-slate-900 rounded-3xl border border-slate-700 p-10">

          <h2 className="text-3xl font-bold flex items-center gap-3 mb-6">

            <FaBrain className="text-purple-400" />

            Why are Psychology Questions Asked?

          </h2>

          <p className="text-slate-300 leading-9 text-lg">

            The Interviewing Officer compares your answers with your TAT,
            WAT, SRT, SD and GTO performance. The purpose is to understand
            your natural behaviour rather than test your memory. Consistency,
            honesty and confidence are more important than giving
            "ideal" answers.

          </p>

        </div>

      </section>

      {/* Categories */}

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <h2 className="text-4xl font-bold text-center mb-12">

          Important Psychology Question Categories

        </h2>

        <div className="space-y-8">

          {questionCategories.map((category) => (

            <div
              key={category.title}
              className="bg-slate-900 border border-slate-700 rounded-3xl p-8 hover:border-purple-500 transition"
            >

              <h3 className="text-3xl font-bold mb-6">

                {category.emoji} {category.title}

              </h3>

              <div className="space-y-4">

                {category.questions.map((question, index) => (

                  <div
                    key={index}
                    className="bg-slate-800 rounded-xl px-5 py-4 hover:bg-slate-700 transition"
                  >

                    <p className="text-slate-200">

                      {index + 1}. {question}

                    </p>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Answer Tips */}

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <div className="bg-indigo-900/20 border border-indigo-500 rounded-3xl p-10">

          <h2 className="text-3xl font-bold flex items-center gap-3 mb-6">

            <FaLightbulb className="text-yellow-400" />

            How to Answer Psychology Questions

          </h2>

          <ul className="space-y-4 text-lg text-slate-300">

            <li>✅ Be completely honest.</li>

            <li>✅ Support answers with real-life examples.</li>

            <li>✅ Think before speaking.</li>

            <li>✅ Stay calm and confident.</li>

            <li>✅ Maintain consistency with your PIQ and Psychology tests.</li>

            <li>✅ Keep answers clear and concise.</li>

          </ul>

        </div>

      </section>

      {/* Good vs Bad */}

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-green-900/20 border border-green-500 rounded-3xl p-8">

            <h2 className="text-3xl font-bold flex items-center gap-3 mb-6">

              <FaCheckCircle className="text-green-400" />

              Good Practices

            </h2>

            <ul className="space-y-4 text-slate-300">

              <li>✔ Natural communication</li>
              <li>✔ Positive attitude</li>
              <li>✔ Confidence</li>
              <li>✔ Accept mistakes honestly</li>
              <li>✔ Logical thinking</li>
              <li>✔ Officer-like behaviour</li>

            </ul>

          </div>

          <div className="bg-red-900/20 border border-red-500 rounded-3xl p-8">

            <h2 className="text-3xl font-bold flex items-center gap-3 mb-6">

              <FaTimesCircle className="text-red-400" />

              Common Mistakes

            </h2>

            <ul className="space-y-4 text-slate-300">

              <li>❌ Memorised answers</li>
              <li>❌ Contradicting Psychology tests</li>
              <li>❌ Giving fake achievements</li>
              <li>❌ Blaming others</li>
              <li>❌ Overconfidence</li>
              <li>❌ Long unnecessary explanations</li>

            </ul>

          </div>

        </div>

      </section>

      {/* Final Advice */}

      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="bg-gradient-to-r from-yellow-900/20 to-slate-900 border border-yellow-500 rounded-3xl p-10">

          <h2 className="text-3xl font-bold flex items-center gap-3 mb-6">

            <FaUserShield className="text-yellow-400" />

            Officer's Advice

          </h2>

          <p className="text-slate-300 leading-9 text-lg">

            The Interviewing Officer is not searching for a perfect candidate.
            They are looking for a genuine individual with leadership
            potential, responsibility, emotional maturity and the ability to
            learn. Speak naturally, remain truthful and let your personality
            reflect through your answers.

          </p>

        </div>

      </section>

    </div>
  );
};

export default PsychologyQuestions;