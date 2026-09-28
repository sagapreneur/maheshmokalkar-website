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
  Star,
  Camera,
  Maximize2,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatCounter } from "@/components/ui/stat-counter";
import { Tabs } from "@/components/ui/tabs";
import { MotionSection } from "@/components/ui/motion-section";
import { Lightbox } from "@/components/ui/lightbox";
import {
  profileData,
  statsData,
  pillarsData,
  timelineData,
  testimonialsData,
  initiativesData,
  galleryData,
  GalleryItem
} from "@/lib/content/profile";

export default function HomePage() {
  const [activePillarId, setActivePillarId] = useState<"engineer" | "rotary" | "family">("engineer");
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [storyCategory, setStoryCategory] = useState<string>("All");
  const [selectedPhotoIdx, setSelectedPhotoIdx] = useState<number | null>(null);

  const activePillar = pillarsData.find((p) => p.id === activePillarId) || pillarsData[0];

  const handleNextTestimonial = () => {
    setTestimonialIdx((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrevTestimonial = () => {
    setTestimonialIdx((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  // Filter featured story photos for home showcase
  const storyPhotos = galleryData.filter((item) => {
    if (storyCategory === "All") return item.featured;
    if (storyCategory === "Healthcare") return item.category === "Healthcare & Impact";
    if (storyCategory === "Engineering") return item.category === "Civil Engineering";
    if (storyCategory === "Rotary") return item.category === "Rotary Leadership";
    if (storyCategory === "Youth") return item.category === "Youth & Mentorship";
    if (storyCategory === "Culture") return item.category === "Culture & Heritage" || item.category === "Life & Fellowship";
    return true;
  });

  const activePhoto = selectedPhotoIdx !== null ? storyPhotos[selectedPhotoIdx] : null;

  return (
    <div className="pt-20 md:pt-24 pb-20 overflow-x-hidden bg-surface-alt">
      
      {/* ==========================================
          1. HERO SECTION — EDITORIAL STORYTELLING SHOWCASE
         ========================================== */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-28 border-b border-bronze-200 min-h-[85vh] flex items-center">
        
        {/* Full width cover hero background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="Mahesh Mokalkar - Civil Engineer & Past District Governor"
            fill
            priority
            className="object-cover object-center"
            quality={100}
          />
        </div>

        {/* Dynamic gradient overlay to ensure text on the right is ultra-readable while preserving Mahesh's portrait on the left */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-[#FAF6F0]/60 to-[#FAF6F0]/95 pointer-events-none hidden lg:block" />
        <div className="absolute inset-0 z-0 bg-[#FAF6F0]/85 pointer-events-none lg:hidden" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Right-aligned Content Container (leaves left side open for Mahesh's portrait in Hero Bg) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 lg:col-start-6 flex flex-col items-start bg-[#FAF6F0]/90 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none p-6 sm:p-10 lg:p-0 rounded-2xl border border-bronze-200/80 lg:border-none shadow-lg lg:shadow-none"
            >
              {/* Eyebrow Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bronze-100 text-primary border border-bronze-300 font-bold text-xs uppercase tracking-widest shadow-sm">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  <span>Wardha, Maharashtra</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-bold text-xs">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>3 Decades of Public Service</span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-ink leading-[1.12] tracking-tight mb-4 drop-shadow-sm">
                Engineering Infrastructure. <br className="hidden sm:inline" />
                <span className="text-primary font-serif">Transforming Lives.</span>
              </h1>

              {/* Marathi Philosophy Quote Banner */}
              <div className="w-full p-3.5 sm:p-4 rounded-xl bg-surface/90 border-l-4 border-primary border-t border-r border-b border-bronze-200 shadow-sm mb-5">
                <p className="text-xs sm:text-sm font-marathi font-bold text-primary leading-relaxed">
                  "{profileData.marathiQuote}"
                </p>
                <p className="text-[11px] font-serif font-semibold text-ink/60 mt-1 text-right">
                  — रोटे. पी. पी. महेश मोकलकर
                </p>
              </div>

              {/* Official Credential Badges */}
              <div className="flex flex-wrap gap-2.5 mb-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-primary text-white text-xs sm:text-sm font-semibold shadow-sm">
                  <HardHat className="w-4 h-4 text-gold-300" />
                  <span>Assistant Engineer Gr-II (PWD Maharashtra)</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-surface text-ink text-xs sm:text-sm font-bold border border-bronze-300 shadow-sm">
                  <Award className="w-4 h-4 text-primary" />
                  <span>District Governor RID 3030 (2016-17)</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-gold-50 text-bronze-900 text-xs sm:text-sm font-semibold border border-gold-300 shadow-sm">
                  <BookOpen className="w-4 h-4 text-bronze-700" />
                  <span>Author of 'GENIUS' Handbook</span>
                </div>
              </div>

              {/* Editorial Lead Paragraph */}
              <p className="text-base sm:text-lg text-ink font-sans leading-relaxed mb-6">
                From managing landmark Road Over Bridges (ROBs) and the Collector Office Building in Wardha, to facilitating <span className="font-bold text-primary">300+ pediatric heart surgeries</span>, mobile mammography screening for <span className="font-bold text-primary">70,000+ rural women</span>, and agrarian debt-relief with Shri Amitabh Bachchan — Mahesh Mokalkar's journey blends engineering precision with heartfelt humanitarian service.
              </p>

              {/* Key Impact Stats Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mb-8">
                <div className="p-3 bg-surface/95 rounded-xl border border-bronze-200 shadow-sm text-center">
                  <span className="text-xl sm:text-2xl font-serif font-extrabold text-primary block">300+</span>
                  <span className="text-[11px] font-bold text-ink/70 uppercase tracking-wider block">Heart Surgeries</span>
                </div>
                <div className="p-3 bg-surface/95 rounded-xl border border-bronze-200 shadow-sm text-center">
                  <span className="text-xl sm:text-2xl font-serif font-extrabold text-primary block">70,000+</span>
                  <span className="text-[11px] font-bold text-ink/70 uppercase tracking-wider block">Cancer Screenings</span>
                </div>
                <div className="p-3 bg-surface/95 rounded-xl border border-bronze-200 shadow-sm text-center">
                  <span className="text-xl sm:text-2xl font-serif font-extrabold text-primary block">30+ Yrs</span>
                  <span className="text-[11px] font-bold text-ink/70 uppercase tracking-wider block">PWD Engineering</span>
                </div>
                <div className="p-3 bg-surface/95 rounded-xl border border-bronze-200 shadow-sm text-center">
                  <span className="text-xl sm:text-2xl font-serif font-extrabold text-primary block">114</span>
                  <span className="text-[11px] font-bold text-ink/70 uppercase tracking-wider block">Clubs Chartered</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3.5">
                <Button href="#chronicle" variant="primary" size="lg">
                  <Camera className="w-5 h-5 mr-1" />
                  <span>Explore Stories in Pictures</span>
                </Button>
                <Button href="/about" variant="outline" size="lg">
                  <span>Read Biography</span>
                  <ArrowRight className="w-5 h-5 ml-1" />
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
              { id: "engineer", label: "As a Govt. Civil Engineer", icon: <HardHat className="w-4 h-4" /> },
              { id: "rotary", label: "As a Rotarian & Governor", icon: <Award className="w-4 h-4" /> },
              { id: "family", label: "As a Humanist & Family Man", icon: <HeartHandshake className="w-4 h-4" /> },
            ]}
            activeTab={activePillarId}
            onChange={(tabId) => setActivePillarId(tabId as any)}
            className="mb-12"
          />

          <MotionSection key={activePillarId}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-surface-alt rounded-2xl p-8 md:p-12 border border-bronze-300 shadow-sm">
              <div className="lg:col-span-7 flex flex-col items-start">
                <span className="text-xs font-bold uppercase tracking-widest text-primary bg-bronze-100 px-3 py-1 rounded-md mb-4 border border-bronze-300">
                  {activePillar.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-ink mb-4">
                  {activePillar.title}
                </h3>
                <p className="text-base sm:text-lg text-ink/80 font-sans leading-relaxed mb-6">
                  {activePillar.fullDesc}
                </p>

                <div className="space-y-3 mb-8 w-full">
                  {activePillar.highlights.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-md bg-primary text-white flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm sm:text-base text-ink font-semibold">{item}</span>
                    </div>
                  ))}
                </div>

                <Button href={activePillar.ctaLink} variant="primary">
                  <span>Explore Pillar in Detail</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>

              <div className="lg:col-span-5 relative w-full h-80 sm:h-[400px] rounded-xl overflow-hidden shadow-lg border-2 border-bronze-300 bg-surface">
                <Image
                  src={activePillar.image}
                  alt={activePillar.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </MotionSection>
        </div>
      </section>

      {/* ==========================================
          3. "AAI-BABA" TRIBUTE PANEL
         ========================================== */}
      <section className="py-20 bg-surface-alt relative overflow-hidden border-b border-bronze-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <MotionSection>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#F3E5D4] p-8 md:p-12 rounded-2xl border-2 border-primary/30 shadow-md">
              <div className="lg:col-span-7 flex flex-col">
                <Quote className="w-12 h-12 text-primary mb-3 opacity-90" />
                <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                  Personal Values & Heritage
                </span>
                <h3 className="text-3xl font-serif font-extrabold text-ink mb-3">
                  "Aai-Baba" — The Foundational Pillar
                </h3>

                {/* Sacred Dedication Verse */}
                <div className="p-4 sm:p-5 rounded-xl bg-surface/90 border-l-4 border-primary border border-bronze-300/80 shadow-sm mb-5">
                  <p className="font-marathi text-lg sm:text-xl font-bold text-primary leading-relaxed text-center sm:text-left">
                    ॥ मी श्वास जयांसी अर्पिला, तयांचे नाव कोरिले ‘हरिमाला’ ॥
                  </p>
                </div>

                <p className="text-base sm:text-lg text-ink/85 leading-relaxed italic mb-6 font-serif">
                  "Everything I am today, every bridge I build for society, and every smile I bring to a child's face is a humble offering at the feet of my revered parents — Aai and Baba. Their values of selflessness, integrity, and unconditional love remain my guiding light."
                </p>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                  <span className="text-xs font-bold text-primary tracking-widest uppercase">
                    Mahesh Mokalkar & Family
                  </span>
                </div>
              </div>

              {/* Framed Portrait of Aai-Baba */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="lg:col-span-5 flex flex-col items-center text-center group"
              >
                <div className="relative h-64 sm:h-72 md:h-80 w-full rounded-2xl overflow-hidden border-2 border-primary shadow-lg bg-surface group-hover:shadow-xl transition-all duration-300">
                  <Image
                    src="/images/aai-baba.png"
                    alt="Aai and Baba — Revered Parents of Mahesh Mokalkar"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                </div>

                <div className="mt-3.5 text-center">
                  <p className="font-serif font-extrabold text-base text-ink tracking-wide">
                    Revered Aai & Baba
                  </p>
                  <p className="font-marathi text-xs font-bold text-primary mt-0.5">
                    ‘हरिमाला’ — अखंड प्रेरणामूर्ती
                  </p>
                </div>
              </motion.div>
            </div>
          </MotionSection>
        </div>
      </section>

      {/* ==========================================
          4. BRAND NEW: STORIES IN PICTURES (PHOTO SHOWCASE)
         ========================================== */}
      <section id="chronicle" className="py-20 bg-gradient-to-b from-[#FAF6F0] via-surface to-[#FAF6F0] border-b border-bronze-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Visual Life Chronicle"
            title="Stories in Pictures: A Life of Service"
            subtitle="Every photograph tells an authentic chapter — from pediatric heart surgeries to civil engineering landmarks, youth leadership, and family joy."
          />

          {/* Story Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {[
              { id: "All", label: "Curated Highlights" },
              { id: "Healthcare", label: "Healthcare & Impact" },
              { id: "Engineering", label: "Civil Engineering & PWD" },
              { id: "Rotary", label: "Rotary Leadership" },
              { id: "Youth", label: "Youth & NextGen" },
              { id: "Culture", label: "Culture, Life & Family" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setStoryCategory(tab.id)}
                className={clsx(
                  "px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border",
                  storyCategory === tab.id
                    ? "bg-primary text-white border-primary shadow-sm"
                    : "bg-surface text-ink/75 border-bronze-300 hover:border-primary hover:text-primary"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Photo Stories Masonry / Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {storyPhotos.slice(0, 9).map((photo, idx) => (
              <MotionSection key={photo.id} delay={idx * 0.05}>
                <div
                  onClick={() => setSelectedPhotoIdx(idx)}
                  className="group relative rounded-2xl overflow-hidden bg-surface border border-bronze-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full"
                >
                  {/* Photo Container */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-bronze-100">
                    <Image
                      src={photo.src}
                      alt={photo.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Category pill */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-ink/80 text-white backdrop-blur-sm text-[11px] font-bold uppercase tracking-wider">
                      {photo.category}
                    </div>

                    {/* Expand icon */}
                    <div className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 text-ink opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Caption & Story Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs text-ink/60 font-semibold mb-1.5">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-primary" />
                          {photo.location}
                        </span>
                        {photo.date && <span>{photo.date}</span>}
                      </div>

                      <h4 className="text-base sm:text-lg font-serif font-bold text-ink group-hover:text-primary transition-colors leading-snug mb-2">
                        {photo.title}
                      </h4>

                      {photo.marathiTitle && (
                        <p className="text-xs font-serif italic text-primary/80 mb-2">
                          {photo.marathiTitle}
                        </p>
                      )}

                      <p className="text-xs sm:text-sm text-ink/75 leading-relaxed line-clamp-3">
                        {photo.caption}
                      </p>
                    </div>

                    <div className="pt-4 mt-3 border-t border-bronze-100 flex items-center justify-between text-xs font-bold text-primary">
                      <span>Click to view full story</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </MotionSection>
            ))}
          </div>

          {/* View Full 60-Photo Archive Button */}
          <div className="text-center mt-12">
            <Button href="/gallery" variant="primary" size="lg">
              <Camera className="w-5 h-5 mr-1" />
              <span>Explore Complete 60-Photo Story Archive</span>
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Full View */}
      <Lightbox
        images={storyPhotos}
        selectedIndex={selectedPhotoIdx}
        onClose={() => setSelectedPhotoIdx(null)}
        onPrev={() => {
          if (selectedPhotoIdx !== null) {
            setSelectedPhotoIdx((selectedPhotoIdx - 1 + storyPhotos.length) % storyPhotos.length);
          }
        }}
        onNext={() => {
          if (selectedPhotoIdx !== null) {
            setSelectedPhotoIdx((selectedPhotoIdx + 1) % storyPhotos.length);
          }
        }}
      />

      {/* ==========================================
          5. BENTO IMPACT STATS GRID
         ========================================== */}
      <section className="py-20 bg-surface border-b border-bronze-200">
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
          6. MILESTONES OF LEADERSHIP
         ========================================== */}
      <section className="py-20 bg-surface border-b border-bronze-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Milestones"
            title="Chronology of Leadership"
            subtitle="Key milestones across 30 years of public engineering, social impact, and Rotary governance."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {timelineData.map((item, index) => (
              <MotionSection key={index} delay={index * 0.04}>
                <div className="bg-surface-alt p-6 rounded-xl border-t-4 border-t-primary border-x border-b border-bronze-200 shadow-sm hover:shadow-md transition-all h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-3 py-1 text-xs font-extrabold bg-primary text-white rounded-md">
                        {item.year}
                      </span>
                      <span className="text-xs text-primary font-bold uppercase tracking-wider bg-primary/10 px-2.5 py-0.5 rounded-md border border-primary/20">
                        {item.category}
                      </span>
                    </div>
                    <h4 className="text-lg font-serif font-bold text-ink mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-ink/80 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              </MotionSection>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button href="/about" variant="outline" size="lg">
              <span>Read Full Biographical Story</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* ==========================================
          7. TESTIMONIALS SECTION
         ========================================== */}
      <section className="py-20 bg-surface-alt border-b border-bronze-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Endorsements"
            title="Voices of Esteemed Rotarians"
            subtitle="What leaders across Rotary International District 3030 say about Mahesh Mokalkar."
          />

          <div className="relative">
            <MotionSection key={testimonialIdx}>
              <div className="p-8 md:p-10 text-center bg-surface border border-bronze-300 rounded-2xl shadow-sm">
                <Quote className="w-10 h-10 text-primary mx-auto mb-4 opacity-80" />
                <p className="text-lg md:text-xl font-serif text-ink font-semibold italic leading-relaxed mb-6">
                  "{testimonialsData[testimonialIdx].quote}"
                </p>

                <div className="flex flex-col items-center">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-primary mb-3 shadow-md bg-surface shrink-0">
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
                className="p-2.5 rounded-lg bg-surface border border-bronze-300 text-ink hover:bg-primary hover:text-white transition-colors shadow-sm"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <span className="text-xs font-bold text-ink/70 tracking-widest">
                {testimonialIdx + 1} / {testimonialsData.length}
              </span>

              <button
                onClick={handleNextTestimonial}
                className="p-2.5 rounded-lg bg-surface border border-bronze-300 text-ink hover:bg-primary hover:text-white transition-colors shadow-sm"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          8. CALL TO ACTION SECTION
         ========================================== */}
      <section className="py-16 bg-primary text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Sparkles className="w-8 h-8 text-gold-300 mx-auto mb-3" />
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold mb-4 text-white">
            Have a Public Infrastructure Project or Social Initiative?
          </h2>
          <p className="text-base text-gold-100 mb-8 max-w-2xl mx-auto font-sans leading-relaxed">
            Whether inquiring about PWD civil engineering works, Rotary District 3030 collaborations, or community housing models, we welcome your engagement.
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
