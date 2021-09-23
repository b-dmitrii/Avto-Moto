import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';

import ReviewsList from "../reviews-list/reviews-list";
import Modal from "../reviews-modal/reviews-modal";
import ReviewsForm from "../review-form/review-form";

const Reviews = ({reviews, onReviewAdd}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onFormSubmit = (data) => {
    onReviewAdd(data);
    setIsModalOpen(() => false);
  };

  useEffect(() => {
    const body = document.querySelector(`body`);
    body.style.overflow = isModalOpen ? `hidden` : `auto`;
  }, [isModalOpen]);

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

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
  onReviewAdd: PropTypes.func
};

export default Reviews;
