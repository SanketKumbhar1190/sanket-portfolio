import { motion } from "framer-motion";
import ProfileFrame from "./ProfileFrame";
import { FiAward, FiBriefcase, FiCode } from "react-icons/fi";

const highlights = [
  {
    icon: <FiCode />,
    label: "PG-DAC · CDAC ACTS Pune",
    sub: "Advanced Computing · 75%",
  },
  {
    icon: <FiBriefcase />,
    label: "Salesforce CRM Internship",
    sub: "GTS Solutions",
  },
  {
    icon: <FiAward />,
    label: "IBM Certified",
    sub: "Python for Data Science & ML",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-24 bg-lightSurface dark:bg-darkSurface"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Photo */}
        <ProfileFrame />

        {/* Text */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-4xl font-bold mb-8 text-black dark:text-gray-100"
          >
            Who I Am
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
          >
            I'm <strong>Sanket Vitthal Kumbhar</strong>, a Java Full Stack
            Developer based in Pune. I hold an MCA from Dr. D Y Patil University
            and a PG-DAC from CDAC ACTS Pune, giving me a strong foundation in
            both software engineering principles and modern development practices.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8"
          >
            I specialise in building scalable full-stack applications with
            <strong> Java, Spring Boot, React,</strong> and <strong>MySQL</strong>.
            I enjoy solving real-world problems through clean architecture,
            RESTful APIs, and intuitive user interfaces.
          </motion.p>

          {/* Highlight Pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="flex flex-col gap-3"
          >
            {highlights.map((h, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-3 rounded-lg bg-white dark:bg-darkCard border border-gray-100 dark:border-gray-800 hover:border-primary transition-colors duration-200"
              >
                <span className="text-primary text-xl">{h.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-black dark:text-gray-100">
                    {h.label}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {h.sub}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}