"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaExpand } from "react-icons/fa";
import { projects, Project } from "@/data/projects";
import FadeIn from "@/components/ui/FadeIn";

type FilterType = "all" | "interior" | "architecture" | "repair";

const filters: { key: FilterType; label: string }[] = [
  { key: "all", label: "All Categories" },
  { key: "architecture", label: "Architecture" },
  { key: "interior", label: "Interior Design" },
  { key: "repair", label: "Repair" },
];

function PortfolioCard({ project }: { project: Project }) {
  return (
    <div className="break-inside-avoid mb-[30px] group w-full">
      {/* Cover image frame */}
      <div className="relative overflow-hidden w-full flex justify-center pb-[calc(63%+8px)] mb-[20px] bg-[#fcfdff]">
        {/* Badge */}
        <div className="absolute z-[2] bottom-0 right-0 text-[#424242] bg-[#f7f8fa] px-[10px] py-[5px] text-[11px] uppercase font-semibold tracking-[2px]">
          {project.category}
        </div>
        
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="absolute z-[1] top-0 left-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
        />

        {/* Overlay */}
        <div className="absolute inset-0 z-[2] bg-white opacity-0 transition-opacity duration-400 group-hover:opacity-[0.1]" />

        {/* Hover links */}
        <div className="absolute top-1/2 -mt-[50px] z-[3] bg-[#fcfdff] opacity-0 flex transition-opacity duration-400 group-hover:opacity-100">
          <a
            href={project.fullImage}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[100px] h-[100px] flex justify-center items-center cursor-pointer text-[#010d0d] hover:text-[#ffb74d] transition-colors"
          >
            <FaExpand size={18} />
          </a>
          <Link
            href={`/works/${project.slug}`}
            className="w-[100px] h-[100px] flex justify-center items-center cursor-pointer text-[#010d0d] hover:text-[#ffb74d] transition-colors"
          >
            <FaArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Description */}
      <div className="px-1">
        <h4 className="mb-[10px] text-[22px] leading-[30px] font-bold">
          <Link href={`/works/${project.slug}`} className="text-[#0d0d0d] hover:text-[#ffb74d] transition-colors duration-400">
            {project.title}
          </Link>
        </h4>
        <div className="text-[#424242] text-[16px] font-light leading-[22px]">
          {project.description}
        </div>
      </div>
    </div>
  );
}

export default function PortfolioGrid() {
  const [active, setActive] = useState<FilterType>("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section className="py-[100px] bg-[#f7f8fa]">
      <div className="container mx-auto px-[15px]">
        {/* Filter pills */}
        <FadeIn>
          <div className="text-center mb-[40px] flex flex-col md:flex-row justify-center items-center">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`relative inline-block border-none mr-0 md:mr-[10px] mb-[20px] md:mb-0 text-[11px] uppercase font-semibold tracking-[2px] transition-colors duration-400 ${
                  active === f.key ? "text-[#ffb74d]" : "text-[#0d0d0d] hover:text-[#ffb74d]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Masonry grid - 1 col on mobile, 2 col on tablet, 3 col on desktop */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-[30px]">
          {filtered.map((p, i) => (
            <FadeIn key={p.slug} delay={i * 0.05}>
              <PortfolioCard project={p} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
