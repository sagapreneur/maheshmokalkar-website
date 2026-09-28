"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Heart,
  BookOpen,
  Award,
  CheckCircle2,
  Compass,
  Lightbulb,
  ShieldCheck,
  Users,
  ArrowRight,
  Briefcase,
  Sparkles,
  MapPin,
  Building,
  Quote
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MotionSection } from "@/components/ui/motion-section";
import { profileData } from "@/lib/content/profile";

export default function AboutPage() {
  const values = [
    {
      title: "Integrity in Execution",
      description: "Executing multi-crore public works with uncompromising quality assurance, meticulous adherence to specifications, and public accountability.",
      icon: ShieldCheck,
    },
    {
      title: "Service Above Self",
      description: "Rooted in the 119-year global Rotary tradition — uplifting the vulnerable through pediatric heart surgeries, cancer screening, and water security.",
      icon: Heart,
    },
    {
      title: "Dignity & Self-Reliance",
      description: "Pioneering institutional solutions like collateral-free housing credit societies and night schools for rag-pickers' children to build long-term independence.",
      icon: Compass,
    },
    {
      title: "Lifelong Scholarly Pursuit",
      description: "'Wisdom is not a product of schooling but of the lifelong attempt to acquire it.' Continuous learning across engineering, law, and management.",
      icon: Lightbulb,
    },
  ];

  const degrees = [
    {
      degree: "D.C.R.E.",
      field: "Civil & Rural Engineering",
      desc: "Foundational mastery in rural infrastructure development, irrigation channels, and foundational civil works across Maharashtra's villages.",
    },
    {
      degree: "B.E.",
      field: "Civil Engineering",
      desc: "Advanced structural mechanics, major bridge design, road networks, and public building construction techniques.",
    },
    {
      degree: "M.B.A.",
      field: "Marketing Management",
      desc: "Strategic administration, public resource optimization, stakeholder diplomacy, and large-scale project execution.",
    },
    {
      degree: "L.L.B.",
      field: "Labour Laws",
      desc: "Legal mastery in labor welfare legislation, public contractual arbitration, and occupational equity on construction sites.",
    },
  ];

  return (
    <div className="pt-28 pb-20">
      {/* Header Banner */}
      <section className="bg-mesh-pattern py-16 border-b border-gold-300/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Biography & Core Principles"
            title="About Rtn. P.P. Mahesh Mokalkar"
            subtitle="Civil Engineer, Rotarian Leader, Author, and Humanitarian Champion from Wardha, Maharashtra."
          />
        </div>
      </section>

      {/* Main Narrative & Bio */}
      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Authentic Portrait & Highlights */}
            <div className="lg:col-span-5 space-y-6">
              <MotionSection>
                <div className="relative w-full aspect-[4/5] rounded-card overflow-hidden shadow-2xl border-4 border-gold-200">
                  <Image
                    src="/photos/mahesh-photo-04.jpg"
                    alt="Mahesh Mokalkar Bio Portrait"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-serif font-bold text-lg text-gold-300">Rtn. P.P. Mahesh Mokalkar</p>
                    <p className="text-xs text-sand-200">Civil Engineer · Rotarian · Humanitarian</p>
                  </div>
                </div>
              </MotionSection>

              {/* Personal Factsheet Card */}
              <Card variant="gold-border" className="bg-surface">
                <h4 className="font-serif font-bold text-lg text-ink mb-4 pb-2 border-b border-gold-200 flex items-center justify-between">
                  <span>Distinguished Factsheet</span>
                  <Award className="w-5 h-5 text-primary" />
                </h4>
                <ul className="space-y-3 text-sm text-ink/85">
                  <li className="flex justify-between border-b border-gold-100 pb-2">
                    <span className="font-semibold text-ink/60">Base Location:</span>
                    <span className="font-bold text-primary flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> Wardha, Maharashtra
                    </span>
                  </li>
                  <li className="flex justify-between border-b border-gold-100 pb-2">
                    <span className="font-semibold text-ink/60">PWD Cadre:</span>
                    <span className="font-semibold text-right">Deputy Engineer / AE-II (30+ Years)</span>
                  </li>
                  <li className="flex justify-between border-b border-gold-100 pb-2">
                    <span className="font-semibold text-ink/60">Rotary DG Term:</span>
                    <span className="font-bold text-tertiary">RID 3030 (2016-17)</span>
                  </li>
                  <li className="flex justify-between border-b border-gold-100 pb-2">
                    <span className="font-semibold text-ink/60">Rotary Journey:</span>
                    <span className="font-semibold">30 Years (Since 1996)</span>
                  </li>
                  <li className="flex justify-between border-b border-gold-100 pb-2">
                    <span className="font-semibold text-ink/60">TRF Benefactor:</span>
                    <span className="font-bold text-primary">Major Donor Level 4</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-semibold text-ink/60">Technical Book:</span>
                    <span className="italic font-bold text-ink">"GENIUS" (Unveiled by CM)</span>
                  </li>
                </ul>
              </Card>

              {/* Marathi Quote Card */}
              <Card variant="flat" className="bg-mesh-pattern border-l-4 border-primary">
                <p className="font-marathi text-sm md:text-base font-semibold text-ink leading-relaxed">
                  "{profileData.marathiQuote}"
                </p>
                <p className="text-xs font-serif font-bold text-primary mt-3 text-right">
                  — रोटे. पी. पी. महेश मोकलकर
                </p>
              </Card>
            </div>

            {/* Right Column: Detailed Narrative */}
            <div className="lg:col-span-7 space-y-6 text-base md:text-lg text-ink/85 leading-relaxed font-sans">
              <MotionSection>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-100 rounded-btn text-xs font-bold text-primary mb-3">
                  <Briefcase className="w-3.5 h-3.5" /> Three Decades of Public Service
                </div>
                <h3 className="text-2xl md:text-4xl font-serif font-bold text-ink mb-4">
                  Engineering Infrastructure & Uplifting Communities
                </h3>
                <p>
                  <strong>Rtn. P.P. Mahesh Mokalkar</strong> embodies a rare synthesis of professional civil engineering rigor and expansive humanitarian vision. With nearly three decades of dedicated service in the <strong>Public Works Department (PWD), Government of Maharashtra</strong>, he has overseen and delivered multi-crore public works that serve as vital lifelines for Vidarbha — including Major Road Over Bridges (ROBs) at Hinganghat and Wardha, the landmark Collector Office Building at Wardha, and the Court Building at Ashti.
                </p>
                <p className="mt-4">
                  His engineering philosophy has always viewed infrastructure not merely as concrete and steel, but as the foundation upon which human lives, economic mobility, and community dignity flourish. To empower future generations of field engineers, he authored the authoritative technical handbook <strong>"GENIUS"</strong>, which was officially released by the <strong>Hon'ble Chief Minister of Maharashtra</strong>.
                </p>
              </MotionSection>

              <MotionSection delay={0.1}>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-100 rounded-btn text-xs font-bold text-primary mb-3 mt-4">
                  <Heart className="w-3.5 h-3.5" /> Rotary Leadership & Social Impact
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-ink mb-4">
                  A Lifelong Passion for "Service Above Self"
                </h3>
                <p>
                  Having entered the Rotary movement in 1996 at Rotary Club of Gandhi City Wardha, Mahesh rose through every leadership tier with unwavering commitment. As <strong>District Governor of RID 3030 (2016-17)</strong>, he led over 114 clubs across Central India, setting unprecedented benchmarks in membership growth, youth empowerment, and humanitarian grants.
                </p>
                <p className="mt-4">
                  During his tenure, he chartered an extraordinary <strong>80 Interact Clubs</strong>, <strong>9 Rotaract Clubs</strong>, and <strong>25 Rotary Community Corps (RCCs)</strong>. Under his leadership, the district mobilized support for more than <strong>300 life-saving pediatric heart surgeries</strong>, screened over <strong>70,000 women for early-stage breast cancer</strong> through state-of-the-art Mobile Mammography screening buses, and coordinated farmer debt relief alongside Bollywood icon <strong>Shri Amitabh Bachchan</strong>.
                </p>
              </MotionSection>

              <MotionSection delay={0.2}>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-100 rounded-btn text-xs font-bold text-primary mb-3 mt-4">
                  <Sparkles className="w-3.5 h-3.5" /> Institutional Compassion
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-ink mb-4">
                  Housing for the Shelterless & Night Schools
                </h3>
                <p>
                  Deeply moved by the plight of homeless families unable to access formal institutional finance, Mahesh established the <strong>"Shelter for the Shelterless" Credit Co-operative Housing Society</strong> in Wardha. Serving three terms as Founder-President, he guided over 550 families toward permanent, dignified homeownership without the burden of exploitative debt.
                </p>
                <p className="mt-4">
                  Similarly, witnessing child rag-pickers working the streets during school hours, he instituted evening <strong>Night Schools</strong> providing free tailored education, learning kits, and nutritious dinners. This breakthrough model earned formal commendations and grant support from the Government of Maharashtra and the Wardha Municipal Council.
                </p>
              </MotionSection>

              {/* Tagline Callout */}
              <div className="p-6 bg-surface-alt rounded-card border-l-4 border-primary text-ink italic font-serif text-lg my-6 shadow-sm">
                "{profileData.tagline}"
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Qualifications & 4 Pillars of Knowledge */}
      <section className="py-16 bg-mesh-pattern border-y border-gold-300/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Academic Rigor"
            title="Four Pillars of Educational Excellence"
            subtitle="A rare interdisciplinary foundation uniting engineering precision, marketing strategy, and legal mastery."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {degrees.map((deg, idx) => (
              <MotionSection key={idx} delay={idx * 0.1}>
                <Card variant="gold-border" className="h-full bg-surface">
                  <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center text-primary mb-4 font-serif font-bold text-sm border border-gold-300">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-tertiary">
                    {deg.degree}
                  </span>
                  <h4 className="text-xl font-serif font-bold text-ink mb-2">
                    {deg.field}
                  </h4>
                  <p className="text-xs md:text-sm text-ink/75 leading-relaxed font-sans">
                    {deg.desc}
                  </p>
                </Card>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* Spiritual Grounding & Gandhian Heritage */}
      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="px-3.5 py-1 text-xs font-bold uppercase bg-gold-100 text-primary rounded-btn inline-block border border-gold-300/40">
                Philosophy & Heritage
              </span>
              <h3 className="text-3xl md:text-4xl font-serif font-extrabold text-ink">
                Rooted in Gandhian Ideals & Inner Mindfulness
              </h3>
              <p className="text-base text-ink/80 leading-relaxed font-sans">
                Living in the historic town of Wardha — the spiritual epicentre of Mahatma Gandhi's Sevagram Ashram and Acharya Vinoba Bhave's Bhoodan movement — Mahesh's worldview is profoundly guided by the simplicity of truth, non-violence, and self-discipline.
              </p>
              <p className="text-base text-ink/80 leading-relaxed font-sans">
                Despite a demanding schedule directing multi-crore governmental infrastructure projects and expansive Rotary governance, he maintains daily spiritual equilibrium through Yoga and Padmasana meditation. This quiet inner stillness provides the resilience, clarity, and boundless empathy required to lead large humanitarian missions.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-sand-100 rounded-card border border-sand-300">
                  <h5 className="font-serif font-bold text-ink text-sm mb-1">Wardha Heritage</h5>
                  <p className="text-xs text-ink/70">Sevagram Ashram's timeless lessons of selfless community stewardship.</p>
                </div>
                <div className="p-4 bg-sand-100 rounded-card border border-sand-300">
                  <h5 className="font-serif font-bold text-ink text-sm mb-1">Mindful Discipline</h5>
                  <p className="text-xs text-ink/70">Daily yoga & meditation fostering ethical, calm administrative leadership.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-card overflow-hidden shadow-xl border-2 border-gold-200">
                <Image
                  src="/photos/mahesh-photo-20.jpg"
                  alt="Mahesh Mokalkar in Padmasana Yoga Meditation"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-ink/80 text-white text-[10px] p-2 rounded backdrop-blur-sm">
                  Daily Padmasana Meditation & Mindfulness
                </div>
              </div>
              <div className="relative aspect-[3/4] rounded-card overflow-hidden shadow-xl border-2 border-gold-200 mt-8">
                <Image
                  src="/photos/mahesh-photo-41.jpg"
                  alt="Mahesh Mokalkar at Historic Sevagram Gandhian Ashram"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-ink/80 text-white text-[10px] p-2 rounded backdrop-blur-sm">
                  Sevagram Ashram, Wardha Heritage
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-mesh-pattern border-y border-gold-300/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Ethos"
            title="Guiding Values & Philosophy"
            subtitle="The enduring principles that direct every engineering decision and humanitarian initiative."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const IconComp = v.icon;
              return (
                <MotionSection key={i} delay={i * 0.1}>
                  <Card variant="flat" className="h-full bg-surface">
                    <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center text-primary mb-4 border border-gold-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-serif font-bold text-ink mb-2">
                      {v.title}
                    </h4>
                    <p className="text-sm text-ink/75 leading-relaxed font-sans">
                      {v.description}
                    </p>
                  </Card>
                </MotionSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Family & Partnership Section with Real Photos */}
      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Family & Partnership"
            title="Anchored by Love, Family & Shared Purpose"
            subtitle="Together with wife R/Ann Aarti Mokalkar — Major Donors Level 4 — and proud parents of Purvesh and Disha."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Real Couple Photo */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-card overflow-hidden shadow-2xl border-4 border-gold-200">
                <Image
                  src="/photos/mahesh-photo-48.jpg"
                  alt="Mahesh and Aarti Mokalkar"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-serif font-bold text-xl text-gold-300">Mahesh & Aarti Mokalkar</p>
                  <p className="text-xs text-sand-200">Life Partners in Service & Community Leadership · TRF Major Donors Level 4</p>
                </div>
              </div>
            </div>

            {/* Family Details & Children */}
            <div className="lg:col-span-7 space-y-6">
              <Card variant="gold-border" className="bg-surface p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center text-primary">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xl text-ink">R/Ann Aarti Mokalkar</h4>
                    <p className="text-xs font-semibold text-primary">Major Donor Level 4 · Women's Welfare Champion</p>
                  </div>
                </div>
                <p className="text-sm md:text-base text-ink/80 leading-relaxed font-sans mb-4">
                  A constant pillar of encouragement and strength throughout Mahesh's 30-year engineering career and Rotary leadership journey. An active humanitarian in her own right, Aarti has spearheaded maternal and child health camps, women empowerment drives, and community welfare initiatives across Wardha.
                </p>
                <div className="p-4 bg-sand-100 rounded-card border border-gold-200 text-xs text-ink/80">
                  <span className="font-bold text-primary">Rotary Foundation Philanthropy:</span> Together, Mahesh and Aarti Mokalkar have contributed as <strong>Major Donors Level 4</strong> to The Rotary Foundation, directing vital endowments toward global disease eradication, clean water, and peace programs.
                </div>
              </Card>

              {/* Children Honors Card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card variant="flat" className="bg-sand-100/70 border border-sand-300">
                  <div className="w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center text-primary mb-3">
                    <Users className="w-4 h-4" />
                  </div>
                  <h5 className="font-serif font-bold text-ink text-base mb-1">Purvesh Mokalkar</h5>
                  <p className="text-xs font-bold text-tertiary mb-2">Son · Academic Excellence</p>
                  <p className="text-xs text-ink/75 leading-relaxed">
                    Carrying forward the family heritage of intellectual diligence, professional integrity, and deep social responsibility.
                  </p>
                </Card>

                <Card variant="flat" className="bg-sand-100/70 border border-sand-300">
                  <div className="w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center text-primary mb-3">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h5 className="font-serif font-bold text-ink text-base mb-1">Disha Mokalkar</h5>
                  <p className="text-xs font-bold text-tertiary mb-2">Daughter · Creative Pursuit</p>
                  <p className="text-xs text-ink/75 leading-relaxed">
                    Dedicated to modern education, creative arts, and youth leadership initiatives, inspiring the next generation.
                  </p>
                </Card>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* GENIUS Handbook Callout */}
      <section className="py-16 bg-gradient-dark text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white/5 p-8 rounded-card border border-tertiary/30">
            <div className="md:col-span-3 flex justify-center">
              <div className="w-32 h-44 bg-gradient-bronze rounded-card p-4 flex flex-col justify-between shadow-2xl border border-tertiary/40">
                <BookOpen className="w-8 h-8 text-white" />
                <div>
                  <p className="font-serif font-bold text-xl leading-tight text-white">GENIUS</p>
                  <p className="text-[10px] text-sand-200">Engineering Handbook</p>
                  <p className="text-[9px] text-gold-300 mt-1">Released by CM Maharashtra</p>
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
              <p className="text-sm md:text-base text-sand-200/90 mb-6 font-sans">
                {profileData.publication.description} Formally released by the Hon'ble Chief Minister of Maharashtra, this publication has served as a benchmark reference manual for civil and rural engineers across the state.
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
