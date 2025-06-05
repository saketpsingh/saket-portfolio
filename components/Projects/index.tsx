"use client";

import { useEffect, useRef, useState } from "react";
import { ProjectsData } from "./ProjectsData";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const Projects = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    const heights = cardRefs.current.map((ref) => ref?.offsetHeight || 0);
    const max = Math.max(...heights);
    setMaxHeight(max);
  }, [cardRefs.current]);

  return (
    <section className="py-6 md:py-2 bg-gradient-to-b from-gray-100 to-gray-50 dark:from-zinc-900 dark:to-zinc-800">
      <div className="container mx-auto px-4 text-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-center uppercase py-6 md:py-8 text-gray-900">
            Recent Projects
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto -mt-4 mb-4">
            A showcase of selected projects covering frontend, backend, and full-stack development.
          </p>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mt-4" />
        </div>

        <Swiper
          spaceBetween={40}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {ProjectsData.map((project, index) => (
            <SwiperSlide key={project.id}>
              <Link href={`/projects/${project.id}`}>
                <SingleProject
                  review={{
                    ...project,
                    technologies: project.technologies || [],
                    duration: project.duration || "",
                  }}
                  setCardRef={(el) => (cardRefs.current[index] = el)}
                  maxHeight={maxHeight}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
