import React from "react";
import TechnicalSkillCard from "./TechnicalSkillCard";
import TechnicalSkillsData from "./TechnicalSkillsData";

const TechnicalSkillsSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {TechnicalSkillsData.map((skill) => (
        <TechnicalSkillCard key={skill.id} technicalskills={skill} />
      ))}
    </div>
  );
};

export default TechnicalSkillsSection;
