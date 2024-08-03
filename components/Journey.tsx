"use client"
import React from "react";
import Link from "next/link";

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

const JourneyItem: React.FC<JourneyItem> = ({ title, company, company_link, start_date, end_date, description }) => (
  <div className="mb-8 border-b border-gray-200 pb-4">
    <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
    <Link href={company_link} className="text-blue-600 hover:text-blue-800 transition-colors duration-300 mb-2 inline-block">
      {company}
    </Link>
    <p className="text-sm text-gray-600 mb-2">{start_date} - {end_date}</p>
    <p className="text-gray-700">{description}</p>
  </div>
);

const Journey: React.FC = () => {
  return (
    <div className="min-h-screen w-full  py-2 px-4  font-sans">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center  text-gray-800 py-2 rounded-md bg-white">
          Journey
        </h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          {JOURNEY_ITEMS.map((item, index) => (
            <JourneyItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journey;