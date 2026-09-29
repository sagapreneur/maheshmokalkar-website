"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Award,
  Sparkles,
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from "lucide-react";
import { clsx } from "clsx";
import { profileData } from "@/lib/content/profile";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Engineer", href: "/engineer" },
    { name: "Rotary", href: "/rotary" },
    { name: "Initiatives", href: "/initiatives" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Downloads", href: "/downloads" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex flex-col shadow-sm transition-all duration-300">
        
        {/* ==========================================
            TOP BAR
           ========================================== */}
        <div className="bg-[#140E0A] text-[#E7CFAE] border-b border-[#322318] py-1.5 px-4 sm:px-6 lg:px-8 text-[11px] sm:text-xs font-sans">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            
            {/* Left: Location & Contact Directs */}
            <div className="flex items-center gap-3 sm:gap-5">
              <span className="inline-flex items-center gap-1.5 text-sand-200">
                <MapPin className="w-3.5 h-3.5 text-tertiary shrink-0" />
                <span>Wardha, Maharashtra</span>
              </span>
              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center gap-1.5 text-sand-200/90 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-tertiary shrink-0" />
                <span className="hidden sm:inline">{profileData.email}</span>
              </a>
              <a
                href={`tel:${profileData.phone.replace(/\s+/g, '')}`}
                className="hidden md:inline-flex items-center gap-1.5 text-sand-200/90 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-tertiary shrink-0" />
                <span>{profileData.phone}</span>
              </a>
            </div>

            {/* Center: Key Creed & Dedication */}
            <div className="hidden lg:flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-primary/40 border border-primary/50 text-[10px] font-bold uppercase tracking-wider text-gold-200 shadow-sm">
                Service Above Self
              </span>
              <span className="font-marathi text-xs text-sand-200/90 font-medium">
                ॥ मी श्वास जयांसी अर्पिला, तयांचे नाव कोरिले ‘हरिमाला’ ॥
              </span>
            </div>

            {/* Right: Social Profiles & Press Link */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2.5">
                <a
                  href={profileData.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sand-200/80 hover:text-gold-300 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a
                  href={profileData.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sand-200/80 hover:text-gold-300 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-3.5 h-3.5" />
                </a>
                <a
                  href={profileData.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sand-200/80 hover:text-gold-300 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sand-200/80 hover:text-gold-300 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              </div>
              <span className="text-white/20 hidden sm:inline">|</span>
              <Link
                href="/downloads"
                className="text-[11px] font-bold text-gold-300 hover:text-white transition-colors hidden sm:inline"
              >
                Press Kit
              </Link>
            </div>

          </div>
        </div>

        {/* ==========================================
            MAIN NAVIGATION BAR
           ========================================== */}
        <div
          className={clsx(
            "transition-all duration-300 px-4 sm:px-6 lg:px-8 flex justify-center backdrop-blur-md border-b",
            isScrolled
              ? "bg-[#FAF6F0]/95 shadow-md border-primary/30 py-2"
              : "bg-surface/95 border-bronze-200 py-2.5"
          )}
        >
          <div className="w-full max-w-7xl flex items-center justify-between">
            {/* Logo / Brand */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 flex items-center justify-center p-1 bg-surface rounded-md shadow-sm border border-primary/30 group-hover:border-primary transition-colors overflow-hidden shrink-0">
                <Image
                  src="/logo-01.svg"
                  alt="Mahesh Mokalkar Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-extrabold text-base sm:text-lg leading-tight tracking-tight text-ink">
                  Mahesh Mokalkar
                </span>
                <span className="text-[11px] font-sans tracking-wider uppercase font-bold text-primary flex items-center gap-1.5">
                  <span>PWD Engineer</span>
                  <span>•</span>
                  <span>Past DG RID 3030</span>
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                      "px-3.5 py-2 text-[14px] font-bold tracking-tight rounded-md transition-all duration-200 relative",
                      isActive
                        ? "text-primary font-extrabold"
                        : "text-ink/80 hover:text-primary hover:bg-primary/10"
                    )}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="active-nav-line"
                        className="absolute bottom-0 left-2 right-2 h-[3px] bg-primary rounded-full shadow-sm"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={clsx(
                "lg:hidden p-2 rounded-md transition-colors focus:outline-none border border-primary/20",
                isScrolled ? "text-ink hover:bg-bronze-100" : "text-ink hover:bg-bronze-100"
              )}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-ink text-white pt-28 pb-8 px-6 flex flex-col justify-between overflow-y-auto lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={clsx(
                        "block px-5 py-3 text-base font-serif font-semibold rounded-card transition-colors",
                        isActive
                          ? "bg-primary text-white font-bold shadow-md"
                          : "text-gold-200 hover:bg-white/10 hover:text-white"
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="pt-6 border-t border-tertiary/20 text-center">
              <p className="text-xs text-gold-200/70 mb-1">Wardha, Maharashtra, India</p>
              <p className="text-sm text-tertiary font-bold">{profileData.email}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
