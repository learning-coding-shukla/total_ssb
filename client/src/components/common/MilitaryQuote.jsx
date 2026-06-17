import { FaQuoteLeft } from "react-icons/fa";

const MilitaryQuote = ({
  theme,
  quote,
  author,
  designation,
  emoji = "🇮🇳",
}) => {
  return (
    <section className="relative py-24">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/5 blur-[150px]" />

      </div>

      <div className="relative max-w-5xl mx-auto px-6">

        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-white/5
            backdrop-blur-2xl
            shadow-2xl
            p-12
            md:p-16
          "
        >

          {/* Decorative Glow */}

          <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-white/5 blur-3xl" />

          {/* Quote Icon */}

          <div className="flex justify-center">

            <div
              className={`
                w-20
                h-20
                rounded-full
                flex
                items-center
                justify-center
                text-3xl
                ${theme.badge}
              `}
            >
              <FaQuoteLeft />
            </div>

          </div>

          {/* Emoji */}

          <div className="text-center text-5xl mt-8">

            {emoji}

          </div>

          {/* Quote */}

          <h2
            className="
              mt-10
              text-center
              text-2xl
              md:text-4xl
              font-bold
              italic
              leading-relaxed
              text-white
            "
          >
            “{quote}”
          </h2>

          {/* Divider */}

          <div className="flex justify-center mt-10">

            <div className="w-24 h-1 rounded-full bg-yellow-400" />

          </div>

          {/* Author */}

          <div className="mt-10 text-center">

            <h3
              className={`
                text-2xl
                font-bold
                ${theme.stat}
              `}
            >
              {author}
            </h3>

            <p className="mt-2 text-slate-400 text-lg">

              {designation}

            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default MilitaryQuote;