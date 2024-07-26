'use client';

import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="py-16 bg-teal-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-4xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Take Your YouTube Channel to the Next Level
        </motion.h2>
        <motion.p
          className="text-lg text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        >
          Join us today and start optimizing your videos, creating engaging content, and growing your audience!
        </motion.p>
        <motion.a
          href="/contact"
          className="inline-block bg-white text-teal-500 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
        >
          Get Started Today
        </motion.a>
      </div>
    </section>
  );
};

export default CTASection;
