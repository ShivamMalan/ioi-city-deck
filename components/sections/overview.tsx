"use client";

import { motion } from "framer-motion";
import { MapPin, Users, Clock, TrendingUp, Globe, Building2, Train, Plane, Car, DollarSign, Target, Award } from "lucide-react";
import { Slide, SlideContent, SlideTitle } from "@/components/slide";
import { cn } from "@/lib/utils";

const heroStats = [
  { value: "2.5M", unit: "sq ft", label: "Total GFA" },
  { value: "500+", label: "Retail Stores" },
  { value: "35M", unit: "/yr", label: "Annual Visitors" },
  { value: "100K", unit: "/day", label: "Daily Footfall" },
];

const demographics = [
  { icon: Target, value: "10M", label: "Catchment Population" },
  { icon: DollarSign, value: "RM 12.5K", label: "Avg. Household Income" },
  { icon: Clock, value: "4.2 hrs", label: "Avg. Dwell Time" },
  { icon: TrendingUp, value: "78%", label: "Repeat Visit Rate" },
];

const access = [
  { icon: Train, text: "Direct MRT Connection", detail: "Putrajaya Line - IOI City Mall Station" },
  { icon: Plane, text: "25 min from KLIA", detail: "International gateway access" },
  { icon: Car, text: "12,000 Parking Bays", detail: "Seamless accessibility" },
  { icon: Globe, text: "40% International", detail: "Tourist destination appeal" },
];

export function OverviewSlide() {
  return (
    <Slide background="gradient">
      <SlideContent className="max-w-7xl mx-auto py-8">
        <SlideTitle subtitle="The scale, access, and audience that transform retail into an experience.">
          Why IOI City Mall?
        </SlideTitle>

        {/* Hero Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={cn(
            "grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 rounded-2xl mb-8",
            "bg-gradient-to-r from-amber-500/10 via-amber-600/5 to-amber-500/10",
            "border border-amber-500/20"
          )}
        >
          {heroStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                {stat.value}
                {stat.unit && <span className="text-lg md:text-xl">{stat.unit}</span>}
              </div>
              <div className="mt-1 text-xs md:text-sm text-white/50 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Demographics */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-xl p-5"
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-amber-500" />
              Audience Demographics
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {demographics.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="text-center p-3 rounded-lg bg-white/5">
                    <Icon className="w-5 h-5 text-amber-500 mx-auto mb-2" />
                    <div className="text-xl font-bold text-white">{item.value}</div>
                    <div className="text-xs text-white/50">{item.label}</div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Access & Location */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-white/5 border border-white/10 rounded-xl p-5"
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-amber-500" />
              Strategic Location
            </h3>
            <div className="space-y-3">
              {access.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">{item.text}</div>
                      <div className="text-xs text-white/50">{item.detail}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Awards/Recognition Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-6 flex flex-wrap justify-center gap-3"
        >
          {["Best Shopping Mall 2023", "Green Building Certified", "Top Tourist Destination"].map((award) => (
            <div key={award} className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30">
              <Award className="w-4 h-4 text-amber-500" />
              <span className="text-xs text-amber-400">{award}</span>
            </div>
          ))}
        </motion.div>
      </SlideContent>
    </Slide>
  );
}
