"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { usePresentationStore } from "@/store/navigation";
import { Slide, SlideOverlay } from "@/components/slide";
import { cn } from "@/lib/utils";

export function CoverSlide() {
  const { enterDeck } = usePresentationStore();

  return (
    <Slide className="relative bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-conic from-amber-500/10 via-transparent to-transparent"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-conic from-amber-600/10 via-transparent to-transparent"
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-amber-600/5 blur-3xl" />
      </div>

      <SlideOverlay variant="gradient" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-12"
        >
          <Image
            src="/apple-touch-icon.png"
            alt="IOI City Mall Logo"
            width={120}
            height={120}
            className="rounded-2xl shadow-2xl"
            priority
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white text-center leading-tight mb-4"
        >
          IOI City Mall
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-xl md:text-2xl lg:text-3xl text-white/70 text-center mb-4"
        >
          Southeast Asia's Largest Shopping Destination
        </motion.p>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-lg text-amber-500 uppercase tracking-[0.3em] mb-16"
        >
          Putrajaya, Malaysia
        </motion.p>

        {/* Enter Button */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          onClick={enterDeck}
          className={cn(
            "group relative px-12 py-5 rounded-full",
            "bg-gradient-to-r from-amber-500 to-amber-600",
            "text-white text-xl font-semibold",
            "hover:from-amber-400 hover:to-amber-500",
            "transition-all duration-300",
            "shadow-2xl shadow-amber-500/40 hover:shadow-amber-500/60",
            "hover:scale-105"
          )}
        >
          <span className="flex items-center gap-3">
            Enter Presentation
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </span>
        </motion.button>

        {/* Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 text-white/40 text-sm pointer-events-none"
        >
          Click to begin your journey
        </motion.p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </Slide>
  );
}
