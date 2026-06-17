import {
  FaArrowUp,
  FaClock,
  FaMedal,
} from "react-icons/fa";

const themeMap = {
  army: {
    accent: "bg-green-500",
    text: "text-green-400",
    border: "border-green-500/30",
  },

  navy: {
    accent: "bg-blue-500",
    text: "text-blue-400",
    border: "border-blue-500/30",
  },

  airforce: {
    accent: "bg-sky-500",
    text: "text-sky-400",
    border: "border-sky-500/30",
  },
};

const PromotionTimeline = ({
  ranks = [],
  theme = "army",
}) => {

  const styles = themeMap[theme];

  return (

    <section className="my-24">

      <div className="text-center mb-16">

        <h2 className="text-5xl font-bold text-white">

          Career Progression

        </h2>

        <p className="mt-4 text-slate-400 max-w-3xl mx-auto">

          A typical promotion pathway for commissioned officers.
          Promotions depend on vacancies, performance,
          courses and selection boards.

        </p>

      </div>

      <div className="relative">

        {/* Vertical Line */}

        <div
          className={`
            absolute
            left-6
            top-0
            bottom-0
            w-1
            rounded-full
            ${styles.accent}
          `}
        />

        <div className="space-y-10">

          {ranks.map((rank, index) => (

            <div
              key={rank.id}
              className="relative flex gap-8"
            >

              {/* Circle */}

              <div
                className={`
                  relative
                  z-10
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  text-white
                  font-bold
                  ${styles.accent}
                `}
              >

                {index + 1}

              </div>

              {/* Card */}

              <div
                className={`
                  flex-1
                  rounded-2xl
                  border
                  ${styles.border}
                  bg-slate-900
                  p-6
                  hover:shadow-xl
                  transition
                `}
              >

                <div className="flex flex-wrap items-center justify-between gap-4">

                  <div>

                    <h3 className="text-2xl font-bold text-white">

                      {rank.rank}

                    </h3>

                    <p className="mt-2 text-slate-400">

                      {rank.description ||
                        "Professional military leadership role."}

                    </p>

                  </div>

                  <span
                    className={`
                      rounded-full
                      px-4
                      py-2
                      text-sm
                      font-semibold
                      bg-slate-800
                      ${styles.text}
                    `}
                  >
                    Level {index + 1}
                  </span>

                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-3">

                  <div className="rounded-xl bg-slate-800 p-4">

                    <div className="flex items-center gap-2">

                      <FaMedal className="text-yellow-400" />

                      <span className="text-slate-400">

                        Rank

                      </span>

                    </div>

                    <p className="mt-2 text-white font-semibold">

                      {rank.rank}

                    </p>

                  </div>

                  <div className="rounded-xl bg-slate-800 p-4">

                    <div className="flex items-center gap-2">

                      <FaArrowUp className="text-green-400" />

                      <span className="text-slate-400">

                        Next Promotion

                      </span>

                    </div>

                    <p className="mt-2 text-white">

                      {rank.promotion || "Highest Rank"}

                    </p>

                  </div>

                  <div className="rounded-xl bg-slate-800 p-4">

                    <div className="flex items-center gap-2">

                      <FaClock className="text-blue-400" />

                      <span className="text-slate-400">

                        Command

                      </span>

                    </div>

                    <p className="mt-2 text-white">

                      {rank.command || "Strategic Appointment"}

                    </p>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

};

export default PromotionTimeline;