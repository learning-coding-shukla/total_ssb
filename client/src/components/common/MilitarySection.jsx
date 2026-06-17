const MilitarySection = ({
  theme,
  emoji = "🛡️",
  title,
  subtitle,
  align = "center",
}) => {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div
      className={`
        flex
        flex-col
        ${alignment[align]}
        mb-14
      `}
    >
      {/* Badge */}

      <div
        className={`
          inline-flex
          items-center
          gap-3
          px-5
          py-2
          rounded-full
          font-semibold
          text-lg
          ${theme.badge}
        `}
      >
        <span className="text-2xl">
          {emoji}
        </span>

        <span>
          TOTAL SSB
        </span>
      </div>

      {/* Heading */}

      <h2
        className="
          mt-6
          text-4xl
          md:text-5xl
          font-black
          text-white
        "
      >
        {title}
      </h2>

      {/* Underline */}

      <div
        className="
          mt-5
          w-28
          h-1.5
          rounded-full
          bg-gradient-to-r
          from-yellow-400
          via-yellow-300
          to-yellow-500
        "
      />

      {/* Subtitle */}

      <p
        className="
          mt-6
          max-w-3xl
          text-slate-400
          leading-8
          text-lg
        "
      >
        {subtitle}
      </p>
    </div>
  );
};

export default MilitarySection;