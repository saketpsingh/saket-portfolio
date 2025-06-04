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
    <section className="relative w-full py-10 sm:py-12 bg-gradient-to-br from-blue-50 to-white">
      <div className="relative z-10 mx-auto max-w-6xl rounded-3xl bg-white py-8 sm:py-10 px-4 sm:px-6 shadow-2xl lg:px-16">
        {/* Heading */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-800 uppercase">
            Awards & Recognition
          </h2>
          <p className="mt-1 sm:mt-2 text-gray-500 text-sm sm:text-base">
            Celebrating milestones and excellence
          </p>
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
