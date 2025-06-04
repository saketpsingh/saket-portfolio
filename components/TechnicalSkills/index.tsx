"use client";
import React from "react";
import TechnicalSkillsData from "./TechnicalSkillsData";
import TechnicalSkillCard from "./TechnicalSkillCard";

const TechnicalSkills = () => {
  return (
    <section
      id="features"
      className="bg-white text-black pb-8" // Added bottom padding
    >
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 xl:px-0">
        <h2 className="text-3xl font-bold text-center uppercase py-6 md:py-8">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-10">
          {TechnicalSkillsData.map((technicalSkillsData, key) => (
            <TechnicalSkillCard technicalskills={technicalSkillsData} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
