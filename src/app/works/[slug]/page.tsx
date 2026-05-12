import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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

  return (
    <>
      <PageBanner
        subtitle={project.subtitle}
        title={project.title}
        outlineText="Case Study"
        backgroundImage={project.fullImage}
        scrollTarget="#content"
      />

      {/* Project detail */}
      <section id="content" className="py-24 bg-bg">
        <div className="max-w-5xl mx-auto px-6">
          {/* Meta */}
          <FadeIn>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16 text-center border-b border-gray-200 pb-12">
              {[
                { label: "Category", value: project.category },
                { label: "Year", value: project.year || "2021" },
                { label: "Location", value: project.location || "Toronto, CA" },
                { label: "Client", value: project.client || "Private" },
              ].map((m) => (
                <div key={m.label}>
                  <p className="mry-label text-muted mb-1">{m.label}</p>
                  <p className="mry-text font-medium capitalize">{m.value}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Description */}
          <FadeIn>
            <p className="mry-text max-w-2xl mx-auto text-center mb-16">
              {project.description}
            </p>
          </FadeIn>

          {/* Full-size image */}
          <FadeIn>
            <div className="relative w-full aspect-video overflow-hidden rounded-lg mb-8">
              <Image
                src={project.fullImage}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          {/* Cover image */}
          <FadeIn>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={project.coverImage}
                alt={`${project.title} cover`}
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          {/* Back link */}
          <FadeIn className="mt-12 text-center">
            <Link href="/works" className="mry-btn">
              ← Back to Works
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer
        subtitle="Next project"
        title="Do you have"
        outlineTitle="a project?"
        ctaLabel="Let's discuss"
        ctaHref="/contact"
        secondaryLabel="All Projects"
        secondaryHref="/works"
      />
    </>
  );
}
