"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePresentationStore, SLIDES } from "@/store/navigation";
import { SlideContainer } from "@/components/slide";
import { SlideNavigation } from "@/components/navigation";
import { CoverSlide } from "@/components/slides/cover";
import { IntroSlide } from "@/components/slides/intro";
import {
  OverviewSlide,
  RetailSlide,
  LuxurySlide,
  DiningSlide,
  AttractionsSlide,
  EventsSlide,
  SponsorshipSlide,
  LeasingSlide,
  ContactSlide,
} from "@/components/sections";

const slideVariants = {
  enter: { opacity: 0, scale: 0.98 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.02 },
};

export default function Home() {
  const { currentSlide, hasEnteredDeck, introComplete } = usePresentationStore();
  
  // Get the current slide ID from the SLIDES array
  const currentSlideId = SLIDES[currentSlide]?.id;

  // Before entering the deck, show cover slide
  if (!hasEnteredDeck) {
    return (
      <main className="relative bg-black h-screen">
        <CoverSlide />
      </main>
    );
  }

  // After entering but before intro completes, show intro
  if (!introComplete) {
    return (
      <main className="relative bg-black h-screen">
        <IntroSlide />
      </main>
    );
  }

  // Main presentation
  return (
    <main className="relative bg-black overflow-hidden">
      <SlideNavigation />
      <SlideContainer>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlideId}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            {currentSlideId === "overview" && <OverviewSlide />}
            {currentSlideId === "retail" && <RetailSlide />}
            {currentSlideId === "luxury" && <LuxurySlide />}
            {currentSlideId === "dining" && <DiningSlide />}
            {currentSlideId === "attractions" && <AttractionsSlide />}
            {currentSlideId === "events" && <EventsSlide />}
            {currentSlideId === "sponsorship" && <SponsorshipSlide />}
            {currentSlideId === "leasing" && <LeasingSlide />}
            {currentSlideId === "contact" && <ContactSlide />}
          </motion.div>
        </AnimatePresence>
      </SlideContainer>
    </main>
  );
}

