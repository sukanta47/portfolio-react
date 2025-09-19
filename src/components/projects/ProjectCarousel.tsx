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
  const [[currentIndex, direction], setCurrentIndex] = useState<
    [number, number]
  >([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  let startX = 0;

  const handleTouchStart = (e: React.TouchEvent) => {
    startX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50)
      setCurrentIndex(([prev]) => [(prev + 1) % images.length, 1]); // swipe left
    if (endX - startX > 50)
      setCurrentIndex(([prev]) => [
        (prev - 1 + images.length) % images.length,
        -1,
      ]);
  };

  const prevSlide = () => {
    setCurrentIndex(([prev]) => [
      prev === 0 ? images.length - 1 : prev - 1,
      -1,
    ]);
  };

  const nextSlide = () => {
    setCurrentIndex(([prev]) => [prev === images.length - 1 ? 0 : prev + 1, 1]);
  };

  useEffect(() => {
    if (autoPlay && !isPaused) {
      intervalRef.current = setInterval(nextSlide, interval);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoPlay, isPaused, interval, images.length]);

  return (
    <div
      className="relative w-full h-56 sm:h-64 overflow-hidden rounded-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Project image Slide ${currentIndex + 1}`}
          className="absolute w-full h-full object-cover"
          custom={direction}
          initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
            scale: { duration: 0.4, ease: "easeInOut" },
          }}
        />
      </AnimatePresence>

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

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full ${
              idx === currentIndex ? "bg-red-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
