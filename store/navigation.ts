import { create } from "zustand";

export type SlideId = 
  | "cover"
  | "intro"
  | "overview"
  | "retail"
  | "luxury"
  | "dining"
  | "attractions"
  | "events"
  | "sponsorship"
  | "leasing"
  | "contact";

export const SLIDES: { id: SlideId; title: string; inMenu: boolean }[] = [
  { id: "cover", title: "Cover", inMenu: false },
  { id: "intro", title: "Intro", inMenu: false },
  { id: "overview", title: "Why IOI City Mall", inMenu: true },
  { id: "retail", title: "Retail", inMenu: true },
  { id: "luxury", title: "Luxury", inMenu: true },
  { id: "dining", title: "Dining", inMenu: true },
  { id: "attractions", title: "Attractions", inMenu: true },
  { id: "events", title: "Events & Venues", inMenu: true },
  { id: "sponsorship", title: "Partnerships", inMenu: true },
  { id: "leasing", title: "Leasing", inMenu: true },
  { id: "contact", title: "Contact", inMenu: true },
];

interface PresentationState {
  currentSlide: number;
  isMenuOpen: boolean;
  isTransitioning: boolean;
  hasEnteredDeck: boolean;
  introComplete: boolean;
  
  // Actions
  goToSlide: (index: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
  enterDeck: () => void;
  skipIntro: () => void;
  completeIntro: () => void;
  toggleMenu: () => void;
  setMenuOpen: (open: boolean) => void;
}

export const usePresentationStore = create<PresentationState>((set, get) => ({
  currentSlide: 0,
  isMenuOpen: false,
  isTransitioning: false,
  hasEnteredDeck: false,
  introComplete: false,

  goToSlide: (index: number) => {
    const { isTransitioning, currentSlide } = get();
    if (isTransitioning || index === currentSlide) return;
    if (index < 0 || index >= SLIDES.length) return;

    set({ isTransitioning: true, currentSlide: index, isMenuOpen: false });
    setTimeout(() => set({ isTransitioning: false }), 600);
  },

  nextSlide: () => {
    const { currentSlide, isTransitioning, introComplete } = get();
    if (isTransitioning) return;
    
    // If on intro and not complete, don't allow next
    if (currentSlide === 1 && !introComplete) return;
    
    if (currentSlide < SLIDES.length - 1) {
      set({ isTransitioning: true, currentSlide: currentSlide + 1 });
      setTimeout(() => set({ isTransitioning: false }), 600);
    }
  },

  prevSlide: () => {
    const { currentSlide, isTransitioning } = get();
    if (isTransitioning) return;
    
    // Don't go back to cover or intro
    if (currentSlide > 2) {
      set({ isTransitioning: true, currentSlide: currentSlide - 1 });
      setTimeout(() => set({ isTransitioning: false }), 600);
    }
  },

  enterDeck: () => {
    set({ hasEnteredDeck: true, currentSlide: 1, isTransitioning: true });
    setTimeout(() => set({ isTransitioning: false }), 600);
  },

  skipIntro: () => {
    set({ introComplete: true, currentSlide: 2, isTransitioning: true });
    setTimeout(() => set({ isTransitioning: false }), 600);
  },

  completeIntro: () => {
    set({ introComplete: true, currentSlide: 2, isTransitioning: true });
    setTimeout(() => set({ isTransitioning: false }), 600);
  },

  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  setMenuOpen: (open: boolean) => set({ isMenuOpen: open }),
}));
