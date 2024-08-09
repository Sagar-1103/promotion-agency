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
          {/* <h3 className="text-2xl font-semibold -mt-4 text-gray-900 dark:text-gray-100 mb-4">
            Our Story
          </h3> */}
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Exceed IT Services was founded in 2001 by a team of talented and achievement oriented professionals. Over the years, we set our headquarters in Abu Dhabi – UAE and branched out to the rest of the GCC. Our service profile focuses on providing specialized IT services and exceptional IT consultancy to organizations within various sectors.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Exceed&apos;s Continuous growth stems from strategic clarity, effective leadership, staff competency and customer focus. We have grown from a single department providing training services to a multi-departmental company specialized in providing enterprise organizations with a complete set of solutions that cover their entire IT lifecycle.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
