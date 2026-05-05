"use client";

import { forwardRef, type ReactNode } from "react";
import { motion } from "framer-motion";
import { useSectionObserver } from "@/hooks/use-section-observer";
import type { SectionId } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: SectionId;
  children: ReactNode;
  className?: string;
  fullHeight?: boolean;
  noPadding?: boolean;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, children, className, fullHeight = true, noPadding = false }, _ref) => {
    const observerRef = useSectionObserver(id);

    return (
      <section
        ref={observerRef}
        id={id}
        className={cn(
          fullHeight && "min-h-screen",
          !noPadding && "px-6 lg:px-16",
          "relative",
          className
        )}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={cn(
        "mb-12 lg:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <h2
        className={cn(
          "text-4xl md:text-5xl lg:text-6xl font-bold",
          "bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  highlights?: string[];
  index?: number;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  icon,
  highlights,
  index = 0,
  className,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn(
        "group relative p-6 lg:p-8 rounded-2xl",
        "bg-gradient-to-br from-white/10 to-white/5",
        "border border-white/10 hover:border-amber-500/30",
        "backdrop-blur-sm",
        "transition-all duration-500 hover:transform hover:scale-[1.02]",
        className
      )}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:to-transparent transition-all duration-500" />

      <div className="relative z-10">
        {icon && (
          <div className="mb-4 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white">
            {icon}
          </div>
        )}

        <h3 className="text-xl lg:text-2xl font-semibold text-white mb-3">
          {title}
        </h3>

        <p className="text-white/60 leading-relaxed mb-4">{description}</p>

        {highlights && highlights.length > 0 && (
          <ul className="space-y-2">
            {highlights.map((highlight, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-sm text-white/50"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                {highlight}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

interface StatCardProps {
  value: string;
  unit?: string;
  label: string;
  index?: number;
}

export function StatCard({ value, unit, label, index = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center p-6"
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
        {value}
        {unit && <span className="text-2xl md:text-3xl ml-1">{unit}</span>}
      </div>
      <div className="mt-2 text-sm md:text-base text-white/60 uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
}
