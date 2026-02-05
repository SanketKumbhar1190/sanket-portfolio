import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "TrailSync",
    description:
      "A full-stack event planning and ride management platform built with Spring Boot and React.",
    tech: ["Spring Boot", "React", "MySQL"],
    github: "https://github.com/SanketKumbhar1190",
  },
  {
    title: "Job Portal System",
    description:
      "Java-based job portal application with filtering, sorting, and validations.",
    tech: ["Java", "Collections", "OOP"],
    github: "https://github.com/SanketKumbhar1190",
  },
  {
    title: "Vehicle Service Booking System",
    description:
      "ASP.NET Core Web API for booking and managing vehicle services.",
    tech: ["ASP.NET Core", "Web API", "SQL"],
    github: "https://github.com/SanketKumbhar1190",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full py-24 bg-lightSurface dark:bg-darkSurface"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-black dark:text-gray-100"
        >
          Projects

          <div className="section-divider"></div>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-darkCard p-6 rounded-xl shadow hover:-translate-y-1 hover:shadow-xl transition-all duration-300
"
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
