import {
  FaBuilding,
  FaUserTie,
  FaInfoCircle,
} from "react-icons/fa";

const themeMap = {
  army: {
    heading: "text-green-400",
    border: "border-green-500/20",
    badge: "bg-green-500/20 text-green-300",
  },

  navy: {
    heading: "text-blue-400",
    border: "border-blue-500/20",
    badge: "bg-blue-500/20 text-blue-300",
  },

  airforce: {
    heading: "text-sky-400",
    border: "border-sky-500/20",
    badge: "bg-sky-500/20 text-sky-300",
  },
};

const AppointmentTable = ({
  ranks = [],
  theme = "army",
}) => {

  const styles = themeMap[theme];

  return (

    <section className="my-24">

      <div className="text-center mb-14">

        <h2 className={`text-5xl font-bold ${styles.heading}`}>
          Important Military Appointments
        </h2>

        <p className="mt-4 text-slate-400 max-w-3xl mx-auto">
          Senior appointments are generally held by officers
          based on rank, experience, operational performance
          and selection.
        </p>

      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-700">

        {/* Header */}

        <div
          className="
            hidden
            md:grid
            grid-cols-12
            bg-slate-900
            border-b
            border-slate-700
            font-semibold
            text-slate-300
          "
        >

          <div className="col-span-4 p-5">
            Appointment
          </div>

          <div className="col-span-3 p-5">
            Typical Rank
          </div>

          <div className="col-span-5 p-5">
            Responsibility
          </div>

        </div>

        {/* Rows */}

        {ranks.map((rank) => (

          <div
            key={rank.id}
            className="
              grid
              md:grid-cols-12
              border-b
              border-slate-800
              bg-slate-950
              hover:bg-slate-900
              transition
            "
          >

            {/* Appointment */}

            <div className="md:col-span-4 p-5">

              <div className="flex items-center gap-3">

                <FaBuilding className="text-yellow-400" />

                <div>

                  <p className="text-white font-semibold">

                    {rank.command || "Field Appointment"}

                  </p>

                  <p className="text-xs text-slate-500 mt-1">
                    Command / Appointment
                  </p>

                </div>

              </div>

            </div>

            {/* Rank */}

            <div className="md:col-span-3 p-5">

              <span
                className={`
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  ${styles.badge}
                `}
              >

                <FaUserTie />

                {rank.rank}

              </span>

            </div>

            {/* Responsibility */}

            <div className="md:col-span-5 p-5">

              <div className="flex items-start gap-3">

                <FaInfoCircle className="text-yellow-400 mt-1" />

                <p className="text-slate-300 leading-7">

                  {rank.responsibility ||
                    "Responsible for operational leadership, command, administration and military decision making."}

                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* Note */}

      <div className="mt-8 rounded-2xl bg-slate-900 border border-slate-700 p-6">

        <h3 className="text-lg font-bold text-white">
          📌 Note
        </h3>

        <p className="mt-3 text-slate-400 leading-7">
          Military appointments vary according to service
          requirements. Officers of the same rank may hold
          different command responsibilities depending upon
          operational, staff or instructional assignments.
        </p>

      </div>

    </section>

  );

};

export default AppointmentTable;