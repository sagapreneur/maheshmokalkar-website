"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Maximize2, Filter } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tabs } from "@/components/ui/tabs";
import { Lightbox } from "@/components/ui/lightbox";
import { MotionSection } from "@/components/ui/motion-section";
import { galleryData, GalleryItem } from "@/lib/content/profile";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedImageIdx, setSelectedImageIdx] = useState<number | null>(null);

  const filteredItems = activeCategory === "All"
    ? galleryData
    : galleryData.filter((item) => item.category === activeCategory);

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
    <div className="pt-28 pb-20">
      {/* Header Banner */}
      <section className="bg-sand-100 py-16 border-b border-sand-300/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Visual Archives"
            title="Moments & Photo Gallery"
            subtitle="A curated photographic archive of engineering works, Rotary handovers, awards, and community gatherings."
          />

          <Tabs
            tabs={[
              { id: "All", label: "All Moments" },
              { id: "Engineer", label: "Engineering" },
              { id: "Rotary", label: "Rotary" },
              { id: "Community", label: "Community" },
              { id: "Family", label: "Family" },
            ]}
            activeTab={activeCategory}
            onChange={setActiveCategory}
            className="mt-6"
          />
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item, idx) => (
              <MotionSection key={item.id} delay={idx * 0.05}>
                <div
                  onClick={() => setSelectedImageIdx(idx)}
                  className="relative group rounded-card overflow-hidden cursor-pointer bg-sand-100 border border-sand-200 shadow-sm hover:shadow-card-hover transition-all duration-300 aspect-[4/3]"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient Overlay & Hover Caption */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-tertiary mb-1">
                      {item.category} {item.date ? `· ${item.date}` : ""}
                    </span>
                    <h4 className="text-sm font-serif font-bold leading-snug mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-sand-200/80 line-clamp-2">
                      {item.caption}
                    </p>
                    <div className="absolute top-3 right-3 p-1.5 bg-white/20 rounded-full backdrop-blur-sm text-white">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Component */}
      <Lightbox
        isOpen={selectedImageIdx !== null}
        currentItem={currentItem}
        onClose={() => setSelectedImageIdx(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}
