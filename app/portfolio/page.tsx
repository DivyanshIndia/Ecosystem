/* eslint-disable react/no-unescaped-entities */
"use client"

import React, { useRef, useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';

// Dynamically import components
const Introduction = dynamic(() => import("@/components/Introduction"), { ssr: false });
const Emotion = dynamic(() => import("@/components/Emotion"), { ssr: false });
const Question = dynamic(() => import("@/components/Question"), { ssr: false });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: false });
const Journey = dynamic(() => import("@/components/Journey"), { ssr: false });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: false });

const components = [
  { Component: Introduction, icon: "👋" },
  { Component: Emotion, icon: "🎭" },
  { Component: Question, icon: "❓" },
  { Component: Projects, icon: "💼" },
  { Component: Journey, icon: "🗺️" },
  { Component: Skills, icon: "🛠️" }
];

const Section: React.FC<{ children: React.ReactNode; isActive: boolean }> = ({ children, isActive }) => {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          key={isActive ? 'active' : 'inactive'}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="h-screen flex items-center justify-center"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Page: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = Math.sign(e.deltaY);
      setActiveIndex(prevIndex => {
        const newIndex = prevIndex + delta;
        return Math.max(0, Math.min(newIndex, components.length - 1));
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-gradient-to-b from-orange-900 to-orange-700 min-h-screen"
    >
      <div className="absolute inset-0 bg-cover bg-fixed bg-no-repeat opacity-30 z-0" />
      <div className="relative z-10 h-screen pt-4">
        <nav className="flex justify-center bg-zinc-800 rounded-full p-2 mb-4">
          {components.map(({ icon }, index) => (
            <motion.div
              key={index}
              className="mx-2 cursor-pointer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveIndex(index)}
            >
              <motion.span
                className={`text-2xl ${activeIndex === index ? 'text-white' : 'text-gray-400'} transition-colors duration-200`}
                initial={{ opacity: 0.5 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0.5,
                  scale: activeIndex === index ? 1.2 : 1
                }}
                transition={{ duration: 0.2 }}
              >
                {icon}
              </motion.span>
            </motion.div>
          ))}
        </nav>
        {components.map(({ Component }, index) => (
          <Section key={index} isActive={activeIndex === index}>
            <Component />
          </Section>
        ))}
      </div>
    </div>
  );
};

export default Page;
