"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, Search, MapPin, Calendar, Camera, Sparkles, Filter } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Lightbox } from "@/components/ui/lightbox";
import { MotionSection } from "@/components/ui/motion-section";
import { allPhotoStories, PhotoStory } from "@/lib/content/photos";

const CATEGORIES = [
  { id: "All", label: "All Stories" },
  { id: "Healthcare & Impact", label: "Healthcare & Surgeries" },
  { id: "Civil Engineering", label: "Civil Engineering & PWD" },
  { id: "Rotary Leadership", label: "Rotary Leadership" },
  { id: "Youth & Mentorship", label: "Youth & Mentorship" },
  { id: "Culture & Heritage", label: "Culture & Philosophy" },
  { id: "Life & Fellowship", label: "Family & Fellowship" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedImageIdx, setSelectedImageIdx] = useState<number | null>(null);

  // Filter items based on active category and search query
  const filteredItems = useMemo(() => {
    return allPhotoStories.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const matchTitle = item.title?.toLowerCase().includes(q);
      const matchMarathi = item.marathiTitle ? item.marathiTitle.toLowerCase().includes(q) : false;
      const matchCaption = item.caption?.toLowerCase().includes(q);
      const matchLocation = item.location ? item.location.toLowerCase().includes(q) : false;
      const matchTags = item.tags ? item.tags.some((t: string) => t.toLowerCase().includes(q)) : false;

      return matchTitle || matchMarathi || matchCaption || matchLocation || matchTags;
    });
  }, [activeCategory, searchQuery]);

  // Count items per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: allPhotoStories.length };
    for (const cat of CATEGORIES) {
      if (cat.id !== "All") {
        counts[cat.id] = allPhotoStories.filter((p) => p.category === cat.id).length;
      }
    }
    return counts;
  }, []);

  const currentItem = selectedImageIdx !== null ? filteredItems[selectedImageIdx] : null;

  const handlePrev = () => {
    if (selectedImageIdx !== null) {
      setSelectedImageIdx((selectedImageIdx - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleNext = () => {
    if (selectedImageIdx !== null) {
      setSelectedImageIdx((selectedImageIdx + 1) % filteredItems.length);
    }
  };

  return (
    <div className="pt-32 pb-20">
      {/* Header Banner */}
      <section className="bg-mesh-pattern py-16 border-b border-gold-300/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Chronicle of a Purposeful Life"
            title="Stories in Pictures: 60 Photographic Moments"
            subtitle="Every photograph captures an authentic chapter — from multi-crore PWD civil works and landmark Rotary District Governor missions to quiet moments of meditation and family grace."
          />

          {/* Search & Filter Controls */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-ink/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search moments (e.g. Washim, Heart, PWD, Aarti)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-btn bg-surface border border-gold-300/60 focus:outline-none focus:ring-2 focus:ring-primary text-sm text-ink placeholder:text-ink/40 shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-ink/50 hover:text-ink font-semibold"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Results count */}
            <div className="text-xs font-semibold text-ink/70">
              Showing <span className="font-bold text-primary">{filteredItems.length}</span> of {allPhotoStories.length} photographic records
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-6 flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const count = categoryCounts[cat.id] || 0;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-btn text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? "bg-primary text-white shadow-md border border-bronze-400"
                      : "bg-surface text-ink/80 hover:bg-gold-100 hover:text-ink border border-gold-300/40"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                      isActive ? "bg-white/20 text-white" : "bg-sand-200 text-ink/70"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20 bg-sand-100/50 rounded-card border border-sand-300 p-8">
              <Camera className="w-12 h-12 text-ink/30 mx-auto mb-3" />
              <h4 className="font-serif font-bold text-xl text-ink mb-1">No moments matched your search</h4>
              <p className="text-sm text-ink/60 mb-4">Try searching with a different keyword or select "All Stories".</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-btn"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, idx) => (
                <MotionSection key={item.id} delay={Math.min(idx * 0.04, 0.4)}>
                  <div
                    onClick={() => setSelectedImageIdx(idx)}
                    className="group rounded-card overflow-hidden cursor-pointer bg-surface border border-gold-200/80 shadow-sm hover:shadow-xl hover:border-gold-400 transition-all duration-300 flex flex-col h-full"
                  >
                    {/* Image Container with smooth hover zoom */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-sand-100">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Top Badges */}
                      <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                        <span className="bg-primary/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-btn shadow backdrop-blur-sm">
                          {item.category}
                        </span>
                      </div>

                      {/* Expand icon on hover */}
                      <div className="absolute top-2.5 right-2.5 p-1.5 bg-ink/70 rounded-full backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>

                      {/* Bottom Quick Tag */}
                      {item.location && (
                        <div className="absolute bottom-2 left-2.5 text-[11px] text-white font-medium flex items-center gap-1 drop-shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <MapPin className="w-3 h-3 text-gold-300" /> {item.location}
                        </div>
                      )}
                    </div>

                    {/* Card Content & Narrative */}
                    <div className="p-4 flex-1 flex flex-col justify-between bg-surface">
                      <div>
                        <div className="flex items-center justify-between gap-2 text-[11px] text-ink/50 font-semibold mb-1">
                          <span>{item.year || "Documented"}</span>
                          {item.location && (
                            <span className="truncate max-w-[140px]">{item.location}</span>
                          )}
                        </div>

                        <h4 className="text-base font-serif font-bold text-ink leading-snug group-hover:text-primary transition-colors mb-1 line-clamp-1">
                          {item.title}
                        </h4>

                        {item.marathiTitle && (
                          <p className="font-marathi text-xs font-semibold text-primary mb-2 line-clamp-1">
                            {item.marathiTitle}
                          </p>
                        )}

                        <p className="text-xs text-ink/75 leading-relaxed line-clamp-2 font-sans">
                          {item.caption}
                        </p>
                      </div>

                      <div className="pt-3 mt-3 border-t border-gold-100 flex items-center justify-between text-[11px] text-primary font-bold group-hover:text-primary">
                        <span>Read Story & View</span>
                        <Maximize2 className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </MotionSection>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Component with Full Story Context */}
      <Lightbox
        isOpen={selectedImageIdx !== null}
        currentItem={currentItem}
        currentIndex={selectedImageIdx !== null ? selectedImageIdx : undefined}
        totalItems={filteredItems.length}
        onClose={() => setSelectedImageIdx(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}
