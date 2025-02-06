import React from 'react';
// import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons"; // Import download icon

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
        <section id="about" className="dark:bg-black py-16 px-4 sm:px-3 lg:px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Left: Photo and Intro */}
                <article className="text-center md:text-left">
                    {/* <Image
                        src="/aboutPhoto.png"
                        alt="Alex Fernandes"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className=" w-full h-auto"
                    /> */}

                    <h2 className="mt-8 text-3xl font-bold text-gray-900 dark:text-gray-100 p-10">About Me</h2>
                    <p className="text-[16px] text-gray-700 dark:text-gray-300">
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
                <section className="flex flex-col items-center">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 p-10">Skills</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {skills.map((skill, index) => (
                            <span key={index} className="px-4 py-2 bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white rounded-full text-sm font-medium transition-transform duration-300 hover:scale-110">
                                {skill}
                            </span>
                        ))}
                    </div>

                    {/* Download CV Button */}
                    <div className=" mt-6 p-20">

                    </div>
                    <a href="/cv.pdf" type="submit" className="border border-gray-300 dark:border-gray-300 shadow-md hover:bg-blue-900 focus:ring-4 rounded-lg focus:ring-blue-glow text-black dark:text-white text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-blue-glow hover:text-white hover:shadow-lg transition duration-300 ease-in-out">
                        <FontAwesomeIcon icon={faDownload} className="mr-2" />
                        Download CV
                    </a>
                </section>
            </div>
        </section>
    );
}
