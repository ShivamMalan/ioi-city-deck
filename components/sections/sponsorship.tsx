"use client";

import { motion } from "framer-motion";
import { Handshake, Check, Star, Users, TrendingUp, Megaphone, Target, Zap, ArrowRight } from "lucide-react";
import { Slide, SlideContent, SlideTitle } from "@/components/slide";
import { cn } from "@/lib/utils";

const audienceStats = [
  { value: "35M", label: "Annual Visitors" },
  { value: "40%", label: "International" },
  { value: "78%", label: "Repeat Rate" },
  { value: "4.2hrs", label: "Dwell Time" },
];

const tiers = [
  {
    name: "Presenting Partner",
    price: "From RM 500K",
    featured: true,
    benefits: [
      "Exclusive naming rights",
      "Premium brand placement",
      "VIP hospitality suite",
      "Digital & social amplification",
      "Dedicated account team",
    ],
  },
  {
    name: "Official Partner",
    price: "From RM 200K",
    featured: false,
    benefits: [
      "Co-branded visibility",
      "Brand activation space",
      "Event access passes",
      "Social media features",
    ],
  },
  {
    name: "Supporting Partner",
    price: "From RM 50K",
    featured: false,
    benefits: [
      "Logo visibility",
      "Sampling opportunities",
      "Event passes",
      "Newsletter features",
    ],
  },
];

const activationTypes = [
  { icon: Target, name: "Brand Activations", desc: "Pop-up experiences & product sampling" },
  { icon: Megaphone, name: "Campaign Integration", desc: "Mall-wide marketing campaigns" },
  { icon: Zap, name: "Digital Takeovers", desc: "LED screens & digital directories" },
  { icon: Users, name: "Experiential Events", desc: "Interactive consumer engagement" },
];

export function SponsorshipSlide() {
  return (
    <Slide background="gradient">
      <SlideContent className="max-w-7xl mx-auto py-6">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Handshake className="w-7 h-7 text-amber-500" />
        </div>

        <SlideTitle subtitle="Align your brand with Southeast Asia's premier retail destination. Reach millions of engaged consumers.">
          Partnership Opportunities
        </SlideTitle>

        {/* Audience Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={cn(
            "grid grid-cols-4 gap-4 p-4 rounded-xl mb-6",
            "bg-gradient-to-r from-amber-500/10 to-amber-600/10",
            "border border-amber-500/20"
          )}
        >
          {audienceStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-amber-500">{stat.value}</div>
              <div className="text-xs text-white/50">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Partnership Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid md:grid-cols-3 gap-4 mb-6"
        >
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className={cn(
                "relative p-5 rounded-xl",
                tier.featured
                  ? "bg-gradient-to-b from-amber-500/20 to-amber-500/5 border-2 border-amber-500/50"
                  : "bg-white/5 border border-white/10"
              )}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-semibold flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  Recommended
                </div>
              )}
              <h4 className={cn("text-lg font-bold mb-1", tier.featured ? "text-amber-400" : "text-white")}>
                {tier.name}
              </h4>
              <p className="text-xl font-bold text-white mb-4">{tier.price}</p>
              <ul className="space-y-2">
                {tier.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-sm text-white/70">
                    <Check className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Activation Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3"
        >
          {activationTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <div key={type.name} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="w-10 h-10 mx-auto rounded-lg bg-amber-500/20 flex items-center justify-center mb-2">
                  <Icon className="w-5 h-5 text-amber-500" />
                </div>
                <h5 className="text-sm font-medium text-white mb-1">{type.name}</h5>
                <p className="text-xs text-white/50">{type.desc}</p>
              </div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-6 text-center"
        >
          <a
            href="mailto:partnerships@ioicitymall.com.my"
            className={cn(
              "inline-flex items-center gap-2 px-8 py-3 rounded-full",
              "bg-gradient-to-r from-amber-500 to-amber-600",
              "text-white font-semibold",
              "hover:from-amber-400 hover:to-amber-500 transition-all",
              "shadow-lg shadow-amber-500/30",
              "group"
            )}
          >
            Discuss Partnership
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </SlideContent>
    </Slide>
  );
}
