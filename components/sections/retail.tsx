"use client";

import { motion } from "framer-motion";
import { ShoppingBag, TrendingUp, Store, Users, Sparkles, ArrowRight } from "lucide-react";
import { Slide, SlideContent, SlideTitle } from "@/components/slide";
import { cn } from "@/lib/utils";

const categories = [
  { name: "Fashion & Apparel", count: "150+", color: "from-rose-500 to-pink-600" },
  { name: "Electronics & Tech", count: "40+", color: "from-blue-500 to-cyan-600" },
  { name: "Sports & Lifestyle", count: "35+", color: "from-green-500 to-emerald-600" },
  { name: "Home & Living", count: "45+", color: "from-amber-500 to-orange-600" },
];

const anchorTenants = [
  { name: "AEON", type: "Department Store", size: "250,000 sq ft" },
  { name: "H&M", type: "Fashion", size: "35,000 sq ft" },
  { name: "Uniqlo", type: "Fashion", size: "25,000 sq ft" },
  { name: "Zara", type: "Fashion", size: "20,000 sq ft" },
];

const keyBrands = [
  "Zara", "H&M", "Uniqlo", "Cotton On", "Pull&Bear", "Bershka",
  "Mango", "Charles & Keith", "Pedro", "Padini", "Apple", "Samsung",
];

const benefits = [
  { icon: TrendingUp, title: "35M+ Visitors/Year", desc: "Consistent footfall growth" },
  { icon: Store, title: "Prime Positioning", desc: "Strategic tenant placement" },
  { icon: Users, title: "Marketing Support", desc: "Mall-wide campaigns" },
];

export function RetailSlide() {
  return (
    <Slide background="gradient">
      <SlideContent className="max-w-7xl mx-auto py-6">
        <div className="flex items-center justify-center gap-3 mb-3">
          <ShoppingBag className="w-7 h-7 text-amber-500" />
        </div>

        <SlideTitle subtitle="500+ stores anchored by global brands. The retail destination of choice for Southeast Asia.">
          World-Class Retail
        </SlideTitle>

        {/* Categories Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6"
        >
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
              className={cn(
                "p-4 rounded-xl text-center",
                "bg-white/5 border border-white/10"
              )}
            >
              <div className={cn("text-3xl lg:text-4xl font-bold mb-1", `bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`)}>
                {cat.count}
              </div>
              <div className="text-white/60 text-xs lg:text-sm">{cat.name}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Anchor Tenants & Brands */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {/* Anchor Tenants */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-xl p-4"
          >
            <h3 className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-3">Anchor Tenants</h3>
            <div className="space-y-2">
              {anchorTenants.map((tenant) => (
                <div key={tenant.name} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                  <div>
                    <span className="text-white font-medium">{tenant.name}</span>
                    <span className="text-white/40 text-sm ml-2">{tenant.type}</span>
                  </div>
                  <span className="text-amber-500 text-sm">{tenant.size}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Key Brands */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-white/5 border border-white/10 rounded-xl p-4"
          >
            <h3 className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-3">Featured Brands</h3>
            <div className="flex flex-wrap gap-2">
              {keyBrands.map((brand) => (
                <span key={brand} className="px-3 py-1.5 rounded-full bg-white/5 text-white/70 text-sm border border-white/10">
                  {brand}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Benefits Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <div className="font-medium text-white text-sm">{item.title}</div>
                  <div className="text-xs text-white/50">{item.desc}</div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </SlideContent>
    </Slide>
  );
}
