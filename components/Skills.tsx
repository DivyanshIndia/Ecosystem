'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const skillsData = [
    {
        name: 'HTML',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
        description: 'HTML (HyperText Markup Language) is the standard language for creating web pages. It provides the structure of a webpage.'
    },
    {
        name: 'CSS',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
        description: 'CSS (Cascading Style Sheets) is used to style and layout web pages. It controls the look and feel of a website.'
    },
    {
        name: 'JavaScript',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
        description: 'JavaScript is a versatile programming language used to create dynamic and interactive effects within web browsers.'
    },
    {
        name: 'ReactJS',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        description: 'ReactJS is a JavaScript library for building user interfaces. It allows developers to create reusable UI components.'
    },
    {
        name: 'ExpressJS',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
        description: 'ExpressJS is a web application framework for Node.js, designed to build web applications and APIs easily.'
    },
    {
        name: 'NodeJS',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
        description: 'NodeJS is a JavaScript runtime built on Chrome\'s V8 JavaScript engine, used for building scalable network applications.'
    },
    {
        name: 'MongoDB',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Mongodb-ar21.svg/640px-Mongodb-ar21.svg.png',
        description: 'MongoDB is a NoSQL database known for its flexibility and scalability, making it ideal for handling large volumes of data.'
    },
    {
        name: 'Python',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
        description: 'Python is a high-level programming language known for its readability and versatility. It\'s used in web development, data science, and more.'
    },
    {
        name: 'Git',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg',
        description: 'Git is a version control system that lets developers track changes to their code and collaborate with others.'
    },
    {
        name: 'GitHub',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
        description: 'GitHub is a web-based platform for version control and collaboration, allowing multiple people to work on projects simultaneously.'
    },
    {
        name: 'NextJS',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg',
        description: 'NextJS is a React framework that enables functionality such as server-side rendering and generating static websites.'
    },
    {
        name: 'Django',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg',
        description: 'Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.'
    },
];

const Skills = () => {
    const [circles, setCircles] = useState<{ top: string; left: string; }[]>([]);

    useEffect(() => {
        const numCircles = skillsData.length;
        const radius = window.innerWidth < 600 ? 150 : 200;
        const angleIncrement = (2 * Math.PI) / numCircles;

        const newCircles = [];
        for (let i = 0; i < numCircles; i++) {
            const angle = i * angleIncrement;
            const top = `${radius * Math.cos(angle)}px`;
            const left = `${radius * Math.sin(angle)}px`;
            newCircles.push({ top, left });
        }

        setCircles(newCircles);
    }, []);

    return (
        <div className='h-screen w-full flex flex-col items-center justify-center '>
            <div className="h-full w-full relative flex items-center justify-center">
                <div className="relative">
                    <div className="rounded-full bg-white  w-24 h-24 md:w-32 md:h-32  flex items-center justify-center shadow-xl">
                        <div className="text-center">
                            <p className="text-3xl font-bold">Skills</p>
                            <p className="text-lg text-gray-600">🗣️</p>
                        </div>
                    </div>
                    {circles.map((circle, index) => (
                        <div
                            key={index}
                            className="group absolute rounded-full bg-white w-20 md:w-32 h-20 md:h-32 hover:scale-150 z-0 hover:z-10 transition-transform duration-300 flex items-center justify-center"
                            style={{
                                top: circle.top,
                                left: circle.left,
                            }}
                        >
                            <Image
                                src={skillsData[index]?.imageUrl}
                                alt={skillsData[index]?.name}
                                layout='fill'
                                className="md:w-3/4 md:h-3/4  w-fit h-fit object-contain rounded-full"
                            />
                            <div className="absolute hidden md:block bottom-full h-fit w-24 md:w-32 mb-2 p-2 bg-black/80 font-mono  text-white text-[0.3rem] md:text-[0.5rem] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-600">
                                {skillsData[index]?.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
