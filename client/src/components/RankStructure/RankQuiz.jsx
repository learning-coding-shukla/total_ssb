import { useState } from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaRedo,
  FaTrophy,
} from "react-icons/fa";

const themeMap = {
  army: {
    button: "bg-green-600 hover:bg-green-500",
    accent: "text-green-400",
    badge: "bg-green-500/20 text-green-300",
  },
  navy: {
    button: "bg-blue-600 hover:bg-blue-500",
    accent: "text-blue-400",
    badge: "bg-blue-500/20 text-blue-300",
  },
  airforce: {
    button: "bg-sky-600 hover:bg-sky-500",
    accent: "text-sky-400",
    badge: "bg-sky-500/20 text-sky-300",
  },
};

const RankQuiz = ({
  questions = [],
  theme = "army",
}) => {

  const styles = themeMap[theme];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);

  if (!questions.length) {
    return (
      <section className="my-24 text-center">
        <h2 className="text-3xl font-bold text-white">
          Quiz Coming Soon
        </h2>
      </section>
    );
  }

  const question = questions[current];

  const selectAnswer = (option) => {
    if (selected !== null) return;

    setSelected(option);

    if (option === question.answer) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (current === questions.length - 1) {
      setFinished(true);
      return;
    }

    setCurrent((prev) => prev + 1);
    setSelected(null);
  };

  const restart = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <section className="my-24">

        <div className="mx-auto max-w-3xl rounded-3xl bg-slate-900 border border-slate-700 p-10 text-center">

          <FaTrophy className="mx-auto text-6xl text-yellow-400" />

          <h2 className="mt-6 text-4xl font-bold text-white">
            Quiz Completed
          </h2>

          <p className="mt-4 text-slate-300 text-xl">
            Score: {score} / {questions.length}
          </p>

          <div className="mt-8 h-4 rounded-full bg-slate-800 overflow-hidden">
            <div
              style={{ width: `${percentage}%` }}
              className="h-full bg-yellow-400 transition-all duration-500"
            />
          </div>

          <p className="mt-6 text-slate-400">
            {percentage >= 80
              ? "Excellent! You have a strong understanding of the rank structure."
              : percentage >= 60
              ? "Good job! A little more revision will make you confident."
              : "Keep practicing. Revision of ranks and insignia will help."}
          </p>

          <button
            onClick={restart}
            className={`mt-10 inline-flex items-center gap-2 rounded-xl px-8 py-3 text-white font-semibold transition ${styles.button}`}
          >
            <FaRedo />
            Restart Quiz
          </button>

        </div>

      </section>
    );
  }

  return (

    <section className="my-24">

      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-700 bg-slate-900 p-8">

        <div className="flex items-center justify-between">

          <span className={`rounded-full px-4 py-2 text-sm font-semibold ${styles.badge}`}>
            Question {current + 1} / {questions.length}
          </span>

          <span className={styles.accent}>
            Score: {score}
          </span>

        </div>

        <h2 className="mt-8 text-3xl font-bold text-white">
          {question.question}
        </h2>

        <div className="mt-8 space-y-4">

          {question.options.map((option, index) => {

            const isCorrect = option === question.answer;
            const isSelected = selected === option;

            return (

              <button
                key={index}
                disabled={selected !== null}
                onClick={() => selectAnswer(option)}
                className={`
                  w-full
                  rounded-2xl
                  border
                  border-slate-700
                  px-6
                  py-4
                  text-left
                  transition
                  ${
                    selected === null
                      ? "hover:bg-slate-800"
                      : isCorrect
                      ? "bg-green-600 border-green-500"
                      : isSelected
                      ? "bg-red-600 border-red-500"
                      : "bg-slate-900"
                  }
                `}
              >
                {option}
              </button>

            );

          })}

        </div>

        {selected && (

          <div className="mt-8 rounded-2xl bg-slate-950 border border-slate-700 p-6">

            <div className="flex items-center gap-3">

              {selected === question.answer ? (
                <FaCheckCircle className="text-green-400 text-xl" />
              ) : (
                <FaTimesCircle className="text-red-400 text-xl" />
              )}

              <h3 className="text-xl font-bold text-white">
                {selected === question.answer
                  ? "Correct Answer"
                  : "Incorrect Answer"}
              </h3>

            </div>

            <p className="mt-4 text-slate-300">
              {question.explanation}
            </p>

            <button
              onClick={nextQuestion}
              className={`mt-8 rounded-xl px-8 py-3 text-white font-semibold transition ${styles.button}`}
            >
              {current === questions.length - 1
                ? "Finish Quiz"
                : "Next Question"}
            </button>

          </div>

        )}

      </div>

    </section>

  );

};

export default RankQuiz;