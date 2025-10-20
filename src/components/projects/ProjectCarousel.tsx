import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectCarouselProps {
  images: string[];
  autoPlay?: boolean;
  interval?: number;
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  images,
  autoPlay = true,
  interval = 3000,
}) => {
  const [[currentIndex, direction], setCurrentIndex] = useState<[number, number]>([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const prevSlide = () => {
    setCurrentIndex(([prev]) => [
      prev === 0 ? images.length - 1 : prev - 1,
      -1,
    ]);
  };

  const nextSlide = () => {
    setCurrentIndex(([prev]) => [
      prev === images.length - 1 ? 0 : prev + 1,
      1,
    ]);
  };

  // handle swipe touch
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const delta = touchStartX.current - touchEndX.current;
    if (delta > 50) nextSlide();
    else if (delta < -50) prevSlide();
  };

  useEffect(() => {
    if (autoPlay && !isPaused) {
      intervalRef.current = setInterval(nextSlide, interval);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoPlay, isPaused, interval, images.length, currentIndex]);

  // motion variants for smooth entry/exit
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div
      className="relative w-full h-56 sm:h-64 overflow-hidden rounded-md"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Project slide ${currentIndex + 1}`}
          className="absolute w-full h-full object-cover"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          whileHover={{ scale: 1.1 }}
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
            scale: { duration: 0.4, ease: "easeInOut" },
          }}
        />
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 p-1 rounded-full text-white hover:bg-black/60"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 p-1 rounded-full text-white hover:bg-black/60"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "bg-red-500 scale-110" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;