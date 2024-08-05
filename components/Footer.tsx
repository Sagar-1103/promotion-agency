'use client';
import { Mail, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800  dark:bg-gray-900 dark:text-white text-gray-200">
      <div className="mx-auto w-full px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8 justify-center">

          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div className="col-span-2">
              <div>
                <h2 className="text-3xl font-extrabold flex items-center text-white dark:text-gray-100">
                  <Mail className="text-teal-500 mx-4" size={32} />
                  Stay Updated!
                </h2>
                <p className="mt-4 text-gray-400 px-5 dark:text-gray-300">
                  Get the latest news, tips, and exclusive offers delivered right to your inbox.
                </p>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
              <form className="w-full">
                <label htmlFor="UserEmail" className="sr-only">
                  Email
                </label>
                <div className="relative border border-gray-700 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-teal-500 dark:border-gray-600 dark:bg-gray-700">
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="Enter your email"
                    className="w-full border-none bg-gray-800 text-white placeholder-gray-400 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-800 dark:text-gray-100 sm:text-sm rounded-lg py-3 px-4"
                  />
                  <button
                    type="submit"
                    className="absolute inset-y-0 right-0 flex items-center bg-teal-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700 rounded-l-lg"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>

            <div className="col-span-2 px-5 sm:col-span-1">
              <p className="font-medium text-teal-400 dark:text-teal-300">Services</p>
              <ul className="mt-6 space-y-4 text-sm">
                {/* <li>
                  <Link href="/" className="text-gray-300 hover:text-teal-400 dark:text-gray-400 dark:hover:text-teal-300 transition">
                    1-on-1 Coaching
                  </Link>
                </li> */}
                <li>
                  <Link href="/" className="text-gray-300 hover:text-teal-400 dark:text-gray-400 dark:hover:text-teal-300 transition">
                    Company Review
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-300 hover:text-teal-400 dark:text-gray-400 dark:hover:text-teal-300 transition">
                    Channel Review
                  </Link>
                </li>
                {/* <li>
                  <Link href="/" className="text-gray-300 hover:text-teal-400 dark:text-gray-400 dark:hover:text-teal-300 transition">
                    HR Consulting
                  </Link>
                </li> */}
                {/* <li>
                  <Link href="/" className="text-gray-300 hover:text-teal-400 dark:text-gray-400 dark:hover:text-teal-300 transition">
                    SEO Optimization
                  </Link>
                </li> */}
                <li>
                  <Link href="/" className="text-gray-300 hover:text-teal-400 dark:text-gray-400 dark:hover:text-teal-300 transition">
                    Promotion Consultancy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 px-5 sm:col-span-1">
              <p className="font-medium text-teal-400 dark:text-teal-300">Company</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-teal-400 dark:text-gray-400 dark:hover:text-teal-300 transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-300 hover:text-teal-400 dark:text-gray-400 dark:hover:text-teal-300 transition">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-300 hover:text-teal-400 dark:text-gray-400 dark:hover:text-teal-300 transition">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-300 hover:text-teal-400 dark:text-gray-400 dark:hover:text-teal-300 transition">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 px-5 sm:col-span-1">
              <p className="font-medium text-teal-400 dark:text-teal-300">Helpful Links</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-teal-400 dark:text-gray-400 dark:hover:text-teal-300 transition">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-300 hover:text-teal-400 dark:text-gray-400 dark:hover:text-teal-300 transition">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-300 hover:text-teal-400 dark:text-gray-400 dark:hover:text-teal-300 transition">
                    Live Chat
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 px-5 sm:col-span-1">
              <p className="font-medium text-teal-400 dark:text-teal-300">Legal</p>
              <ul className="mt-6 space-y-4 text-sm">
                {/* <li>
                  <Link href="/" className="text-gray-300 hover:text-teal-400 dark:text-gray-400 dark:hover:text-teal-300 transition">
                    Accessibility
                  </Link>
                </li> */}
                <li>
                  <Link href="/" className="text-gray-300 hover:text-teal-400 dark:text-gray-400 dark:hover:text-teal-300 transition">
                      Terms and services
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-300 hover:text-teal-400 dark:text-gray-400 dark:hover:text-teal-300 transition">
                    Refund Policy
                  </Link>
                </li>
                {/* <li>
                  <Link href="/" className="text-gray-300 hover:text-teal-400 dark:text-gray-400 dark:hover:text-teal-300 transition">
                    Hiring Statistics
                  </Link>
                </li> */}
              </ul>
            </div>

            {/* <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-teal-400 dark:text-teal-300">Downloads</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link href="/calendar" className="text-gray-300 hover:text-teal-400 dark:text-gray-400 dark:hover:text-teal-300 transition">
                    Marketing Calendar
                  </Link>
                </li>
                <li>
                  <Link href="/infographics" className="text-gray-300 hover:text-teal-400 dark:text-gray-400 dark:hover:text-teal-300 transition">
                    Infographics
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>
        </div>

        <div className="mt-16 border-t border-gray-700 dark:border-gray-600 flex justify-center pt-8">
          <div className="flex flex-col-reverse gap-y-4 lg:flex-row lg:items-center lg:justify-between lg:gap-y-0">
            <p className="text-sm text-gray-400 dark:text-gray-500">
              © 2024 Your Company, Inc. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="flex justify-center mt-3 gap-4 text-gray-400 dark:text-gray-300">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 dark:hover:text-teal-300 transition">
            <Github size={24} />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 dark:hover:text-teal-300 transition">
            <Linkedin size={24} />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 dark:hover:text-teal-300 transition">
            <Twitter size={24} />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 dark:hover:text-teal-300 transition">
            <Instagram size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
