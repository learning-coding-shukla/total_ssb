import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { tatSets } from "../data/tatSets";
import alarmSound from "../assets/alarm.mp3";

const OBSERVE_TIME = 30;
const WRITE_TIME = 240;
const TRANSITION_TIME = 700;
const COMPLETE_SCREEN_TIME = 2500;

function TAT() {
  const { setId } = useParams();
  const navigate = useNavigate();

  const tatImages = tatSets[`set${setId}`] || [];

  const [hasStarted, setHasStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState("observe"); // observe -> write -> transition -> completed
  const [timeLeft, setTimeLeft] = useState(OBSERVE_TIME);
  const [isPaused, setIsPaused] = useState(false);
  const [resumeCountdown, setResumeCountdown] = useState(0);
  const [showCompletedScreen, setShowCompletedScreen] = useState(false);
  const [needsFullscreenClick, setNeedsFullscreenClick] = useState(false);

  const alarmRef = useRef(null);

useEffect(() => {

  alarmRef.current = new Audio(alarmSound);

  alarmRef.current.preload = "auto";
  alarmRef.current.volume = 1;

}, []);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const isBlankSlide = tatImages[currentIndex] === null;

  // Progress logic: reaches 100% when writing the final picture
  const progress = Math.min(
    ((currentIndex + (phase !== "observe" ? 1 : 0)) / tatImages.length) * 100,
    100
  );

  // Use a ref for interval state access to prevent interval recreation
  const stateRef = useRef({
    hasStarted,
    isPaused,
    phase,
    showCompletedScreen,
    needsFullscreenClick,
  });

  useEffect(() => {
    stateRef.current = {
      hasStarted,
      isPaused,
      phase,
      showCompletedScreen,
      needsFullscreenClick,
    };
  }, [hasStarted, isPaused, phase, showCompletedScreen, needsFullscreenClick]);

  if (tatImages.length === 0) {
    return (
      <div className="min-h-screen flex justify-center items-center text-4xl font-bold">
        Invalid TAT Set
      </div>
    );
  }

  // ==========================================
  // Start Test & Fullscreen Logic
  // ==========================================
 const handleStartTest = async () => {

  await document.documentElement.requestFullscreen?.();

  const alarm = alarmRef.current;

  alarm.volume = 1;

  try {
    await alarm.play();
    alarm.pause();
    alarm.currentTime = 0;
  } catch (err) {
    console.log(err);
  }

  setHasStarted(true);

};

  const handleReturnToFullscreen = () => {
    document.documentElement.requestFullscreen?.().catch(() => {});
    setNeedsFullscreenClick(false);
    setResumeCountdown(3); // Start countdown before resuming test
  };

  // ==========================================
  // Disable Right Click
  // ==========================================
  useEffect(() => {
    const disableRightClick = (e) => e.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);
    return () => document.removeEventListener("contextmenu", disableRightClick);
  }, []);

  // ==========================================
  // Pause when tab changes (Auto-Resume Logic)
  // ==========================================
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden && hasStarted && !showCompletedScreen) {
        setIsPaused(true);
        setResumeCountdown(3); // Always reset countdown to 3 when hidden
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, [hasStarted, showCompletedScreen]);

  // ==========================================
  // Single Unified Timer Interval
  // ==========================================
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const state = stateRef.current;

      // Do nothing if not started, completed, or waiting for fullscreen click
      if (!state.hasStarted || state.showCompletedScreen || state.needsFullscreenClick) {
        return;
      }

      if (state.isPaused) {
        // Handle Auto-Resume Countdown
        setResumeCountdown((prev) => {
          if (prev <= 1) {
            setIsPaused(false);
            return 0;
          }
          return prev - 1;
        });
      } else if (state.phase !== "transition") {
        // Handle Main Timer
        setTimeLeft((prev) => Math.max(prev - 1, 0));
      }
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []); // Empty dependencies! Runs only once.

  // ==========================================
  // Phase Controller
  // ==========================================
  useEffect(() => {
    if (!hasStarted || timeLeft !== 0) return;

    if (phase === "observe") {
      setPhase("write");
      setTimeLeft(WRITE_TIME);
      return;
    }

    if (phase === "write") {
      alarmRef.current.currentTime = 0;
      alarmRef.current.play().catch(() => {});
      navigator.vibrate?.(200); // Mobile Vibration Support

      setPhase("transition");

      timeoutRef.current = setTimeout(() => {
        if (currentIndex < tatImages.length - 1) {
          setCurrentIndex((prev) => prev + 1);
          setPhase("observe");
          setTimeLeft(OBSERVE_TIME);
          return;
        }

        setShowCompletedScreen(true);
        setPhase("completed");

        localStorage.setItem(
          `tat_set_${setId}`,
          JSON.stringify({ completed: true, completedAt: new Date().toISOString() })
        );

        timeoutRef.current = setTimeout(() => {
          if (document.fullscreenElement) {
            document.exitFullscreen?.();
          }
          navigate(`/tat/result/${setId}`);
        }, COMPLETE_SCREEN_TIME);
      }, TRANSITION_TIME);
    }
  }, [timeLeft, phase, currentIndex, tatImages.length, navigate, setId, hasStarted]);

  // ==========================================
  // Image Preloading
  // ==========================================
  useEffect(() => {
    if (currentIndex + 1 < tatImages.length && tatImages[currentIndex + 1] !== null) {
      const nextImage = new Image();
      nextImage.src = tatImages[currentIndex + 1];
    }
  }, [currentIndex, tatImages]);

  // ==========================================
  // Cleanup
  // ==========================================
  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
      alarmRef.current.pause();
      alarmRef.current.currentTime = 0; // Alarm Cleanup
    };
  }, []);

  // ==========================================
  // Manual Fullscreen Recovery
  // ==========================================
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && hasStarted && !showCompletedScreen) {
        setIsPaused(true);
        setNeedsFullscreenClick(true);
      }
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, [hasStarted, showCompletedScreen]);

  // ==========================================
  // Prevent Common Keyboard Shortcuts
  // ==========================================
  useEffect(() => {
    const handleKeyDown = (e) => {
      const isF12 = e.key === "F12";
      const isF5 = e.key === "F5";
      const isDevToolsI = e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i";
      const isDevToolsJ = e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "j";
      const isDevToolsC = e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "c";
      const isViewSource = e.ctrlKey && e.key.toLowerCase() === "u";
      const isRefresh = e.ctrlKey && e.key.toLowerCase() === "r";

      if (isF12 || isF5 || isDevToolsI || isDevToolsJ || isDevToolsC || isViewSource || isRefresh) {
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // ==========================================
  // Warn Before Closing Tab
  // ==========================================
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (!hasStarted || showCompletedScreen) return;
      e.preventDefault();
      e.returnValue = "Your TAT Test is still running.";
      return e.returnValue;
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [hasStarted, showCompletedScreen]);

  // ==========================================
  // Disable Image Dragging
  // ==========================================
  useEffect(() => {
    const preventDrag = (e) => e.preventDefault();
    document.addEventListener("dragstart", preventDrag);
    return () => document.removeEventListener("dragstart", preventDrag);
  }, []);

  // ==========================================
  // Helper Function
  // ==========================================
  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec.toString().padStart(2, "0")}`;
  };

  // ==========================================
  // RENDER: Start Screen
  // ==========================================
  if (!hasStarted) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-6 select-none">
        <div className="max-w-2xl w-full bg-white p-10 rounded-2xl shadow-2xl border-4 border-blue-900">
          <h1 className="text-5xl font-bold text-center text-blue-900 mb-8">TAT Practice</h1>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 shadow-inner">
            <table className="w-full text-left border-collapse text-lg text-gray-800">
              <tbody>
                <tr className="border-b border-gray-200">
                  <th className="py-3 font-semibold text-gray-600">Total Pictures</th>
                  <td className="py-3 font-bold text-blue-800">{tatImages.length}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-3 font-semibold text-gray-600">Observation Time</th>
                  <td className="py-3">30 Seconds / Picture</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-3 font-semibold text-gray-600">Writing Time</th>
                  <td className="py-3">4 Minutes / Picture</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-3 font-semibold text-gray-600">Equipment</th>
                  <td className="py-3">Physical Notebook Required</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-3 font-semibold text-gray-600">Screen Mode</th>
                  <td className="py-3">Strict Fullscreen</td>
                </tr>
                <tr>
                  <th className="py-3 font-semibold text-gray-600">Audio Indicator</th>
                  <td className="py-3">Bell Rings After Writing Time</td>
                </tr>
              </tbody>
            </table>
          </div>

          <button
            onClick={handleStartTest}
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold text-2xl py-4 rounded-xl transition-colors shadow-lg"
          >
            Start Test
          </button>
        </div>
      </div>
    );
  }

  // ==========================================
  // RENDER: Main Test UI (Real SSB Layout)
  // ==========================================
  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative select-none overflow-hidden">
      {/* Dynamic Keyframe Injection for Fade Animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-in forwards;
        }
      `}</style>

      {/* ================= FULLSCREEN RECOVERY SCREEN ================= */}
      {needsFullscreenClick && (
        <div className="fixed inset-0 bg-black/95 z-[60] flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-red-500 mb-6">Fullscreen Exited</h1>
          <p className="text-xl text-gray-300 mb-10">The test requires strict fullscreen mode.</p>
          <button
            onClick={handleReturnToFullscreen}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-white text-xl font-bold"
          >
            Return to Fullscreen
          </button>
        </div>
      )}

      {/* ================= PAUSE SCREEN ================= */}
      {isPaused && !needsFullscreenClick && (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold text-red-500 mb-6">Test Paused</h1>
          <p className="text-xl text-gray-300 mb-10">Tab switched or interrupted.</p>
          <div className="text-3xl text-white">
            Resuming in <span className="text-5xl font-black text-blue-400">{resumeCountdown}</span>...
          </div>
        </div>
      )}

      {/* ================= COMPLETED SCREEN ================= */}
      {showCompletedScreen && (
        <div className="fixed inset-0 bg-green-700 text-white flex flex-col justify-center items-center z-50 animate-pulse">
          <div className="text-8xl mb-6">✔</div>
          <h1 className="text-5xl font-bold">TAT Completed</h1>
          <p className="mt-6 text-2xl">Excellent!</p>
          <p className="mt-4 text-lg opacity-90">Redirecting to Result...</p>
        </div>
      )}

      {/* ================= REAL SSB LAYOUT HEADER ================= */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start z-10">
        <div className="text-2xl font-bold opacity-75">
          Picture {currentIndex + 1} / {tatImages.length}
          <span className="ml-4 text-gray-400 font-medium text-lg">
            Remaining: {tatImages.length - (currentIndex + 1)}
          </span>
        </div>
        <div className="text-4xl font-mono text-red-500 font-bold bg-black/80 px-4 py-2 border-2 border-red-900 rounded tracking-widest shadow-lg">
          {formatTime(timeLeft)}
        </div>
      </div>

      {/* ================= MAIN CONTENT (Fades on Phase/Index change) ================= */}
      <main
        key={`${currentIndex}-${phase}`} // Triggers re-render and CSS animation
        className="flex-1 w-full h-full flex items-center justify-center animate-fade-in"
      >
        {/* ---------------- OBSERVE ---------------- */}
        {phase === "observe" && (
          <div className="w-full h-full flex items-center justify-center p-8 mt-12 mb-8">
            {isBlankSlide ? (
              // Pure white blank slide realism
              <div className="w-full h-full max-w-6xl max-h-[80vh] bg-white rounded-md"></div>
            ) : (
              <img
                src={tatImages[currentIndex]}
                alt={`TAT ${currentIndex + 1}`}
                draggable={false}
                loading="eager"
                decoding="async"
                className="w-full h-full max-w-6xl max-h-[85vh] object-contain pointer-events-none select-none"
              />
            )}
          </div>
        )}

        {/* ---------------- WRITE ---------------- */}
        {phase === "write" && (
          // Pure white writing screen realism
          <div className="w-full h-full bg-white flex items-center justify-center">
            <h2 className="text-4xl md:text-5xl font-medium text-black tracking-wide">
              Write your story in your notebook.
            </h2>
          </div>
        )}

        {/* ---------------- TRANSITION ---------------- */}
        {phase === "transition" && (
          // Pure black transition screen realism
          <div className="w-full h-full bg-black"></div>
        )}
      </main>

      {/* ================= PROGRESS BAR (Bottom Edge) ================= */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-900">
        <div
          className="h-full bg-gray-400 transition-all duration-1000 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default TAT;