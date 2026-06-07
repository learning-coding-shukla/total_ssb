import { useState } from "react";

const topics = [
  "India-China Relations",
  "Women in Armed Forces",
  "Artificial Intelligence in Warfare",
  "Cyber Security",
  "Make in India Defence",
  "Blue Water Navy",
  "Space Warfare",
  "Leadership",
  "Social Media Impact",
  "Climate Change"
];

function Lecturette() {
  const [topic, setTopic] = useState("");

  const generateTopic = () => {
    const random =
      topics[Math.floor(Math.random() * topics.length)];

    setTopic(random);
  };

  return (
    <div className="max-w-5xl mx-auto p-10">

      <h1 className="text-5xl font-bold mb-8">
        Lecturette Practice
      </h1>

      <button
        onClick={generateTopic}
        className="bg-green-600 text-white px-6 py-3 rounded-lg"
      >
        Generate Topic
      </button>

      <div className="mt-8 text-3xl font-bold">
        {topic}
      </div>

    </div>
  );
}

export default Lecturette;