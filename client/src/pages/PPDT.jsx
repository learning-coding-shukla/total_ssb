import { useState, useEffect } from "react";
import ppdtImages from "../data/ppdtImages";

function PPDT() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [phase, setPhase] = useState("observation");
  // observation -> character -> story

  const [observationTime, setObservationTime] = useState(30);
  const [characterTime, setCharacterTime] = useState(60);
  const [storyTime, setStoryTime] = useState(240);

  const [isPaused, setIsPaused] = useState(false);

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

    document.addEventListener(
      "contextmenu",
      disableRightClick
    );

    return () => {
      document.removeEventListener(
        "contextmenu",
        disableRightClick
      );
    };
  }, []);

  // Pause on Tab Switch
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPaused(document.hidden);
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
    };
  }, []);

  // Observation Timer
  useEffect(() => {
    if (isPaused) return;

    if (
      phase === "observation" &&
      observationTime > 0
    ) {
      const timer = setTimeout(() => {
        setObservationTime((prev) => prev - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }

    if (
      phase === "observation" &&
      observationTime === 0
    ) {
      const timeoutId = setTimeout(() => {
        setPhase("character");
      }, 0);

      return () => clearTimeout(timeoutId);
    }
  }, [phase, observationTime, isPaused]);

  // Character Timer
  useEffect(() => {
    if (isPaused) return;

    if (
      phase === "character" &&
      characterTime > 0
    ) {
      const timer = setTimeout(() => {
        setCharacterTime((prev) => prev - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }

    if (
      phase === "character" &&
      characterTime === 0
    ) {
      const timeoutId = setTimeout(() => {
        setPhase("story");
      }, 0);

      return () => clearTimeout(timeoutId);
    }
  }, [phase, characterTime, isPaused]);

  // Story Timer
  useEffect(() => {
    if (isPaused) return;

    if (
      phase === "story" &&
      storyTime > 0
    ) {
      const timer = setTimeout(() => {
        setStoryTime((prev) => prev - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [phase, storyTime, isPaused]);

  const nextImage = () => {
    const attempts =
      JSON.parse(
        localStorage.getItem(
          "ppdt_attempts_data"
        )
      ) || [];

    attempts.push({
      imageNumber: currentIndex + 1,
      completedAt: new Date().toISOString(),
    });

    localStorage.setItem(
      "ppdt_attempts_data",
      JSON.stringify(attempts)
    );

    if (currentIndex === ppdtImages.length - 1) {
      setCurrentIndex(ppdtImages.length);
      return;
    }

    setCurrentIndex((prev) => prev + 1);

    setPhase("observation");

    setObservationTime(30);
    setCharacterTime(60);
    setStoryTime(240);
  };

  const isCompleted =
    currentIndex >= ppdtImages.length;

  if (isCompleted) {
    return (
      <div className="max-w-6xl mx-auto p-10 text-center">
        <div className="bg-gradient-to-r from-slate-900 via-green-950 to-slate-900 rounded-3xl p-12 text-white border border-yellow-500/30">
          <h1 className="text-6xl font-bold mb-6">
            🏅 PPDT Session Completed
          </h1>

          <p className="text-xl text-slate-300">
            Excellent effort, future officer.
          </p>

          <p className="mt-4 text-slate-400">
            Continue developing observation,
            leadership and storytelling skills.
          </p>
        </div>
      </div>
    );
  }

  const currentTimer =
    phase === "observation"
      ? observationTime
      : phase === "character"
      ? characterTime
      : storyTime;

  const minutes = Math.floor(
    currentTimer / 60
  );

  const seconds = currentTimer % 60;

  return (
    <div className="max-w-6xl mx-auto p-10">

      {isPaused && (
        <div className="fixed inset-0 bg-black/95 flex flex-col justify-center items-center z-50">
          <h1 className="text-white text-4xl font-bold mb-6">
            ⏸ Test Paused
          </h1>

          <button
            onClick={() =>
              setIsPaused(false)
            }
            className="bg-yellow-500 px-6 py-3 rounded-lg text-black font-bold"
          >
            Resume Test
          </button>
        </div>
      )}

      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-green-950 to-slate-900 rounded-3xl p-8 mb-10 text-white border border-yellow-500/30">
        <h1 className="text-5xl font-bold">
          🖼️ PPDT Practice
        </h1>

        <p className="mt-3 text-slate-300">
          Observe • Analyse • Lead
        </p>
      </div>

      {/* Progress */}
      <div className="mb-8">
        <p className="text-center text-xl font-bold">
          Picture {currentIndex + 1} /{" "}
          {ppdtImages.length}
        </p>

        <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
          <div
            className="bg-yellow-500 h-3 rounded-full"
            style={{
              width: `${
                ((currentIndex + 1) /
                  ppdtImages.length) *
                100
              }%`,
            }}
          />
        </div>
      </div>

      {/* Timer */}
      <div className="text-center mb-10">

        <div className="inline-flex items-center justify-center w-36 h-36 border-4 border-red-500 rounded-full">

          <span className="text-4xl font-bold text-red-600">
            {minutes}:
            {seconds
              .toString()
              .padStart(2, "0")}
          </span>

        </div>

        <p className="mt-4 text-xl font-semibold">

          {phase === "observation" &&
            "🖼 Observe the Picture"}

          {phase === "character" &&
            "👤 Character Identification"}

          {phase === "story" &&
            "✍ Story Writing"}

        </p>

      </div>

      {/* Observation Phase */}
      {phase === "observation" && (
        <img
          src={ppdtImages[currentIndex]}
          alt="PPDT"
          className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
        />
      )}

      {/* Character Identification */}
      {phase === "character" && (
        <div className="bg-blue-50 border rounded-2xl p-8 max-w-3xl mx-auto">

          <h2 className="text-3xl font-bold mb-4">
            👤 Character Identification
          </h2>

          <p className="mb-6">
            Identify the main character.
          </p>

          <ul className="space-y-3 text-lg">
            <li>✅ Age</li>
            <li>✅ Gender</li>
            <li>✅ Mood</li>
            <li>✅ Character Number</li>
          </ul>

        </div>
      )}

      {/* Story Writing */}
      {phase === "story" && (
        <div className="bg-green-50 border rounded-2xl p-8 max-w-3xl mx-auto">

          <h2 className="text-3xl font-bold mb-4">
            ✍ Story Writing Phase
          </h2>

          <p className="mb-6">
            Write your story in your notebook.
          </p>

          <ul className="space-y-3 text-lg">
            <li>✅ Situation Before</li>
            <li>✅ Situation During</li>
            <li>✅ Positive Outcome</li>
            <li>✅ Officer-Like Approach</li>
          </ul>

          {storyTime === 0 && (
            <div className="mt-8 p-5 bg-red-100 rounded-xl">
              <h3 className="text-red-600 text-2xl font-bold">
                ⏰ Time Over
              </h3>

              <p className="mt-2">
                Review your notebook and move
                to the next picture.
              </p>
            </div>
          )}

        </div>
      )}

      {/* Permanent Next Button */}
      <div className="fixed bottom-6 right-6">

        <button
          onClick={nextImage}
          className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold shadow-xl"
        >
          Next Picture ➜
        </button>

      </div>

    </div>
  );
}

export default PPDT;