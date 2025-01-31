import React from "react";

const projects = [
  {
    title: "Bella Vita Ristorante",
    description:
      "A responsive website for an authentic Italian restaurant, showcasing the menu, story, and reservation options with a modern, user-friendly design.",
    image: "../project1.png",
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
    image: "../project2.png",
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
    image: "../project3.png",
    liveDemo: "https://aafernands.github.io/work-day-scheduler/",
    githubLink: "https://github.com/aafernands/password-generator",
    technologies: ["React", "MongoDB", "JWT", "Tailwind CSS"],
    tags: ["Full Stack", "Authentication"],
    date: "November 2024",
  },
];

const ProjectsSection = () => {
  return (
    <div  id="projects" className=" min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">Portfolio</h2>
        <p className="text-center text-gray-600 mb-12">
          Explore some of our creative and innovative projects. Each project is
          designed with care and attention to detail.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
                <div className="mt-4">
                  <a href={project.liveDemo} className="text-blue-500 hover:underline mr-4">Live Demo</a>
                  <a href={project.githubLink} className="text-blue-500 hover:underline">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
