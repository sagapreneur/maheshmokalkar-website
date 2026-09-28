"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  HeartPulse,
  Shield,
  Users,
  CheckCircle2,
  Trophy,
  Star,
  ArrowRight,
  Globe,
  Sparkles,
  Heart,
  Landmark
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MotionSection } from "@/components/ui/motion-section";

export default function RotaryPage() {
  const awards = [
    {
      title: "TRF Distinguished Service Award",
      issuedBy: "The Rotary Foundation",
      description: "Conferred for sustained, exceptional service to The Rotary Foundation's humanitarian and educational missions worldwide.",
      icon: Trophy,
    },
    {
      title: "TRF Citation for Meritorious Service",
      issuedBy: "The Rotary Foundation (TRF)",
      description: "Recognized internationally for outstanding personal commitment to advancing Rotary Foundation grants and global grants.",
      icon: Award,
    },
    {
      title: "Rotary Major Donor (Level 4)",
      issuedBy: "The Rotary Foundation",
      description: "Joint philanthropic endowment with wife R/Ann Aarti Mokalkar providing permanent support for global health, clean water, and peace.",
      icon: Heart,
    },
    {
      title: "Polio Plus National Leadership Recognition",
      issuedBy: "India National PolioPlus Committee",
      description: "Honored for steering massive Pulse Polio immunization drives, transit booth administration, and grassroots awareness across Vidarbha.",
      icon: Shield,
    },
    {
      title: "Outstanding Club President (2005-06)",
      issuedBy: "Rotary International District 3030",
      description: "Awarded as President of Rotary Club of Gandhi City Wardha for historic community impact, new club charters, and membership growth.",
      icon: Star,
    },
    {
      title: "President of India Felicitation",
      issuedBy: "Office of the Hon'ble President of India",
      description: "Special commendation at Rashtrapati Bhavan for community housing and socio-educational upliftment of marginalized families.",
      icon: Landmark,
    },
  ];

  const leadershipRoles = [
    { title: "District Governor (RID 3030)", period: "2016-17", role: "Governed 114+ clubs across Central India with historic service benchmarks" },
    { title: "District Trainer", period: "Multiple Years", role: "Mentoring upcoming Club Presidents, Assistant Governors, and District Officers" },
    { title: "District Rotary Foundation Chair (DRFC)", period: "Strategic Term", role: "Leading annual giving, Endowment Funds, and Global Grant supervision" },
    { title: "ARRPIC (Zone 6) & AZAPC", period: "Zonal Leadership", role: "Regional Rotary Public Image & Polio Coordinator across multi-district zones" },
  ];

  const youthInstitutions = [
    { count: "80", label: "Interact Clubs", desc: "Chartered across schools to instill ethics and social leadership in school students" },
    { count: "9", label: "Rotaract Clubs", desc: "Chartered in colleges to cultivate vibrant, dynamic young professional changemakers" },
    { count: "25", label: "Rotary Community Corps", desc: "Formed in rural villages to foster grassroots village self-reliance and sanitation" },
    { count: "300+", label: "Heart Surgeries", desc: "Pediatric cardiac surgeries funded through global partnerships and TRF grants" },
  ];

  return (
    <div className="pt-28 pb-20">
      {/* Header Banner */}
      <section className="bg-mesh-pattern py-16 border-b border-gold-300/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Rotary International Leadership"
            title="A Lifetime Dedicated to Service Above Self"
            subtitle="30 Years of Passionate Rotarian Leadership, District Governor Stewardship (RID 3030), and Global Impact."
          />
        </div>
      </section>

      {/* District Governor Feature with Real Photo */}
      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <MotionSection>
                <span className="px-3.5 py-1 text-xs font-bold uppercase bg-gold-100 text-primary rounded-btn inline-flex items-center gap-1.5 mb-2 border border-gold-300/50">
                  <Award className="w-4 h-4" /> District Governor 2016-17 · RID 3030
                </span>
                <h3 className="text-3xl md:text-4xl font-serif font-extrabold text-ink">
                  Leading Rotary International District 3030
                </h3>
                <p className="text-base md:text-lg text-ink/80 leading-relaxed font-sans">
                  A member of Rotary since 1996, <strong>Rtn. P.P. Mahesh Mokalkar</strong> served as District Governor of RID 3030 during 2016-17, directing over <strong>114 clubs across Central India</strong>. His governor year witnessed unprecedented records in membership growth, youth club charters, and large-scale humanitarian grants.
                </p>
                
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm md:text-base font-semibold text-ink">300+ Life-Saving Pediatric Heart Surgeries Funded</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm md:text-base font-semibold text-ink">70,000+ Women Screened via Mobile Mammography Screening Buses</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm md:text-base font-semibold text-ink">Chartered 80 Interact, 9 Rotaract & 25 Rotary Community Corps</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm md:text-base font-semibold text-ink">Major Donor Level 4 Benefactor to The Rotary Foundation</span>
                  </div>
                </div>
              </MotionSection>
            </div>

            <div className="lg:col-span-6">
              <MotionSection delay={0.1}>
                <div className="relative aspect-[4/5] w-full rounded-card overflow-hidden shadow-2xl border-4 border-gold-200">
                  <Image
                    src="/photos/mahesh-photo-06.jpg"
                    alt="District Governor Mahesh Mokalkar Official Portrait"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-serif font-bold text-xl text-gold-300">Rtn. P.P. Mahesh Mokalkar</p>
                    <p className="text-xs text-sand-200">District Governor 2016-17 · Rotary International District 3030</p>
                    <p className="text-[11px] text-tertiary mt-1 font-mono">Official Governor Insignia & International Flags Necktie</p>
                  </div>
                </div>
              </MotionSection>
            </div>

          </div>
        </div>
      </section>

      {/* Youth Empowerment & Institution Building Grid */}
      <section className="py-20 bg-mesh-pattern border-y border-gold-300/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Record-Breaking Charters"
            title="Institution Building & Youth Empowerment"
            subtitle="An unmatched record of expanding the Rotary footprint to schools, colleges, and rural villages."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {youthInstitutions.map((item, idx) => (
              <MotionSection key={idx} delay={idx * 0.1}>
                <Card variant="gold-border" className="bg-surface text-center p-6 h-full">
                  <p className="font-serif font-extrabold text-4xl text-primary mb-1">
                    {item.count}
                  </p>
                  <h4 className="font-serif font-bold text-lg text-ink mb-2">
                    {item.label}
                  </h4>
                  <p className="text-xs text-ink/75 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </Card>
              </MotionSection>
            ))}
          </div>

          {/* Photo Stories of Leadership Seminars & Youth Conclaves */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] rounded-card overflow-hidden shadow-xl border-2 border-gold-200">
              <Image
                src="/photos/mahesh-photo-23.jpg"
                alt="Mahesh Mokalkar Keynote Address at AGLS Rajdharma"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
                <p className="font-serif font-bold text-gold-300">AGLS 'Rajdharma' Leadership</p>
                <p className="text-[11px] text-sand-200">Keynote address inspiring Assistant Governors across District 3030</p>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-card overflow-hidden shadow-xl border-2 border-gold-200">
              <Image
                src="/photos/mahesh-photo-55.jpg"
                alt="Rotaract Rejoice Youth Leadership Conclave"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
                <p className="font-serif font-bold text-gold-300">Rotaract 'Rejoice' Youth Summit</p>
                <p className="text-[11px] text-sand-200">With 25+ dynamic young Rotaractors celebrating leadership milestones</p>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-card overflow-hidden shadow-xl border-2 border-gold-200">
              <Image
                src="/photos/mahesh-photo-57.jpg"
                alt="Medical Equipment Sonography Machine Donation TRF RID 3030"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
                <p className="font-serif font-bold text-gold-300">Hospital Ultrasound Donation</p>
                <p className="text-[11px] text-sand-200">TRF RID 3030 high-precision diagnostic machine handover at Shalinitai Meghe Hospital</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Roles Timeline Cards */}
      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Rotary Journey"
            title="Senior Zonal & District Leadership Roles"
            subtitle="Continuous institutional contribution across training, foundation grants, and regional coordination."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leadershipRoles.map((role, idx) => (
              <MotionSection key={idx} delay={idx * 0.1}>
                <Card variant="flat" className="bg-sand-100/70 border border-sand-300 p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-serif font-bold text-xl text-ink">
                      {role.title}
                    </h4>
                    <span className="text-xs font-bold px-2.5 py-1 bg-gold-200 text-primary rounded-btn">
                      {role.period}
                    </span>
                  </div>
                  <p className="text-sm text-ink/75 leading-relaxed font-sans">
                    {role.role}
                  </p>
                </Card>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Felicitations */}
      <section className="py-20 bg-mesh-pattern border-t border-gold-300/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Honors & Felicitations"
            title="Awards & Landmark Recognitions"
            subtitle="Accolades conferred by The Rotary Foundation, the President of India, and state bodies."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {awards.map((award, idx) => {
              const IconComp = award.icon;
              return (
                <MotionSection key={idx} delay={idx * 0.1}>
                  <Card variant="gold-border" className="bg-surface h-full p-6">
                    <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center text-primary mb-4 border border-gold-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">
                      {award.issuedBy}
                    </span>
                    <h4 className="text-xl font-serif font-bold text-ink mb-3">
                      {award.title}
                    </h4>
                    <p className="text-sm text-ink/75 leading-relaxed font-sans">
                      {award.description}
                    </p>
                  </Card>
                </MotionSection>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button href="/initiatives" variant="primary" size="lg">
              Explore All 10 Flagship Humanitarian Initiatives <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
