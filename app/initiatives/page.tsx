"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Calendar, Tag, ArrowRight, X, Heart, Home, GraduationCap, Users, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MotionSection } from "@/components/ui/motion-section";
import { initiativesData, Initiative } from "@/lib/content/profile";

export default function InitiativesPage() {
  const [selectedInitiative, setSelectedInitiative] = useState<Initiative | null>(null);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Rotary":
        return Heart;
      case "Housing":
        return Home;
      case "Education":
        return GraduationCap;
      default:
        return Users;
    }
  };

  return (
    <div className="pt-28 pb-20">
      {/* Header Banner */}
      <section className="bg-mesh-pattern py-16 border-b border-gold-300/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Community Service Portfolio"
            title="Flagship Humanitarian Initiatives"
            subtitle="Transformative social welfare projects spanning healthcare, housing credit, night schools, and child empowerment."
          />
        </div>
      </section>

      {/* Grid of Initiatives */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiativesData.map((item, idx) => {
              const IconComp = getCategoryIcon(item.category);
              return (
                <MotionSection key={item.id} delay={idx * 0.08}>
                  <Card variant="gold-border" className="h-full flex flex-col justify-between group">
                    <div>
                      {/* Image Header */}
                      <div className="relative w-full h-56 rounded-card overflow-hidden mb-6 border border-gold-200">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-btn flex items-center gap-1.5 shadow-md border border-bronze-400/30">
                          <IconComp className="w-3.5 h-3.5 text-gold-300" />
                          <span>{item.category}</span>
                        </div>
                        <div className="absolute bottom-4 right-4 bg-ink/90 text-tertiary text-xs font-bold px-3 py-1 rounded-btn backdrop-blur-md border border-tertiary/30">
                          {item.impactNumber}
                        </div>
                      </div>

                      <h3 className="text-2xl font-serif font-extrabold text-ink mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs font-bold text-primary mb-3">
                        {item.subtitle}
                      </p>
                      <p className="text-sm text-ink/75 leading-relaxed line-clamp-3 mb-4 font-sans">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gold-200">
                      <Button
                        onClick={() => setSelectedInitiative(item)}
                        variant="secondary"
                        size="sm"
                        className="w-full justify-between"
                      >
                        <span>View Initiative Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </Card>
                </MotionSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expanded Initiative Modal */}
      <AnimatePresence>
        {selectedInitiative && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 backdrop-blur-md p-4"
            onClick={() => setSelectedInitiative(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-surface max-w-2xl w-full rounded-card overflow-hidden border border-gold-300 shadow-2xl p-6 md:p-8 relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedInitiative(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-gold-100 text-ink hover:bg-primary hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full h-60 rounded-card overflow-hidden mb-6 border border-gold-200">
                <Image
                  src={selectedInitiative.image}
                  alt={selectedInitiative.title}
                  fill
                  className="object-cover"
                />
              </div>

              <span className="px-3.5 py-1 text-xs font-bold uppercase bg-gold-100 text-primary rounded-btn inline-block mb-3 border border-gold-300/50">
                {selectedInitiative.category} · {selectedInitiative.year}
              </span>

              <h3 className="text-2xl md:text-3xl font-serif font-extrabold text-ink mb-2">
                {selectedInitiative.title}
              </h3>

              <p className="text-sm font-bold text-tertiary mb-4">
                Impact Metric: {selectedInitiative.impactNumber}
              </p>

              <p className="text-base text-ink/85 leading-relaxed mb-6 font-sans">
                {selectedInitiative.description}
              </p>

              <div className="bg-surface-alt p-5 rounded-card border border-gold-200 mb-6">
                <h4 className="font-serif font-bold text-ink mb-3 text-base">Key Deliverables & Outcomes</h4>
                <div className="space-y-2.5">
                  {selectedInitiative.keyPoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-ink/85 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button onClick={() => setSelectedInitiative(null)} variant="primary" className="w-full">
                Close Detail View
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
