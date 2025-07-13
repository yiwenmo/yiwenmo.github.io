import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="about" className="py-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold uppercase">About Me</h2>
          <p className="text-lg text-gray-600 mt-4">
          Passionate Learner | Bookworm | Diarist
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left text-sm">
          {/* Academia Sinica */}
          <div>
            <Image
              src="/logos/AC_logo.png"
              width={80}
              height={80}
              alt="Academia Sinica Logo"
              className="mb-4"
              unoptimized
            />
            <h4 className="font-semibold text-base mb-1">Research Assistant</h4>
            <p className="text-gray-600 mb-2">Center for GIS, RCHSS, Academia Sinica</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Focused on GeoAI research covering pedestrian networks, spatial relationships, and arcade detection, with APIs and web tools for data access.</li>
              <p className="text-sm text-gray-500">
               See my <a href="https://www.sciencedirect.com/science/article/abs/pii/S2352938525001818" target="_blank" className="underline hover:text-blue-600">Arcade detection paper</a>
              </p>
            </ul>
          </div>

          {/* NTU */}
          <div>
            <Image
              src="/logos/NTU_logo.jpeg"
              width={80}
              height={80}
              alt="NTU Logo"
              className="mb-4"
              unoptimized
            />
            <h4 className="font-semibold text-base mb-1">M.S. in Civil Engineering</h4>
            <p className="text-gray-600 mb-2">National Taiwan University, Geomatics & AI</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Awarded 2023 Dean’s Honor (Top 1%)</li>
              <li>Focused on spatial machine learning and remote sensing</li>
              <p className="text-sm text-gray-500">
              See my <a href="https://tdr.lib.ntu.edu.tw/handle/123456789/88520" target="_blank" className="underline hover:text-blue-600">Master Thesis</a>
              </p>
            </ul>
          </div>

          {/* NTPU */}
          <div>
            <Image
              src="/logos/NTPU_logo.png"
              width={80}
              height={80}
              alt="NTPU Logo"
              className="mb-4"
              unoptimized
            />
            <h4 className="font-semibold text-base mb-1">B.S. in Real Estate & Built Environment</h4>
            <p className="text-gray-600 mb-2">National Taipei University, Spatial Information Focus</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Real Estate Broker license holder</li>
              <li>Led outreach programs in land administration</li>
              <li>Exchange student offer from HK PolyU (Land Surveying & Geo-Informatics), canceled due to COVID-19</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
