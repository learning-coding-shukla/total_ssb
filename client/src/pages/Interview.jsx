import { Link } from "react-router-dom";

import MilitaryHero from "../components/common/MilitaryHero";
import MilitaryStats from "../components/common/MilitaryStats";
import MilitarySection from "../components/common/MilitarySection";
import MilitaryCard from "../components/common/MilitaryCard";
import MilitaryQuote from "../components/common/MilitaryQuote";
import militaryThemes from "../components/common/MilitaryTheme";

const theme = militaryThemes.army;

function Interview() {
  const hero = {
    title: "SSB Interview",

    motto: "Confidence • Honesty • Personality",

    description:
      "Prepare for the Personal Interview with the most expected SSB Interview Questions, self-introduction practice, PIQ analysis, current affairs and officer-like personality development.",

    stats: [
      {
        icon: "🎤",
        value: "40+",
        label: "Expected Questions",
      },

      {
        icon: "🧠",
        value: "100+",
        label: "Interview Tips",
      },

      {
        icon: "📄",
        value: "1",
        label: "Question Bank",
      },

      {
        icon: "⭐",
        value: "100%",
        label: "SSB Focused",
      },
    ],

    primaryAction: {
      label: "Start Preparation",
    },

    secondaryAction: {
      label: "Interview Questions",
    },
  };

  const stats = [
    {
      icon: "🎤",
      value: "40+",
      label: "Questions",
    },

    {
      icon: "📋",
      value: "15+",
      label: "Interview Topics",
    },

    {
      icon: "🧠",
      value: "100+",
      label: "Tips",
    },

    {
      icon: "🎖️",
      value: "OLQs",
      label: "Officer Qualities",
    },

    {
      icon: "🇮🇳",
      value: "SSB",
      label: "Interview",
    },
  ];

  const sections = [
    {
      emoji: "🎤",
      title: "Interview Question Bank",
      description:
        "40 most expected Personal Interview questions asked in SSB with detailed guidance.",

      color: "green",

      link: "/interview-questions",
    },

    {
      emoji: "🙋",
      title: "Self Introduction",

      description:
        "Learn how to introduce yourself confidently before the Interviewing Officer.",

      color: "yellow",
    },

    {
      emoji: "📄",
      title: "PIQ Form",

      description:
        "Understand every section of the Personal Information Questionnaire and how to answer it.",

      color: "blue",
    },

    {
      emoji: "🧠",
      title: "Psychology Based Questions",

      description:
        "Frequently asked personality and situation-based interview questions.",

      color: "purple",
    },

    {
      emoji: "📰",
      title: "Current Affairs",

      description:
        "Important defence and national issues every aspirant should know before the interview.",

      color: "orange",
    },

    {
      emoji: "⭐",
      title: "Officer Like Qualities",

      description:
        "Learn how Interviewing Officers assess OLQs during the personal interview.",

      color: "emerald",
    },
  ];

  const quote = {
    emoji: "🎖️",

    quote:
      "An Interview is not a test of memory. It is a test of personality, honesty and officer-like qualities.",

    author: "SSB Interview Philosophy",

    designation: "Be Yourself • Stay Confident",
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
          emoji="🎤"
          title="Interview Preparation Modules"
          subtitle="Master every important aspect of the SSB Personal Interview through structured learning modules."
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {sections.map((item) => (

            item.link ? (

              <Link
                key={item.title}
                to={item.link}
              >
                <MilitaryCard
                  theme={theme}
                  emoji={item.emoji}
                  title={item.title}
                  description={item.description}
                  color={item.color}
                />
              </Link>

            ) : (

              <MilitaryCard
                key={item.title}
                theme={theme}
                emoji={item.emoji}
                title={item.title}
                description={item.description}
                color={item.color}
              />

            )

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

export default Interview;