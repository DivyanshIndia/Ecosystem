"use client"
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface JourneyItem {
  title: string;
  company: string;
  company_link: string;
  start_date: string;
  end_date: string;
  description: string;
}

const JOURNEY_ITEMS: JourneyItem[] = [
  {
    title: "Software Developer",
    company: "PIP Trade",
    company_link: "https://piptrade.org/",
    start_date: "April, 2024",
    end_date: "Present",
    description: "Developing innovative software solutions for trading platforms.",
  },
  {
    title: "React.js Developer Intern",
    company: "ClingMultisolutions",
    company_link: "https://www.clingmultisolutions.org/",
    start_date: "Oct, 2023",
    end_date: "March, 2024",
    description: "Worked on building responsive and interactive web applications.",
  },
  {
    title: "React and Node.js Developer Intern",
    company: "Clinical AI Assistance",
    company_link: "https://www.clinicalaiassistance.com/",
    start_date: "Dec, 2023",
    end_date: "Feb, 2024",
    description: "Developed AI-powered tools for clinical decision support.",
  },
  {
    title: "Bachelor's of CSE",
    company: "GBPIET",
    company_link: "https://gbpiet.ac.in/",
    start_date: "Nov, 2020",
    end_date: "June, 2023",
    description: "Studied Computer Science and Engineering, focusing on software development.",
  },
  {
    title: "Diploma in CSE",
    company: "Govt. Polytechnic Pithuwala",
    company_link: "https://www.gpdehradun.org.in/",
    start_date: "Aug, 2018",
    end_date: "Sept 2020",
    description: "Gained foundational knowledge in computer science and programming.",
  },
];

const JourneyItem: React.FC<JourneyItem & { index: number }> = ({
  title, company, company_link, start_date, end_date, description, index
}) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="mb-8 relative"
  >
    <div className="absolute left-0 w-1 h-full bg-gray-300 dark:bg-gray-700" />
    <div className="ml-6 relative">
      <div className="absolute -left-9 top-0 w-5 h-5 rounded-full bg-blue-500 dark:bg-blue-400" />
      <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">{title}</h3>
        <Link href={company_link} className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300 mb-2 inline-block">
          {company}
        </Link>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{start_date} - {end_date}</p>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </div>
  </motion.div>
);

const Journey: React.FC = () => {
  return (
    <div className="min-h-screen w-full py-16 px-4 font-sans">
      <div className="max-w-3xl mx-auto pt-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-100 dark:text-gray-200 mb-12"
        >
           Journey
        </motion.h2>
        <div className="relative">
          {JOURNEY_ITEMS.map((item, index) => (
            <JourneyItem key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journey;