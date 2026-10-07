import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";

export default function Portfolio() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading dark>Projects</SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="Arcade detection"
            image="Arcade_api.webp"
            link="https://gcn.sgis.tw/"
            description="A GeoAI tool for detecting arcades using bi-directed graph of spatial relationships"
          />
          <ProjectCard
            title="kmlkmz2geojson"
            image="kmlkmz2geojson.webp"
            imagePosition="top left"
            link="https://kmlkmz2geojson.sgis.tw/"
            description="A simple online converter for KML/KMZ to GeoJSON"
          />
          <ProjectCard
            title="中央研究院 - 研之有物專訪"
            image="arcade_interview.webp"
            link="https://research.sinica.edu.tw/arcade_ai/"
            description="AI 怎麼看懂騎樓空間？為遮風避雨的步行路線鋪路"
          />
        </div>
      </div>
    </section>
  );
}
