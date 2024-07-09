"use client";
import { useState } from "react";

const EmojiPicker = () => {
  const [selectedEmoji, setSelectedEmoji] = useState("");

  const handleEmojiClick = (emoji: any) => {
    setSelectedEmoji(emoji);
  };

  return (
    <div>
      <div className="flex gap-5 mt-10 p-4 rounded-lg bg-gradient-to-b from-zinc-200 backdrop-blur-lg dark:bg-zinc-800/30 lg:static lg:bg-gray-200 lg:dark:bg-zinc-800/10">
        {["😔", "😁", "😡", "💓", "🤔", "😎"].map((emoji, index) => (
          <span
            key={index}
            className="text-xl md:text-3xl hover:scale-150 cursor-pointer"
            onClick={() => handleEmojiClick(emoji)}
          >
            {emoji}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-center">
      <div className="mt-10 text-7xl text-center p-4 bg-black w-fit rounded-full ">{selectedEmoji}</div>

      </div>
    </div>
  );
};

export default EmojiPicker;
