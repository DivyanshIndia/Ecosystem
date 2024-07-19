'use client'
import React from 'react';
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
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-zinc-200 via-zinc-300 to-zinc-400 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900">
            <div className="max-w-6xl w-full px-4 py-12">
                <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">My Skills</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
                        >
                            <div className="w-full h-36 md:h-48  ">
                                <Image
                                    src={skill.imageUrl}
                                    alt={skill.name}    
                                    width={200}
                                    height={200}
                                    className="w-full h-full object-contain rounded-full"
                                />
                            </div>
                            <div className="p-4 md:p-6">
                                <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100">{skill.name}</h2>
                                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-2">{skill.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
