"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function BitsOfLife() {
  const participants = [
    "Priyanka Luitel",
    "Pratikshya Ale Magar",
    "Ankit Rimal",
    "Pamisha  Bhattarai",
    "Sailendra Shrestha",

    "Prayag Nepal",
    "Sangam Luitel",

    "Sanskriti Bajagain",

    "Biswas Bishwakarma",
    "Shreya Katuwal",
    "Yajuna Karmacharya",

    "Dikshya Thapa",
    "Swarnim Dahal",

    "Oshan Shrestha",
    "Diyashree Khatri",
    "Prakriti Bhandari",
    "Samira Thapa",
    "Samana Gyawali",
    "Deepti Lamsal",
    "Divya Basnet",
    "Sadhana Mainali",
    "Joshan Shrestha",
    "",
  ];

  const toneOptions = [
    "Funny",
    "Awkward",
    "Inspiring",
    "Unexpected",
    "Frustrating",
    "Motivating",
    "Cringe",
    "Wholesome",
    "Confusing",

    "Shocking",
    "Embarrassing",
    "Emotional",
    "Dramatic",
    "Exciting",
    "Surprising",

    "Nostalgic",
    "Stressful",
    "Satisfying",

    "Hilarious",

    "Messy",
    "Overwhelming",
    "Adventurous",
    "Awkwardly funny",
  ];

  const themeOptions = [
    "Exams",
    "Tech fails",
    "First group project",
    "Presentation day",
    "Internet issues",
    "Using AI tools",
    "Hackathon",

    "Getting help from ChatGPT 😄",
    "Learning a new language",
    "Attending a workshop",
    "Your interviews",
    "Late night debugging",
    "When the code finally worked",
    "Fixing a friend's PC",
    "Creating your portfolio",
    "Launching a mini project",
    "Accidental deletions",
    "Collaboration chaos",
    "First bug ever",
    "Debugging disasters",
    "Hardware experiments",
    "Trying a new framework/library",
    "Online class struggles",
    "Overcoming procrastination",
    "Creative hacks or shortcuts",
    "Tech disasters at home",
  ];

  const [selectedName, setSelectedName] = useState("");
  const [selectedTone, setSelectedTone] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("");
  const [showTone, setShowTone] = useState(false);
  const [showTheme, setShowTheme] = useState(false);
  const [shakeName, setShakeName] = useState(false);
  const [shakeTone, setShakeTone] = useState(false);
  const [shakeTheme, setShakeTheme] = useState(false);

  const drawName = () => {
    setShakeName(true);
    setTimeout(() => {
      const randomName =
        participants[Math.floor(Math.random() * participants.length)];
      setSelectedName(randomName);
      setShakeName(false);
      setShowTone(false);
      setShowTheme(false);
      setSelectedTone("");
      setSelectedTheme("");
    }, 500);
  };

  const drawTone = () => {
    if (!selectedName) {
      alert("Please draw a name first!");
      return;
    }
    setShakeTone(true);
    setTimeout(() => {
      const randomTone =
        toneOptions[Math.floor(Math.random() * toneOptions.length)];
      setSelectedTone(randomTone);
      setShowTone(true);
      setShakeTone(false);
    }, 500);
  };

  const drawTheme = () => {
    if (!selectedTone) {
      alert("Please draw a tone first!");
      return;
    }
    setShakeTheme(true);
    setTimeout(() => {
      const randomTheme =
        themeOptions[Math.floor(Math.random() * themeOptions.length)];
      setSelectedTheme(randomTheme);
      setShowTheme(true);
      setShakeTheme(false);
    }, 500);
  };

  const resetGame = () => {
    setSelectedName("");
    setSelectedTone("");
    setSelectedTheme("");
    setShowTone(false);
    setShowTheme(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 px-4 py-4">
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          x: [0, -40, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          x: [0, 30, 0],
          y: [0, -40, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-4 right-4 md:top-8 md:right-8 bg-amber-50 rounded-2xl p-3 shadow-2xl z-50"
      >
        <Image
          src="/csitan.png"
          alt="CSIT Association of Nepal"
          width={200}
          height={200}
          className="w-30 h-30 md:w-50 md:h-50 object-contain"
          priority
        />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-2 text-white drop-shadow-2xl">
            Bits of Life 🎉
          </h1>
          <p className="text-xl md:text-2xl text-white font-medium drop-shadow-lg">
            Two boxes. One story. Countless memories.
          </p>
          <p className="text-lg md:text-xl text-white/90 mt-2">
            Let&apos;s discover the bits that make us who we are.
          </p>
        </motion.div>

        {/* Name Selection */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white/95 backdrop-blur-lg rounded-3xl p-3 mb-4 shadow-2xl"
        >
          <motion.button
            onClick={drawName}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold text-xl shadow-lg transition-all w-full md:w-auto ${
              shakeName ? "animate-shake" : ""
            }`}
          >
            🎲 Draw Random Name
          </motion.button>

          <AnimatePresence>
            {selectedName && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-4 text-2xl md:text-4xl font-bold text-purple-600"
              >
                {selectedName}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Game Boxes */}
        <div className="grid md:grid-cols-2 gap-6 mb-4">
          {/* Tone Box */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            onClick={drawTone}
            className={`bg-white/95 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl cursor-pointer ${
              shakeTone ? "animate-shake-box" : ""
            }`}
          >
            <div className="border-t-4 border-purple-600 p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">🎭</div>
                <h3 className="text-2xl md:text-3xl font-bold text-purple-600">
                  Draw Tone
                </h3>
              </div>

              {/* Box Image */}
              <div className="relative w-full h-40 mb-4 flex items-center justify-center">
                <Image
                  src="/box.jpg"
                  alt="Mystery Boxes"
                  width={400}
                  height={200}
                  className="w-auto h-full object-contain"
                  priority
                />
              </div>

              <AnimatePresence mode="wait">
                {showTone ? (
                  <motion.div
                    key="tone-result"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-2xl md:text-3xl font-bold text-gray-800 text-center min-h-[60px] flex items-center justify-center"
                  >
                    {selectedTone}
                  </motion.div>
                ) : (
                  <motion.div
                    key="tone-placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-xl md:text-2xl text-gray-400 text-center min-h-[60px] flex items-center justify-center"
                  >
                    🎲 Click to Draw
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Theme Box */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            onClick={drawTheme}
            className={`bg-white/95 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl cursor-pointer ${
              shakeTheme ? "animate-shake-box" : ""
            }`}
          >
            <div className="border-t-4 border-pink-600 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">🧠</div>
                <h3 className="text-2xl md:text-3xl font-bold text-pink-600">
                  Draw Theme
                </h3>
              </div>

              {/* Box Image */}
              <div className="relative w-full h-40 mb-4 flex items-center justify-center">
                <Image
                  src="/box.jpg"
                  alt="Mystery Boxes"
                  width={400}
                  height={200}
                  className="w-auto h-full object-contain"
                  priority
                />
              </div>

              <AnimatePresence mode="wait">
                {showTheme ? (
                  <motion.div
                    key="theme-result"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-2xl md:text-3xl font-bold text-gray-800 text-center min-h-[40px] flex items-center justify-center"
                  >
                    {selectedTheme}
                  </motion.div>
                ) : (
                  <motion.div
                    key="theme-placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-xl md:text-2xl text-gray-400 text-center min-h-[60px] flex items-center justify-center"
                  >
                    🎲 Click to Draw
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Final Result */}
        <AnimatePresence>
          {selectedName && selectedTone && selectedTheme && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl p-6 md:p-5 shadow-2xl mb-4"
            >
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                📝 Share your Experience:
              </h2>
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-relaxed">
                <span className="text-purple-700">{selectedName}</span>, tell a{" "}
                <span className="text-pink-700">{selectedTone}</span> experience
                about <span className="text-blue-700">{selectedTheme}</span>!
              </p>
              <motion.button
                onClick={resetGame}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-6 py-3 bg-white text-orange-600 rounded-full font-bold shadow-lg"
              >
                🔄 Play Again
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Example */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-xl"
        >
          <h3 className="text-xl font-bold text-purple-600 mb-3">
            💡 Example:
          </h3>
          <p className="text-gray-700">
            <strong>Tone:</strong> Funny
            <br />
            <strong>Theme:</strong> Presentation day
            <br />
            <strong>Story:</strong>{" "}
            <em>
              "Oh god, once I was giving a PPT on cloud computing… and the
              internet went down. The irony! I started explaining how stable
              cloud systems are… as mine crashed on stage. My friends still call
              it 'Cloud bursting 101'."
            </em>
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-10px) rotate(-2deg);
          }
          75% {
            transform: translateX(10px) rotate(2deg);
          }
        }

        @keyframes shake-box {
          0%,
          100% {
            transform: translateX(0) rotate(0);
          }
          10% {
            transform: translateX(-5px) rotate(-1deg);
          }
          20% {
            transform: translateX(5px) rotate(1deg);
          }
          30% {
            transform: translateX(-5px) rotate(-1deg);
          }
          40% {
            transform: translateX(5px) rotate(1deg);
          }
          50% {
            transform: translateX(-5px) rotate(-1deg);
          }
          60% {
            transform: translateX(5px) rotate(1deg);
          }
          70% {
            transform: translateX(-5px) rotate(-1deg);
          }
          80% {
            transform: translateX(5px) rotate(1deg);
          }
          90% {
            transform: translateX(-5px) rotate(-1deg);
          }
        }

        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }

        .animate-shake-box {
          animation: shake-box 0.6s ease-in-out;
        }
      `}</style>
    </div>
  );
}
