"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import {
  HardHat,
  Award,
  HeartHandshake,
  ArrowRight,
  Download,
  Quote,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Calendar,
  Building2,
  BookOpen,
  Sparkles,
  Heart,
  ShieldCheck,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatCounter } from "@/components/ui/stat-counter";
import { Tabs } from "@/components/ui/tabs";
import { MotionSection } from "@/components/ui/motion-section";
import {
  profileData,
  statsData,
  pillarsData,
  timelineData,
  testimonialsData,
  initiativesData
} from "@/lib/content/profile";

export default function HomePage() {
  const [activePillarId, setActivePillarId] = useState<"engineer" | "rotary" | "family">("engineer");
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const activePillar = pillarsData.find((p) => p.id === activePillarId) || pillarsData[0];

  const handleNextTestimonial = () => {
    setTestimonialIdx((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrevTestimonial = () => {
    setTestimonialIdx((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <div className="pt-20 md:pt-24 pb-20 overflow-x-hidden bg-surface-alt">
      
      {/* ==========================================
          1. HERO SECTION — FULL-WIDTH BACKGROUND IMAGE & FADED OVERLAY
         ========================================== */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28 bg-[#FAF6F0] border-b border-bronze-200 min-h-[600px] lg:min-h-[680px] flex items-center">
        
        {/* Full-width Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/hero-bg.png"
            alt="Mahesh Mokalkar Hero Background"
            fill
            className="object-cover object-left lg:object-center filter brightness-[0.98] contrast-[1.02]"
            priority
          />
          {/* Subtle mobile overlay for extra legibility when text stacks vertically */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6F0] via-[#FAF6F0]/85 to-transparent lg:hidden" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Spacer on Left for Mahesh's Portrait in the Background */}
            <div className="hidden lg:block lg:col-span-5 xl:col-span-6" />

            {/* Right Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 xl:col-span-6 flex flex-col items-start pt-28 lg:pt-0"
            >
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-md bg-bronze-100/90 text-primary border-l-4 border-primary font-bold text-xs uppercase tracking-widest mb-5 shadow-sm backdrop-blur-sm">
                <span>Wardha, Maharashtra</span>
                <span className="text-primary/50">•</span>
                <span>Public Leader & Civil Engineer</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-extrabold text-ink leading-[1.08] tracking-tight mb-5">
                I'm <span className="text-primary font-serif">{profileData.name}</span>
              </h1>

              {/* Role Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-primary text-white text-xs md:text-sm font-semibold border border-bronze-700 shadow-sm">
                  <HardHat className="w-4 h-4 text-gold-300" />
                  <span>{profileData.title}</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-surface text-ink text-xs md:text-sm font-bold border border-bronze-300 shadow-sm">
                  <Award className="w-4 h-4 text-primary" />
                  <span>{profileData.secondaryTitle}</span>
                </div>
              </div>

              {/* Editorial Quote Box */}
              <div className="p-6 rounded-md bg-surface/90 backdrop-blur-md border-l-4 border-primary shadow-md mb-8 max-w-2xl border border-bronze-200">
                <p className="text-base md:text-lg text-ink font-serif italic leading-relaxed">
                  "{profileData.tagline}"
                </p>
              </div>

              {/* Floating Stat Pill Badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-surface/95 backdrop-blur-sm px-4 py-2.5 rounded-md shadow-sm flex items-center gap-3 border border-primary/30">
                  <div className="w-8 h-8 rounded-md bg-primary text-white flex items-center justify-center font-bold">
                    <Heart className="w-4 h-4 fill-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-ink/60 font-bold uppercase tracking-wider">Flagship Impact</p>
                    <p className="text-xs font-serif font-bold text-primary">105 Surgeries (~₹1 Cr)</p>
                  </div>
                </div>

                <div className="bg-surface/95 backdrop-blur-sm px-4 py-2.5 rounded-md shadow-sm flex items-center gap-2.5 border border-primary/30">
                  <Award className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-[10px] text-ink/60 font-bold uppercase tracking-wider">Experience</p>
                    <p className="text-xs font-serif font-bold text-ink">27+ Years Public Service</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Button href="#pillars" variant="primary" size="lg">
                  <span>Explore Story & Work</span>
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
                <Button href="/downloads" variant="outline" size="lg">
                  <Download className="w-5 h-5 mr-1" />
                  <span>Download CV / Handbook</span>
                </Button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ==========================================
          2. THREE PILLARS SHOWCASE SECTION
         ========================================== */}
      <section id="pillars" className="py-20 bg-surface relative border-b border-bronze-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core Pillars"
            title="Three Dimensions of Leadership"
            subtitle="Bridging public engineering infrastructure, global philanthropy, and deep community values."
          />

          <Tabs
            tabs={[
              { id: "engineer", label: "As a Govt. Engineer", icon: <HardHat className="w-4 h-4" /> },
              { id: "rotary", label: "As a Rotarian", icon: <Award className="w-4 h-4" /> },
              { id: "family", label: "As a Person & Family", icon: <HeartHandshake className="w-4 h-4" /> },
            ]}
            activeTab={activePillarId}
            onChange={(tabId) => setActivePillarId(tabId as any)}
            className="mb-12"
          />

          <MotionSection key={activePillarId}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-surface-alt rounded-md p-8 md:p-10 border border-bronze-300 shadow-sm">
              <div className="lg:col-span-7 flex flex-col items-start">
                <span className="text-xs font-bold uppercase tracking-widest text-primary bg-bronze-100 px-3 py-1 rounded-sm mb-4 border border-bronze-300">
                  {activePillar.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-ink mb-4">
                  {activePillar.title}
                </h3>
                <p className="text-base text-ink/80 font-sans leading-relaxed mb-6">
                  {activePillar.fullDesc}
                </p>

                <div className="space-y-3 mb-8 w-full">
                  {activePillar.highlights.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-sm bg-primary text-white flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm text-ink font-semibold">{item}</span>
                    </div>
                  ))}
                </div>

                <Button href={activePillar.ctaLink} variant="primary">
                  <span>Read Full Pillar Details</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>

              <div className="lg:col-span-5 relative w-full h-72 md:h-[380px] rounded-md overflow-hidden shadow-md border-2 border-bronze-300 bg-surface p-1">
                <div className="relative w-full h-full rounded-sm overflow-hidden">
                  <Image
                    src={activePillar.image}
                    alt={activePillar.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </MotionSection>
        </div>
      </section>

      {/* ==========================================
          3. BENTO IMPACT STATS GRID
         ========================================== */}
      <section className="py-20 bg-surface-alt border-b border-bronze-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Quantified Service"
            title="Impact By The Numbers"
            subtitle="Transforming vision into measurable community outcomes across Wardha and Maharashtra."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {statsData.map((stat) => (
              <StatCounter
                key={stat.id}
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                label={stat.label}
                description={stat.description}
                icon={stat.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          4. "AAI-BABA" TRIBUTE PANEL
         ========================================== */}
      <section className="py-20 bg-surface relative overflow-hidden border-b border-bronze-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <MotionSection>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#F3E5D4] p-8 md:p-12 rounded-md border-2 border-primary/30 shadow-md">
              <div className="lg:col-span-7 flex flex-col">
                <Quote className="w-12 h-12 text-primary mb-3 opacity-90" />
                <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                  Personal Values & Heritage
                </span>
                <h3 className="text-3xl font-serif font-extrabold text-ink mb-4">
                  "Aai-Baba" — The Foundational Pillar
                </h3>
                <p className="text-base text-ink/85 leading-relaxed italic mb-6 font-serif">
                  "Everything I am today, every bridge I build for society, and every smile I bring to a child's face is a humble offering at the feet of my revered parents — Aai and Baba. Their values of selflessness, integrity, and unconditional love remain my guiding light."
                </p>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                  <span className="text-xs font-bold text-primary tracking-widest uppercase">
                    Mahesh Mokalkar & Family
                  </span>
                </div>
              </div>

              {/* Floating Framed Portrait of Aai-Baba */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="lg:col-span-5 flex flex-col items-center text-center group"
              >
                {/* Image Container with Thin Bronze Border & Curved Corners */}
                <div className="relative h-64 sm:h-72 md:h-80 w-full rounded-xl overflow-hidden border-2 border-primary shadow-lg bg-surface group-hover:shadow-xl transition-all duration-300">
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image
                      src="/images/aai-baba.png"
                      alt="Aai and Baba — Revered Parents of Mahesh Mokalkar"
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                  </div>
                </div>

                {/* Text Label Outside the Image */}
                <div className="mt-3.5 text-center">
                  <p className="font-serif font-extrabold text-base text-ink tracking-wide">
                    Revered Aai & Baba
                  </p>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mt-0.5">
                    Forever Guiding Values
                  </p>
                </div>
              </motion.div>
            </div>
          </MotionSection>
        </div>
      </section>

      {/* ==========================================
          5. COMPACT ATTRACTIVE MILESTONES GRID
         ========================================== */}
      <section className="py-20 bg-surface-alt border-b border-bronze-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Milestones"
            title="Chronology of Leadership"
            subtitle="Key milestones across 27+ years of public engineering and Rotary governance."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {timelineData.map((item, index) => (
              <MotionSection key={index} delay={index * 0.05}>
                <div className="bg-surface p-6 rounded-md border-t-4 border-t-primary border-x border-b border-primary/20 shadow-sm hover:shadow-md transition-all h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-3 py-1 text-xs font-extrabold bg-primary text-white rounded-sm">
                        {item.year}
                      </span>
                      <span className="text-xs text-primary font-bold uppercase tracking-wider bg-primary/10 px-2.5 py-0.5 rounded-sm border border-primary/20">
                        {item.category}
                      </span>
                    </div>
                    <h4 className="text-lg font-serif font-bold text-ink mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs md:text-sm text-ink/80 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              </MotionSection>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button href="/about" variant="outline" size="lg">
              <span>Read Full Detailed Bio & History</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* ==========================================
          6. TESTIMONIALS SECTION
         ========================================== */}
      <section className="py-20 bg-surface border-b border-bronze-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Endorsements"
            title="Voices of Esteemed Rotarians"
            subtitle="What leaders across Rotary International District 3030 say about Mahesh Mokalkar."
          />

          <div className="relative">
            <MotionSection key={testimonialIdx}>
              <div className="p-8 md:p-10 text-center bg-surface-alt border border-bronze-300 rounded-md shadow-sm">
                <Quote className="w-10 h-10 text-primary mx-auto mb-4 opacity-80" />
                <p className="text-lg md:text-xl font-serif text-ink font-semibold italic leading-relaxed mb-6">
                  "{testimonialsData[testimonialIdx].quote}"
                </p>

                <div className="flex flex-col items-center">
                  {/* Circular Masked Avatar */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-3 border-primary mb-3 shadow-md bg-surface shrink-0">
                    <Image
                      src={testimonialsData[testimonialIdx].avatar}
                      alt={testimonialsData[testimonialIdx].name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <h4 className="text-lg font-serif font-bold text-ink">
                    {testimonialsData[testimonialIdx].name}
                  </h4>
                  <p className="text-xs text-primary font-bold mt-0.5">
                    {testimonialsData[testimonialIdx].role} · {testimonialsData[testimonialIdx].organization}
                  </p>
                </div>
              </div>
            </MotionSection>

            {/* Circular Avatar Navigation Bar */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mt-8 flex-wrap">
              {testimonialsData.map((t, idx) => {
                const isActive = idx === testimonialIdx;
                return (
                  <button
                    key={t.id}
                    onClick={() => setTestimonialIdx(idx)}
                    className={clsx(
                      "relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden transition-all duration-300 border-2 focus:outline-none",
                      isActive
                        ? "border-primary scale-110 shadow-lg ring-2 ring-primary/40"
                        : "border-bronze-300 opacity-65 hover:opacity-100 hover:scale-105"
                    )}
                    aria-label={`Select testimonial by ${t.name}`}
                  >
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover object-top"
                    />
                  </button>
                );
              })}
            </div>

            {/* Prev / Next Controls */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={handlePrevTestimonial}
                className="p-2.5 rounded-md bg-surface border border-bronze-300 text-ink hover:bg-primary hover:text-white transition-colors shadow-sm"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <span className="text-xs font-bold text-ink/70 tracking-widest">
                {testimonialIdx + 1} / {testimonialsData.length}
              </span>

              <button
                onClick={handleNextTestimonial}
                className="p-2.5 rounded-md bg-surface border border-bronze-300 text-ink hover:bg-primary hover:text-white transition-colors shadow-sm"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          7. HARD-CODED BRONZE CALL TO ACTION SECTION
         ========================================== */}
      <section className="py-16 bg-primary text-white relative overflow-hidden border-t-2 border-bronze-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Sparkles className="w-8 h-8 text-gold-300 mx-auto mb-3" />
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold mb-4 text-white">
            Have a Public Infrastructure Project or Initiative?
          </h2>
          <p className="text-base text-gold-100 mb-8 max-w-2xl mx-auto font-sans">
            Whether inquiring about PWD civil engineering works, Rotary District collaborations, or housing co-operative models, we welcome your engagement.
          </p>
          <Button href="/contact" variant="gold" size="lg">
            <span>Get In Touch Now</span>
            <ArrowRight className="w-5 h-5 ml-1" />
          </Button>
        </div>
      </section>

    </div>
  );
}
