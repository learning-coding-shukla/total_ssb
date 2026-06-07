import { useState, useEffect } from "react";

const watWords = [
  "Ability",
  "Accept",
  "Accident",
  "Action",
  "Advantage",
  "Afraid",
  "Agree",
  "Aim",
  "Alone",
  "Anger",
  "Army",
  "Attack",
  "Attempt",
  "Attention",
  "Avoid",
  "Bad",
  "Battle",
  "Beautiful",
  "Beggar",
  "Belief",
  "Best",
  "Betray",
  "Blood",
  "Bold",
  "Book",
  "Brave",
  "Brother",
  "Care",
  "Character",
  "Cheat",
  "Child",
  "Choice",
  "Clean",
  "Clear",
  "Climb",
  "Company",
  "Compete",
  "Complete",
  "Confuse",
  "Control",
  "Cooperation",
  "Courage",
  "Coward",
  "Crisis",
  "Crowd",
  "Cruel",
  "Danger",
  "Dark",
  "Death",
  "Decide",
  "Defeat",
  "Defend",
  "Delay",
  "Demand",
  "Depend",
  "Desire",
  "Destroy",
  "Dictator",
  "Difficult",
  "Direction",
  "Discipline",
  "Disease",
  "Dispute",
  "Doubt",
  "Dream",
  "Duty",
  "Eager",
  "Earn",
  "Education",
  "Effort",
  "Enemy",
  "Enjoy",
  "Envy",
  "Equal",
  "Escape",
  "Exam",
  "Excuse",
  "Expect",
  "Fail",
  "Faith",
  "Fall",
  "False",
  "Family",
  "Father",
  "Fear",
  "Fight",
  "Fire",
  "First",
  "Flag",
  "Flight",
  "Follow",
  "Fool",
  "Force",
  "Forgive",
  "Free",
  "Friend",
  "Future",
  "Game",
  "Ghost",
  "Girl",
  "Give",
  "Goal",
  "God",
  "Good",
  "Great",
  "Greed",
  "Grief",
  "Group",
  "Guard",
  "Guide",
  "Guilt",
  "Habit",
  "Happy",
  "Hard",
  "Hate",
  "Health",
  "Help",
  "Hero",
  "Hesitate",
  "Hide",
  "High",
  "Hinder",
  "Honest",
  "Honor",
  "Hope",
  "Hunger",
  "Hurry",
  "Idea",
  "Idle",
  "Ignore",
  "Illness",
  "Imagine",
  "Improve",
  "Impossible",
  "Initiative",
  "Injure",
  "Innocent",
  "Insult",
  "Intelligence",
  "Interest",
  "Jealous",
  "Join",
  "Joy",
  "Judge",
  "Jump",
  "Justice",
  "Kill",
  "Kind",
  "Knowledge",
  "Lack",
  "Late",
  "Laugh",
  "Lazy",
  "Lead",
  "Learn",
  "Lie",
  "Life",
  "Light",
  "Limit",
  "Lonely",
  "Lose",
  "Love",
  "Loyal",
  "Luck",
  "Mad",
  "Make",
  "Man",
  "Manage",
  "Marriage",
  "Master",
  "Meet",
  "Memory",
  "Mercy",
  "Mind",
  "Mistake",
  "Money",
  "Mother",
  "Mountain",
  "Murder",
  "Nation",
  "Nature",
  "Need",
  "Negative",
  "Nervous",
  "Noble",
  "Normal",
  "Obey",
  "Object",
  "Officer",
  "Old",
  "Open",
  "Opportunity",
  "Oppose",
  "Order",
  "Overcome",
  "Pain",
  "Panic",
  "Pardon",
  "Parents",
  "Part",
];

function WAT() {
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(Math.random() * watWords.length),
  );
  const [response, setResponse] = useState("");
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          nextWord();
          return 15;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextWord = () => {
    localStorage.setItem(`wat-${currentIndex}`, response);

    setCurrentIndex((prev) => (prev === watWords.length - 1 ? 0 : prev + 1));

    setResponse("");

    setTimeLeft(15);
  };

  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-5xl font-bold mb-10">WAT Practice</h1>

      <div className="bg-white p-10 rounded-xl shadow">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-red-600">{timeLeft}</h2>
        </div>

        <h2 className="text-5xl text-center font-bold">
          {watWords[currentIndex]}
        </h2>

        <textarea
          value={response}
          onChange={(e) => setResponse(e.target.value)}
          className="w-full border mt-8 p-4 rounded-lg"
          rows="4"
          placeholder="Write your sentence..."
        />

        <div className="text-center mt-6">
          <button
            onClick={nextWord}
            className="bg-green-600 text-white px-6 py-3 rounded-lg"
          >
            Next Word
          </button>
        </div>
      </div>
    </div>
  );
}

export default WAT;

// import { useState, useEffect } from "react";

// const watWords = [
//   "Leader",
//   "Success",
//   "Discipline",
//   "Courage",
//   "Responsibility"
// ];

// function WAT() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(15);
//   const [response, setResponse] = useState("");

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft((prev) => {
//         if (prev === 0) return 0;
//         return prev - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [currentIndex]);

//   const nextWord = () => {
//     localStorage.setItem(
//       `wat-${currentIndex}`,
//       response
//     );

//     setCurrentIndex((prev) =>
//       prev === watWords.length - 1 ? 0 : prev + 1
//     );

//     setResponse("");
//     setTimeLeft(15);
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-10">
//       <h1 className="text-5xl font-bold mb-10">
//         WAT Practice
//       </h1>

//       <h2 className="text-4xl text-red-600 text-center">
//         {timeLeft}
//       </h2>

//       <h2 className="text-5xl text-center font-bold mt-6">
//         {watWords[currentIndex]}
//       </h2>

//       <textarea
//         value={response}
//         onChange={(e) => setResponse(e.target.value)}
//         className="w-full border mt-8 p-4 rounded-lg"
//         rows="4"
//       />

//       <div className="text-center mt-6">
//         <button
//           onClick={nextWord}
//           className="bg-green-600 text-white px-6 py-3 rounded-lg"
//         >
//           Next Word
//         </button>
//       </div>
//     </div>
//   );
// }

// export default WAT;