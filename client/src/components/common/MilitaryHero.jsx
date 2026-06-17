import MilitaryButton from "./MilitaryButton";

const MilitaryHero = ({
  theme,
  title,
  motto,
  description,
  stats = [],
  primaryAction,
  secondaryAction,
}) => {
  return (
    <section
      className={`
        relative
        overflow-hidden
        bg-gradient-to-br
        ${theme.heroGradient}
        min-h-[90vh]
        flex
        items-center
      `}
    >
      {/* Background Glow */}
      <div className="absolute inset-0">

        <div className="absolute top-20 left-16 w-72 h-72 bg-white/5 rounded-full blur-[120px]" />

        <div className="absolute bottom-16 right-20 w-96 h-96 bg-yellow-400/10 rounded-full blur-[150px]" />

      </div>

      {/* Grid Pattern */}
      <div
        className="
        absolute
        inset-0
        opacity-10
        bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)]
        bg-[length:40px_40px]
        "
      />

      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        py-24
        grid
        lg:grid-cols-2
        gap-16
        items-center
        "
      >
        {/* Left Content */}
        <div>

          {/* Badge */}

          <div
            className={`
              inline-flex
              items-center
              gap-3
              px-5
              py-2
              rounded-full
              mb-8
              ${theme.badge}
            `}
          >
            <span className="text-2xl">
              {theme.emoji}
            </span>

            <span className="font-semibold tracking-wide">
              DEFEND • SERVE • LEAD
            </span>

          </div>

          {/* Title */}

          <h1
            className="
            text-5xl
            md:text-7xl
            font-black
            text-white
            leading-tight
            "
          >
            {title}
          </h1>

          {/* Motto */}

          <p
            className="
            mt-5
            text-3xl
            font-semibold
            text-yellow-300
            italic
            "
          >
            "{motto}"
          </p>

          {/* Description */}

          <p
            className="
            mt-8
            text-lg
            md:text-xl
            text-slate-300
            leading-9
            max-w-2xl
            "
          >
            {description}
          </p>

          {/* Buttons */}

          <div
            className="
            mt-10
            flex
            flex-wrap
            gap-5
            "
          >
            <MilitaryButton
              theme={theme}
              icon="🎯"
              onClick={primaryAction?.onClick}
            >
              {primaryAction?.label || "Explore"}
            </MilitaryButton>

            <MilitaryButton
              theme={theme}
              variant="secondary"
              icon="📚"
              onClick={secondaryAction?.onClick}
            >
              {secondaryAction?.label || "Learn More"}
            </MilitaryButton>
          </div>

        </div>

        {/* Right Side Stats */}

        <div
          className="
          grid
          grid-cols-2
          gap-6
          "
        >
          {stats.map((item, index) => (

            <div
              key={index}
              className="
              rounded-3xl
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              p-8
              hover:scale-105
              hover:border-white/20
              transition-all
              duration-300
              "
            >
              <div className="text-5xl mb-4">
                {item.icon}
              </div>

              <h2
                className={`
                  text-4xl
                  font-black
                  ${theme.stat}
                `}
              >
                {item.value}
              </h2>

              <p
                className="
                mt-3
                text-slate-300
                text-lg
                "
              >
                {item.label}
              </p>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default MilitaryHero;