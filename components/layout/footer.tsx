"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Heart, Compass, FolderArchive, Building2 } from "lucide-react";
import { profileData } from "@/lib/content/profile";

export const Footer = () => {
  return (
    <footer className="bg-[#F3E5D4] text-ink pt-16 pb-10 border-t-2 border-primary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand & Bio */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 flex items-center justify-center p-1 bg-surface rounded-md border border-primary/30 overflow-hidden shrink-0 shadow-sm">
                <Image
                  src="/logo-01.svg"
                  alt="Mahesh Mokalkar Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-serif font-extrabold text-2xl tracking-tight text-ink">
                Mahesh Mokalkar
              </span>
            </div>
            <p className="text-sm text-primary font-serif italic font-semibold leading-relaxed">
              "{profileData.tagline}"
            </p>
            <p className="text-xs text-ink/75 leading-relaxed">
              Assistant Engineer Gr-II (PWD Maharashtra) & Past District Governor (RID 3030). Dedicated to infrastructure excellence and community welfare across Wardha & Central India.
            </p>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href={profileData.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-surface flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors border border-primary/20 shadow-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={profileData.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-surface flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors border border-primary/20 shadow-sm"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={profileData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-surface flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors border border-primary/20 shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-surface flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors border border-primary/20 shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold text-primary mb-5 border-b border-primary/20 pb-2.5 flex items-center gap-2">
              <Compass className="w-4 h-4 text-primary" /> Navigation
            </h4>
            <ul className="space-y-3 text-sm text-ink/80 font-medium">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Mahesh Mokalkar
                </Link>
              </li>
              <li>
                <Link href="/engineer" className="hover:text-primary transition-colors">
                  Public Works Engineering
                </Link>
              </li>
              <li>
                <Link href="/rotary" className="hover:text-primary transition-colors">
                  Rotary District 3030 Story
                </Link>
              </li>
              <li>
                <Link href="/initiatives" className="hover:text-primary transition-colors">
                  Flagship Initiatives
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources & Media */}
          <div>
            <h4 className="text-lg font-serif font-bold text-primary mb-5 border-b border-primary/20 pb-2.5 flex items-center gap-2">
              <FolderArchive className="w-4 h-4 text-primary" /> Media Assets
            </h4>
            <ul className="space-y-3 text-sm text-ink/80 font-medium">
              <li>
                <Link href="/gallery" className="hover:text-primary transition-colors">
                  Photo Gallery & Moments
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  News & Press Updates
                </Link>
              </li>
              <li>
                <Link href="/downloads" className="hover:text-primary transition-colors">
                  GENIUS Handbook & CV Download
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Get In Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-bold text-primary mb-5 border-b border-primary/20 pb-2.5 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-primary" /> Contact Office
            </h4>
            <ul className="space-y-4 text-sm text-ink/80 font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Wardha, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href={`mailto:${profileData.email}`} className="hover:text-primary transition-colors font-medium">
                  {profileData.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href={`tel:${profileData.phone}`} className="hover:text-primary transition-colors font-medium">
                  {profileData.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-primary/20 flex flex-col sm:flex-row items-center justify-between text-xs text-ink/70 gap-4">
          <p>© {new Date().getFullYear()} Mahesh Mokalkar. All rights reserved.</p>
          <p className="font-semibold text-ink/80">
            Developed by{" "}
            <a
              href="https://kardecode.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-bold hover:underline"
            >
              KardeCode
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
