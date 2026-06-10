import { useState } from "react";
import { useParams } from "react-router-dom";
import { srtSets } from "../data/srtSets";

function SRTPracticeMode() {

  const { setId } = useParams();

  const situations =
    srtSets[`set${setId}`];

  const [index, setIndex] = useState(0);

  const [responses, setResponses] =
    useState({});

  const handleChange = (e) => {
    setResponses({
      ...responses,
      [index]: e.target.value,
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-8">
        Practice Mode
      </h1>

      <p className="text-xl mb-6">
        Situation {index + 1} / {situations.length}
      </p>

      <div className="bg-white p-8 rounded-xl shadow">

        <p className="text-2xl">
          {situations[index]}
        </p>

        <textarea
          rows="8"
          value={responses[index] || ""}
          onChange={handleChange}
          className="w-full border mt-6 p-4 rounded-lg"
          placeholder="Write your response..."
        />

        <div className="flex justify-between mt-6">

          <button
            disabled={index === 0}
            onClick={() =>
              setIndex(index - 1)
            }
            className="bg-gray-500 text-white px-6 py-2 rounded"
          >
            Previous
          </button>

          <button
            disabled={index === situations.length - 1}
            onClick={() =>
              setIndex(index + 1)
            }
            className="bg-blue-600 text-white px-6 py-2 rounded"
          >
            Next
          </button>

        </div>
      </div>
    </div>
  );
}

export default SRTPracticeMode;