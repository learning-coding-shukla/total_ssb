import { useEffect, useMemo, useState } from "react";

import {
  FaUserTie,
  FaQuestionCircle,
  FaLightbulb,
} from "react-icons/fa";

import {
  MdCompareArrows,
  MdQuiz,
} from "react-icons/md";

import {
  GiProgression,
  GiRank3,
} from "react-icons/gi";

import {
  BsFillPeopleFill,
} from "react-icons/bs";

const RankNavigation = ({
  theme = "army",
  officers = 0,
  jco = 0,
  other = 0,
}) => {

  const [active, setActive] = useState("officers");
  const [progress, setProgress] = useState(0);

  const colors = {
    army: {
      active: "bg-green-600",
      progress: "bg-green-500",
      hover: "hover:border-green-500",
      text: "text-green-400",
    },

    navy: {
      active: "bg-blue-600",
      progress: "bg-blue-500",
      hover: "hover:border-blue-500",
      text: "text-blue-400",
    },

    airforce: {
      active: "bg-sky-600",
      progress: "bg-sky-500",
      hover: "hover:border-sky-500",
      text: "text-sky-400",
    },
  };

  const currentTheme = colors[theme];

  const navigationItems = useMemo(
    () => [
      {
        id: "officers",
        label: `Officers (${officers})`,
        icon: <FaUserTie />,
      },

      {
        id: "jco",
        label: `JCO (${jco})`,
        icon: <BsFillPeopleFill />,
      },

      {
        id: "other",
        label: `Other (${other})`,
        icon: <GiRank3 />,
      },

      {
        id: "timeline",
        label: "Timeline",
        icon: <GiProgression />,
      },

      {
        id: "appointments",
        label: "Appointments",
        icon: <BsFillPeopleFill />,
      },

      {
        id: "comparison",
        label: "Comparison",
        icon: <MdCompareArrows />,
      },

      {
        id: "facts",
        label: "Facts",
        icon: <FaLightbulb />,
      },

      {
        id: "quiz",
        label: "Quiz",
        icon: <MdQuiz />,
      },

      {
        id: "faq",
        label: "FAQ",
        icon: <FaQuestionCircle />,
      },
    ],
    [jco, officers, other],
  );

  useEffect(() => {

    const handleScroll = () => {

      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const percentage =
        (scrollTop / documentHeight) * 100;

      setProgress(percentage);

    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  useEffect(() => {

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            setActive(entry.target.id);

          }

        });

      },

      {

        threshold: 0.35,

      }

    );

    navigationItems.forEach((item) => {

      const section = document.getElementById(item.id);

      if (section) {

        observer.observe(section);

      }

    });

    return () => observer.disconnect();

  }, [navigationItems]);

  const scrollToSection = (id) => {

    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({

      behavior: "smooth",

      block: "start",

    });

  };

  return (

    <section className="sticky top-20 z-50 mb-14">

      {/* Progress Bar */}

      <div className="h-1 w-full rounded-full bg-slate-800 overflow-hidden mb-4">

        <div

          style={{

            width: `${progress}%`,

          }}

          className={`h-full ${currentTheme.progress} transition-all duration-300`}

        />

      </div>

      {/* Navigation */}

      <div
        className="
        rounded-3xl
        border
        border-slate-700
        bg-slate-900/80
        backdrop-blur-xl
        shadow-2xl
        "
      >

        <div
          className="
          flex
          gap-3
          overflow-x-auto
          scrollbar-hide
          p-4
          "
        >

          {navigationItems.map((item) => (

            <button

              key={item.id}

              onClick={() => scrollToSection(item.id)}

              className={`
                flex
                items-center
                gap-2
                px-5
                py-3
                rounded-xl
                whitespace-nowrap
                transition-all
                duration-300
                border

                ${
                  active === item.id
                    ? `${currentTheme.active} border-transparent text-white shadow-lg scale-105`
                    : `bg-slate-800 border-slate-700 hover:bg-slate-700 ${currentTheme.hover} text-slate-200`
                }
              `}
            >

              <span className="text-lg">

                {item.icon}

              </span>

              <span className="font-semibold">

                {item.label}

              </span>

            </button>

          ))}

        </div>

      </div>

    </section>

  );

};

export default RankNavigation;