import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaExpand } from "react-icons/fa";
import { projects } from "@/data/projects";
import PageBanner from "@/components/ui/PageBanner";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/ui/FadeIn";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project ? `${project.title} – Mireya Studio` : "Project – Mireya",
    description: project?.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  // Fallback gallery images if none provided in data
  const gallery = project.galleryImages && project.galleryImages.length > 0 
    ? project.galleryImages 
    : [project.coverImage, project.fullImage, project.coverImage, project.fullImage];

  return (
    <>
      <PageBanner
        subtitle={project.category}
        title={project.title}
        outlineText={project.subtitle}
        bgImage={project.fullImage}
        scrollHref="#scroll"
      />

      <div id="scroll" className="transition-fade">
        <div className="mry-content-frame">
          
          {/* 01 Goal Section */}
          <section className="py-[100px] bg-white">
            <div className="container mx-auto px-[15px]">
              <div className="flex justify-center">
                <div className="w-full lg:w-2/3">
                  <FadeIn>
                    <div className="mb-[100px] text-center">
                      {/* Numbering UI */}
                      <div className="relative mb-[40px] inline-block text-center">
                        <div className="text-[72px] font-black opacity-10 [-webkit-text-stroke:1px_#010d0d] text-transparent leading-[72px]">
                          01
                        </div>
                        <div className="text-[13px] font-semibold tracking-[3px] uppercase text-[#0d0d0d] relative -mt-[35px] mry-subtitle">
                          Goal
                        </div>
                      </div>
                      
                      <h3 className="mb-[40px] text-[32px] leading-[40px] font-bold text-[#0d0d0d]">
                        {project.title} - A comprehensive case study of our process and the final result.
                      </h3>
                      
                      <p className="text-[#424242] text-[16px] font-light leading-[22px]">
                        {project.description} We have expertise in architecture, interior design, and renovation. As a leading studio we have expertise in transforming spaces and cater to both SMB and enterprise clients, delivering top-tier experiences.
                      </p>
                    </div>
                  </FadeIn>
                </div>
              </div>

              {/* 02 Project Gallery Header */}
              <div className="w-full">
                <FadeIn>
                  <div className="text-center py-[40px] mb-[40px]">
                    <div className="relative mb-[20px] inline-block text-center">
                      <div className="text-[72px] font-black opacity-10 [-webkit-text-stroke:1px_#010d0d] text-transparent leading-[72px]">
                        02
                      </div>
                      <div className="text-[13px] font-semibold tracking-[3px] uppercase text-[#0d0d0d] relative -mt-[35px] mry-subtitle">
                        Project
                      </div>
                    </div>
                    <h2 className="text-[48px] leading-[66px] font-bold text-[#0d0d0d]">
                      Project gallery
                    </h2>
                  </div>
                </FadeIn>
              </div>

              {/* Masonry Grid */}
              <div className="w-full pb-[100px]">
                <div className="columns-1 sm:columns-2 gap-[30px]">
                  {gallery.map((imgSrc, i) => (
                    <FadeIn key={i} delay={i * 0.1}>
                      <div className="break-inside-avoid mb-[30px] group w-full">
                        <div className="relative overflow-hidden w-full flex justify-center pb-[calc(100%)] bg-[#fcfdff]">
                          <Image
                            src={imgSrc}
                            alt={`${project.title} gallery image ${i + 1}`}
                            fill
                            className="absolute z-[1] top-0 left-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                          />
                          <div className="absolute inset-0 z-[2] bg-white opacity-0 transition-opacity duration-400 group-hover:opacity-[0.1]" />
                          <div className="absolute top-1/2 -mt-[50px] z-[3] bg-[#fcfdff] opacity-0 flex justify-center items-center w-full transition-opacity duration-400 group-hover:opacity-100">
                            <a
                              href={imgSrc}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-[100px] h-[100px] flex justify-center items-center cursor-pointer text-[#010d0d] hover:text-[#ffb74d] transition-colors"
                            >
                              <FaExpand size={18} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
                
                <FadeIn className="mt-12 text-center">
                  <Link href="/works" className="inline-block px-10 py-4 bg-[#fcfdff] text-[#0d0d0d] uppercase text-[11px] tracking-[2px] font-semibold hover:text-[#ffb74d] transition-colors">
                    ← Back to Works
                  </Link>
                </FadeIn>
              </div>
            </div>
          </section>

          <Footer
            subtitle="Next project"
            heading="Do you have"
            outlineText="a project?"
            ctaLabel="Let's discuss"
            ctaHref="/contact"
            secondaryLabel="All Projects"
            secondaryHref="/works"
          />
        </div>
      </div>
    </>
  );
}
