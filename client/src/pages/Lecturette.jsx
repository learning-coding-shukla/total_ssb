import { useState } from "react";

const topics = [
  // Defence & National Security
  "India-China Relations",
  "Women in Armed Forces",
  "Artificial Intelligence in Warfare",
  "Cyber Security",
  "Make in India in Defence",
  "Blue Water Navy",
  "Space Warfare",
  "Agnipath Scheme",
  "Border Management in India",
  "Left Wing Extremism (Naxalism)",
  "Modernization of Indian Armed Forces",
  "Role of DRDO",
  "Armed Forces Special Powers Act (AFSPA)",
  "Private Sector in Defence Production",
  "Theater Commands in Indian Military",
  "Maritime Security in the Indian Ocean",
  "Terrorism and Counter-Terrorism",
  "National Cadet Corps (NCC)",
  "Role of Paramilitary Forces",
  "Joint Military Exercises",

  // International Relations & Geopolitics
  "India-US Relations",
  "India-Russia Relations",
  "India-Pakistan Relations",
  "United Nations Reforms",
  "The Quad (Quadrilateral Security Dialogue)",
  "BRICS and its Global Impact",
  "G20 and India's Leadership",
  "India's Act East Policy",
  "String of Pearls Strategy",
  "China's Belt and Road Initiative (BRI)",
  "Middle East Geopolitics and India",
  "SAARC vs BIMSTEC",
  "India's Foreign Policy",
  "World Trade Organization (WTO)",
  "Nuclear Proliferation",
  "India's Soft Power",
  "Global Refugee Crisis",
  "Relevance of Non-Aligned Movement (NAM)",
  "World Health Organization (WHO)",
  "South China Sea Dispute",

  // Social Issues & Education
  "Social Media Impact",
  "Women Empowerment",
  "National Education Policy (NEP) 2020",
  "Brain Drain",
  "Right to Education",
  "Child Labour in India",
  "Poverty Eradication",
  "Overpopulation",
  "Uniform Civil Code (UCC)",
  "Rural Development",
  "Joint Family vs. Nuclear Family",
  "Role of Youth in Nation Building",
  "Substance Abuse Among Youth",
  "Healthcare System in India",
  "Caste System in Modern India",
  "Media - The Fourth Pillar of Democracy",
  "Sports Infrastructure in India",
  "Women Reservation Bill",
  "E-learning vs Traditional Classroom",
  "Corruption in India",

  // Economy & Infrastructure
  "Digital India",
  "Cashless Economy",
  "Cryptocurrency and Regulation",
  "Privatization of Public Sector Units (PSUs)",
  "Goods and Services Tax (GST)",
  "Atmanirbhar Bharat",
  "Start-up Ecosystem in India",
  "Foreign Direct Investment (FDI)",
  "Agrarian Crisis and Farmer Protests",
  "Unorganized Sector in India",
  "Tourism Industry in India",
  "Smart Cities Mission",
  "Renewable Energy in India",
  "Infrastructure Development",
  "Inflation and its Impact",
  "The Gig Economy",
  "Electric Vehicles (EV) Future in India",
  "Role of MSMEs in Indian Economy",
  "Banking Sector Reforms",
  "Space Economy and Commercialization",

  // Science, Tech & Environment
  "Climate Change",
  "ISRO's Recent Achievements",
  "5G Technology and its Impact",
  "Deepfakes and Misinformation",
  "Data Privacy and Protection",
  "Disaster Management in India",
  "Water Scarcity and Conservation",
  "Deforestation and Afforestation",
  "Waste Management",
  "Biotechnology in Agriculture"
];
function Lecturette() {
const [topic, setTopic] = useState("");

const generateTopic = () => {
const random =
topics[Math.floor(Math.random() * topics.length)];


setTopic(random);

const attempts =
  Number(localStorage.getItem("lecturette_attempts")) || 0;

localStorage.setItem(
  "lecturette_attempts",
  attempts + 1
);


};

const attempts =
Number(localStorage.getItem("lecturette_attempts")) || 0;

return ( <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-green-950 text-white">


  <div className="max-w-7xl mx-auto px-6 py-10">

    {/* Hero */}

    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-green-950 to-slate-900 border border-yellow-500/30 shadow-2xl p-10 mb-12">

      <div className="absolute right-8 top-4 text-8xl opacity-10">
        🎤
      </div>

      <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">

        LECTURETTE PRACTICE

      </h1>

      <p className="text-xl text-slate-300 max-w-4xl">

        Develop confidence, communication skills,
        knowledge, reasoning ability and officer-like
        expression exactly as assessed in SSB.

      </p>

      <div className="flex flex-wrap gap-3 mt-6">

        <span className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold">
          Confidence
        </span>

        <span className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold">
          Communication
        </span>

        <span className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold">
          Knowledge
        </span>

        <span className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold">
          Leadership
        </span>

      </div>

    </div>

    {/* Progress */}

    <div className="bg-slate-900/70 border border-yellow-500/20 rounded-3xl p-8 mb-12">

      <div className="flex justify-between items-center">

        <h2 className="text-3xl font-bold">
          📊 Practice Progress
        </h2>

        <span className="text-yellow-400 font-bold text-xl">
          {attempts} Topics Practiced
        </span>

      </div>

    </div>

    {/* Assessment */}

    <div className="mb-12">

      <h2 className="text-3xl font-bold text-center mb-6">

        🎯 What GTO Assesses

      </h2>

      <div className="grid md:grid-cols-4 gap-5">

        {[
          "Communication",
          "Confidence",
          "Knowledge",
          "Reasoning",
        ].map((item) => (

          <div
            key={item}
            className="bg-slate-900/70 border border-green-500/20 rounded-2xl p-6 text-center"
          >

            <div className="text-4xl mb-3">
              🎖️
            </div>

            <h3 className="font-bold text-lg">
              {item}
            </h3>

          </div>

        ))}

      </div>

    </div>

    {/* Topic Generator */}

    <div className="bg-slate-900 rounded-3xl border border-yellow-500/20 p-10 text-center shadow-2xl">

      <h2 className="text-4xl font-bold mb-6">

        🎲 Generate Lecturette Topic

      </h2>

      <button
        onClick={generateTopic}
        className="
          bg-gradient-to-r
          from-yellow-500
          to-amber-400
          text-black
          px-10
          py-4
          rounded-2xl
          text-xl
          font-bold
          hover:scale-105
          transition
        "
      >
        🚀 Generate Topic
      </button>

      {topic && (

        <div className="mt-10">

          <div className="text-yellow-400 text-lg mb-3">

            YOUR TOPIC

          </div>

          <div className="bg-gradient-to-r from-green-700 to-green-600 p-8 rounded-3xl text-4xl font-black shadow-xl">

            {topic}

          </div>

        </div>

      )}

    </div>

    {/* Real SSB Format */}

    <div className="mt-12 bg-slate-900/70 border border-yellow-500/20 rounded-3xl p-8">

      <h2 className="text-3xl font-bold mb-6">

        ⏱️ Real SSB Lecturette Format

      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-slate-800 p-6 rounded-2xl text-center">

          <div className="text-5xl mb-3">
            📖
          </div>

          <h3 className="font-bold text-xl">
            3 Minutes
          </h3>

          <p className="text-slate-300">
            Preparation Time
          </p>

        </div>

        <div className="bg-slate-800 p-6 rounded-2xl text-center">

          <div className="text-5xl mb-3">
            🎤
          </div>

          <h3 className="font-bold text-xl">
            3 Minutes
          </h3>

          <p className="text-slate-300">
            Speaking Time
          </p>

        </div>

        <div className="bg-slate-800 p-6 rounded-2xl text-center">

          <div className="text-5xl mb-3">
            🏆
          </div>

          <h3 className="font-bold text-xl">
            GTO Assessment
          </h3>

          <p className="text-slate-300">
            Confidence & Expression
          </p>

        </div>

      </div>

    </div>

    {/* Tips */}

    <div className="mt-12 bg-gradient-to-r from-yellow-500 to-amber-400 text-black rounded-3xl p-8 text-center">

      <h2 className="text-3xl font-bold mb-4">

        💡 Lecturette Success Formula

      </h2>

      <p className="text-lg font-medium">

        Introduction → Current Scenario →
        Analysis → Challenges →
        Solutions → Conclusion

      </p>

    </div>

  </div>

</div>


);
}

export default Lecturette;
