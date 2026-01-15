import Image from 'next/image';
import Link from "next/link";
import React from "react";

type ProjectCardProps = {
    title: string;
    image: string;
    link: string;
    description: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, image, link, description }) => {
  return (
    <div className="relative rounded-xl overflow-hidden h-64 w-72 cursor-pointer transition-transform hover:scale-105 hover:shadow-lg">
      <Link href={link}>
        <Image
          src={`/${image}`}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          priority
          unoptimized
        />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
          <p className="text-white text-sm">{description}</p>
        </div>
      </Link>
    </div>
  );
};


export default ProjectCard;