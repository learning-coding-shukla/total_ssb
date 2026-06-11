function OLQs() {
  const factors = [
    {
      title: "🧠 Factor I — Planning & Organizing",
      olqs: [
        {
          emoji: "🧩",
          title: "Effective Intelligence",
          meaning:
            "Practical wisdom and the ability to solve real-life problems using available resources.",
          assessor:
            "Resourcefulness, common sense, adaptability and problem-solving ability.",
          example:
            "Finding an alternative route when a road is blocked."
        },
        {
          emoji: "🔍",
          title: "Reasoning Ability",
          meaning:
            "Logical thinking and analytical decision-making.",
          assessor:
            "Cause-effect understanding, sound judgment and analytical thinking.",
          example:
            "Evaluating multiple options before making a decision."
        },
        {
          emoji: "📋",
          title: "Organizing Ability",
          meaning:
            "Planning tasks and managing resources efficiently.",
          assessor:
            "Time management, planning and coordination skills.",
          example:
            "Successfully organizing a college event."
        },
        {
          emoji: "🗣️",
          title: "Power of Expression",
          meaning:
            "Communicating ideas clearly and confidently.",
          assessor:
            "Clarity, brevity, confidence and communication skills.",
          example:
            "Giving a structured and impactful lecturette."
        }
      ]
    },

    {
      title: "🤝 Factor II — Social Adjustment",
      olqs: [
        {
          emoji: "🌍",
          title: "Social Adaptability",
          meaning:
            "Adjusting comfortably with different people and environments.",
          assessor:
            "Flexibility, openness and adaptability.",
          example:
            "Working effectively with a new team."
        },
        {
          emoji: "🤝",
          title: "Cooperation",
          meaning:
            "Working harmoniously with others towards a common goal.",
          assessor:
            "Team spirit, helpfulness and willingness to contribute.",
          example:
            "Supporting teammates during group tasks."
        },
        {
          emoji: "🛡️",
          title: "Sense of Responsibility",
          meaning:
            "Taking ownership of duties and commitments.",
          assessor:
            "Reliability, accountability and sincerity.",
          example:
            "Completing assigned tasks without reminders."
        }
      ]
    },

    {
      title: "🚀 Factor III — Social Effectiveness",
      olqs: [
        {
          emoji: "⚡",
          title: "Initiative",
          meaning:
            "Taking action without waiting for instructions.",
          assessor:
            "Proactiveness and leadership potential.",
          example:
            "Starting rescue efforts during an emergency."
        },
        {
          emoji: "💪",
          title: "Self Confidence",
          meaning:
            "Belief in one's abilities and capabilities.",
          assessor:
            "Composure, confidence and positive self-image.",
          example:
            "Speaking confidently before a group."
        },
        {
          emoji: "⏱️",
          title: "Speed of Decision",
          meaning:
            "Making quick and sound decisions.",
          assessor:
            "Presence of mind and decisiveness.",
          example:
            "Choosing the best solution under time pressure."
        },
        {
          emoji: "🎯",
          title: "Ability to Influence the Group",
          meaning:
            "Motivating and guiding people towards a goal.",
          assessor:
            "Leadership, persuasion and group influence.",
          example:
            "Convincing a group to follow a practical plan."
        },
        {
          emoji: "🔥",
          title: "Liveliness",
          meaning:
            "Energy, enthusiasm and optimism in approach.",
          assessor:
            "Cheerfulness, positivity and energetic participation.",
          example:
            "Maintaining morale during difficult situations."
        }
      ]
    },

    {
      title: "⚔️ Factor IV — Dynamic Qualities",
      olqs: [
        {
          emoji: "🏆",
          title: "Determination",
          meaning:
            "Persistence despite obstacles and setbacks.",
          assessor:
            "Commitment, perseverance and goal orientation.",
          example:
            "Continuing efforts until the objective is achieved."
        },
        {
          emoji: "🦁",
          title: "Courage",
          meaning:
            "Physical and moral bravery in difficult situations.",
          assessor:
            "Fearlessness and willingness to face challenges.",
          example:
            "Standing up for what is right despite opposition."
        },
        {
          emoji: "🏃",
          title: "Stamina",
          meaning:
            "Ability to sustain performance under stress.",
          assessor:
            "Physical endurance and mental resilience.",
          example:
            "Remaining effective during prolonged tasks."
        }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-8">

      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-5xl font-bold mb-4">
          🏅 Officer Like Qualities (OLQs)
        </h1>

        <p className="text-gray-600 max-w-4xl mx-auto text-lg">
          The Services Selection Board (SSB) evaluates candidates on
          15 Officer Like Qualities. These qualities are assessed
          through Psychology Tests, GTO Tasks and the Personal Interview.
        </p>
      </div>

      {/* Factors */}
      <div className="space-y-14">

        {factors.map((factor) => (
          <div key={factor.title}>
            <h2 className="text-3xl font-bold mb-6">
              {factor.title}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {factor.olqs.map((olq) => (
                <div
                  key={olq.title}
                  className="
                    bg-white
                    rounded-2xl
                    border
                    shadow-md
                    p-6
                    hover:shadow-xl
                    hover:-translate-y-2
                    transition-all
                    duration-300
                  "
                >
                  <div className="text-5xl mb-4">
                    {olq.emoji}
                  </div>

                  <h3 className="text-2xl font-bold mb-3">
                    {olq.title}
                  </h3>

                  <div className="space-y-3 text-gray-700">

                    <p>
                      <strong>Meaning:</strong> {olq.meaning}
                    </p>

                    <p>
                      <strong>Assessors Look For:</strong>{" "}
                      {olq.assessor}
                    </p>

                    <p>
                      <strong>Example:</strong>{" "}
                      {olq.example}
                    </p>

                  </div>
                </div>
              ))}

            </div>
          </div>
        ))}

      </div>

      {/* Psychology Mapping Section */}
      <div className="mt-16 bg-blue-50 border rounded-2xl p-8">

        <h2 className="text-3xl font-bold mb-6">
          🎯 How OLQs Are Assessed in SSB
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">
              📖 TAT
            </h3>

            <ul className="space-y-1">
              <li>• Leadership</li>
              <li>• Determination</li>
              <li>• Social Adaptability</li>
              <li>• Cooperation</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">
              ⚡ WAT
            </h3>

            <ul className="space-y-1">
              <li>• Initiative</li>
              <li>• Self Confidence</li>
              <li>• Power of Expression</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">
              📝 SRT
            </h3>

            <ul className="space-y-1">
              <li>• Effective Intelligence</li>
              <li>• Courage</li>
              <li>• Speed of Decision</li>
              <li>• Responsibility</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">
              👤 SDT
            </h3>

            <ul className="space-y-1">
              <li>• Self Confidence</li>
              <li>• Responsibility</li>
              <li>• Self Awareness</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Tip Section */}
      <div className="mt-10 bg-green-50 border rounded-2xl p-8">

        <h2 className="text-3xl font-bold mb-4">
          💡 SSB Insight
        </h2>

        <p className="text-gray-700 leading-8">
          No OLQ is assessed separately. The assessor observes the same
          qualities through your Psychology Tests, GTO Tasks and
          Personal Interview. Consistency between your thoughts,
          actions and personality is the key to recommendation.
        </p>

      </div>

    </div>
  );
}

export default OLQs;
