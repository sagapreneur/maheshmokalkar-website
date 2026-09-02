"use client";

import React from "react";
import { Download, FileText, BookOpen, Image as ImageIcon, ShieldCheck, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MotionSection } from "@/components/ui/motion-section";
import { profileData } from "@/lib/content/profile";

export default function DownloadsPage() {
  const downloadsList = [
    {
      title: "Mahesh Mokalkar — Official Curriculum Vitae (PDF)",
      description: "Complete professional profile detailing PWD engineering projects, Rotary District 3030 leadership, academic credentials, and social awards.",
      format: "PDF Document",
      size: "1.2 MB",
      icon: FileText,
      badge: "Official CV",
      href: "/downloads/Mahesh-Mokalkar-Executive-Profile.pdf",
    },
    {
      title: "GENIUS Technical Handbook Overview",
      description: "Sample excerpt and technical table of contents for the published handbook for PWD departmental civil engineers.",
      format: "PDF Document",
      size: "2.5 MB",
      icon: BookOpen,
      badge: "Engineering Book",
      href: "/downloads/GENIUS-Handbook-Summary.pdf",
    },
    {
      title: "Media & Press Headshots Kit",
      description: "High-resolution official photography, Rotary logos, and approved bio blurbs for journalists, event organizers, and district conferences.",
      format: "ZIP Archive",
      size: "14.8 MB",
      icon: ImageIcon,
      badge: "Press Kit",
      href: "/downloads/Mahesh-Mokalkar-Press-Kit.zip",
    },
  ];

  return (
    <div className="pt-28 pb-20">
      {/* Header Banner */}
      <section className="bg-sand-100 py-16 border-b border-sand-300/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Press & Documentation"
            title="Downloads & Resources"
            subtitle="Access official executive profiles, CV (PDF), GENIUS technical book overview, and media press assets."
          />
        </div>
      </section>

      {/* Downloads Grid */}
      <section className="py-16 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {downloadsList.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <MotionSection key={idx} delay={idx * 0.1}>
                <Card variant="elevated" className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-sand-200 flex items-center justify-center text-primary shrink-0 mt-1">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2.5 py-0.5 text-xs font-bold uppercase bg-sand-200 text-primary rounded-btn">
                            {item.badge}
                          </span>
                          <span className="text-xs text-ink/60 font-medium">
                            {item.format} · {item.size}
                          </span>
                        </div>
                        <h3 className="text-xl font-serif font-bold text-ink mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-ink/75 leading-relaxed max-w-2xl">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <Button href={item.href} variant="primary" className="shrink-0">
                      <Download className="w-4 h-4 mr-2" /> Download Asset
                    </Button>
                  </div>
                </Card>
              </MotionSection>
            );
          })}

          {/* Verification Badge Note */}
          <div className="p-6 bg-sand-100 rounded-card border border-sand-300 text-center text-xs text-ink/70 flex items-center justify-center gap-2 mt-8">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <span>All downloadable documents are digitally verified and safe for media publications.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
