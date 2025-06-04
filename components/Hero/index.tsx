"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HeroData from "./HeroData";

const Hero = () => {
  return (
    <section
      className="pt-20 md:pt-16 pb-12 relative overflow-hidden bg-gradient-to-br from-white via-slate-100 to-slate-300"
      style={{ marginTop: `calc(var(--header-height) + 0.5rem)` }}
    >
      {/* Enhanced Modern Background */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        {/* Radial Glow */}
        <div className="absolute top-1/4 left-1/3 w-[60vw] h-[60vw] bg-sky-100 opacity-40 rounded-full blur-[100px]" />

        {/* Glass Panel Overlay */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-md" />

        {/* Gradient Overlay for Extra Depth */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/50 via-slate-100/60 to-white/20" />
      </div>

      <div className="relative mx-auto max-w-c-1235 overflow-hidden px-6 md:px-10 2xl:px-0 z-10">
        <div className="flex flex-col-reverse md:flex-row gap-12 lg:gap-20 items-stretch">
          {/* Left Content */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:flex-[1.3]"
          >
            <div className="mb-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-xl md:text-2xl font-semibold tracking-wide text-gray-600 mb-1"
              >
                {HeroData.greeting}
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="text-3xl md:text-4xl font-extrabold uppercase tracking-normal text-gray-900 drop-shadow-sm"
              >
                {HeroData.name}
              </motion.h2>
            </div>

            <h4 className="mb-6 text-2xl font-medium text-gray-700 tracking-wide">
              {HeroData.title}
            </h4>

            <div
              className="mb-10 max-w-xl text-lg leading-relaxed text-gray-600 tracking-wide space-y-4"
              dangerouslySetInnerHTML={{ __html: HeroData.description }}
            />

            <a
              href={HeroData.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border-2 border-gray-700 bg-white px-7 py-3 text-lg font-semibold text-gray-900 shadow-md transition-all hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300"
            >
              {HeroData.ctaText}
              <svg
                className="ml-3 h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full md:flex-[1.1] max-w-xl hidden md:block"
            style={{ aspectRatio: "588 / 480", minHeight: "360px" }}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-xl bg-gray-300 blur-3xl opacity-30 -z-10"
              style={{ filter: "blur(80px)" }}
            />

            {HeroData.imageSrc && (
              <Image
                src={HeroData.imageSrc}
                alt={HeroData.imageAlt}
                fill
                style={{ objectFit: "contain", objectPosition: "center" }}
                className="relative rounded-xl"
              />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
