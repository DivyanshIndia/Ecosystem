"use client"
import React, { useMemo, useState } from "react";
import { Card, CardHeader, CardBody, Image, Switch } from "@nextui-org/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

interface BentoItem {
  title: string;
  subtitle: string;
  content: string;
  href: string;
  imageSrc: string;
  size: 'small' | 'medium' | 'large' | 'extra-large';
}

const bentoItems: Omit<BentoItem, 'size'>[] = [
  { title: "Frontend Radio", subtitle: "Daily Mix", content: "12 Tracks", href: "/portfolio", imageSrc: "https://nextui.org/images/hero-card-complete.jpeg" },
  { title: "Backend Beats", subtitle: "Weekly Playlist", content: "15 Tracks", href: "/quotes", imageSrc: "https://nextui.org/images/album-cover.png" },
  { title: "DevOps Dynamics", subtitle: "Monthly Compilation", content: "20 Tracks", href: "/page3", imageSrc: "https://nextui.org/images/fruit-1.jpeg" },
  { title: "UI/UX Melodies", subtitle: "Design Inspirations", content: "10 Tracks", href: "/page4", imageSrc: "https://nextui.org/images/fruit-2.jpeg" },
  { title: "Full Stack Fusion", subtitle: "Coding Playlist", content: "18 Tracks", href: "/page5", imageSrc: "https://nextui.org/images/fruit-3.jpeg" },
  { title: "Agile Anthems", subtitle: "Scrum Sounds", content: "14 Tracks", href: "/page6", imageSrc: "https://nextui.org/images/fruit-4.jpeg" },
];

const sizeClasses = {
  'small': 'col-span-1 row-span-1 md:col-span-2 md:row-span-1',
  'medium': 'col-span-2 row-span-1 md:col-span-2 md:row-span-2',
  'large': 'col-span-2 row-span-2 md:col-span-3 md:row-span-2',
  'extra-large': 'col-span-2 row-span-2 md:col-span-4 md:row-span-2'
};

const imageResolutions = {
  'small': { width: 300, height: 200 },
  'medium': { width: 600, height: 200 },
  'large': { width: 600, height: 400 },
  'extra-large': { width: 900, height: 400 }
};

const BentoCard: React.FC<BentoItem & { className?: string }> = ({
  title,
  subtitle,
  content,
  href,
  imageSrc,
  className,
  size,
}) => {
  const { width, height } = imageResolutions[size];

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Link href={href} passHref>
        <Card className={`py-4 ${className} bg-transparent backdrop-blur-md hover:shadow-xl transition-all duration-300 text-foreground`}>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">{subtitle}</p>
            <small className="text-default-500">{content}</small>
            <h4 className="font-bold text-large">{title}</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={imageSrc}
              width={width}
              height={height}
            />
          </CardBody>
        </Card>
      </Link>
    </motion.div>
  );
};

const Home: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const randomizedItems = useMemo(() => {
    const sizes: BentoItem['size'][] = ['small', 'medium', 'large', 'extra-large'];
    return bentoItems.map((item) => ({
      ...item,
      size: sizes[Math.floor(Math.random() * sizes.length)],
    }));
  }, []);

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <main className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 dark:from-zinc-900 dark:to-zinc-700 p-4 md:p-8 transition-colors duration-300">
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
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {randomizedItems.map((item, index) => (
            <motion.div
              key={index}
              className={sizeClasses[item.size]}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <BentoCard {...item} className="h-full" />
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default Home;