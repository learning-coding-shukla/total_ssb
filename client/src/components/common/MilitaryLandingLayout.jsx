import MilitaryHero from "./MilitaryHero";
import MilitaryStats from "./MilitaryStats";
import MilitarySection from "./MilitarySection";
import MilitaryCard from "./MilitaryCard";
import MilitaryQuote from "./MilitaryQuote";

const MilitaryLandingLayout = ({
  theme,

  hero,

  stats,

  sections,

  quote,
}) => {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* ================= HERO ================= */}

      <MilitaryHero
        theme={theme}
        title={hero.title}
        motto={hero.motto}
        description={hero.description}
        stats={hero.stats}
        primaryAction={hero.primaryAction}
        secondaryAction={hero.secondaryAction}
      />

      {/* ================= STATS ================= */}

      <MilitaryStats
        theme={theme}
        stats={stats}
      />

      {/* ================= EXPLORE ================= */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <MilitarySection
          theme={theme}
          emoji="⚔️"
          title="Explore"
          subtitle="Explore every aspect of the service through beautifully designed learning modules."
        />

        <div
          className="
          mt-14
          grid
          gap-8
          md:grid-cols-2
          xl:grid-cols-3
          "
        >
          {sections.map((item) => (

            <MilitaryCard
              key={item.title}
              theme={theme}
              emoji={item.emoji}
              title={item.title}
              description={item.description}
              color={item.color}
              onClick={item.onClick}
            />

          ))}
        </div>

      </section>

      {/* ================= QUOTE ================= */}

      <MilitaryQuote
        theme={theme}
        quote={quote.quote}
        author={quote.author}
        designation={quote.designation}
        emoji={quote.emoji}
      />

    </main>
  );
};

export default MilitaryLandingLayout;