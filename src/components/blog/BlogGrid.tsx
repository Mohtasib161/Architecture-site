"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { blogPosts } from "@/data/blog";
import FadeIn from "@/components/ui/FadeIn";

function BlogCard({ post }: { post: (typeof blogPosts)[0] }) {
  return (
    <div className="break-inside-avoid mb-6 group">
      {/* Image */}
      <div className="relative overflow-hidden rounded mb-4">
        {/* Date badge */}
        <div className="absolute top-4 left-4 z-10 mry-label bg-bg px-3 py-1 rounded">
          {post.date}
        </div>

        <Image
          src={post.image}
          alt={post.title}
          width={600}
          height={400}
          className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Arrow link */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            href={`/blog/${post.slug}`}
            className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-dark hover:bg-accent hover:text-white transition-all duration-300"
          >
            <FaArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Text */}
      <div className="px-1">
        <h4 className="mb-2">
          <Link
            href={`/blog/${post.slug}`}
            className="hover:text-accent transition-colors"
          >
            {post.title}
          </Link>
        </h4>
        <p className="mry-text mb-3">{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`} className="mry-link">
          Read more
        </Link>
      </div>
    </div>
  );
}

export default function BlogGrid() {
  return (
    <section id="content" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
          {blogPosts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.05}>
              <BlogCard post={post} />
            </FadeIn>
          ))}
        </div>

        {/* Pagination */}
        <FadeIn>
          <ul className="flex items-center gap-3 justify-center mt-16">
            {[1, 2, 3, 4, 5].map((n) => (
              <li key={n}>
                <button
                  className={`w-10 h-10 rounded border flex items-center justify-center mry-label transition-all duration-300 ${
                    n === 1
                      ? "bg-dark text-bg border-dark"
                      : "border-dark text-dark hover:bg-dark hover:text-bg"
                  }`}
                >
                  {n}
                </button>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
