import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { watSets } from "../data/watSets";
import beep from "../assets/beep.mp3";
import ProgressBar from "../components/ProgressBar";

function WATTest() {
  const { setId } = useParams();
  const navigate = useNavigate();

  const words = watSets[`set${setId}`];

  const [currentWord, setCurrentWord] = useState(0);
  const [timer, setTimer] = useState(15);
  const [isPaused, setIsPaused] = useState(false);

  const audioRef = useRef(new Audio(beep));

  if (!words) {
    return (
      <div className="min-h-screen flex justify-center items-center text-xl">
        Invalid WAT Set
      </div>
    );
  }

  // Enter Fullscreen
  useEffect(() => {
    document.documentElement.requestFullscreen?.();

    return () => {
      if (document.fullscreenElement) {
        document.exitFullscreen?.();
      }
    };
  }, []);

  // Timer
  useEffect(() => {
    if (isPaused || timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused, timer]);

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

  // Pause on Tab Switch
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPaused(document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Change Word After 15 Seconds
  useEffect(() => {
    if (timer !== 0) return;

    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => {});

    if (currentWord < words.length - 1) {
      setCurrentWord((prev) => prev + 1);
      setTimer(15);
    } else {
      // Save Progress
      localStorage.setItem(
        `wat_set_${setId}`,
        JSON.stringify({
          completed: true,
          completedAt: new Date().toISOString(),
        }),
      );

      if (document.fullscreenElement) {
        document.exitFullscreen?.();
      }

      navigate(`/wat/result/${setId}`);
    }
  }, [timer, currentWord, words.length, navigate, setId]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center p-6">
      {/* Pause Screen */}
      {isPaused && (
        <div className="fixed inset-0 bg-black/95 flex flex-col justify-center items-center z-50">
          <h1 className="text-white text-4xl font-bold mb-6">Test Paused</h1>

          <button
            onClick={() => setIsPaused(false)}
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg text-white font-semibold"
          >
            Resume Test
          </button>
        </div>
      )}

      {/* Set Name */}
      <h2 className="text-xl text-gray-400 mb-4">WAT SET {setId}</h2>

      {/* Progress Bar */}
      <div className="w-full max-w-4xl mb-8">
        <ProgressBar current={currentWord + 1} total={words.length} />
      </div>

      {/* Word Counter */}
      <p className="text-2xl mb-10">
        Word {currentWord + 1} / {words.length}
      </p>

      {/* Current Word */}
      <h1 className="text-7xl md:text-8xl font-bold text-center uppercase tracking-wider">
        {words[currentWord]}
      </h1>

      {/* Timer Circle */}
      <div className="mt-12 w-32 h-32 border-4 border-green-500 rounded-full flex items-center justify-center">
        <span className="text-5xl font-bold text-green-400">{timer}</span>
      </div>
    </div>
  );
}

export default WATTest;
