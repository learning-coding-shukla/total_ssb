import { FaSearch, FaTimesCircle } from "react-icons/fa";

const themeMap = {
  army: {
    border: "focus:border-green-500",
    icon: "text-green-400",
    badge: "bg-green-500/20 text-green-300",
    button: "hover:text-green-400",
  },

  navy: {
    border: "focus:border-blue-500",
    icon: "text-blue-400",
    badge: "bg-blue-500/20 text-blue-300",
    button: "hover:text-blue-400",
  },

  airforce: {
    border: "focus:border-sky-500",
    icon: "text-sky-400",
    badge: "bg-sky-500/20 text-sky-300",
    button: "hover:text-sky-400",
  },
};

const RankSearch = ({
  value,
  onChange,
  totalRanks,
  filteredRanks,
  theme = "army",
}) => {

  const styles = themeMap[theme];

  return (

    <section className="mb-16">

      <div
        className="
          rounded-3xl
          border
          border-slate-700
          bg-slate-900
          p-6
          shadow-xl
        "
      >

        {/* Heading */}

        <div className="mb-6">

          <h2 className="text-3xl font-bold text-white">
            Search Ranks
          </h2>

          <p className="mt-2 text-slate-400">
            Search by rank, abbreviation, command,
            promotion, responsibility or equivalent rank.
          </p>

        </div>

        {/* Search Box */}

        <div className="relative">

          <FaSearch
            className={`
              absolute
              left-5
              top-1/2
              -translate-y-1/2
              text-xl
              ${styles.icon}
            `}
          />

          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search rank..."
            className={`
              w-full
              rounded-2xl
              border
              border-slate-700
              bg-slate-950
              py-4
              pl-14
              pr-14
              text-white
              outline-none
              transition
              ${styles.border}
            `}
          />

          {value && (

            <button
              onClick={() => onChange("")}
              className={`
                absolute
                right-5
                top-1/2
                -translate-y-1/2
                text-slate-400
                transition
                ${styles.button}
              `}
            >
              <FaTimesCircle className="text-xl" />
            </button>

          )}

        </div>

        {/* Statistics */}

        <div className="mt-6 flex flex-wrap gap-4">

          <span
            className={`
              rounded-full
              px-4
              py-2
              text-sm
              font-semibold
              ${styles.badge}
            `}
          >
            Total Ranks : {totalRanks}
          </span>

          <span
            className="
              rounded-full
              bg-yellow-500/20
              px-4
              py-2
              text-sm
              font-semibold
              text-yellow-300
            "
          >
            Results : {filteredRanks}
          </span>

        </div>

      </div>

    </section>

  );

};

export default RankSearch;