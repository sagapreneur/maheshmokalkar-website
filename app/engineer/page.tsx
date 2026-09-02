"use client";

import React from "react";
import Image from "next/image";
import { HardHat, Compass, Building, Route, Milestone, ShieldCheck, Quote, BookOpen, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MotionSection } from "@/components/ui/motion-section";

export default function EngineerPage() {
  const projectTypes = [
    {
      title: "Highway & Road Networks",
      description: "Managing state highway connectivity, widening multi-lane corridors, and ensuring road safety across Wardha division.",
      icon: Route,
    },
    {
      title: "Civic & Public Buildings",
      description: "Supervising construction of administrative buildings, healthcare centers, and educational complexes for the Govt. of Maharashtra.",
      icon: Building,
    },
    {
      title: "Bridge Infrastructure",
      description: "Engineered high-load river bridges and overpasses to ensure all-weather transit for rural and urban communities.",
      icon: Milestone,
    },
    {
      title: "Quality Control & Standards",
      description: "Implementing strict material testing, load audits, and technical compliance per Maharashtra PWD manuals.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="pt-28 pb-20">
      {/* Header Banner */}
      <section className="bg-sand-100 py-16 border-b border-sand-300/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Professional Public Service"
            title="As a Govt. Civil Engineer"
            subtitle="Building durable infrastructure for Maharashtra through the Public Works Department (PWD)."
          />
        </div>
      </section>

      {/* Role Overview */}
      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <MotionSection>
                <span className="px-3.5 py-1 text-xs font-semibold uppercase bg-sand-200 text-primary rounded-btn inline-flex items-center gap-1.5 mb-2">
                  <HardHat className="w-4 h-4" /> Grade-II PWD Officer
                </span>
                <h3 className="text-3xl font-serif font-bold text-ink">
                  Public Works Department (PWD), Govt. of Maharashtra
                </h3>
                <p className="text-lg text-ink/80 leading-relaxed">
                  As Assistant Engineer Grade-II in the Maharashtra Public Works Department, Mahesh Mokalkar oversees multi-crore civil engineering projects. His mission centers on delivering robust, high-standard public assets that form the backbone of regional mobility and civic development.
                </p>
                <div className="p-6 bg-sand-100 rounded-card border-l-4 border-primary text-ink italic font-serif text-lg">
                  <Quote className="w-8 h-8 text-primary mb-2 opacity-60" />
                  "Indirectly serving society at large by building high-quality roads, resilient buildings, and durable bridges."
                </div>
              </MotionSection>
            </div>

            <div className="lg:col-span-6 relative h-96 w-full rounded-card overflow-hidden shadow-2xl border-4 border-surface">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1000&q=80"
                alt="Mahesh Mokalkar at PWD Civil Engineering Site"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-ink/80 backdrop-blur-md p-4 rounded-card text-white text-xs">
                <p className="font-bold">On-Site Infrastructure Quality Inspection</p>
                <p className="text-sand-200">Wardha Division · Public Works Department Maharashtra</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* "What I Build" Grid */}
      <section className="py-16 bg-sand-100 border-y border-sand-300/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Engineering Scope"
            title="What I Build & Manage"
            subtitle="Core domains of public infrastructure execution under PWD Maharashtra."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectTypes.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <MotionSection key={idx} delay={idx * 0.1}>
                  <Card variant="flat" className="h-full bg-surface">
                    <div className="w-12 h-12 rounded-full bg-sand-200 flex items-center justify-center text-primary mb-4">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-serif font-bold text-ink mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-ink/75 leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                </MotionSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Published Technical Author Card */}
      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card variant="elevated" className="bg-surface border-t-4 border-t-primary">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-32 bg-gradient-bronze rounded-card p-4 flex flex-col justify-between shadow-lg shrink-0">
                <BookOpen className="w-8 h-8 text-white" />
                <span className="font-serif font-bold text-white text-lg">GENIUS</span>
              </div>
              <div className="flex-1 text-center md:text-left">
                <span className="text-xs font-semibold uppercase bg-sand-200 text-primary px-3 py-1 rounded-btn">
                  Departmental Handbook
                </span>
                <h3 className="text-2xl font-serif font-bold text-ink mt-2 mb-2">
                  Author of "GENIUS" Handbook
                </h3>
                <p className="text-sm text-ink/80 leading-relaxed mb-4">
                  Written specifically for departmental civil engineers in Maharashtra, this handbook distills complex PWD codes, estimate formulas, and quality control specifications into an indispensable desk reference.
                </p>
                <Button href="/downloads" variant="primary" size="sm">
                  Explore Book Details & Download Press Kit <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
