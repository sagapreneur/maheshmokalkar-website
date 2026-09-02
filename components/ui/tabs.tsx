"use client";

import React from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";

export interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (tabId: string) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  className = "",
}) => {
  return (
    <div className={clsx("flex flex-wrap items-center justify-center gap-2 p-1.5 bg-sand-200/50 rounded-btn max-w-fit mx-auto border border-sand-200", className)}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={clsx(
              "relative px-5 py-2.5 text-sm md:text-base font-medium rounded-btn transition-colors duration-200 flex items-center gap-2 z-10",
              isActive ? "text-white" : "text-ink hover:text-primary"
            )}
          >
            {isActive && (
              <motion.div
                layoutId="active-tab-pill"
                className="absolute inset-0 bg-primary rounded-btn -z-10 shadow-md"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            {tab.icon && <span>{tab.icon}</span>}
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};
