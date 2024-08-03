import React from "react";
import EmojiPicker from "./EmojiPicker";

const Emotion: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center ">
      <div className="text-center p-8 rounded-lg bg-white/30 dark:bg-black/30 backdrop-blur-md shadow-xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold mb-8 text-gray-800 dark:text-white">
          How are you feeling today?
        </h1>
        <EmojiPicker />
      </div>
    </div>
  );
};

export default Emotion;