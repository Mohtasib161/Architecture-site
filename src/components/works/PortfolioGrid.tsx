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
    <div className="break-inside-avoid mb-5 group">
      {/* Cover image */}
      <div className="relative overflow-hidden rounded mb-4">
        {/* Badge */}
        <div className="absolute top-4 left-4 z-10 mry-label bg-bg px-3 py-1 rounded capitalize">
          {project.category}
        </div>

        <Image
          src={project.coverImage}
          alt={project.title}
          width={600}
          height={400}
          className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Hover links */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.fullImage}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-dark hover:bg-accent hover:text-white transition-all duration-300"
            aria-label="Expand image"
          >
            <FaExpand size={14} />
          </a>
          <Link
            href={`/works/${project.slug}`}
            className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-dark hover:bg-accent hover:text-white transition-all duration-300"
            aria-label="View project"
          >
            <FaArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Description */}
      <div className="px-1">
        <h4 className="mb-1">
          <Link href={`/works/${project.slug}`} className="hover:text-accent transition-colors">
            {project.title}
          </Link>
        </h4>
        <p className="mry-text text-sm">{project.description}</p>
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
    <section id="content" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Filter pills */}
        <FadeIn>
          <div className="flex flex-wrap gap-4 mb-12">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`mry-label transition-colors duration-300 pb-1 border-b-2 ${
                  active === f.key
                    ? "border-dark text-dark"
                    : "border-transparent text-muted hover:text-dark"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
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
