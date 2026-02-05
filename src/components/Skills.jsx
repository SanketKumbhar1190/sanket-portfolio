import { motion } from "framer-motion";

const skills = {
  "Programming Languages": ["Java", "JavaScript", "C++", "Python"],
  "Backend Technologies": ["Spring Boot", "Hibernate", "REST APIs"],
  "Frontend Technologies": ["React", "HTML", "CSS", "Tailwind CSS"],
  Databases: ["MySQL", "PostgreSQL"],
  "Tools & Platforms": ["Git", "GitHub", "Docker", "Linux"],
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full py-24 bg-lightBg dark:bg-darkBg"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="section-title text-4xl font-bold mb-12 text-black dark:text-gray-100"
        >
          Skills
        </motion.h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, list], idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-lightSurface dark:bg-darkCard p-6 rounded-xl shadow hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-gray-100">
                {category}
              </h3>

              <ul className="space-y-2">
                {list.map((skill, i) => (
                  <li
                    key={i}
                    className="text-gray-700 dark:text-gray-300"
                  >
                    • {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
