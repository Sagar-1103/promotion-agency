'use client';

import React from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import Image from 'next/image';
import "pure-react-carousel/dist/react-carousel.es.css";

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
    quote: "Couldn't be happier with the results.",
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

const TestimonialSlider = () => {
  return (
    <div className="w-full px-4 py-8 mx-auto max-w-screen-lg">
      <h2 className="text-4xl font-bold mb-4 text-center dark:text-white text-black">
        What Our Clients Say
      </h2>
      <p className="text-xl text-gray-400 mb-12 text-center">
        Hear directly from our satisfied customers.
      </p>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={testimonials.length}
        visibleSlides={1} // Default number of visible slides
        step={1}
        isIntrinsicHeight
        infinite // Enable infinite scrolling
        className="relative"
      >
        <Slider>
          {testimonials.map((testimonial, index) => (
            <Slide index={index} key={index}>
              <div className="p-4">
                <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 shadow-lg rounded-lg h-full p-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={128}
                    height={128}
                    className="w-32 h-32 object-cover rounded-full mb-4"
                  />
                  <p className="text-lg italic text-gray-900 dark:text-gray-100 text-center">&quot;{testimonial.quote}&quot;</p>
                  <div className="mt-4 text-center">
                    <p className="font-semibold text-teal-500">{testimonial.name}</p>
                    <p className="text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Slide>
          ))}
        </Slider>
        <div className="flex justify-center mt-4">
          {/* Add pagination dots */}
        </div>
      </CarouselProvider>
      {/* Tailwind CSS for responsive design */}
      <style jsx>{`
        @media (max-width: 768px) {
          .carousel-provider {
            --visible-slides: 2; // Show 2 slides on medium screens
          }
        }

        @media (max-width: 640px) {
          .carousel-provider {
            --visible-slides: 1; // Show 1 slide on small screens
          }
        }
      `}</style>
    </div>
  );
};

export default TestimonialSlider;
