"use client";

interface Experience {
  company: string;
  location: string;
  roles: {
    title: string;
    startDate: string;
    endDate?: string;
    description?: string; // changed from string[] to string
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
                {role.startDate} – {role.endDate}
              </p>

              {role.description && (
                <div
                  className="mb-2 max-w-3xl text-sm leading-relaxed text-gray-600 space-y-3 [&>ul]:list-disc [&>ul]:pl-5"
                  dangerouslySetInnerHTML={{ __html: role.description }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTabItem;
