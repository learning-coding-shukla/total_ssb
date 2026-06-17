// =========================================
// TOTAL_SSB Theme Configuration
// =========================================

export const themes = {
  army: {
    name: "Indian Army",

    // Main Colors
    primary: "bg-green-600",
    primaryHover: "hover:bg-green-500",

    secondary: "bg-green-500/20",
    secondaryText: "text-green-300",

    accent: "text-green-400",

    border: "border-green-500/20",
    borderHover: "hover:border-green-500",

    progress: "bg-green-500",

    heading: "text-green-400",

    line: "bg-green-500",

    badge: "bg-green-500/20 text-green-300",

    button:
      "bg-green-600 hover:bg-green-500 text-white",

    card:
      "bg-slate-900 border border-green-500/20",

    glow:
      "hover:shadow-green-500/20",

    gradient:
      "from-green-900/90 to-green-700/60",
  },

  navy: {
    name: "Indian Navy",

    primary: "bg-blue-600",
    primaryHover: "hover:bg-blue-500",

    secondary: "bg-blue-500/20",
    secondaryText: "text-blue-300",

    accent: "text-blue-400",

    border: "border-blue-500/20",
    borderHover: "hover:border-blue-500",

    progress: "bg-blue-500",

    heading: "text-blue-400",

    line: "bg-blue-500",

    badge: "bg-blue-500/20 text-blue-300",

    button:
      "bg-blue-600 hover:bg-blue-500 text-white",

    card:
      "bg-slate-900 border border-blue-500/20",

    glow:
      "hover:shadow-blue-500/20",

    gradient:
      "from-blue-950/90 to-blue-700/60",
  },

  airforce: {
    name: "Indian Air Force",

    primary: "bg-sky-600",
    primaryHover: "hover:bg-sky-500",

    secondary: "bg-sky-500/20",
    secondaryText: "text-sky-300",

    accent: "text-sky-400",

    border: "border-sky-500/20",
    borderHover: "hover:border-sky-500",

    progress: "bg-sky-500",

    heading: "text-sky-400",

    line: "bg-sky-500",

    badge: "bg-sky-500/20 text-sky-300",

    button:
      "bg-sky-600 hover:bg-sky-500 text-white",

    card:
      "bg-slate-900 border border-sky-500/20",

    glow:
      "hover:shadow-sky-500/20",

    gradient:
      "from-sky-950/90 to-sky-700/60",
  },
};

// Helper Function
export const getTheme = (theme = "army") => {
  return themes[theme] || themes.army;
};