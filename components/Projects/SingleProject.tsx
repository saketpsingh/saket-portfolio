"use client";

interface Project {
  id: string;
  title: string;
  shortDescription: string;
  technologies: string[];
  duration: string;
  image?: string;
}

const SingleProject = ({
  review,
  setCardRef,
  maxHeight,
}: {
  review: Project;
  setCardRef: (el: HTMLDivElement | null) => void;
  maxHeight: number;
}) => {
  const { title, shortDescription, technologies, duration } = review;

  return (
    <div
      ref={setCardRef}
      style={{ height: maxHeight || "auto" }}
      className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
    >
      {/* Title */}
      <div className="mb-3">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-left">
          {title}
        </h3>
        <div className="h-1 w-12 bg-indigo-500 rounded-sm mb-1" />
      </div>

      {/* Duration */}
      {duration && (
        <p className="text-sm text-zinc-700 dark:text-zinc-300 text-left mb-2">
          <span className="font-semibold">Duration:</span>{" "}
          <span className="text-indigo-600 dark:text-indigo-400">{duration}</span>
        </p>
      )}

      {/* Short Description */}
      {shortDescription && (
        <div
          className="rich-text !text-base !text-zinc-700 dark:text-zinc-300 text-left mb-2 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: shortDescription }}
        />
      )}

      {/* Technologies */}
      {technologies?.length > 0 && (
        <div className="text-left mt-1">
          <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
            Technologies:
          </p>
          <ul className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-zinc-700 dark:text-zinc-200">
            {technologies.map((tech, index) => (
              <li
                key={index}
                className="relative pl-3 before:content-['•'] before:absolute before:left-0 before:text-indigo-500"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SingleProject;
