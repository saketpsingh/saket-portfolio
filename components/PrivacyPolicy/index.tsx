import PrivacyContent from '@/components/PrivacyPolicy/PrivacyContent';
import ProfileSidebar from '@/components/About/ProfileSidebar'; // adjust the path if needed

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-gray-100 to-gray-50 py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-10 sm:p-12 transition hover:shadow-3xl flex flex-col md:flex-row gap-10">

          {/* Content */}
          <div className="md:flex-grow md:basis-2/3 !text-gray-700 !text-base leading-relaxed rich-text">
            <div dangerouslySetInnerHTML={{ __html: PrivacyContent }} />
          </div>

          {/* Profile Sidebar instead of Image */}
          <div className="md:flex-grow md:basis-1/3 w-full flex justify-center items-start">
            <ProfileSidebar />
          </div>

        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
