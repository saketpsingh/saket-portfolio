import Image from 'next/image';
import AboutMeContent from '@/components/About/AboutMeContent';

const AboutMe = () => {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-gray-100 to-gray-50 py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-10 sm:p-12 transition hover:shadow-3xl flex flex-col md:flex-row gap-10">

          {/* About Me Content - takes 2/3 width on medium+ screens */}
          <div className="md:flex-2 !text-gray-700 !text-base rich-text">
            <div dangerouslySetInnerHTML={{ __html: AboutMeContent }} />
          </div>

          {/* Image on the right side */}
          <div className="md:flex-1 w-full flex justify-center items-start">
            <Image
              src="/images/user/saket-singh.png"
              alt="Saket Singh"
              width={300}    // adjust width as needed
              height={400}   // adjust height as needed
              className="rounded-3xl object-cover"
              priority
            />
          </div>

        </div>
      </div>
    </main>
  );
};

export default AboutMe;
