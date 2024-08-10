"use client"
import React, { useState } from "react";
import dynamic from 'next/dynamic';

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

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-gradient-to-b from-orange-900 to-orange-700 min-h-screen">
      <nav className="flex justify-center bg-gray-100 dark:bg-zinc-800 rounded-md p-2 mb-4 absolute top-10 left-1/2 transform -translate-x-1/2">
        {components.map(({ icon }, index) => (
          <div
            key={index}
            className="mx-2 cursor-pointer"
            onClick={() => setActiveIndex(index)}
          >
            <span className={`text-2xl ${activeIndex === index ? 'text-white' : 'text-gray-400'}`}>
              {icon}
            </span>
          </div>
        ))}
      </nav>
      {components.map(({ Component }, index) => (
        activeIndex === index && <Component key={index} />
      ))}
    </div>
  );
};

export default Page;