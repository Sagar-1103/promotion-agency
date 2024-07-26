'use client';

import { motion } from 'framer-motion';
import { User } from 'lucide-react'; // Import Lucide React user icon

const team = [
  {
    name: 'John Doe',
    position: 'CEO & Founder',
    bio: 'John is the visionary behind our agency, leading our team with passion and dedication to excellence.',
  },
  {
    name: 'Jane Smith',
    position: 'Chief Marketing Officer',
    bio: 'Jane drives our marketing strategies and ensures our clients achieve their promotional goals.',
  },
  {
    name: 'Mark Johnson',
    position: 'Lead Video Producer',
    bio: 'Mark oversees all video production, ensuring high-quality content that engages and captivates audiences.',
  },
];

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center mb-12">
          About Us
        </h2>

        {/* Agency Story */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Our Story
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Our journey began in a small office in 2010 with a simple yet ambitious mission: to revolutionize the way brands and businesses engage with their audience on YouTube. Fueled by passion and innovation, our founders, John Doe and Jane Smith, set out to create a one-stop solution for YouTube management and promotion.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Over the years, our agency has grown from a two-person team into a full-fledged company with a diverse team of experts in YouTube SEO, video production, marketing, and channel management. We have helped hundreds of clients achieve their goals, from small startups to large corporations, each with a unique story and vision.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Our commitment to excellence and our innovative approach have been the cornerstone of our success. We believe that every brand has a unique voice that deserves to be heard, and we are dedicated to amplifying that voice through creative and strategic solutions. From optimizing your video content for better search visibility to crafting compelling stories that resonate with your audience, we are here to help you every step of the way.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Today, our agency stands as a leader in the industry, known for our expertise, creativity, and unwavering commitment to our clients' success. We continue to push the boundaries of what is possible on YouTube, constantly evolving and adapting to the ever-changing digital landscape. Join us on this exciting journey and let us help you tell your story to the world.
          </p>
        </motion.div>

        {/* Team Introduction */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                  transition: { duration: 0.2, ease: 'easeOut' },
                }}
              >
                <User className="h-32 w-32 text-teal-500 mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{member.name}</h4>
                <p className="text-teal-500">{member.position}</p>
                <p className="text-gray-700 dark:text-gray-300 text-center mt-2">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
