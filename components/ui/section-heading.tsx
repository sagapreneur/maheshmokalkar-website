"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
  dark = false,
}) => {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div className={`flex flex-col ${alignmentClasses[align]} mb-12 md:mb-16 ${className}`}>
      {eyebrow && (
        <span className={`inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-btn mb-4 border shadow-sm ${
          dark 
            ? "bg-white/10 text-tertiary border-tertiary/30" 
            : "bg-gold-100 text-primary border-gold-300/50"
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          {eyebrow}
        </span>
      )}
      
      <div className="relative inline-block max-w-4xl">
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold leading-tight tracking-tight ${
          dark ? "text-white" : "text-ink"
        }`}>
          {title}
        </h2>

        {/* Animated Gold SVG Underline */}
        <motion.svg
          className="w-full h-3.5 mt-2 text-tertiary overflow-visible"
          viewBox="0 0 240 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M2 10C60 3 180 3 238 10"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeInOut", delay: 0.2 }}
          />
        </motion.svg>
      </div>

      {subtitle && (
        <p className={`mt-4 text-base md:text-lg max-w-2xl font-sans leading-relaxed ${
          dark ? "text-gold-100/80" : "text-ink/75"
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
