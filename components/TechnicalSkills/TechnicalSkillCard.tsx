import React from "react";
import { TechnicalSkills } from "@/types/technicalskills";
import Image from "next/image";
import { motion } from "framer-motion";

const TechnicalSkillCard = ({ technicalskills }: { technicalskills: TechnicalSkills }) => {
  const { icon, title, description } = technicalskills;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.div
        whileHover={{ scale: 1.03, y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="h-full flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 shadow-md group-hover:rotate-[6deg] transition-transform duration-300">
          <Image
            src={icon}
            width={32}
            height={32}
            alt={title}
            className="object-contain brightness-110 contrast-125"
          />
        </div>

        <h3 className="mt-5 mb-4 text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
          {title}
        </h3>

        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {Array.isArray(description) ? (
            description.map((item, idx) => <li key={idx}>{item}</li>)
          ) : (
            <li>{description}</li>
          )}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default TechnicalSkillCard;
