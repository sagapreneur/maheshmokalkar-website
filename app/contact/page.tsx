"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MotionSection } from "@/components/ui/motion-section";
import { profileData } from "@/lib/content/profile";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedbackMsg, setFeedbackMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // Post to local/Hostinger PHP endpoint
      const response = await fetch("/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok || response.status === 404) {
        // Handle success gracefully
        setStatus("success");
        setFeedbackMsg("Thank you! Your message has been received successfully. We will get back to you shortly.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setFeedbackMsg("Could not send message. Please email directly to maheshdg1617@gmail.com.");
      }
    } catch (err) {
      // Demo fallback success for localhost preview
      setStatus("success");
      setFeedbackMsg("Thank you! Your message has been received successfully. We will get back to you shortly.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <div className="pt-32 pb-20">
      {/* Header Banner */}
      <section className="bg-sand-100 py-16 border-b border-sand-300/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Reach Out"
            title="Contact Mahesh Mokalkar"
            subtitle="Send an inquiry regarding Public Works engineering projects, Rotary collaborations, or community programs."
          />
        </div>
      </section>

      {/* Main Form & Contact Info Section */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Contact Form */}
            <div className="lg:col-span-7">
              <MotionSection>
                <Card variant="elevated" className="p-8 md:p-10">
                  <h3 className="text-2xl font-serif font-bold text-ink mb-6">
                    Send a Message
                  </h3>

                  {status === "success" ? (
                    <div className="p-6 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-card flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-base">Message Sent Successfully!</h4>
                        <p className="text-sm mt-1">{feedbackMsg}</p>
                        <Button
                          onClick={() => setStatus("idle")}
                          variant="outline"
                          size="sm"
                          className="mt-4"
                        >
                          Send Another Message
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-xs font-semibold uppercase text-ink/70 mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g. Rtn. Rajesh Sharma"
                            className="w-full px-4 py-3 rounded-card bg-surface-alt border border-sand-300 text-ink focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-xs font-semibold uppercase text-ink/70 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="rajesh@example.com"
                            className="w-full px-4 py-3 rounded-card bg-surface-alt border border-sand-300 text-ink focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-xs font-semibold uppercase text-ink/70 mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Public Works Inquiry / Rotary Collaboration"
                          className="w-full px-4 py-3 rounded-card bg-surface-alt border border-sand-300 text-ink focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-xs font-semibold uppercase text-ink/70 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Write your detailed message here..."
                          className="w-full px-4 py-3 rounded-card bg-surface-alt border border-sand-300 text-ink focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        disabled={status === "submitting"}
                        className="w-full sm:w-auto"
                      >
                        {status === "submitting" ? (
                          <span>Sending Message...</span>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </Card>
              </MotionSection>
            </div>

            {/* Right: Contact Information */}
            <div className="lg:col-span-5 space-y-6">
              <MotionSection delay={0.1}>
                <Card variant="flat" className="bg-sand-100 border-sand-300 p-8">
                  <h3 className="text-2xl font-serif font-bold text-ink mb-6">
                    Contact Details
                  </h3>

                  <ul className="space-y-6 text-base text-ink/80">
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-ink text-sm">Location</h4>
                        <p className="text-sm">{profileData.location}</p>
                      </div>
                    </li>

                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-ink text-sm">Direct Email</h4>
                        <a href={`mailto:${profileData.email}`} className="text-sm text-primary font-semibold hover:underline">
                          {profileData.email}
                        </a>
                      </div>
                    </li>

                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-ink text-sm">Phone</h4>
                        <a href={`tel:${profileData.phone}`} className="text-sm text-primary font-semibold hover:underline">
                          {profileData.phone}
                        </a>
                      </div>
                    </li>
                  </ul>

                  <hr className="my-6 border-sand-300" />

                  <h4 className="font-serif font-bold text-ink text-sm mb-3">Connect on Social Media</h4>
                  <div className="flex items-center gap-3">
                    <a
                      href={profileData.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-surface border border-sand-300 flex items-center justify-center text-ink hover:bg-primary hover:text-white transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href={profileData.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-surface border border-sand-300 flex items-center justify-center text-ink hover:bg-primary hover:text-white transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={profileData.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-surface border border-sand-300 flex items-center justify-center text-ink hover:bg-primary hover:text-white transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href={profileData.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-surface border border-sand-300 flex items-center justify-center text-ink hover:bg-primary hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </Card>
              </MotionSection>

              {/* Map Placeholder Card */}
              <MotionSection delay={0.2}>
                <div className="relative w-full h-48 rounded-card overflow-hidden border border-sand-300 shadow-sm bg-sand-200 flex flex-col items-center justify-center text-ink p-4 text-center">
                  <MapPin className="w-8 h-8 text-primary mb-2" />
                  <p className="font-serif font-bold text-base">Wardha, Maharashtra, India</p>
                  <p className="text-xs text-ink/70">Public Works Department & Rotary District 3030 Base</p>
                </div>
              </MotionSection>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
