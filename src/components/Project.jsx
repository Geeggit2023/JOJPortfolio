import { useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "frontend",
      description:
        "A modern e-commerce platform with real-time inventory management",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      year: "2024",
    },
    {
      id: 2,
      title: "AI Chat Application",
      category: "frontend",
      description:
        "Interactive chat app with AI integration and real-time messaging",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f70d504d0?w=500&h=300&fit=crop",
      tech: ["React", "WebSocket", "OpenAI API"],
      link: "#",
      year: "2024",
    },
    {
      id: 3,
      title: "Task Management Dashboard",
      category: "frontend",
      description:
        "Beautiful and intuitive dashboard for managing tasks and projects",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      tech: ["React", "Tailwind CSS", "Context API"],
      link: "#",
      year: "2023",
    },
    {
      id: 4,
      title: "Social Media API",
      category: "backend",
      description:
        "Robust REST API for social media platform with authentication",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
      tech: ["Node.js", "Express", "JWT", "PostgreSQL"],
      link: "#",
      year: "2023",
    },
    {
      id: 5,
      title: "Portfolio Website",
      category: "frontend",
      description: "Responsive portfolio showcase with dynamic project gallery",
      image:
        "https://images.unsplash.com/photo-1460925895917-adbab22c1235?w=500&h=300&fit=crop",
      tech: ["React", "Vite", "CSS3", "JavaScript"],
      link: "#",
      year: "2024",
    },
    {
      id: 6,
      title: "Mobile Weather App",
      category: "frontend",
      description: "Beautiful weather app with location-based forecasts",
      image:
        "https://images.unsplash.com/photo-1563056169-ba6dd7c9f2f2?w=500&h=300&fit=crop",
      tech: ["React Native", "Weather API", "Geolocation"],
      link: "#",
      year: "2023",
    },
    {
      id: 7,
      title: "Corporate Brand Film",
      category: "cinematography",
      description:
        "Professional corporate brand film showcasing company culture and values",
      image:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=300&fit=crop",
      tech: ["4K Cinematography", "Color Grading", "Sound Design"],
      link: "#",
      year: "2024",
    },
    {
      id: 8,
      title: "Wedding Highlight Reel",
      category: "cinematography",
      description:
        "Cinematic wedding highlight reel capturing beautiful moments and emotions",
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=500&h=300&fit=crop",
      tech: ["Drone Shots", "Color Grading", "Motion Graphics"],
      link: "#",
      year: "2024",
    },
    {
      id: 9,
      title: "Product Launch Video",
      category: "cinematography",
      description:
        "Dynamic product launch video with visual effects and compelling storytelling",
      image:
        "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500&h=300&fit=crop",
      tech: ["3D Animation", "VFX", "Post-Production"],
      link: "#",
      year: "2023",
    },
    {
      id: 10,
      title: "Travel Documentary Series",
      category: "cinematography",
      description:
        "Immersive travel documentary series exploring cultures and landscapes",
      image:
        "https://images.unsplash.com/photo-1533995405253-dff8ee7b4f5d?w=500&h=300&fit=crop",
      tech: ["Documentary Filming", "Editing", "Audio Engineering"],
      link: "#",
      year: "2023",
    },
    {
      id: 11,
      title: "Music Video Production",
      category: "cinematography",
      description:
        "Creative music video with cinematic visuals and artistic direction",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f70d504d0?w=500&h=300&fit=crop",
      tech: ["Cinematography", "Direction", "Color Correction"],
      link: "#",
      year: "2024",
    },
  ];

  const categories = ["all", "frontend", "backend", "cinematography"];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const getCategoryBgColor = (category) => {
    const colors = {
      frontend: "bg-cyan-500/20",
      backend: "bg-purple-500/20",
      cinematography: "bg-orange-500/20",
      all: "bg-cyan-500/20",
    };
    return colors[category] || colors.all;
  };

  return (
    <div id="projects" className="w-full px-5 py-20 md:py-32 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            My Projects
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 font-light px-2">
            Showcasing my best work across web development and design
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 flex-wrap px-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition duration-300 ${
                filter === cat
                  ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-white border border-cyan-400"
                  : "bg-white/5 text-gray-400 border border-cyan-500/20 hover:border-cyan-500/50"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`bg-white/5 border border-cyan-500/20 rounded-xl overflow-hidden backdrop-blur-lg transition duration-300 cursor-pointer group ${
                hoveredProject === project.id
                  ? "transform -translate-y-2 border-cyan-500/50 shadow-lg shadow-cyan-500/20"
                  : "hover:border-cyan-500/30"
              }`}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-36 sm:h-40 md:h-48 bg-black/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition duration-300 ${
                    hoveredProject === project.id ? "scale-110" : "scale-100"
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300`}
                >
                  <button className="px-8 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-full text-sm font-semibold hover:shadow-lg">
                    View Project
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 md:p-6">
                <div className="flex justify-between items-start gap-2 mb-3">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {project.title}
                  </h3>
                  <span className="text-xs text-cyan-400 font-semibold whitespace-nowrap">
                    {project.year}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-3 sm:mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-cyan-500/20 text-cyan-300 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Category Badge */}
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border border-cyan-500/30 ${getCategoryBgColor(
                    project.category,
                  )} text-cyan-300 capitalize`}
                >
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center p-6 sm:p-10 md:p-12 bg-white/5 border border-cyan-500/20 rounded-xl backdrop-blur-lg mx-2 sm:mx-0">
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-4 sm:mb-6">
            Want to see more of my work?
          </p>
          <button className="px-6 sm:px-10 py-2.5 sm:py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-full text-sm sm:text-base font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition duration-300">
            View Full Portfolio
          </button>
        </div>
      </div>
    </div>
  );
}

function getCategoryColor(category) {
  const colors = {
    frontend: "rgba(0, 212, 255, 0.2)",
    backend: "rgba(121, 40, 202, 0.2)",
    cinematography: "rgba(255, 165, 0, 0.2)",
    all: "rgba(0, 212, 255, 0.2)",
  };
  return colors[category] || colors.all;
}
