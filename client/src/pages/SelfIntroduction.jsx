import { FaBullseye, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { GiPublicSpeaker } from "react-icons/gi";

const sections = [
  {
    icon: "👤",
    title: "Personal Information",
    content:
      "Start with your name, hometown, age and educational qualification in a confident and natural manner.",
  },
  {
    icon: "🎓",
    title: "Education",
    content:
      "Briefly mention your school, college, current course and any significant academic achievements.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family Background",
    content:
      "Introduce your family members, their occupations and values without making the introduction lengthy.",
  },
  {
    icon: "⚽",
    title: "Hobbies & Interests",
    content:
      "Mention genuine hobbies and explain what you learn from them instead of simply listing activities.",
  },
  {
    icon: "🏆",
    title: "Achievements",
    content:
      "Highlight leadership roles, sports, NCC, volunteering, competitions or certificates that demonstrate your personality.",
  },
  {
    icon: "🎯",
    title: "Aim",
    content:
      "End confidently by stating why you want to join the Armed Forces and your long-term goal.",
  },
];

const SelfIntroduction = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}

      <section className="bg-gradient-to-r from-indigo-900 via-slate-900 to-black py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <div className="text-7xl mb-6">🪖</div>

          <h1 className="text-5xl font-black mb-6">
            Self Introduction
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-9">
            Your self introduction is the first opportunity to create a
            positive impression on the Interviewing Officer. It should
            reflect confidence, clarity, honesty and personality.
          </p>

        </div>

      </section>

      {/* Importance */}

      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="bg-slate-900 rounded-3xl p-10 border border-slate-700">

          <h2 className="text-3xl font-bold flex items-center gap-3 mb-6">

            <FaBullseye className="text-yellow-400"/>

            Why Self Introduction Matters?

          </h2>

          <p className="text-slate-300 leading-9 text-lg">

            The Interviewing Officer starts evaluating your confidence,
            communication skills, self-awareness, honesty and personality
            from the very first minute. A structured introduction leaves a
            lasting positive impression and makes the interview flow naturally.

          </p>

        </div>

      </section>

      {/* Structure */}

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <h2 className="text-4xl font-bold text-center mb-12">

          Perfect Structure

        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {sections.map((item) => (

            <div
              key={item.title}
              className="bg-slate-900 border border-slate-700 rounded-3xl p-8 hover:border-indigo-400 transition-all duration-300 hover:-translate-y-2"
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

      {/* Example */}

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <div className="bg-gradient-to-r from-green-900/30 to-slate-900 border border-green-500 rounded-3xl p-10">

          <h2 className="text-3xl font-bold flex items-center gap-3 mb-6">

            <GiPublicSpeaker className="text-green-400"/>

            Sample Self Introduction

          </h2>

          <p className="text-slate-300 leading-9 text-lg">

            Good morning Sir. My name is Rahul Sharma. I belong to Lucknow,
            Uttar Pradesh. I am currently pursuing B.Tech in Computer Science.
            My father is a businessman and my mother is a homemaker. My hobbies
            include football, reading defence magazines and public speaking.
            During college I have participated in technical events and sports
            competitions which improved my leadership and teamwork. I aspire to
            become an officer in the Indian Armed Forces because I want to serve
            the nation while continuously challenging myself physically,
            mentally and morally. Thank you, Sir.

          </p>

        </div>

      </section>

      {/* Mistakes */}

      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-red-900/20 border border-red-500 rounded-3xl p-8">

            <h2 className="text-3xl font-bold flex items-center gap-3 mb-6">

              <FaTimesCircle className="text-red-400"/>

              Avoid These Mistakes

            </h2>

            <ul className="space-y-4 text-slate-300">

              <li>❌ Memorized speech</li>

              <li>❌ Speaking too fast</li>

              <li>❌ Giving fake achievements</li>

              <li>❌ Long unnecessary stories</li>

              <li>❌ Poor eye contact</li>

              <li>❌ Lack of confidence</li>

            </ul>

          </div>

          <div className="bg-green-900/20 border border-green-500 rounded-3xl p-8">

            <h2 className="text-3xl font-bold flex items-center gap-3 mb-6">

              <FaCheckCircle className="text-green-400"/>

              Interview Tips

            </h2>

            <ul className="space-y-4 text-slate-300">

              <li>✅ Be honest</li>

              <li>✅ Maintain eye contact</li>

              <li>✅ Smile naturally</li>

              <li>✅ Speak confidently</li>

              <li>✅ Keep it within 60–90 seconds</li>

              <li>✅ End with your goal</li>

            </ul>

          </div>

        </div>

      </section>

    </div>
  );
};

export default SelfIntroduction;