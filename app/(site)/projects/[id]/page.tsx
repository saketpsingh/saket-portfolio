import { ProjectsData } from '@/components/Projects/ProjectsData';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = ProjectsData.find((p) => p.id === id);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The project you are looking for does not exist.',
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.image ? [project.image] : [],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = ProjectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 px-4 py-20">
      <div className="max-w-4xl mx-auto bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl p-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-900 dark:text-white tracking-tight">
          {project.title}
        </h1>

        <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
          {project.duration && (
            <div>
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">Duration:</span> {project.duration}
            </div>
          )}

          {project.description && (
            <p className="leading-relaxed">{project.description}</p>
          )}

          {project.technologies && project.technologies.length > 0 && (
            <div>
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">Technologies:</span>{' '}
              <span className="inline-block">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-block bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-100 text-sm px-2 py-1 rounded-full mr-2 mb-1"
                  >
                    {tech}
                  </span>
                ))}
              </span>
            </div>
          )}

          {project.image && (
            <div className="mt-8">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl shadow-lg transition-transform hover:scale-[1.02] duration-300"
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
