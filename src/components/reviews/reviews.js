import React, { useState } from "react";
import ReviewsList from "../reviews-list/reviews-list";
import Modal from "../reviews-modal/reviews-modal";
import ReviewsForm from "../review-form/review-form";

const Reviews = ({ reviews, onReviewAdd }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onFormSubmit = (data) => {
    onReviewAdd(data);
    setIsModalOpen(() => false);
  };

  return (
    <div className="reviews">
      <button
        href=""
        className="reviews__review-button reviews__review-button--secondary"
        type="button"
        onClick={() => {
          setIsModalOpen(() => true);
        }}
      >
        оставить отзыв
      </button>
      <ReviewsList reviews={reviews} />
      <Modal
        isOpen={isModalOpen}
        onCancel={() => {
          setIsModalOpen(() => false);
        }}
      >
        <ReviewsForm onSubmit={onFormSubmit} />
      </Modal>
    </div>
  );
};

export default Reviews;
