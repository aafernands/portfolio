export default function ProjectsPage() {
    const projects = [
      {
        title: "Bella Vita Restaurant",
        description:
          "A modern restaurant website with an elegant design and responsive layout.",
        liveDemo: "https://bella-vita-restaurant-demo.com",
        github: "https://github.com/aafernands/bella-vita-restaurant",
      },
      {
        title: "Weather App",
        description:
          "A web app to search and display weather information for any city worldwide.",
        liveDemo: "https://aafernands.github.io/weatherApp",
        github: "https://github.com/aafernands/weatherApp",
      },
      {
        title: "Realtor App",
        description:
          "Search for properties and manage your selection with authentication and JWT.",
        liveDemo: "https://wow-realtor-app.herokuapp.com/",
        github: "https://github.com/aafernands/RealtorApp",
      },
    ];
  
    return (
      <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8 sm:p-16">
        <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[var(--foreground)] text-[var(--background)] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
              <p className="mb-6">{project.description}</p>
              <div className="flex justify-between">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium bg-[var(--background)] text-[var(--foreground)] py-2 px-4 rounded-lg hover:bg-opacity-90 transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium bg-[var(--background)] text-[var(--foreground)] py-2 px-4 rounded-lg hover:bg-opacity-90 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  }
  