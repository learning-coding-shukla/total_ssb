const MilitaryButton = ({
  children,
  icon,
  theme,
  variant = "primary",
  onClick,
  className = "",
}) => {
  const primary = `
    ${theme.button}
    shadow-lg
    hover:shadow-xl
    transition-all
    duration-300
    hover:-translate-y-1
  `;

  const secondary = `
    border
    border-white/20
    bg-white/5
    hover:bg-white/10
    text-white
    backdrop-blur-md
    transition-all
    duration-300
    hover:-translate-y-1
  `;

  return (
    <button
      onClick={onClick}
      className={`
        inline-flex
        items-center
        gap-2
        px-6
        py-3
        rounded-xl
        font-semibold
        text-base
        ${variant === "primary" ? primary : secondary}
        ${className}
      `}
    >
      {icon && (
        <span className="text-lg">
          {icon}
        </span>
      )}

      {children}
    </button>
  );
};

export default MilitaryButton;