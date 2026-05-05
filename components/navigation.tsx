"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Home,
  Building2,
  ShoppingBag,
  Gem,
  UtensilsCrossed,
  Sparkles,
  Calendar,
  Mail,
} from "lucide-react";
import { usePresentationStore, SLIDES } from "@/store/navigation";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  overview: Building2,
  retail: ShoppingBag,
  luxury: Gem,
  dining: UtensilsCrossed,
  attractions: Sparkles,
  events: Calendar,
  contact: Mail,
};

export function SlideNavigation() {
  const {
    currentSlide,
    isMenuOpen,
    toggleMenu,
    setMenuOpen,
    goToSlide,
    nextSlide,
    prevSlide,
    introComplete,
  } = usePresentationStore();

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentSlide < 2) return; // No keyboard nav on cover/intro
      
      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
        case " ":
          e.preventDefault();
          nextSlide();
          break;
        case "ArrowLeft":
        case "ArrowUp":
          e.preventDefault();
          prevSlide();
          break;
        case "Escape":
          setMenuOpen(false);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, nextSlide, prevSlide, setMenuOpen]);

  // Hide navigation on cover and intro slides
  if (currentSlide < 2 || (currentSlide === 1 && !introComplete)) {
    return null;
  }

  const menuSlides = SLIDES.filter((s) => s.inMenu);
  const currentMenuIndex = menuSlides.findIndex(
    (s) => s.id === SLIDES[currentSlide].id
  );

  return (
    <>
      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
        {/* Prev Arrow */}
        <button
          onClick={prevSlide}
          disabled={currentSlide <= 2}
          className={cn(
            "p-3 rounded-full transition-all duration-300",
            "bg-black/50 backdrop-blur-md border border-white/20",
            currentSlide <= 2
              ? "opacity-30 cursor-not-allowed"
              : "hover:bg-white/20 hover:scale-110"
          )}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        {/* Slide Dots */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/20">
          {menuSlides.map((slide, index) => {
            const isActive = currentMenuIndex === index;
            return (
              <button
                key={slide.id}
                onClick={() => goToSlide(SLIDES.findIndex((s) => s.id === slide.id))}
                className={cn(
                  "transition-all duration-300",
                  isActive
                    ? "w-8 h-2 rounded-full bg-amber-500"
                    : "w-2 h-2 rounded-full bg-white/40 hover:bg-white/70"
                )}
                aria-label={`Go to ${slide.title}`}
              />
            );
          })}
        </div>

        {/* Next Arrow */}
        <button
          onClick={nextSlide}
          disabled={currentSlide >= SLIDES.length - 1}
          className={cn(
            "p-3 rounded-full transition-all duration-300",
            "bg-black/50 backdrop-blur-md border border-white/20",
            currentSlide >= SLIDES.length - 1
              ? "opacity-30 cursor-not-allowed"
              : "hover:bg-white/20 hover:scale-110"
          )}
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className={cn(
          "fixed top-8 right-8 z-50 p-3 rounded-full transition-all duration-300",
          "bg-black/50 backdrop-blur-md border border-white/20",
          "hover:bg-white/20"
        )}
        aria-label="Open menu"
      >
        <Menu className="w-5 h-5 text-white" />
      </button>

      {/* Slide Counter */}
      <div className="fixed top-8 left-8 z-50 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/20">
        <span className="text-white/70 text-sm font-medium">
          {currentMenuIndex + 1} / {menuSlides.length}
        </span>
      </div>

      {/* Slide Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={cn(
                "fixed right-0 top-0 bottom-0 z-50 w-full max-w-md",
                "bg-gradient-to-b from-zinc-900 to-black",
                "border-l border-white/10"
              )}
            >
              {/* Close Button */}
              <div className="flex justify-between items-center p-6 border-b border-white/10">
                <span className="text-lg font-semibold text-white">Sections</span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Menu Items */}
              <nav className="p-6">
                <ul className="space-y-2">
                  {menuSlides.map((slide, index) => {
                    const Icon = iconMap[slide.id] || Home;
                    const isActive = currentMenuIndex === index;
                    const slideIndex = SLIDES.findIndex((s) => s.id === slide.id);

                    return (
                      <motion.li
                        key={slide.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <button
                          onClick={() => goToSlide(slideIndex)}
                          className={cn(
                            "w-full flex items-center gap-4 px-4 py-4 rounded-xl",
                            "transition-all duration-300",
                            isActive
                              ? "bg-amber-500/20 border border-amber-500/50"
                              : "hover:bg-white/5 border border-transparent"
                          )}
                        >
                          <div
                            className={cn(
                              "w-10 h-10 rounded-lg flex items-center justify-center",
                              isActive ? "bg-amber-500" : "bg-white/10"
                            )}
                          >
                            <Icon
                              className={cn(
                                "w-5 h-5",
                                isActive ? "text-white" : "text-white/70"
                              )}
                            />
                          </div>
                          <div className="flex-1 text-left">
                            <span
                              className={cn(
                                "block text-lg font-medium",
                                isActive ? "text-white" : "text-white/70"
                              )}
                            >
                              {slide.title}
                            </span>
                            <span className="text-sm text-white/40">
                              Slide {index + 1}
                            </span>
                          </div>
                          {isActive && (
                            <div className="w-2 h-2 rounded-full bg-amber-500" />
                          )}
                        </button>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
