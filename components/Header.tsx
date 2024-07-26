// src/components/Header.tsx
"use client";

import React, { useState } from 'react';
import { Menu } from 'lucide-react'; // Importing the User and Menu icons from Lucide React
import { motion } from 'framer-motion'; // Importing Framer Motion for animations
import Sidebar from './Sidebar'; // Importing the Sidebar component
import Image from 'next/image';
import logo from '../assets/logo.png'; // Adjust the path to your logo image

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navItems = ['Home', 'All Products', 'Blog', 'About Us', 'Contact Us', 'FAQs'];

  return (
    <>
      <header className="flex items-center justify-between px-8 py-4 bg-gray-900 shadow-md backdrop-filter backdrop-blur-lg border-b border-gray-700">
        <Image src={logo} alt="Logo" className="h-14 w-14" />
        <motion.nav
          className="hidden md:flex space-x-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {navItems.map((item, index) => (
            <motion.p
              key={item}
              className="text-gray-300 hover:text-gray-400 font-bold text-lg relative group cursor-pointer"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-600 group-hover:w-full transition-all"></span>
            </motion.p>
          ))}
        </motion.nav>
        <motion.div
          className="hidden md:flex items-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.button
            className="flex items-center px-6 py-2 text-white bg-gray-700 rounded-md hover:bg-gray-800 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Create a Listing</span>
          </motion.button>
        </motion.div>
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Menu
            className="w-6 h-6 text-gray-300 cursor-pointer"
            onClick={toggleSidebar}
          />
        </motion.div>
      </header>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Header;
