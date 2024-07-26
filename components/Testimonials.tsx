'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: "John Doe",
    quote: "This service is fantastic! It really helped me a lot.",
    role: "CEO, Company",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  },
  {
    name: "Jane Smith",
    quote: "Amazing experience, highly recommend!",
    role: "CTO, TechCorp",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  },
  {
    name: "Sam Wilson",
    quote: "Couldnt be happier with the results.",
    role: "Freelancer",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  },
  {
    name: "Alice Johnson",
    quote: "A game-changer for my business.",
    role: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  },
  {
    name: "Michael Brown",
    quote: "Exceptional quality and service.",
    role: "Manager",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  },
  {
    name: "Emily Davis",
    quote: "Truly outstanding results.",
    role: "Designer",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  },
  {
    name: "Chris Lee",
    quote: "Absolutely wonderful!",
    role: "Developer",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  }
];

const variants = {
  enter: (direction:number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction:number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

const TestimonialSlider = () => {
  const [page, setPage] = useState(0);
  const itemsPerPage = 3;

  const paginate = (newDirection:number) => {
    setPage((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const displayedTestimonials = [
    testimonials[page % testimonials.length],
    testimonials[(page + 1) % testimonials.length],
    testimonials[(page + 2) % testimonials.length]
  ];

  return (
    <div className="relative flex flex-col justify-center items-center overflow-hidden w-[80%] mx-auto h-96">
      <AnimatePresence initial={false} custom={page}>
        <motion.div
          key={page}
          custom={page}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
          className="absolute flex w-full space-x-4 px-4"
        >
          {displayedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-1 flex p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg mx-2"
            >
              <Image src={testimonial.image} alt={testimonial.name} width={128} height={128} className="w-32 h-32 object-cover rounded-l-lg" />
              <div className="p-4 flex flex-col justify-center">
                <p className="text-lg italic text-gray-900 dark:text-gray-100">&quot;{testimonial.quote}&quot;</p>
                <div className="mt-4">
                  <p className="font-semibold text-teal-500">{testimonial.name}</p>
                  <p className="text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-0 w-full flex justify-between items-center px-4 py-2">
        <button onClick={() => paginate(-1)} className="p-2 rounded-full bg-teal-500 text-white">
          <ChevronLeft size={24} />
        </button>
        <button onClick={() => paginate(1)} className="p-2 rounded-full bg-teal-500 text-white">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
