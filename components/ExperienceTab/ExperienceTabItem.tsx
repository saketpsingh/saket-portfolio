"use client";

interface Experience {
  company: string;
  location: string;
  roles: {
    title: string;
    startDate: string;
    endDate?: string;
    description?: string[];
  }[];
}

const ExperienceTabItem = ({ experience }: { experience: Experience }) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-gray-900">{experience.company}</h3>
        <p className="text-sm text-gray-500">{experience.location}</p>
      </div>

      <div className="space-y-6">
        {experience.roles.map((role, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-2xl border bg-white p-6 shadow-md transition hover:shadow-lg"
          >
            <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500" />

            <div className="ml-3">
              <h4 className="text-lg font-semibold text-gray-800">{role.title}</h4>
              <p className="text-sm text-gray-500 mb-2">
                {role.startDate} – {role.endDate || "Present"}
              </p>

              {role.description && (
                <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-gray-600">
                  {role.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTabItem;
