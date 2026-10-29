'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blogs';
import { Search, Calendar, Clock, ArrowRight, BookOpen, ChevronLeft, ChevronRight, FileText } from 'lucide-react';

const CATEGORIES = ['All', 'Technical Guide', 'Installation Guide', 'Tips & Tricks', 'Industry Insights'] as const;
const POSTS_PER_PAGE = 12;

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Reset to page 1 on filter or search change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  const featuredPost = useMemo(() => {
    return blogPosts.find((p) => p.featured) || blogPosts[0];
  }, []);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 380, behavior: 'smooth' });
    }
  };

  // Generate pagination range with ellipses
  const paginationRange = useMemo(() => {
    const delta = 2;
    const range: (number | string)[] = [];
    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      range.unshift('...');
    }
    if (currentPage + delta < totalPages - 1) {
      range.push('...');
    }

    range.unshift(1);
    if (totalPages > 1) {
      range.push(totalPages);
    }

    return range;
  }, [currentPage, totalPages]);

  return (
    <div className="flex flex-col min-h-screen bg-stone-50/40">
      
      {/* Header Banner */}
      <section className="bg-stone-950 text-white py-14 sm:py-20 relative overflow-hidden border-b border-stone-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop"
            alt="Tile adhesive knowledge base"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-4 uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>500+ Technical Articles & Standards Guides</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-serif-heading tracking-tight text-white max-w-3xl mx-auto">
            Vajra Bond Knowledge Hub & Technical Library
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            In-depth engineering documentation, IS 15477 standards compliance, substrate preparation, and problem-solving guides for every tile, stone, and application across India.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mt-8 relative">
            <Search className="w-5 h-5 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tile type, problem, substrate, or IS standard..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-stone-900/90 border border-stone-700 text-white text-sm placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/60 focus:border-amber-500 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 w-full flex-1">
        
        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#c5832b] text-white shadow-sm'
                  : 'bg-white text-stone-700 border border-stone-200 hover:border-amber-400 hover:text-amber-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Post Card (only shown on 'All' on page 1 when not searching) */}
        {selectedCategory === 'All' && !searchQuery.trim() && currentPage === 1 && featuredPost && (
          <div className="mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-3 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              Featured Pillar Guide
            </div>
            <Link
              href={`/blogs/${featuredPost.slug}`}
              className="group block bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-7 relative min-h-[260px] sm:min-h-[360px] bg-stone-100 overflow-hidden">
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-xs text-stone-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-stone-400" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-stone-400" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-black text-stone-900 group-hover:text-[#c5832b] transition-colors leading-snug">
                      {featuredPost.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-3">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {featuredPost.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-stone-100 text-stone-600"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden bg-stone-200">
                        <Image
                          src={featuredPost.author.avatar}
                          alt={featuredPost.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-stone-900">
                          {featuredPost.author.name}
                        </div>
                        <div className="text-[10px] text-stone-500">
                          {featuredPost.author.role}
                        </div>
                      </div>
                    </div>

                    <span className="text-xs font-bold text-[#c5832b] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Section Header & Count */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-stone-200 gap-2">
            <div>
              <h3 className="text-lg font-black text-stone-900">
                {selectedCategory === 'All' ? 'All Guides & Articles' : `${selectedCategory}`}
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                Showing {(currentPage - 1) * POSTS_PER_PAGE + 1}–{Math.min(currentPage * POSTS_PER_PAGE, filteredPosts.length)} of {filteredPosts.length} articles
              </p>
            </div>

            <div className="text-xs text-stone-500 flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-600" />
              <span>Page {currentPage} of {Math.max(1, totalPages)}</span>
            </div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-stone-200">
              <BookOpen className="w-10 h-10 text-stone-300 mx-auto mb-3" />
              <h4 className="text-stone-800 font-bold text-sm">No articles found</h4>
              <p className="text-stone-500 text-xs mt-1">
                Try searching for another tile, application, or substrate.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-xs font-semibold text-stone-700"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <>
              {/* Grid of Articles */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {paginatedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blogs/${post.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Cover Image */}
                      <div className="relative aspect-[16/10] w-full bg-stone-100 overflow-hidden">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-5 sm:p-6 space-y-3">
                        <div className="flex items-center gap-3 text-xs text-stone-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>

                        <h3 className="text-base font-bold text-stone-900 group-hover:text-[#c5832b] transition-colors leading-snug line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="p-5 sm:p-6 pt-0">
                      <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="relative w-7 h-7 rounded-full overflow-hidden bg-stone-200">
                            <Image
                              src={post.author.avatar}
                              alt={post.author.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <span className="text-xs font-semibold text-stone-800 truncate max-w-[120px]">
                            {post.author.name}
                          </span>
                        </div>

                        <span className="text-xs font-bold text-[#c5832b] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          Read
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Responsive Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-1.5 sm:gap-2 pt-10">
                  <button
                    type="button"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-2 rounded-lg border border-stone-300 text-stone-700 hover:bg-stone-100 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 text-xs font-bold transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">Previous</span>
                  </button>

                  <div className="flex items-center gap-1">
                    {paginationRange.map((item, idx) => {
                      if (item === '...') {
                        return (
                          <span key={`dots-${idx}`} className="px-2 py-1 text-stone-400 text-xs">
                            ...
                          </span>
                        );
                      }
                      const pageNum = item as number;
                      const isActive = pageNum === currentPage;
                      return (
                        <button
                          key={`page-${pageNum}`}
                          type="button"
                          onClick={() => handlePageChange(pageNum)}
                          className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            isActive
                              ? 'bg-[#c5832b] text-white shadow-xs'
                              : 'text-stone-700 hover:bg-stone-200/70 border border-stone-200'
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    type="button"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 rounded-lg border border-stone-300 text-stone-700 hover:bg-stone-100 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 text-xs font-bold transition-colors cursor-pointer"
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>

      </div>

    </div>
  );
}
