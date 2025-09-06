import React, { useState } from 'react';
import { Star, StarHalf, UserCircle } from 'lucide-react';

interface Review {
  id: number;
  user: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified?: boolean;
}

interface RatingSummary {
  average: number;
  totalReviews: number;
  distribution: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
}

interface RatingReviewProps {
  reviews: Review[];
  summary: RatingSummary;
  onAddReview?: (rating: number, title: string, comment: string) => void;
}

const RatingReview: React.FC<RatingReviewProps> = ({ reviews, summary, onAddReview }) => {
  const [activeTab, setActiveTab] = useState<'reviews' | 'write'>('reviews');
  const [newReview, setNewReview] = useState({
    rating: 0,
    title: '',
    comment: '',
  });
  const [hoverRating, setHoverRating] = useState(0);

  const handleStarClick = (rating: number) => {
    setNewReview({ ...newReview, rating });
  };

  const handleStarHover = (rating: number) => {
    setHoverRating(rating);
  };

  const handleStarLeave = () => {
    setHoverRating(0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onAddReview && newReview.rating > 0 && newReview.comment) {
      onAddReview(newReview.rating, newReview.title, newReview.comment);
      setNewReview({ rating: 0, title: '', comment: '' });
      setActiveTab('reviews');
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<StarHalf key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
      } else {
        stars.push(<Star key={i} className="w-5 h-5 text-gray-300" />);
      }
    }

    return stars;
  };

  const renderInteractiveStars = () => {
    return Array(5)
      .fill(0)
      .map((_, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i} className="cursor-pointer">
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleStarClick(ratingValue)}
              className="hidden"
            />
            <Star
              className={`w-6 h-6 transition-colors duration-200 ${
                (hoverRating || newReview.rating) >= ratingValue
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              }`}
              onMouseEnter={() => handleStarHover(ratingValue)}
              onMouseLeave={handleStarLeave}
            />
          </label>
        );
      });
  };

  return (
    <div className="rating-review-container bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Rating Summary */}
        <div className="rating-summary md:w-1/3">
          <div className="text-center mb-4">
            <h2 className="text-5xl font-bold text-gray-800">
              {summary.average.toFixed(1)}
            </h2>
            <div className="flex justify-center my-2 gap-0.5">
              {renderStars(summary.average)}
            </div>
            <p className="text-gray-600">
              Based on {summary.totalReviews} reviews
            </p>
          </div>

          <div className="mt-6 space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center">
                <div className="w-10 text-sm text-gray-700">{rating} star</div>
                <div className="flex-1 mx-2 h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-yellow-400 rounded-full"
                    style={{
                      width: `${
                        (summary.distribution[rating as keyof typeof summary.distribution] /
                          summary.totalReviews) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>
                <div className="w-10 text-sm text-gray-500 text-right">
                  {summary.distribution[rating as keyof typeof summary.distribution]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="reviews-section md:w-2/3">
          <div className="flex border-b border-gray-200 mb-6">
            <button
              className={`px-4 py-2 font-medium ${
                activeTab === 'reviews'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews ({reviews.length})
            </button>
            <button
              className={`px-4 py-2 font-medium ${
                activeTab === 'write'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('write')}
            >
              Write a Review
            </button>
          </div>

          {activeTab === 'reviews' ? (
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="review-item border-b border-gray-100 pb-6">
                  <div className="flex items-start">
                    <div className="mr-4">
                      <UserCircle className="w-10 h-10 text-gray-300" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-gray-800">{review.user}</h4>
                          <div className="flex items-center mt-1">
                            <div className="flex mr-2 gap-0.5">
                              {renderStars(review.rating)}
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                        </div>
                        {review.verified && (
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                            Verified
                          </span>
                        )}
                      </div>
                      <h5 className="font-medium text-gray-900 mt-2">{review.title}</h5>
                      <p className="text-gray-600 mt-1">{review.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Your Rating</label>
                <div className="flex gap-1">
                  {renderInteractiveStars()}
                </div>
              </div>

              <div>
                <label htmlFor="review-title" className="block text-gray-700 mb-2">
                  Review Title
                </label>
                <input
                  type="text"
                  id="review-title"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Summarize your experience"
                  value={newReview.title}
                  onChange={(e) =>
                    setNewReview({ ...newReview, title: e.target.value })
                  }
                />
              </div>

              <div>
                <label htmlFor="review-comment" className="block text-gray-700 mb-2">
                  Your Review
                </label>
                <textarea
                  id="review-comment"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Share details of your experience with this product"
                  value={newReview.comment}
                  onChange={(e) =>
                    setNewReview({ ...newReview, comment: e.target.value })
                  }
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                disabled={newReview.rating === 0 || !newReview.comment}
              >
                Submit Review
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default RatingReview;