import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import PortfolioGrid from "@/components/works/PortfolioGrid";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Works – Mireya Studio",
  description:
    "Explore our portfolio of architecture, interior design, and renovation projects.",
};

export default function WorksPage() {
  return (
    <>
      <PageBanner
        subtitle="Portfolio"
        title="Explore Our Amazing"
        outlineText="Professional Cases"
        body="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        backgroundImage="/img/light/projects/prjct-6/1.jpg"
        scrollTarget="#content"
      />

      <PortfolioGrid />

      <Footer
        subtitle="Call to action"
        title="Do you have"
        outlineTitle="a project?"
        body="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Asperiores, cupiditate?"
        ctaLabel="Let's discuss"
        ctaHref="/contact"
        secondaryLabel="Portfolio"
        secondaryHref="/works"
      />
    </>
  );
}
