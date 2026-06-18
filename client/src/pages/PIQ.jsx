import {
  FaClipboardList,
  FaCheckCircle,
  FaTimesCircle,
  FaUserShield,
  FaLightbulb,
  FaUserGraduate,
} from "react-icons/fa";

const piqSections = [
  {
    icon: "👤",
    title: "Personal Details",
    content:
      "Fill your name, age, date of birth, place of birth and address exactly as per official documents. Incorrect information creates unnecessary confusion during the interview.",
  },
  {
    icon: "🎓",
    title: "Educational Background",
    content:
      "Mention all schools, colleges, percentage, achievements and extracurricular activities honestly. The IO frequently asks questions based on your academics.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family Details",
    content:
      "Provide correct information about parents, siblings and occupations. The IO assesses your family environment and responsibilities.",
  },
  {
    icon: "⚽",
    title: "Sports & Hobbies",
    content:
      "Mention only genuine hobbies and sports. Be prepared to answer detailed questions related to every hobby you mention.",
  },
  {
    icon: "🏆",
    title: "Achievements",
    content:
      "Include NCC, Scouts, Sports, Leadership roles, Competitions and Certificates that genuinely demonstrate your abilities.",
  },
  {
    icon: "🎯",
    title: "Career Preferences",
    content:
      "Mention your service preference honestly and be prepared to justify your choices during the interview.",
  },
];

const PIQ = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}

      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-black py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <div className="text-7xl mb-6">📝</div>

          <h1 className="text-5xl font-black mb-6">
            Personal Information Questionnaire (PIQ)
          </h1>

          <p className="text-xl text-slate-300 leading-9 max-w-4xl mx-auto">
            The PIQ Form is the foundation of your SSB Interview. Every
            question asked by the Interviewing Officer is largely based on
            the information you provide in this form. Therefore, it must be
            accurate, honest and complete.
          </p>

        </div>

      </section>

      {/* Importance */}

      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="bg-slate-900 rounded-3xl border border-slate-700 p-10">

          <h2 className="text-3xl font-bold flex items-center gap-3 mb-6">

            <FaClipboardList className="text-blue-400" />

            Why is PIQ Important?

          </h2>

          <p className="text-slate-300 text-lg leading-9">

            The PIQ Form acts as the roadmap for the Interviewing Officer,
            Psychologist and GTO. They use it to understand your background,
            education, family, achievements, interests and aspirations.
            Most interview questions originate from the information written
            in your PIQ.

          </p>

        </div>

      </section>

      {/* PIQ Sections */}

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <h2 className="text-4xl font-bold text-center mb-12">

          Major Sections of PIQ

        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {piqSections.map((item) => (

            <div
              key={item.title}
              className="bg-slate-900 border border-slate-700 rounded-3xl p-8 hover:border-blue-500 transition-all hover:-translate-y-2"
            >

              <div className="text-5xl mb-5">

                {item.icon}

              </div>

              <h3 className="text-2xl font-bold mb-4">

                {item.title}

              </h3>

              <p className="text-slate-300 leading-8">

                {item.content}

              </p>

            </div>

          ))}

        </div>

      </section>

      {/* Questions */}

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <div className="bg-indigo-900/20 border border-indigo-500 rounded-3xl p-10">

          <h2 className="text-3xl font-bold flex items-center gap-3 mb-8">

            <FaUserGraduate className="text-yellow-400" />

            Common Questions Asked from PIQ

          </h2>

          <div className="space-y-4">

            {[
              "Tell me about yourself.",
              "Why did you choose your current course?",
              "Describe your family background.",
              "Why do you want to join the Armed Forces?",
              "Explain your hobbies.",
              "Tell us about your achievements.",
              "Which subject do you like the most and why?",
              "What responsibilities do you have at home?",
              "Why have you given this service preference?",
              "What are your future goals?",
            ].map((question, index) => (

              <div
                key={index}
                className="bg-slate-800 rounded-xl px-5 py-4 hover:bg-slate-700 transition"
              >

                {index + 1}. {question}

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Good & Bad */}

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-green-900/20 border border-green-500 rounded-3xl p-8">

            <h2 className="text-3xl font-bold flex items-center gap-3 mb-6">

              <FaCheckCircle className="text-green-400"/>

              Good Practices

            </h2>

            <ul className="space-y-4 text-slate-300">

              <li>✅ Write only factual information.</li>
              <li>✅ Maintain consistency throughout SSB.</li>
              <li>✅ Mention genuine achievements.</li>
              <li>✅ Use neat handwriting.</li>
              <li>✅ Verify every detail before submission.</li>
              <li>✅ Be confident while discussing your PIQ.</li>

            </ul>

          </div>

          <div className="bg-red-900/20 border border-red-500 rounded-3xl p-8">

            <h2 className="text-3xl font-bold flex items-center gap-3 mb-6">

              <FaTimesCircle className="text-red-400"/>

              Common Mistakes

            </h2>

            <ul className="space-y-4 text-slate-300">

              <li>❌ Writing false achievements.</li>
              <li>❌ Hiding academic backlogs.</li>
              <li>❌ Mentioning hobbies you don't know.</li>
              <li>❌ Contradicting your Psychology tests.</li>
              <li>❌ Poor handwriting.</li>
              <li>❌ Leaving sections incomplete.</li>

            </ul>

          </div>

        </div>

      </section>

      {/* Officer's Advice */}

      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="bg-gradient-to-r from-yellow-900/20 to-slate-900 border border-yellow-500 rounded-3xl p-10">

          <h2 className="text-3xl font-bold flex items-center gap-3 mb-6">

            <FaUserShield className="text-yellow-400"/>

            Officer's Advice

          </h2>

          <p className="text-slate-300 text-lg leading-9">

            Remember that your PIQ is not merely a form—it is your personal
            profile. The Interviewing Officer will frame most of the
            interview around it. Fill it honestly, understand every point
            you write, and be prepared to discuss each answer with confidence
            and clarity.

          </p>

        </div>

      </section>

      {/* Golden Rules */}

      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="bg-blue-900/20 border border-blue-500 rounded-3xl p-10">

          <h2 className="text-3xl font-bold flex items-center gap-3 mb-6">

            <FaLightbulb className="text-yellow-300"/>

            Golden Rules for PIQ

          </h2>

          <ul className="space-y-4 text-lg text-slate-300">

            <li>⭐ Be truthful.</li>
            <li>⭐ Be consistent with your Psychology Tests.</li>
            <li>⭐ Know every detail you write.</li>
            <li>⭐ Never exaggerate achievements.</li>
            <li>⭐ Fill the form calmly without haste.</li>
            <li>⭐ Remember that honesty creates confidence.</li>

          </ul>

        </div>

      </section>

    </div>
  );
};

export default PIQ;