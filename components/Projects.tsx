"use client"
import React from "react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  icon: string;
}

const projects: Project[] = [
  { title: "Project Management System", description: "Streamline your workflow", icon: "📊" },
  { title: "Crypto: The New Currency?", description: "Explore the world of cryptocurrency", icon: "💰" },
  { title: "Ping Pong Game", description: "Challenge your reflexes", icon: "🏓" },
  { title: "Quiz Game", description: "Test your knowledge", icon: "🧠" },
  { title: "Blockchain Explorer", description: "Dive into blockchain technology", icon: "🔗" },
  { title: "AI Task Scheduler", description: "Optimize your time with AI", icon: "🤖" },
  { title: "VR Museum Tour", description: "Experience art in virtual reality", icon: "🖼️" },
  { title: "Smart Home System", description: "Control your home with ease", icon: "🏠" },
];

const ProjectCard: React.FC<Project> = ({ title, description, icon }) => (
  <motion.div
    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
    whileHover={{ y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div className="p-6">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <motion.button
        className="px-4 py-2 bg-gray-800 text-white rounded-md text-sm font-medium hover:bg-gray-700 transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Learn More
      </motion.button>
    </div>
  </motion.div>
);

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen w-full  py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;