/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Question = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center   bg-gradient-to-b from-zinc-200  backdrop-blur-lg dark:bg-zinc-800/30 dark:from-inherit   text-white    ">
      <p className=" text-3xl md:text-5xl font-mono font-bold lg:font-semibold animate-bounce">
        Need my work ?
      </p>
      <p className="md:text-3xl  text-xl font-mono font-bold lg:font-semibold mt-5 animate-pulse">
        Let's see some of my work{" "}
      </p>
    </div>
  );
};

export default Question;
