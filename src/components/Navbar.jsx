import { useEffect, useState } from "react";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const handleMobileNavClick = (id) => {
  setOpen(false);

  // Wait for menu close animation to finish
  setTimeout(() => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, 300); // MUST match animation duration
};


  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-darkBg border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-black dark:text-gray-100">
          SK.
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-sm font-medium text-gray-700 dark:text-gray-300">
          {["about", "skills", "projects", "contact"].map((item) => (
            <li key={item}>
              <a href={`#${item}`} className="hover:text-primary transition">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          {/* Dark mode toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="text-xl p-2 rounded text-black dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-darkCard transition"
            aria-label="Toggle Dark Mode"
          >
            {dark ? <FiSun /> : <FiMoon />}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl text-black dark:text-gray-200"
            aria-label="Menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white dark:bg-darkBg border-t border-gray-200 dark:border-gray-800"
          >
            <ul className="flex flex-col items-center gap-6 py-6 text-gray-700 dark:text-gray-300">
              {["about", "skills", "projects", "contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleMobileNavClick(item)}
                    className="text-lg hover:text-primary transition bg-transparent"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
