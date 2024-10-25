"use client"
import React, { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import Link from "next/link";




const Introduction = dynamic(() => Promise.resolve(() => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen  p-4 overflow-hidden text-white ">
      <div className={`relative p-6 sm:p-8 rounded-lg     transform transition-all duration-700 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex flex-col md:flex-row items-center  space-y-6 md:space-y-0 md:space-x-8 w-full ">

          <div className="flex-1 p-2 text-center md:text-left">
            <h1 className={`text-4xl font-bold   mb-2 transform transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Divyansh Bhatt
            </h1>
            <p className={`text-2xl  mb-4 transform transition-all text-red-500 duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Frontend Developer | MERN Stack Developer
            </p>
            <p className={`text-xl mb-6 transform transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              &quot;Architecting digital excellence: MongoDB to React, backend to beautiful.&quot;

            </p>
            <div className={`flex flex-wrap justify-center md:justify-start items-center gap-4 transform transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} `}>
              <Link
                href="mailto:divyanshbhatt46@gmail.com"
                className="bg-blue-500 hover:bg-blue-900 transition-colors duration-300 rounded-md px-2 py-1 md:text-xl  text-white hover:scale-105"
              >
                Contact Me
              </Link>
              <SocialLink
                href="https://www.linkedin.com/in/divyanshbhatt0/"
                icon={<FaLinkedin size={24} />}
                label="LinkedIn"
                color="linkedin"
              />
              <SocialLink
                href="https://github.com/DivyanshIndia"
                icon={<FaGithub size={24} />}
                label="GitHub"
                color="github"
              />
              <a href="/divyansh_bhatt_resume.pdf"
                download="divyansh_bhatt_resume.pdf"
                className="flex items-center gap-2 text-green-600 hover:text-green-500 transition-colors duration-300 hover:scale-105"
                title="Download Resume"
              >
                <HiOutlineDownload size={24} />
                <span className="text-sm hidden sm:inline">Resume</span>
              </a>
            </div>
          </div>
          <motion.div
            className={`transform transition-all duration-700 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} p-1 border-3 border-white  rounded-full`}>
            <Image
              src="/wallpeps.jpg"
              width={1000}
              height={1000}
              alt="Profile Picture"
              priority
              className="rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}), { ssr: false });
const Emotion = dynamic(() => import("@/components/Emotion"), { ssr: false });
const Question = dynamic(() => import("@/components/Question"), { ssr: false });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: false });
const Journey = dynamic(() => import("@/components/Journey"), { ssr: false });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: false });

const components = [{ Component: Introduction, icon: "🐸" }, { Component: Emotion, icon: "🎭" }, { Component: Question, icon: "❓" }, { Component: Projects, icon: "🐼" }, { Component: Journey, icon: "🐫" }, { Component: Skills, icon: "🦧" }];


const SocialLink = ({ href, icon, label, color }: { href: string; icon: React.ReactNode; label: string; color: 'linkedin' | 'github' }) => {
  const colorClasses = {
    linkedin: 'hover:text-blue-900',
    github: 'hover:text-orange-600 '
  };

  return (
    <Link
      href={href}
      className={`flex items-center gap-2 ${colorClasses[color]} transition-colors duration-300 hover:scale-105`}
    >
      {icon}
      <span className="text-sm hidden sm:inline">{label}</span>
    </Link>
  );
};

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className=" min-h-screen bg-gradient-to-r from-zinc-900 via-zince-800 to-zinc-700">

      <nav className="flex justify-center rounded-md p-2 mb-4 absolute top-10 left-1/2 transform -translate-x-1/2 z-40 shadow-md">
        {components.map(({ icon }, index) => (
          <motion.div
            key={index}
            className="mx-2 cursor-pointer"
            onClick={() => setActiveIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              className={`text-2xl ${activeIndex === index ? 'text-white' : '-400'}`}
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
      <AnimatePresence mode="wait" >
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