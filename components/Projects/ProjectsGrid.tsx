"use client";

import { useEffect, useRef, useState } from "react";
import SingleProject from "./SingleProject"; // adjust path if needed

interface Project {
  id: string;
  title: string;
  shortDescription: string;
  technologies: string[];
  duration: string;
}

const ProjectsGrid = ({ projects }: { projects: Project[] }) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    const heights = cardRefs.current.map((el) => el?.offsetHeight || 0);
    const tallest = Math.max(...heights);
    setMaxHeight(tallest);
  }, [projects]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <SingleProject
          key={project.id}
          review={project}
          setCardRef={(el) => (cardRefs.current[index] = el)}
          maxHeight={maxHeight}
        />
      ))}
    </div>
  );
};

export default ProjectsGrid;
