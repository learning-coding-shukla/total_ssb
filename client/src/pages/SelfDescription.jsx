import { useEffect, useMemo, useState } from "react";
import SDInstructions from "../components/SDInstructions";
import SDTimer from "../components/SDTimer";
import SDTips from "../components/SDTips";

const sections = [
  {
    title: "👨‍👩‍👦 Parents' Opinion",
    description:
      "Write what your parents genuinely think about you. Mention both their appreciation of your strengths and the areas where they expect you to improve."
  },
  {
    title: "👨‍🏫 Teachers' / Employers' Opinion",
    description:
      "Write what your teachers or employer genuinely think about you. Include both your strengths and the areas where they advise you to improve."
  },
  {
    title: "🤝 Friends' Opinion",
    description:
      "Write how your friends honestly describe your personality, behaviour, and qualities."
  },
  {
    title: "🧑 Your Opinion About Yourself",
    description:
      "Describe yourself honestly. Mention your strengths, limitations, and overall personality."
  },
  {
    title: "📈 Qualities You Want to Improve",
    description:
      "Write the qualities you genuinely wish to improve and the efforts you are making to develop them."
  }
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
    const content = `
SELF DESCRIPTION TEST

Parents:
${responses[0]}

Teachers:
${responses[1]}

Friends:
${responses[2]}

Self:
${responses[3]}

Improvements:
${responses[4]}
`;
    const blob = new Blob([content], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "Self_Description_Response.txt";
    a.click();
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
