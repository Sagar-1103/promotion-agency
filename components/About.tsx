'use client';

import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center mb-12">
          About Us
        </h2>

        <motion.div
          className="mb-16 px-8 py-14 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h3 className="text-2xl font-semibold -mt-4 text-gray-900 dark:text-gray-100 mb-4">
            Our Story
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Our journey began in a small office in 2010 with a mission to revolutionize brand engagement on YouTube. Fueled by passion and innovation, our founders set out to create a comprehensive YouTube management and promotion solution.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            From a two-person team, we’ve grown into a company with experts in YouTube SEO, video production, marketing, and management. We&apos;ve helped clients from startups to large corporations achieve their unique goals.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Our commitment to excellence and creativity drives our success. We amplify each brand&apos;s voice through strategic solutions, optimizing video content and crafting compelling stories. Join us in telling your story to the world.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
