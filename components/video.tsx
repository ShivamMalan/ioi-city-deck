"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoBackgroundProps {
  src: string;
  poster?: string;
  className?: string;
  overlay?: boolean;
  overlayClassName?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  showControls?: boolean;
}

export function VideoBackground({
  src,
  poster,
  className,
  overlay = true,
  overlayClassName,
  autoPlay = true,
  muted = true,
  loop = true,
  showControls = true,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(muted);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => setIsLoaded(true);
    video.addEventListener("canplay", handleCanPlay);

    return () => video.removeEventListener("canplay", handleCanPlay);
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {/* Video element */}
      <video
        ref={videoRef}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline
        poster={poster}
        className={cn(
          "absolute inset-0 w-full h-full object-cover",
          "transition-opacity duration-1000",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Poster fallback while loading */}
      {poster && !isLoaded && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${poster})` }}
        />
      )}

      {/* Overlay gradient */}
      {overlay && (
        <div
          className={cn(
            "absolute inset-0",
            "bg-gradient-to-b from-black/60 via-black/40 to-black",
            overlayClassName
          )}
        />
      )}

      {/* Video controls */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-6 left-6 flex items-center gap-2 z-20"
          >
            <button
              onClick={togglePlay}
              className={cn(
                "p-2 rounded-full",
                "bg-white/10 backdrop-blur-md border border-white/20",
                "hover:bg-white/20 transition-colors"
              )}
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 text-white" />
              ) : (
                <Play className="w-4 h-4 text-white" />
              )}
            </button>

            <button
              onClick={toggleMute}
              className={cn(
                "p-2 rounded-full",
                "bg-white/10 backdrop-blur-md border border-white/20",
                "hover:bg-white/20 transition-colors"
              )}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-white" />
              ) : (
                <Volume2 className="w-4 h-4 text-white" />
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "9/16";
}

export function VideoPlayer({
  src,
  poster,
  className,
  aspectRatio = "16/9",
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden bg-black/50",
        className
      )}
      style={{ aspectRatio }}
    >
      <video
        ref={videoRef}
        poster={poster}
        playsInline
        className="w-full h-full object-cover"
        onEnded={() => setIsPlaying(false)}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Play button overlay */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={togglePlay}
            className={cn(
              "absolute inset-0 flex items-center justify-center",
              "bg-black/30 hover:bg-black/40 transition-colors"
            )}
          >
            <div
              className={cn(
                "w-20 h-20 rounded-full",
                "bg-white/20 backdrop-blur-md border border-white/30",
                "flex items-center justify-center",
                "hover:bg-white/30 transition-colors"
              )}
            >
              <Play className="w-8 h-8 text-white ml-1" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
