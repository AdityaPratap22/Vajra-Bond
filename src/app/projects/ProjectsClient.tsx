'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  MapPin, 
  Layers, 
  Calendar, 
  ArrowRight, 
  ShieldCheck, 
  Maximize2 
} from 'lucide-react';
import { projects } from '@/data/projects';
import QuoteModal from '@/components/QuoteModal';

export default function ProjectsClient() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [activeProjectModal, setActiveProjectModal] = useState<any>(null);

  const filters = ['All', 'Residential', 'Commercial', 'Industrial', 'Exterior', 'Hospitality'];

  const filteredProjects = projects.filter((proj) => {
    if (selectedFilter === 'All') return true;
    return proj.category === selectedFilter;
  });

  return (
    <div className="flex flex-col min-h-screen bg-stone-50/30">
      
      {/* HEADER BANNER */}
      <section className="bg-stone-900 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Our Projects
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
            Discover how Vajra Bond is creating stronger and more beautiful spaces across India — trusted by premier architects, luxury builders, and government infrastructure projects.
          </p>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="bg-white border-b border-stone-200 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedFilter === filter
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group reveal ${
                idx % 3 === 0 ? 'delay-100' : idx % 3 === 1 ? 'delay-200' : 'delay-300'
              }`}
            >
              {/* Image */}
              <div className="relative h-60 w-full overflow-hidden bg-stone-900 cursor-pointer" onClick={() => setActiveProjectModal(project)}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent"></div>
                
                <span className="absolute top-4 left-4 px-2.5 py-1 bg-stone-900/80 backdrop-blur-md text-amber-400 text-[11px] font-bold rounded-md border border-stone-700">
                  {project.category}
                </span>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="flex items-center gap-1.5 text-xs text-amber-300 mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-lg font-black leading-snug">{project.title}</h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-stone-600 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-stone-100 text-xs">
                  <div className="flex justify-between items-center text-stone-500">
                    <span>Bonded Tiling Area:</span>
                    <strong className="text-stone-900 font-bold">{project.area}</strong>
                  </div>
                  <div className="flex justify-between items-center text-stone-500">
                    <span>Completed:</span>
                    <strong className="text-stone-900 font-bold">{project.completionYear}</strong>
                  </div>
                  <div>
                    <span className="text-stone-500 block mb-1">Adhesives Specified:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.productsUsed.map((p, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-amber-50 text-amber-800 text-[10px] font-bold rounded border border-amber-200">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-100">
                  <button
                    type="button"
                    onClick={() => setActiveProjectModal(project)}
                    className="w-full py-2.5 bg-stone-50 hover:bg-amber-50 text-stone-800 hover:text-amber-800 text-xs font-bold rounded-xl transition-colors border border-stone-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>View Project Case Study</span>
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Technical Consultation Box */}
        <div className="mt-16 bg-gradient-to-r from-amber-900 to-stone-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
              Architect & Builder Direct Support
            </span>
            <h3 className="text-2xl font-black">Specifying adhesives for your upcoming project?</h3>
            <p className="text-xs sm:text-sm text-stone-300 max-w-xl">
              Get comprehensive technical submittals, adhesion pull-off test results, and tailor-made BOQ specifications from our technical engineering desk.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsQuoteOpen(true)}
            className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all whitespace-nowrap cursor-pointer"
          >
            Request Project Specification
          </button>
        </div>
      </section>

      {/* Project Detail Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95 duration-200">
            <div className="relative h-64 sm:h-72 w-full bg-stone-950">
              <Image
                src={activeProjectModal.image}
                alt={activeProjectModal.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent"></div>
              
              <button
                onClick={() => setActiveProjectModal(null)}
                className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-colors"
              >
                ✕
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block mb-1">
                  {activeProjectModal.category} Showcase
                </span>
                <h3 className="text-2xl font-black">{activeProjectModal.title}</h3>
                <p className="text-xs text-stone-300 flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  {activeProjectModal.location}
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4 text-xs sm:text-sm text-stone-700">
              <p className="leading-relaxed">
                {activeProjectModal.description}
              </p>

              <div className="grid grid-cols-2 gap-4 bg-stone-50 p-4 rounded-xl border border-stone-200">
                <div>
                  <span className="text-stone-500 text-xs block">Total Tiling Area</span>
                  <strong className="text-stone-900 font-bold text-sm">{activeProjectModal.area}</strong>
                </div>
                <div>
                  <span className="text-stone-500 text-xs block">Year of Completion</span>
                  <strong className="text-stone-900 font-bold text-sm">{activeProjectModal.completionYear}</strong>
                </div>
              </div>

              <div>
                <span className="font-bold text-stone-900 block mb-2">Vajra Bond Formulations Used:</span>
                <div className="flex flex-wrap gap-2">
                  {activeProjectModal.productsUsed.map((p: string, idx: number) => (
                    <span key={idx} className="px-3 py-1 bg-amber-100 text-amber-900 font-bold text-xs rounded-lg border border-amber-300">
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-end gap-3 border-t border-stone-100">
                <button
                  type="button"
                  onClick={() => setActiveProjectModal(null)}
                  className="px-4 py-2 border border-stone-300 rounded-lg font-semibold text-stone-700 hover:bg-stone-50"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveProjectModal(null);
                    setIsQuoteOpen(true);
                  }}
                  className="px-5 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg shadow-sm"
                >
                  Enquire for Similar Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultProduct="Major Project Enquiry"
      />
    </div>
  );
}
