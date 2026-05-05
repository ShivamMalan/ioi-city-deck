"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Volume2, VolumeX, SkipForward } from "lucide-react";
import { usePresentationStore } from "@/store/navigation";
import { Slide } from "@/components/slide";
import { cn } from "@/lib/utils";

// YouTube video ID
const YOUTUBE_VIDEO_ID = "uoNca0psWNc";

export function IntroSlide() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const { skipIntro } = usePresentationStore();

  const toggleMute = () => {
    const iframe = iframeRef.current;
    if (!iframe?.contentWindow) return;
    
    // Send message to YouTube player
    const message = isMuted 
      ? '{"event":"command","func":"unMute","args":""}'
      : '{"event":"command","func":"mute","args":""}';
    iframe.contentWindow.postMessage(message, '*');
    setIsMuted(!isMuted);
  };

  return (
    <Slide className="relative bg-black">
      {/* YouTube Video Embed */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          ref={iframeRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] h-[56.25vw] min-w-full min-h-full"
          src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${YOUTUBE_VIDEO_ID}&enablejsapi=1&modestbranding=1`}
          title="IOI City Mall Introduction"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 pointer-events-none" />

      {/* Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4"
      >
        {/* Sound Toggle */}
        <button
          onClick={toggleMute}
          className={cn(
            "flex items-center gap-2 px-5 py-3 rounded-full",
            "bg-black/60 backdrop-blur-md border border-white/20",
            "text-white font-medium",
            "hover:bg-black/80 transition-all duration-300"
          )}
        >
          {isMuted ? (
            <>
              <VolumeX className="w-5 h-5" />
              <span>Sound On</span>
            </>
          ) : (
            <>
              <Volume2 className="w-5 h-5" />
              <span>Sound Off</span>
            </>
          )}
        </button>

        {/* Skip Button */}
        <button
          onClick={skipIntro}
          className={cn(
            "flex items-center gap-2 px-6 py-3 rounded-full",
            "bg-amber-500 text-white font-semibold",
            "hover:bg-amber-400 transition-all duration-300",
            "shadow-lg shadow-amber-500/30"
          )}
        >
          <span>Skip Intro</span>
          <SkipForward className="w-5 h-5" />
        </button>
      </motion.div>

      {/* Logo Watermark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute top-8 left-8 z-20"
      >
        <div className="flex items-center gap-3">
          <Image
            src="/apple-touch-icon.png"
            alt="IOI City Mall Logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="text-white/70 font-medium hidden md:block">
            IOI City Mall
          </span>
        </div>
      </motion.div>
    </Slide>
  );
}
