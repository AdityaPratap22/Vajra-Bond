import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { blogPosts, BlogPost } from '@/data/blogs';
import { getBlogPostBySlug } from '@/lib/blogs-server';
import { products } from '@/data/products';
import { ChevronRight, Home, Calendar, Clock, ArrowLeft, CheckCircle2, PackageCheck } from 'lucide-react';
import type { Metadata } from 'next';

export function generateStaticParams() {
  // Pre-render top 30 posts at build time, render all others on demand
  return blogPosts.slice(0, 30).map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Article Not Found | Vajra Bond',
    };
  }

  return {
    title: `${post.title} | Vajra Bond Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Recommended products
  const relatedProducts = products.filter((prod) =>
    post.recommendedProducts?.includes(prod.id)
  );

  // Other blog posts
  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-stone-50/40">
      
      {/* Breadcrumb Strip */}
      <div className="bg-white border-b border-stone-200/80 min-h-[48px] flex items-center px-4 sm:px-6 lg:px-8 text-xs text-stone-600">
        <div className="max-w-4xl mx-auto w-full flex items-center gap-2">
          <Link href="/" className="hover:text-amber-700 flex items-center gap-1 text-stone-500 hover:text-stone-900 transition-colors shrink-0">
            <Home className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
          <Link href="/blogs" className="hover:text-amber-700 text-stone-500 hover:text-stone-900 transition-colors shrink-0">
            Blogs
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
          <span className="font-semibold text-stone-900 truncate">
            {post.title}
          </span>
        </div>
      </div>

      {/* Main Article Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 w-full">
        
        {/* Back link */}
        <Link
          href="/blogs"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-600 hover:text-[#c5832b] mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </Link>

        {/* Header Metadata */}
        <div className="space-y-4 reveal">
          <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black font-serif-heading text-stone-900 tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            {post.subtitle}
          </p>

          {/* Author info pill */}
          <div className="flex items-center gap-3 pt-3 border-t border-stone-200">
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-stone-200 shrink-0">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-xs font-bold text-stone-900">{post.author.name}</div>
              <div className="text-[11px] text-stone-500">{post.author.role} • Vajra Bond Technical Desk</div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-lg mt-8 mb-10 border border-stone-200 bg-stone-100 reveal-zoom delay-100">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Body */}
        <div className="space-y-8 text-stone-800 leading-relaxed text-sm sm:text-base reveal">
          {post.content.map((section, idx) => (
            <div key={idx} className="space-y-3">
              {section.heading && (
                <h2 className="text-xl sm:text-2xl font-black text-stone-900 pt-3">
                  {section.heading}
                </h2>
              )}
              <p className="text-stone-700 leading-relaxed">
                {section.text}
              </p>
              {section.list && section.list.length > 0 && (
                <ul className="space-y-2 bg-amber-50/50 p-4 sm:p-5 rounded-xl border border-amber-200/60 my-3">
                  {section.list.map((item, lIdx) => (
                    <li key={lIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800">
                      <CheckCircle2 className="w-4 h-4 text-[#c5832b] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Recommended Products Callout */}
        {relatedProducts.length > 0 && (
          <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4 reveal">
            <div className="flex items-center gap-2 text-stone-900 font-bold text-base sm:text-lg">
              <PackageCheck className="w-5 h-5 text-[#c5832b]" />
              <span>Recommended Vajra Bond Products for this Application</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  href={`/products/${p.slug}`}
                  className="group flex items-center gap-3.5 p-3.5 rounded-xl border border-stone-200 hover:border-amber-400 bg-stone-50/50 hover:bg-amber-50/20 transition-all"
                >
                  <div className="relative w-16 h-16 rounded-lg bg-stone-100 overflow-hidden shrink-0 border border-stone-200">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider block">
                      {p.code}
                    </span>
                    <h4 className="text-xs font-bold text-stone-900 truncate group-hover:text-[#c5832b] transition-colors">
                      {p.name}
                    </h4>
                    <p className="text-[11px] text-stone-500 truncate">
                      {p.standardType} • {p.enCode}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Other Articles Section */}
        {otherPosts.length > 0 && (
          <div className="mt-16 pt-10 border-t border-stone-200 space-y-6 reveal">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-stone-900">
                More Articles & Insights
              </h3>
              <Link
                href="/blogs"
                className="text-xs font-bold text-[#c5832b] hover:underline"
              >
                View all blogs →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {otherPosts.map((op) => (
                <Link
                  key={op.slug}
                  href={`/blogs/${op.slug}`}
                  className="group bg-white rounded-xl overflow-hidden border border-stone-200 shadow-2xs hover:shadow-md transition-all p-4 space-y-2.5 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-stone-100">
                      <Image
                        src={op.coverImage}
                        alt={op.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="text-xs font-bold text-stone-900 group-hover:text-[#c5832b] transition-colors line-clamp-2 leading-snug">
                      {op.title}
                    </h4>
                  </div>
                  <span className="text-[11px] text-stone-400">
                    {op.readTime}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

      </article>

    </div>
  );
}
