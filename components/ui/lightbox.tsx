"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "@/lib/content/profile";

interface LightboxProps {
  isOpen: boolean;
  currentItem: GalleryItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  currentItem,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {isOpen && currentItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 backdrop-blur-md p-4 md:p-8"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
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
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
            aria-label="Next Image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Main Content Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative max-w-5xl max-h-[85vh] w-full bg-ink/80 rounded-card overflow-hidden border border-sand-300/20 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[55vh] md:h-[65vh] bg-black">
              <Image
                src={currentItem.image}
                alt={currentItem.title}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="p-6 bg-surface text-ink flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 text-xs font-semibold uppercase bg-sand-200 text-primary rounded-btn">
                  {currentItem.category}
                </span>
                {currentItem.date && (
                  <span className="text-xs text-ink/60 font-medium">
                    {currentItem.date}
                  </span>
                )}
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-ink mb-2">
                {currentItem.title}
              </h3>
              <p className="text-sm md:text-base text-ink/80">
                {currentItem.caption}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
