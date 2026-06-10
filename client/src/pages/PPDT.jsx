
import { useState, useEffect } from "react";
import ppdtImages from "../data/ppdtImages";

function PPDT() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [observationTime, setObservationTime] = useState(30);
  const [storyTime, setStoryTime] = useState(240);

  const [showImage, setShowImage] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const [story, setStory] = useState("");
  const [character, setCharacter] = useState("");
  const [narration, setNarration] = useState("");

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

    if (showImage && observationTime > 0) {
      const timer = setTimeout(() => {
        setObservationTime((prev) => prev - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }

    if (showImage && observationTime === 0) {
      setShowImage(false);
    }
  }, [observationTime, showImage, isPaused]);

  // Story Timer
  useEffect(() => {
    if (isPaused) return;

    if (!showImage && storyTime > 0) {
      const timer = setTimeout(() => {
        setStoryTime((prev) => prev - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [storyTime, showImage, isPaused]);

  const nextImage = () => {
    const attempts =
      Number(
        localStorage.getItem("ppdt_attempts")
      ) || 0;

    localStorage.setItem(
      "ppdt_attempts",
      attempts + 1
    );

    setCurrentIndex((prev) =>
      prev === ppdtImages.length - 1
        ? 0
        : prev + 1
    );

    setObservationTime(30);
    setStoryTime(240);

    setShowImage(true);

    setStory("");
    setCharacter("");
    setNarration("");
  };

  const minutes = Math.floor(
    (showImage
      ? observationTime
      : storyTime) / 60
  );

  const seconds =
    (showImage
      ? observationTime
      : storyTime) % 60;

  return (
    <div className="max-w-6xl mx-auto p-10">

      {isPaused && (
        <div className="fixed inset-0 bg-black/95 flex flex-col justify-center items-center z-50">
          <h1 className="text-white text-4xl font-bold mb-6">
            Test Paused
          </h1>

          <button
            onClick={() => setIsPaused(false)}
            className="bg-green-600 px-6 py-3 rounded-lg text-white"
          >
            Resume Test
          </button>
        </div>
      )}

      <h1 className="text-5xl font-bold text-center mb-6">
        PPDT Practice
      </h1>

      <p className="text-center text-lg font-semibold mb-4">
        Picture {currentIndex + 1} / {ppdtImages.length}
      </p>

      <div className="text-center mb-8">

        <div className="inline-flex items-center justify-center w-32 h-32 border-4 border-red-500 rounded-full">

          <span className="text-4xl font-bold text-red-600">
            {minutes}:
            {seconds
              .toString()
              .padStart(2, "0")}
          </span>

        </div>

        <div className="mt-4">

          {showImage ? (
            <p className="text-green-600 font-semibold">
              Observe the Picture
            </p>
          ) : (
            <p className="text-blue-600 font-semibold">
              Write Your Story
            </p>
          )}

        </div>
      </div>

      {showImage ? (
        <img
          src={ppdtImages[currentIndex]}
          alt="PPDT"
          className="w-full max-w-3xl mx-auto rounded-xl shadow-lg"
        />
      ) : (
        <>
          <div className="mt-10">

            <h2 className="text-2xl font-bold mb-4">
              Story Writing
            </h2>

            <textarea
              value={story}
              onChange={(e) =>
                setStory(e.target.value)
              }
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
              value={character}
              onChange={(e) =>
                setCharacter(
                  e.target.value
                )
              }
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
              value={narration}
              onChange={(e) =>
                setNarration(
                  e.target.value
                )
              }
              className="w-full border p-4 rounded-lg"
              rows="4"
              placeholder="Important narration points..."
            />

          </div>

          <div className="text-center mt-10">
            <button
              onClick={nextImage}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
            >
              Next Picture
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default PPDT;

