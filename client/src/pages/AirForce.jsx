import MilitaryLandingLayout from "../components/common/MilitaryLandingLayout";
import militaryThemes from "../components/common/MilitaryTheme";

const theme = militaryThemes.airforce;

const AirForce = () => {
  const hero = {
    title: "Indian Air Force",

    motto: "Touch the Sky with Glory",

    description:
      "The Indian Air Force protects the nation's skies through air superiority, strategic airlift, reconnaissance and precision strike capabilities. Explore aircraft, commands, ranks and operations.",

    stats: [
      { icon: "✈️", value: "17", label: "Ranks" },
      { icon: "🛩️", value: "1700+", label: "Aircraft" },
      { icon: "🚁", value: "600+", label: "Helicopters" },
      { icon: "👨‍✈️", value: "1.4L+", label: "Personnel" },
    ],

    primaryAction: {
      label: "Explore Ranks",
      link: "/airforce/ranks",
    },

    secondaryAction: {
      label: "Air Commands",
      link: "/airforce-commands",
    },
  };

  const stats = [
    {
      icon: "✈️",
      value: "17",
      label: "Ranks",
    },
    {
      icon: "🛩️",
      value: "1700+",
      label: "Aircraft",
    },
    {
      icon: "🚁",
      value: "600+",
      label: "Helicopters",
    },
    {
      icon: "🚀",
      value: "40+",
      label: "Air Bases",
    },
    {
      icon: "👨‍✈️",
      value: "1.4L+",
      label: "Personnel",
    },
  ];

  const sections = [
    // {
    //   emoji: "📜",
    //   title: "Air Force History",
    //   description: "Explore the history and evolution of the Indian Air Force.",
    //   color: "sky",
    //   link: "#", // Create page later
    // },

    {
      emoji: "✈️",
      title: "Rank Structure",
      description:
        "Ranks, insignias, promotions and appointments in the Indian Air Force.",
      color: "blue",
      link: "/airforce/ranks",
    },

    {
      emoji: "🛩️",
      title: "Aircraft Fleet",
      description:
        "Fighter aircraft, transport aircraft and trainers of the IAF.",
      color: "purple",
      link: "/aircraft",
    },

    {
      emoji: "🚁",
      title: "Garud Special Forces",
      description:
        "Learn about the elite Garud Commando Force of the Indian Air Force.",
      color: "green",
      link: "/garud",
    },

    // {
    //   emoji: "🚀",
    //   title: "Missiles & Air Defence",
    //   description:
    //     "Integrated air defence systems and missile capabilities.",
    //   color: "red",
    //   link: "#", // Create page later
    // },

    {
      emoji: "🌍",
      title: "Air Commands",
      description:
        "Operational and maintenance commands across India.",
      color: "yellow",
      link: "/airforce-commands",
    },
  ];

  const quote = {
    emoji: "✈️",

    quote: "Touch the Sky with Glory.",

    author: "Indian Air Force",

    designation: "Official Motto",
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

export default AirForce;