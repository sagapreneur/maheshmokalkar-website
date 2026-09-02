"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, HeartPulse, Shield, Users, CheckCircle2, Trophy, Star, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MotionSection } from "@/components/ui/motion-section";

export default function RotaryPage() {
  const awards = [
    {
      title: "Rotary Service Award for Polio Eradication",
      issuedBy: "Rotary International",
      description: "Recognized for exemplary leadership in driving mass immunization drives across Maharashtra.",
      icon: Trophy,
    },
    {
      title: "Outstanding President Award",
      issuedBy: "Rotary International District 3030",
      description: "Conferred for outstanding club administration, membership growth, and community welfare projects.",
      icon: Star,
    },
    {
      title: "Rotary Major Donor Recognition",
      issuedBy: "The Rotary Foundation",
      description: "Joint Major Donor contribution with wife Aarti Mokalkar supporting global humanitarian grants.",
      icon: Award,
    },
  ];

  const clubsFounded = [
    { name: "Rotary Club of Hinganghat", year: "2003", role: "Charter Guidance" },
    { name: "Rotary Club of Arvi", year: "2004", role: "Founding Mentor" },
    { name: "Rotary Club of Wani", year: "2005", role: "District Sponsor" },
  ];

  return (
    <div className="pt-28 pb-20">
      {/* Header Banner */}
      <section className="bg-sand-100 py-16 border-b border-sand-300/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Rotary International Leadership"
            title="As a Rotarian"
            subtitle="27+ Years of Unconditional Service, District Governor Stewardship (RID 3030), and Global Impact."
          />
        </div>
      </section>

      {/* District Governor Feature */}
      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <MotionSection>
                <span className="px-3.5 py-1 text-xs font-semibold uppercase bg-tertiary text-ink rounded-btn inline-flex items-center gap-1.5 mb-2">
                  <Award className="w-4 h-4" /> District Governor 2016-17
                </span>
                <h3 className="text-3xl font-serif font-bold text-ink">
                  Leading Rotary International District 3030
                </h3>
                <p className="text-base md:text-lg text-ink/80 leading-relaxed">
                  As District Governor during the 2016-17 Rotary year, Mahesh Mokalkar led over 100 Rotary clubs across Central India. His tenure set historical benchmarks for humanitarian service, highlighted by the mobilization of ~₹1 crore to fund 105 pediatric open-heart surgeries for children in need.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm md:text-base font-semibold text-ink">105 Pediatric Heart Surgeries (~₹1 Crore Raised)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm md:text-base font-semibold text-ink">Expanded Rotary Footprint across Wardha & Yavatmal</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm md:text-base font-semibold text-ink">Rotary Major Donor & Lifelong Benefactor</span>
                  </div>
                </div>
              </MotionSection>
            </div>

            <div className="lg:col-span-6 relative h-96 w-full rounded-card overflow-hidden shadow-2xl border-4 border-surface">
              <Image
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1000&q=80"
                alt="Mahesh Mokalkar Rotary District Governor Event"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-ink/85 backdrop-blur-md p-4 rounded-card text-white text-xs">
                <p className="font-bold">Rotary International District 3030 Conference</p>
                <p className="text-tertiary">DG Mahesh Mokalkar & Rotary Delegates</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Clubs Founded Row */}
      <section className="py-16 bg-sand-100 border-y border-sand-300/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Organization Building"
            title="Clubs Founded & Expansion"
            subtitle="Pioneering new Rotary clubs to bring humanitarian service closer to rural communities."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clubsFounded.map((club, idx) => (
              <MotionSection key={idx} delay={idx * 0.1}>
                <Card variant="flat" className="bg-surface text-center p-8">
                  <div className="w-14 h-14 rounded-full bg-sand-200 flex items-center justify-center text-primary mx-auto mb-4 font-bold text-lg">
                    {club.year}
                  </div>
                  <h4 className="text-xl font-serif font-bold text-ink mb-2">
                    {club.name}
                  </h4>
                  <p className="text-sm text-primary font-semibold">
                    {club.role}
                  </p>
                </Card>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Felicitations */}
      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Honors"
            title="Awards & Key Recognition"
            subtitle="Accolades conferred for dedicated community service and polio eradication leadership."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {awards.map((award, idx) => {
              const IconComp = award.icon;
              return (
                <MotionSection key={idx} delay={idx * 0.1}>
                  <Card variant="elevated" className="h-full">
                    <div className="w-12 h-12 rounded-full bg-sand-200 flex items-center justify-center text-primary mb-4">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-1">
                      {award.issuedBy}
                    </span>
                    <h4 className="text-xl font-serif font-bold text-ink mb-3">
                      {award.title}
                    </h4>
                    <p className="text-sm text-ink/75 leading-relaxed">
                      {award.description}
                    </p>
                  </Card>
                </MotionSection>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button href="/initiatives" variant="primary" size="lg">
              Explore All Flagship Initiatives <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
