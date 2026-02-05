import { motion } from "framer-motion";
import ProfileFrame from "./ProfileFrame";

export default function About() {
  return (
    <section className="w-full py-24 bg-lightSurface dark:bg-darkSurface">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Photo */}
        <ProfileFrame />

        {/* Text */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4 text-black dark:text-gray-100"
          >
            Who I Am
          </motion.h2>

          <div className="section-divider"></div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            I am <strong>Sanket Vitthal Kumbhar</strong>, a passionate Software
            Engineer and Java Full Stack Developer with a strong academic
            background in Computer Science. I have completed PG-DAC from CDAC and
            have hands-on experience in developing full-stack applications using
            Java, Spring Boot, React, and MySQL.
          </motion.p>
        </div>

      </div>
    </section>
  );
}
