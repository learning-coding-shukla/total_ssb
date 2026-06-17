import {
  FaLightbulb,
  FaStar,
  FaShieldAlt,
  FaAward,
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

const icons = [
  <FaLightbulb />,
  <FaStar />,
  <FaShieldAlt />,
  <FaAward />,
];

const RankFacts = ({
  facts = [],
  theme = "army",
}) => {

  const styles = themeMap[theme];

  return (

    <section className="my-24">

      {/* Heading */}

      <div className="text-center mb-14">

        <h2
          className={`text-5xl font-bold ${styles.heading}`}
        >
          Did You Know?
        </h2>

        <p className="mt-4 text-slate-400 max-w-3xl mx-auto">
          Interesting facts about the rank hierarchy,
          traditions, insignia and leadership within the
          Indian Armed Forces.
        </p>

      </div>

      {/* Facts Grid */}

      <div
        className="
          grid
          gap-8
          md:grid-cols-2
        "
      >

        {facts.map((fact, index) => (

          <div
            key={index}
            className={`
              rounded-3xl
              border
              ${styles.border}
              bg-slate-900
              p-8
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
            `}
          >

            {/* Icon */}

            <div
              className={`
                mb-6
                inline-flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                text-2xl
                ${styles.badge}
              `}
            >
              {icons[index % icons.length]}
            </div>

            {/* Fact Number */}

            <span className="text-sm font-semibold text-yellow-400">

              FACT #{String(index + 1).padStart(2, "0")}

            </span>

            {/* Content */}

            <p
              className="
                mt-4
                text-lg
                leading-8
                text-slate-300
              "
            >
             <h3>{fact.title}</h3>

{fact.description}
</p>
            

          </div>

        ))}

      </div>

      {/* Footer Note */}

      <div
        className="
          mt-12
          rounded-2xl
          border
          border-slate-700
          bg-slate-900
          p-6
        "
      >

        <h3 className="text-xl font-bold text-white">
          💡 Remember
        </h3>

        <p className="mt-3 text-slate-400 leading-7">
          Understanding the rank hierarchy is essential for
          NDA, CDS, AFCAT, CAPF and SSB interviews. Focus on
          the sequence of ranks, insignia, appointments and
          equivalent ranks across all three services.
        </p>

      </div>

    </section>

  );

};

export default RankFacts;