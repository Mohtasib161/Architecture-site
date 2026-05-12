import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";
import PageBanner from "@/components/ui/PageBanner";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/ui/FadeIn";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  return {
    title: post ? `${post.title} – Mireya Studio` : "Blog – Mireya",
    description: post?.excerpt,
  };
}

export default async function PublicationPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <PageBanner
        subtitle={post.category}
        title={post.title}
        outlineText={post.date}
        backgroundImage={post.image}
        scrollTarget="#content"
      />

      <article id="content" className="py-24 bg-bg">
        <div className="max-w-3xl mx-auto px-6">
          {/* Hero image */}
          <FadeIn>
            <div className="relative w-full aspect-video overflow-hidden rounded-lg mb-12">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          {/* Meta */}
          <FadeIn>
            <div className="flex items-center gap-6 mb-8">
              <p className="mry-label text-muted">{post.date}</p>
              <span className="w-1 h-1 rounded-full bg-muted" />
              <p className="mry-label text-accent">{post.category}</p>
            </div>
          </FadeIn>

          {/* Title */}
          <FadeIn>
            <h1 className="mb-8">{post.title}</h1>
          </FadeIn>

          {/* Content */}
          <FadeIn>
            <p className="mry-text mb-6">{post.excerpt}</p>
            <p className="mry-text mb-6">{post.content}</p>
            <p className="mry-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque, rem quidem sequi atque architecto quibusdam
              perspiciatis libero repudiandae ipsam laudantium ut.
            </p>
          </FadeIn>

          {/* Back link */}
          <FadeIn className="mt-12">
            <Link href="/blog" className="mry-btn">
              ← Back to Blog
            </Link>
          </FadeIn>
        </div>
      </article>

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
