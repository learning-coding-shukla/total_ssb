import { useState } from "react";

const sections = [
  {
    title: "🎓 Educational Qualification",
    questions: [
      "Tell me about your educational journey from your 10th standard up to your current first year of B.Tech.",
      "Why did you choose Computer Science and Engineering as your major?",
      "How have your grades been in your first year at university compared to your 12th board exams?",
      "How do you think your technical knowledge in computer science will be useful to the Armed Forces?",
      "Who is your favorite professor in college so far and why?",
      "Which subjects do you find most challenging in engineering?",
      "Have you participated in any technical projects, coding competitions or seminars?",
      "Why NDA instead of CDS or TGC after engineering?",
      "Have you faced any setback in competitive exams?",
      "What role do you usually take during group projects?"
    ]
  },

  {
    title: "👨‍👩‍👧 Parents & Siblings",
    questions: [
      "Tell me about your parents and their occupations.",
      "Whom are you closer to and why?",
      "Describe a recent disagreement with your parents.",
      "How do your parents feel about your defence aspirations?",
      "How do you help in household responsibilities?",
      "Tell me about your siblings.",
      "Who is more responsible among siblings?",
      "What qualities have you inherited from your parents?",
      "Do you contribute to financial planning?",
      "What weakness would your parents mention about you?"
    ]
  },

  {
    title: "⚽ Hobbies & Interests",
    questions: [
      "What do you do in your spare time?",
      "Tell me about a hobby you have pursued consistently.",
      "Do you play any team sports?",
      "How much time do you dedicate to fitness?",
      "What books or articles do you read?",
      "Have you organized any event?",
      "How do your hobbies help officer qualities?",
      "How do you spend a free Sunday?",
      "Have you learned any new skill recently?",
      "How has a hobby helped you connect with people?"
    ]
  },

  {
    title: "✨ Enthusiasm To Join Armed Forces",
    questions: [
      "Why Armed Forces instead of IT sector?",
      "Why your preferred service?",
      "Who inspired you to join the Armed Forces?",
      "What if you are not recommended?",
      "How have you prepared for SSB?",
      "Tell me a recent defence news.",
      "What is the toughest part of military life?",
      "What do OLQs mean to you?",
      "How does your family react to military risks?",
      "Where do you see yourself after 10 years?"
    ]
  }
];

function InterviewQuestions() {
  const [open, setOpen] = useState(null);

  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-5xl font-bold text-center mb-10">
        🎤 SSB Interview Questions
      </h1>

      {sections.map((section, index) => (

        <div
          key={index}
          className="bg-white rounded-xl shadow mb-6 overflow-hidden"
        >

          <button
            onClick={() =>
              setOpen(open === index ? null : index)
            }
            className="w-full text-left p-6 text-2xl font-bold bg-gray-100"
          >
            {section.title}
          </button>

          {open === index && (

            <div className="p-6">

              <ol className="list-decimal pl-6 space-y-4">

                {section.questions.map((question, qIndex) => (

                  <li key={qIndex}>
                    {question}
                  </li>

                ))}

              </ol>

            </div>

          )}

        </div>

      ))}

    </div>
  );
}

export default InterviewQuestions;