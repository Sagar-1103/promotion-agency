"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import Link from "next/link";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full  dark:bg-neutral-950 bg-gray-100 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-3xl mx-auto p-4 text-center">
        <h1 className="relative z-10 text-5xl py-3 md:text-7xl bg-clip-text text-gray-700 dark:text-gray-300  font-sans font-bold">
          Take Your YouTube Channel to New Heights
        </h1>
        <p className="text-neutral-700 dark:text-neutral-300 max-w-lg mx-auto my-8 text-sm relative z-10">
          Ready to amplify your YouTube presence? With our expertise in channel optimization, SEO, and content creation, we can help you attract more viewers, engage your audience, and grow your brand. Let’s unlock your channel’s full potential together.
        </p>
        
        <Link href="/contact"
          type="button"
          className="mt-6 px-6 py-3 rounded-lg bg-gradient-to-b from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800 text-white font-semibold hover:bg-teal-600 transition duration-300 relative z-10"
        >
          Get Started Today
        </Link>
      </div>
      <BackgroundBeams />
    </div>
  );
}
