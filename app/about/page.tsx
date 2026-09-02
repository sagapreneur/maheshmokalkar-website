"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  User,
  Heart,
  BookOpen,
  Award,
  CheckCircle2,
  Compass,
  Lightbulb,
  ShieldCheck,
  Users,
  Download,
  ArrowRight
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MotionSection } from "@/components/ui/motion-section";
import { profileData, timelineData } from "@/lib/content/profile";

export default function AboutPage() {
  const values = [
    {
      title: "Integrity in Execution",
      description: "Executing multi-crore public works with strict quality assurance, transparent governance, and adherence to public engineering standards.",
      icon: ShieldCheck,
    },
    {
      title: "Servant Leadership",
      description: "Believing that true leadership lies in serving the unserved — from funding pediatric surgeries to building night schools for working children.",
      icon: Heart,
    },
    {
      title: "Self-Sufficiency for All",
      description: "Empowering micro-earners and homeless families through collateral-free credit co-operatives and vocational self-employment loans.",
      icon: Compass,
    },
    {
      title: "Continuous Wisdom & Rigor",
      description: "'Wisdom is not a product of schooling but of the lifelong attempt to acquire it.' Continuous learning drives technical and social innovation.",
      icon: Lightbulb,
    },
  ];

  return (
    <div className="pt-28 pb-20">
      {/* Header Banner */}
      <section className="bg-sand-100 py-16 border-b border-sand-300/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Biography & Core Principles"
            title="About Mahesh Mokalkar"
            subtitle="Civil Engineer, Rotarian Leader, Author, and Community Champion based in Wardha, Maharashtra."
          />
        </div>
      </section>

      {/* Main Narrative & Bio */}
      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Portrait & Highlights */}
            <div className="lg:col-span-5 space-y-6">
              <MotionSection>
                <div className="relative w-full aspect-[4/5] rounded-card overflow-hidden shadow-xl border-4 border-surface">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=80"
                    alt="Mahesh Mokalkar Bio Portrait"
                    fill
                    className="object-cover"
                  />
                </div>
              </MotionSection>

              {/* Personal Factsheet Card */}
              <Card variant="flat" className="bg-sand-100/70 border-sand-300">
                <h4 className="font-serif font-bold text-lg text-ink mb-4 pb-2 border-b border-sand-300">
                  Quick Factsheet
                </h4>
                <ul className="space-y-3 text-sm text-ink/80">
                  <li className="flex justify-between border-b border-sand-200 pb-1.5">
                    <span className="font-semibold text-ink/60">Base Location:</span>
                    <span className="font-bold text-primary">Wardha, Maharashtra</span>
                  </li>
                  <li className="flex justify-between border-b border-sand-200 pb-1.5">
                    <span className="font-semibold text-ink/60">PWD Position:</span>
                    <span>Assistant Engineer Gr-II</span>
                  </li>
                  <li className="flex justify-between border-b border-sand-200 pb-1.5">
                    <span className="font-semibold text-ink/60">Rotary Status:</span>
                    <span>Past District Governor (RID 3030)</span>
                  </li>
                  <li className="flex justify-between border-b border-sand-200 pb-1.5">
                    <span className="font-semibold text-ink/60">Rotarian Since:</span>
                    <span>1997 (27+ Years)</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-semibold text-ink/60">Key Book:</span>
                    <span className="italic font-medium">GENIUS Technical Handbook</span>
                  </li>
                </ul>
              </Card>
            </div>

            {/* Right Column: Detailed Narrative */}
            <div className="lg:col-span-7 space-y-6 text-base md:text-lg text-ink/85 leading-relaxed font-sans">
              <MotionSection>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-ink mb-4">
                  Engineering Infrastructure & Serving Society
                </h3>
                <p>
                  Mahesh Mokalkar embodies a rare synthesis of professional civil engineering rigor and expansive social philanthropy. Serving as Assistant Engineer (Grade-II) in the Public Works Department (PWD), Government of Maharashtra, he has managed multi-crore public works — designing and supervising vital road networks, civic buildings, and bridge structures across the region.
                </p>
                <p className="mt-4">
                  Parallel to his engineering career, Mahesh has devoted over 27 years to Rotary International. As Past District Governor of Rotary International District 3030 (2016-17), he led landmark humanitarian initiatives across Central India, including chartering Rotary Clubs in Hinganghat, Arvi, and Wani, and mobilizing ~₹1 crore to fund 105 pediatric heart surgeries in a single Rotary year.
                </p>
              </MotionSection>

              <MotionSection delay={0.1}>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-ink mb-4 mt-8">
                  Community Innovation: Housing & Night Schools
                </h3>
                <p>
                  Deeply concerned by the plight of homeless families without collateral, Mahesh founded the <strong>"Shelter for the Shelterless" Credit Co-operative Housing Society</strong> in Wardha, serving 3 consecutive terms as Founder-President and empowering over 550 members to acquire permanent housing.
                </p>
                <p className="mt-4">
                  His signature educational initiative — a <strong>Night School for rag-pickers' children</strong> — provides flexible evening education and free meals to working children, earning formal recognition and funding support from the Government of Maharashtra.
                </p>
              </MotionSection>

              {/* Tagline Card */}
              <div className="p-6 bg-sand-200/60 rounded-card border-l-4 border-primary text-ink italic font-serif text-lg my-6">
                "{profileData.tagline}"
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-sand-100 border-y border-sand-300/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Ethos"
            title="Guiding Values & Philosophy"
            subtitle="The core principles that drive every engineering project and community initiative."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const IconComp = v.icon;
              return (
                <MotionSection key={i} delay={i * 0.1}>
                  <Card variant="flat" className="h-full bg-surface">
                    <div className="w-12 h-12 rounded-full bg-sand-200 flex items-center justify-center text-primary mb-4">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-serif font-bold text-ink mb-2">
                      {v.title}
                    </h4>
                    <p className="text-sm text-ink/75 leading-relaxed">
                      {v.description}
                    </p>
                  </Card>
                </MotionSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Family Section */}
      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Family & Partnership"
            title="Anchored by Family Values"
            subtitle="Partnership in service with Aarti Mokalkar and pride in children Purvesh & Disha."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Wife Card */}
            <MotionSection>
              <Card variant="elevated" className="text-center">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-primary">
                  <Image
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
                    alt={profileData.family.wife}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-xl font-serif font-bold text-ink mb-1">
                  {profileData.family.wife}
                </h4>
                <p className="text-xs text-primary font-semibold mb-3">
                  {profileData.family.wifeRole}
                </p>
                <p className="text-xs text-ink/70">
                  Rotary Major Donor & community leader driving women empowerment and Inner Wheel humanitarian projects in Wardha.
                </p>
              </Card>
            </MotionSection>

            {/* Children Card 1 */}
            <MotionSection delay={0.1}>
              <Card variant="elevated" className="text-center">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-tertiary">
                  <Image
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80"
                    alt={profileData.family.children[0]}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-xl font-serif font-bold text-ink mb-1">
                  {profileData.family.children[0]}
                </h4>
                <p className="text-xs text-tertiary font-semibold mb-3">Son</p>
                <p className="text-xs text-ink/70">
                  Following the family tradition of academic excellence and commitment to social responsibility.
                </p>
              </Card>
            </MotionSection>

            {/* Children Card 2 */}
            <MotionSection delay={0.2}>
              <Card variant="elevated" className="text-center">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-tertiary">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
                    alt={profileData.family.children[1]}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-xl font-serif font-bold text-ink mb-1">
                  {profileData.family.children[1]}
                </h4>
                <p className="text-xs text-tertiary font-semibold mb-3">Daughter</p>
                <p className="text-xs text-ink/70">
                  Dedicated to modern education, creative arts, and youth leadership initiatives.
                </p>
              </Card>
            </MotionSection>
          </div>
        </div>
      </section>

      {/* GENIUS Handbook Callout */}
      <section className="py-16 bg-gradient-dark text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white/5 p-8 rounded-card border border-tertiary/30">
            <div className="md:col-span-3 flex justify-center">
              <div className="w-28 h-36 bg-gradient-bronze rounded-card p-4 flex flex-col justify-between shadow-2xl border border-tertiary/40">
                <BookOpen className="w-8 h-8 text-white" />
                <div>
                  <p className="font-serif font-bold text-lg leading-tight text-white">GENIUS</p>
                  <p className="text-[10px] text-sand-200">Technical Handbook</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-9 flex flex-col items-start">
              <span className="px-3 py-1 text-xs font-semibold uppercase bg-tertiary text-ink rounded-btn mb-2">
                Published Engineering Work
              </span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
                {profileData.publication.title} — {profileData.publication.subtitle}
              </h3>
              <p className="text-sm md:text-base text-sand-200/90 mb-6">
                {profileData.publication.description}
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
