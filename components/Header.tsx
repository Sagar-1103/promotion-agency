'use client';

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is enabled in localStorage
    const storedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(storedDarkMode);

    if (storedDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav
      style={{
        background:
          "linear-gradient(271.1deg, rgba(169, 204, 236, 0.2) 37.05%, rgba(90, 125, 154, 0.13) 66.11%)",
        boxShadow: "rgba(0, 0, 0, 0.25) 2px 2px 12px 2px",
        backdropFilter: "blur(5px)",
      }}
      className="fixed top-4 min-w-[55%] md:w-[600px] mx-auto left-4 right-4 bg-transparent shadow-lg rounded-lg backdrop-filter backdrop-blur-2xl z-50"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" passHref>
              <p className="text-xl font-bold text-gray-900 dark:text-gray-200">
                Company
              </p>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 font-medium items-center">
            <Link href="/#services" passHref>
              <p
                onClick={closeMenu}
                className="text-gray-900 dark:text-gray-200 hover:text-teal-500 transition duration-150"
              >
                Services
              </p>
            </Link>
            <Link href="/#testimonials" passHref>
              <p
                onClick={closeMenu}
                className="text-gray-900 dark:text-gray-200 hover:text-teal-500 transition duration-150"
              >
                Testimonials
              </p>
            </Link>
            <Link href="/#about" passHref>
              <p
                onClick={closeMenu}
                className="text-gray-900 dark:text-gray-200 hover:text-teal-500 transition duration-150"
              >
                About Us
              </p>
            </Link>
            <Link href="/contact" passHref>
              <p
                onClick={closeMenu}
                className="text-gray-900 dark:text-gray-200 hover:text-teal-500 transition duration-150"
              >
                Contact
              </p>
            </Link>
            <button
              onClick={toggleDarkMode}
              className="text-gray-900 dark:text-gray-200 hover:text-teal-500 transition duration-150"
            >
              {darkMode ? (
                <Sun className="h-6 w-6" />
              ) : (
                <Moon className="h-6 w-6" />
              )}
            </button>
          </div>
          <div className="flex space-x-5 items-center md:hidden">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                delay: 0.4, // Additional delay for the dark mode toggle button
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              <button
                onClick={toggleDarkMode}
                className="block text-black md:hidden dark:text-white hover:text-teal-500 transition duration-150 px-3 py-2 rounded-md text-base font-medium"
              >
                {darkMode ? (
                  <Sun className="h-6 w-6" />
                ) : (
                  <Moon className="h-6 w-6" />
                )}
              </button>
            </motion.div>
            <button
              onClick={toggleMenu}
              className="text-black dark:text-white hover:text-teal-500 transition duration-150"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              background:
                "linear-gradient(271.1deg, rgba(169, 204, 236, 0.2) 37.05%, rgba(90, 125, 154, 0.13) 66.11%)",
              boxShadow: "rgba(0, 0, 0, 0.25) 2px 2px 12px 2px",
              backdropFilter: "blur(3.5px)",
            }}
            className="md:hidden bg-transparent overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {["Services", "Testimonials", "About", "Contact"].map(
                (text, index) => (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                  >
                    <Link
                      href={text.toLowerCase().replace(/\s+/g, "-") === "contact"
                        ? `/${text.toLowerCase().replace(/\s+/g, "-")}`
                        : `/#${text.toLowerCase().replace(/\s+/g, "-")}`}
                      passHref
                    >
                      <p
                        onClick={closeMenu}
                        className="block text-black text-center dark:text-white hover:text-teal-500 transition duration-150 px-3 py-2 rounded-md text-base font-medium"
                      >
                        {text}
                      </p>
                    </Link>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
