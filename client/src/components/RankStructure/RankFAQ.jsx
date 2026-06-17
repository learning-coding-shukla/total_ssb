import { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaQuestionCircle,
} from "react-icons/fa";

const themeMap = {
  army: {
    heading: "text-green-400",
    border: "border-green-500/20",
    active: "bg-green-500/10",
  },

  navy: {
    heading: "text-blue-400",
    border: "border-blue-500/20",
    active: "bg-blue-500/10",
  },

  airforce: {
    heading: "text-sky-400",
    border: "border-sky-500/20",
    active: "bg-sky-500/10",
  },
};

const RankFAQ = ({
  faqs = [],
  theme = "army",
}) => {

  const [openIndex, setOpenIndex] = useState(0);

  const styles = themeMap[theme];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (

    <section className="my-24">

      {/* Heading */}

      <div className="text-center mb-14">

        <h2 className={`text-5xl font-bold ${styles.heading}`}>
          Frequently Asked Questions
        </h2>

        <p className="mt-4 text-slate-400 max-w-3xl mx-auto">
          Common doubts about rank hierarchy, promotions,
          insignia, appointments and military leadership.
        </p>

      </div>

      {/* Accordion */}

      <div className="space-y-5">

        {faqs.map((faq, index) => {

          const isOpen = openIndex === index;

          return (

            <div
              key={index}
              className={`
                rounded-2xl
                border
                ${styles.border}
                bg-slate-900
                overflow-hidden
                transition
              `}
            >

              {/* Question */}

              <button
                onClick={() => toggle(index)}
                className={`
                  w-full
                  flex
                  items-center
                  justify-between
                  gap-4
                  px-6
                  py-5
                  text-left
                  transition
                  ${isOpen ? styles.active : ""}
                `}
              >

                <div className="flex items-center gap-4">

                  <FaQuestionCircle className="text-yellow-400 text-xl" />

                  <span className="text-lg font-semibold text-white">
                    {faq.question}
                  </span>

                </div>

                {isOpen ? (
                  <FaChevronUp className="text-yellow-400" />
                ) : (
                  <FaChevronDown className="text-slate-400" />
                )}

              </button>

              {/* Answer */}

              <div
                className={`
                  transition-all
                  duration-300
                  ease-in-out
                  ${
                    isOpen
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }
                  overflow-hidden
                `}
              >

                <div className="px-6 pb-6 pt-2">

                  <p className="leading-8 text-slate-300">
                    {faq.answer}
                  </p>

                </div>

              </div>

            </div>

          );

        })}

      </div>

      {/* Footer */}

      <div className="mt-12 rounded-2xl border border-slate-700 bg-slate-900 p-6">

        <h3 className="text-xl font-bold text-white">
          📚 SSB Interview Tip
        </h3>

        <p className="mt-3 text-slate-400 leading-7">
          During the SSB interview, candidates are often asked
          about the hierarchy of ranks, insignia, appointments,
          and equivalent ranks of the three armed forces.
          Understanding these concepts reflects your military
          awareness and genuine interest in joining the Armed
          Forces.
        </p>

      </div>

    </section>

  );

};

export default RankFAQ;