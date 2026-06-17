import {
  FaTimes,
  FaArrowUp,
  FaShieldAlt,
  FaUsers,
  FaGraduationCap,
  FaMoneyBillWave,
  FaBirthdayCake,
  FaMedal,
} from "react-icons/fa";

const themeMap = {
  army: {
    button: "bg-green-600 hover:bg-green-500",
    badge: "bg-green-500/20 text-green-300",
  },

  navy: {
    button: "bg-blue-600 hover:bg-blue-500",
    badge: "bg-blue-500/20 text-blue-300",
  },

  airforce: {
    button: "bg-sky-600 hover:bg-sky-500",
    badge: "bg-sky-500/20 text-sky-300",
  },
};

const InfoCard = ({ icon, title, value }) => (
  <div className="rounded-2xl bg-slate-900 border border-slate-700 p-4">
    <div className="flex items-center gap-3">
      <div className="text-yellow-400 text-lg">
        {icon}
      </div>

      <div>
        <p className="text-xs uppercase tracking-wide text-slate-400">
          {title}
        </p>

        <p className="mt-1 text-white font-medium">
          {value || "Not Available"}
        </p>
      </div>
    </div>
  </div>
);

const RankDetailsModal = ({
  rank,
  theme = "army",
  onClose,
}) => {

  if (!rank) return null;

  const styles = themeMap[theme];

  return (

    <div
      className="
        fixed
        inset-0
        z-[999]
        flex
        items-center
        justify-center
        bg-black/80
        backdrop-blur-md
        p-4
      "
    >

      <div
        className="
          relative
          max-h-[90vh]
          w-full
          max-w-5xl
          overflow-y-auto
          rounded-3xl
          border
          border-slate-700
          bg-slate-950
          shadow-2xl
        "
      >

        {/* Close Button */}

        <button
          onClick={onClose}
          className="
            absolute
            right-5
            top-5
            rounded-full
            bg-slate-800
            p-3
            text-white
            transition
            hover:bg-red-600
          "
        >
          <FaTimes />
        </button>

        <div className="grid lg:grid-cols-2">

          {/* LEFT */}

          <div className="flex flex-col items-center justify-center border-b border-slate-700 bg-slate-900 p-10 lg:border-b-0 lg:border-r">

            <img
              src={rank.image}
              alt={rank.rank}
              className="h-64 object-contain"
            />

            <span
              className={`mt-6 rounded-full px-4 py-2 text-sm font-semibold ${styles.badge}`}
            >
              {rank.type}
            </span>

            <h2 className="mt-5 text-center text-4xl font-bold text-white">
              {rank.rank}
            </h2>

            <p className="mt-2 text-lg text-slate-400">
              {rank.abbreviation}
            </p>

          </div>

          {/* RIGHT */}

          <div className="p-8">

            <h3 className="text-2xl font-bold text-white">
              Rank Overview
            </h3>

            <p className="mt-4 leading-8 text-slate-300">
              {rank.description}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">

              <InfoCard
                icon={<FaShieldAlt />}
                title="Responsibility"
                value={rank.responsibility}
              />

              <InfoCard
                icon={<FaUsers />}
                title="Command"
                value={rank.command}
              />

              <InfoCard
                icon={<FaArrowUp />}
                title="Promotion"
                value={rank.promotion || "Highest Rank"}
              />

              <InfoCard
                icon={<FaGraduationCap />}
                title="Academy"
                value={rank.academy || "Not Applicable"}
              />

              <InfoCard
                icon={<FaMoneyBillWave />}
                title="Salary Level"
                value={rank.salaryLevel}
              />

              <InfoCard
                icon={<FaBirthdayCake />}
                title="Retirement Age"
                value={rank.retirementAge}
              />

            </div>

            {/* Badge Description */}

            <div className="mt-10 rounded-2xl border border-slate-700 bg-slate-900 p-6">

              <h4 className="flex items-center gap-2 text-xl font-bold text-white">
                <FaMedal className="text-yellow-400" />
                Insignia Description
              </h4>

              <p className="mt-4 leading-7 text-slate-300">
                {rank.badgeDescription}
              </p>

            </div>

            {/* Equivalent */}

            <div className="mt-10">

              <h4 className="mb-5 text-xl font-bold text-white">
                Equivalent Ranks
              </h4>

              <div className="grid gap-4 md:grid-cols-3">

                <div className="rounded-2xl bg-green-500/10 p-5 text-center">
                  <h5 className="font-semibold text-green-400">
                    Army
                  </h5>

                  <p className="mt-2 text-white">
                    {rank.equivalent?.army}
                  </p>
                </div>

                <div className="rounded-2xl bg-blue-500/10 p-5 text-center">
                  <h5 className="font-semibold text-blue-400">
                    Navy
                  </h5>

                  <p className="mt-2 text-white">
                    {rank.equivalent?.navy}
                  </p>
                </div>

                <div className="rounded-2xl bg-sky-500/10 p-5 text-center">
                  <h5 className="font-semibold text-sky-400">
                    Air Force
                  </h5>

                  <p className="mt-2 text-white">
                    {rank.equivalent?.airForce}
                  </p>
                </div>

              </div>

            </div>

            {/* Footer */}

            <button
              onClick={onClose}
              className={`
                mt-10
                w-full
                rounded-xl
                py-4
                text-lg
                font-semibold
                text-white
                transition
                ${styles.button}
              `}
            >
              Close
            </button>

          </div>

        </div>

      </div>

    </div>

  );

};

export default RankDetailsModal;