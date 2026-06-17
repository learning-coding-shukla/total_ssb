import RankCard from "./RankCard";

const themeMap = {
  army: {
    line: "bg-green-500",
    badge: "bg-green-500/20 text-green-300",
  },

  navy: {
    line: "bg-blue-500",
    badge: "bg-blue-500/20 text-blue-300",
  },

  airforce: {
    line: "bg-sky-500",
    badge: "bg-sky-500/20 text-sky-300",
  },
};

const sectionIds = {
  "Commissioned Officers": "officers",
  "Junior Commissioned Officers": "jco",
  "Senior Sailors": "jco",
  "Warrant Officers": "jco",
  "Other Ranks": "other",
  "Sailors": "other",
  "Airmen": "other",
};

const RankGrid = ({
  title,
  ranks = [],
  theme = "army",
  onView,
}) => {

  if (!ranks.length) {
    return null;
  }

  const styles = themeMap[theme];

  return (

    <section
      id={sectionIds[title]}
      className="my-20 scroll-mt-28"
    >

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10">

        <div>

          <h2 className="text-4xl font-bold text-white">

            {title}

          </h2>

          <div
            className={`
              mt-3
              h-1
              w-28
              rounded-full
              ${styles.line}
            `}
          />

        </div>

        <span
          className={`
            mt-5
            lg:mt-0
            self-start
            rounded-full
            px-4
            py-2
            text-sm
            font-semibold
            ${styles.badge}
          `}
        >
          {ranks.length} Rank{ranks.length > 1 ? "s" : ""}
        </span>

      </div>

      {/* GRID */}

      <div
        className="
          grid
          gap-8
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          2xl:grid-cols-4
        "
      >

        {ranks.map((rank) => (

          <div
            key={rank.id}
            className="
              animate-fadeIn
            "
          >

            <RankCard
              rank={rank}
              theme={theme}
              onView={onView}
            />

          </div>

        ))}

      </div>

    </section>

  );

};

export default RankGrid;