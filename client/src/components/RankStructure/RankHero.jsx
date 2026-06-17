import {
  FaMedal,
  FaUsers,
  FaShieldAlt,
  FaArrowDown,
} from "react-icons/fa";

const themeMap = {
  army: {
    primary: "from-green-900/90",
    secondary: "to-green-700/60",
    badge: "bg-green-500/20 text-green-300 border-green-500/30",
    button: "bg-green-600 hover:bg-green-500",
    accent: "text-green-400",
  },

  navy: {
    primary: "from-blue-950/90",
    secondary: "to-blue-700/60",
    badge: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    button: "bg-blue-600 hover:bg-blue-500",
    accent: "text-blue-400",
  },

  airforce: {
    primary: "from-sky-950/90",
    secondary: "to-sky-700/60",
    badge: "bg-sky-500/20 text-sky-300 border-sky-500/30",
    button: "bg-sky-600 hover:bg-sky-500",
    accent: "text-sky-400",
  },
};

const StatCard = ({ icon, value, label }) => (
  <div
    className="
      rounded-2xl
      border
      border-white/10
      bg-white/10
      backdrop-blur-xl
      p-5
      text-center
      transition
      hover:-translate-y-1
      hover:border-yellow-400/50
    "
  >
    <div className="mb-3 flex justify-center text-3xl text-yellow-400">
      {icon}
    </div>

    <h3 className="text-3xl font-bold text-white">
      {value}
    </h3>

    <p className="mt-1 text-sm text-slate-300">
      {label}
    </p>
  </div>
);

const RankHero = ({
  title,
  subtitle,
  heroImage,
  service,
  officers,
  jco,
  other,
  total,
  theme = "army",
}) => {

  const styles = themeMap[theme];

  const scrollToRanks = () => {
    document
      .getElementById("officers")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (

    <section
      className="
        relative
        overflow-hidden
        min-h-[90vh]
        flex
        items-center
      "
    >

      {/* Background */}

      <img
        src={heroImage}
        alt={service}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/70" />

      {/* Gradient */}

      <div
        className={`
          absolute
          inset-0
          bg-gradient-to-r
          ${styles.primary}
          ${styles.secondary}
        `}
      />

      {/* Hero Content */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">

        {/* Badge */}

        <span
          className={`
            inline-flex
            items-center
            rounded-full
            border
            px-5
            py-2
            text-sm
            font-semibold
            ${styles.badge}
          `}
        >
          🇮🇳 {service}
        </span>

        {/* Heading */}

        <h1
          className="
            mt-8
            max-w-4xl
            text-5xl
            font-black
            leading-tight
            text-white
            md:text-7xl
          "
        >
          {title}
        </h1>

        {/* Subtitle */}

        <p
          className="
            mt-6
            max-w-3xl
            text-lg
            leading-8
            text-slate-200
          "
        >
          {subtitle}
        </p>

        {/* Buttons */}

        <div className="mt-10 flex flex-wrap gap-4">

          <button
            onClick={scrollToRanks}
            className={`
              rounded-xl
              px-8
              py-4
              font-semibold
              text-white
              transition
              ${styles.button}
            `}
          >
            Explore Ranks
          </button>

          <button
            onClick={() =>
              document
                .getElementById("comparison")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
            className="
              rounded-xl
              border
              border-white/20
              bg-white/10
              px-8
              py-4
              font-semibold
              text-white
              backdrop-blur-xl
              transition
              hover:bg-white/20
            "
          >
            Compare Ranks
          </button>

        </div>

        {/* Statistics */}

        <div
          className="
            mt-20
            grid
            gap-6
            md:grid-cols-2
            xl:grid-cols-4
          "
        >

          <StatCard
            icon={<FaMedal />}
            value={officers}
            label="Commissioned Officers"
          />

          <StatCard
            icon={<FaShieldAlt />}
            value={jco}
            label="JCO / Warrant Officers"
          />

          <StatCard
            icon={<FaUsers />}
            value={other}
            label="Other Ranks"
          />

          <StatCard
            icon={<FaArrowDown />}
            value={total}
            label="Total Ranks"
          />

        </div>

      </div>

    </section>

  );

};

export default RankHero;