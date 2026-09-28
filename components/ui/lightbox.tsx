"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Tag } from "lucide-react";
import { GalleryItem } from "@/lib/content/profile";

export interface LightboxProps {
  isOpen?: boolean;
  currentItem?: GalleryItem | null;
  currentIndex?: number;
  totalItems?: number;
  images?: GalleryItem[];
  selectedIndex?: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  currentItem,
  currentIndex,
  totalItems,
  images,
  selectedIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  // Resolve item and open state from either API
  const isImagesMode = images !== undefined && selectedIndex !== undefined;
  const effectiveOpen = isImagesMode ? selectedIndex !== null && selectedIndex >= 0 : Boolean(isOpen);
  const effectiveItem = isImagesMode
    ? (selectedIndex !== null && selectedIndex >= 0 && selectedIndex < images.length ? images[selectedIndex] : null)
    : (currentItem || null);
  const effectiveIndex = isImagesMode ? (selectedIndex ?? undefined) : currentIndex;
  const effectiveTotal = isImagesMode ? images.length : totalItems;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!effectiveOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [effectiveOpen, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {effectiveOpen && effectiveItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 backdrop-blur-md p-4 md:p-8"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-primary rounded-full transition-colors z-50 shadow-lg"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-white/15 hover:bg-primary rounded-full transition-colors z-50 shadow-lg"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-white/15 hover:bg-primary rounded-full transition-colors z-50 shadow-lg"
            aria-label="Next Image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Main Content Modal */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative max-w-5xl max-h-[90vh] w-full bg-surface rounded-card overflow-hidden border border-gold-300 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Container */}
            <div className="relative w-full h-[50vh] md:h-[62vh] bg-ink flex items-center justify-center">
              <Image
                src={effectiveItem.image || (effectiveItem as any).src}
                alt={effectiveItem.title}
                fill
                className="object-contain"
                priority
              />
              {effectiveIndex !== undefined && effectiveTotal !== undefined && (
                <div className="absolute top-4 left-4 bg-ink/80 text-sand-200 text-xs px-3 py-1 rounded-btn backdrop-blur-md border border-white/10">
                  {effectiveIndex + 1} of {effectiveTotal}
                </div>
              )}
            </div>

            {/* Caption & Metadata Container */}
            <div className="p-6 md:p-8 bg-surface text-ink flex-1 overflow-y-auto">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="px-3 py-1 text-xs font-bold uppercase bg-gold-100 text-primary rounded-btn border border-gold-300/40">
                  {effectiveItem.category}
                </span>

                {effectiveItem.year && (
                  <span className="text-xs text-ink/70 font-semibold flex items-center gap-1 bg-sand-100 px-2.5 py-1 rounded-btn">
                    <Calendar className="w-3.5 h-3.5 text-primary" /> {effectiveItem.year}
                  </span>
                )}

                {effectiveItem.location && (
                  <span className="text-xs text-ink/70 font-semibold flex items-center gap-1 bg-sand-100 px-2.5 py-1 rounded-btn">
                    <MapPin className="w-3.5 h-3.5 text-tertiary" /> {effectiveItem.location}
                  </span>
                )}
              </div>

              <h3 className="text-xl md:text-2xl font-serif font-extrabold text-ink mb-1">
                {effectiveItem.title}
              </h3>

              {effectiveItem.marathiTitle && (
                <p className="font-marathi text-base font-bold text-primary mb-3">
                  {effectiveItem.marathiTitle}
                </p>
              )}

              <p className="text-sm md:text-base text-ink/85 leading-relaxed font-sans">
                {effectiveItem.caption}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
