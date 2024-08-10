/* eslint-disable react/no-unescaped-entities */
"use client"
import React from "react";
import { motion } from "framer-motion";

const Question: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-6 p-8 rounded-lg bg-white/10 dark:bg-black/30 backdrop-blur-md shadow-xl"
      >
        <motion.h1
          className="text-3xl md:text-5xl font-mono font-bold text-white dark:text-gray-200"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          In the vastness of the universe...
        </motion.h1>
        <motion.p
          className="text-xl md:text-3xl font-mono font-semibold text-gray-300 dark:text-gray-400"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          Are we merely observers, or creators of our reality?
        </motion.p>

      </motion.div>
    </div>
  );
};

export default Question;