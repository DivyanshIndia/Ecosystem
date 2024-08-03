/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import Link from "next/link";

const Introduction: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen  font-sans p-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <Image
            src="/walkingInRain.svg"
            width={150}
            height={150}
            alt="Profile Picture"
            className="rounded-full border-2 border-gray-200"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Divyansh Bhatt
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              Frontend Developer | React Specialist
            </p>
            <p className="text-gray-700 mb-6">
              "Crafting seamless user experiences with JavaScript and React, one
              component at a time."
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="mailto:divyanshbhatt46@gmail.com"
                className="bg-gray-800 hover:bg-gray-700 transition-colors duration-300 rounded-md px-4 py-2 text-sm text-white"
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
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-300"
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
    className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-300"
  >
    {icon}
    <span className="text-sm">{label}</span>
  </Link>
);

export default Introduction;