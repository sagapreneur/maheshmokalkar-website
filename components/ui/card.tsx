"use client";

import React from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";

interface CardProps {
  children: React.ReactNode;
  variant?: "flat" | "elevated" | "glass" | "dark" | "gold-border";
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = "flat",
  className = "",
  hoverEffect = true,
}) => {
  const variants = {
    flat: "bg-surface border border-gold-200/60 text-ink shadow-card",
    elevated: "bg-surface shadow-card hover:shadow-card-hover border-t-4 border-t-primary text-ink border-x border-b border-gold-200/40",
    glass: "glass-card-premium text-ink",
    dark: "glass-card-dark text-white shadow-2xl",
    "gold-border": "bg-surface text-ink border border-tertiary/40 shadow-card hover:border-tertiary hover:shadow-glow transition-all",
  };

  const baseStyles = "rounded-card p-6 md:p-8 transition-all duration-300 relative overflow-hidden";

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -6 } : {}}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className={clsx(baseStyles, variants[variant], className)}
    >
      {children}
    </motion.div>
  );
};
