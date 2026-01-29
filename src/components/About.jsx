export default function About() {
  const experience = [
    {
      year: "2023-2024",
      role: "Frontend Developer",
      company: "Tech Startup",
      desc: "Built responsive web applications",
    },
    {
      year: "2022-2023",
      role: "Junior Developer",
      company: "Web Agency",
      desc: "Developed full-stack features",
    },
  ];

  return (
    <div
      id="about"
      className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-5 py-20 md:py-32 text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 -mt-25 md:mb-24">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-400 font-light">
            Passionate developer crafting beautiful and functional web
            experiences
          </p>
        </div>

        {/* Main Content - Full Bio Section */}
        <div className="flex flex-col gap-8 -mt-15">
          <div className="bg-white/5 border border-cyan-500/20 p-8 rounded-xl backdrop-blur-lg">
            <p className="text-lg leading-relaxed text-gray-300 mb-4">
              I'm a full-stack developer with a passion for creating intuitive,
              responsive web applications. With expertise in modern JavaScript
              frameworks and a keen eye for design, I transform ideas into
              scalable digital solutions.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-cyan-500/10 border border-cyan-500/30 p-8 rounded-xl text-center hover:bg-cyan-500/20 transition duration-300">
              <h3 className="text-4xl font-bold text-cyan-400 mb-2">50+</h3>
              <p className="text-gray-400 text-sm">Projects Completed</p>
            </div>
            <div className="bg-cyan-500/10 border border-cyan-500/30 p-8 rounded-xl text-center hover:bg-cyan-500/20 transition duration-300">
              <h3 className="text-4xl font-bold text-cyan-400 mb-2">3+</h3>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>
            <div className="bg-cyan-500/10 border border-cyan-500/30 p-8 rounded-xl text-center hover:bg-cyan-500/20 transition duration-300">
              <h3 className="text-4xl font-bold text-cyan-400 mb-2">15+</h3>
              <p className="text-gray-400 text-sm">Happy Clients</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">
              My Journey
            </h3>
            <p className="text-base leading-relaxed text-gray-300 mb-6">
              I started my journey into web development five years ago with a
              curiosity about how websites work. What began as a hobby has
              evolved into a professional career dedicated to building
              beautiful, functional digital experiences.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">What I Do</h3>
            <p className="text-base leading-relaxed text-gray-300 mb-6">
              I specialize in frontend development with React, creating
              responsive and performant web applications. Beyond coding, I'm
              passionate about cinematography and visual storytelling, which
              enhances my approach to UI/UX design.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              Experience
            </h3>
            <div className="flex flex-col gap-4">
              {experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="bg-cyan-500/5 border border-cyan-500/15 p-4 rounded-lg hover:bg-cyan-500/10 transition duration-300"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-base font-bold text-white">
                      {exp.role}
                    </h4>
                    <span className="text-sm text-cyan-400 font-semibold">
                      {exp.year}
                    </span>
                  </div>
                  <p className="text-sm text-purple-400 mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-400">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
