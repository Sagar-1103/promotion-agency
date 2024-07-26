'use client'
import { Mail, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto w-full px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8 justify-center">

          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div className="col-span-2">
              <div>
                <h2 className="text-3xl font-extrabold flex items-center text-white">
                  <Mail className="text-teal-500 mx-4" size={32} />
                  Stay Updated!
                </h2>
                <p className="mt-4 text-gray-400">
                  Get the latest news, tips, and exclusive offers delivered right to your inbox.
                </p>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
              <form className="w-full">
                <label htmlFor="UserEmail" className="sr-only">
                  Email
                </label>
                <div className="relative border border-gray-700 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-teal-500 sm:flex sm:items-center sm:gap-4">
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="Enter your email"
                    className="w-full border-none bg-gray-800 text-white placeholder-gray-400 focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-lg py-3 px-4"
                  />
                  <button
                    type="submit"
                    className="absolute inset-y-0 right-0 flex items-center bg-teal-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-teal-600 rounded-l-lg"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-teal-400">Services</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link href="/coaching" className="text-gray-300 hover:text-teal-400 transition">
                    1-on-1 Coaching
                  </Link>
                </li>
                <li>
                  <Link href="/reviews" className="text-gray-300 hover:text-teal-400 transition">
                    Company Review
                  </Link>
                </li>
                <li>
                  <Link href="/accounts" className="text-gray-300 hover:text-teal-400 transition">
                    Accounts Review
                  </Link>
                </li>
                <li>
                  <Link href="/consulting" className="text-gray-300 hover:text-teal-400 transition">
                    HR Consulting
                  </Link>
                </li>
                <li>
                  <Link href="/seo" className="text-gray-300 hover:text-teal-400 transition">
                    SEO Optimization
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-teal-400">Company</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-teal-400 transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-gray-300 hover:text-teal-400 transition">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="text-gray-300 hover:text-teal-400 transition">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-300 hover:text-teal-400 transition">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-teal-400">Helpful Links</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-teal-400 transition">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-300 hover:text-teal-400 transition">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/live-chat" className="text-gray-300 hover:text-teal-400 transition">
                    Live Chat
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-teal-400">Legal</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link href="/accessibility" className="text-gray-300 hover:text-teal-400 transition">
                    Accessibility
                  </Link>
                </li>
                <li>
                  <Link href="/returns-policy" className="text-gray-300 hover:text-teal-400 transition">
                    Returns Policy
                  </Link>
                </li>
                <li>
                  <Link href="/refund-policy" className="text-gray-300 hover:text-teal-400 transition">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link href="/hiring-statistics" className="text-gray-300 hover:text-teal-400 transition">
                    Hiring Statistics
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-teal-400">Downloads</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link href="/calendar" className="text-gray-300 hover:text-teal-400 transition">
                    Marketing Calendar
                  </Link>
                </li>
                <li>
                  <Link href="/infographics" className="text-gray-300 hover:text-teal-400 transition">
                    Infographics
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-700 flex justify-center pt-8">
          <div className="flex flex-col-reverse gap-y-4 lg:flex-row lg:items-center lg:justify-between lg:gap-y-0">
            <p className="text-sm text-gray-400">
              © 2024 Your Company, Inc. All rights reserved.
            </p>
          </div>
        </div>
            <div className="flex justify-center mt-3 gap-4 text-gray-400">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">
                <Github size={24} />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">
                <Linkedin size={24} />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">
                <Twitter size={24} />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">
                <Instagram size={24} />
              </Link>
            </div>
      </div>
    </footer>
  );
};

export default Footer;
