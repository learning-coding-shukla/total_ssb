import {
  FaArrowUp,
  FaInfoCircle,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

const themeMap = {
  army: {
    accent: "text-green-400",
    badge: "bg-green-500/20 text-green-300",
    button: "bg-green-600 hover:bg-green-500",
    border: "hover:border-green-500",
    shadow: "hover:shadow-green-500/20",
  },

  navy: {
    accent: "text-blue-400",
    badge: "bg-blue-500/20 text-blue-300",
    button: "bg-blue-600 hover:bg-blue-500",
    border: "hover:border-blue-500",
    shadow: "hover:shadow-blue-500/20",
  },

  airforce: {
    accent: "text-sky-400",
    badge: "bg-sky-500/20 text-sky-300",
    button: "bg-sky-600 hover:bg-sky-500",
    border: "hover:border-sky-500",
    shadow: "hover:shadow-sky-500/20",
  },
};

const RankCard = ({
  rank,
  theme = "army",
  onView,
}) => {

  const styles = themeMap[theme];

  return (

    <div
      className={`
        group
        flex
        flex-col
        h-full
        rounded-3xl
        overflow-hidden
        bg-slate-900
        border
        border-slate-700
        transition-all
        duration-300
        hover:-translate-y-2
        hover:scale-[1.02]
        ${styles.border}
        hover:shadow-2xl
        ${styles.shadow}
      `}
    >

      {/* IMAGE */}

      <div className="relative bg-slate-950 h-52 flex items-center justify-center overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />

       <div className="flex justify-center items-center h-48 bg-slate-900">
  <img
    src={rank.image}
    alt={rank.rank}
    className="max-h-36 max-w-full object-contain transition duration-300 group-hover:scale-110"
  />
</div>

      </div>

      {/* CONTENT */}

      <div className="flex flex-col flex-1 p-6">

        {/* TYPE */}

        <span
          className={`
            inline-flex
            self-start
            px-3
            py-1
            rounded-full
            text-xs
            font-semibold
            ${styles.badge}
          `}
        >
          {rank.type}
        </span>

        {/* TITLE */}

        <h2 className="mt-4 text-2xl font-bold text-white">

          {rank.rank}

        </h2>

        <p className="text-slate-400">

          {rank.abbreviation}

        </p>

        {/* DESCRIPTION */}

        <p className="mt-4 text-sm text-slate-300 min-h-[60px]">

          {rank.description || "No description available."}

        </p>

        {/* RESPONSIBILITY */}

        <div className="mt-5 flex items-start gap-3">

          <FaShieldAlt className={`${styles.accent} mt-1`} />

          <div>

            <p className="text-xs text-slate-400 uppercase">

              Responsibility

            </p>

            <p className="text-sm text-white">

              {rank.responsibility || "Not Available"}

            </p>

          </div>

        </div>

        {/* COMMAND */}

        <div className="mt-4 flex items-start gap-3">

          <FaUsers className={`${styles.accent} mt-1`} />

          <div>

            <p className="text-xs text-slate-400 uppercase">

              Command

            </p>

            <p className="text-sm text-white">

              {rank.command || "Not Applicable"}

            </p>

          </div>

        </div>

        {/* PROMOTION */}

        <div className="mt-4 flex items-start gap-3">

          <FaArrowUp className="text-yellow-400 mt-1" />

          <div>

            <p className="text-xs text-slate-400 uppercase">

              Promotion

            </p>

            <p className="text-sm font-semibold text-yellow-300">

              {rank.promotion || "Highest Rank"}

            </p>

          </div>

        </div>

        {/* EQUIVALENT */}

        <div className="mt-6">

          <h3 className="text-sm font-semibold text-slate-300 mb-3">

            Equivalent Ranks

          </h3>

          <div className="grid grid-cols-3 gap-2 text-center">

            <div className="rounded-xl bg-green-500/10 p-2">
              <p className="text-xs text-green-400">Army</p>
              <p className="text-xs text-white mt-1">
                {rank.equivalent?.army || "-"}
              </p>
            </div>

            <div className="rounded-xl bg-blue-500/10 p-2">
              <p className="text-xs text-blue-400">Navy</p>
              <p className="text-xs text-white mt-1">
                {rank.equivalent?.navy || "-"}
              </p>
            </div>

            <div className="rounded-xl bg-sky-500/10 p-2">
              <p className="text-xs text-sky-400">Air Force</p>
              <p className="text-xs text-white mt-1">
                {rank.equivalent?.airForce || "-"}
              </p>
            </div>

          </div>

        </div>

        {/* INFO CHIPS */}

        <div className="mt-6 flex flex-wrap gap-2">

          {rank.salaryLevel && (
            <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
              {rank.salaryLevel}
            </span>
          )}

          {rank.retirementAge && (
            <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
              {rank.retirementAge}
            </span>
          )}

        </div>

        {/* BUTTON */}

        <button
          onClick={() => onView(rank)}
          className={`
            mt-auto
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            py-3
            font-semibold
            text-white
            transition
            ${styles.button}
          `}
        >

          <FaInfoCircle />

          View Details

        </button>

      </div>

    </div>

  );

};

export default RankCard;