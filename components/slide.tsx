"use client";

import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePresentationStore, SLIDES } from "@/store/navigation";
import { cn } from "@/lib/utils";

interface SlideProps {
  children: ReactNode;
  className?: string;
  background?: "dark" | "gradient" | "image";
  backgroundImage?: string;
}

export function Slide({
  children,
  className,
  background = "dark",
  backgroundImage,
}: SlideProps) {
  return (
    <div
      className={cn(
        "w-full h-full flex flex-col items-center justify-center relative overflow-hidden",
        background === "dark" && "bg-black",
        background === "gradient" &&
          "bg-gradient-to-br from-zinc-900 via-black to-zinc-900",
        className
      )}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}

interface SlideContainerProps {
  children: ReactNode;
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

export function SlideContainer({ children }: SlideContainerProps) {
  return (
    <div className="fixed inset-0 overflow-hidden bg-black">
      {children}
    </div>
  );
}

interface SlideContentProps {
  children: ReactNode;
  className?: string;
  align?: "center" | "left" | "right";
}

export function SlideContent({
  children,
  className,
  align = "center",
}: SlideContentProps) {
  return (
    <div
      className={cn(
        "relative z-10 w-full h-full flex flex-col p-8 lg:p-16",
        align === "center" && "items-center justify-center text-center",
        align === "left" && "items-start justify-center text-left",
        align === "right" && "items-end justify-center text-right",
        className
      )}
    >
      {children}
    </div>
  );
}

interface SlideOverlayProps {
  variant?: "dark" | "gradient" | "vignette";
  className?: string;
}

export function SlideOverlay({
  variant = "dark",
  className,
}: SlideOverlayProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 z-0",
        variant === "dark" && "bg-black/60",
        variant === "gradient" &&
          "bg-gradient-to-b from-black/80 via-black/40 to-black/80",
        variant === "vignette" &&
          "bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.7)_100%)]",
        className
      )}
    />
  );
}

interface SlideTitleProps {
  children: ReactNode;
  subtitle?: string;
  className?: string;
}

export function SlideTitle({ children, subtitle, className }: SlideTitleProps) {
  return (
    <div className={cn("mb-8", className)}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
      >
        {children}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 text-xl md:text-2xl text-white/60 max-w-3xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
