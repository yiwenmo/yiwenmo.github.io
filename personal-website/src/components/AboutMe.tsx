import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

type Entry = {
  logo: string;
  logoAlt: string;
  title: string;
  org: string;
  period: string;
  points: string[];
  link?: { label: string; href: string };
};

const entries: Entry[] = [
  {
    logo: "/logos/ASU_logo.png",
    logoAlt: "Arizona State University Logo",
    title: "Ph.D. in Geographic Information Science",
    org: "School of Geographical Sciences and Urban Planning, Arizona State University",
    period: "2026 – Present",
    points: ["Research interests: GeoAI, graph neural networks, human-centered spatial modeling, public health and disaster resilience"],
  },
  {
    logo: "/logos/AC_logo.png",
    logoAlt: "Academia Sinica Logo",
    title: "Research Assistant",
    org: "Center for GIS, RCHSS, Academia Sinica",
    period: "2023 – 2026",
    points: [
      "GeoAI research combining graph-based structures with spatial relationships for arcade detection and pedestrian networks",
      "Built APIs and web tools to streamline spatial data access",
    ],
    link: {
      label: "Arcade detection paper",
      href: "https://www.sciencedirect.com/science/article/abs/pii/S2352938525001818",
    },
  },
  {
    logo: "/logos/NTU_logo.jpeg",
    logoAlt: "NTU Logo",
    title: "M.S. in Civil Engineering",
    org: "National Taiwan University, Geomatics & AI",
    period: "2021 – 2023",
    points: [
      "Awarded 2023 Dean’s Honor (Top 1%)",
      "Focused on spatial machine learning and remote sensing",
    ],
    link: {
      label: "Master thesis",
      href: "https://tdr.lib.ntu.edu.tw/handle/123456789/88520",
    },
  },
  {
    logo: "/logos/NTPU_logo.png",
    logoAlt: "NTPU Logo",
    title: "B.S. in Real Estate & Built Environment",
    org: "National Taipei University, Spatial Information Focus",
    period: "2017 – 2021",
    points: [
      "Licensed Real Estate Broker",
      "Led outreach programs in land administration",
      "Selected for exchange at HK PolyU; program canceled due to COVID-19",
    ],
  },
];

export default function AboutMe() {
  return (
    <section id="about" className="py-24 bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading>About</SectionHeading>
        <p className="text-gray-500 mb-12">INTP human being · Bookworm · Diarist</p>

        <ol className="relative border-l border-gray-200 ml-8 space-y-12">
          {entries.map((e) => (
            <li key={e.title} className="relative pl-12">
              <div className="absolute -left-8 top-0 w-16 h-16 rounded-xl border border-gray-200 bg-white p-2 shadow-sm flex items-center justify-center">
                <Image
                  src={e.logo}
                  alt={e.logoAlt}
                  width={48}
                  height={48}
                  className="max-w-full max-h-full w-auto h-auto object-contain"
                  unoptimized
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="font-semibold text-lg text-gray-900">{e.title}</h3>
                <span className="text-sm text-gray-400 whitespace-nowrap">{e.period}</span>
              </div>
              <p className="text-gray-500 text-sm mb-3">{e.org}</p>
              <ul className="space-y-1 text-sm text-gray-700 list-disc pl-5 marker:text-gray-400">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              {e.link && (
                <a
                  href={e.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm text-gray-600 underline underline-offset-4 decoration-gray-300 hover:text-gray-900 hover:decoration-gray-900"
                >
                  {e.link.label} →
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
