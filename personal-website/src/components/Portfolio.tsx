"use client";
import { useRef } from "react";
import ProjectCard from "@/components/ProjectCard";

export default function Portfolio() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 320; // gap between cards
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-0">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold uppercase">Projects</h2>
          <p className="text-gray-600">Some things I&apos;ve worked on.</p>
        </div>

        <div className="relative flex justify-center">
          {/* left arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-colors"
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* content */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ 
              scrollbarWidth: "none", 
              msOverflowStyle: "none",
              maxWidth: "640px"
            }}
          >
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
            <ProjectCard
              title="中央研究院 - 研之有物專訪"
              image="arcade_interview.png"
              link="https://research.sinica.edu.tw/arcade_ai/"
              description="AI 怎麼看懂騎樓空間？為遮風避雨的步行路線鋪路"
            />
          </div>

          {/* right arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-colors"
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}