import { FaArrowUp } from "react-icons/fa";

const themeMap = {
  army: {
    line: "bg-green-500",
    dot: "bg-green-500",
    border: "border-green-500/30",
    button: "bg-green-600 hover:bg-green-500",
  },

  navy: {
    line: "bg-blue-500",
    dot: "bg-blue-500",
    border: "border-blue-500/30",
    button: "bg-blue-600 hover:bg-blue-500",
  },

  airforce: {
    line: "bg-sky-500",
    dot: "bg-sky-500",
    border: "border-sky-500/30",
    button: "bg-sky-600 hover:bg-sky-500",
  },
};

const RankTimeline = ({
  ranks = [],
  theme = "army",
  onView,
}) => {

  const styles = themeMap[theme];

  return (

    <section className="my-24">

      {/* Heading */}

      <div className="mb-12 text-center">

        <h2 className="text-5xl font-bold text-white">

          Promotion Timeline

        </h2>

        <p className="mt-4 text-slate-400">

          Career progression of commissioned officers.

        </p>

      </div>

      {/* Timeline */}

      <div className="relative">

        {/* Vertical Line */}

        <div
          className={`
            absolute
            left-8
            top-0
            bottom-0
            w-1
            rounded-full
            ${styles.line}
          `}
        />

        <div className="space-y-12">

          {ranks.map((rank, index) => (

            <div
              key={rank.id}
              className="
                relative
                flex
                gap-8
                items-start
              "
            >

              {/* Dot */}

              <div
                className={`
                  relative
                  z-10
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  border-4
                  border-slate-950
                  ${styles.dot}
                  shadow-xl
                `}
              >

                {index + 1}

              </div>

              {/* Card */}

              <div
                className={`
                  flex-1
                  rounded-3xl
                  border
                  ${styles.border}
                  bg-slate-900
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                `}
              >

                <div className="grid gap-6 lg:grid-cols-[150px_1fr]">

                  {/* Image */}

                  <div className="flex justify-center">

                    <img
                      src={rank.image}
                      alt={rank.rank}
                      className="
                        h-32
                        object-contain
                      "
                    />

                  </div>

                  {/* Content */}

                  <div>

                    <h3 className="text-3xl font-bold text-white">

                      {rank.rank}

                    </h3>

                    <p className="mt-2 text-slate-400">

                      {rank.description}

                    </p>

                    <div className="mt-5 grid gap-4 md:grid-cols-2">

                      <div>

                        <p className="text-sm uppercase text-slate-500">

                          Command

                        </p>

                        <p className="text-white">

                          {rank.command || "Not Applicable"}

                        </p>

                      </div>

                      <div>

                        <p className="text-sm uppercase text-slate-500">

                          Next Promotion

                        </p>

                        <p className="text-yellow-300">

                          {rank.promotion || "Highest Rank"}

                        </p>

                      </div>

                    </div>

                    <div className="mt-6 flex flex-wrap gap-4">

                      <button
                        onClick={() => onView(rank)}
                        className={`
                          rounded-xl
                          px-6
                          py-3
                          font-semibold
                          text-white
                          transition
                          ${styles.button}
                        `}
                      >
                        View Details
                      </button>

                      {index !== ranks.length - 1 && (

                        <div className="flex items-center gap-2 text-yellow-400">

                          <FaArrowUp />

                          <span>

                            Promotion Path

                          </span>

                        </div>

                      )}

                    </div>

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

export default RankTimeline;