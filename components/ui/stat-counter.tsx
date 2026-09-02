"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import * as Icons from "lucide-react";

interface StatCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description: string;
  icon: string;
}

export const StatCounter: React.FC<StatCounterProps> = ({
  value,
  prefix = "",
  suffix = "",
  label,
  description,
  icon,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState(0);

  const count = useMotionValue(0);
  const rounded = useSpring(count, { damping: 25, stiffness: 90 });

  useEffect(() => {
    if (isInView) {
      count.set(value);
    }
  }, [isInView, value, count]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
  }, [rounded]);

  const IconComponent = (Icons as unknown as Record<string, React.ElementType>)[icon] || Icons.Award;

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center text-center p-6 md:p-7 rounded-md bg-surface border-t-4 border-t-primary border-x border-b border-primary/20 shadow-sm hover:shadow-md hover:border-primary transition-all duration-300 group overflow-hidden"
    >
      <div className="w-12 h-12 rounded-md bg-primary/10 text-primary border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
        <IconComponent className="w-6 h-6" />
      </div>

      <div className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-primary mb-2 tracking-tight">
        {prefix}
        {displayValue}
        {suffix}
      </div>

      <h4 className="text-base md:text-lg font-serif font-bold text-ink mb-1.5">{label}</h4>
      <p className="text-xs md:text-sm text-ink/75 max-w-[220px] leading-relaxed font-sans">{description}</p>
    </div>
  );
};
