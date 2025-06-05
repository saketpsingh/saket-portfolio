import Image from 'next/image';
import ProfileContent from '@/components/About/ProfileContent';

const ProfileSidebar = () => {
  return (
    <aside className="w-full md:w-80 bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center transition-transform hover:scale-[1.03] hover:shadow-xl duration-300">
      <h2 className="text-2xl font-extrabold text-blue-700 mb-6 tracking-wide uppercase drop-shadow-sm">
        About Me
      </h2>
      <div className="relative w-56 h-64 mb-6 rounded-3xl overflow-hidden ring-4 ring-gray-300 shadow-md">
        <Image
          src="/images/user/saket-singh.png"
          alt="Saket Singh"
          fill
          sizes="(max-width: 768px) 100vw, 224px"
          className="object-cover"
          priority
        />
      </div>
      <div className="!text-gray-700 !text-base leading-relaxed rich-text">
        <div dangerouslySetInnerHTML={{ __html: ProfileContent }} />
      </div>
    </aside>
  );
};

export default ProfileSidebar;
