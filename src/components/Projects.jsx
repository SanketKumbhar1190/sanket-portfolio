import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "TrailSync",
    description:
      "A full-stack event planning and ride management platform built with Spring Boot and React.",
    tech: ["Spring Boot", "React", "MySQL"],
    github: "https://github.com/SanketKumbhar1190/Trail-Sync",
  },
  {
    title: "Rock, Paper, Scissors Game",
    description:
      "A console-based Rock, Paper, Scissors game implemented in Java.",
    tech: ["Java", "Collections", "OOP"],
    github: "https://github.com/SanketKumbhar1190/RockPaperScissor",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website built with React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/SanketKumbhar1190/sanket-portfolio",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full py-24 bg-lightSurface dark:bg-darkSurface"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="section-title text-4xl font-bold mb-12 text-black dark:text-gray-100"
        >
          Projects
        </motion.h2>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-darkCard p-6 rounded-xl shadow hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-black dark:text-gray-100">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-sm bg-gray-200 dark:bg-gray-700 text-black dark:text-gray-200 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-black dark:text-gray-200 font-medium hover:text-primary transition"
              >
                <FiGithub /> View on GitHub
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
