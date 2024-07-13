import React from "react";
import EmojiPicker from "./EmojiPicker";

const Emotion = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center backdrop-blur-sm ">
      <p className="md:text-5xl text-4xl font-mono font-semibold animate-bounce">
        How are you ?{" "}
      </p>
      <EmojiPicker />
    </div>
  );
};

export default Emotion;
