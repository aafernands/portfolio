// components/About.tsx
import React from 'react';
import Image from 'next/image';

const skills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'TypeScript',
    'ReactJS',
    'NodeJS',
    'MongoDB',
    'Git & GitHub',
    'Tailwind CSS',
    'Next.js'
];

export default function About() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <section className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Left: Photo and Intro */}
                    <div className="text-center md:text-left">
                        <Image
                            src="/aboutPhoto.png" // Replace with your photo path
                            alt="Alex Fernandes"
                            className="mx-auto md:mx-0 rounded-full w-32 h-32 object-cover shadow-lg"
                        />
                        <h2 className="mt-8 text-3xl font-bold text-gray-900 dark:text-gray-100">About Me</h2>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                            Hi, I am Alex Fernandes, a passionate web developer with experience in front-end and back-end technologies. I love building dynamic and user-friendly web applications, and I am always learning new technologies to improve my skills.
                        </p>
                    </div>

                    {/* Right: Skills Section */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Skills</h3>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                            {skills.map((skill, index) => (
                                <li key={index} className="text-lg">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>

    );
}
