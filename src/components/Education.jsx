import { motion } from "framer-motion";

const education = [
  {
    title: "PG-DAC (Post Graduate Diploma in Advanced Computing)",
    institute: "CDAC - ACTS Pune",
    year: "Feb 2025 - Aug 2025",
    Grade: "75 %",
  },
  {
    title: "Master of Computer Applications (MCA)",
    institute: "Dr D Y Patil University, Pune",
    year: "2022 - 2024",
    Grade: "79.5 %",
  },
  {
    title: "Bachelor of Science in Computer Science (BCS)",
    institute: "University of Pune",
    year: "2019 - 2022",
    Grade: "77.5 %",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="w-full py-24 bg-lightSurface dark:bg-darkSurface"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="section-title text-4xl font-bold mb-12 text-black dark:text-gray-100"
        >
          Academic Journey
        </motion.h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-darkCard p-6 rounded-xl shadow hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-gray-100">
                {edu.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400">
                {edu.institute}
              </p>

              <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">
                {edu.year}
              </p>

              <p className="text-sm mt-1 text-gray-500 dark:text-gray-400">
                Grade: {edu.Grade}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
