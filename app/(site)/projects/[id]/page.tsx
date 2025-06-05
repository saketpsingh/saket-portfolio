import { ProjectsData } from '@/components/Projects/ProjectsData';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = ProjectsData.find((p) => p.id === id);

  if (!project) {
    return {
      title: 'Project Not Found | Saket Singh',
      description: 'The project you are looking for does not exist. Explore other innovative projects by Saket Singh.',
      openGraph: {
        title: 'Project Not Found | Saket Singh',
        description: 'The project you are looking for does not exist. Explore other innovative projects by Saket Singh.',
      },
    };
  }

  return {
    title: `${project.title} | Projects | Saket Singh`,
    description: project.shortDescription || `Explore the "${project.title}" project by Saket Singh.`,
    openGraph: {
      title: `${project.title} | Projects | Saket Singh`,
      description: project.shortDescription || `Explore the "${project.title}" project by Saket Singh.`,
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
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-indigo-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 px-4 py-24">
      <div className="max-w-6xl mx-auto bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start gap-10 p-8 sm:p-12">
          {/* Left Section: Content */}
          <div className="flex-[4] w-full">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-10">
              {project.title}
            </h2>

            {project.duration && (
              <div className="mb-4 font-semibold text-lg text-gray-900 dark:text-white">
                Duration: <span className="text-indigo-600 dark:text-indigo-400 font-normal">{project.duration}</span>
              </div>
            )}

            {project.longDescription && (
              <div
                className="rich-text !text-base !text-gray-900 !dark:text-gray-200 leading-relaxed mb-6"
                dangerouslySetInnerHTML={{ __html: project.longDescription }}
              />
            )}

            {project.technologies && project.technologies.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Technologies Used:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-100 text-sm px-3 py-1 rounded-full shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Section: Smaller Image */}
          {project.image && (
            <div className="flex-[1.5] w-full flex justify-center lg:justify-end">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl shadow-lg object-cover w-full max-w-[300px] max-h-[360px]"
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
