"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { clsx } from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-btn transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden group tracking-wide";

  const variants = {
    primary: "bg-primary text-white hover:bg-bronze-600 shadow-lg shadow-bronze-500/25 hover:shadow-bronze-500/40 border border-bronze-400/30",
    gold: "bg-gradient-gold text-ink font-semibold hover:shadow-glow shadow-md border border-gold-300/40",
    secondary: "bg-gold-100 text-ink hover:bg-gold-200 shadow-sm border border-gold-300/30",
    outline: "border-2 border-primary/80 text-primary hover:bg-primary hover:text-white shadow-sm",
    ghost: "text-ink hover:bg-gold-100/60",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-xs font-semibold",
    md: "px-7 py-3.5 text-sm font-semibold",
    lg: "px-9 py-4 text-base font-bold",
  };

  const combinedClass = clsx(baseStyles, variants[variant], sizes[size], className);

  const innerContent = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {/* Light Shimmer Sweep Effect on Hover */}
      <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none" />
    </>
  );

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="inline-block"
      >
        <Link href={href} className={combinedClass}>
          {innerContent}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="inline-block"
    >
      <button type={type} onClick={onClick} disabled={disabled} className={combinedClass}>
        {innerContent}
      </button>
    </motion.div>
  );
};
