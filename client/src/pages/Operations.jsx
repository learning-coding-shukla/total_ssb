import { Link } from "react-router-dom";

import MilitaryHero from "../components/common/MilitaryHero";
import MilitaryStats from "../components/common/MilitaryStats";
import MilitarySection from "../components/common/MilitarySection";
import MilitaryCard from "../components/common/MilitaryCard";
import MilitaryQuote from "../components/common/MilitaryQuote";
import militaryThemes from "../components/common/MilitaryTheme";

const theme = militaryThemes.army;

function Operations() {

  const hero = {

    title: "Indian Military Operations",

    motto: "Valour • Strategy • Victory",

    description:
      "Explore India's most significant military operations conducted by the Army, Navy and Air Force. Learn the objectives, planning, execution and strategic importance of every operation.",

    stats: [

      {
        icon: "⚔️",
        value: "6+",
        label: "Major Operations",
      },

      {
        icon: "🪖",
        value: "3",
        label: "Services",
      },

      {
        icon: "🎖️",
        value: "75+",
        label: "Years of Experience",
      },

      {
        icon: "🇮🇳",
        value: "100%",
        label: "Mission Success",
      },

    ],

    primaryAction: {
      label: "Explore Operations",
    },

    secondaryAction: {
      label: "Military History",
    },

  };

  const stats = [

    {
      icon: "⚔️",
      value: "6",
      label: "Operations",
    },

    {
      icon: "🪖",
      value: "Army",
      label: "Primary Force",
    },

    {
      icon: "⚓",
      value: "Navy",
      label: "Maritime Ops",
    },

    {
      icon: "✈️",
      value: "Air Force",
      label: "Air Support",
    },

    {
      icon: "🇮🇳",
      value: "Joint",
      label: "Operations",
    },

  ];

  const operations = [

    {
      emoji: "⚓",
      title: "Operation Trident",

      description:
        "Historic naval strike on Karachi Harbour during the 1971 Indo-Pak War.",

      color: "blue",

      link: "/trident",
    },

    {
      emoji: "🚢",
      title: "Operation Python",

      description:
        "Follow-up naval attack on Karachi strengthening India's naval dominance.",

      color: "sky",

      link: "/python",
    },

    {
      emoji: "🏔️",
      title: "Operation Meghdoot",

      description:
        "Capture of the Siachen Glacier ensuring India's strategic advantage.",

      color: "green",

      link: "/meghdoot",
    },

    {
      emoji: "✈️",
      title: "Operation Cactus",

      description:
        "Rapid Indian intervention in the Maldives preventing a coup attempt.",

      color: "purple",

      link: "/cactus",
    },

    {
      emoji: "🪖",
      title: "Operation Vijay",

      description:
        "Successful Indian military campaign during the Kargil War in 1999.",

      color: "orange",

      link: "/vijay",
    },

    {
      emoji: "🎯",
      title: "Operation Sindoor",

      description:
        "Recent strategic military operation highlighting India's precision capability.",

      color: "red",

      link: "/sindoor",
    },

  ];

  const quote = {

    emoji: "🇮🇳",

    quote:
      "Victory belongs to those who prepare, persevere and fight with courage.",

    author: "Indian Armed Forces",

    designation: "Nation First • Mission Always",

  };

  return (

    <main className="min-h-screen bg-slate-950 text-white">

      <MilitaryHero
        theme={theme}
        title={hero.title}
        motto={hero.motto}
        description={hero.description}
        stats={hero.stats}
        primaryAction={hero.primaryAction}
        secondaryAction={hero.secondaryAction}
      />

      <MilitaryStats
        theme={theme}
        stats={stats}
      />

      <section className="max-w-7xl mx-auto px-6 py-20">

        <MilitarySection
          theme={theme}
          emoji="⚔️"
          title="Major Indian Military Operations"
          subtitle="Study the planning, execution and significance of India's most important military operations."
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {operations.map((operation) => (

            <Link
              key={operation.title}
              to={operation.link}
            >
              <MilitaryCard
                theme={theme}
                emoji={operation.emoji}
                title={operation.title}
                description={operation.description}
                color={operation.color}
              />
            </Link>

          ))}

        </div>

      </section>

      <MilitaryQuote
        theme={theme}
        emoji={quote.emoji}
        quote={quote.quote}
        author={quote.author}
        designation={quote.designation}
      />

    </main>

  );

}

export default Operations;