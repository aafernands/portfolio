import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "Bella Vita Ristorante",
    description:
      "A responsive website for an authentic Italian restaurant, showcasing the menu, story, and reservation options with a modern, user-friendly design.",
    image: "/project1.png",
    liveDemo: "https://bella-vitta-restaurant.vercel.app/",
    githubLink: "https://github.com/aafernands/bella-vitta-restaurant",
    technologies: ["React", "Tailwind CSS", "Node.js", "Next.js"],
    tags: ["Responsive", "E-commerce"],
    date: "January 2025",
  },
  {
    title: "WeatherApp",
    description:
      "A simple and intuitive web application for checking the weather in any city worldwide.",
    image: "/project2.png",
    liveDemo: "https://weatherapp-demo.com",
    githubLink: "https://aafernands.github.io/weatherApp/",
    technologies: ["JavaScript", "Tailwind CSS", "API Integration"],
    tags: ["API", "Utility"],
    date: "December 2024",
  },
  {
    title: "Password Generator App",
    description:
      "A real estate app to browse and save properties, featuring user authentication and favorite listings.",
    image: "/project3.png",
    liveDemo: "https://aafernands.github.io/work-day-scheduler/",
    githubLink: "https://github.com/aafernands/password-generator",
    technologies: ["React", "MongoDB", "JWT", "Tailwind CSS"],
    tags: ["Full Stack", "Authentication"],
    date: "November 2024",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="dark:bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
      <h2 className="mt-8 text-3xl font-bold text-gray-900 dark:text-gray-100 p-10">Projects</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-12">
          Explore some of our creative and innovative projects. Each project is
          designed with care and attention to detail.
        </p>

        {/* Grid Layout: Adjusts based on screen size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              {/* Project Image */}
              <Image 
                src={project.image} 
                alt={project.title} 
                width={200} 
                height={200} 
                className="w-full h-48 object-cover"
              />
              
              {/* Project Details */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{project.description}</p>
                
                {/* Buttons: Live Demo & GitHub */}
                <div className="flex justify-center gap-4 mt-4">
                  <a 
                    href={project.liveDemo} 
                    target="_blank" 
                    className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition-all duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
