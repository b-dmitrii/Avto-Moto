import React from "react";
import ReviewsList from "../reviews-list/reviews-list";

const Reviews = ({ reviews }) => {
  return (
    <div className="reviews">
      <button
        href=""
        className="reviews__review-button reviews__review-button--secondary"
        type="button"
      >
        оставить отзыв
      </button>
      <ReviewsList reviews={reviews} />
    </div>
  );
};

export default Reviews;
