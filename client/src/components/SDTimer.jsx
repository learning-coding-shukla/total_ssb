import { useEffect, useRef, useState } from "react";
import alarmSound from "../assets/alarm.mp3";

const TOTAL_TIME = 15 * 60; // 15 Minutes

export default function SDTimer() {
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const alarmRef = useRef(new Audio(alarmSound));

  useEffect(() => {
    let timer;

    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            alarmRef.current.currentTime = 0;
            alarmRef.current.play().catch(() => {});

            window.setTimeout(() => {
              alert("⏰ Time is up! Please stop writing and submit your test.");
            }, 300);

            return 0;
          }

          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(TOTAL_TIME);
  };

  return (
    <div className="bg-slate-900 rounded-xl shadow-lg p-8 text-center">
      <h2 className="text-2xl font-bold mb-6">⏱ Self Description Timer</h2>
      <div
        className={`text-6xl font-bold tracking-wider ${
          timeLeft <= 300 ? "text-red-500 animate-pulse" : "text-green-400"
        }`}
      >
        {minutes}:{seconds}
      </div>

      <div className="w-full bg-slate-700 rounded-full h-4 mt-6 overflow-hidden">
        <div
          className={`h-full transition-all duration-1000 ${
            timeLeft <= 300 ? "bg-red-500" : "bg-green-500"
          }`}
          style={{
            width: `${(timeLeft / TOTAL_TIME) * 100}%`,
          }}
        />
      </div>

      <p className="text-gray-400 mt-3">
        Official Time Limit: <span className="text-white">15 Minutes</span>
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {!isRunning ? (
          <button
            onClick={() => setIsRunning(true)}
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition"
          >
            ▶ {timeLeft === TOTAL_TIME ? "Start" : "Resume"}
          </button>
        ) : (
          <button
            onClick={() => setIsRunning(false)}
            className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-lg font-semibold transition"
          >
            ⏸ Pause
          </button>
        )}

        <button
          onClick={resetTimer}
          className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition"
        >
          ↺ Restart
        </button>
      </div>
    </div>
  );
}
