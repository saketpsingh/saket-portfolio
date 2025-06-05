'use client';

import Link from 'next/link';
import { ProjectsData } from '@/components/Projects/ProjectsData';

const ProjectDetail = () => {
    return (
        <main className="min-h-screen pt-16 sm:pt-20 md:pt-10 px-4 pb-20 bg-gradient-to-br from-white to-blue-50 dark:from-zinc-900 dark:to-zinc-950 transition-colors duration-500">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-14 text-center tracking-tight">
                    <span className="text-gray-900 dark:text-white">Technical</span>{' '}
                    <span className="text-gray-500 dark:text-gray-400">Project Experiences</span>
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ProjectsData.map((project) => (
                        <Link
                            key={project.id}
                            href={`/projects/${project.id}`}
                            className="group"
                        >
                            <div className="flex flex-col items-start justify-between bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 dark:bg-zinc-900 dark:border dark:border-strokedark h-full">
                                {/* Project Image */}
                                {project.image && (
                                    <div className="w-full rounded-xl mb-4 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                )}

                                {/* Title */}
                                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">
                                    {project.title}
                                </h3>

                                {/* Duration */}
                                {project.duration && (
                                    <p className="text-sm text-gray-500 dark:text-indigo-400 mb-2">
                                        Duration: {project.duration}
                                    </p>
                                )}

                                {/* Description */}
                                {project.shortDescription && (
                                    <div
                                        className="rich-text !text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 text-left leading-relaxed"
                                        dangerouslySetInnerHTML={{ __html: project.shortDescription ?? 'No description available...' }}
                                    />
                                )}

                                {/* Technologies */}
                                {project.technologies && project.technologies.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-100 text-xs px-2 py-1 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default ProjectDetail;
