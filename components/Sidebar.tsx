// src/components/Sidebar.tsx
'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { X, Home, List, FileText, Info, Mail, HelpCircle, User, Plus } from 'lucide-react'; // Importing icons for sidebar

const sidebarVariants = {
  hidden: { x: '-100%' },
  visible: { x: 0 },
};

const linkVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const Sidebar = ({ isOpen, toggleSidebar }: { isOpen: boolean, toggleSidebar: () => void }) => {
  return (
    <motion.div
      initial="hidden"
      animate={isOpen ? 'visible' : 'hidden'}
      variants={sidebarVariants}
      transition={{ duration: 0.3 }} // Adjust duration for speed
      className="fixed top-0 left-0 w-full h-full bg-gray-900 z-50 flex flex-col p-8 overflow-y-auto shadow-lg"
    >
      <button 
        onClick={toggleSidebar} 
        className="self-end mb-8 p-2 rounded-full hover:bg-gray-800 focus:outline-none"
      >
        <X className="w-6 h-6 text-gray-300" />
      </button>
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-3xl font-bold text-gray-300">YourApp</h1>
        <p className="text-lg text-gray-500">Your tagline here</p>
      </div>
      <nav className="flex flex-col space-y-6">
        {[
          { label: 'Home', icon: <Home className="w-5 h-5" /> },
          { label: 'All Properties', icon: <List className="w-5 h-5" /> },
          { label: 'Blog', icon: <FileText className="w-5 h-5" /> },
          { label: 'About Us', icon: <Info className="w-5 h-5" /> },
          { label: 'Contact Us', icon: <Mail className="w-5 h-5" /> },
          { label: 'FAQs', icon: <HelpCircle className="w-5 h-5" /> },
          { label: 'Login', icon: <User className="w-5 h-5" /> },
          { label: 'Create a Listing', icon: <Plus className="w-5 h-5" /> },
        ].map((item, index) => (
          <motion.p
            key={item.label}
            className="flex items-center space-x-2 bg-gray-800 rounded-lg p-3 text-gray-300 hover:bg-gray-700 hover:text-gray-100 text-lg font-medium transition-colors duration-300 cursor-pointer"
            variants={linkVariants}
            initial="hidden"
            animate={isOpen ? 'visible' : 'hidden'}
            transition={{ delay: index * 0.1 }}
          >
            {item.icon}
            <span>{item.label}</span>
          </motion.p>
        ))}
      </nav>
    </motion.div>
  );
};

export default Sidebar;
