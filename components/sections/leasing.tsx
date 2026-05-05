"use client";

import { motion } from "framer-motion";
import { Key, Building2, Utensils, Gem, Store, ArrowRight, Check, MapPin, TrendingUp, Users } from "lucide-react";
import { Slide, SlideContent, SlideTitle } from "@/components/slide";
import { cn } from "@/lib/utils";

const leasingCategories = [
  {
    icon: Building2,
    name: "Standard Retail",
    rate: "RM 15-25 psf/mo",
    availability: "50+ units",
    color: "from-blue-500 to-cyan-500",
    features: ["Prime floor locations", "High traffic zones", "Flexible sizes"],
  },
  {
    icon: Gem,
    name: "Luxury Wing",
    rate: "RM 25-35 psf/mo",
    availability: "15+ units",
    color: "from-amber-500 to-yellow-500",
    features: ["Premium positioning", "VIP concierge", "Elevated finishes"],
  },
  {
    icon: Utensils,
    name: "F&B Spaces",
    rate: "RM 18-28 psf/mo",
    availability: "20+ units",
    color: "from-rose-500 to-pink-500",
    features: ["Food court to fine dining", "Outdoor seating options", "Kitchen ready"],
  },
  {
    icon: Store,
    name: "Pop-Up & Kiosk",
    rate: "From RM 3K/mo",
    availability: "100+ locations",
    color: "from-green-500 to-emerald-500",
    features: ["Short-term available", "High visibility spots", "Quick setup"],
  },
];

const whyLease = [
  { icon: Users, value: "100K+", label: "Daily Footfall" },
  { icon: TrendingUp, value: "15%", label: "YoY Growth" },
  { icon: MapPin, value: "Direct", label: "MRT Access" },
];

const process = [
  "Initial Inquiry",
  "Space Consultation",
  "Proposal & Terms",
  "Fit-Out & Launch",
];

export function LeasingSlide() {
  return (
    <Slide background="gradient">
      <SlideContent className="max-w-7xl mx-auto py-6">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Key className="w-7 h-7 text-amber-500" />
        </div>

        <SlideTitle subtitle="From flagship stores to pop-up activations. Find your perfect retail space.">
          Leasing Opportunities
        </SlideTitle>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-6 mb-6"
        >
          {whyLease.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <Icon className="w-5 h-5 text-amber-500" />
                <div>
                  <span className="font-bold text-white">{stat.value}</span>
                  <span className="text-white/50 text-sm ml-1">{stat.label}</span>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Leasing Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
        >
          {leasingCategories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className={cn(
                  "p-5 rounded-xl",
                  "bg-white/5 border border-white/10",
                  "hover:border-white/20 transition-all duration-300",
                  "group"
                )}
              >
                <div className={cn(
                  "w-12 h-12 rounded-xl mb-3",
                  `bg-gradient-to-br ${cat.color}`,
                  "flex items-center justify-center"
                )}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-1">{cat.name}</h4>
                <p className="text-amber-500 font-medium mb-1">{cat.rate}</p>
                <p className="text-xs text-white/50 mb-3">{cat.availability}</p>
                <ul className="space-y-1">
                  {cat.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-white/60">
                      <Check className="w-3 h-3 text-amber-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Leasing Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-white/5 border border-white/10 rounded-xl p-5"
        >
          <h3 className="text-center text-sm font-semibold text-amber-500 uppercase tracking-wider mb-4">
            Simple 4-Step Process
          </h3>
          <div className="flex justify-center items-center gap-2 flex-wrap">
            {process.map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <span className="w-6 h-6 rounded-full bg-amber-500 text-white text-xs flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                  <span className="text-sm text-white/80">{step}</span>
                </div>
                {index < process.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-white/30 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-6 text-center"
        >
          <a
            href="mailto:leasing@ioicitymall.com.my"
            className={cn(
              "inline-flex items-center gap-2 px-8 py-3 rounded-full",
              "bg-gradient-to-r from-amber-500 to-amber-600",
              "text-white font-semibold",
              "hover:from-amber-400 hover:to-amber-500 transition-all",
              "shadow-lg shadow-amber-500/30",
              "group"
            )}
          >
            Request Leasing Info
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </SlideContent>
    </Slide>
  );
}
