import MilitaryLandingLayout from "../components/common/MilitaryLandingLayout";
import militaryThemes from "../components/common/MilitaryTheme";

const theme = militaryThemes.army;

const Army = () => {
  const hero = {
    title: "Indian Army",

    motto: "Service Before Self",

    description:
      "The Indian Army is the land-based branch of the Indian Armed Forces dedicated to safeguarding the nation's sovereignty and integrity.",

    stats: [
      { icon: "🎖️", value: "17", label: "Ranks" },
      { icon: "⚔️", value: "13", label: "Corps" },
      { icon: "🏅", value: "27+", label: "Regiments" },
      { icon: "🛡️", value: "12L+", label: "Personnel" },
    ],

    primaryAction: {
      label: "Explore Ranks",
      link: "/army/ranks",
    },

    secondaryAction: {
      label: "Army History",
      link: "/army-history",
    },
  };

  const stats = [
    {
      icon: "🎖️",
      value: "17",
      label: "Ranks",
    },
    {
      icon: "⚔️",
      value: "13",
      label: "Corps",
    },
    {
      icon: "🏅",
      value: "27+",
      label: "Regiments",
    },
    {
      icon: "🪖",
      value: "12L+",
      label: "Personnel",
    },
    {
      icon: "🔥",
      value: "75+",
      label: "Operations",
    },
  ];

  const sections = [
    {
      emoji: "📜",
      title: "Army History",
      description:
        "History of the Indian Army from Independence to present.",
      color: "orange",
      link: "/army-history",
    },

    {
      emoji: "🎖️",
      title: "Rank Structure",
      description: "Learn ranks, insignia and promotions.",
      color: "green",
      link: "/army/ranks",
    },

    {
      emoji: "⚔️",
      title: "Commands",
      description: "Operational & Training Commands.",
      color: "red",
      link: "/army-commands",
    },

    {
      emoji: "🏅",
      title: "Gallantry Awards",
      description: "PVC, MVC, VrC, AC and other gallantry awards.",
      color: "yellow",
      link: "/pvc",
    },

    {
      emoji: "🚀",
      title: "Weapons",
      description: "Modern weapons, artillery, tanks and equipment.",
      color: "purple",
      link: "/army-weapons",
    },

    {
      emoji: "🪖",
      title: "Regiments",
      description: "Explore the famous regiments of the Indian Army.",
      color: "emerald",
      link: "/army-regiments",
    },
  ];

  const quote = {
    emoji: "🇮🇳",

    quote:
      "Safety, Honour and Welfare of your Country come first, always and every time.",

    author: "Field Marshal Sam Manekshaw",

    designation: "Chief of Army Staff",
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

export default Army;