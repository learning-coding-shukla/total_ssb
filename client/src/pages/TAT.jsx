// import { useState, useEffect } from "react";
// import tatImages from "../data/tatImages";

// function TAT() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(240);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft((prev) => {
//         if (prev <= 1) {
//           // After image viewing time ends
//           if (showImage) {
//             setShowImage(false);
//             return 240;
//           }

//           // After story writing time ends
//           nextImage();
//           return 30;
//         }

//         return prev - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [currentIndex, showImage]);

//   <div className="text-center mb-6">
//     <h2 className="text-4xl font-bold text-red-600">{timeLeft}s</h2>

//     {showImage ? (
//       <img
//         src={`/tat/${tatImages[currentIndex]}`}
//         alt="TAT"
//         className="w-full max-w-2xl mx-auto rounded-lg shadow"
//       />
//     ) : (
//       <textarea
//         className="w-full border p-4 rounded-lg"
//         rows="12"
//         placeholder="Write your story here..."
//       />
//     )}
//   </div>;

//   const minutes = Math.floor(timeLeft / 60);
//   const seconds = timeLeft % 60;

//   return (
//     <div className="max-w-5xl mx-auto p-10">
//       <h1 className="text-5xl font-bold mb-8">TAT Practice</h1>

//       <div className="text-center mb-6">
//         <h2 className="text-3xl font-bold text-red-600">
//           {minutes}:{seconds.toString().padStart(2, "0")}
//         </h2>
//       </div>

//       <img
//         src={tatImages[currentIndex]}
//         alt="TAT"
//         className="w-full max-w-3xl mx-auto rounded-xl shadow-lg"
//       />

//       <div className="text-center mt-6">
//         <button
//           onClick={nextImage}
//           className="bg-green-600 text-white px-6 py-3 rounded-lg"
//         >
//           Next Image
//         </button>
//       </div>

//       <textarea
//         className="w-full border mt-6 p-4 rounded-lg"
//         rows="10"
//         placeholder="Write your story here..."
//       />
//       <div className="text-center mt-6">
//         <button
//           onClick={nextImage}
//           className="bg-green-600 text-white px-6 py-3 rounded-lg"
//         >
//           Next Picture
//         </button>
//       </div>
//     </div>
//   );
// }

// export default TAT;

import { useState, useEffect } from "react";
import tatImages from "../data/tatImages";

function TAT() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showImage, setShowImage] = useState(true);
  const [timeLeft, setTimeLeft] = useState(30);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === tatImages.length - 1 ? 0 : prev + 1));

    setShowImage(true);
    setTimeLeft(30);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (showImage) {
            setShowImage(false);
            return 240; // 4 minutes writing time
          }

          nextImage();
          return 30;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentIndex, showImage]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="max-w-5xl mx-auto p-10">
      <h1 className="text-5xl font-bold mb-8 text-center">TAT Practice</h1>

      <p className="text-center font-semibold mb-4">
        Picture {currentIndex + 1} / {tatImages.length}
      </p>

      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold text-red-600">
          {minutes}:{seconds.toString().padStart(2, "0")}
        </h2>

        {showImage ? (
          <p className="text-green-600 mt-2">Observe the Picture</p>
        ) : (
          <p className="text-blue-600 mt-2">Write Your Story</p>
        )}
      </div>

      {showImage ? (
        <img
          src={tatImages[currentIndex]}
          alt="TAT"
          className="w-full max-w-3xl mx-auto rounded-xl shadow-lg"
        />
      ) : (
        <textarea
          className="w-full border p-4 rounded-lg"
          rows="12"
          placeholder="Write your story here..."
        />
      )}

      <div className="text-center mt-6">
        <button
          onClick={nextImage}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
        >
          Next Picture
        </button>
      </div>
    </div>
  );
}

export default TAT;
