'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

// Dynamically import PdfViewer with no SSR
const PdfViewer = dynamic(() => import('@/components/PdfViewer/PdfViewer'), {
  ssr: false,
});

const ResumePage = () => {
  return (
    <main
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex flex-col items-center p-6 sm:p-10 relative"
      style={{ paddingTop: '90px' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-5xl bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-300/40 overflow-hidden"
      >
        {/* Sticky Header with Title and Download Button */}
        <header className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-300/40 px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 z-10 rounded-t-3xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-indigo-700">
            Saket Singh's Resume
          </h2>
          <a
            href="/documents/Saket_Singh_Resume.pdf"
            download
            className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300"
            aria-label="Download Resume"
          >
            Download Resume
          </a>
        </header>

        {/* PDF Viewer Section */}
        <section className="p-6 sm:p-10 h-[80vh] border border-gray-200 bg-white shadow-inner overflow-auto">
          <PdfViewer fileUrl="/documents/Saket_Singh_Resume.pdf" />
        </section>

        {/* Bottom Download Button */}
        <footer className="px-8 py-6 flex justify-center border-t border-gray-200 bg-white">
          <a
            href="/documents/Saket_Singh_Resume.pdf"
            download
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300"
            aria-label="Download Resume"
          >
            Download Resume
          </a>
        </footer>
      </motion.div>

      {/* Floating Download Button for medium+ screens */}
      <a
        href="/documents/Saket_Singh_Resume.pdf"
        download
        aria-label="Download Resume"
        className="fixed bottom-8 right-8 z-20 hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-2xl hover:scale-110 hover:shadow-[0_0_25px_rgba(139,92,246,0.7)] transition-transform duration-300"
        title="Download Resume"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 3v12m0 0l4-4m-4 4l-4-4m8 8H8" />
        </svg>
      </a>
    </main>
  );
};

export default ResumePage;
