import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import {
  AboutSections01_02,
  VideoBlock,
  ServicesSection,
  TeamSection,
  PartnerSection,
  TestimonialsSection,
} from "@/components/about/AboutSections";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About – Mireya Studio",
  description:
    "Learn about Mireya Studio — our team, services, and vision for award-winning design.",
};

export default function AboutPage() {
  return (
    <div style={{ position: "relative" }}>
      {/* ── Banner ── */}
      <PageBanner
        bgImage="/img/light/projects/prjct-7/1.jpg"
        subtitle="About Us"
        title="Design is Intelligence"
        outlineText="Made Visible."
        byline="<b>Alina Wheeler</b> - Graphic Designer, Art Director."
        scrollHref="#mry-anchor"
      />

      {/* ── Content ── */}
      <div id="mry-anchor">
        <AboutSections01_02 />
        <VideoBlock />
        <ServicesSection />
        <TeamSection />
        <PartnerSection />
        <TestimonialsSection />
      </div>

      {/* ── Footer ── */}
      <Footer
        subtitle="Call to action"
        heading="Do you have"
        outlineText="a project?"
        body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br>Asperiores, cupiditate?"
        ctaLabel="Let's discuss"
        ctaHref="/contact"
        secondaryLabel="Portfolio"
        secondaryHref="/works"
        bottomBgImage="/img/light/projects/prjct-5/1.jpg"
      />
    </div>
  );
}
