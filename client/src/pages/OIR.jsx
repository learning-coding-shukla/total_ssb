import { useEffect, useState } from "react";

const questions = [
  // Analogies (Words & Numbers)
  {
    question: "If ALL = 25, BALL = ?",
    options: ["27", "29", "31", "33"],
    answer: "27",
  },
  {
    question: "Dog : Puppy :: Cat : ?",
    options: ["Cub", "Kitten", "Calf", "Kid"],
    answer: "Kitten",
  },
  {
    question: "India : Delhi :: Japan : ?",
    options: ["Kyoto", "Beijing", "Tokyo", "Seoul"],
    answer: "Tokyo",
  },
  {
    question: "Thermometer : Temperature :: Barometer : ?",
    options: ["Pressure", "Humidity", "Wind", "Heat"],
    answer: "Pressure",
  },
  {
    question: "Doctor : Hospital :: Teacher : ?",
    options: ["Office", "School", "Field", "Court"],
    answer: "School",
  },
  {
    question: "Good : Bad :: Day : ?",
    options: ["Sun", "Evening", "Night", "Dark"],
    answer: "Night",
  },
  {
    question: "Eye : See :: Ear : ?",
    options: ["Hear", "Speak", "Taste", "Smell"],
    answer: "Hear",
  },
  {
    question: "2 : 8 :: 3 : ?",
    options: ["12", "18", "27", "36"],
    answer: "27",
  },
  {
    question: "5 : 25 :: 7 : ?",
    options: ["35", "42", "49", "56"],
    answer: "49",
  },
  {
    question: "10 : 100 :: 12 : ?",
    options: ["120", "144", "169", "200"],
    answer: "144",
  },

  // Coding & Decoding
  {
    question: "If CAT is coded as DBU, how is DOG coded?",
    options: ["EPH", "EPP", "FPH", "EPH"],
    answer: "EPH",
  },
  {
    question: "If APPLE is coded as BQQMF, how is MANGO coded?",
    options: ["NBOHP", "NBPGP", "OCPHQ", "NBPJP"],
    answer: "NBOHP",
  },
  {
    question: "If RED is 27, how much is BLUE?",
    options: ["38", "40", "42", "45"],
    answer: "40",
  },
  {
    question: "If A=1, B=2, C=3, what is the code for PEN?",
    options: ["35", "36", "38", "40"],
    answer: "35",
  },
  {
    question:
      "If GO is coded as 32, SHE is coded as 49, then SOME will be equal to?",
    options: ["56", "58", "62", "64"],
    answer: "56",
  },
  {
    question: "If WATER is written as YCVGT, then what is written as HKTG?",
    options: ["FIRE", "FEAR", "HAIR", "HOSE"],
    answer: "FIRE",
  },
  {
    question:
      "In a certain code, MIGHT is written as KGEFR. How is DIARY written in that code?",
    options: ["BGYPW", "BGYQV", "CGYPW", "BGYQW"],
    answer: "BGYPW",
  },
  {
    question: "If 1=A, 2=B, 3=C, what does 6,1,3,5 mean?",
    options: ["FACE", "FADE", "FACT", "FAKE"],
    answer: "FACE",
  },
  {
    question: "If Z=52 and ACT=48, then BAT will be equal to?",
    options: ["39", "41", "44", "46"],
    answer: "46",
  },
  {
    question: "If CAB is coded as 6, what is the code for BED?",
    options: ["11", "13", "9", "14"],
    answer: "11",
  },

  // Number Series
  {
    question: "Find the next number: 2, 4, 8, 16, ?",
    options: ["24", "30", "32", "64"],
    answer: "32",
  },
  {
    question: "Find the next number: 1, 4, 9, 16, 25, ?",
    options: ["30", "35", "36", "49"],
    answer: "36",
  },
  {
    question: "Find the next number: 5, 10, 15, 20, ?",
    options: ["25", "30", "35", "40"],
    answer: "25",
  },
  {
    question: "Find the next number: 3, 6, 12, 24, ?",
    options: ["36", "48", "60", "72"],
    answer: "48",
  },
  {
    question: "Find the next number: 100, 90, 80, 70, ?",
    options: ["50", "55", "60", "65"],
    answer: "60",
  },
  {
    question: "Find the missing term: 7, 14, 21, ?, 35",
    options: ["25", "28", "30", "32"],
    answer: "28",
  },
  {
    question: "Find the next number: 11, 13, 17, 19, ?",
    options: ["21", "23", "25", "27"],
    answer: "23",
  }, // Primes
  {
    question: "Find the next number: 1, 8, 27, 64, ?",
    options: ["100", "121", "125", "144"],
    answer: "125",
  }, // Cubes
  {
    question: "Find the missing term: 2, 5, 10, 17, ?",
    options: ["24", "25", "26", "27"],
    answer: "26",
  }, // n^2 + 1
  {
    question: "Find the next number: 10, 22, 46, 94, ?",
    options: ["180", "184", "190", "196"],
    answer: "190",
  }, // x2 + 2

  // Alphabet Series
  {
    question: "Find the next letter: A, C, E, G, ?",
    options: ["H", "I", "J", "K"],
    answer: "I",
  },
  {
    question: "Find the next letter: Z, X, V, T, ?",
    options: ["S", "R", "Q", "P"],
    answer: "R",
  },
  {
    question: "Find the next pair: AB, CD, EF, GH, ?",
    options: ["IJ", "JK", "KL", "LM"],
    answer: "IJ",
  },
  {
    question: "Find the next sequence: AZ, BY, CX, DW, ?",
    options: ["EU", "EV", "FV", "FU"],
    answer: "EV",
  },
  {
    question: "Find the missing letters: B, E, H, ?, N",
    options: ["J", "K", "L", "M"],
    answer: "K",
  },
  {
    question: "Find the next sequence: A1, B2, C3, ?",
    options: ["D3", "D4", "E4", "E5"],
    answer: "D4",
  },
  {
    question: "Find the next letters: MNO, NOP, OPQ, ?",
    options: ["PQR", "QRS", "RST", "NOP"],
    answer: "PQR",
  },
  {
    question: "Find the missing letter: C, F, I, L, ?",
    options: ["N", "O", "P", "Q"],
    answer: "O",
  },
  {
    question: "Find the missing letter: Z, W, T, Q, ?",
    options: ["N", "M", "L", "O"],
    answer: "N",
  },
  {
    question: "What comes next? AA, BBB, CCCC, ?",
    options: ["DDDD", "DDDDD", "EEEE", "EEEEE"],
    answer: "DDDDD",
  },

  // Odd One Out (Words)
  {
    question: "Find the odd one out: Apple, Banana, Carrot, Mango",
    options: ["Apple", "Banana", "Carrot", "Mango"],
    answer: "Carrot",
  },
  {
    question: "Find the odd one out: Car, Bus, Train, Ship",
    options: ["Car", "Bus", "Train", "Ship"],
    answer: "Ship",
  },
  {
    question: "Find the odd one out: Iron, Copper, Silver, Wood",
    options: ["Iron", "Copper", "Silver", "Wood"],
    answer: "Wood",
  },
  {
    question: "Find the odd one out: Physics, Chemistry, Geography, Biology",
    options: ["Physics", "Chemistry", "Geography", "Biology"],
    answer: "Geography",
  },
  {
    question: "Find the odd one out: Square, Circle, Rectangle, Triangle",
    options: ["Square", "Circle", "Rectangle", "Triangle"],
    answer: "Circle",
  },
  {
    question: "Find the odd one out: Tiger, Lion, Leopard, Cow",
    options: ["Tiger", "Lion", "Leopard", "Cow"],
    answer: "Cow",
  },
  {
    question: "Find the odd one out: Eye, Ear, Nose, Heart",
    options: ["Eye", "Ear", "Nose", "Heart"],
    answer: "Heart",
  },
  {
    question: "Find the odd one out: Pen, Pencil, Marker, Book",
    options: ["Pen", "Pencil", "Marker", "Book"],
    answer: "Book",
  },
  {
    question: "Find the odd one out: Table, Chair, Bed, Computer",
    options: ["Table", "Chair", "Bed", "Computer"],
    answer: "Computer",
  },
  {
    question: "Find the odd one out: Happy, Joyful, Delighted, Sad",
    options: ["Happy", "Joyful", "Delighted", "Sad"],
    answer: "Sad",
  },

  // Odd One Out (Numbers & Letters)
  {
    question: "Find the odd number out: 3, 5, 7, 9, 11",
    options: ["3", "5", "7", "9"],
    answer: "9",
  }, // Not a prime
  {
    question: "Find the odd number out: 16, 25, 36, 50, 64",
    options: ["25", "36", "50", "64"],
    answer: "50",
  }, // Not a perfect square
  {
    question: "Find the odd number out: 8, 27, 64, 100, 125",
    options: ["27", "64", "100", "125"],
    answer: "100",
  }, // Not a perfect cube
  {
    question: "Find the odd number out: 10, 20, 30, 45, 50",
    options: ["20", "30", "45", "50"],
    answer: "45",
  }, // Not a multiple of 10
  {
    question: "Find the odd number out: 12, 24, 36, 42, 48",
    options: ["24", "36", "42", "48"],
    answer: "42",
  }, // Not a multiple of 12
  {
    question: "Find the odd pair: (2,4), (3,9), (4,16), (5,20)",
    options: ["(2,4)", "(3,9)", "(4,16)", "(5,20)"],
    answer: "(5,20)",
  },
  {
    question: "Find the odd letters: ABC, DEF, GHI, JKL, MNO, PQS",
    options: ["DEF", "GHI", "JKL", "PQS"],
    answer: "PQS",
  },
  {
    question: "Find the odd letters: AEI, OUA, EIO, BCD",
    options: ["AEI", "OUA", "EIO", "BCD"],
    answer: "BCD",
  }, // Consonants
  {
    question: "Find the odd number out: 121, 144, 169, 196, 224",
    options: ["144", "169", "196", "224"],
    answer: "224",
  },
  {
    question: "Find the odd one out: 21, 35, 49, 63, 80",
    options: ["35", "49", "63", "80"],
    answer: "80",
  }, // Not a multiple of 7

  // Dictionary & Word Arrangements
  {
    question: "Which word comes first in the dictionary? Apple, Ape, Ant, Art",
    options: ["Apple", "Ape", "Ant", "Art"],
    answer: "Ant",
  },
  {
    question: "Which word comes last? Zebra, Zero, Zen, Zephyr",
    options: ["Zebra", "Zero", "Zen", "Zephyr"],
    answer: "Zero",
  },
  {
    question: "Arrange logically: 1. Seed, 2. Plant, 3. Tree, 4. Fruit",
    options: ["1,2,3,4", "1,3,2,4", "2,1,3,4", "4,3,2,1"],
    answer: "1,2,3,4",
  },
  {
    question: "Arrange logically: 1. Child, 2. Infant, 3. Adult, 4. Teenager",
    options: ["2,1,4,3", "1,2,3,4", "2,1,3,4", "1,2,4,3"],
    answer: "2,1,4,3",
  },
  {
    question:
      "Which word comes third in the dictionary? Bark, Bare, Barn, Base",
    options: ["Bark", "Bare", "Barn", "Base"],
    answer: "Barn",
  },
  {
    question: "Can you make the word 'TENT' from 'ATTENTION'?",
    options: ["Yes", "No", "Maybe", "Can't Say"],
    answer: "Yes",
  },
  {
    question: "Which word cannot be formed from 'CHARACTER'?",
    options: ["HEART", "CHART", "TRACT", "CREATOR"],
    answer: "CREATOR",
  },
  {
    question:
      "Arrange logically: 1. Probation, 2. Interview, 3. Selection, 4. Appointment",
    options: ["2,3,4,1", "3,2,1,4", "2,4,3,1", "3,4,2,1"],
    answer: "2,3,4,1",
  },
  {
    question: "Which word comes second? Plane, Plain, Plan, Plant",
    options: ["Plane", "Plain", "Plan", "Plant"],
    answer: "Plain",
  },
  {
    question:
      "If the letters of 'BREAD' are arranged alphabetically, which letter is in the middle?",
    options: ["A", "D", "E", "R"],
    answer: "E",
  },

  // Direction Sense
  {
    question:
      "A man walks 5km North, turns right and walks 5km. Which direction is he facing?",
    options: ["North", "South", "East", "West"],
    answer: "East",
  },
  {
    question:
      "I face East, turn 90 degrees clockwise. Which direction am I facing?",
    options: ["North", "South", "East", "West"],
    answer: "South",
  },
  {
    question:
      "A girl walks 10m West, turns left and walks 10m. She is in which direction from the start?",
    options: ["North-East", "North-West", "South-East", "South-West"],
    answer: "South-West",
  },
  {
    question:
      "Sun rises in the East. If I stand facing the sun, my left hand points to?",
    options: ["North", "South", "East", "West"],
    answer: "North",
  },
  {
    question:
      "Rohan walks 3km North, then 4km East. How far is he from the start? (Shortest distance)",
    options: ["5km", "7km", "1km", "12km"],
    answer: "5km",
  },
  {
    question: "If South-East becomes North, what will West become?",
    options: ["South-East", "South-West", "North-East", "North-West"],
    answer: "South-East",
  },
  {
    question: "A compass shows East as North. What will it show South as?",
    options: ["East", "West", "North", "South-West"],
    answer: "West",
  },
  {
    question: "Facing North, I turn 180 degrees. I am facing?",
    options: ["North", "South", "East", "West"],
    answer: "South",
  },
  {
    question:
      "A boy goes 20m East, turns right 10m, turns right 20m. How far is he from start?",
    options: ["0m", "10m", "20m", "50m"],
    answer: "10m",
  },
  {
    question:
      "Walking facing the setting sun, you turn right. You are now facing?",
    options: ["North", "South", "East", "West"],
    answer: "North",
  },

  // Blood Relations
  {
    question:
      "A's father is B's grandfather. How is A related to B if A has no brothers?",
    options: ["Father", "Uncle", "Cousin", "Brother"],
    answer: "Father",
  },
  {
    question:
      "Pointing to a man, a woman said, 'He is the only son of my mother.' How is the man related to the woman?",
    options: ["Father", "Brother", "Son", "Uncle"],
    answer: "Brother",
  },
  {
    question:
      "X is the brother of Y. Y is the sister of Z. Z is the son of W. How is X related to W?",
    options: ["Son", "Brother", "Father", "Nephew"],
    answer: "Son",
  },
  {
    question:
      "A and B are brothers. C and D are sisters. A's son is D's brother. How is B related to C?",
    options: ["Father", "Uncle", "Grandfather", "Brother"],
    answer: "Uncle",
  },
  {
    question: "My father's only sibling is my?",
    options: ["Uncle/Aunt", "Brother/Sister", "Cousin", "Nephew"],
    answer: "Uncle/Aunt",
  },
  {
    question:
      "Pointing to a photo, Ram said, 'She is the mother of my son's wife.' How is she related to Ram?",
    options: ["Sister", "Mother", "Daughter-in-law's mother", "Wife"],
    answer: "Daughter-in-law's mother",
  },
  {
    question:
      "P is the father of Q, but Q is not his son. How are they related?",
    options: [
      "Uncle-Nephew",
      "Father-Daughter",
      "Brother-Sister",
      "Grandfather-Grandson",
    ],
    answer: "Father-Daughter",
  },
  {
    question: "My mother's mother's only son is my?",
    options: ["Father", "Brother", "Uncle", "Cousin"],
    answer: "Uncle",
  },
  {
    question:
      "If X is the sister of Y, and Y is the mother of Z. What is X to Z?",
    options: ["Aunt", "Mother", "Sister", "Grandmother"],
    answer: "Aunt",
  },
  {
    question:
      "A is B's sister. C is B's mother. D is C's father. How is A related to D?",
    options: ["Granddaughter", "Daughter", "Niece", "Sister"],
    answer: "Granddaughter",
  },

  // Basic Arithmetic & Logic (BODMAS, Ages, Time)
  {
    question: "5 + 10 ÷ 2 = ?",
    options: ["7.5", "10", "15", "25"],
    answer: "10",
  },
  {
    question: "18 - 6 × 2 + 4 = ?",
    options: ["28", "10", "14", "2"],
    answer: "10",
  },
  {
    question: "What is 20% of 250?",
    options: ["40", "45", "50", "60"],
    answer: "50",
  },
  {
    question:
      "A train running at 72 km/hr crosses a pole. What is its speed in m/s?",
    options: ["15 m/s", "20 m/s", "25 m/s", "30 m/s"],
    answer: "20 m/s",
  },
  {
    question:
      "If 5 workers build a wall in 10 days, how many days will 10 workers take?",
    options: ["2", "5", "10", "20"],
    answer: "5",
  },
  {
    question: "Average of first 5 natural numbers is?",
    options: ["2", "3", "4", "5"],
    answer: "3",
  },
  {
    question: "A father is twice as old as his son. If son is 20, father is?",
    options: ["30", "40", "50", "60"],
    answer: "40",
  },
  {
    question: "Solve: 1/2 + 1/4 = ?",
    options: ["2/6", "3/4", "1/8", "1"],
    answer: "3/4",
  },
  {
    question: "A clock shows 3:00. What is the angle between the hands?",
    options: ["45°", "60°", "90°", "180°"],
    answer: "90°",
  },
  {
    question: "If a dozen apples cost ₹60, what is the cost of 5 apples?",
    options: ["₹20", "₹25", "₹30", "₹35"],
    answer: "₹25",
  },
];

