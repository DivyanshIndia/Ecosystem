import React from "react";

const Projects = () => {
  return (
    <div className="h-screen w-full flex flex-col md:flex-row  items-center justify-center  gap-10 p-5 ">
      <div className="w-96 h-48  md:shadow-2xl rounded-lg flex items-center justify-center flex-col gap-10 px-1 border-2 border-white">
        <p className="font-mono text-center">Project Management System</p>
        <button className="px-6 text-sm py-2 bg-black text-white rounded-full m-3">
          Explore
        </button>
      </div>
      <div className="w-96 h-96   md:shadow-2xl rounded-lg flex items-center justify-center flex-col gap-10  px-1 border-2 border-white">
        <p className="font-mono text-center">Crypto is the new Currency is it ?</p>
        <button className="px-6 text-sm py-2 bg-black text-white rounded-full m-3">
          Explore
        </button>
      </div>
      <div className="w-96 h-96   md:shadow-2xl rounded-lg flex items-center justify-center  flex-col gap-10 px-1 border-2 border-white">
        <p className="font-mono text-center">Ping Pong 🏓 have a play</p>
        <button className="px-6 text-sm py-2 bg-black text-white rounded-full m-3">
          Explore
        </button>
      </div>
      <div className="w-96 h-48   md:shadow-2xl rounded-lg flex items-center justify-center flex-col gap-10 px-1 border-2 border-white">
        <p className="font-mono text-center">Outsmart your Smartness play quiz</p>
        <button className="px-4 text-sm py-2 bg-black text-white rounded-full m-3">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Projects;
