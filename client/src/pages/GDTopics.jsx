import { useState } from "react";

const topics = [
  // --- International Relations & Geopolitics ---
  {
    category: "International Relations & Geopolitics",
    topic: "What is the primary reason for growing global conflicts?",
    leads: [
      "Security dilemmas and cyber warfare",
      "Resource scarcity (Energy/Water)",
      "Hegemony and power dominance"
    ]
  },
  {
    category: "International Relations & Geopolitics",
    topic: "Why is the United Nations losing its significance?",
    leads: [
      "Changing global world order",
      "Lack of enforceability and action",
      "Veto power monopolies by a few nations"
    ]
  },
  {
    category: "International Relations & Geopolitics",
    topic: "What is the most critical factor for India to become a global superpower?",
    leads: [
      "Military modernization",
      "Economic independence and high GDP growth",
      "Strong foreign policy and strategic alliances"
    ]
  },
  {
    category: "International Relations & Geopolitics",
    topic: "How should India counter China's string of pearls strategy?",
    leads: [
      "Strengthening regional alliances (Quad, BIMSTEC)",
      "Enhancing naval and maritime capabilities",
      "Economic and infrastructure diplomacy"
    ]
  },
  {
    category: "International Relations & Geopolitics",
    topic: "What is the main driver of prolonged modern conflicts (e.g., Russia-Ukraine)?",
    leads: [
      "NATO or military alliance expansion",
      "Territorial and historical claims",
      "Economic and energy interests"
    ]
  },
  {
    category: "International Relations & Geopolitics",
    topic: "What should be the main focus of India's \"Neighborhood First\" policy?",
    leads: [
      "Financial and development aid",
      "Defense and border cooperation",
      "Cultural and people-to-people ties"
    ]
  },
  {
    category: "International Relations & Geopolitics",
    topic: "What is the primary reason for instability in the Middle East?",
    leads: [
      "Religious extremism",
      "Interference by Western powers",
      "Struggle for oil and energy resources"
    ]
  },
  {
    category: "International Relations & Geopolitics",
    topic: "How can India best manage its relationship with Pakistan?",
    leads: [
      "Aggressive military posture and deterrence",
      "Bilateral diplomatic talks",
      "International isolation"
    ]
  },
  {
    category: "International Relations & Geopolitics",
    topic: "What is the biggest threat to the Indo-Pacific region?",
    leads: [
      "Chinese expansionism",
      "Freedom of navigation disputes",
      "Lack of a unified security architecture"
    ]
  },
  {
    category: "International Relations & Geopolitics",
    topic: "What is the main cause of cross-border terrorism?",
    leads: [
      "State sponsorship",
      "Religious radicalization",
      "Socio-economic deprivation in border areas"
    ]
  },

  // --- Defence & National Security ---
  {
    category: "Defence & National Security",
    topic: "What is the primary motive behind Atmanirbhar Bharat in Defence?",
    leads: [
      "Reducing import dependency",
      "Boosting domestic employment and economy",
      "Strategic autonomy during wartime"
    ]
  },
  {
    category: "Defence & National Security",
    topic: "What is the biggest challenge to the modernization of the Indian Armed Forces?",
    leads: [
      "Budgetary constraints",
      "Bureaucratic delays in procurement",
      "Lack of indigenous R&D"
    ]
  },
  {
    category: "Defence & National Security",
    topic: "What is the most significant threat to India's internal security?",
    leads: [
      "Cyber terrorism and information warfare",
      "Left-wing extremism (Naxalism)",
      "Communal and religious disharmony"
    ]
  },
  {
    category: "Defence & National Security",
    topic: "Why are women's roles in combat and infantry still debated?",
    leads: [
      "Organizational and operational needs",
      "Patriarchal mindset of society",
      "Wartime vulnerabilities (POW situations)"
    ]
  },
  {
    category: "Defence & National Security",
    topic: "What is the primary reason for implementing the Agnipath scheme?",
    leads: [
      "Reducing the defense pension budget",
      "Maintaining a youthful profile of the armed forces",
      "Creating a disciplined youth force for the nation"
    ]
  },
  {
    category: "Defence & National Security",
    topic: "What is the best way to resolve insurgencies in the North East?",
    leads: [
      "Strict military action (AFSPA)",
      "Political dialogue and peace accords",
      "Economic development and infrastructure"
    ]
  },
  {
    category: "Defence & National Security",
    topic: "How can cyber warfare be best countered by India?",
    leads: [
      "Establishing a dedicated unified Cyber Command",
      "Collaborating with international tech giants",
      "Upgrading domestic IT infrastructure and awareness"
    ]
  },
  {
    category: "Defence & National Security",
    topic: "What is the biggest advantage of the Theaterisation of the Armed Forces?",
    leads: [
      "Optimal resource utilization",
      "Swift decision-making during operations",
      "Better synergy among the Army, Navy, and Air Force"
    ]
  },
  {
    category: "Defence & National Security",
    topic: "What is the main purpose of India expanding its naval footprint?",
    leads: [
      "Securing sea lines of communication (SLOCs)",
      "Countering piracy and maritime terrorism",
      "Projecting power in the Indian Ocean Region"
    ]
  },
  {
    category: "Defence & National Security",
    topic: "What makes Space the next frontier of defense?",
    leads: [
      "Satellite surveillance and reconnaissance",
      "Securing communication networks",
      "Development of anti-satellite weapons"
    ]
  },

  // --- Economy & Technology ---
  {
    category: "Economy & Technology",
    topic: "What is the major reason for the rapid rise of the Indian economy?",
    leads: [
      "Demographic dividend",
      "Government initiatives (Make in India, PLI)",
      "Technological advancements and the IT sector"
    ]
  },
  {
    category: "Economy & Technology",
    topic: "What is the biggest threat posed by Artificial Intelligence?",
    leads: [
      "Massive job displacement",
      "Risks to privacy and data security",
      "Weaponization and loss of human control"
    ]
  },
  {
    category: "Economy & Technology",
    topic: "How can India achieve its target of a $5 Trillion economy?",
    leads: [
      "Boosting the manufacturing sector",
      "Transforming agriculture",
      "Promoting start-ups and innovation"
    ]
  },
  {
    category: "Economy & Technology",
    topic: "What is the main reason for the growing gap between the rich and the poor?",
    leads: [
      "Unequal distribution of resources",
      "Flaws in the taxation system",
      "Disparity in quality education and skills"
    ]
  },
  {
    category: "Economy & Technology",
    topic: "What is the best approach to transition to renewable energy?",
    leads: [
      "Subsidizing electric vehicles and solar power",
      "Imposing heavy taxes on fossil fuels",
      "Investing heavily in nuclear energy"
    ]
  },
  {
    category: "Economy & Technology",
    topic: "What is the most significant impact of digital payments (UPI) in India?",
    leads: [
      "Reducing black money and corruption",
      "Financial inclusion of the rural population",
      "Ease of doing business"
    ]
  },
  {
    category: "Economy & Technology",
    topic: "What is the primary cause of unemployment among Indian youth?",
    leads: [
      "Lack of skill-based education",
      "Overpopulation",
      "Sluggish growth in the manufacturing sector"
    ]
  },
  {
    category: "Economy & Technology",
    topic: "What is the biggest advantage of the Industrial Revolution 4.0?",
    leads: [
      "Increased production efficiency",
      "Better healthcare and life expectancy",
      "Enhanced global connectivity"
    ]
  },
  {
    category: "Economy & Technology",
    topic: "What should be the priority to improve the agriculture sector?",
    leads: [
      "Adopting modern technology and machinery",
      "Providing better MSP and market access",
      "Expanding irrigation infrastructure"
    ]
  },
  {
    category: "Economy & Technology",
    topic: "What is the main reason for brain drain in India?",
    leads: [
      "Better financial packages abroad",
      "Lack of world-class R&D infrastructure in India",
      "Bureaucratic hurdles"
    ]
  },

  // --- Society, Youth & Education ---
  {
    category: "Society, Youth & Education",
    topic: "What is the primary reason for stress and mental instability in today's youth?",
    leads: [
      "Social media and peer pressure",
      "High parental expectations",
      "Uncertainty about careers"
    ]
  },
  {
    category: "Society, Youth & Education",
    topic: "What is the major reason for piled-up court cases in India?",
    leads: [
      "Inadequate infrastructure and shortage of judges",
      "Complex and outdated laws",
      "Frequent adjournments and corruption"
    ]
  },
  {
    category: "Society, Youth & Education",
    topic: "What is the most effective way to empower women in India?",
    leads: [
      "Ensuring financial independence",
      "Strict enforcement of safety laws",
      "Changing societal mindsets through education"
    ]
  },
  {
    category: "Society, Youth & Education",
    topic: "What is the primary cause of road rage and rash driving among teenagers?",
    leads: [
      "Lack of parental control",
      "Ineffective law and order enforcement",
      "Peer pressure and showing off"
    ]
  },
  {
    category: "Society, Youth & Education",
    topic: "What should the education system focus on the most?",
    leads: [
      "Practical and skill-based learning",
      "Moral and ethical values",
      "Technological proficiency"
    ]
  },
  {
    category: "Society, Youth & Education",
    topic: "What is the main reason for discrimination in Indian society?",
    leads: [
      "Caste-based politics",
      "Economic disparities",
      "Deep-rooted patriarchal and orthodox traditions"
    ]
  },
  {
    category: "Society, Youth & Education",
    topic: "What are today's youth prioritizing the most for self-development?",
    leads: [
      "Financial stability and wealth",
      "Freedom of choice and independence",
      "Taking on new responsibilities"
    ]
  },
  {
    category: "Society, Youth & Education",
    topic: "How can the standard of sports (other than cricket) be improved in India?",
    leads: [
      "Increasing government funding and infrastructure",
      "Encouraging sports at the grassroots/school level",
      "Securing corporate sponsorships"
    ]
  },
  {
    category: "Society, Youth & Education",
    topic: "What is the main reason for the rise in juvenile crimes?",
    leads: [
      "Exposure to violent media and the internet",
      "Poverty and lack of education",
      "Dysfunctional family environments"
    ]
  },
  {
    category: "Society, Youth & Education",
    topic: "What is the most significant impact of OTT platforms on society?",
    leads: [
      "Promotion of diverse content and talent",
      "Erosion of cultural values and censorship issues",
      "Decline of traditional cinema"
    ]
  },

  // --- Politics, Governance & Environment ---
  {
    category: "Politics, Governance & Environment",
    topic: "What is the biggest obstacle in India's path to development?",
    leads: [
      "Corruption and bureaucratic red tape",
      "Overpopulation",
      "Lack of strong political leadership"
    ]
  },
  {
    category: "Politics, Governance & Environment",
    topic: "What is the primary reason for the criminalization of politics?",
    leads: [
      "Use of money and muscle power to win elections",
      "Lack of strict laws by the Election Commission",
      "Apathy and ignorance of voters"
    ]
  },
  {
    category: "Politics, Governance & Environment",
    topic: "What is the most effective way to combat climate change?",
    leads: [
      "Strict international agreements and penalties",
      "Shifting to green and renewable energy",
      "Extensive afforestation and public awareness"
    ]
  },
  {
    category: "Politics, Governance & Environment",
    topic: "What is the main cause of the pollution in major Indian cities?",
    leads: [
      "Industrial emissions and poor waste management",
      "Vehicular traffic",
      "Stubble burning and agricultural practices"
    ]
  },
  {
    category: "Politics, Governance & Environment",
    topic: "Why are freebie politics detrimental to a developing nation?",
    leads: [
      "It drains the state exchequer",
      "It makes citizens dependent rather than empowered",
      "It diverts funds from infrastructure and healthcare"
    ]
  },
  {
    category: "Politics, Governance & Environment",
    topic: "What is the best way to handle disaster management in India?",
    leads: [
      "Investing in early warning systems",
      "Educating and training citizens for emergencies",
      "Equipping the NDRF and armed forces with modern tech"
    ]
  },
  {
    category: "Politics, Governance & Environment",
    topic: "What is the primary reason for the water crisis in India?",
    leads: [
      "Depletion of groundwater due to agriculture",
      "Poor rainwater harvesting and management",
      "Climate change and irregular monsoons"
    ]
  },
  {
    category: "Politics, Governance & Environment",
    topic: "Should an educational qualification be mandated for politicians?",
    leads: [
      "Yes, to ensure informed decision-making",
      "No, practical ground experience matters more",
      "No, it violates democratic rights in a country with high illiteracy"
    ]
  },
  {
    category: "Politics, Governance & Environment",
    topic: "What is the most pressing issue regarding space debris?",
    leads: [
      "Threat to operational satellites",
      "Risk to future space exploration missions",
      "Potential environmental hazard if it falls to Earth"
    ]
  },
  {
    category: "Politics, Governance & Environment",
    topic: "What should be the primary focus of media in a democracy?",
    leads: [
      "Providing unbiased and factual news",
      "Educating the masses on government policies",
      "Acting as a watchdog against corruption"
    ]
  }
];
function GDTopics() {
  const [index, setIndex] = useState(0);

  const nextTopic = () => {
    setIndex((prev) =>
      prev === topics.length - 1 ? 0 : prev + 1
    );
  };

  const prevTopic = () => {
    setIndex((prev) =>
      prev === 0 ? topics.length - 1 : prev - 1
    );
  };

  const randomTopic = () => {
    const random =
      Math.floor(Math.random() * topics.length);

    setIndex(random);
  };

  const current = topics[index];

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-5xl font-bold text-center mb-10">
        🗣 GD Simulator
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-8">

        <div className="flex justify-between items-center mb-6">

          <span className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            {current.category}
          </span>

          <span className="font-bold">
            {index + 1} / {topics.length}
          </span>

        </div>

        <h2 className="text-3xl font-bold mb-8">
          {current.topic}
        </h2>

        <div className="space-y-4">

          {current.leads.map((lead, i) => (

            <div
              key={i}
              className="bg-gray-100 p-4 rounded-xl"
            >
              Lead {i + 1}: {lead}
            </div>

          ))}

        </div>

      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-8">

        <button
          onClick={prevTopic}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Previous
        </button>

        <button
          onClick={randomTopic}
          className="bg-orange-600 text-white px-6 py-3 rounded-lg"
        >
          Random Topic
        </button>

        <button
          onClick={nextTopic}
          className="bg-green-600 text-white px-6 py-3 rounded-lg"
        >
          Next Topic
        </button>

      </div>

    </div>
  );
}

export default GDTopics;