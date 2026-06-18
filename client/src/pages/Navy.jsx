import MilitaryLandingLayout from "../components/common/MilitaryLandingLayout";
import militaryThemes from "../components/common/MilitaryTheme";

const theme = militaryThemes.navy;

const Navy = () => {
  const hero = {
    title: "Indian Navy",

    motto: "Sham No Varunah",

    description:
      "The Indian Navy safeguards India's maritime interests and ensures security across the Indian Ocean Region. Explore its rich history, fleet, aviation, submarines, ranks, commands and traditions.",

    stats: [
      { icon: "⚓", value: "17", label: "Ranks" },
      { icon: "🚢", value: "150+", label: "Warships" },
      { icon: "🛳️", value: "18", label: "Submarines" },
      { icon: "👨‍✈️", value: "70K+", label: "Personnel" },
    ],

    primaryAction: {
      label: "Explore Ranks",
      link: "/navy/ranks",
    },

    secondaryAction: {
      label: "Naval Commands",
      link: "/navy-commands",
    },
  };

  const stats = [
    {
      icon: "⚓",
      value: "17",
      label: "Ranks",
    },
    {
      icon: "🚢",
      value: "150+",
      label: "Warships",
    },
    {
      icon: "🛳️",
      value: "18",
      label: "Submarines",
    },
    {
      icon: "🛫",
      value: "220+",
      label: "Aircraft",
    },
    {
      icon: "👨‍✈️",
      value: "70K+",
      label: "Personnel",
    },
  ];

  const sections = [
    // {
    //   emoji: "📜",
    //   title: "Naval History",
    //   description:
    //     "Discover the glorious evolution of the Indian Navy from 1947 to the present.",
    //   color: "blue",
    //   link: "#", // Create page later
    // },

    {
      emoji: "⚓",
      title: "Rank Structure",
      description:
        "Learn about officer, sailor and warrant ranks with insignias and promotions.",
      color: "sky",
      link: "/navy/ranks",
    },

    {
      emoji: "🚢",
      title: "Warships & Fleets",
      description:
        "Aircraft carriers, destroyers, frigates, corvettes and operational fleets.",
      color: "green",
      link: "/naval-fleets",
    },

    {
      emoji: "🛳️",
      title: "MARCOS",
      description:
        "Explore the elite Marine Commandos (MARCOS) of the Indian Navy.",
      color: "purple",
      link: "/marcos",
    },

    // {
    //   emoji: "✈️",
    //   title: "Naval Aviation",
    //   description:
    //     "Carrier aircraft, helicopters and maritime reconnaissance fleet.",
    //   color: "yellow",
    //   link: "#", // Create page later
    // },

    {
      emoji: "🧭",
      title: "Naval Commands",
      description:
        "Western, Eastern and Southern Naval Commands with their responsibilities.",
      color: "orange",
      link: "/navy-commands",
    },
  ];

  const quote = {
    emoji: "⚓",

    quote:
      "The sea is the lifeline of our nation, and maritime power is a pillar of national security.",

    author: "Indian Navy",

    designation: "Guardians of the Indian Ocean",
  };

  return (
    <MilitaryLandingLayout
      theme={theme}
      hero={hero}
      stats={stats}
      sections={sections}
      quote={quote}
    />
  );
};

export default Navy;