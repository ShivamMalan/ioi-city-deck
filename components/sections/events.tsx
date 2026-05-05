"use client";

import { motion } from "framer-motion";
import { Calendar, Users, Mic2, Presentation, Building, Check, Star, Trophy, ArrowRight, PartyPopper } from "lucide-react";
import { Slide, SlideContent, SlideTitle } from "@/components/slide";
import { cn } from "@/lib/utils";

const stats = [
  { value: "200+", label: "Events/Year" },
  { value: "2M+", label: "Event Attendees" },
  { value: "500+", label: "Brand Partners" },
  { value: "50+", label: "Celebrity Appearances" },
];

const venues = [
  { 
    icon: Building, 
    name: "Central Court", 
    capacity: "5,000+", 
    size: "50,000 sq ft",
    features: ["6-story atrium", "Full AV", "LED walls"],
    bestFor: "Product Launches, Fashion Shows"
  },
  { 
    icon: Presentation, 
    name: "Convention Centre", 
    capacity: "3,000", 
    size: "30,000 sq ft",
    features: ["Modular halls", "Breakout rooms", "Catering"],
    bestFor: "Conferences, Trade Shows"
  },
  { 
    icon: Mic2, 
    name: "IOI Plaza (Outdoor)", 
    capacity: "10,000", 
    size: "80,000 sq ft",
    features: ["Amphitheater", "Festival space", "Night market"],
    bestFor: "Concerts, Festivals"
  },
];

const pastEvents = [
  { name: "Malaysia Motor Show", attendance: "150K", type: "Exhibition" },
  { name: "K-Pop Festival", attendance: "30K", type: "Concert" },
  { name: "Samsung Galaxy Launch", attendance: "15K", type: "Launch" },
  { name: "Fashion Week MY", attendance: "25K", type: "Fashion" },
];

export function EventsSlide() {
  return (
    <Slide background="gradient">
      <SlideContent className="max-w-7xl mx-auto py-6">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Calendar className="w-7 h-7 text-amber-500" />
        </div>

        <SlideTitle subtitle="A world-stage for product launches, concerts, exhibitions, and brand activations.">
          Global Event Platform
        </SlideTitle>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={cn(
            "grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-xl mb-6",
            "bg-gradient-to-r from-amber-500/10 to-amber-600/10",
            "border border-amber-500/20"
          )}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-amber-500">{stat.value}</div>
              <div className="text-xs text-white/50">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-4 mb-6">
          {/* Venues */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="lg:col-span-2 bg-white/5 border border-white/10 rounded-xl p-4"
          >
            <h3 className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-3">World-Class Venues</h3>
            <div className="grid md:grid-cols-3 gap-3">
              {venues.map((venue) => {
                const Icon = venue.icon;
                return (
                  <div key={venue.name} className="p-3 rounded-lg bg-white/5 border border-white/5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-amber-500" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">{venue.name}</h4>
                        <p className="text-xs text-amber-500">{venue.capacity}</p>
                      </div>
                    </div>
                    <p className="text-xs text-white/40 mb-2">{venue.size}</p>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {venue.features.map((f) => (
                        <span key={f} className="text-xs px-2 py-0.5 rounded bg-white/5 text-white/50">{f}</span>
                      ))}
                    </div>
                    <p className="text-xs text-amber-400/70 italic">{venue.bestFor}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Past Events */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-xl p-4"
          >
            <h3 className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              Event Highlights
            </h3>
            <div className="space-y-2">
              {pastEvents.map((event) => (
                <div key={event.name} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                  <div>
                    <span className="text-white text-sm font-medium">{event.name}</span>
                    <span className="text-white/40 text-xs ml-2">{event.type}</span>
                  </div>
                  <span className="text-amber-500 text-sm font-medium">{event.attendance}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Event Types & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {["Product Launches", "Concerts", "Exhibitions", "Brand Activations", "Corporate Events", "Festivals"].map((type) => (
            <span key={type} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm">
              {type}
            </span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-6 text-center"
        >
          <a
            href="mailto:events@ioicitymall.com.my"
            className={cn(
              "inline-flex items-center gap-2 px-8 py-3 rounded-full",
              "bg-gradient-to-r from-amber-500 to-amber-600",
              "text-white font-semibold",
              "hover:from-amber-400 hover:to-amber-500 transition-all",
              "shadow-lg shadow-amber-500/30",
              "group"
            )}
          >
            Book a Venue Tour
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </SlideContent>
    </Slide>
  );
}
