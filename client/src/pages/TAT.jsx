import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { tatSets } from "../data/tatSets";
import alarmSound from "../assets/alarm.mp3";
import { useNavigate } from "react-router-dom";

function TAT() {
  const { setId } = useParams();

  const tatImages = tatSets[`set${setId}`];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showImage, setShowImage] = useState(true);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isPaused, setIsPaused] = useState(false);

  const alarmRef = useRef(new Audio(alarmSound));
  const navigate = useNavigate();

  if (!tatImages) {
    return (
      <div className="min-h-screen flex justify-center items-center text-2xl font-bold">
        Invalid TAT Set
      </div>
    );
  }

  // Fullscreen
  useEffect(() => {
    document.documentElement.requestFullscreen?.();

    return () => {
      if (document.fullscreenElement) {
        document.exitFullscreen?.();
      }
    };
  }, []);

  // Disable Right Click
  useEffect(() => {
    const disableRightClick = (e) => e.preventDefault();

    document.addEventListener("contextmenu", disableRightClick);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  // Pause on tab switch
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPaused(document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const nextImage = () => {
    if (currentIndex < tatImages.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setShowImage(true);
      setTimeLeft(30);
    } else {
      localStorage.setItem(
        `tat_set_${setId}`,
        JSON.stringify({
          completed: true,
          completedAt: new Date().toISOString(),
        }),
      );

      if (document.fullscreenElement) {
        document.exitFullscreen?.();
      }

      navigate(`/tat/result/${setId}`);
    }
  };

  // Timer
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Observation complete
          if (showImage) {
            setShowImage(false);
            return 240;
          }

          // Story complete
          alarmRef.current.currentTime = 0;
          alarmRef.current.play().catch(() => {});

          setTimeout(() => {
            nextImage();
          }, 1500);

          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [showImage, currentIndex, isPaused]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const isBlankSlide = tatImages[currentIndex] === null;

  return (
    <div className="max-w-5xl mx-auto p-10">
      {isPaused && (
        <div className="fixed inset-0 bg-black/95 flex flex-col justify-center items-center z-50">
          <h1 className="text-white text-4xl font-bold mb-6">Test Paused</h1>

          <button
            onClick={() => setIsPaused(false)}
            className="bg-green-600 px-6 py-3 rounded-lg text-white hover:bg-green-700"
          >
            Resume Test
          </button>
        </div>
      )}

      <h1 className="text-5xl font-bold mb-8 text-center">TAT Set {setId}</h1>

      <div className="text-center mb-4">
        <p className="font-semibold text-lg">
          Picture {currentIndex + 1} / {tatImages.length}
        </p>
      </div>

      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-32 h-32 border-4 border-red-500 rounded-full">
          <span className="text-4xl font-bold text-red-600">
            {minutes}:{seconds.toString().padStart(2, "0")}
          </span>
        </div>

        <div className="mt-4">
          {showImage ? (
            <p className="text-green-600 font-semibold text-lg">
              {isBlankSlide ? "Observe the Blank Slide" : "Observe the Picture"}
            </p>
          ) : (
            <p className="text-blue-600 font-semibold text-lg">
              {isBlankSlide
                ? "Write a Self-Generated Story"
                : "Write Your Story"}
            </p>
          )}
        </div>
      </div>

      {showImage ? (
        isBlankSlide ? (
          <div className="w-full max-w-3xl h-[450px] mx-auto rounded-xl shadow-lg bg-white border-4 border-gray-300 flex items-center justify-center">
            <h2 className="text-4xl font-bold text-gray-500">BLANK SLIDE</h2>
          </div>
        ) : (
          <img
            src={tatImages[currentIndex]}
            alt={`TAT ${currentIndex + 1}`}
            className="w-full max-w-3xl mx-auto rounded-xl shadow-lg"
          />
        )
      ) : (
        <textarea
          className="w-full border p-4 rounded-lg text-lg"
          rows="14"
          placeholder={
            isBlankSlide
              ? "Write a self-generated story..."
              : "Write your story here..."
          }
        />
      )}
    </div>
  );
}

export default TAT;
