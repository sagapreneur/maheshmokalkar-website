"use client";

import React from "react";
import Image from "next/image";
import {
  HardHat,
  Compass,
  Building,
  Route,
  Milestone,
  ShieldCheck,
  Quote,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  MapPin,
  Landmark,
  Layers
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MotionSection } from "@/components/ui/motion-section";

export default function EngineerPage() {
  const landmarkProjects = [
    {
      title: "Major Road Over Bridge (ROB), Hinganghat",
      type: "Bridge & Highway Infrastructure",
      location: "Hinganghat, Maharashtra",
      description: "A marquee elevated railway-crossing project engineered to relieve critical traffic bottlenecks, enabling uninterrupted industrial transit and commuter safety across Central Railway tracks.",
      icon: Milestone,
    },
    {
      title: "Major Road Over Bridge (ROB), Wardha",
      type: "Urban Transit Overpass",
      location: "Wardha, Maharashtra",
      description: "Strategic flyover infrastructure designed to decouple urban transit from rail crossings, significantly reducing transit delays and air pollution in the historic city center.",
      icon: Route,
    },
    {
      title: "District Collectorate Complex, Wardha",
      type: "Administrative Civic Architecture",
      location: "Wardha, Maharashtra",
      description: "The premier administrative seat of the district, featuring modern public grievance galleries, disaster management facilities, executive chambers, and durable structural design.",
      icon: Landmark,
    },
    {
      title: "Court Building Complex, Ashti",
      type: "Judicial Infrastructure",
      location: "Ashti, Maharashtra",
      description: "A purpose-built modern judicial facility comprising high-security courtrooms, bar rooms, legal archive vaults, and barrier-free access for citizens.",
      icon: Building,
    },
  ];

  const projectTypes = [
    {
      title: "Major Road Over Bridges (ROBs)",
      description: "Engineering high-load grade separators and railway overpasses to eliminate hazardous level crossings and accelerate regional commerce.",
      icon: Milestone,
    },
    {
      title: "Civic & Administrative Buildings",
      description: "Executing district headquarters, judicial complexes, and public service wings with state-of-the-art durability and architectural dignity.",
      icon: Building,
    },
    {
      title: "State Corridors & Rural Connectivity",
      description: "Supervising asphalt and concrete highway corridors and all-weather rural arteries ensuring seamless transit across Vidarbha.",
      icon: Route,
    },
    {
      title: "Rigorous Quality Assurance & Codes",
      description: "Executing strict material batch testing, core compressive strength audits, and strict compliance with Maharashtra PWD standards.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="pt-32 pb-20">
      {/* Header Banner */}
      <section className="bg-mesh-pattern py-16 border-b border-gold-300/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Three Decades of Public Works"
            title="Civil Engineering & Public Infrastructure"
            subtitle="Building durable bridges, civic complexes, and arterial roads across Maharashtra with technical excellence and integrity."
          />
        </div>
      </section>

      {/* Role Overview & Authentic Desk Photo */}
      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <MotionSection>
                <span className="px-3.5 py-1 text-xs font-bold uppercase bg-gold-100 text-primary rounded-btn inline-flex items-center gap-1.5 mb-2 border border-gold-300/50">
                  <HardHat className="w-4 h-4" /> Public Works Department · Govt. of Maharashtra
                </span>
                <h3 className="text-3xl md:text-4xl font-serif font-extrabold text-ink">
                  Deputy Engineer / Assistant Engineer Gr-II
                </h3>
                <p className="text-base md:text-lg text-ink/80 leading-relaxed font-sans">
                  With nearly <strong>30 years of civil engineering service</strong> in the Public Works Department (PWD), Government of Maharashtra, Mahesh Mokalkar has overseen and delivered multi-crore public capital projects. His work forms the physical foundation upon which regional economic vitality and community mobility depend.
                </p>
                
                <div className="p-6 bg-surface-alt rounded-card border-l-4 border-primary text-ink italic font-serif text-lg shadow-sm">
                  <Quote className="w-8 h-8 text-primary mb-2 opacity-60" />
                  "Indirectly serving society at large by building high-quality roads, resilient civic buildings, and durable bridges that outlive generations."
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-sand-100 rounded-card border border-sand-300">
                    <p className="font-serif font-bold text-2xl text-primary">30+ Years</p>
                    <p className="text-xs text-ink/70">Engineering stewardship in PWD Maharashtra</p>
                  </div>
                  <div className="p-4 bg-sand-100 rounded-card border border-sand-300">
                    <p className="font-serif font-bold text-2xl text-tertiary">Multi-Crore</p>
                    <p className="text-xs text-ink/70">Landmark public works delivered on schedule</p>
                  </div>
                </div>
              </MotionSection>
            </div>

            <div className="lg:col-span-6">
              <MotionSection delay={0.1}>
                <div className="relative aspect-[4/3] w-full rounded-card overflow-hidden shadow-2xl border-4 border-gold-200">
                  <Image
                    src="/photos/mahesh-photo-30.jpg"
                    alt="Er. Mahesh Mokalkar at Executive PWD Desk with Blueprints"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-serif font-bold text-lg text-gold-300">Er. Mahesh M. Mokalkar</p>
                    <p className="text-xs text-sand-200">Sub-Divisional Engineer / Assistant Engineer Gr-II · PWD Maharashtra</p>
                    <p className="text-[11px] text-tertiary mt-1 font-mono">Official PWD Chamber · Blueprints & Project Files</p>
                  </div>
                </div>
              </MotionSection>
            </div>

          </div>
        </div>
      </section>

      {/* Landmark Projects Showcase */}
      <section className="py-20 bg-mesh-pattern border-y border-gold-300/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Key Achievements"
            title="Landmark Public Works in Maharashtra"
            subtitle="Signature infrastructure executed under his technical leadership, verified by official departmental records."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {landmarkProjects.map((proj, idx) => {
              const IconComp = proj.icon;
              return (
                <MotionSection key={idx} delay={idx * 0.1}>
                  <Card variant="gold-border" className="h-full bg-surface p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center text-primary shrink-0 border border-gold-300">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-tertiary">
                          {proj.type}
                        </span>
                        <h4 className="text-xl md:text-2xl font-serif font-bold text-ink">
                          {proj.title}
                        </h4>
                        <p className="text-xs font-semibold text-primary flex items-center gap-1 mt-1">
                          <MapPin className="w-3.5 h-3.5" /> {proj.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-ink/75 leading-relaxed font-sans">
                      {proj.description}
                    </p>
                  </Card>
                </MotionSection>
              );
            })}
          </div>

          {/* Site Inspection & Administrative Delegation Photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-[16/10] rounded-card overflow-hidden shadow-xl border-2 border-gold-200">
              <Image
                src="/photos/mahesh-photo-32.jpg"
                alt="Mahesh Mokalkar on Collectorate / Government Administrative Steps"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                <p className="font-serif font-bold text-sm text-gold-300">Administrative Governance & Security Coordination</p>
                <p className="text-sand-200">With administrative colleagues and state police guard at the District Complex</p>
              </div>
            </div>

            <div className="relative aspect-[16/10] rounded-card overflow-hidden shadow-xl border-2 border-gold-200">
              <Image
                src="/photos/mahesh-photo-49.jpg"
                alt="Er. Mahesh Mokalkar leading Engineering Site Delegation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                <p className="font-serif font-bold text-sm text-gold-300">Engineering Site Inspection & Technical Delegation</p>
                <p className="text-sand-200">On-field technical review with fellow PWD engineers and project supervisors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Domains Grid */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core Competencies"
            title="Domains of Engineering Expertise"
            subtitle="Core operational disciplines executed across Maharashtra's public works ecosystem."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectTypes.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <MotionSection key={idx} delay={idx * 0.1}>
                  <Card variant="flat" className="h-full bg-sand-100/60 border border-sand-300">
                    <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center text-primary mb-4 border border-gold-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-serif font-bold text-ink mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-ink/75 leading-relaxed font-sans">
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
      <section className="py-16 bg-gradient-dark text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white/5 p-8 rounded-card border border-tertiary/30">
            <div className="md:col-span-3 flex justify-center">
              <div className="w-32 h-44 bg-gradient-bronze rounded-card p-4 flex flex-col justify-between shadow-2xl border border-tertiary/40">
                <BookOpen className="w-8 h-8 text-white" />
                <div>
                  <p className="font-serif font-bold text-xl text-white">GENIUS</p>
                  <p className="text-[10px] text-sand-200">Technical Handbook</p>
                  <p className="text-[9px] text-gold-300 mt-1">Released by CM Maharashtra</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-9 flex flex-col items-start">
              <span className="px-3 py-1 text-xs font-semibold uppercase bg-tertiary text-ink rounded-btn mb-2">
                Departmental Standard Reference
              </span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
                Author of "GENIUS" Engineering Handbook
              </h3>
              <p className="text-sm md:text-base text-sand-200/90 mb-6 font-sans">
                Formally unveiled and released by the <strong>Hon'ble Chief Minister of Maharashtra</strong>, this technical handbook distills complex PWD codes, measurement formulas, CSR schedule of rates, and quality compliance manuals into an indispensable practical desk reference for engineers across Maharashtra.
              </p>
              <Button href="/downloads" variant="secondary">
                View Publication & Press Kit <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
