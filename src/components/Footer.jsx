import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";


export default function Footer() {
  return (
    <footer className="w-full bg-lightSurface dark:bg-darkSurface border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-black dark:text-gray-100">
            SK.
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Software Engineer · Java Full Stack Developer
          </p>
        </div>

        {/* Center */}
        <div className="flex gap-6 text-xl text-gray-600 dark:text-gray-400">
          <a
            href="https://github.com/SanketKumbhar1190"
            target="_blank"
            className="hover:text-primary transition"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sanket-kumbhar-b33755229/"
            target="_blank"
            className="hover:text-primary transition"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
         <a
            href="mailto:sanketkumbhar1190@gmail.com?subject=Contact from Portfolio&body=Hi Sanket,%0D%0A%0D%0AI found your portfolio and would like to connect."
            className="hover:text-primary transition"
            aria-label="Email"
         >
            <FiMail />
         </a>
        </div>

        {/* Right */}
        <div className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-right">
          © {new Date().getFullYear()} Sanket Kumbhar
        </div>
      </div>
    </footer>
  );
}
