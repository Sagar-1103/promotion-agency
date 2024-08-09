'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLottie } from 'lottie-react';
import youtubeAnimation from './animation/youtube.json'; // Path to your Lottie animation

// Define the type for service categories
type ServiceCategory = 'YouTube SEO' | 'Video Creation' | 'Promotion and Management';

// Define the structure of the services object
const serviceDetails: Record<ServiceCategory, string[]> = {
  'YouTube SEO': [
    'Keyword Research & Optimization',
    'Video Title & Description Optimization',
    'Tag Strategy',
    'SEO Analytics & Reporting',
  ],
  'Video Creation': [
    'Scripting & Storyboarding',
    'High-Quality Video Production',
    'Editing & Post-production',
    'Thumbnail Design',
  ],
  'Promotion and Management': [
    'Audience Targeting & Engagement',
    'Ad Campaigns & Promotions',
    'Channel Analytics & Growth Tracking',
    'Content Calendar & Scheduling',
  ],
};

// Tab Button Component
const TabButton = ({ tab, activeTab, onClick }: { tab: ServiceCategory, activeTab: ServiceCategory, onClick: () => void }) => (
  <motion.button
    onClick={onClick}
    className={`px-6 py-2 mx-2 text-lg font-semibold rounded-lg focus:outline-none ${
      activeTab === tab
        ? 'bg-teal-500 text-white'
        : 'bg-white dark:bg-gray-800 dark:text-gray-300 text-gray-600'
    } transition-colors duration-300 ease-in-out hover:bg-teal-400`}
    initial={{ scale: 0.9 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.3 }}
  >
    {tab}
  </motion.button>
);

// Service Item Component
const ServiceItem = ({ service, delay }: { service: string, delay: number }) => (
  <motion.li
    className="flex items-center text-lg text-gray-700 dark:text-gray-200"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, delay }}
  >
    <svg
      className="h-6 w-6 text-teal-500 mr-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
      ></path>
    </svg>
    {service}
  </motion.li>
);

export default function Services() {
  const [activeTab, setActiveTab] = useState<ServiceCategory>('YouTube SEO');
  const options = {
    animationData: youtubeAnimation,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <div className="bg-gray-100 dark:bg-neutral-950 py-12 transition-colors duration-500">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0">
        {/* Left Side - Lottie Animation */}
        <motion.div 
          className="lg:w-1/2 "
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div>
          {View}
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2">
          <motion.h2
            className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What We Offer
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            From creation to promotion, our video services are customized to meet your unique needs. Whether you need end-to-end management or specific solutions, we adapt to fit your brand&apos;s vision and goals.
          </motion.p>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            {Object.keys(serviceDetails).map((tab) => (
              <TabButton
                key={tab}
                tab={tab as ServiceCategory}
                activeTab={activeTab}
                onClick={() => setActiveTab(tab as ServiceCategory)}
              />
            ))}
          </div>

          {/* Service List */}
          <motion.div
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 transition-colors duration-500"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <ul className="space-y-4">
              {serviceDetails[activeTab].map((service, index) => (
                <ServiceItem key={index} service={service} delay={index * 0.1} />
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
