"use client";

import { motion } from "framer-motion";
import { UtensilsCrossed, Coffee, Wine, ChefHat, Globe, Sparkles } from "lucide-react";
import { Slide, SlideContent, SlideTitle } from "@/components/slide";
import { cn } from "@/lib/utils";

const stats = [
  { value: "200+", label: "Dining Outlets" },
  { value: "25", label: "Cuisines" },
  { value: "5,000", label: "Seating Capacity" },
];

const categories = [
  { icon: ChefHat, name: "Fine Dining", count: "15+", color: "from-amber-500 to-yellow-500" },
  { icon: Wine, name: "Bars & Lounges", count: "20+", color: "from-purple-500 to-pink-500" },
  { icon: Coffee, name: "Cafés & Bakeries", count: "40+", color: "from-rose-500 to-red-500" },
  { icon: UtensilsCrossed, name: "Food Hall", count: "100+", color: "from-blue-500 to-cyan-500" },
];

const featuredRestaurants = [
  { name: "Din Tai Fung", cuisine: "Taiwanese", specialty: "Xiao Long Bao" },
  { name: "Nando's", cuisine: "Portuguese", specialty: "Peri-Peri Chicken" },
  { name: "TGI Friday's", cuisine: "American", specialty: "Ribs & Cocktails" },
  { name: "Chili's", cuisine: "Tex-Mex", specialty: "Fajitas" },
  { name: "Starbucks Reserve", cuisine: "Café", specialty: "Premium Coffee" },
  { name: "Secret Recipe", cuisine: "Malaysian", specialty: "Cakes & Fusion" },
];

const cuisines = [
  "Japanese", "Italian", "Malaysian", "Chinese", "Korean",
  "Thai", "Indian", "Western", "Middle Eastern", "Vietnamese"
];

export function DiningSlide() {
  return (
    <Slide background="gradient">
      <SlideContent className="max-w-7xl mx-auto py-6">
        <div className="flex items-center justify-center gap-3 mb-3">
          <UtensilsCrossed className="w-7 h-7 text-amber-500" />
        </div>

        <SlideTitle subtitle="Every craving, every cuisine, every occasion. F&B that drives destination traffic.">
          Culinary Destination
        </SlideTitle>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={cn(
            "flex flex-wrap justify-center gap-8 p-4 rounded-xl mb-6",
            "bg-gradient-to-r from-amber-500/10 via-amber-600/5 to-amber-500/10",
            "border border-amber-500/20"
          )}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-amber-500">{stat.value}</div>
              <div className="text-xs text-white/50">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white/5 border border-white/10 rounded-xl p-4"
          >
            <h3 className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-3">By Category</h3>
            <div className="grid grid-cols-2 gap-3">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <div key={cat.name} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                    <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", `bg-gradient-to-br ${cat.color}`)}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">{cat.count}</div>
                      <div className="text-xs text-white/50">{cat.name}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Featured Restaurants */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-xl p-4"
          >
            <h3 className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-3">Featured Tenants</h3>
            <div className="space-y-2">
              {featuredRestaurants.map((restaurant) => (
                <div key={restaurant.name} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                  <div>
                    <span className="text-white font-medium text-sm">{restaurant.name}</span>
                    <span className="text-white/40 text-xs ml-2">{restaurant.cuisine}</span>
                  </div>
                  <span className="text-amber-500/60 text-xs">{restaurant.specialty}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Cuisines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-2"
        >
          <Globe className="w-5 h-5 text-amber-500 mr-2" />
          {cuisines.map((cuisine) => (
            <span key={cuisine} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm">
              {cuisine}
            </span>
          ))}
        </motion.div>
      </SlideContent>
    </Slide>
  );
}
