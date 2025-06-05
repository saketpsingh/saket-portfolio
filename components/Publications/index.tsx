import Image from "next/image";
import Link from "next/link";
import publicationData from "@/components/Publications/PublicationData";

export default function Publications() {
  return (
    <section className="pt-4 pb-16 bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <div className="relative mx-auto max-w-screen-xl px-4 md:px-8 xl:px-0">
        {/* Section Heading - matches Technical Skills */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-center uppercase py-6 md:py-8 text-gray-900">
            Publications & Contributions
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto -mt-4 mb-4">
            A curated collection of articles, research work, and open-source contributions to the developer community.
          </p>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mt-4" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {publicationData.map((item, index) => (
            <div
              key={index}
              className="relative group text-center rounded-3xl bg-white/80 backdrop-blur-lg border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden p-6"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-transparent to-purple-100 opacity-0 group-hover:opacity-40 rounded-3xl blur-2xl transition-opacity duration-500 pointer-events-none" />

              <div className="mb-6 flex justify-center">
                <div className="w-24 h-24 relative rounded-full border-4 border-blue-100 shadow-inner overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-full"
                  />
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-tight">
                {item.title}
              </h3>

              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 text-sm font-medium shadow-md hover:shadow-lg transition duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                {item.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}