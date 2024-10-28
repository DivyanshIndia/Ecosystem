import React from "react";
import Link from "next/link";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

interface JourneyItemProps {
  title: string;
  company: string;
  company_link: string;
  start_date: string;
  end_date: string;
  description: string;
  type: "work" | "education";
  index: number;
}

const JOURNEY_ITEMS: JourneyItemProps[] = [
  {
    title: "Software Developer",
    company: "PIP Trade",
    company_link: "https://piptrade.org/",
    start_date: "April, 2024",
    end_date: "Oct, 2024",
    description: "Developing innovative software solutions for trading platforms.",
    type: "work",
    index: 0,
  },
  {
    title: "React.js Developer Intern",
    company: "ClingMultisolutions",
    company_link: "https://www.clingmultisolutions.org/",
    start_date: "Oct, 2023",
    end_date: "March, 2024",
    description: "Worked on building responsive and interactive web applications.",
    type: "work",
    index: 1,
  },
  {
    title: "React and Node.js Developer Intern",
    company: "Clinical AI Assistance",
    company_link: "https://www.clinicalaiassistance.com/",
    start_date: "Dec, 2023",
    end_date: "Feb, 2024",
    description: "Developed social app for people with Autism disorder spectrum.",
    type: "work",
    index: 2,
  },
  {
    title: "Bachelor's of CSE",
    company: "GBPIET",
    company_link: "https://gbpiet.ac.in/",
    start_date: "Nov, 2020",
    end_date: "June, 2023",
    description: "Studied Computer Science and Engineering, focusing on software development.",
    type: "education",
    index: 3,
  },
  {
    title: "Diploma in CSE",
    company: "Govt. Polytechnic Pithuwala",
    company_link: "https://www.gpdehradun.org.in/",
    start_date: "Aug, 2018",
    end_date: "Sept 2020",
    description: "Gained foundational knowledge in computer science and programming.",
    type: "education",
    index: 4,
  },
];

const JourneyItem: React.FC<JourneyItemProps> = ({
  title,
  company,
  company_link,
  start_date,
  end_date,
  description,
  index,
  type,
}) => (
  <div className="relative pl-8 sm:pl-32 py-6 group">
    {/* Timeline line */}
    <div className="absolute left-0 sm:left-16 h-full w-[2px] bg-gradient-to-b from-blue-300 to-green-300 group-hover:from-blue-500 group-hover:to-green-500 transition-colors duration-500"></div>

    {/* Timeline dot */}
    <div className="absolute left-[-8px] sm:left-14 top-8 w-4 h-4 rounded-full bg-white shadow-xl border-4 border-blue-500 group-hover:scale-125 transition-transform duration-300"></div>

    {/* Content card */}
    <div className=" rounded-lg  p-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${type === "work"
          ? "bg-gradient-to-br from-blue-400 to-blue-600"
          : "bg-gradient-to-br from-green-400 to-green-600"
          }`}>
          {type === "work" ? (
            <FaBriefcase className="text-white text-xl" />
          ) : (
            <FaGraduationCap className="text-white text-xl" />
          )}
        </div>

        <div className="flex-grow">
          <h3 className="text-xl font-bold text-white mb-1">
            {title}
          </h3>
          <Link
            href={company_link}
            className="text-blue-500 hover:text-blue-700 dark:text-blue-400 font-medium hover:underline inline-flex items-center gap-1"
          >
            {company}
          </Link>
        </div>

        <div className="hidden sm:block text-right">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium  text-gray-400 ">
            {start_date} - {end_date}
          </span>
        </div>
      </div>

      <div className="sm:hidden mb-2">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium  text-gray-400 ">
          {start_date} - {end_date}
        </span>
      </div>

      <p className="text-gray-400  leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const Journey: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8  font-sans">
      <div className="max-w-4xl mx-auto pt-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Journey
        </h2>

        <div className="relative">
          {JOURNEY_ITEMS.map((item, index) => (
            <JourneyItem key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;