'use client';

import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Search, 
  CheckCircle, 
  BookOpen, 
  Printer, 
  ShieldCheck, 
  Eye 
} from 'lucide-react';
import { resources, ResourceItem } from '@/data/resources';
import ResourceViewerModal from '@/components/ResourceViewerModal';

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Resources');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalItem, setActiveModalItem] = useState<ResourceItem | null>(null);

  const categories = [
    'All Resources',
    'Technical Data Sheets',
    'Brochures',
    'Installation Guides'
  ];

  const filteredResources = resources.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All Resources' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-stone-50/30">
      
      {/* HEADER BANNER */}
      <section className="bg-stone-900 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left reveal">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Resources
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
            Download technical data sheets (TDS), master catalogues, and site installation handbooks to get the most out of Vajra Bond products.
          </p>
        </div>
      </section>

      {/* FILTER & SEARCH */}
      <section className="bg-white border-b border-stone-200 sticky top-20 sm:top-[88px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Pills matching template */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-amber-600 text-white shadow-sm'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200 hover:text-stone-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search TDS, guides..."
                className="w-full pl-9 pr-4 py-2 bg-stone-50 border border-stone-300 rounded-xl text-xs text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:bg-white"
              />
            </div>

          </div>
        </div>
      </section>

      {/* RESOURCE LIST / TABLE MATCHING TEMPLATE */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        <div className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden">
          
          <div className="p-5 border-b border-stone-100 bg-stone-50/70 flex items-center justify-between">
            <span className="text-xs font-bold text-stone-700 uppercase tracking-wider">
              Showing {filteredResources.length} Official Publications
            </span>
            <span className="text-xs text-stone-500 flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> BIS IS: 15477:2019 Certified
            </span>
          </div>

          <div className="divide-y divide-stone-100">
            {filteredResources.map((item, idx) => (
              <div
                key={item.id}
                className={`p-5 sm:p-6 hover:bg-amber-50/30 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 reveal ${
                  idx % 4 === 0 ? 'delay-100' : idx % 4 === 1 ? 'delay-150' : idx % 4 === 2 ? 'delay-200' : 'delay-250'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 border border-amber-200">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-sm sm:text-base font-bold text-stone-900">
                        {item.title}
                      </h3>
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-stone-100 text-stone-600 rounded">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-xs text-stone-500 max-w-2xl leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-3 text-[11px] text-stone-400 pt-1">
                      <span>Format: {item.format}</span>
                      <span>•</span>
                      <span>Size: {item.size}</span>
                      <span>•</span>
                      <span>Updated: {item.dateAdded}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-center shrink-0 pt-2 sm:pt-0">
                  <button
                    type="button"
                    onClick={() => setActiveModalItem(item)}
                    className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Preview</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveModalItem(item)}
                    className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Technical Sheet Viewer Modal */}
      {activeModalItem && (
        <ResourceViewerModal
          isOpen={true}
          onClose={() => setActiveModalItem(null)}
          resourceTitle={activeModalItem.title}
          resourceCategory={activeModalItem.category}
          resourceSize={activeModalItem.size}
        />
      )}
    </div>
  );
}
