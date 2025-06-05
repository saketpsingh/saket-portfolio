"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import awardsData from "./AwardsData";

const Awards = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind's 'sm' breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleAwards = showAll
    ? awardsData
    : awardsData.slice(0, isMobile ? 3 : 6);

  return (
    <section className="relative w-full pt-6 sm:pt-8 pb-10 sm:pb-12 bg-[radial-gradient(ellipse_at_top_left,_#fdfbfb,_#f3f6fd,_#e4e9f7,_#dee4f1)]">
      <div className="relative z-10 mx-auto max-w-6xl rounded-3xl bg-white/80 backdrop-blur-md border border-white/30 pt-0 sm:pt-2 pb-4 sm:pb-10 px-4 sm:px-6 shadow-xl lg:px-16">
        {/* Heading */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-center uppercase py-6 md:py-8 text-gray-900">
            Awards & Recognition
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto -mt-4 mb-4">
            Celebrating milestones and excellence
          </p>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mt-4" />
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-3 lg:gap-12 items-start">
          {/* Left: Award Image */}
          <div className="col-span-1">
            <div className="relative w-56 sm:w-64 mx-auto lg:mx-0 lg:w-auto lg:h-full">
              <div className="relative w-full h-full aspect-[3/4]">
                <Image
                  src="/images/award/award-image.png"
                  alt="Award Icon"
                  fill
                  className="object-contain drop-shadow-lg rounded-xl"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </div>
          </div>

          {/* Right: Awards List */}
          <div className="lg:col-span-2">
            <AnimatePresence initial={false}>
              <motion.div
                key={showAll ? "expanded" : "collapsed"}
                layout
                transition={{ layout: { duration: 0.5, ease: "easeInOut" } }}
                className="grid sm:grid-cols-2 gap-5"
              >
                {visibleAwards.map(({ title, description }, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-gray-50 border border-gray-100 rounded-xl p-4 shadow-md hover:shadow-lg transition-all"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                  >
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">
                      {title}
                    </h3>
                    <p className="text-sm text-gray-600">{description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Show More / Show Less Button */}
            {(awardsData.length > (isMobile ? 4 : 6) || showAll) && (
              <div className="text-center mt-6 sm:mt-8">
                <button
                  onClick={() => setShowAll((prev) => !prev)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow transition-all"
                >
                  {showAll ? (
                    <>
                      Show Less <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Show More <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
