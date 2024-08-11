/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import Link from "next/link";

const Introduction: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen font-sans p-4">
      <div className={`bg-white dark:bg-zinc-800 p-6 sm:p-8 rounded-lg shadow-md max-w-4xl w-full transform transition-all duration-700 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <div className={`transform transition-all duration-700 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Image
              src="/wallpeps.jpg"
              width={1000}
              height={1000}
              alt="Profile Picture"
              className="rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex-1 p-2 text-center md:text-left">
            <h1 className={`text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2 transform transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Divyansh Bhatt
            </h1>
            <p className={`text-md sm:text-lg text-gray-600 dark:text-gray-300 mb-4 transform transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Frontend Developer | React Specialist
            </p>
            <p className={`text-gray-700 dark:text-gray-400 mb-6 transform transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              "Crafting seamless user experiences with JavaScript and React, one
              component at a time."
            </p>
            <div className={`flex flex-wrap justify-center md:justify-start items-center gap-4 transform transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <Link
                href="mailto:divyanshbhatt46@gmail.com"
                className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300 rounded-md px-2 py-1 md:text-sm text-xs text-white hover:scale-105"
              >
                Contact Me
              </Link>
              <SocialLink
                href="https://www.linkedin.com/in/divyanshbhatt0/"
                icon={<FaLinkedin size={20} />}
                label="LinkedIn"
                color="linkedin"
              />
              <SocialLink
                href="https://github.com/DivyanshIndia"
                icon={<FaGithub size={20} />}
                label="GitHub"
                color="github"
              />
              <button
                className="flex items-center gap-2 text-green-600 hover:text-green-500 transition-colors duration-300 hover:scale-105"
                title="Download Resume"
              >

                <a href="/divyansh_bhatt_resume.pdf"
                  download="divyansh_bhatt_resume.pdf"
                  className="flex items-center gap-2 text-green-600 hover:text-green-500 transition-colors duration-300 hover:scale-105"
                  title="Download Resume"
                >
                  <HiOutlineDownload size={20} />
                  <span className="text-sm hidden sm:inline">Resume</span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  color: 'linkedin' | 'github';
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label, color }) => {
  const colorClasses = {
    linkedin: 'text-black dark:text-white hover:text-blue-500',
    github: 'text-black dark:text-white hover:text-orange-600 '
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

export default Introduction;