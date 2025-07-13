import ProjectCard from "@/components/ProjectCard";

export default function Portfolio() {
  return (
    <section id="projects" className="py-20 bg-gray-0">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold uppercase">Projects</h2>
          <p className="text-gray-600">Some things I&apo;sve worked on.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          <ProjectCard
            title="Arcade detection"
            image="Arcade_api.png"
            link="https://gcn.sgis.tw/"
            description="A GeoAI tool for detecting arcades using bi-directed graph of spatial relationships"
          />
          <ProjectCard
            title="kmlkmz2geojson"
            image="kmlkmz2geojson.png"
            link="https://kmlkmz2geojson.sgis.tw/"
            description="A simple online converter for KML/KMZ to GeoJSON"
          />
        </div>
      </div>
    </section>
  );
}