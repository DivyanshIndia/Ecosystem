"use client"
import React, { useState } from "react";
import { Card, CardBody, Switch } from "@nextui-org/react";
import { motion } from "framer-motion";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

interface QuoteItem {
  quote: string;
  author: string;
  size: 'small' | 'medium' | 'large' | 'extra-large' | 'circular';
  bgColor: string;
  textColor: string;
  animation?: string;
}

const quoteItems: QuoteItem[] = [
  {
    quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    author: "Marilyn Monroe",
    size: 'large',
    bgColor: "bg-white",
    textColor: "text-zinc-800"
  },
  {
    quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: "Dr. Seuss",
    size: 'medium',
    bgColor: "bg-zinc-700/20",
    textColor: "text-white",
    animation: "hover:animate-pulse"
  },
  {
    quote: "Don't walk in front of me… I may not follow Don't walk behind me… I may not lead Walk beside me… just be my friend",
    author: "Albert Camus",
    size: 'medium',
    bgColor: "bg-zinc-700/20",
    textColor: "text-white",
    animation: "hover:animate-bounce"
  },
  {
    quote: "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
    size: 'circular',
    bgColor: "bg-white",
    textColor: "text-zinc-800",
    animation: "hover:animate-pulse"
  },
  {
    quote: "Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.",
    author: "Steve Jobs",
    size: 'extra-large',
    bgColor: "bg-zinc-700/20",
    textColor: "text-white"
  },
  {
    quote: "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
    author: "William W. Purkey",
    size: 'medium',
    bgColor: "bg-zinc-700/20",
    textColor: "text-white"
  },
  {
    quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    author: "Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeches",
    size: 'medium',
    bgColor: "bg-zinc-700/20",
    textColor: "text-white",
    animation: "hover:animate-pulse"
  },
  {
    quote: "Insanity is doing the same thing, over and over again, but expecting different results.",
    author: "Narcotics Anonymous",
    size: 'circular',
    bgColor: "bg-white",
    textColor: "text-zinc-800",
    animation: "hover:animate-bounce"
  },
  {
    quote: "It is better to be hated for what you are than to be loved for what you are not.",
    author: "Andre Gide, Autumn Leaves",
    size: 'medium',
    bgColor: "bg-zinc-700/20",
    textColor: "text-white",
    animation: "hover:animate-bounce"
  },
  {
    quote: "We accept the love we think we deserve.",
    author: "Stephen Chbosky, The Perks of Being a Wallflower",
    size: 'small',
    bgColor: "bg-white",
    textColor: "text-zinc-800",
    animation: "hover:scale-75 transition-all"
  },
  {
    quote: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    author: "H. Jackson Brown Jr., P.S. I Love You",
    size: 'large',
    bgColor: "bg-white",
    textColor: "text-zinc-800"
  },
  {
    quote: "I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.",
    author: "Marilyn Monroe",
    size: 'large',
    bgColor: "bg-zinc-700/20",
    textColor: "text-white"
  },
  {
    quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson",
    size: 'medium',
    bgColor: "bg-zinc-700/20",
    textColor: "text-white",
    animation: "hover:animate-pulse"
  },
  {
    quote: "Without music, life would be a mistake.",
    author: "Friedrich Nietzsche, Twilight of the Idols",
    size: 'circular',
    bgColor: "bg-white",
    textColor: "text-zinc-800",
    animation: "hover:animate-pulse"
  }
];

const sizeClasses = {
  'small': 'col-span-1 row-span-1',
  'medium': 'col-span-2 row-span-1',
  'large': 'col-span-2 row-span-2',
  'extra-large': 'col-span-3 row-span-2',
  'circular': 'col-span-1 row-span-1'
};

const QuoteCard: React.FC<QuoteItem> = ({ quote, author, bgColor, textColor, animation, size }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`${sizeClasses[size]} h-full`}
    >
      <Card className={`h-full p-4 ${bgColor} ${textColor} ${animation} backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 ${size === 'circular' ? 'rounded-full' : ''}`}>
        <CardBody className="flex flex-col justify-center items-center">
          <div className={`text-center ${size === 'small' || size === 'circular' ? 'text-xs' : size === 'medium' ? 'text-sm' : 'text-base'}`}>
            <p className="font-serif mb-2">{quote}</p>
            <cite className="font-mono text-sm font-semibold">― {author} </cite>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};

const Home: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <main className={`min-h-screen p-4 md:p-8 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-r from-red-800 via-red-500 to-pink-700'}`}>
      <div className="flex justify-end mb-4">
        <Switch
          checked={isDarkMode}
          onChange={(e) => setIsDarkMode(e.target.checked)}
          size="lg"
          color="secondary"
          startContent={<SunIcon className="w-6 h-6" />}
          endContent={<MoonIcon className="w-6 h-6" />}
        />
      </div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {quoteItems.map((item, index) => (
          <QuoteCard key={index} {...item} />
        ))}
      </motion.div>
    </main>
  );
};

export default Home;