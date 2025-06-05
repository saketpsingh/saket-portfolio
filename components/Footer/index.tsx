"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#111] text-gray-400 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Column 1: Info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-white mb-2">Saket Singh</h3>
          <a href="mailto:codingwithsaket@gmail.com" className="hover:text-white transition-colors underline underline-offset-4">
            codingwithsaket@gmail.com
          </a>
          <ul className="space-y-1 mt-4">
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </motion.div>

        {/* Column 2: Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold text-white mb-3">Navigate</h4>
          <ul className="space-y-1">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </motion.div>

        {/* Column 3: Publications */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold text-white mb-3">Publications</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/blogs" className="hover:text-white">
                Saket Singh's Blog
              </Link>
            </li>
            <li>
              <a
                href="https://blogs.perficient.com/author/saketsingh/"
                className="hover:text-white transition-colors"
                target="_blank"
              >
                Perficient Blogs
              </a>
            </li>

            <li>
              <a
                href="https://github.com/saketpsingh"
                className="hover:text-white transition-colors"
                target="_blank"
              >
                GitHub Profile
              </a>
            </li>
            <li>
              <a
                href="https://sitecore.stackexchange.com/users/13616/saket-singh"
                className="hover:text-white transition-colors"
                target="_blank"
              >
                Sitecore Stack Exchange
              </a>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Optional: Bottom Line */}
      <div className="text-center text-xs text-gray-600 py-4 border-t border-gray-800 mt-4">
        © {year} Saket Singh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
