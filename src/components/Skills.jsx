import { motion } from "framer-motion";
import {
  SiJavascript, SiCplusplus, SiPython,
  SiSpringboot, SiHibernate,
  SiReact, SiHtml5, SiCss3, SiTailwindcss,
  SiMysql, SiPostgresql,
  SiGit, SiGithub, SiDocker, SiLinux,
} from "react-icons/si";

// Java has no icon in react-icons v5 — use a styled text badge
const JavaIcon = () => (
  <span className="text-xs font-black leading-none">☕</span>
);
import { TbApi } from "react-icons/tb";

const categories = [
  {
    label: "Programming Languages",
    color: "text-yellow-500",
    border: "border-yellow-500/20",
    bg: "bg-yellow-500/5",
    skills: [
      { name: "Java", icon: <JavaIcon /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "Python", icon: <SiPython /> },
    ],
  },
  {
    label: "Backend",
    color: "text-green-400",
    border: "border-green-400/20",
    bg: "bg-green-400/5",
    skills: [
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Hibernate", icon: <SiHibernate /> },
      { name: "REST APIs", icon: <TbApi /> },
    ],
  },
  {
    label: "Frontend",
    color: "text-blue-400",
    border: "border-blue-400/20",
    bg: "bg-blue-400/5",
    skills: [
      { name: "React", icon: <SiReact /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss3 /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    label: "Databases",
    color: "text-orange-400",
    border: "border-orange-400/20",
    bg: "bg-orange-400/5",
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
  },
  {
    label: "Tools & Platforms",
    color: "text-purple-400",
    border: "border-purple-400/20",
    bg: "bg-purple-400/5",
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Linux", icon: <SiLinux /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-24 bg-lightBg dark:bg-darkBg">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-4xl font-bold mb-12 text-black dark:text-gray-100"
        >
          Skills
        </motion.h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className={`rounded-xl border ${cat.border} ${cat.bg} p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 bg-white dark:bg-darkCard`}
            >
              {/* Category Header */}
              <h3 className={`text-sm font-bold uppercase tracking-widest mb-5 ${cat.color}`}>
                {cat.label}
              </h3>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 + i * 0.05 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium
                      bg-gray-100 dark:bg-darkBg
                      text-gray-800 dark:text-gray-200
                      border border-gray-200 dark:border-gray-700
                      hover:border-primary hover:text-primary
                      transition-colors duration-200"
                  >
                    <span className={`text-base ${cat.color}`}>{skill.icon}</span>
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}