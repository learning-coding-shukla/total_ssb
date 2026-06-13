import { useEffect } from "react";
import { useParams } from "react-router-dom";

function GPEComplete() {
  const { setId } = useParams();

  useEffect(() => {
    localStorage.setItem(
      `gpe_set_${setId}`,
      "completed"
    );
  }, [setId]);

 
  return (
    <div className="max-w-4xl mx-auto p-10 text-center">

      <h1 className="text-5xl font-bold mb-6">
        🎉 GPE Completed
      </h1>

      <p className="text-xl text-gray-600">
        Compare your notebook solution with your own analysis and
        identify areas of improvement.
      </p>

      <p className="mt-4">
        Remember: There is no single perfect GPE solution.
        Prioritization, practical thinking and resource utilization matter most.
      </p>

    </div>
  );
}

export default GPEComplete;