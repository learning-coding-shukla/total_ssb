import { useState, useEffect } from "react";
import ppdtImages from "../data/ppdtImages";

function PPDT() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [observationTime, setObservationTime] = useState(30);
  const [storyTime, setStoryTime] = useState(240);

  useEffect(() => {
    if (observationTime > 0) {
      const timer = setTimeout(() => {
        setObservationTime(observationTime - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [observationTime]);

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === ppdtImages.length - 1 ? 0 : prev + 1
    );

    setObservationTime(30);
    setStoryTime(240);
  };

  return (
    <div className="max-w-6xl mx-auto p-10">

      <h1 className="text-5xl font-bold mb-8">
        PPDT Practice
      </h1>

      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-red-600">
          Observation Time:
          {" "}
          {observationTime}s
        </h2>
      </div>

      <img
        src={ppdtImages[currentIndex]}
        alt="PPDT"
        className="w-full max-w-3xl mx-auto rounded-xl shadow-lg"
      />

      <div className="text-center mt-6">
        <button
          onClick={nextImage}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Next Image
        </button>
      </div>

      <div className="mt-10">

        <h2 className="text-2xl font-bold mb-4">
          Story Writing
        </h2>

        <textarea
          className="w-full border p-4 rounded-lg"
          rows="8"
          placeholder="Write your PPDT story..."
        />

      </div>

      <div className="mt-8">

        <h2 className="text-2xl font-bold mb-4">
          Main Character Details
        </h2>

        <textarea
          className="w-full border p-4 rounded-lg"
          rows="4"
          placeholder="Age, Gender, Mood, Action..."
        />

      </div>

      <div className="mt-8">

        <h2 className="text-2xl font-bold mb-4">
          Narration Points
        </h2>

        <textarea
          className="w-full border p-4 rounded-lg"
          rows="4"
          placeholder="Important points for narration..."
        />

      </div>

    </div>
  );
}

export default PPDT;