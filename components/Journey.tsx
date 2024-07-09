/* eslint-disable react/no-unescaped-entities */
import React from "react";

const JOURNEY_ITEMS = [
  {
    title: "Software Developer",
    company: "PIP Trade",
    company_link: "https://piptrade.org/",
    icon: "🔗",
    start_date: "April, 2024",
    end_date: "Present",
    translate: "1/2",
  },
  {
    title: "React.js Developer Intern",
    company: "ClingMultisolutions",
    company_link: "https://www.clingmultisolutions.org/",
    icon: "🔗",
    start_date: "Oct, 2023",
    end_date: "March, 2024",
    translate: "0",
  },
  {
    title: "React and Node.js Developer Intern",
    company: "Clinical AI Assistance",
    company_link: "https://www.clinicalaiassistance.com/",
    icon: "🔗",
    start_date: "Dec, 2023",
    end_date: "Feb, 2024",
    translate: "1/2",
  },
  {
    title: "Bachelor's of CSE",
    company: "GBPIET",
    company_link: "https://gbpiet.ac.in/",
    icon: "🔗",
    start_date: "Nov, 2020",
    end_date: "June, 2023",
    translate: "0",
  },
  {
    title: "Diploma in CSE",
    company: "Govt. Polytechnic Pithuwala",
    company_link: "https://www.gpdehradun.org.in/",
    icon: "🔗",
    start_date: "Aug, 2018",
    end_date: "Sept 2020",
    translate: "1/2",
  },
];

const Journey = () => {
  return (
    <div className="text-center h-screen flex flex-col items-center justify-center gap-10 text-gray-900 font-mono font-bold relative bg-transparent bg-gradient-to-b from-zinc-200 backdrop-blur-sm dark:from-inherit bg-gray-200 dark:bg-zinc-800/10 p-8">
      <div className="bg-blue-600 rounded-lg w-1 md:w-2 h-full z-0 absolute top-0 left-1/2 transform -translate-x-1/2"></div>
      {JOURNEY_ITEMS.map((item, index) => (
        <div
          key={index}
          className={`w-fit md:w-96 p-4 md:shadow-2xl rounded-lg bg-zinc-900/80 border border-white z-10 backdrop-blur-lg ${index % 2 === 0 ? 'lg:mr-auto lg:transform lg:translate-x-full' : 'lg:ml-auto lg:transform lg:-translate-x-full'
            }`}
        >
          <p className="text-pink-600">{item.title}</p>
          <p className="text-sm text-blue-500">
            {item.company}{" "}
            <a href={item.company_link} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>
          </p>
          <p className="text-xs text-red-400">
            {item.start_date} - {item.end_date}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Journey;
