"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Building2, Calendar, Handshake, ArrowRight, ExternalLink, Globe, Sparkles } from "lucide-react";
import { Slide, SlideContent, SlideTitle } from "@/components/slide";
import { cn } from "@/lib/utils";

const businessActions = [
  {
    icon: Building2,
    title: "Retail Leasing",
    description: "500+ stores, prime positioning, growth opportunity",
    email: "leasing@ioicitymall.com.my",
    cta: "Explore Spaces",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Calendar,
    title: "Events & Venues",
    description: "World-class venues for launches, concerts, exhibitions",
    email: "events@ioicitymall.com.my",
    cta: "Book a Tour",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Handshake,
    title: "Brand Partnerships",
    description: "Reach 35M visitors through strategic partnerships",
    email: "partnerships@ioicitymall.com.my",
    cta: "Partner With Us",
    color: "from-amber-500 to-orange-500",
  },
];

const quickLinks = [
  { label: "Leasing Brochure", href: "#" },
  { label: "Venue Catalog", href: "#" },
  { label: "Media Kit", href: "#" },
];

export function ContactSlide() {
  return (
    <Slide background="gradient">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl" />
      </div>

      <SlideContent className="max-w-6xl mx-auto py-6">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Sparkles className="w-7 h-7 text-amber-500" />
        </div>

        <SlideTitle subtitle="The scale. The audience. The opportunity. Let's make it happen.">
          Ready to Be Part of This?
        </SlideTitle>

        {/* Business Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-4 mb-8"
        >
          {businessActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.a
                key={action.title}
                href={`mailto:${action.email}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className={cn(
                  "group p-5 rounded-xl",
                  "bg-white/5 border border-white/10",
                  "hover:border-white/30 hover:bg-white/10 transition-all duration-300"
                )}
              >
                <div className={cn("w-12 h-12 rounded-xl mb-3", `bg-gradient-to-br ${action.color}`, "flex items-center justify-center")}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{action.title}</h3>
                <p className="text-sm text-white/50 mb-3">{action.description}</p>
                <div className="flex items-center gap-2 text-amber-500 font-medium text-sm group-hover:gap-3 transition-all">
                  {action.cta}
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Contact Info & Quick Links */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-white/5 border border-white/10 rounded-xl p-5"
          >
            <h3 className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-4">Contact Details</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500" />
                <span className="text-white">+60 3-8328 8888</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-amber-500" />
                <span className="text-white/80">Lebuh IRC, IOI Resort City, 62502 Putrajaya</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-amber-500" />
                <span className="text-white/80">www.ioicitymall.com.my</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-white/5 border border-white/10 rounded-xl p-5"
          >
            <h3 className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-4">Resources</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a key={link.label} href={link.href} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group">
                  <span className="text-white/80 group-hover:text-white">{link.label}</span>
                  <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-amber-500" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className={cn(
            "text-center p-6 rounded-2xl",
            "bg-gradient-to-r from-amber-500/10 via-amber-600/5 to-amber-500/10",
            "border border-amber-500/20"
          )}
        >
          <p className="text-lg text-white/80 mb-4">
            "I want to be part of this."
          </p>
          <a
            href="mailto:leasing@ioicitymall.com.my?subject=IOI City Mall Inquiry"
            className={cn(
              "inline-flex items-center gap-3 px-10 py-4 rounded-full",
              "bg-gradient-to-r from-amber-500 to-amber-600",
              "text-white text-lg font-semibold",
              "hover:from-amber-400 hover:to-amber-500 transition-all",
              "shadow-xl shadow-amber-500/30",
              "group"
            )}
          >
            Let's Talk
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="text-center mt-8 pt-6 border-t border-white/10"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <Image
              src="/apple-touch-icon.png"
              alt="IOI City Mall Logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="text-white font-medium">IOI City Mall</span>
          </div>
          <p className="text-white/40 text-sm">Southeast Asia's Largest Shopping Destination</p>
        </motion.div>
      </SlideContent>
    </Slide>
  );
}
