'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const team = [
    {
      name: 'John Doe',
      position: 'CEO & Founder',
      bio: 'John is the visionary behind our agency, leading our team with passion and dedication to excellence.',
      image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    },
    {
      name: 'Jane Smith',
      position: 'Chief Marketing Officer',
      bio: 'Jane drives our marketing strategies and ensures our clients achieve their promotional goals.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    },
    {
      name: 'Mark Johnson',
      position: 'Lead Video Producer',
      bio: 'Mark oversees all video production, ensuring high-quality content that engages and captivates audiences.',
      image: 'https://images.unsplash.com/photo-1544171843-7792620e57e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    },
  ];
  

const AboutSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-neutral-950">
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
            Our journey began in a small office in 2010 with a simple yet ambitious mission to revolutionize the way brands and businesses engage with their audience on YouTube. Fueled by passion and innovation, our founders, John Doe and Jane Smith, set out to create a one-stop solution for YouTube management and promotion.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Over the years, our agency has grown from a two-person team into a full-fledged company with a diverse team of experts in YouTube SEO, video production, marketing, and channel management. We have helped hundreds of clients achieve their goals, from small startups to large corporations, each with a unique story and vision.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Our commitment to excellence and our innovative approach have been the cornerstone of our success. We believe that every brand has a unique voice that deserves to be heard, and we are dedicated to amplifying that voice through creative and strategic solutions. From optimizing your video content for better search visibility to crafting compelling stories that resonate with your audience, we are here to help you every step of the way.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Today, our agency stands as a leader in the industry, known for our expertise, creativity, and unwavering commitment to our clients success. We continue to push the boundaries of what is possible on YouTube, constantly evolving and adapting to the ever-changing digital landscape. Join us on this exciting journey and let us help you tell your story to the world.
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
                    <div key={index} className="max-w-xs w-full group/card">
                      <div
                        className={cn(
                          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
                          "bg-[url(https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover"
                        )}
                      >
                        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                        <div className="flex flex-row items-center space-x-4 z-10">
                          
                          <div className="flex flex-col">
                            <p className="font-normal text-base text-gray-50 relative z-10">
                              {member.name}
                            </p>
                          </div>
                        </div>
                        <div className="text content bg-slate-50/50 dark:bg-gray-800/50 rounded-lg p-3 text-gray-900 dark:text-gray-100 transition-colors duration-300 group-hover:text-black">
                          <h1 className="font-bold text-xl md:text-2xl  relative z-10">
                           {member.position}
                          </h1>
                          <p className="font-normal text-sm relative z-10 my-4">
                            {member.bio}
                          </p>
                        </div>
                      </div>
                    </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
