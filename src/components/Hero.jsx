import { motion } from "framer-motion";

export default function Hero() {
  return (
<section className="
  min-h-screen flex flex-col items-center text-center px-6 pt-32
  bg-gradient-to-b from-lightBg via-lightSurface to-lightBg
  dark:from-darkBg dark:via-darkSurface dark:to-darkBg
">
      
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="tracking-widest text-sm mb-4 text-gray-500 dark:text-gray-400"
      >
        SOFTWARE ENGINEER
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-5xl md:text-7xl font-extrabold mb-6 text-black dark:text-gray-100"
      >
        SANKET KUMBHAR
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl md:text-2xl mb-6 text-gray-700 dark:text-gray-300"
      >
        Software Engineer | Java Full Stack Developer | CDAC Graduate
      </motion.h2>

      <p className="max-w-3xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
        Passionate software engineer with a strong foundation in Computer
        Science and expertise in Java, Spring Boot, and modern web technologies.
        Dedicated to building scalable, efficient, and user-centric applications
        that solve real-world problems.
      </p>

      <div className="flex gap-6">
        <a
          href="#projects"
          className="bg-primary text-black px-8 py-3 font-semibold tracking-wide hover:scale-105 transition"
        >
          VIEW PROJECTS
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          className="border border-black dark:border-gray-300 px-8 py-3 font-semibold tracking-wide hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
        >
          DOWNLOAD RESUME
        </a>
      </div>
    </section>
  );
}
