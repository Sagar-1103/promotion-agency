'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { Search, Video, Megaphone, Settings } from 'lucide-react'; // Import Lucide React icons
import { useRef } from 'react';

const services = [
  {
    title: 'YouTube SEO',
    description: 'Optimize your videos for better search visibility and higher rankings on YouTube.',
    benefits: 'Increase video views, attract more subscribers, improve engagement.',
    icon: <Search className="h-8 w-8 text-teal-500" />
  },
  {
    title: 'Video Creation',
    description: 'Professional video production to create engaging and high-quality content.',
    benefits: 'High-quality visuals, compelling storytelling, enhanced brand image.',
    icon: <Video className="h-8 w-8 text-teal-500" />
  },
  {
    title: 'Promotion',
    description: 'Promote your videos to reach a wider audience and grow your channel.',
    benefits: 'Boost views, attract new subscribers, increase brand awareness.',
    icon: <Megaphone className="h-8 w-8 text-teal-500" />
  },
  {
    title: 'Management',
    description: 'Efficient management of your YouTube channel to keep it running smoothly.',
    benefits: 'Time-saving, consistent content scheduling, strategic planning.',
    icon: <Settings className="h-8 w-8 text-teal-500" />
  }
];

interface ServiceCardProps {
  title: string;
  description: string;
  benefits: string;
  icon: any;
}

const ServiceCard = ({ service }:any) => {
  return (
    <motion.div
      className="bg-gray-200 dark:bg-gray-800 shadow-lg rounded-2xl px-6 py-10 flex flex-col items-center space-y-4"
      whileHover={{
        scale: 1.05,
        y: -10,
        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      <div className="text-4xl">
        {service.icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
        {service.title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300">
        {service.description}
      </p>
      <p className="text-teal-500">
        {service.benefits}
      </p>
    </motion.div>
  );
};

const ServicesSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true }); // Trigger only once

  // Trigger animation when the section is in view
  if (inView) {
    controls.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    });
  }

  return (
    <section ref={ref} className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center mb-12">
          Our Services
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
