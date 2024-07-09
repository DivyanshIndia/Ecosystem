/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

const Introduction = () => {
  return (
    <div className="text-center text-2xl bg-transparent  flex  items-center justify-center  font-mono text-white  h-screen w-full p-3 md:m-0 ">

      <div className="bg-zinc-900/50 p-10 rounded-lg  flex flex-col items-center justify-center gap-5 ">
        <div>
          <Image src={"./walkingInRain.svg"} width={200} height={200} alt="drink Coffee" className=" rounded-full  " />
        </div>

        <p className="font-bold border-b-2 border-white"> Divyansh Bhatt</p>
        <p className="mx-auto mt-2 text-center text-xl  font-semibold   ">
          "Crafting seamless user experiences with JavaScript and React, one
          component at a time."
        </p>
        <p className="text-base text-white bg-gray-800/50 rounded-sm w-fit px-4 ">
          email : divyanshbhatt46@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Introduction;
