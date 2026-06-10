import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { srtSets } from "../data/srtSets";

function SRTRealMode() {
  const { setId } = useParams();
  const navigate = useNavigate();

  const situations = srtSets[`set${setId}`];

  const [timeLeft, setTimeLeft] = useState(1800); // 30 mins
  const [responses, setResponses] = useState({});

  if (!situations) {
    return (
      <div className="min-h-screen flex justify-center items-center text-xl">
        Invalid SRT Set
      </div>
    );
  }

  // Submit Test
  const handleSubmit = () => {
    const attempted = Object.values(responses).filter(
      (response) => response.trim() !== "",
    ).length;

    if (document.fullscreenElement) {
      document.exitFullscreen?.();
    }
    const previousBest = Number(localStorage.getItem("srt_best")) || 0;

    if (attempted > previousBest) {
      localStorage.setItem("srt_best", attempted);
    }

    navigate(`/srt/result/${setId}`, {
      state: {
        attempted,
        total: situations.length,
      },
    });
  };

  // Fullscreen + Timer
  useEffect(() => {
    document.documentElement.requestFullscreen?.();

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);

          const attempted = Object.values(responses).filter(
            (response) => response.trim() !== "",
          ).length;

          if (document.fullscreenElement) {
            document.exitFullscreen?.();
          }
          const previousBest = Number(localStorage.getItem("srt_best")) || 0;

          if (attempted > previousBest) {
            localStorage.setItem("srt_best", attempted);
          }
          navigate(`/srt/result/${setId}`, {
            state: {
              attempted,
              total: situations.length,
            },
          });

          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);

      if (document.fullscreenElement) {
        document.exitFullscreen?.();
      }
    };
  }, [responses, navigate, setId, situations.length]);

  // Auto Save
  useEffect(() => {
    localStorage.setItem(`srt_set_${setId}`, JSON.stringify(responses));
  }, [responses, setId]);

  // Pause on Tab Switch
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        alert("Please stay on the test screen.");
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Disable Right Click
  useEffect(() => {
    const disableRightClick = (e) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", disableRightClick);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  const formatTime = () => {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;

    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const attempted = Object.values(responses).filter(
    (r) => r.trim() !== "",
  ).length;

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="sticky top-0 bg-white shadow p-4 rounded mb-6 z-50">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-red-600">
            Time Left: {formatTime()}
          </h2>

          <h2 className="text-2xl font-bold text-green-600">
            Attempted: {attempted}/{situations.length}
          </h2>
        </div>
      </div>

      {/* Situations */}
      {situations.map((situation, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow mb-6">
          <p className="font-bold mb-3 text-lg">Situation {index + 1}</p>

          <p className="mb-4">{situation}</p>

          <textarea
            rows="3"
            value={responses[index] || ""}
            onChange={(e) =>
              setResponses({
                ...responses,
                [index]: e.target.value,
              })
            }
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your response..."
          />
        </div>
      ))}

      {/* Submit Button */}
      <div className="text-center mt-10 mb-20">
        <button
          onClick={handleSubmit}
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-xl font-semibold"
        >
          Submit Test
        </button>
      </div>
    </div>
  );
}

export default SRTRealMode;
