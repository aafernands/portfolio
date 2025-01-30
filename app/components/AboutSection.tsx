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
        <section id="about" className="dark:bg-black py-16 px-4 sm:px-6 lg:px-8">
            <div className="dark:bg-blue-500 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Left: Photo and Intro */}
                <article className="text-center md:text-left">
                    <Image
                        src="/aboutPhoto.png" // Replace with your photo path
                        alt="Alex Fernandes"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto"
                    />

                    <h2 className="mt-8 text-3xl font-bold text-gray-900 dark:text-gray-100">About Me</h2>
                    <p className="text-[16px]">
                        Hi, I am Alex Fernandes, a skilled web developer with expertise in
                        React, Next.js, HTML5, CSS3, JavaScript, jQuery, Bootstrap, Node.js,
                        MySQL, and MongoDB. I specialize in creating high-performance,
                        scalable web applications, delivering responsive and efficient
                        solutions. I also have experience in Salesforce development,
                        optimizing workflows with customized solutions. Fluent in Portuguese
                        and English, I thrive in collaborative environments and stay updated
                        with the latest industry trends to deliver cutting-edge web solutions.
                    </p>
                </article>

                {/* Right: Skills Section */}
                <section>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Skills</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                        {skills.map((skill, index) => (
                            <li key={index} className="text-lg">
                                {skill}
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </section>
    );
}
