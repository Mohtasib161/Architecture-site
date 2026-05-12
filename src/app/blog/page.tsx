import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import BlogGrid from "@/components/blog/BlogGrid";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Blog – Mireya Studio",
  description:
    "Explore our latest articles on architecture, interior design, and creative inspiration.",
};

export default function BlogPage() {
  return (
    <>
      <PageBanner
        subtitle="Blog"
        title="Explore Our Amazing"
        outlineText="Newsletter"
        body="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        backgroundImage="/img/light/projects/prjct-7/1.jpg"
        scrollTarget="#content"
      />

      <div id="content">
        <BlogGrid />
      </div>

      <Footer
        variant="blog"
        subtitle="Call to action"
        title="Subscribe Our"
        outlineTitle="Newsletter"
        body="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Asperiores, cupiditate?"
      />
    </>
  );
}
