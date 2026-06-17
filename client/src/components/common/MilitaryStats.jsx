const MilitaryStats = ({ theme, stats }) => {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <span
            className={`
              inline-flex
              items-center
              gap-2
              px-5
              py-2
              rounded-full
              font-semibold
              ${theme.badge}
            `}
          >
            📊 Service Statistics
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">

            Strength at a Glance

          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto leading-8">

            Key numbers that reflect the strength,
            heritage and operational capability of the service.

          </p>

        </div>

        {/* Cards */}

        <div
          className="
            grid
            gap-8
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-5
          "
        >
          {stats.map((item, index) => (

            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-8
                text-center
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-white/20
                hover:shadow-2xl
              "
            >
              {/* Glow */}

              <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Emoji */}

              <div className="relative text-5xl mb-5">

                {item.icon}

              </div>

              {/* Number */}

              <h3
                className={`
                  relative
                  text-5xl
                  font-black
                  ${theme.stat}
                `}
              >
                {item.value}
              </h3>

              {/* Label */}

              <p
                className="
                  relative
                  mt-4
                  text-slate-300
                  font-medium
                  text-lg
                "
              >
                {item.label}
              </p>

              {/* Bottom Line */}

              <div
                className="
                  mt-6
                  mx-auto
                  h-1
                  w-16
                  rounded-full
                  bg-yellow-400
                  transition-all
                  duration-300
                  group-hover:w-24
                "
              />

            </div>

          ))}
        </div>

      </div>
    </section>
  );
};

export default MilitaryStats;