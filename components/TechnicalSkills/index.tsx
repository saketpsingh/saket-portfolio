"use client";
import React from "react";
import TechnicalSkillsData from "./TechnicalSkillsData";
import TechnicalSkillCard from "./TechnicalSkillCard";

const TechnicalSkills = () => {
  return (
    <section id="features" className="relative bg-gradient-to-b from-white via-slate-50 to-white pb-8 overflow-hidden">
      {/* Background blobs for depth */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-indigo-100 rounded-full opacity-30 blur-3xl -z-10" />
      <div className="absolute bottom-0 -right-16 w-60 h-60 bg-violet-200 rounded-full opacity-30 blur-3xl -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-indigo-50 rounded-full opacity-10 blur-[100px] -z-10" />

      <div className="relative mx-auto max-w-screen-xl px-4 md:px-8 xl:px-0">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-center uppercase py-6 md:py-8 text-gray-900">
            Technical Skills
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto -mt-4 mb-4">
            A balanced set of frontend, backend, and DevOps expertise gained from practical project work.
          </p>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mt-4" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TechnicalSkillsData.map((skill, index) => (
            <TechnicalSkillCard key={index} technicalskills={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
