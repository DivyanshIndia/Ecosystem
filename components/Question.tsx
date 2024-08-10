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
        className="text-center space-y-6 p-8 rounded-lg bg-white/30 dark:bg-black/30 backdrop-blur-md shadow-xl"
      >
        <motion.h1
          className="text-3xl md:text-5xl font-mono font-bold"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Need my work?
        </motion.h1>
        <motion.p
          className="text-xl md:text-3xl font-mono font-semibold"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Let's explore some of my projects
        </motion.p>

      </motion.div>
    </div>
  );
};

export default Question;