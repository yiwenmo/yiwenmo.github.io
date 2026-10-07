import Image from 'next/image';
import Link from "next/link";
import React from "react";

type ProjectCardProps = {
    title: string;
    image: string;
    link: string;
    description: string;
    imagePosition?: string; // CSS object-position for the cover image
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, image, link, description, imagePosition = "top" }) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-sm transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.08]"
    >
      <div className="relative aspect-[16/10] border-b border-white/10 bg-white">
        <Image
          src={`/${image}`}
          alt={title}
          fill
          style={{ objectFit: 'cover', objectPosition: imagePosition }}
          unoptimized
        />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-gray-100 mb-1 group-hover:underline underline-offset-4">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;