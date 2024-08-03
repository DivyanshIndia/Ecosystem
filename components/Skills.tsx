"use client"
import React from "react";
import Image from 'next/image';

interface Skill {
    name: string;
    description: string;
    imageUrl: string;
}

const skills: Skill[] = [
    {
        name: 'HTML',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
        description: 'Standard language for creating web pages'
    },
    {
        name: 'CSS',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
        description: 'Styles and layouts web pages'
    },
    {
        name: 'JavaScript',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
        description: 'Creates dynamic and interactive effects'
    },
    {
        name: 'ReactJS',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        description: 'Builds reusable UI components'
    },
    {
        name: 'ExpressJS',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
        description: 'Web application framework for Node.js'
    },
    {
        name: 'NodeJS',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
        description: 'JavaScript runtime for scalable applications'
    },
    {
        name: 'MongoDB',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Mongodb-ar21.svg/640px-Mongodb-ar21.svg.png',
        description: 'Flexible and scalable NoSQL database'
    },
    {
        name: 'Python',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
        description: 'Versatile language for various applications'
    },
];

const SkillCard: React.FC<Skill> = ({ name, description, imageUrl }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
        <div className="p-6">
            <div className="w-16 h-16 mb-4 mx-auto">
                <Image
                    src={imageUrl}
                    alt={name}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800 text-center">{name}</h3>
            <p className="text-gray-600 mb-4 text-center text-sm">{description}</p>
        </div>
    </div>
);

const Skills: React.FC = () => {
    return (
        <div className="min-h-screen w-full  py-16 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 py-2 rounded-md bg-white ">
                    Skills
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <SkillCard key={index} {...skill} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;