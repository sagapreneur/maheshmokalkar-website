"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Newspaper, Calendar, User, ArrowRight, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MotionSection } from "@/components/ui/motion-section";

// Clean, curated posts array (Spam content fully purged per PRD spec)
const curatedPosts = [
  {
    id: "welcome-redesign",
    title: "Official Redesign of Mahesh Mokalkar Personal Brand Portal",
    excerpt: "Presenting a modernized narrative highlighting 27+ years of Public Works civil engineering and Rotary International service.",
    date: "September 2026",
    author: "Mahesh Mokalkar",
    category: "Official",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pediatric-surgeries-review",
    title: "Reflecting on 105 Pediatric Heart Surgeries Across RID 3030",
    excerpt: "How joint philanthropic mobilization transformed cardiac health outcomes for underprivileged children across Maharashtra.",
    date: "August 2026",
    author: "Mahesh Mokalkar",
    category: "Rotary",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Header Banner */}
      <section className="bg-sand-100 py-16 border-b border-sand-300/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Editorial & News"
            title="Stories & Updates"
            subtitle="Curated insights on public infrastructure development, Rotary District 3030 initiatives, and community welfare."
          />
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {curatedPosts.map((post, idx) => (
              <MotionSection key={post.id} delay={idx * 0.1}>
                <Card variant="elevated" className="h-full flex flex-col justify-between group">
                  <div>
                    <div className="relative w-full h-56 rounded-card overflow-hidden mb-6">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-btn">
                        {post.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-ink/60 mb-2 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-primary" /> {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-primary" /> {post.author}
                      </span>
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-ink mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-ink/75 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-sand-200 mt-6">
                    <Button variant="ghost" size="sm" className="px-0 text-primary hover:bg-transparent">
                      Read Story <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </Card>
              </MotionSection>
            ))}
          </div>

          {/* Clean Notice / Security Note */}
          <div className="bg-sand-100 p-8 rounded-card border border-sand-300 text-center max-w-2xl mx-auto">
            <Sparkles className="w-8 h-8 text-tertiary mx-auto mb-3" />
            <h4 className="text-xl font-serif font-bold text-ink mb-2">
              Curated Content Policy
            </h4>
            <p className="text-xs md:text-sm text-ink/75 leading-relaxed">
              This blog displays exclusively verified stories authored by Mahesh Mokalkar and his team. All legacy unverified posts have been purged in this redesign.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