function OIR() {
  const [showScore, setShowScore] = useState(false);
  const [current, setCurrent] = useState(0);
  const [timeLeft, setTimeLeft] = useState(1800);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [shuffledQuestions] = useState(
    () => [...questions].sort(() => Math.random() - 0.5),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setShowScore(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem("bestOIR", String(score));
  }, [score]);

  const currentQuestion = shuffledQuestions[current];
  const grade =
    score >= 90
      ? "OIR-I"
      : score >= 75
      ? "OIR-II"
      : score >= 60
      ? "OIR-III"
      : score >= 45
      ? "OIR-IV"
      : "Needs Improvement";

  const handleAnswerOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }

    const nextQuestion = current + 1;
    if (nextQuestion < shuffledQuestions.length) {
      setCurrent(nextQuestion);
      setSelectedOption(null);
    } else {
      setShowScore(true);
    }
  };

  const resetTest = () => {
    setCurrent(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = String(timeLeft % 60).padStart(2, "0");

  if (!currentQuestion) {
    return null;
  }

  return (
    <div className="max-w-5xl mx-auto p-10 font-sans">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-blue-800">
        SSB OIR Practice Test
      </h1>

      <div className="bg-slate-50 p-6 md:p-10 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <div className="text-red-600 font-bold text-xl">
            Time Left: {minutes}:{seconds}
          </div>
          <p className="text-sm text-slate-500">Estimated OIR Grade: {grade}</p>
        </div>

        {showScore ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Test Completed!</h2>
            <p className="text-2xl mb-8">
              Your Score: <span className="text-blue-600 font-bold">{score}</span> / {shuffledQuestions.length}
            </p>
            <button
              onClick={resetTest}
              className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-8 py-3 rounded-lg font-semibold text-lg"
            >
              Restart Test
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800">
                Question {current + 1}{" "}
                <span className="text-lg font-normal text-slate-500">
                  / {shuffledQuestions.length}
                </span>
              </h2>
            </div>

            <p className="mt-4 text-xl font-medium text-slate-700 min-h-[60px]">
              {currentQuestion.question}
            </p>

            <div className="mt-8 space-y-3">
              {currentQuestion.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswerOptionClick(option)}
                  className={`block w-full border-2 p-4 rounded-lg text-left transition-all text-lg font-medium
                    ${
                      selectedOption === option
                        ? "border-blue-600 bg-blue-50 text-blue-800"
                        : "border-slate-200 hover:border-blue-300 hover:bg-slate-100"
                    }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={handleNext}
                disabled={!selectedOption}
                className={`px-8 py-3 rounded-lg font-bold text-lg transition-colors
                  ${
                    selectedOption
                      ? "bg-green-600 hover:bg-green-700 text-white cursor-pointer"
                      : "bg-slate-300 text-slate-500 cursor-not-allowed"
                  }`}
              >
                {current === shuffledQuestions.length - 1 ? "Finish" : "Next"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default OIR;
