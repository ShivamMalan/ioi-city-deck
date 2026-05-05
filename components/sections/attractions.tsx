"use client";

import { motion } from "framer-motion";
import { Sparkles, Gamepad2, Film, Snowflake, Rocket, Users, Clock, Star, Zap } from "lucide-react";
import { Slide, SlideContent, SlideTitle } from "@/components/slide";
import { cn } from "@/lib/utils";

const attractions = [
  {
    icon: Rocket,
    title: "District 21",
    subtitle: "Indoor Adventure Park",
    size: "100,000 sq ft",
    highlight: "21 attractions",
    color: "from-orange-500 to-red-600",
    features: ["Roller Glider", "Tubby Ride", "Power Station", "Flying Fox"],
  },
  {
    icon: Snowflake,
    title: "Icescape Ice Rink",
    subtitle: "Olympic-Size Skating",
    size: "50,000 sq ft",
    highlight: "500 capacity",
    color: "from-blue-400 to-cyan-500",
    features: ["Ice hockey", "Figure skating", "Lessons", "Private events"],
  },
  {
    icon: Film,
    title: "GSC Cinemas",
    subtitle: "Premium Movie Experience",
    size: "21 Halls",
    highlight: "2,800+ seats",
    color: "from-purple-500 to-pink-600",
    features: ["IMAX", "4DX", "MX4D", "Dolby Atmos"],
  },
  {
    icon: Gamepad2,
    title: "Entertainment Zone",
    subtitle: "Gaming & VR",
    size: "Multi-level",
    highlight: "All ages",
    color: "from-green-500 to-emerald-600",
    features: ["Timezone", "VR experiences", "Bowling", "Karaoke"],
  },
];

const stats = [
  { value: "8M+", label: "Entertainment Visits/Year" },
  { value: "4.2hrs", label: "Average Dwell Time" },
  { value: "65%", label: "Family Visitors" },
  { value: "50+", label: "Entertainment Tenants" },
];

export function AttractionsSlide() {
  return (
    <Slide background="gradient">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <SlideContent className="max-w-7xl mx-auto py-6">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Sparkles className="w-7 h-7 text-amber-500" />
        </div>

        <SlideTitle subtitle="Entertainment that drives destination traffic. The differentiator that sets us apart.">
          Entertainment Capital
        </SlideTitle>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={cn(
            "grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-xl mb-6",
            "bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10",
            "border border-white/10"
          )}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs text-white/50">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Attractions Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {attractions.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className={cn(
                  "p-4 rounded-xl",
                  "bg-white/5 border border-white/10",
                  "hover:border-white/20 transition-all duration-300"
                )}
              >
                <div className={cn("w-12 h-12 rounded-xl mb-3", `bg-gradient-to-br ${item.color}`, "flex items-center justify-center")}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className={cn("text-sm mb-2", `bg-gradient-to-r ${item.color} bg-clip-text text-transparent`)}>{item.subtitle}</p>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-white/50 px-2 py-1 rounded bg-white/10">{item.size}</span>
                  <span className="text-xs text-amber-500">{item.highlight}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {item.features.slice(0, 3).map((feature) => (
                    <span key={feature} className="text-xs text-white/40 px-2 py-0.5 rounded-full bg-white/5">{feature}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Key Differentiator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-6 text-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500/10 border border-amber-500/30">
            <Zap className="w-4 h-4 text-amber-500" />
            <span className="text-sm text-amber-400">Entertainment = Extended dwell time = Higher spend per visitor</span>
          </div>
        </motion.div>
      </SlideContent>
    </Slide>
  );
}
