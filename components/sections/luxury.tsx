"use client";

import { motion } from "framer-motion";
import { Gem, Crown, Star, Sparkles, Watch, ShoppingBag, Gift, Glasses } from "lucide-react";
import { Slide, SlideContent, SlideTitle } from "@/components/slide";
import { cn } from "@/lib/utils";

const luxuryBrands = [
  { name: "Coach", category: "Fashion" },
  { name: "Michael Kors", category: "Fashion" },
  { name: "Kate Spade", category: "Fashion" },
  { name: "Tory Burch", category: "Fashion" },
  { name: "Furla", category: "Fashion" },
  { name: "Tag Heuer", category: "Watches" },
  { name: "Tissot", category: "Watches" },
  { name: "Longines", category: "Watches" },
  { name: "Pandora", category: "Jewelry" },
  { name: "Swarovski", category: "Jewelry" },
  { name: "Montblanc", category: "Accessories" },
  { name: "Hugo Boss", category: "Fashion" },
];

const categories = [
  { icon: ShoppingBag, name: "Designer Fashion", count: "20+" },
  { icon: Watch, name: "Fine Watches", count: "15+" },
  { icon: Gift, name: "Premium Jewelry", count: "12+" },
  { icon: Glasses, name: "Luxury Eyewear", count: "8+" },
];

const services = [
  { icon: Crown, title: "VIP Concierge", desc: "Personal shopping assistants & styling" },
  { icon: Star, title: "Private Suites", desc: "Exclusive viewing rooms for VIPs" },
  { icon: Sparkles, title: "IOI Privileges", desc: "Member rewards & exclusive events" },
];

export function LuxurySlide() {
  return (
    <Slide background="gradient">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-amber-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl" />
      </div>

      <SlideContent className="max-w-7xl mx-auto py-6">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-amber-500" />
          <Gem className="w-7 h-7 text-amber-500" />
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-amber-500" />
        </div>

        <SlideTitle subtitle="Curated luxury brands in an architecturally stunning setting with personalized services.">
          The Luxury Experience
        </SlideTitle>

        {/* Categories Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-6"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.name} className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30">
                <Icon className="w-4 h-4 text-amber-500" />
                <span className="text-white text-sm font-medium">{cat.name}</span>
                <span className="text-amber-400 text-sm">({cat.count})</span>
              </div>
            );
          })}
        </motion.div>

        {/* Brand Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-8"
        >
          {luxuryBrands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.04 }}
              className={cn(
                "p-4 rounded-xl text-center",
                "bg-gradient-to-br from-amber-500/10 to-transparent",
                "border border-amber-500/20",
                "hover:border-amber-500/40 transition-all duration-300"
              )}
            >
              <span className="text-white/90 font-medium text-sm">{brand.name}</span>
              <div className="text-xs text-amber-500/60 mt-1">{brand.category}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="grid md:grid-cols-3 gap-4"
        >
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">{item.title}</div>
                  <div className="text-xs text-white/50">{item.desc}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </SlideContent>
    </Slide>
  );
}
