import { useState } from "react";

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      name: "Frontend",
      icon: "⚛️",
      color: "cyan",
      colorHex: "#00d4ff",
      skills: [
        { name: "React", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Vite", level: 85 },
      ],
    },
    {
      name: "Backend",
      icon: "🔧",
      color: "purple",
      colorHex: "#7928ca",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 82 },
        { name: "MongoDB", level: 80 },
        { name: "REST APIs", level: 88 },
        { name: "Authentication", level: 85 },
      ],
    },
    {
      name: "Tools & Others",
      icon: "🛠️",
      color: "pink",
      colorHex: "#ff6ec4",
      skills: [
        { name: "Git", level: 90 },
        { name: "VS Code", level: 92 },
        { name: "Figma", level: 80 },
        { name: "npm", level: 88 },
        { name: "Webpack", level: 75 },
      ],
    },
    {
      name: "Cinematography",
      icon: "🎬",
      color: "orange",
      colorHex: "#ffa500",
      skills: [
        { name: "4K Cinematography", level: 88 },
        { name: "Color Grading", level: 85 },
        { name: "Video Editing", level: 87 },
        { name: "Motion Graphics", level: 80 },
        { name: "Sound Design", level: 78 },
      ],
    },
  ];

  return (
    <div id="skills" className="w-full px-5 py-20 md:py-32 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            My Skills
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 font-light px-2">
            Expertise in full-stack development and creative visual storytelling
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white/5 border-2 p-4 sm:p-6 md:p-8 rounded-xl backdrop-blur-lg hover:bg-white/10 transition duration-300"
              style={{ borderColor: category.colorHex }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-white">
                  {category.name}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-col gap-4">
                {category.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    onMouseEnter={() => setHoveredSkill(`${idx}-${skillIdx}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`p-3 rounded-lg transition duration-200 cursor-pointer ${
                      hoveredSkill === `${idx}-${skillIdx}`
                        ? "bg-white/10"
                        : "hover:bg-white/5"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-300">
                        {skill.name}
                      </span>
                      <span
                        className="text-sm font-bold"
                        style={{ color: category.colorHex }}
                      >
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${category.colorHex}, ${category.colorHex}dd)`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mt-12 sm:mt-16">
          <div className="bg-white/5 border border-cyan-500/20 p-4 sm:p-6 md:p-8 rounded-xl backdrop-blur-lg hover:bg-white/10 transition duration-300">
            <h3 className="text-base sm:text-lg font-bold text-cyan-400 mb-3">
              📚 Always Learning
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              I'm constantly exploring new technologies and frameworks to stay
              updated with industry trends and best practices.
            </p>
          </div>
          <div className="bg-white/5 border border-cyan-500/20 p-8 rounded-xl backdrop-blur-lg hover:bg-white/10 transition duration-300">
            <h3 className="text-lg font-bold text-cyan-400 mb-3">
              🎯 Problem Solver
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              I approach challenges with creative thinking and a focus on
              building scalable, user-centric solutions.
            </p>
          </div>
          <div className="bg-white/5 border border-cyan-500/20 p-8 rounded-xl backdrop-blur-lg hover:bg-white/10 transition duration-300">
            <h3 className="text-lg font-bold text-cyan-400 mb-3">
              🚀 Performance Driven
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Optimizing code performance and user experience is at the core of
              every project I develop.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
