"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const awards = [
  {
    title: "Q1 2025 – Extra Mile Award",
    description: "Perficient – 2025",
  },
  {
    title: "Q4 2023 – Appreciation Award",
    description: "Perficient – 2023",
  },
  {
    title: "Q1 2023 – Appreciation Award",
    description: "Perficient – 2023",
  },
  {
    title: "Q3 2022 – Appreciation Award",
    description: "Perficient – 2022",
  },
  {
    title: "Employee of the Month",
    description: "Mastersoft ERP Solutions Pvt Ltd – 2018",
  },
];

const Awards = () => {
  return (
    <section className="relative w-full py-8 bg-blue-50">
      <div className="relative z-10 mx-auto max-w-6xl rounded-2xl bg-white py-10 px-6 shadow-xl lg:px-16">
        {/* Heading */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-800 uppercase">
            Awards & Recognition
          </h2>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Right: Awards List */}
          <ul className="w-full max-w-2xl space-y-5">
            {awards.map(({ title, description }, idx) => (
              <motion.li
                key={idx}
                className="bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition"
                variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </motion.li>
            ))}
          </ul>

          {/* Left: Award Image */}
          <div className="flex-shrink-0">
            <Image
              src="/images/award/award-image.png"
              alt="Award Icon"
              width={400}
              height={300}
              className="object-contain drop-shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
