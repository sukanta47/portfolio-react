import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { folioData } from "../data";
import RatingReviewModal from "./RatingReviewModal";
import reviewsData from "../data/reviews.json";
type Review = {
  id: number;
  name: string;
  email: string;
  designation: string;
  company: string;
  location: string;
  review: string;
  rating: number;
  featured: boolean;
  sex: string;
};
const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewAll, setViewAll] = useState(false);
  const [ratingModalOpen, setRatingModalOpen] = useState(false);
  const [featuredReviews, setFeaturedReviews] = useState<Review[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const _featuredReviews: Review[] = reviewsData
      .filter((r) => r.featured)
      .slice(0, 4);
    setFeaturedReviews(_featuredReviews);
    localStorage.setItem("reviews", JSON.stringify(reviewsData));
  }, []);

  const handleSubmit = (data) => {
    const existing = JSON.parse(localStorage.getItem("reviews") || "[]");
    const newReview = { ...data, id: Date.now(), featured: false };
    const updated = [...existing, newReview];
    localStorage.setItem("reviews", JSON.stringify(updated));
    setRatingModalOpen(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuredReviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === featuredReviews.length - 1 ? 0 : prevIndex + 1
    );
  };
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(handleNext, 3000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, featuredReviews.length]);

  const renderReviews = () => {
    if (!featuredReviews.length) {
      return (
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-dark-700 rounded-xl p-8 shadow-lg"
        >
          No review found
        </motion.div>
      );
    }

    if (viewAll) {
      return (
        <div className="flex flex-col">
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setViewAll(false)}
              className="text-primary-500 hover:underline"
               aria-label="Hide reviews" aria-description="hide all reviews button"
            >
              Hide reviews
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {reviewsData.map((review) => (
              <div
                className="bg-white dark:bg-dark-700 p-4 rounded shadow"
                key={review.id}
              >
                <div className="flex gap-2 mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-500"
                      fill="currentColor"
                    />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  {review.review}
                </p>
                <strong className="font-bold mt-2">{review.name}</strong>
                <span className="text-sm text-gray-500">
                  {review.designation}, {review.company}
                </span>
                <div className="text-sm text-gray-500">{review.location}</div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="flex flex-col justify-center items-center mt-8 gap-4 w-full">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-dark-700 rounded-xl p-8 shadow-lg lg:h-[19rem] overflow-y-none lg:w-11/12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {featuredReviews.length - 1 === currentIndex ? (
            <div className="flex flex-col items-center justify-center text-center gap-6 relative h-[208px]">
              <div className="absolute top-0 left-0 transform -translate-x-6 -translate-y-6 text-primary-500 opacity-20">
                <Quote className="h-20 w-20" />
              </div>
              <button
                onClick={() => setViewAll(true)}
                className="text-primary-500 hover:underline"
                aria-label="show all reviews" aria-description="show all reviews button"
              >
                Show all reviews
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center text-center gap-6 relative">
              <div className="absolute top-0 left-0 transform -translate-x-6 -translate-y-6 text-primary-500 opacity-20">
                <Quote className="h-20 w-20" />
              </div>
              <img
                src={
                  reviewsData[currentIndex].sex === "m"
                    ? "/avatar/male-avatar.jpg"
                    : "/avatar/female-avatar-2.jpg"
                }
                alt={`${featuredReviews[currentIndex].name} image`}
                className="w-20 h-20 rounded-full object-cover border-4 border-white dark:border-dark-600 shadow-md"
              />
              <p className="text-base text-gray-700 dark:text-gray-300 relative z-10">
                {featuredReviews[currentIndex].review}
              </p>
              <div>
                <h4 className="font-bold text-xl text-gray-900 dark:text-white">
                  {featuredReviews[currentIndex].name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {featuredReviews[currentIndex].designation},{" "}
                  {featuredReviews[currentIndex].company}
                </p>
              </div>
            </div>
          )}
        </motion.div>
        <div className="flex items-center justify-center gap-3 mt-3">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-white dark:bg-dark-700 shadow-md hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors duration-300"
            aria-label="Previous testimonial"
            aria-description="click to see previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          </button>

          <div className="flex items-center gap-2">
            {featuredReviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-primary-500 w-6"
                    : "bg-gray-300 dark:bg-dark-600 hover:bg-gray-400 dark:hover:bg-dark-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-description={`click to see testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-white dark:bg-dark-700 shadow-md hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors duration-300"
            aria-label="Next testimonial"
            aria-description="click to see next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="section bg-gray-50 dark:bg-dark-900 py-5 w-full">
      <div className="container-custom w-full">
        <div className="text-center mb-8">
          <motion.h2
            className="heading-lg text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Client Testimonials
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-primary-500 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          ></motion.div>
        </div>
        {renderReviews()}
        <RatingReviewModal
          open={ratingModalOpen}
          onClose={() => setRatingModalOpen(false)}
          onSubmit={(data) => handleSubmit(data)}
        />
      </div>
    </section>
  );
};

export default Testimonials;
