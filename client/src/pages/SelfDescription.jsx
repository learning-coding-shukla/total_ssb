import { useEffect, useMemo, useState } from "react";
import SDInstructions from "../components/SDInstructions";
import SDTimer from "../components/SDTimer";
import SDTips from "../components/SDTips";
import jsPDF from "jspdf";

const sections = [
  {
    title: "👨‍👩‍👦 Parents' Opinion",
    description:
      "Write what your parents genuinely think about you. Mention both their appreciation of your strengths and the areas where they expect you to improve.",
  },
  {
    title: "👨‍🏫 Teachers' / Employers' Opinion",
    description:
      "Write what your teachers or employer genuinely think about you. Include both your strengths and the areas where they advise you to improve.",
  },
  {
    title: "🤝 Friends' Opinion",
    description:
      "Write how your friends honestly describe your personality, behaviour, and qualities.",
  },
  {
    title: "🧑 Your Opinion About Yourself",
    description:
      "Describe yourself honestly. Mention your strengths, limitations, and overall personality.",
  },
  {
    title: "📈 Qualities You Want to Improve",
    description:
      "Write the qualities you genuinely wish to improve and the efforts you are making to develop them.",
  },
];

export default function SelfDescription() {
  const [responses, setResponses] = useState(() => {
    const saved = localStorage.getItem("sdResponses");
    return saved ? JSON.parse(saved) : sections.map(() => "");
  });

  const [current, setCurrent] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    localStorage.setItem("sdResponses", JSON.stringify(responses));
  }, [responses]);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, []);

  const text = responses[current];
  const words = useMemo(
    () => (text.trim() ? text.trim().split(/\s+/).length : 0),
    [text],
  );

  const progress = ((current + 1) / sections.length) * 100;

  const update = (value) => {
    const copy = [...responses];
    copy[current] = value;
    setResponses(copy);
  };

  const reset = () => {
    if (!window.confirm("Reset all responses?")) return;
    localStorage.removeItem("sdResponses");
    setResponses(sections.map(() => ""));
    setCurrent(0);
    setFinished(false);
  };

  

  const download = () => {
    const doc = new jsPDF("p", "mm", "a4");

    // =========================
    // HEADER
    // =========================
    doc.setFillColor(10, 25, 60);
    doc.rect(0, 0, 210, 30, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.text("TOTAL_SSB", 105, 13, { align: "center" });

    doc.setFontSize(14);
    doc.text("SELF DESCRIPTION TEST", 105, 22, {
      align: "center",
    });

    doc.setTextColor(0, 0, 0);

    // =========================
    // Candidate Details
    // =========================

    let y = 42;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);

    doc.text("Candidate Name :", 15, y);
    doc.line(58, y + 1, 125, y + 1);

    doc.text("Date :", 145, y);
    doc.line(160, y + 1, 195, y + 1);

    y += 12;

    doc.setDrawColor(150);
    doc.line(15, y, 195, y);

    y += 10;

    // =========================
    // Instructions
    // =========================

    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text("Instructions", 15, y);

    y += 8;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);

    const instructions = [
      "• Write your responses honestly.",
      "• Mention both strengths and weaknesses wherever applicable.",
      "• Use simple and natural language.",
      "• Complete all five sections.",
      "• Time Allowed : 15 Minutes.",
    ];

    instructions.forEach((item) => {
      doc.text(item, 18, y);
      y += 6;
    });

    y += 6;

    doc.setDrawColor(170);
    doc.line(15, y, 195, y);

    y += 10;

    // =========================
    // Questions
    // =========================

    const questions = [
      {
        title: "1. Parents' Opinion",
        question: "What do your parents think about you?",
      },
      {
        title: "2. Teachers' Opinion",
        question: "What do your teachers think about you?",
      },
      {
        title: "3. Friends' Opinion",
        question: "What do your friends think about you?",
      },
      {
        title: "4. Self Opinion",
        question: "What do you think about yourself?",
      },
      {
        title: "5. Future Goals & Improvements",
        question:
          "What do you want to become in future and which qualities do you want to improve?",
      },
    ];

    questions.forEach((item) => {
      if (y > 235) {
        doc.addPage();
        y = 20;
      }

      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.text(item.title, 15, y);

      y += 7;

      doc.setFont("helvetica", "italic");
      doc.setFontSize(11);
      doc.text(item.question, 15, y);

      y += 8;

      // Writing Lines

      for (let i = 0; i < 5; i++) {
        doc.setDrawColor(180);
        doc.line(15, y, 195, y);
        y += 9;
      }

      y += 8;
    });

    // =========================
    // Footer
    // =========================

    const pages = doc.getNumberOfPages();

    for (let i = 1; i <= pages; i++) {
      doc.setPage(i);

      doc.setDrawColor(180);
      doc.line(15, 287, 195, 287);

      doc.setFontSize(10);
      doc.setTextColor(120);

      doc.text("@total_ssb", 15, 293);

      doc.text(`Page ${i} of ${pages}`, 195, 293, {
        align: "right",
      });
    }

    doc.save("TOTAL_SSB_Self_Description_Practice_Sheet.pdf");
  };

  if (finished) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white p-6">
        <div className="max-w-xl w-full bg-slate-900 rounded-xl p-8 text-center shadow-xl">
          <h1 className="text-4xl font-bold mb-4">🎉 Test Completed</h1>
          <p className="text-gray-300 mb-6">
            You have completed the Self Description Test.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-800 rounded-lg p-4">
              <p className="text-3xl font-bold">5</p>
              <p>Sections</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-4">
              <p className="text-3xl font-bold">
                {responses.filter((x) => x.trim()).length}
              </p>
              <p>Answered</p>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <button
              onClick={download}
              className="bg-blue-600 px-5 py-3 rounded-lg hover:bg-blue-700"
            >
              Download
            </button>
            <button
              onClick={reset}
              className="bg-red-600 px-5 py-3 rounded-lg hover:bg-red-700"
            >
              Practice Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white py-10 px-5">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-blue-900 to-slate-900 rounded-xl p-8 shadow-lg">
          <h1 className="text-4xl font-bold">🪖 TOTAL_SSB</h1>
          <p className="text-xl mt-2 font-semibold">Self Description Test</p>
          <p className="mt-3 text-gray-300">Official Practice Simulator</p>
        </div>

        <div className="mt-8">
          <SDInstructions />
        </div>
        <div className="mt-8">
          <SDTimer />
        </div>

        <div className="mt-8 bg-slate-900 rounded-xl p-6">
          <div className="flex justify-between mb-2">
            <span>
              Section {current + 1} of {sections.length}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <h2 className="text-3xl font-bold mt-8 text-white">
            {sections[current].title}
          </h2>

          <p className="mt-6 text-lg font-semibold text-white">
            {sections[current].description}
          </p>

          <div className="mt-8 rounded-xl border border-yellow-500 bg-yellow-500/10 p-6">
            <div className="flex items-start gap-3">
              <span className="text-3xl">📝</span>

              <div>
                <h3 className="text-xl font-bold text-yellow-400">
                  Practice Instructions
                </h3>

                <p className="mt-3 text-gray-300 leading-8">
                  Write your{" "}
                  <span className="font-semibold text-white">
                    true and honest response
                  </span>{" "}
                  in your notebook exactly as you would during the actual SSB
                  Self Description Test.
                </p>

                <p className="mt-2 text-gray-300">
                  Once you have completed writing, click the
                  <span className="font-semibold text-green-400">
                    {" "}
                    ✔ I Have Completed This Section
                  </span>{" "}
                  button below.
                </p>
              </div>
            </div>
          </div>
          {/* 
          <div className="flex justify-between mt-3 text-sm text-gray-400">
            <span>Words: {words}</span>
            <span>Characters: {responses[current].length}</span>
          </div> */}

          <div className="flex justify-between mt-8">
            <button
              disabled={current === 0}
              onClick={() => setCurrent((c) => c - 1)}
              className="bg-slate-700 disabled:opacity-40 px-5 py-3 rounded-lg"
            >
              ← Previous
            </button>

            {current === sections.length - 1 ? (
              <button
                onClick={() => setFinished(true)}
                className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg"
              >
                Finish Test
              </button>
            ) : (
              <button
                onClick={() => setCurrent((c) => c + 1)}
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg"
              >
                Next →
              </button>
            )}
          </div>

          <div className="flex gap-4 mt-6">
            <button
              onClick={reset}
              className="bg-red-600 px-5 py-2 rounded-lg hover:bg-red-700"
            >
              Reset
            </button>
            <button
              onClick={download}
              className="bg-indigo-600 px-5 py-2 rounded-lg hover:bg-indigo-700"
            >
              Download
            </button>
          </div>
        </div>

        <div className="mt-10">
          <SDTips />
        </div>
      </div>
    </div>
  );
}
