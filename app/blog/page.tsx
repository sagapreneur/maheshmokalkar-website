"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Newspaper, Calendar, User, ArrowRight, Sparkles, Heart, Building, Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MotionSection } from "@/components/ui/motion-section";

const curatedPosts = [
  {
    id: "pediatric-surgeries-review",
    title: "Saving Little Hearts: 300+ Pediatric Cardiac Surgeries Across Maharashtra",
    excerpt: "How a joint philanthropic mobilization through Rotary International District 3030 transformed cardiac healthcare outcomes for underprivileged children.",
    date: "Rotary Humanitarian Chronicle",
    author: "Rtn. P.P. Mahesh Mokalkar",
    category: "Healthcare",
    image: "/photos/mahesh-photo-44.jpg",
  },
  {
    id: "civil-engineering-bridges",
    title: "Engineering Arteries of Progress: Road Over Bridges at Hinganghat and Wardha",
    excerpt: "Overcoming severe railway crossing bottlenecks through meticulous structural design, safety audits, and durable civil execution under PWD Maharashtra.",
    date: "PWD Technical Review",
    author: "Er. Mahesh Mokalkar",
    category: "Engineering",
    image: "/photos/mahesh-photo-30.jpg",
  },
  {
    id: "washim-hospital-csr",
    title: "Advanced Diagnostics for Rural Citizens: Indian Oil CSR Portable X-Ray Donation",
    excerpt: "Partnering with Indian Oil Corporation to deliver high-precision portable X-ray equipment to the District Civil Hospital in Washim.",
    date: "Healthcare Infrastructure",
    author: "Mahesh Mokalkar",
    category: "Community",
    image: "/photos/mahesh-photo-50.jpg",
  },
  {
    id: "shelter-for-shelterless",
    title: "Shelter for the Shelterless: Building Dignity Through Credit Co-operatives",
    excerpt: "How 550+ unbanked families achieved permanent homeownership in Wardha without collateral or debt traps through community credit union models.",
    date: "Social Welfare Case Study",
    author: "Mahesh Mokalkar",
    category: "Housing",
    image: "/photos/mahesh-photo-22.jpg",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Header Banner */}
      <section className="bg-mesh-pattern py-16 border-b border-gold-300/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Chronicles & Reflections"
            title="Stories of Impact & Engineering"
            subtitle="Authentic accounts of public infrastructure development, healthcare milestones, and community welfare in Maharashtra."
          />
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {curatedPosts.map((post, idx) => (
              <MotionSection key={post.id} delay={idx * 0.1}>
                <Card variant="gold-border" className="h-full flex flex-col justify-between group bg-surface">
                  <div>
                    <div className="relative w-full h-64 rounded-card overflow-hidden mb-6 border border-gold-200">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-btn shadow backdrop-blur-sm">
                        {post.category}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-semibold text-ink/60 mb-2">
                      <span className="flex items-center gap-1 text-primary">
                        <Calendar className="w-3.5 h-3.5" /> {post.date}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5" /> {post.author}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-serif font-extrabold text-ink mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-ink/75 leading-relaxed font-sans">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gold-100 flex items-center justify-between text-xs font-bold text-primary group-hover:text-primary">
                    <span>Documented in Official Archives</span>
                    <Sparkles className="w-4 h-4 text-tertiary" />
                  </div>
                </Card>
              </MotionSection>
            ))}
          </div>

          {/* Quote Banner */}
          <div className="p-8 md:p-12 rounded-card bg-mesh-pattern border border-gold-300 text-center max-w-4xl mx-auto shadow-sm">
            <p className="font-marathi text-lg md:text-xl font-bold text-ink leading-relaxed mb-4">
              "यशाची खरी उंची आपण किती पुढे गेलो यावर नाही, तर आपल्या प्रवासात आपण किती जणांना सोबत घेऊन पुढे गेलो, यावर ठरते."
            </p>
            <p className="text-sm font-serif font-bold text-primary">
              — रोटे. पी. पी. महेश मोकलकर (माजी जिल्हा प्रांतपाल, रोटरी डिस्ट्रिक्ट ३०३०)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
