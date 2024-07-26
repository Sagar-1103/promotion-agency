'use client';

import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900">
      {/* Contact Form Section */}
      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center mb-8">
          Contact Us
        </h2>
        <form className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Submit
            </button>
          </div>
        </form>
      </motion.section>

      {/* Contact Information Section */}
      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center mb-8">
          Contact Information
        </h2>
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Address
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              1234 Agency St, City, State, 56789
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Phone Number
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              (123) 456-7890
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Email Address
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              info@agency.com
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Business Hours
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Monday - Friday: 9am - 5pm
            </p>
          </div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center mb-8">
          Our Location
        </h2>
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096!2d144.9537353153187!3d-37.81627927975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5778a4ef79b710!2sFederation+Square!5e0!3m2!1sen!2sau!4v1516788486003"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen={true}
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactPage;
