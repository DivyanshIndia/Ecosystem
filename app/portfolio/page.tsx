"use client"
import React, { useState } from "react";
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from "framer-motion";


const Introduction = dynamic(() => import("@/components/Introduction"), { ssr: false });
const Emotion = dynamic(() => import("@/components/Emotion"), { ssr: false });
const Question = dynamic(() => import("@/components/Question"), { ssr: false });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: false });
const Journey = dynamic(() => import("@/components/Journey"), { ssr: false });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: false });

const components = [
  { Component: Introduction, icon: "🐸" },
  { Component: Emotion, icon: "🎭" },
  { Component: Question, icon: "❓" },
  { Component: Projects, icon: "🐼" },
  { Component: Journey, icon: "🐫" },
  { Component: Skills, icon: "🦧" }
];

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-gradient-to-b from-zinc-900 to-zinc-700 min-h-screen">
      <nav className="flex justify-center bg-gray-100 dark:bg-zinc-800 rounded-md p-2 mb-4 absolute top-10 left-1/2 transform -translate-x-1/2">
        {components.map(({ icon }, index) => (
          <motion.div
          key={index}
          className="mx-2 cursor-pointer"
          onClick={() => setActiveIndex(index)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.span
            className={`text-2xl ${activeIndex === index ? 'text-white' : 'text-gray-400'}`}
            animate={{
              scale: activeIndex === index ? 1.2 : 1,
              rotate: activeIndex === index ? [0, 10, -10, 0] : 0
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {icon}
          </motion.span>
        </motion.div>
        ))}
      </nav>
      <AnimatePresence mode="wait">
        {components.map(({ Component }, index) => (
          activeIndex === index && (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Component />
            </motion.div>
          )
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Page;