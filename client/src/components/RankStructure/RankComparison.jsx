const themeMap = {
  army: {
    heading: "text-green-400",
    border: "border-green-500/20",
  },

  navy: {
    heading: "text-blue-400",
    border: "border-blue-500/20",
  },

  airforce: {
    heading: "text-sky-400",
    border: "border-sky-500/20",
  },
};

const ServiceCard = ({
  title,
  color,
  rank,
}) => (

  <div
    className="
      rounded-2xl
      bg-slate-900
      border
      border-slate-700
      p-5
      transition
      duration-300
      hover:-translate-y-1
      hover:border-yellow-400
    "
  >

    <div className={`text-sm font-bold ${color}`}>
      {title}
    </div>

    <div className="mt-4 flex justify-center">

      <img
        src={rank.image}
        alt={rank.rank}
        className="
          h-20
          object-contain
        "
      />

    </div>

    <h4
      className="
        mt-5
        text-center
        text-lg
        font-bold
        text-white
      "
    >
      {rank.rank}
    </h4>

  </div>

);

const RankComparison = ({
  data = [],
  theme = "army",
}) => {

  const styles = themeMap[theme];

  return (

    <section className="my-24">

      {/* Heading */}

      <div className="text-center mb-14">

        <h2
          className={`
            text-5xl
            font-bold
            ${styles.heading}
          `}
        >
          Equivalent Rank Comparison
        </h2>

        <p className="mt-4 text-slate-400">

          Compare equivalent ranks of the
          Indian Army, Indian Navy and
          Indian Air Force.

        </p>

      </div>

      {/* Comparison */}

      <div className="space-y-8">

        {data.map((row) => (

          <div
            key={row.id}
            className={`
              rounded-3xl
              border
              ${styles.border}
              bg-slate-950
              p-8
            `}
          >

            {/* Category */}

            <div className="mb-8 text-center">

              <span
                className="
                  rounded-full
                  bg-yellow-500/20
                  px-5
                  py-2
                  text-yellow-300
                  font-semibold
                "
              >
                {row.category}
              </span>

            </div>

            {/* Services */}

            <div
              className="
                grid
                gap-6
                md:grid-cols-3
              "
            >

              <ServiceCard
                title="Indian Army"
                color="text-green-400"
                rank={row.army}
              />

              <ServiceCard
                title="Indian Navy"
                color="text-blue-400"
                rank={row.navy}
              />

              <ServiceCard
                title="Indian Air Force"
                color="text-sky-400"
                rank={row.airForce}
              />

            </div>

          </div>

        ))}

      </div>

    </section>

  );

};

export default RankComparison;