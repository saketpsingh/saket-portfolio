import contactContent from '@/components/Contact/ContactContent';
import ProfileSidebar from '@/components/About/ProfileSidebar'; // adjust if needed

const Contact = () => {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-gray-100 to-gray-50 py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-10 sm:p-12 transition hover:shadow-3xl flex flex-col md:flex-row gap-10">

          {/* Content Section */}
          <div className="md:flex-grow md:basis-2/3 text-gray-700 text-base leading-relaxed space-y-6 [&_p]:mb-4">
            <h2 className="text-3xl font-semibold text-gray-900">{contactContent.heading}</h2>
            <p>{contactContent.intro}</p>

            <section>
              <h3 className="text-2xl font-semibold mt-6 mb-3 text-indigo-600">Get in Touch</h3>
              <ul className="space-y-2">
                {Object.values(contactContent.contactInfo).map(({ label, emoji, value, href }) => (
                  <li key={label} className="flex flex-wrap items-center gap-x-2">
                    <strong>{label}:</strong>
                    <span aria-label={label} role="img">{emoji}</span>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:underline"
                    >
                      {value}
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mt-8 mb-3 text-indigo-600">Why Connect with Me?</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                {contactContent.whyConnect.map(({ title, description }) => (
                  <li key={title}>
                    <strong>{title}:</strong> {description}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mt-8 mb-3 text-indigo-600">A Quick Note</h3>
              <p>{contactContent.quickNote}</p>
            </section>
          </div>

          {/* Profile Sidebar */}
          <div className="md:flex-grow md:basis-1/3 w-full flex justify-center items-start">
            <ProfileSidebar />
          </div>

        </div>
      </div>
    </main>
  );
};

export default Contact;