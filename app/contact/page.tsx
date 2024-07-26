'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="py-16 mt-14 bg-gray-200 dark:bg-neutral-950 px-3">
      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* Right Section */}
        <motion.div
          className="p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-r-lg order-1 lg:order-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
        >
          <h2 className="text-2xl text-teal-500 font-bold mb-4">Contact us</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-1 block w-full rounded-md border-transparent bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 px-4 py-3"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border-transparent bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 px-4 py-3"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="mt-1 block w-full rounded-md border-transparent bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 px-4 py-3"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-transparent bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 px-4 py-3"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm bg-teal-500 text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Send
              </button>
            </div>
          </form>
        </motion.div>

        {/* Left Section */}
        <div className="p-8 bg-gray-50 dark:bg-gray-900 flex flex-col justify-between order-2 lg:order-1">
          <div>
            <h2 className="text-2xl font-bold text-teal-500 mb-4">Let&apos;s get in touch</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Saepe dolorum adipisci recusandae praesentium dicta!
            </p>
            <div className="space-y-4 mb-4">
              <div className="flex items-center">
                <MapPin className="text-teal-500 mr-2" />
                <p className="text-gray-700 dark:text-gray-300">92 Cherry Drive Uniondale, NY 11553</p>
              </div>
              <div className="flex items-center">
                <Mail className="text-teal-500 mr-2" />
                <p className="text-gray-700 dark:text-gray-300">lorem@ipsum.com</p>
              </div>
              <div className="flex items-center">
                <Phone className="text-teal-500 mr-2" />
                <p className="text-gray-700 dark:text-gray-300">123-456-789</p>
              </div>
            </div>
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.117439049944!2d-122.4194154846818!3d37.77492927975925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085805c09355555%3A0x4d6d6a37241b0a0!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1629179515208!5m2!1sen!2sus"
                className="w-full h-64 md:h-80 lg:h-96 border-0 rounded-lg"
                allowFullScreen
                loading="lazy"
                title="Map"
              ></iframe>
            </div>
          </div>
          <div>
            <p className="text-gray-700 dark:text-gray-300 my-4">Connect with us:</p>
            <div className="flex space-x-4">
              <Facebook className="text-teal-500 cursor-pointer" />
              <Twitter className="text-teal-500 cursor-pointer" />
              <Instagram className="text-teal-500 cursor-pointer" />
              <Linkedin className="text-teal-500 cursor-pointer" />
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactPage;
