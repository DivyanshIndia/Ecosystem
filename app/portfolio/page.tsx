/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Projects from "@/components/Projects";
import Question from "@/components/Question";
import Emotion from "@/components/Emotion";
import Introduction from "@/components/Introduction";
import Journey from "@/components/Journey";

const page = () => {
  return (
    <div
      className=" scroll-smooth bg-cover  bg-fixed bg-no-repeat   "
      style={{ backgroundImage: "url(./gameDay.svg)" }}
    >

      <div className="h-full w-full">
        <Introduction />
        <Emotion />
        <Question />
        <Projects />
        <Journey />
      </div>
    </div>
  );
};

export default page;
