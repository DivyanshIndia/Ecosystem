/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import Link from "next/link";

const Introduction: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen font-sans p-4">
      <div className="bg-white dark:bg-zinc-800 p-6 sm:p-8 rounded-lg shadow-md max-w-4xl w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <Image
            src="/wallpeps.jpg"
            width={1000}
            height={1000}
            alt="Profile Picture"
            className="rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 object-cover"
          />
          <div className="flex-1 p-2 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
              Divyansh Bhatt
            </h1>
            <p className="text-md sm:text-lg text-gray-600 dark:text-gray-300 mb-4">
              Frontend Developer | React Specialist
            </p>
            <p className="text-gray-700 dark:text-gray-400 mb-6">
              "Crafting seamless user experiences with JavaScript and React, one
              component at a time."
            </p>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
              <Link
                href="mailto:divyanshbhatt46@gmail.com"
                className="bg-gray-800 dark:bg-gray-200 hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors duration-300 rounded-md px-4 py-2 text-sm text-white dark:text-gray-800"
              >
                Contact Me
              </Link>
              <SocialLink
                href="https://www.linkedin.com/in/divyanshbhatt0/"
                icon={<FaLinkedin size={20} />}
                label="LinkedIn"
              />
              <SocialLink
                href="https://github.com/DivyanshIndia"
                icon={<FaGithub size={20} />}
                label="GitHub"
              />
              <button
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300"
                title="Download Resume"
              >
                <HiOutlineDownload size={20} />
                <span className="text-sm">Resume</span>
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
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <Link
    href={href}
    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300"
  >
    {icon}
    <span className="text-sm">{label}</span>
  </Link>
);

export default Introduction;