import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const MilitaryCard = ({
  theme,
  emoji,
  title,
  description,
  color = "yellow",
  link,
  onClick,
}) => {
  const colorMap = {
    green:
      "from-green-500/20 to-green-900/10 border-green-500/30 hover:border-green-400",
    blue:
      "from-blue-500/20 to-blue-900/10 border-blue-500/30 hover:border-blue-400",
    sky:
      "from-sky-500/20 to-sky-900/10 border-sky-500/30 hover:border-sky-400",
    yellow:
      "from-yellow-500/20 to-yellow-900/10 border-yellow-500/30 hover:border-yellow-400",
    orange:
      "from-orange-500/20 to-orange-900/10 border-orange-500/30 hover:border-orange-400",
    red:
      "from-red-500/20 to-red-900/10 border-red-500/30 hover:border-red-400",
    purple:
      "from-purple-500/20 to-purple-900/10 border-purple-500/30 hover:border-purple-400",
    emerald:
      "from-emerald-500/20 to-emerald-900/10 border-emerald-500/30 hover:border-emerald-400",
  };

  const CardContent = (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        bg-gradient-to-br
        ${colorMap[color]}
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-3
        hover:shadow-2xl
        ${theme.glow}
      `}
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="relative p-8">
        {/* Emoji */}
        <div
          className="
            w-20
            h-20
            rounded-2xl
            bg-white/10
            flex
            items-center
            justify-center
            text-5xl
            mb-6
            group-hover:rotate-6
            transition-transform
            duration-300
          "
        >
          {emoji}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-4">
          {title}
        </h3>

        {/* Divider */}
        <div className="w-16 h-1 rounded-full bg-yellow-400 mb-5" />

        {/* Description */}
        <p className="text-slate-300 leading-8 min-h-[110px]">
          {description}
        </p>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between">
          <span className={`font-semibold ${theme.stat}`}>
            Explore Module
          </span>

          <FaArrowRight
            className="
              text-xl
              text-white
              transition-transform
              duration-300
              group-hover:translate-x-2
            "
          />
        </div>
      </div>
    </div>
  );

  // If a link is provided, navigate using React Router
  if (link) {
    return (
      <Link to={link} className="block">
        {CardContent}
      </Link>
    );
  }

  // Otherwise behave like a clickable card
  return (
    <div
      onClick={onClick}
      className="cursor-pointer"
    >
      {CardContent}
    </div>
  );
};

export default MilitaryCard;