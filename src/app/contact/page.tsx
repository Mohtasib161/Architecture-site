import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Contact – Mireya Studio",
  description:
    "Get in touch with Mireya Studio. We'd love to discuss your next project.",
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        subtitle="Contact"
        title="Do you have any questions?"
        outlineText="Write us a message."
        body="Lorem ipsum dolor sit amet, consectetur.
Adipisicing elit suscipit, at."
        backgroundImage="/img/light/projects/prjct-6/1.jpg"
        scrollTarget="#content"
      />

      <div id="content">
        <ContactForm />
      </div>

      <Footer
        subtitle="Call to action"
        title="We have an offer"
        outlineTitle="for you"
        body="Interesting? Enter your email address to find out"
        ctaLabel="Let's discuss"
        ctaHref="/contact"
        secondaryLabel="Portfolio"
        secondaryHref="/works"
      />
    </>
  );
}
