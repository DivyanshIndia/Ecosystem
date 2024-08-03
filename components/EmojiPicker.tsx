"use client";

import React, { useState } from "react";

const emojis = ["😔", "😁", "😡", "💓", "🤔", "😎"];

const EmojiPicker: React.FC = () => {
  const [selectedEmoji, setSelectedEmoji] = useState<string>("");

  const handleEmojiClick = (emoji: string) => {
    setSelectedEmoji(emoji);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-5 mt-10 p-6 rounded-lg bg-gradient-to-b from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-900 shadow-lg">
        {emojis.map((emoji) => (
          <button
            key={emoji}
            className="text-2xl md:text-4xl transition-transform duration-200 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
            onClick={() => handleEmojiClick(emoji)}
            aria-label={`Select ${emoji} emoji`}
          >
            {emoji}
          </button>
        ))}
      </div>
      {selectedEmoji && (
        <div className="mt-10 text-7xl md:text-8xl text-center p-8 bg-black dark:bg-white text-white dark:text-black rounded-full shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110">
          {selectedEmoji}
        </div>
      )}
    </div>
  );
};

export default EmojiPicker;