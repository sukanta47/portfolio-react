import RatingReview from './RatingReview';

const sampleReviews = [
  {
    id: 1,
    user: 'Alex Johnson',
    rating: 5,
    date: '2023-10-15',
    title: 'Absolutely love it!',
    comment: 'This product exceeded all my expectations. The quality is outstanding and it arrived sooner than expected. Will definitely purchase again!',
    verified: true
  },
  {
    id: 2,
    user: 'Sarah Miller',
    rating: 4,
    date: '2023-09-28',
    title: 'Great value for money',
    comment: 'Works exactly as described. Only giving 4 stars because the color was slightly different than shown in the pictures, but still very happy with my purchase.',
    verified: true
  },
  {
    id: 3,
    user: 'Michael Chen',
    rating: 3,
    date: '2023-08-10',
    title: 'Decent but could be better',
    comment: 'The product is okay for the price, but I noticed some minor quality issues. Customer service was helpful when I reached out though.',
    verified: false
  }
];

const summary = {
  average: 4.0,
  totalReviews: 3,
  distribution: {
    5: 1,
    4: 1,
    3: 1,
    2: 0,
    1: 0
  }
};
 const AddReviewRating = () => {

const handleAddReview = (rating: number, title: string, comment: string) => {
  console.log('New review:', { rating, title, comment });
  // Send to your backend
}
return (
  <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-8">Product Reviews</h1>
    <RatingReview 
      reviews={sampleReviews} 
      summary={summary} 
      onAddReview={handleAddReview} 
    />
  </div>
)};

export default AddReviewRating;